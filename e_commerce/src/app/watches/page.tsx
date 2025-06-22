import Shop_Left_Main from "../Shop_Left_Main/page";
import simple_connect_to_db from "../../../lib/simple_connect";

export default async function shop_left(){
        simple_connect_to_db();
    return(
        <>
                    <div className="bg-white">

                <Shop_Left_Main />
            
            </div>
        </>
    )
}