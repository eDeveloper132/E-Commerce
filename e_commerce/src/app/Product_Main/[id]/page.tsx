import Image from "next/image";
import { fetchProducts } from "@/app/components/data_source";
import { Product } from "../../../../public/types/product";
import AddToCartButton from "../../components/AddToCartButton";
export const dynamic = 'force-dynamic'; // keep runtime rendering

// Helpers...
function getSanityImageUrl(ref: string): string {
  if (!ref) return '';
  const [, imageId, dims, fmt] = ref.split('-');
  return `https://cdn.sanity.io/images/onmb9fp6/production/${imageId}-${dims}.${fmt}`;
}
function getSanityVideoUrl(ref?: string|null): string {
  if (!ref) return '';
  const parts = ref.split("-");
  if (parts[0] !== "file") return "";
  const vid = parts[1], fmt = parts.at(-1);
  return `https://cdn.sanity.io/files/onmb9fp6/production/${vid}.${fmt}`;
}

async function getProductById(id: string): Promise<Product|null> {
  const products = await fetchProducts();
  return products.find(p => p._id === id) || null;
}

export default async function Product_Main({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return <p>Product not found</p>;

  const images = product.images.map(i => getSanityImageUrl(i.asset._ref));
  const mainImage = images.at(-1) || '';
  const thumbImages = images.slice(0, 3);

  const videoRef = product.video?.asset._ref;
  const videoUrl = getSanityVideoUrl(videoRef);

  return (
    <>
    <div className="bg-white">
      {/* Desktop gallery */}
      <div className="hidden lg:flex justify-center bg-white">
        <div className="w-[550px] h-[510px] shadow-lg my-28 p-2">
          <div className="flex space-x-10">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              {thumbImages.map((src, idx) => (
                <div key={idx} className="overflow-hidden rounded group">
                  <Image
                    src={src}
                    width={151}
                    height={155}
                    alt={`thumb-${idx}`}
                    className="transform transition-transform duration-300 group-hover:scale-110 w-[151px] h-[155px]"
                  />
                </div>
              ))}
            </div>

            {/* Main image with extra zoom */}
            <div className="relative w-[375px] h-[487px] overflow-hidden group rounded">
              <Image
                src={mainImage}
                fill
                alt="main zoom image"
                className="
                  object-cover
                  transform
                  transition-transform
                  duration-500
                  group-hover:scale-150
                  group-hover:origin-center
                  w-[375px] h-[487px]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile gallery (same zoom if you want) */}
      <div className="flex lg:hidden justify-center bg-white">
        <div className="h-[510px] shadow-lg my-28 flex gap-3 p-2">
          <div className="flex flex-col gap-2">
            {thumbImages.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded group">
                <Image
                  src={src}
                  width={151}
                  height={155}
                  alt={`thumb-${idx}`}
                  className="transform transition-transform duration-300 group-hover:scale-110 w-[151px] h-[155px]"
                />
              </div>
            ))}
          </div>
          <div className="relative w-[375px] h-[487px] overflow-hidden group rounded">
            <Image
              src={mainImage}
              fill
              alt="main zoom image"
              className="
                object-cover
                transform
                transition-transform
                duration-500
                group-hover:scale-150
                group-hover:origin-center
                w-[375px] h-[487px]
              "
            />
          </div>
        </div>
      </div>

      {/* Video Section */}
      {videoUrl ? (
        <div className="flex justify-center my-10">
          <video controls className="w-[550px] h-[300px]" width={550}>
            <source src={videoUrl} type={`video/${videoUrl.split('.').pop()}`} />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p className="text-center text-gray-500">No video available for this product.</p>
      )}
      <div className="flex justify-center mb-10">
        <div className="hidden lg:flex xl:flex 2xl:flex w-[550px] text-black text-2xl font-bold flex-col gap-3 px-1">
          Price: {product.price}PKR, Stock: {product.stock}
          <p>Name: {product.name}</p>
          <p>Rating: {product.rating}</p>
          <p>Description:</p>
          <p className="text-black text-sm font-medium px-6 text-justify">{product.description || "No description available"}</p>
          <AddToCartButton name={product.name} price={product.price} stock={product.stock} imgs={mainImage}/>
        </div>
        <div className="flex lg:hidden xl:hidden justify-center 2xl:hidden w-[550px]">
          <div className="flex font-bold flex-col gap-3 text-black text-2xl">
            Price: {product.price}PKR, Stock: {product.stock}
            <p>Name: {product.name}</p>
            <p>Rating: {product.rating}</p>
            <p>Description:</p>
            <p className="text-black text-sm font-medium px-6 text-justify">{product.description || "No description available"}</p>
            <AddToCartButton name={product.name} price={product.price} stock={product.stock} imgs={mainImage}/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
