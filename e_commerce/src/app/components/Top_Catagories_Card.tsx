'use client';
import Image, { StaticImageData } from "next/image";

interface Top_Catagories_Card_Props {
  image: StaticImageData;
  title: string;
  price: number;
}

export default function Top_Catagories_Card({
  image,
  title,
  price
}: Top_Catagories_Card_Props) {
  return (
    <div className="w-[270px] h-[345px] flex flex-col py-2 group">
      <div className="relative w-[269px] h-[269px] bg-[#F6F7FB] rounded-full shadow-lg shadow-[#31208A0D]/5 flex justify-center items-center overflow-hidden">
        <div className="flex flex-col justify-center">
          <Image src={image} width={178} alt={title} className="z-10" />
        </div>
        {/* Hover effect with button */}
        <div className="absolute flex flex-col -mb-48 opacity-0 items-center group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-[#08D15F] text-white rounded-sm font-[Josefin Sans] w-[94px] flex justify-center">
            View Shop
          </button>
        </div>
        {/* Decorative hover border */}
        <div className="absolute inset-0 border-l-8 border-b-8 opacity-0 border-l-[#9F63F9] border-b-[#9F63F9] rounded-full group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="flex flex-col mt-7">
        <div className="flex justify-center">
          <p className="font-[Josefin Sans] font-normal text-[20px] leading-[23.44px] text-[#151875]">
            {title}
          </p>
        </div>
        <div className="flex justify-center mt-3">
          <p className="font-[Josefin Sans] font-normal text-[16px] leading-[16px] text-[#151875]">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}
