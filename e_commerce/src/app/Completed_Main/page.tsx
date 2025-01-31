import Link from "next/link"
import Image from "next/image"
import sponsor from "../../../public/sponsor.png"
export default function Completed_Main() {
    return (
        <>
            <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Order Completed
                        </p>
                        <div className="flex">
                            <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                Order Completed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
            <div className="w-screen bg-white">
    <div className="flex justify-center my-16 md:my-32">
        <div className="w-full max-w-[700px] h-auto md:h-64 relative px-4 sm:px-6">
            <div className="absolute top-0 left-0">
                <i className="fa-regular fa-clock text-5xl md:text-7xl text-[#395093]"></i>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-center">
                        <div className="relative w-16 h-16 md:w-[65px] md:h-[65px] border-4 md:border-8 border-[#F6F7FA] rounded-full flex justify-center">
                            <div className="flex flex-col justify-center">
                                <div className="absolute left-4 md:left-2">
                                    <i className="fa-solid fa-check text-2xl md:text-4xl text-[#FF1788]"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="font-[Josefin Sans] text-xl md:text-[36px] leading-6 md:leading-[42.19px] font-semibold text-[#101750] flex justify-center text-center">
                        Your Order Is Completed!
                    </p>
                    <p className="max-w-full text-sm md:text-[16px] leading-5 md:leading-[30px] font-medium text-[#8D92A7] text-justify">
                        Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </p>
                    <span className="flex justify-center">
                    <Link href={'/'}>
                        <button type="button" className="w-36 md:w-[208px] h-10 md:h-[60px] rounded bg-[#FF1788] text-[#FFFFFF]">
                            Continue Shopping
                        </button>
                    </Link>
                    </span>
                </div>
            </div>
            <div className="absolute -bottom-10 md:-bottom-20 right-0">
                <i className="fa-solid fa-clipboard-list text-5xl md:text-7xl text-[#FB636F]"></i>
            </div>
        </div>
    </div>
</div>
<div className="flex justify-center my-5">
                <Image 
                    src={sponsor} 
                    width={1000} 
                    height={100} 
                    alt="sponsor" 
                    className="max-w-full h-auto" 
                    style={{ objectFit: 'contain' }}
                />
            </div>
            </div>
        </>
    )
}