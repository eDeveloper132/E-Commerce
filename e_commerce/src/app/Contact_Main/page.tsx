import Image from "next/image"
import contact_us_123 from '../../../public/contact_us_123.png'
export default function Contact_Main() {
    return(
        <>
            <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Contact Us
                        </p>
                        <div className="flex">
                            <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                Contact Us
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white w-full">
                <div className="flex justify-center w-full py-16 sm:py-24 md:py-32">
                    <div className="flex flex-col md:flex-row gap-12 sm:gap-16 md:gap-24">
                    {/* Information About Us Section */}
                    <div className="w-full md:w-[550px] flex flex-col gap-6 sm:gap-8 md:gap-12">
                        <p className="font-[Josefin Sans] text-center lg:text-left text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[42px] md:leading-[48px] text-[#151875] font-semibold">
                        Information About Us
                        </p>
                        <p className="font-[Lato] font-semibold text-center sm:text-left xs250:text-center text-sm sm:text-base md:text-lg leading-[22px] sm:leading-[24px] md:leading-[25.6px] text-[#8A8FB9]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <span className="w-full flex justify-center lg:justify-start">
                        <ul className="flex gap-2 justify-center lg:justify-start">
                            <li className="w-[25px] h-[25px] bg-[#5625DF] rounded-full"></li>
                            <li className="w-[25px] h-[25px] bg-[#FF27B7] rounded-full"></li>
                            <li className="w-[25px] h-[25px] bg-[#37DAF3] rounded-full"></li>
                        </ul>
                        </span>
                    </div>

                    {/* Contact Way Section */}
                    <div className="w-full md:w-[550px] flex flex-col gap-6 sm:gap-8 md:gap-12">
                        <p className="font-[Josefin Sans] text-center lg:text-left text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[42px] md:leading-[48px] text-[#151875] font-semibold">
                        Contact Way
                        </p>
                        <div className="flex justify-center xs250:flex">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                            <div className="w-full flex gap-3 sm:gap-4 md:gap-5">
                            <span className="w-[45px] h-[45px] rounded-full bg-[#5726DF]"></span>
                            <span className="flex flex-col">
                                <p className="font-[Lato] font-semibold text-sm text-[#8A8FB9]">
                                Tel: 877-67-88-99
                                </p>
                                <p className="font-[Lato] font-semibold text-sm text-[#8A8FB9]">
                                E-Mail: shop@store.com
                                </p>
                            </span>
                            </div>
                            <div className="w-full flex gap-3 sm:gap-4 md:gap-5">
                            <span className="w-[45px] h-[45px] rounded-full bg-[#FB2E86]"></span>
                            <span className="flex flex-col">
                                <p className="font-[Lato] font-semibold text-sm text-[#8A8FB9]">
                                Support Forum
                                </p>
                                <p className="font-[Lato] font-semibold text-sm text-[#8A8FB9]">
                                For over 24hr
                                </p>
                            </span>
                            </div>
                            <div className="w-full flex gap-3 sm:gap-4 md:gap-5">
                            <span className="w-[45px] h-[45px] rounded-full bg-[#FFB265]"></span>
                            <span className="flex flex-col">
                                <p className="font-[Lato] font-semibold text-sm text-[#8A8FB9]">
                                20 Margaret st, London
                                </p>
                                <p className="font-[Lato] font-semibold text-sm text-[#8A8FB9]">
                                Great Britain, 3NM98-LK
                                </p>
                            </span>
                            </div>
                            <div className="w-full flex gap-3 sm:gap-4 md:gap-5">
                            <span className="w-[45px] h-[45px] rounded-full bg-[#1BE982]"></span>
                            <span className="flex flex-col">
                                <p className="font-[Lato] font-semibold text-sm text-[#8A8FB9]">
                                Free standard shipping
                                </p>
                                <p className="font-[Lato] font-semibold text-sm text-[#8A8FB9]">
                                on all orders.
                                </p>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center w-full my-16 sm:my-24 md:my-32">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    <div className="flex flex-col gap-2 w-full sm:w-[540px]">
                        <p className="font-[Josefin Sans] text-[36px] leading-[48px] text-[#151875] font-semibold">
                        Get In Touch
                        </p>
                        <p className="font-[Lato] font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <input type="text" className="w-full sm:w-[255px] h-[45px] rounded-[3px] border-[1px] border-[#A4B6C8B2]/70 text-[#8A8FB9] p-2 font-[Lato] font-normal text-[16px] leading-[19.2px]" placeholder="Your Name*" />
                        <input type="text" className="w-full sm:w-[255px] h-[45px] rounded-[3px] border-[1px] border-[#A4B6C8B2]/70 text-[#8A8FB9] p-2 font-[Lato] font-normal text-[16px] leading-[19.2px]" placeholder="Your E-mail*" />
                        </div>
                        <input type="text" className="w-full h-[45px] rounded-[3px] border-[1px] border-[#A4B6C8B2]/70 text-[#8A8FB9] p-2 font-[Lato] font-normal text-[16px] leading-[19.2px]" placeholder="Subject*" />
                        <textarea className="w-full h-[166px] rounded-[3px] border-[1px] border-[#A4B6C8B2]/70 text-[#8A8FB9] p-2 font-[Lato] font-normal text-[16px] leading-[19.2px]" placeholder="Type Your Message*"></textarea>
                        <button type="submit" className="w-full sm:w-[158px] h-[45px] rounded-[3px] bg-[#FB2E86] text-white mt-4">
                        Send Mail
                        </button>
                    </div>
                    <div className="w-full sm:w-[720px] h-auto">
                        <Image src={contact_us_123} alt="contact-us-image" />
                    </div>
                    </div>
                </div>
            </div>



        </>
    )
}