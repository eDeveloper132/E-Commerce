"use client";
import React from "react";
import Featured_Card from "./Featured_Card"; // Adjust import path as needed
import { Product } from "../../../public/types/product";

// Construct Sanity image URL from _ref string
function getSanityImageUrl(ref?: string): string {
  if (!ref) return "";
  const parts = ref.split("-");
  if (parts.length < 4) return "";
  const [, assetId, dims, fmt] = parts;
  return `https://cdn.sanity.io/images/onmb9fp6/production/${assetId}-${dims}.${fmt}`;
}

interface Props {
  productsData: Product[] | null | undefined;
}

export default function ProductGrid({ productsData }: Props) {
  if (!productsData || productsData.length === 0) {
    return <p className="text-center py-20">No products available.</p>;
  }

  // Group products by category
  const grouped = productsData.reduce<Record<string, Product[]>>((acc, product) => {
    const cat = product.category?.trim() || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center my-8 sm:my-16 md:my-24 lg:my-32 space-y-16">
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="w-full">
          {/* Category Heading */}
          <div className="flex justify-center my-8 md:my-16">
            <h1 className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[50px] font-bold text-[#1A0B5B]">
              {category}
            </h1>
          </div>
          {/* Grid for this category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-10">
            {items.map((product) => {
              const ref = product.image?.asset?._ref;
              const imageUrl = getSanityImageUrl(ref);

              // Basic null-checking
              if (!product.name || product.price == null || !imageUrl) {
                return null;
              }

              return (
                <Featured_Card
                  key={product._id}
                  name={product.name}
                  description={product.description ?? ""}
                  price={product.price}
                  image={imageUrl}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}