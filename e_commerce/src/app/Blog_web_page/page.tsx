import simple_connect_to_db from "../../../lib/simple_connect";
import Blog_Main from "../Blog_Main/page";

export default function shop_grid(){
      simple_connect_to_db();
    return(
        <>
            <div className="bg-white">
                <Blog_Main />
            </div>
        </>
    )
}