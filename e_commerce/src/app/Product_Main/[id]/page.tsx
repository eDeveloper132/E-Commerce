import Image from "next/image";
import AddToCartButton from "../../components/AddToCartButton";
import { getProductById } from "../../../../lib/getProductById";
import { getSanityFileUrl, getSanityImageUrl } from "../../../../lib/sanityHelpers";
import { isElectronics, isWatch, AnyProduct } from "../../../../public/types/catalog";
import { ProfileModel } from "../../../../schema/schemas";

// import IProfile from "../../../../schema/interfaces/IProfile";
// import { auth } from "@clerk/nextjs/server";

export const dynamic = 'force-dynamic'; // keep runtime rendering

export default async function Product_Main({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id) as AnyProduct | null;
  if (!product) {
    return <p className="text-center py-20 text-gray-500">Product not found.</p>;
  }
  console.log((await ProfileModel.find()).map((p) => p.products?.map((p) => p.product_id)));
  // const { userId } = await auth();
  // Build gallery URLs
  const imageUrls = product.images?.map((img) =>
    getSanityImageUrl(img.asset._ref)
  ) ?? [];
  // const comments = await ProfileModel.aggregate([
  //   {
  //     $match: {
  //       "products.product_id": id,
  //       "products.comment": { $exists: true, $ne: null }
  //     }
  //   },
  //   {
  //     $unwind: "$products"
  //   },
  //   {
  //     $match: {
  //       "products.product_id": id,
  //       "products.comment": { $exists: true, $ne: null }
  //     }
  //   },
  //   {
  //     $project: {
  //       _id: 0,
  //       username: 1,
  //       comment: "$products.comment"
  //     }
  //   }
  // ]);
  const mainImage = imageUrls.at(-1) ?? '';
  const thumbs = imageUrls.slice(0, 3);

  // Optional video URL
  const videoUrl = product.video
    ? getSanityFileUrl(product.video.asset._ref)
    : '';

  return (
    <>
      <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-2xl font-semibold text-black">
            Product Details
          </div>
        </div>
      </div>
    <div className="bg-gray-50 min-h-screen w-full py-8 text-black my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gallery Section */}
          <div className="space-y-6">
            <Gallery main={mainImage} thumbs={thumbs} />
            {videoUrl && (
              <div className="flex justify-center">
                <video
                  controls
                  className="w-full max-w-lg rounded-lg shadow-md"
                >
                  <source
                    src={videoUrl}
                    type={`video/${videoUrl.split('.').pop()}`}
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">★</span>
              <span className="text-gray-600">{product.rating}</span>
            </div>
            <p className="text-2xl text-gray-700">
              Price: <span className="text-green-600 font-semibold">{product.price} PKR</span>
            </p>
            <p className="text-gray-600">Stock: {product.stock}</p>
            <p className="text-sm text-gray-500">
              {product.description ?? 'No description available.'}
            </p>

            {/* Type-specific info */}
            {isElectronics(product) ? (
              <ElectronicsSpecs product={product} />
            ) : isWatch(product) ? (
              <WatchSpecs product={product} />
            ) : (
              <OtherProductSpecs product={product} />
            )}

            <AddToCartButton
              id={product._id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              imgs={mainImage}
            />

{/* <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
                {comments.length > 0 ? (
                  <div className="space-y-4">
                    {comments.map((c, i) => (
                      <div key={i} className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-semibold">{c.username || 'Anonymous'}</p>
                        <p>{c.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet.</p>
                )}
              </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

/** A simple thumbnail + main image gallery */
function Gallery({
  main,
  thumbs,
}: {
  main: string;
  thumbs: string[];
}) {
  return (
    <div className="space-y-4">
      <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={main}
          fill
          alt="Main product"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex justify-center space-x-2">
        {thumbs.map((src, i) => (
          <div
            key={i}
            className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <Image
              src={src}
              width={96}
              height={96}
              alt={`Thumbnail ${i + 1}`}
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Renders electronics-only specifications */
function ElectronicsSpecs({
  product,
}: {
  product: import('../../../../public/types/catalog').ElectronicsProduct;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Product Details</h2>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Model:</strong> {product.model}</p>
      <p><strong>Release Date:</strong> {product.releaseDate ? new Date(product.releaseDate).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Warranty:</strong> {product.warranty}</p>
      <p><strong>Condition:</strong> {product.condition}</p>
      <h3 className="font-medium text-gray-700">Specifications:</h3>
      <ul className="list-disc ml-5 text-gray-600">
        {product.specifications?.map((s) => (
          <li key={s.specName}>
            {s.specName}: {s.specValue}
          </li>
        )) ?? <li>No specifications available.</li>}
      </ul>
      <h3 className="font-medium text-gray-700">Features:</h3>
      <ul className="list-disc ml-5 text-gray-600">
        {product.features?.map((f, i) => (
          <li key={i}>{f}</li>
        )) ?? <li>No features available.</li>}
      </ul>
    </div>
  );
}

/** Renders watch-specific specifications */
function WatchSpecs({
  product,
}: {
  product: import('../../../../public/types/catalog').WatchProduct;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Watch Details</h2>
      <p><strong>Brand:</strong> {product.brand}</p>
      {product.model && <p><strong>Model:</strong> {product.model}</p>}
      {product.movementType && <p><strong>Movement Type:</strong> {product.movementType}</p>}
      {product.caseMaterial && <p><strong>Case Material:</strong> {product.caseMaterial}</p>}
      {product.strapMaterial && <p><strong>Strap Material:</strong> {product.strapMaterial}</p>}
      {product.dialColor && <p><strong>Dial Color:</strong> {product.dialColor}</p>}
      {product.waterResistance && <p><strong>Water Resistance:</strong> {product.waterResistance}</p>}
      {product.powerReserve && <p><strong>Power Reserve:</strong> {product.powerReserve}</p>}
      {product.condition && <p><strong>Condition:</strong> {product.condition}</p>}
      {product.warranty && <p><strong>Warranty:</strong> {product.warranty}</p>}
      {product.dimensions && <p><strong>Dimensions:</strong> {product.dimensions}</p>}
      {product.weight && <p><strong>Weight:</strong> {product.weight}</p>}
      {product.releaseDate && (
        <p><strong>Release Date:</strong> {new Date(product.releaseDate).toLocaleDateString()}</p>
      )}
      {product.complications?.length ? (
        <>
          <h3 className="font-medium text-gray-700">Complications:</h3>
          <ul className="list-disc ml-5 text-gray-600">
            {product.complications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

/** Fallback for other product types */
function OtherProductSpecs({
  product,
}: {
  product: AnyProduct;
}) {
  const hasColor = 'color' in product && typeof product.color === 'string';
  const hasFeatures =
    'features' in product &&
    Array.isArray(product.features) &&
    product.features.length > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Additional Details</h2>
      {'brand' in product && typeof product.brand === 'string' && (
        <p><strong>Brand:</strong> {product.brand}</p>
      )}
      {'model' in product && typeof product.model === 'string' && (
        <p><strong>Model:</strong> {product.model}</p>
      )}
      {'warranty' in product && typeof product.warranty === 'string' && (
        <p><strong>Warranty:</strong> {product.warranty}</p>
      )}
      {'condition' in product && typeof product.condition === 'string' && (
        <p><strong>Condition:</strong> {product.condition}</p>
      )}
      {'releaseDate' in product &&
        typeof product.releaseDate === 'string' && (
          <p>
            <strong>Release Date:</strong> {new Date(product.releaseDate).toLocaleDateString()}
          </p>
        )}
      {hasColor && <p><strong>Color:</strong> {product.color as string}</p>}
      {'dimensions' in product && typeof product.dimensions === 'string' && (
        <p><strong>Dimensions:</strong> {product.dimensions}</p>
      )}
      {'weight' in product && typeof product.weight === 'string' && (
        <p><strong>Weight:</strong> {product.weight}</p>
      )}
      {hasFeatures && (
        <>
          <h3 className="font-medium text-gray-700">Features:</h3>
          <ul className="list-disc ml-5 text-gray-600">
            {(product.features as string[]).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}