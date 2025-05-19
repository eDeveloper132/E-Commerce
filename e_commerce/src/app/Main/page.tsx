import { fetchProducts } from "../components/data_source";
import ProductGrid from "../components/Products_Grid";

export default async function MainHome() {
  const productsData = await fetchProducts();
  return (
    <main className="w-full bg-white">
      <div className="bg-[#F2F0FF] flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
          <p className="text-[#FB2E86] font-[Lato] font-bold text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 pb-3">
            Best Choice Is Yours....
          </p>
          <h1 className="font-[Josefin Sans] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed pb-3 text-black">
            New Things Come First Latest {new Date().getFullYear()}
          </h1>
          <p className="font-[Lato] font-bold text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#8A8FB9] pb-7">
            Welcome To Our E-Commerce Store
          </p>
          <button
            type="button"
            className="bg-[#FB2E86] text-white font-[Josefin Sans] rounded-sm px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg"
          >
            Shop Now
          </button>
        </div>
      </div>

      <ProductGrid productsData={productsData} />
    </main>
  );
}