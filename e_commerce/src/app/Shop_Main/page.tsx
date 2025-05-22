// app/electronics/page.tsx or app/electronics/Shop_Main.tsx
import { fetchElectronics } from "../components/data_source";
import ProductGrid from "../components/ElecronicsGrid";
import ElectronicsSearch from "../components/ElectrnicsSearch";

export default async function Shop_Main() {
  const products = await fetchElectronics();

  return (
    <>
      <div className="h-[286px] electronics flex flex-col justify-center bg-white">
        <div className="flex justify-center">
          <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] font-bold mix-blend-difference text-white">
            Electronics
          </p>
        </div>
      </div>

      {/* Search bar */}
      <ElectronicsSearch products={products} />

      {/* Electronics product grid */}
      <div className="flex justify-center my-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          <ProductGrid productsData={products} />
        </div>
      </div>
    </>
  );
}
