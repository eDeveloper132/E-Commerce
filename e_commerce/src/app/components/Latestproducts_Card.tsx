'use client';
import Image, { StaticImageData } from "next/image";
import sale from "../../../public/sale-removebg.png";

interface LatestProductsCardProps {
  image: StaticImageData;
  title: string;
  discountedPrice: number;
  originalPrice: number;
}

export default function Latestproducts_Card({
  image,
  title,
  discountedPrice,
  originalPrice,
}: LatestProductsCardProps) {
  return (
    <div className="w-[360px] h-[306px] group">
      <div className="relative w-[360px] h-[269.96px] bg-[#F7F7F7] hover:bg-white flex justify-center">
      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -left-1">
          <Image src={sale} width={80} alt="sale" />
          <div className="flex flex-col pt-24 gap-3 mx-2">
          <i className="fa-solid fa-cart-shopping text-[#2F1AC4] text-xl cursor-pointer px-2"></i>
          <i className="fa-regular fa-heart text-[#2F1AC4] text-xl cursor-pointer px-2"></i>
          <i className="fa-solid fa-search text-[#2F1AC4] text-xl cursor-pointer px-2"></i>
          </div>
        </div>
        <Image src={image} width={223} alt={title} />

      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="h-4 font-[Josefin Sans] text-[16px] leading-[18.75px] text-[#151875] border-b-2 border-[#EEEFFB]">
            {title}
          </p>
          <ul className="flex gap-2">
            <li className="h-[14px] font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#151875]">
              ${discountedPrice}
            </li>
            <li className="h-3 font-[Josefin Sans] text-[12px] leading-[14.06px] text-[#FB2448] line-through">
              ${originalPrice}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
