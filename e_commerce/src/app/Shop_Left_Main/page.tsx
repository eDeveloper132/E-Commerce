import { fetchWatches } from "../components/data_source"
import WatchesList from "../components/WatchesList"
import WatchSearch from "../components/WatchesSearch";
export default async function Shop_Left_Main() {
    const watches = await fetchWatches();
    return (
        <>
            <div className="h-[286px] watches flex flex-col justify-center">
                <div className="flex justify-center">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] mix-blend-difference font-bold">
                            Watches
                        </p>
                </div>
            </div>
            <WatchSearch watches={watches} />
            <div className="flex justify-center my-10">
                <div className="flex flex-wrap gap-4 justify-center w-full lg:w-[900px]">
                    <WatchesList productsData={watches}/>
                </div>
            </div>
        </>
    )
}