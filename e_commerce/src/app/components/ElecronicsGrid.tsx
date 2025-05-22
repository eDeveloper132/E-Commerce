"use client";
import React, { FC } from "react";
import { ElectronicsProduct } from "../../../public/types/electronics";
import ShopCard from "./Shop_Card";
import { getSanityImageUrl } from "../../../lib/sanityHelpers";

interface ProductGridProps {
  productsData?: ElectronicsProduct[] | null;
}

const ProductGrid: FC<ProductGridProps> = ({ productsData }) => {
  if (!productsData || productsData.length === 0) {
    return (
      <p className="text-center py-20 text-black">
        No products available.
      </p>
    );
  }

  return (
    <>
      {productsData.map((product) => {
        const ref = product.images?.[0]?.asset?._ref;
        const imageUrl = getSanityImageUrl(ref);

        if (!product.name || product.price == null || !imageUrl) {
          return null;
        }

        return (
          <ShopCard
            key={product._id}
            id={product._id}
            image={imageUrl}
            title={product.name}
            originalPrice={product.price}
          />
        );
      })}
    </>
  );
};

export default ProductGrid;
