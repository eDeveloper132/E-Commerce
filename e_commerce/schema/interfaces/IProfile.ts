import { Document } from "mongoose";
interface Ilike_Icomment{
    product_id: string;
    like?: number;
    comment?: string;
}
interface IProfile extends Document {
    username?: string;
    clerk_user_id: string;
    email: string;
    phonenumber?: string;
    outh_provider?: string;
    outh_provider_id?: string;
    outh_provider2?: string;
    outh_provider2_id?: string;
    image_url?: string;
    products?: Ilike_Icomment[];
}
export default IProfile;