// import Products_Card from './components/Products_Card';
// import IProduct from './types/IProduct';
// import { urlFor } from '../sanity/lib/image'; // Assuming you have this utility function to get image URL
// import { getProducts } from './api/products/products';
import MainHome from './Main/page';
// import { auth, currentUser } from '@clerk/nextjs/server';
export default async function Home() {
  // const Auth = await auth()
  // console.log(Auth)
  // const user = await currentUser();
  // console.log(user)
  // const Data = await getProducts();
  return (
    // <main className='py-10 bg-white'>
    //   <div className='flex justify-center'>
    //   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-16">
    //     {Data.map((product: IProduct) => {
    //       // Check if product properties match the expected types
    //       if (
    //         typeof product.name === 'string' &&
    //         typeof product.description === 'string' &&
    //         typeof product.price === 'number'
    //       ) {
    //         // Resolving the image URL using the `urlFor` function (which you'd need to define)
    //         const imageUrl = product.image ? urlFor(product.image).url() : '';
    //         // console.log(imageUrl)
    //         return (
    //           <div key={product._id} className='w-[200px] h-[300px]'>
    //             <Products_Card
    //               name={product.name}
    //               description={product.description}
    //               price={product.price}
    //               stock={product.stock}
    //               category={product.category}
    //               tag={product.tag}
    //               rating={product.rating}
    //               image={imageUrl} // passing the resolved image URL directly
    //             />
    //           </div>
    //         );
    //       }
    //       return null; // Don't render the card if type checks fail
    //     })}
    //   </div>
    //   </div>
    // </main>
    <MainHome />
  );
}
