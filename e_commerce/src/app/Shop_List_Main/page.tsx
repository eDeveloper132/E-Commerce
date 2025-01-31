import matrix from "../../../public/matrix.png";
import menua from "../../../public/menua.png";
import Image from "next/image";
import Shop_List_Card from "../components/Shop_List_Card";
import shop_1 from "../../../public/shop_1.jpeg";
import shop_2 from "../../../public/shop_2.jpeg";
import shop_3 from "../../../public/shop_3.jpeg";
import shop_4 from "../../../public/shop_4.jpeg";
import shop_5 from "../../../public/shop_5.jpeg";
import shop_6 from "../../../public/shop_6.jpeg";
import shop_7 from "../../../public/shop_7.jpeg"; 
import sponsor from "../../../public/sponsor.png";
export default function Shop_List_Main() {
    return(
        <>
            <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Shop List
                        </p>
                        <div className="flex">
                            <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                Shop List
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
                <div>
                    <Shop_List_Card width="w-[1100px]" title="Accumsan tincidunt" image={shop_1} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="w-[1100px]" title="In nulla" image={shop_2} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="w-[1100px]" title="Vel sem" image={shop_3} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="w-[1100px]" title="Porttitor cum" image={shop_4} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="w-[1100px]" title="Nunc in" image={shop_5} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="w-[1100px]" title="Vitae facilisis" image={shop_6} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="w-[1100px]" title="Curabitur lectus" image={shop_7} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo." discountedPrice={26.00} originalPrice={52.00} />
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
    )
}