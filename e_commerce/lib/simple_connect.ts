import { syncProducts } from "@/app/components/data_source";
import connectToDatabase from "./mongodb";

const simple_connect_to_db = async function() {
    try {
        await connectToDatabase();
            try {
                await syncProducts();
            } catch (error) {
              console.log('Error syncing products',error)
            }
    } catch (error) {
        console.log(error)
    }
}
export default simple_connect_to_db;