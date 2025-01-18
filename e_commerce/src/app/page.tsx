import { client } from "@/sanity/lib/client";
import IProduct from "./types/IProduct";
export default async function Home() {
  const products = await client.fetch(`*[_type == "product"]`);
  // const products = JSON.parse(row_products);
  console.log(products);
  console.log(products[0].image.asset._ref);
  return (
    <>
      <div className="flex justify-center my-20">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product : IProduct) => {
              return (
                <div key={product._id}>
                  <img
                    src="image-6ec83181ba153fa2990f3f538e6f83ed1a473568-640x480-jpg"
                    alt={product.name}
                    className="w-full"
                  />
                  <p>{product.name}</p>
                </div>
              );  
            })}
          </div>
      </div>
    </>
  );
}
