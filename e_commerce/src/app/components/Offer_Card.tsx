'use client';
import Image, { StaticImageData } from "next/image";

interface OfferCardProps {
  image: StaticImageData;
  title: string;
  paragraph: string;
}

export default function Offer_Card({
  image,
  title,
  paragraph
}: OfferCardProps) {
  return (
    <div className="w-[270px] flex flex-col gap-2 shadow-lg">
        <div className="w-[65px] mt-[56px] mb-[27px] mx-auto">
            <Image src={image} width={65} alt={title}></Image>
        </div>
        <div className="flex flex-col gap-2">
            <p className="font-[josefin sans] font-bold text-[22px] leading-[25.78px] text-[#151875] flex justify-center">{title}</p> 
            <p className="font-[Lato] font-bold text-[16px] leading-[25.6px] text-[#1A0B5B4D] opacity-30 text-justify px-8">{paragraph}</p>
        </div>
    </div>
  );
}
