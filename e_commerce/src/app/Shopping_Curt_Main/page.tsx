import Image from "next/image"
import curt_item_1 from "../../../public/curt_item_1.jpeg"
import curt_item_2 from "../../../public/curt_item_2.jpeg"
import curt_item_3 from "../../../public/curt_item_3.jpeg"
import curt_item_4 from "../../../public/curt_item_4.jpeg"
import curt_item_5 from "../../../public/curt_item_5.jpeg"
import Link from "next/link"
export default function Shopping_Curt_Main() {
    return(
        <>
                        <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Shopping Curt
                        </p>
                        <div className="flex">
                            <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                shopping curt
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex xl:flex 2xl:flex justify-center my-24 gap-16 bg-white">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-5">
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold mb-8">Product</h1>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_1} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Ut diam consequat</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_2} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Vel faucibus posuere</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_3} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Ac vitae vestibulum</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_4} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Elit massa diam</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[250px] h-[88px] flex gap-3 relative">
                                <div className="absolute -top-[5px] left-[75px] w-3 h-3 rounded-full bg-black flex justify-center">
                                    <div className="flex flex-col justify-center">
                                        <i className="fa-solid fa-xmark text-white text-[8px] leading-[8px] cursor-pointer"></i>
                                    </div>
                                </div>
                                <Image src={curt_item_5} width={84} className="h-[88px]" alt="image"></Image>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px]'>Proin pharetra elementum</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Color: Brown</p>
                                    <p className='font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#A1A8C1]'>Size: XL</p>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold flex justify-center mb-8">Price</h1>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                <span className="flex justify-center">
                                    $32.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                <span className="flex justify-center">
                                    $32.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                <span className="flex justify-center">
                                    $32.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                <span className="flex justify-center">
                                    $32.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center text-[14px] leading-[16.41px] font-[Josefin Sans] text-[#15245E]">
                                <span className="flex justify-center">
                                    $32.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold flex justify-center mb-8">Quantity</h1>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center">
                                <div className="flex justify-center">
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">-</button>
                                    </span>
                                    <span className="w-8 h-4 bg-[#E7E7EF] flex justify-center">
                                        <span className="font-[Josefin Sans] text-[12px] leading-[14.06px] text-[#BEBFC2] flex flex-col justify-center">1</span>
                                    </span>
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">+</button>
                                    </span>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center">
                                <div className="flex justify-center">
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">-</button>
                                    </span>
                                    <span className="w-8 h-4 bg-[#E7E7EF] flex justify-center">
                                        <span className="font-[Josefin Sans] text-[12px] leading-[14.06px] text-[#BEBFC2] flex flex-col justify-center">1</span>
                                    </span>
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">+</button>
                                    </span>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center">
                                <div className="flex justify-center">
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">-</button>
                                    </span>
                                    <span className="w-8 h-4 bg-[#E7E7EF] flex justify-center">
                                        <span className="font-[Josefin Sans] text-[12px] leading-[14.06px] text-[#BEBFC2] flex flex-col justify-center">1</span>
                                    </span>
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">+</button>
                                    </span>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center">
                                <div className="flex justify-center">
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">-</button>
                                    </span>
                                    <span className="w-8 h-4 bg-[#E7E7EF] flex justify-center">
                                        <span className="font-[Josefin Sans] text-[12px] leading-[14.06px] text-[#BEBFC2] flex flex-col justify-center">1</span>
                                    </span>
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">+</button>
                                    </span>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="w-[80px] h-[88px] flex flex-col justify-center">
                                <div className="flex justify-center">
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">-</button>
                                    </span>
                                    <span className="w-8 h-4 bg-[#E7E7EF] flex justify-center">
                                        <span className="font-[Josefin Sans] text-[12px] leading-[14.06px] text-[#BEBFC2] flex flex-col justify-center">1</span>
                                    </span>
                                    <span className="w-3 h-4 bg-[#E7E7EF] flex justify-center">
                                        <button type="button" className="flex flex-col justify-center text-[#BEBFC2]">+</button>
                                    </span>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold flex justify-center mb-8">Total</h1>
                            <div className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#15245E] w-[80px] h-[88px] flex justify-center">
                                <span className="flex flex-col justify-center">
                                    £219.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#15245E] w-[80px] h-[88px] flex justify-center">
                                <span className="flex flex-col justify-center">
                                    £219.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#15245E] w-[80px] h-[88px] flex justify-center">
                                <span className="flex flex-col justify-center">
                                    £219.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#15245E] w-[80px] h-[88px] flex justify-center">
                                <span className="flex flex-col justify-center">
                                    £219.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                            <div className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#15245E] w-[80px] h-[88px] flex justify-center">
                                <span className="flex flex-col justify-center">
                                    £219.00
                                </span>
                            </div>
                            <div className="border-b-[1px] border-solid border-[#BEBFC2]"></div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className="w-[134px] h-10 rounded-sm bg-[#FB2E86] text-white">Update Curt</button>
                        <button type="button" className="w-[134px] h-10 rounded-sm bg-[#FB2E86] text-white">Clear Curt</button>
                    </div>
                </div>
                <div className="flex flex-col w-[372px]">
                    <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold flex justify-center mb-8">Cart Totals</h1>
                    <div className="flex flex-col gap-[58px] w-[372px]">
                        <div className="flex flex-col justify-center h-[284px] rounded-[3px] bg-[#F4F4FC]">
                            <div className="flex justify-between mx-6">
                                <p className="font-[Lato] font-semibold text-[18px] leading-[21.06px] text-[#1D3178]">Subtotals:</p>
                                <p className="font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#15245E]">£219.00</p>
                            </div>
                            <span className="border-2 border-[#E8E6F1] w-[310px] mx-auto mt-2"></span>
                            <div className="flex justify-between mx-6 mt-8">
                                <p className="font-[Lato] font-semibold text-[18px] leading-[21.06px] text-[#1D3178]">Totals:</p>
                                <p className="font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#15245E]">£325.00</p>
                            </div>
                            <span className="border-2 border-[#E8E6F1] w-[310px] mx-auto mt-2"></span>
                            <span className="flex gap-2 mx-8 mt-8">
                                <i className="fa-solid fa-circle-check my-auto text-[#19D16F] text-xs"></i>
                                <p className="font-[Lato] font-normal text-[14px] leading-[14.4px] text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                            </span>
                            <span className="mt-10 flex justify-center">
                                <button type="button" className="w-[312px] h-10 rounded-[3px] bg-[#19D16F] text-white"><Link href={"/Order_completed_page"}>Proceed To Checkout</Link></button>
                            </span>
                        </div>
                        <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold flex justify-center">Calculate Shopping</h1>
                        <div className="flex flex-col justify-center h-[284px] rounded-[3px] bg-[#F4F4FC] gap-8">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-2 w-[307px] mx-auto">
                                    <input type="text" placeholder="Bangladesh" className="bg-[#F4F4FC] font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#C5CBE3]" />
                                    <span className="border-b-[1px] border-[#C7CEE4]"></span>
                                </div>
                                <div className="flex flex-col gap-2 w-[307px] mx-auto">
                                    <input type="text" placeholder="Mirpur Dhaka - 1200" className="bg-[#F4F4FC] font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#C5CBE3]" />
                                    <span className="border-b-[1px] border-[#C7CEE4]"></span>
                                </div>                                
                                <div className="flex flex-col gap-2 w-[307px] mx-auto">
                                    <input type="text" placeholder="Postal Code" className="bg-[#F4F4FC] font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#C5CBE3]" />
                                    <span className="border-b-[1px] border-[#C7CEE4]"></span>
                                </div>                            
                            </div>
                            <span>
                                <button type="button" className="w-[180px] h-[42px] rounded-sm bg-[#FB2E86] mx-8 text-white">Calculate Shiping</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex lg:hidden xl:hidden 2xl:hidden flex-col gap-8 p-4 bg-white">
  <div className="flex flex-col gap-6">
  <span className="flex justify-center my-2">
        <h1 className="font-[Josefin Sans] text-[20px] text-[#1D3178] font-semibold">Product</h1>
    </span>
    {[curt_item_1, curt_item_2, curt_item_3, curt_item_4, curt_item_5].map((item, index) => (
      <div key={index} className="w-full flex gap-4 items-center relative">
        <div className="absolute -top-2 left-[68px] w-5 h-5 rounded-full bg-black flex justify-center items-center">
          <i className="fa-solid fa-xmark text-white text-sm cursor-pointer"></i>
        </div>
        <Image src={item} width={84} height={88} className="h-[88px]" alt={`product ${index + 1}`} />
        <div className="flex flex-col gap-1">
          <p className="font-[Josefin Sans] text-[14px] text-[#1D3178]">Product Name {index + 1}</p>
          <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1]">Color: Brown</p>
          <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1]">Size: XL</p>
        </div>
      </div>
    ))}
  </div>

  <div className="flex flex-col gap-4">
  <span className="flex justify-center my-2">
        <h1 className="font-[Josefin Sans] text-[20px] text-[#1D3178] font-semibold">Price</h1>
    </span>
    {[32, 32, 32, 32, 32].map((price, index) => (
      <div key={index} className="text-center font-[Josefin Sans] text-[14px] text-[#15245E]">${price}.00</div>
    ))}
  </div>

  <div className="flex flex-col gap-4">
  <span className="flex justify-center my-2">
        <h1 className="font-[Josefin Sans] text-[20px] text-[#1D3178] font-semibold">Quantity</h1>
    </span>
    {Array(5).fill(0).map((_, index) => (
      <div key={index} className="flex justify-center items-center gap-2">
        <button className="w-6 h-6 bg-[#E7E7EF] text-[#BEBFC2] flex justify-center items-center">-</button>
        <span className="w-8 h-6 bg-[#E7E7EF] text-center font-[Josefin Sans] text-[#BEBFC2]">1</span>
        <button className="w-6 h-6 bg-[#E7E7EF] text-[#BEBFC2] flex justify-center items-center">+</button>
      </div>
    ))}
  </div>

  <div className="flex flex-col gap-4">
    <span className="flex justify-center my-2">
        <h1 className="font-[Josefin Sans] text-[20px] text-[#1D3178] font-semibold">Total</h1>
    </span>
    {[219, 219, 219, 219, 219].map((total, index) => (
      <div key={index} className="text-center font-[Josefin Sans] text-[14px] text-[#15245E]">£{total}.00</div>
    ))}
  </div>

  <div className="flex gap-4 justify-center">
    <button className="w-[134px] h-10 bg-[#FB2E86] text-white rounded">Update Cart</button>
    <button className="w-[134px] h-10 bg-[#FB2E86] text-white rounded">Clear Cart</button>
  </div>
