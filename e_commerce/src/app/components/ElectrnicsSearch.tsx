'use client';

import { useMemo, useState } from 'react';
import { ElectronicsProduct } from '../../../public/types/electronics';
import Image from 'next/image';
import { getSanityImageUrl } from '../../../lib/sanityHelpers';
import Link from 'next/link';

export default function ElectronicsSearchWithFilters({ products }: { products: ElectronicsProduct[] }) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    category: '',
    condition: '',
    color: '',
    priceMin: 0,
    priceMax: 999999,
  });

  const allOptions = useMemo(() => {
    const getUnique = (key: keyof ElectronicsProduct) =>
      Array.from(new Set(products.map((p) => p[key]).filter(Boolean))).sort();

    return {
      brands: getUnique('brand') as string[],
      categories: getUnique('category') as string[],
      conditions: Array.from(new Set(products.map((p) => p.condition).filter(Boolean))) as string[],
      colors: getUnique('color') as string[],
    };
  }, [products]);

  const handleChange = (field: keyof typeof filters, value: string | number) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredProducts = products.filter((product) => {
    const lowerQuery = query.toLowerCase();

    const matchesQuery =
      product.name.toLowerCase().includes(lowerQuery) ||
      product.brand?.toLowerCase().includes(lowerQuery) ||
      product.model?.toLowerCase().includes(lowerQuery) ||
      product.category?.toLowerCase().includes(lowerQuery) ||
      product.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery));

    const matchesFilters =
      (!filters.brand || product.brand === filters.brand) &&
      (!filters.category || product.category === filters.category) &&
      (!filters.condition || product.condition === filters.condition) &&
      (!filters.color || product.color === filters.color) &&
      product.price >= filters.priceMin &&
      product.price <= filters.priceMax;

    return matchesQuery && matchesFilters;
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-4 text-black">
      <h1 className="text-2xl font-semibold mb-4">Search & Filter Electronics</h1>

      <input
        type="text"
        placeholder="Search for electronics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all mb-4"
      />

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <select
          value={filters.brand}
          onChange={(e) => handleChange('brand', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Brands</option>
          {allOptions.brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <select
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {allOptions.categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={filters.condition}
          onChange={(e) => handleChange('condition', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Conditions</option>
          {allOptions.conditions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={filters.color}
          onChange={(e) => handleChange('color', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Colors</option>
          {allOptions.colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <div className="flex gap-2 col-span-2 md:col-span-1">
          <input
            type="number"
            placeholder="Min Price"
            value={filters.priceMin}
            onChange={(e) => handleChange('priceMin', Number(e.target.value))}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filters.priceMax}
            onChange={(e) => handleChange('priceMax', Number(e.target.value))}
            className="w-1/2 p-2 border rounded"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const imageRef = product.images?.[0]?.asset?._ref;
            const imageUrl = imageRef ? getSanityImageUrl(imageRef) : null;

            return (
              <div
                key={product._id}
                className="border rounded-lg p-3 shadow-sm hover:shadow-md transition bg-white"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h2 className="text-lg font-semibold mt-2 text-black">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.price.toFixed(2)} PKR</p>
                <Link href={`./Product_Main/${product._id}`}>
                  <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded-sm text-sm hover:bg-blue-600 font-[Josefin Sans]">
                    View Details
                  </button>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 col-span-full">No electronics found matching the filters.</p>
        )}
      </div>
    </div>
  );
}
