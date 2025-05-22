"use client";
import React, { FC } from "react";
import { WatchProduct } from "../../../public/types/watches";
import { getSanityImageUrl } from "../../../lib/sanityHelpers";
import Shop_List_Card from "./Shop_List_Card";

interface ProductGridProps {
  productsData?: WatchProduct[] | null;
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
            <Shop_List_Card
            id={product._id}
            image={imageUrl}
            title={product.name}
            originalPrice={product.price}
            paragraph={product.description as string}
            discountedPrice={product.price}
            key={product._id}
            width="lg:w-[900px]"
            />
        );
      })}
    </>
  );
};

export default ProductGrid;
