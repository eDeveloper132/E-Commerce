import mongoose, { Model, Schema } from "mongoose";
import IProfile from "./interfaces/IProfile";
import IOrder from "./interfaces/IOrder";
import IIndividualProduct from "./interfaces/Products";

const IndividualProductSchema: Schema<IIndividualProduct> = new Schema({
  product_id: { type: String, required: true, unique: true },
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_image: { type: String, required: true },
  type: { type: String, required: true }, // Indicates product category
}, { timestamps: true });

const ProfileSchema: Schema<IProfile> = new Schema(
  {
    username: { type: String, required: false },
    clerk_user_id: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: false },
    outh_provider: { type: String, required: false, default: null },
    outh_provider_id: { type: String, required: false, default: null },
    outh_provider2: { type: String, required: false, default: null },
    outh_provider2_id: { type: String, required: false, default: null },
    image_url: { type: String, required: false },
    products: [
      {
        product_id: { type: String, required: true, default: null },
        like: { type: Number, required: false },
        comment: { type: String, required: false, default: "none" },
      },
    ],
  },
  { timestamps: true }
);
const OrderSchema: Schema<IOrder> = new Schema({
  product_id: { type: String, required: true },
  user_clerk_id: { type: String, required: true },
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_image: { type: String, required: true },
  shippingAddress: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    postalCode: { type: String, required: true },
    status: { type: String, required: true, default: "pending" },
  }
},
  { timestamps: true }
);
// Prevent model overwrite issue in Next.js hot reload
const ProfileModel: Model<IProfile> =
  mongoose.models.Profiles || mongoose.model<IProfile>("Profiles", ProfileSchema);
const OrderModel: Model<IOrder> =
  mongoose.models.Orders || mongoose.model<IOrder>("Orders", OrderSchema);
const IndividualProductModel: Model<IIndividualProduct> =
  mongoose.models.IndividualProducts ||
  mongoose.model<IIndividualProduct>("IndividualProducts", IndividualProductSchema);
export { ProfileModel, OrderModel, IndividualProductModel };