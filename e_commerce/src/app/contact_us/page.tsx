import connect_to_db from "../../../lib/connect_to_db";
import Contact_Main from "../Contact_Main/page";

export default function shop_grid(){
      connect_to_db();

    return(
        <>
            <div className="bg-white">
                <Contact_Main />
            </div>
        </>
    )
}