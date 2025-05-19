import Image from "next/image";
import { FC } from "react";

// Construct Sanity image URL from _ref string
function getSanityImageUrl(ref: string): string {
  if (!ref) return "";
  // Sanity asset refs look like: image-<assetId>-<width>x<height>-<format>
  const [, assetId, dims, fmt] = ref.split("-");
  return `https://cdn.sanity.io/images/onmb9fp6/production/${assetId}-${dims}.${fmt}`;
}

interface ProductsCardProps {
  name: string;
  description: string;
  price: number;
  stock?: number;
  category?: string;
  tag?: string;
  rating?: number;
  image: string; // Sanity _ref string, e.g. "image-abc123-800x600-jpg"
}

const Products_Card: FC<ProductsCardProps> = ({
  name,
  description,
  price,
  stock,
  category,
  tag,
  rating,
  image,
}) => {
  const imageUrl = getSanityImageUrl(image);

  return (
    <div className="h-[310px] w-[200px] rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl relative group">
      {/* Product Image */}
      <div>
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="w-full h-[150px] object-cover group-hover:opacity-80 transition-opacity duration-200"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center gap-3 items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-between items-center px-2 w-full">
            <p className="text-lg font-bold text-cyan-600">${price.toFixed(2)}</p>
            {stock && stock > 0 ? (
              <p className="text-sm text-green-500 font-medium">
                In Stock: {stock}
              </p>
            ) : (
              <p className="text-sm text-red-500 font-medium">Out of Stock</p>
            )}
          </div>

          <div className="text-sm text-cyan-400 mb-4 text-center">
            {category && (
              <p>
                Category: <span className="font-medium">{category}</span>
              </p>
            )}
            {tag && (
              <p>
                Tag: <span className="font-medium">{tag}</span>
              </p>
            )}
            {rating !== undefined && (
              <p>
                Rating: <span className="font-medium">{rating} / 5</span>
              </p>
            )}
          </div>

          <button
            type="button"
            className="p-2 bg-green-700 text-white rounded-sm font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            View Details
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-cyan-600 text-white rounded-sm font-semibold transform hover:scale-105 transition-transform duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          {name}
        </h2>
        <p className="text-sm text-gray-500 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Products_Card;
