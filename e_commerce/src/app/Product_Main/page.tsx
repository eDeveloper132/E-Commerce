import Image from "next/image"
import product_1 from "../../../public/product_1.jpeg"
import product_2 from "../../../public/product_2.jpeg"
import product_3 from "../../../public/product_3.jpeg"
import product_4 from "../../../public/product_4.jpeg"
import related_Product_1 from "../../../public/related_Product_1.jpeg"
import related_Product_2 from "../../../public/related_Product_2.jpeg"
import related_Product_3 from "../../../public/related_Product_3.jpeg"
import related_Product_4 from "../../../public/related_Product_4.jpeg"
import Related_Products_Card from "../components/Related_Products_Card"
import sponsor from "../../../public/sponsor.png";

export default function Product_Main(){
    return(
        <>
                    <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Product Details
                        </p>
                        <div className="flex">
                            <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                Product Details
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex xl:flex 2xl:flex justify-center bg-white">
                <div className="w-[1170px] h-[510px] shadow-lg shadow-[#F6F4FD] my-28 p-2">
                    <div className="flex space-x-10">
                    <div className="flex flex-col gap-2">
                        <Image src={product_1} width={151} className="h-[155px]" alt="image"></Image>
                        <Image src={product_2} width={151} className="h-[155px]" alt="image"></Image>
                        <Image src={product_3} width={151} className="h-[155px]" alt="image"></Image>
                    </div>
                    <div>
                        <Image src={product_4} width={375} className="h-[487px]" alt="image"></Image>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <p className="font-[Josefin Sans] text-[36px] leading-[42.19px] text-[#0D134E] font-bold">Playwood arm chair</p>
                        <span className="flex gap-2">
                            <ul className="flex gap-1 my-auto">
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                                <i className="fa-solid fa-star text-[#FFC416]"></i>
                            </ul>
                            <p className="text-[#151875] font-[Josefin Sans] text-[14px] leading-[29px]">(22)</p>
                        </span>
                        <span className="flex gap-5">
                            <p className="font-[Josefin Sans] text-[16px] leading-[29px] text-[#151875]">$32.00</p>
                            <p className="font-[Josefin Sans] text-[16px] leading-[29px] text-[#FB2E86] line-through">$32.00</p>
                        </span>
                        <p className="font-[Josefin Sans] text-[16px] leading-[18.75px] text-[#0D134E] font-semibold">Color</p>
                        <p className="font-[Josefin Sans] text-[16px] leading-[29px] text-[#A9ACC6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        <span className="flex justify-end w-3/6">
                            <span className="flex gap-4">
                                <p className="font-[Josefin Sans] text-[16px] leading-[29px] text-[#151875] cursor-pointer font-semibold">Add To cart</p>
                                <i className="fa-regular fa-heart text-[#535399] text-md cursor-pointer px-2 my-auto"></i>
                            </span>
                        </span>
                        <p className="font-[Josefin Sans] text-[16px] leading-[29px] text-[#151875] font-semibold">Categories:</p>
                        <p className="font-[Josefin Sans] text-[16px] leading-[29px] text-[#151875] font-semibold">Tags</p>
                        <span className="flex gap-4">
                            <p className="font-[Josefin Sans] text-[16px] leading-[29px] text-[#151875] font-semibold">
                                Share
                            </p>
                            <ul className="flex gap-4">
                                <li className="w-6 h-6 rounded-full bg-[#151875] flex justify-center">
                                    <span className="flex flex-col justify-center">
                                        <i className="fa-brands fa-facebook-f text-white"></i>
                                    </span>
                                </li>
                                <li className="w-6 h-6 rounded-full bg-[#FB2E86] flex justify-center">
                                    <span className="flex flex-col justify-center">
                                        <i className="fa-brands fa-instagram text-white"></i>
                                    </span>
                                </li>
                                <li className="w-6 h-6 rounded-full bg-[#151875] flex justify-center">
                                    <span className="flex flex-col justify-center">
                                        <i className="fa-brands fa-twitter text-white"></i>
                                    </span>
                                </li>
                            </ul>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden xl:hidden 2xl:hidden justify-center bg-white">
            <div className="flex justify-center">
                <div className=" h-[510px] shadow-lg shadow-[#F6F4FD] my-28 flex gap-3 p-2">
                    <div className="flex flex-col gap-2">
                        <Image src={product_1} width={151} className="h-[155px]" alt="image"></Image>
                        <Image src={product_2} width={151} className="h-[155px]" alt="image"></Image>
                        <Image src={product_3} width={151} className="h-[155px]" alt="image"></Image>
                    </div>
                    <div>
                        <Image src={product_4} width={375} className="h-[487px]" alt="image"></Image>
                    </div>

                </div>
            </div>
            </div>
            <div className="flex justify-center lg:hidden xl:hidden 2xl:hidden">
  <div className="flex flex-col justify-center gap-4 sm:px-4 md:px-6">
    <p className="font-[Josefin Sans] text-[24px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[42.19px] text-[#0D134E] font-bold text-center sm:text-left">
      Playwood arm chair
    </p>
    <span className="flex gap-2 justify-center sm:justify-start">
      <ul className="flex gap-1 my-auto">
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
      </ul>
      <p className="text-[#151875] font-[Josefin Sans] text-[12px] md:text-[14px] leading-[20px] md:leading-[29px]">(22)</p>
    </span>
    <span className="flex gap-5 justify-center sm:justify-start">
      <p className="font-[Josefin Sans] text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] text-[#151875]">$32.00</p>
      <p className="font-[Josefin Sans] text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] text-[#FB2E86] line-through">$32.00</p>
    </span>
    <p className="font-[Josefin Sans] text-[14px] md:text-[16px] leading-[18px] md:leading-[18.75px] text-[#0D134E] font-semibold text-center sm:text-left">
      Color
    </p>
    <p className="font-[Josefin Sans] text-[12px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[29px] text-[#A9ACC6] text-center sm:text-left xs250:px-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
    </p>
    <span className="flex justify-center sm:justify-end w-full md:w-3/6">
      <span className="flex gap-4">
        <p className="font-[Josefin Sans] text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] text-[#151875] cursor-pointer font-semibold">
          Add To cart
        </p>
        <i className="fa-regular fa-heart text-[#535399] text-md cursor-pointer px-2 my-auto"></i>
      </span>
    </span>
    <p className="font-[Josefin Sans] text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] text-[#151875] font-semibold xs250:px-2">
      Categories:
    </p>
    <p className="font-[Josefin Sans] text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] text-[#151875] font-semibold xs250:px-2">
      Tags
    </p>
    <span className="flex flex-col sm:flex-row gap-4">
      <p className="font-[Josefin Sans] text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] text-[#151875] font-semibold xs250:px-2">
        Share
      </p>
      <ul className="flex gap-4 justify-center sm:justify-start">
        <li className="w-6 h-6 rounded-full bg-[#151875] flex justify-center">
          <span className="flex flex-col justify-center">
            <i className="fa-brands fa-facebook-f text-white"></i>
          </span>
        </li>
        <li className="w-6 h-6 rounded-full bg-[#FB2E86] flex justify-center">
          <span className="flex flex-col justify-center">
            <i className="fa-brands fa-instagram text-white"></i>
          </span>
        </li>
        <li className="w-6 h-6 rounded-full bg-[#151875] flex justify-center">
          <span className="flex flex-col justify-center">
            <i className="fa-brands fa-twitter text-white"></i>
          </span>
        </li>
      </ul>
    </span>
  </div>
            </div>


<div className="h-[900px] bg-[#F9F8FE] flex justify-center">
  <div className="flex flex-col justify-center">
    <div className="w-full sm:w-[600px] md:w-[900px]">
      <div className="flex flex-col gap-10 sm:gap-10">
        <div className="flex xs250:justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start">
        <ul className="xs250:grid xs250:grid-cols-2 sm:grid sm:grid-cols-2 lg:flex xl:flex 2xl:flex lg:gap-20 xl:gap-20 2xl:gap-20 gap-4">
          <li className="text-[20px] sm:text-[24px] leading-[28.13px] font-semibold font-[Josefin Sans] text-[#151875] underline">Description</li>
          <li className="text-[20px] sm:text-[24px] leading-[28.13px] font-semibold font-[Josefin Sans] text-[#151875]">Additional Info</li>
          <li className="text-[20px] sm:text-[24px] leading-[28.13px] font-semibold font-[Josefin Sans] text-[#151875]">Reviews</li>
          <li className="text-[20px] sm:text-[24px] leading-[28.13px] font-semibold font-[Josefin Sans] text-[#151875]">Video</li>
        </ul>
        </div>
        <span className="flex flex-col gap-4">
          <span className="xs250:flex xs250:justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start">
            <h1 className="font-[Josefin Sans] text-[20px] sm:text-[22px] leading-[25.78px] text-[#151875] font-semibold xs250:font-normal">Varius tempor.</h1>
          </span>
          <p className="flex text-justify font-[Josefin Sans] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[29px] text-[#A9ACC6] xs250:px-2">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
          </p>
        </span>
        <span className="flex flex-col gap-4">
          <span className="xs250:flex xs250:justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start">
            <h1 className="font-[Josefin Sans] text-[20px] sm:text-[22px] leading-[25.78px] text-[#151875] font-semibold xs250:font-normal">More details</h1>
          </span>
          <ul className="flex flex-col gap-2 xs250:px-2">
            <li className="flex gap-4 group hover:cursor-pointer">
              <span className="flex flex-col justify-center">
                <i className="fa-solid fa-arrow-right text-[#000000] group-hover:text-[#2F1AC4]"></i>
              </span>
              <p className="flex text-justify font-[Josefin Sans] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[29px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </li>
            <li className="flex gap-4 group hover:cursor-pointer">
              <span className="flex flex-col justify-center">
                <i className="fa-solid fa-arrow-right text-[#000000] group-hover:text-[#2F1AC4]"></i>
              </span>
              <p className="flex text-justify font-[Josefin Sans] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[29px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </li>
            <li className="flex gap-4 group hover:cursor-pointer">
              <span className="flex flex-col justify-center">
                <i className="fa-solid fa-arrow-right text-[#000000] group-hover:text-[#2F1AC4]"></i>
              </span>
              <p className="flex text-justify font-[Josefin Sans] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[29px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </li>
            <li className="flex gap-4 group hover:cursor-pointer">
              <span className="flex flex-col justify-center">
                <i className="fa-solid fa-arrow-right text-[#000000] group-hover:text-[#2F1AC4]"></i>
              </span>
              <p className="flex text-justify font-[Josefin Sans] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[29px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </div>
</div>

    <div className="flex justify-center w-1/2 mt-32 mb-12">
        <p className="font-[Josefin Sans] text-[36px] leading-[42.19px] text-[#101750] font-semibold">Related Products</p>
    </div>
          <div className="flex justify-center">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                  <Related_Products_Card title="Mens Fashion Wear" rating_count={4} image={related_Product_1} Price={43.00} />
                  <Related_Products_Card title="Women’s Fashion" rating_count={5} image={related_Product_2} Price={67.00} />
                  <Related_Products_Card title="Wolx Dummy Fashion" rating_count={4} image={related_Product_3} Price={67.00} />
                  <Related_Products_Card title="Top Wall Digital Clock" rating_count={3} image={related_Product_4} Price={51.00} />
              </div>
          </div>

          <div className="flex justify-center my-40">
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