</div>


            <div className="flex lg:hidden xl:hidden 2xl:hidden justify-center mt-5 bg-white">
                <div className="flex flex-col w-[372px]">
                        <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold flex justify-center mb-8">Cart Totals</h1>
                        <div className="flex flex-col gap-[58px] w-[372px]">
                            <div className="flex flex-col justify-center h-[284px] rounded-[3px] bg-[#F4F4FC]">
                                <div className="flex justify-between mx-6">
                                    <p className="font-[Lato] font-semibold text-[18px] leading-[21.06px] text-[#1D3178]">Subtotals:</p>
                                    <p className="font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#15245E]">£219.00</p>
                                </div>
                                <span className="border-2 border-[#E8E6F1] w-[310px] mx-auto mt-2"></span>
                                <div className="flex justify-between mx-6 mt-8">
                                    <p className="font-[Lato] font-semibold text-[18px] leading-[21.06px] text-[#1D3178]">Totals:</p>
                                    <p className="font-[Lato] font-normal text-[16px] leading-[19.2px] text-[#15245E]">£325.00</p>
                                </div>
                                <span className="border-2 border-[#E8E6F1] w-[310px] mx-auto mt-2"></span>
                                <span className="flex gap-2 mx-8 mt-8">
                                    <i className="fa-solid fa-circle-check my-auto text-[#19D16F] text-xs"></i>
                                    <p className="font-[Lato] font-normal text-[14px] leading-[14.4px] text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                                </span>
                                <span className="mt-10 flex justify-center">
                                    <button type="button" className="w-[312px] h-10 rounded-[3px] bg-[#19D16F] text-white">Proceed To Checkout</button>
                                </span>
                            </div>
                            <h1 className="font-[Josefin Sans] text-[20px] leading-[23.44px] text-[#1D3178] font-semibold flex justify-center">Calculate Shopping</h1>
                            <div className="flex flex-col justify-center h-[284px] rounded-[3px] bg-[#F4F4FC] gap-8">
                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-col gap-2 w-[307px] mx-auto">
                                        <input type="text" placeholder="Bangladesh" className="bg-[#F4F4FC] font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#C5CBE3]" />
                                        <span className="border-b-[1px] border-[#C7CEE4]"></span>
                                    </div>
                                    <div className="flex flex-col gap-2 w-[307px] mx-auto">
                                        <input type="text" placeholder="Mirpur Dhaka - 1200" className="bg-[#F4F4FC] font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#C5CBE3]" />
                                        <span className="border-b-[1px] border-[#C7CEE4]"></span>
                                    </div>                                
                                    <div className="flex flex-col gap-2 w-[307px] mx-auto">
                                        <input type="text" placeholder="Postal Code" className="bg-[#F4F4FC] font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#C5CBE3]" />
                                        <span className="border-b-[1px] border-[#C7CEE4]"></span>
                                    </div>                            
                                </div>
                                <span>
                                    <button type="button" className="w-[180px] h-[42px] rounded-sm bg-[#FB2E86] mx-8 text-white">Calculate Shiping</button>
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}