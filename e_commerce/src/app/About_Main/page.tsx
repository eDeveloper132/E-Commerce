import Image from "next/image"
import about_us from "../../../public/about_us.jpeg"
import about_us_1 from "../../../public/about_us_1.jpeg"
import about_us_2 from "../../../public/about_us_2.jpeg"
import about_us_3 from "../../../public/about_us_3.jpeg"
import Offer_Card from "../components/Offer_Card"
import delivery_van from "../../../public/delivery_van.png"
import support from "../../../public/support.png"
import award from "../../../public/award.png"
import twentyfourseven from "../../../public/24_7.png"
export default function About_Main() {
    return (
        <>
            <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            About Us
                        </p>
                        <div className="flex">
                            <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px] text-black">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                About Us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
            <div className="w-screen bg-white">
                <div className="flex justify-center py-36 px-4">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 xl:gap-12 2xl:gap-12 items-center lg:items-start">
                    <div className="relative w-full lg:w-[552px] h-[410px] bg-[#2B3CAB]">
                        <Image
                        className="absolute w-full lg:w-[555px] h-[390px] left-5"
                        src={about_us}
                        alt="image"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-3 w-full lg:w-[550px] text-center lg:text-left lg:py-12">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[30px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[48px] text-[#151875] font-semibold">
                        Know About Our Ecomerce Business, History
                        </p>
                        <p className="font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25.6px] text-[#8A8FB9]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <button
                        className="w-full max-w-[145px] lg:w-[145px] h-[44px] rounded-[3px] bg-[#FB2E86] text-white mt-8 lg:mt-12 mx-auto lg:mx-0"
                        type="button"
                        >
                        Contact Us
                        </button>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="font-[josefin Sans] text-[42px] leading-[25.6px] text-black font-semibold">Our Features</p>
                </div>

                <div className="flex justify-center my-16">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
                        <Offer_Card image={delivery_van} title="Free Delivery" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."/>
                        <Offer_Card image={support} title="100% Cashback" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."/>
                        <Offer_Card image={award} title="Quality Product" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."/>
                        <Offer_Card image={twentyfourseven} title="24/7 Support" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."/>
                    </div>
                </div>

                <div className="h-auto bg-[#FBFBFF] mt-20 mb-72 flex justify-center px-4 sm:px-8 py-20">
                    <div className="flex flex-col justify-center items-center text-center sm:text-left">
                        <p className="font-[Josefin Sans] text-[32px] sm:text-[42px] leading-[30px] sm:leading-[25.6px] font-semibold text-black">Our Client Say!</p>
                        <div className="mt-16 flex w-full max-w-[380px] sm:w-[190px] h-[64px] mx-auto sm:mx-12 gap-2 justify-center">
                            <Image src={about_us_1} className="w-[55px] h-[55px]" alt="image" />
                            <Image src={about_us_2} className="w-[55px] h-[55px]" alt="image" />
                            <Image src={about_us_3} className="w-[55px] h-[55px]" alt="image" />
                        </div>
                        <p className="font-[Lato] font-semibold text-[20px] sm:text-[22px] leading-[25.6px] text-black mx-4 sm:mx-20 mt-2">Selina Gomez</p>
                        <p className="font-[Lato] font-semibold text-[10px] sm:text-[12px] leading-[25.6px] text-[#8A8FB9] mx-4 sm:mx-24">Ceo At Webecy Digital</p>
                        <p className="w-full max-w-[400px] mt-4 text-justify font-[Lato] font-bold text-[14px] sm:text-[16px] leading-[25.6px] text-[#8A8FB9] mx-4 sm:mx-24">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
                        </p>
                        <span className="flex gap-2 justify-center mt-10">
                            <div className="w-[18px] h-[3px] rounded-[3px] bg-[#FF75B0]"></div>
                            <div className="w-[27px] h-[3px] rounded-[3px] bg-[#FB2E86]"></div>
                            <div className="w-[18px] h-[3px] rounded-[3px] bg-[#FF75B0]"></div>
                        </span>
                    </div>
                </div>


            </div>
</div>

        </>
    )
}