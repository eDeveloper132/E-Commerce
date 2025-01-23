import Image from "next/image";

export default function Products_Card({
    name,
    description,
    price,
    stock,
    category,
    tag,
    rating,
    image,
}: {    
    name: string;
    description: string;
    price: number;
    stock?: number;
    category?: string;
    tag?: string;
    rating?: number;
    image?: string; // Changed to string to handle image URLs
}) {
    return (
        <div className="h-[310px] w-[200px] rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl relative group">
            {/* Product Image */}
            <div>
                <Image 
                    src={image ? image : 'https://678a7733dd587da7ac2a4878.mockapi.io/products/Products/default-image.jpg'} 
                    alt={name} 
                    width={200} 
                    height={200}
                    className="w-full h-[150px] object-cover group-hover:opacity-80 transition-opacity duration-200" 
                />
                {/* Add to Cart Button (hover effect) */}
                <div className="absolute inset-0 flex flex-col justify-center gap-3 items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-center px-2">
                    <p className="text-lg font-bold text-cyan-600">Price: ${price.toFixed(2)}</p>
                    {stock && stock > 0 ? (
                        <p className="text-sm text-green-500 font-medium">In Stock: {stock} items</p>
                    ) : (
                        <p className="text-sm text-red-500 font-medium">Out of Stock</p>
                    )}
                </div>

                {/* Category & Tag */}
                <div className="text-sm text-cyan-400 mb-10">
                    {category && <p>Category: <span className="font-medium">{category}</span></p>}
                    {tag && <p>Tag: <span className="font-medium">{tag}</span></p>}
                    {rating && <p>Rating: <span className="font-medium">{rating} / 5</span></p>}
                </div>

                {/* View Details Button */}
                <div>
                    <button type="button" className="p-2 button bg-green-700 text-white rounded-sm font-semibold hover:bg-gray-700 transition-colors duration-300">
                        View Details
                    </button>
                </div>
                    <button type="button" className="text-white button bg-cyan-600 px-4 p-2 rounded-sm font-semibold transform hover:scale-105 transition-transform duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div>
                <span className="flex justify-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
                </span>
                <p className="text-sm text-gray-500 mb-4 px-3 text-justify text-wrap">{description}</p>
            </div>
        </div>
    );
}
