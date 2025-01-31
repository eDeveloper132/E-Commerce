import matrix from "../../../public/matrix.png";
import menua from "../../../public/menua.png";
import Image from "next/image";
import Shop_Card from "../components/Shop_Card";
import kursi_21 from "../../../public/kursi_21.png"
import kursi_22 from "../../../public/kursi_22.png"
import sofa_1 from "../../../public/sofa_1.png"
import sofa_2 from "../../../public/sofa_2.png"
import bag_1 from "../../../public/bag_1.png"
import bag_2 from "../../../public/bag_2.png"
import watch_1 from "../../../public/watch_1.png"
import watch_2 from "../../../public/watch_2.png"
import watch_3 from "../../../public/watch_3.png"
import headphone_1 from "../../../public/headphone_1.png"
import headphone_2 from "../../../public/headphone_2.png"
import camera_1 from "../../../public/camera_1.png"
import sponsor from "../../../public/sponsor.png";
export default function Shop_Main() {
    return (
        <>
<div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
    <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
        <div className="flex flex-col">
            <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                Shop Grid Default
            </p>
            <div className="flex">
                <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                    Home.Pages.
                </p>
                <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                    Shop Grid Default
                </p>
            </div>
        </div>
    </div>
</div>

        <div className="flex justify-center my-16 md:my-28 bg-white">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 px-4 md:px-0">
                    {/* Info Section */}
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[18px] md:text-[22px] font-semibold leading-[22px] md:leading-[25.78px] text-[#151875]">
                            Ecommerce Accessories & Fashion item
                        </p>
                        <p className="font-[Lato] text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] text-[#8A8FB9]">
                            About 9,620 results (0.62 seconds)
                        </p>
                    </div>

                    {/* Filters Section */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6">
                        <div className="flex items-center">
                            <p className="font-[Lato] text-[14px] md:text-[16px] leading-[19.2px] text-[#3F509E]">Per Page:</p>
                            <input
                                type="text"
                                className="w-[50px] md:w-[55px] h-[22px] md:h-[25px] border text-[#E7E6EF] ml-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <p className="font-[Lato] text-[14px] md:text-[16px] leading-[19.2px] text-[#3F509E]">Sort By:</p>
                            <input
                                type="text"
                                className="w-[70px] md:w-[74px] h-[18px] border text-[#8A8FB9] ml-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <p className="font-[Lato] text-[14px] md:text-[16px] leading-[19.2px] text-[#3F509E]">View:</p>
                            <Image src={matrix} width={16} height={16} alt="matrix" className="ml-2" />
                            <Image src={menua} width={16} height={16} alt="menua" className="ml-2" />
                        </div>
                        <input
                            type="text"
                            className="w-[140px] md:w-[162px] h-[28px] md:h-[30px] border border-[#E7E6EF]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                    <Shop_Card image={kursi_21} title="Vel elit euismod" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={sofa_1} title="Ultricies condimentum imperdiet" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={kursi_22} title="Vitae suspendisse sed" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={bag_1} title="Sed at fermentum" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={watch_1} title="Fusce pellentesque at" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={watch_2} title="Vestibulum magna laoreet" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={headphone_1} title="Sollicitudin amet orci" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={sofa_2} title="Ultrices mauris sit" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={watch_3} title="Pellentesque condimentum ac" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={camera_1} title="Cras scelerisque velit" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={headphone_2} title="Lectus vulputate faucibus" discountedPrice={150} originalPrice={200}/>
                    <Shop_Card image={bag_2} title="Purus risus, ut" discountedPrice={150} originalPrice={200}/>
                </div>
            </div>


            <div className="flex justify-center my-20">
                <Image 
                    src={sponsor} 
                    width={1000} 
                    height={100} 
                    alt="sponsor" 
                    className="max-w-full h-auto" 
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </>
    );
}