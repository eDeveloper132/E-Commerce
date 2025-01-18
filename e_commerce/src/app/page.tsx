import {client} from '../sanity/lib/client'
import IProduct from './types/IProduct';

export default async function Home() {
  const Data = await client.fetch('*[_type == "product"]');
  console.log(Data)
  console.log(Data[0].image.asset._ref)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Data.map((product:IProduct) => (
        <div key={product._id} className="rounded-lg shadow-md p-8">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
        </div>
      ))}

    </main>
  );
}
