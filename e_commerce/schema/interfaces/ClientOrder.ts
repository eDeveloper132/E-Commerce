// schema/interfaces/ClientOrder.ts
interface IShippingAddress {
    name: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    status: string;
}
export interface ClientOrder {
  _id: string;
  product_id: string;
  user_clerk_id: string;
  product_name: string;
  product_price: number;
  product_image: string;
  shippingAddress: IShippingAddress;
  createdAt?: string; // Optional, as a string (or Date if serialized elsewhere)
  updatedAt?: string; // Optional, as a string (or Date if serialized elsewhere)
  __v?: number;     // Optional, Mongoose version field
}