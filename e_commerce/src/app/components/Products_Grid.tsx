"use client";
import React, { useState } from "react";
import Featured_Card from "./Featured_Card"; // Adjust the import path as needed
import { urlFor } from "@/sanity/lib/image";

interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
  productsData: IProduct[];
}

const ProductGrid: React.FC<Props> = ({ productsData }) => {
  const [visibleCards, setVisibleCards] = useState(8); // State to track how many cards are visible

  // Function to load more cards
  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 8);
  };

  return (
    <div className="flex flex-col items-center my-32">
      {/* Grid container */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-24">
        {productsData.slice(0, visibleCards).map((product: IProduct) => {
          // Check if product properties match the expected types
          if (
            typeof product.name === "string" &&
            typeof product.description === "string" &&
            typeof product.price === "number"
          ) {
            // Resolving the image URL using the `urlFor` function
            const imageUrl = product.image ? urlFor(product.image).url() : "";
            return (
              <div key={product._id} className="w-[200px] h-[300px]">
                <Featured_Card
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={imageUrl} // passing the resolved image URL directly
                />
              </div>
            );
          }
          return null; // Don't render the card if type checks fail
        })}
      </div>

      {/* Show "More" button if there are more cards to load */}
      {visibleCards < productsData.length && (
        <div className="flex justify-center w-full mt-32">
          <button
            onClick={loadMoreCards}
            className="bg-[#2F1AC4] text-white px-6 py-2 rounded-md hover:bg-[#1A0F6B] transition-colors duration-300"
          >
            More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;