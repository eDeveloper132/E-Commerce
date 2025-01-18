// // import IProduct from "../types/IProduct";
// import Image, { StaticImageData } from "next/image";
// export default function Products_Card(products : {    _id: string;
//     name: string;
//     description: string;
//     price: number;
//     stock?: number;
//     category?: string;
//     tag?: string;
//     rating?: number;
//     image?:     }) {
//     console.log('https://678a7733dd587da7ac2a4878.mockapi.io/products/Products'+products?.image?.asset?._ref)
//     return(
//         <div key={products._id}>
//             <Image src={'https://678a7733dd587da7ac2a4878.mockapi.io/products/Products/'+products?.image?.asset?._ref} alt="image" width={100} height={100}></Image>
//             <p>{products.name}</p>
//             <p>{products.price}</p>
//             <p>{products.description}</p>
//             <p>{products.stock}</p>
//             <p>{products.category}</p>
//             <p>{products.tag}</p>
//             <p>{products.rating}</p>
//         </div>
//     );
// }