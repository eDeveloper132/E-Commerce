import { fetchProducts, fetchSlider } from "../components/data_source";
import ProductGrid from "../components/Products_Grid";
import HeroSlider from "../components/HeroSlider";
import ProductSearch from "../components/ProductSearch";

export default async function MainHome() {
  const productsData = await fetchProducts();
  const sliderData = await fetchSlider(); // should return a single ImageGallery object
const allImages = sliderData.flatMap(gallery => gallery.images);

  return (
    <main className="w-full bg-white">
      <div className="relative h-[600px] w-full overflow-hidden">
        <div className="relative h-full w-full">
          {/* Pass the gallery, not an array of galleries */}
          <HeroSlider slides={allImages} />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 z-10">
          <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 bg-white/80 p-6 rounded-md backdrop-blur-sm">
            <p className="text-[#FB2E86] font-[Lato] font-bold text-sm sm:text-base md:text-lg pb-3">
              Best Choice Is Yours....
            </p>
            <h1 className="font-[Josefin Sans] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-3 text-black">
              New Things Come First Latest {new Date().getFullYear()}
            </h1>
            <p className="font-[Lato] font-bold text-sm sm:text-base md:text-lg text-[#8A8FB9] pb-7">
              Welcome To Our E-Commerce Store
            </p>
          </div>
        </div>
      </div>
      {/* Product search bar */}
      <ProductSearch products={productsData} />

      <ProductGrid productsData={productsData} />
    </main>
  );
}
