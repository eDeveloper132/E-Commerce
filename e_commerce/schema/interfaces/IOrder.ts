import mongoose, { Document } from "mongoose";
interface IShippingAddress {
    name: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    status: string;
}
interface IOrder extends Document {
    _id: mongoose.Types.ObjectId;
    product_id: string;
    user_clerk_id: string;
    product_name: string;
    product_price: number;
    product_image: string;
    shippingAddress: IShippingAddress
}
export default IOrder;