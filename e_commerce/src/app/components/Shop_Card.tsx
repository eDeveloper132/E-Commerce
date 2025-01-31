import Image, { StaticImageData } from "next/image";

export default function Shop_Card({
    image,
    title,
    discountedPrice,
    originalPrice,
}: {
    image: StaticImageData;
    title: string;
    discountedPrice: number;
    originalPrice: number;
}) {
  return (
    <div className="w-[270px] h-[363px] flex flex-col gap-4 group">
        <div className="relative w-[270px] h-[280px] bg-[#F6F7FB] flex justify-center group-hover:bg-[#EBF4F3]">
            <div className="flex flex-col justify-center">
                <Image src={image} width={200} alt={title}></Image>
            </div>
            <div className="absolute top-44 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
                <div className="flex flex-col gap-3">
                <i className="fa-solid fa-cart-shopping text-[#151875] text-xl cursor-pointer px-2"></i>
                <i className="fa-solid fa-search text-[#151875] text-xl cursor-pointer px-2"></i>
                <i className="fa-regular fa-heart text-[#151875] text-xl cursor-pointer px-2"></i>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex justify-center">
                <p className="font-[Josefin Sans] font-normal text-[18px] leading-[18px] text-[#151875]">{title}</p>
            </div>
            <div className="flex justify-center">
                <div className="flex gap-2">
                    <span className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></span>
                    <span className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></span>
                    <span className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></span>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex gap-2">
                    <p className="font-[Josefin Sans] font-normal text-[14px] leading-[14px] text-[#151875]">${discountedPrice}</p>
                    <p className="font-[Josefin Sans] font-normal text-[14px] leading-[14px] text-[#FB2E86] line-through">${originalPrice}</p>
                </div>
            </div>
        </div>
    </div>
);
}
