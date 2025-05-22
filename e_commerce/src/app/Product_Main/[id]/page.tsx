import Image from "next/image";
import AddToCartButton from "../../components/AddToCartButton";
import { getProductById } from "../../../../lib/getProductById";
import { getSanityFileUrl, getSanityImageUrl } from "../../../../lib/sanityHelpers";
import { isElectronics, isWatch, AnyProduct } from "../../../../public/types/catalog";

export const dynamic = 'force-dynamic'; // keep runtime rendering

export default async function Product_Main({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id) as AnyProduct | null;
  if (!product) {
    return <p className="text-center py-20">Product not found.</p>
  }
console.log('Product video:', product.video);
console.log('Video reference:', product.video?.asset?._ref);

  // Build gallery URLs
  const imageUrls = product.images?.map((img) =>
    getSanityImageUrl(img.asset._ref)
  ) ?? [];
  const mainImage = imageUrls.at(-1) ?? '';
  const thumbs = imageUrls.slice(0, 3);

  // Optional video URL
  const videoUrl = product.video
    ? getSanityFileUrl(product.video.asset._ref)
    : '';
console.log('Video URL:', videoUrl);
  return (
    <div className="bg-white">
      {/* Gallery */}
      <Gallery main={mainImage} thumbs={thumbs} />

      {/* Video (if any) */}
      {videoUrl ? (
        <div className="flex justify-center my-10">
          <video controls className="w-[550px] h-[300px]">
            <source
              src={videoUrl}
              type={`video/${videoUrl.split('.').pop()}`}
            />
            Your browser does not support the video tag.
          </video>
        </div>
        
      ) : (
        <p className="text-center text-gray-500">No video available.</p>
      )}

      {/* Core details */}
      <div className="max-w-xl mx-auto my-10 px-4 space-y-4 text-black">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl">
          Price: <strong>{product.price} PKR</strong>
        </p>
        <p>Stock: {product.stock}</p>
        <p>Rating: {product.rating} ★</p>
        <p className="text-sm text-gray-700">
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
          name={product.name}
          price={product.price}
          stock={product.stock}
          imgs={mainImage}
        />
      </div>
    </div>
  )
}

/** A simple thumbnail + main image gallery */
function Gallery({
  main,
  thumbs,
}: {
  main: string
  thumbs: string[]
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 my-8">
      <div className="flex flex-col gap-2">
        {thumbs.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg group">
            <Image
              src={src}
              width={151}
              height={155}
              alt={`Thumbnail ${i + 1}`}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <div className="relative w-[375px] h-[487px] overflow-hidden rounded-lg group">
        <Image
          src={main}
          fill
          alt="Main product"
          className="object-cover group-hover:scale-150 transition-transform duration-500"
        />
      </div>
    </div>
  )
}

/** Renders electronics-only specifications */
function ElectronicsSpecs({
  product,
}: {
  product: import('../../../../public/types/catalog').ElectronicsProduct
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Details</h2>
      <p>Brand: {product.brand}</p>
      <p>Model: {product.model}</p>
      <p>Release Date: {product.releaseDate ? new Date(product.releaseDate).toLocaleDateString() : 'N/A'}</p>
      <p>Warranty: {product.warranty}</p>
      <p>Condition: {product.condition}</p>
      <h3 className="font-medium">Specifications:</h3>
      <ul className="list-disc ml-5">
        {product.specifications?.map((s) => (
          <li key={s.specName}>
            {s.specName}: {s.specValue}
          </li>
        )) ?? <li>No specifications available.</li>}
      </ul>
      <h3 className="font-medium">Features:</h3>
      <ul className="list-disc ml-5">
        {product.features?.map((f, i) => (
          <li key={i}>{f}</li>
        )) ?? <li>No features available.</li>}
      </ul>
    </div>
  )
}

/** Renders watch-specific specifications */
function WatchSpecs({
  product,
}: {
  product: import('../../../../public/types/catalog').WatchProduct
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Watch Details</h2>
      <p>Brand: {product.brand}</p>
      {product.model && <p>Model: {product.model}</p>}
      {product.movementType && <p>Movement Type: {product.movementType}</p>}
      {product.caseMaterial && <p>Case Material: {product.caseMaterial}</p>}
      {product.strapMaterial && <p>Strap Material: {product.strapMaterial}</p>}
      {product.dialColor && <p>Dial Color: {product.dialColor}</p>}
      {product.waterResistance && <p>Water Resistance: {product.waterResistance}</p>}
      {product.powerReserve && <p>Power Reserve: {product.powerReserve}</p>}
      {product.condition && <p>Condition: {product.condition}</p>}
      {product.warranty && <p>Warranty: {product.warranty}</p>}
      {product.dimensions && <p>Dimensions: {product.dimensions}</p>}
      {product.weight && <p>Weight: {product.weight}</p>}
      {product.releaseDate && (
        <p>Release Date: {new Date(product.releaseDate).toLocaleDateString()}</p>
      )}
      {product.complications?.length ? (
        <>
          <h3 className="font-medium">Complications:</h3>
          <ul className="list-disc ml-5">
            {product.complications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}

/** Fallback for other product types */
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
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Additional Details</h2>

      {'brand' in product && typeof product.brand === 'string' && (
        <p>Brand: {product.brand}</p>
      )}

      {'model' in product && typeof product.model === 'string' && (
        <p>Model: {product.model}</p>
      )}

      {'warranty' in product && typeof product.warranty === 'string' && (
        <p>Warranty: {product.warranty}</p>
      )}

      {'condition' in product && typeof product.condition === 'string' && (
        <p>Condition: {product.condition}</p>
      )}

      {'releaseDate' in product &&
        typeof product.releaseDate === 'string' && (
          <p>
            Release Date: {new Date(product.releaseDate).toLocaleDateString()}
          </p>
        )}

      {hasColor && <p>Color: {product.color as string}</p>}

      {'dimensions' in product &&
        typeof product.dimensions === 'string' && (
          <p>Dimensions: {product.dimensions}</p>
        )}

      {'weight' in product && typeof product.weight === 'string' && (
        <p>Weight: {product.weight}</p>
      )}

      {hasFeatures && (
        <>
          <h3 className="font-medium">Features:</h3>
          <ul className="list-disc ml-5">
            {(product.features as string[]).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
