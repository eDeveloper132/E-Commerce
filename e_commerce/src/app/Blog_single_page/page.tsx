import simple_connect_to_db from "../../../lib/simple_connect";
import Single_Main from "../Single_Main/page";

export default function shop_grid(){
      simple_connect_to_db();
    return(
        <>
            <div className="bg-white">
                <Single_Main />
            </div>
        </>
    )
}