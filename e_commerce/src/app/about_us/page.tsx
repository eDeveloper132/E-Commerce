import About_Main from "../About_Main/page";
import simple_connect_to_db from "../../../lib/simple_connect";

export default async function shop_grid(){
      simple_connect_to_db();

    return(
        <>
            <div className="bg-white">
                <About_Main />
            </div>
        </>
    )
}