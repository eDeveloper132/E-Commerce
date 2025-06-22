import Shopping_Curt_Main from "../Shopping_Curt_Main/page";
import { auth } from '@clerk/nextjs/server';
import connect_to_db from "../../../lib/connect_to_db";
export default async function shop_grid(){
      const { userId } = await auth();
      await connect_to_db();
    return(
        <>
            <div className="bg-white">
                    {userId ? (
                <Shopping_Curt_Main />
                    ) : (
            <div className="leading-relaxed px-4 sm:px-6">
                <div className="flex flex-col justify-center items-center my-40 sm:my-60 text-center px-4">
                <p className="text-lg sm:text-2xl font-bold text-red-500">Please login first to access.</p>
                </div>
            </div>
    )
    }

            </div>
        </>
    )
}