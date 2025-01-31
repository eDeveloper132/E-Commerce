'use client';
import Image, { StaticImageData } from "next/image";

interface Trending_ProductsProps {
    image: StaticImageData;
    title: string;
    discountedPrice: number;
    originalPrice: number;
}

export default function Trending_Products({
    image,
    title,
    discountedPrice,
    originalPrice,
}: Trending_ProductsProps) {
    return(
        <div className="w-[270px] shadow-lg shadow-[#31208A0D] flex flex-col gap-6 pb-4">
            <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex justify-center py-6">
                <Image src={image} width={197} alt={title}></Image>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-[Lato] font-bold text-[16px] leading-[25.6px] mx-auto text-[#151875]">{title}</p>
                <div className="flex gap-4 mx-auto">
                    <p className="text-[#151875] font-[Josefin Sans] font-medium text-[14px] leading-[14px]">${discountedPrice}</p>
                    <p className="font-[Josefin Sans] font-medium text-[12px] leading-[12px] line-through text-[#1518754D]/30">${originalPrice}</p>
                </div>
            </div>
        </div>
    )
}