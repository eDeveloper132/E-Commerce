import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ShopCardProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  discountedPrice?: number;
  originalPrice: number;
}

const ShopCard: FC<ShopCardProps> = ({
  id,
  image,
  title,
  discountedPrice,
  originalPrice,
}) => {
  const displayPrice = discountedPrice ?? originalPrice;

  return (
    <div className="w-[270px] h-[363px] flex flex-col gap-4 group">
      <div className="relative w-[270px] h-[280px] bg-[#F6F7FB] flex justify-center items-center group-hover:bg-[#EBF4F3]">
        <Image src={image} width={200} height={200} alt={title} />

        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={`./Product_Main/${id}`}>
            <button className="bottom-1 transform translate-y-28 bg-green-500 text-white px-2 py-1 md:px-4 md:py-1 rounded-sm text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-600 font-[Josefin Sans] h-[29px] flex items-center justify-center">
                View Details
            </button>
            </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <p className="font-[Josefin Sans] text-[18px] text-[#151875]">{title}</p>

        <div className="flex gap-2">
          <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
          <span className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></span>
          <span className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></span>
        </div>

        <p className="font-[Josefin Sans] text-[14px] text-[#151875]">
          {displayPrice}PKR
        </p>
      </div>
    </div>
  );
};

export default ShopCard;
