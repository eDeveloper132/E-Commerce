'use client';

import { useState, useMemo } from 'react';
import { WatchProduct } from '../../../public/types/watches';
import Image from 'next/image';
import Link from 'next/link';
import { getSanityImageUrl } from '../../../lib/sanityHelpers';

type FilterState = {
  brand: string;
  movementType: string;
  strapMaterial: string;
  caseMaterial: string;
  dialColor: string;
  waterResistance: string;
  condition: string;
  priceMin: number;
  priceMax: number;
};

export default function WatchSearchWithFilters({ watches }: { watches: WatchProduct[] }) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    brand: '',
    movementType: '',
    strapMaterial: '',
    caseMaterial: '',
    dialColor: '',
    waterResistance: '',
    condition: '',
    priceMin: 0,
    priceMax: 999999,
  });

  // Extract unique filter options from data
  const allOptions = useMemo(() => {
    const getUnique = (key: keyof WatchProduct) =>
      Array.from(new Set(watches.map((w) => w[key]).filter(Boolean))).sort();

    return {
      brands: getUnique('brand') as string[],
      movementTypes: Array.from(
        new Set(watches.map((w) => w.movementType).filter(Boolean))
      ) as string[],
      strapMaterials: getUnique('strapMaterial') as string[],
      caseMaterials: getUnique('caseMaterial') as string[],
      dialColors: getUnique('dialColor') as string[],
      waterResistances: getUnique('waterResistance') as string[],
      conditions: Array.from(
        new Set(watches.map((w) => w.condition).filter(Boolean))
      ) as string[],
    };
  }, [watches]);

  const handleChange = (field: keyof FilterState, value: string | number) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredWatches = watches.filter((watch) => {
    const lowerQuery = query.toLowerCase();

    const matchesQuery =
      watch.name.toLowerCase().includes(lowerQuery) ||
      watch.brand.toLowerCase().includes(lowerQuery) ||
      watch.model?.toLowerCase().includes(lowerQuery) ||
      watch.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery));

    const matchesFilters =
      (!filters.brand || watch.brand === filters.brand) &&
      (!filters.movementType || watch.movementType === filters.movementType) &&
      (!filters.strapMaterial || watch.strapMaterial === filters.strapMaterial) &&
      (!filters.caseMaterial || watch.caseMaterial === filters.caseMaterial) &&
      (!filters.dialColor || watch.dialColor === filters.dialColor) &&
      (!filters.waterResistance || watch.waterResistance === filters.waterResistance) &&
      (!filters.condition || watch.condition === filters.condition) &&
      watch.price >= filters.priceMin &&
      watch.price <= filters.priceMax;

    return matchesQuery && matchesFilters;
  });

  return (
    <div className="max-w-7xl mx-auto p-6  text-black">
      <h1 className="text-2xl font-semibold mb-4">Search & Filter Watches</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search watches..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-sm"
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
          value={filters.movementType}
          onChange={(e) => handleChange('movementType', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Movement Types</option>
          {allOptions.movementTypes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select
          value={filters.strapMaterial}
          onChange={(e) => handleChange('strapMaterial', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Strap Materials</option>
          {allOptions.strapMaterials.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select
          value={filters.caseMaterial}
          onChange={(e) => handleChange('caseMaterial', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Case Materials</option>
          {allOptions.caseMaterials.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={filters.dialColor}
          onChange={(e) => handleChange('dialColor', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Dial Colors</option>
          {allOptions.dialColors.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select
          value={filters.waterResistance}
          onChange={(e) => handleChange('waterResistance', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Water Resistances</option>
          {allOptions.waterResistances.map((w) => (
            <option key={w} value={w}>{w}</option>
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

        <div className="flex gap-2">
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
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWatches.length > 0 ? (
          filteredWatches.map((watch) => {
            const imageRef = watch.images?.[0]?.asset?._ref;
            const imageUrl = imageRef ? getSanityImageUrl(imageRef) : null;

            return (
              <div key={watch._id} className="border rounded-lg p-3 shadow hover:shadow-md transition">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={watch.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h2 className="text-lg font-semibold mt-2">{watch.name}</h2>
                <p className="text-sm text-gray-600">{watch.brand}</p>
                <p className="text-sm text-gray-500">{watch.price.toFixed(2)} PKR</p>
                <Link href={`/Product_Main/${watch._id}`}>
                  <button className="bg-purple-600 text-white px-3 py-1 mt-2 rounded hover:bg-purple-700 text-sm">
                    View Details
                  </button>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No watches match the selected filters.</p>
        )}
      </div>
    </div>
  );
}
