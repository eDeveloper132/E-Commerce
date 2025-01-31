import Image from "next/image";
import not_found from '../../public/not_found.png'
import sponsor from "../../public/sponsor.png";
import Link from "next/link";
export default function NotFound() {
    return (
        <>
            <div className="bg-white">
                    <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                        <div className="flex justify-center px-4 sm:px-8 md:px-16">
                            <div className="flex flex-col items-center md:items-start">
                                <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold text-center md:text-left">
                                    404 Not Found
                                </p>
                                <div className="flex flex-col sm:flex-row items-center md:items-start">
                                    <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px] text-center sm:text-left text-black">
                                        Home.Pages.
                                    </p>
                                    <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-2 sm:my-0 sm:ml-2 text-center sm:text-left">
                                        404 Not Found
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white">
                        <div className="flex justify-center my-20 px-4">
                            <Image src={not_found} alt="image" className="max-w-full h-auto" />
                        </div>
                        <div className="flex justify-center mb-20 px-4">
                            <Link href={'/'}>
                                <button type="submit" className="w-[165px] h-[45px] rounded-[3px] bg-[#FB2E86] text-white">
                                    Back To Home
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center my-20 px-4">
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
    );
}

