import matrix from "../../../public/matrix.png";
import menua from "../../../public/menua.png";
import Image from "next/image";
import Shop_List_Card from "../components/Shop_List_Card";
import sponsor from "../../../public/sponsor.png";
import shop_8 from "../../../public/shop_8.jpeg";
import shop_9 from "../../../public/shop_9.jpeg";
import shop_11 from "../../../public/shop_11.jpeg";
import shop_12 from "../../../public/shop_12.jpeg";
import shop_13 from "../../../public/shop_13.jpeg";
import shop_14 from "../../../public/shop_14.jpeg";
export default function Shop_Left_Main() {
    return (
        <>
            <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Shop Left Sidebar
                        </p>
                        <div className="flex">
                            <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                Shop Left Sidebar
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
                <div className="flex xl:hidden 2xl:hidden flex-col justify-center gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Product Brand</p>
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Coaster Furniture</p>
                        </div>
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Fusion Dot High Fashion</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Unique Furnitture Restor</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Dream Furnitture Flipping</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Young Repurposed</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Green DIY furniture</p>
                        </div>                    
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Discount Offer</p>
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>20% Cashback</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>5% Cashback Offer</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>25% Discount Offer</p>
                        </div>                    
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Rating Item</p>
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                            </ul>
                            <p>(2341)</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                            </ul>
                            <p>(1726)</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                            </ul>
                            <p>(258)</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                            </ul>
                            <p>(25)</p>                        
                        </div>                    
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Categories</p>
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Prestashop</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Magento</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Bigcommerce</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>osCommerce</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>3dcart</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Bags</p>
                        </div>                        
                        <div>
                            <div></div>
                            <p>Accessories</p>
                        </div>
                        <div>
                            <div></div>
                            <p>Jewellery</p>
                        </div>
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>Watches</p>
                        </div>                    
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Price Filter</p>
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>$0.00 - $150.00</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>$150.00 - $504.00</p>
                        </div>                        
                        <div className="flex gap-3">
                            <i className="fa-solid fa-check my-auto"></i>
                            <p>$450.00 +</p>
                        </div>                                              
                        <div></div>
                    </div>
                    <div  className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Filter By Color</p>
                        <ul className="flex space-x-4">
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#5E37FF] my-auto"></span>
                                <p>Blue</p>
                            </li>
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#FF9437] my-auto"></span>
                                <p>Orange</p>
                            </li>
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#FFBF95] my-auto"></span>
                                <p>Brown</p>
                            </li>
                        </ul>
                        <ul className="flex space-x-4">
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#33D221] my-auto"></span>
                                <p>Green</p>
                            </li>
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#E248FF] my-auto"></span>
                                <p>Purple</p>
                            </li>
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#26CBFF] my-auto"></span>
                                <p>Sky</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="hidden xl:flex 2xl:flex flex-col gap-10 xl:w-[300px]">
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Product Brand</p>
                        <div className="flex gap-3">
                            <span className="bg-[#E5E0FC] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#603EFF] mx-auto"></i>
                            </span>
                            <p>Coaster Furniture</p>
                        </div>
                        <div className="flex gap-3">
                        <span className="bg-[#E5E0FC] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#603EFF] mx-auto"></i>
                            </span>
                            <p>Fusion Dot High Fashion</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#603EFF] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-white mx-auto"></i>
                            </span>
                            <p>Unique Furnitture Restor</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#E5E0FC] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#603EFF] mx-auto"></i>
                            </span>
                            <p>Dream Furnitture Flipping</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#E5E0FC] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#603EFF] mx-auto"></i>
                            </span>
                            <p>Young Repurposed</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#E5E0FC] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#603EFF] mx-auto"></i>
                            </span>
                            <p>Green DIY furniture</p>
                        </div>                    
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Discount Offer</p>
                        <div className="flex gap-3">
                             <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>20% Cashback</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>5% Cashback Offer</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>25% Discount Offer</p>
                        </div>                    
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Rating Item</p>
                        <div className="flex gap-3">
                        <span className="bg-[#FFF6DA] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FFCC2E] mx-auto"></i>
                            </span>
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                            </ul>
                            <p>(2341)</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFCC2E] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-white mx-auto"></i>
                            </span>
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                            </ul>
                            <p>(1726)</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFF6DA] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FFCC2E] mx-auto"></i>
                            </span>
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                            </ul>
                            <p>(258)</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFF6DA] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FFCC2E] mx-auto"></i>
                            </span>
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
                            </ul>
                            <p>(25)</p>                        
                        </div>                    
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Categories</p>
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>Prestashop</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>Magento</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FF3EB2] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-white mx-auto"></i>
                            </span>
                            <p>Bigcommerce</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>osCommerce</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>3dcart</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>Bags</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-white w-5 h-5 flex flex-col justify-center pr-1">

                            </span>
                            <p>Accessories</p>
                        </div>
                        <div className="flex gap-3">
                        <span className="bg-white w-5 h-5 flex flex-col justify-center pr-1">
                            
                            </span>
                            <p>Jewellery</p>
                        </div>
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>Watches</p>
                        </div>                    
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Price Filter</p>
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>$0.00 - $150.00</p>
                        </div>   
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>$150.00 - $350.00</p>
                        </div>                      
                        <div className="flex gap-3">
                        <span className="bg-[#FF3EB2] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-white mx-auto"></i>
                            </span>
                            <p>$150.00 - $504.00</p>
                        </div>                        
                        <div className="flex gap-3">
                        <span className="bg-[#FFDBF1] w-5 h-5 flex flex-col justify-center pr-1">
                                <i className="fa-solid fa-check w-[9.37px] text-[#FF3EB2] mx-auto"></i>
                            </span>
                            <p>$450.00 +</p>
                        </div>                                              
                        <div className="h-8 border border-[#BCBDDB] rounded px-3 py-1">
                            <div className="flex justify-between">
                                <input className="font-[Lato] font-normal text-[12px] leading-[30px] text-[#1518751A]/10" type="text" placeholder="$10.00 - 20000$" />
                                <li className="flex flex-col justify-center items-center">
                                    <i className="fa-solid fa-search text-[#535399] text-sm cursor-pointer"></i>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div  className="flex flex-col gap-4">
                        <p className="font-[Josefin Sans] text-[20px] leading-[30px] text-[#292C58] font-semibold underline">Filter By Color</p>
                        <ul className="flex space-x-4">
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#5E37FF] my-auto"></span>
                                <p>Blue</p>
                            </li>
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#FF9437] my-auto"></span>
                                <p>Orange</p>
                            </li>
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#FFBF95] my-auto"></span>
                                <p>Brown</p>
                            </li>
                        </ul>
                        <ul className="flex space-x-4">
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#33D221] my-auto"></span>
                                <p>Green</p>
                            </li>
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#E248FF] my-auto"></span>
                                <p>Purple</p>
                            </li>
                            <li className="flex gap-1">
                                <span className="w-[14px] h-[14px] rounded-full bg-[#26CBFF] my-auto"></span>
                                <p>Sky</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center w-full lg:w-[900px]">
                    <Shop_List_Card width="lg:w-[900px]" title="Dictum morbi" image={shop_8} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="lg:w-[900px]" title="Sodales sit" image={shop_9} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="lg:w-[900px]" title="Nibh varius" image={shop_11} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="lg:w-[900px]" title="Mauris quis" image={shop_12} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="lg:w-[900px]" title="Morbi sagittis" image={shop_13} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="lg:w-[900px]" title="Ultricies venenatis" image={shop_14} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." discountedPrice={26.00} originalPrice={52.00} />
                    <Shop_List_Card width="lg:w-[900px]" title="Scelerisque dignissim" image={shop_8} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." discountedPrice={26.00} originalPrice={52.00} />
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