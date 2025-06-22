import {Document} from "mongoose";

interface IIndividualProduct extends Document {
  product_id: string;
  product_name: string;
  product_price: number;
  product_image: string;
  type: string; // To distinguish between 'general', 'electronics', 'watch'
}
export default IIndividualProduct;