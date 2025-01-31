import Image, { StaticImageData } from "next/image";

export default function Little_Card_Two({
  title,
  image,
  lowerPrice,
  upperPrice
}: {
  title: string;
  image: StaticImageData;
  lowerPrice: number;
  upperPrice: number;
}) {
  return (
    <div className="w-[126px] h-[126px] flex flex-col gap-1 hover:bg-slate-500 group cursor-pointer">
        <span>
            <Image src={image} width={126} className="h-[80px]" alt={title}></Image>
        </span>
        <span className="flex justify-center">
            <p className="font-[Lato] font-semibold text-[14px] leading-[16.8px] text-[#151875] group-hover:text-yellow-300">{title}</p>
        </span>
        <div className="flex gap-1 justify-center">
            <p className="font-[Lato] text-[12px] leading-[14.4px] text-[#8A8FB9] group-hover:text-white">${lowerPrice.toFixed(2)}</p>
            <p className="font-[Lato] text-[12px] leading-[14.4px] text-[#8A8FB9] group-hover:text-white">-</p>
            <p className="font-[Lato] text-[12px] leading-[14.4px] text-[#8A8FB9] group-hover:text-white">${upperPrice.toFixed(2)}</p>
        </div>
    </div>
  );
}
