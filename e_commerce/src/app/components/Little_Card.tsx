import Image, { StaticImageData } from "next/image";

export default function Little_Card({
  title,
  image,
  date,
}: {
  title: string;
  image: StaticImageData;
  date: string;
}) {
  return (
    <div className="flex gap-2 md:gap-3 h-[51px] w-full max-w-[300px] hover:bg-slate-400 group cursor-pointer">
      {/* Responsive Image */}
      <Image
        width={70}
        height={51}
        className="h-[51px] w-[70px] object-cover"
        src={image}
        alt="image"
      />
      {/* Text Content */}
      <div className="flex flex-col gap-1 justify-center">
        <p className="font-[Josefin-Sans] font-normal text-[14px] leading-[14px] text-[#3F509E] group-hover:text-white truncate">
          {title}
        </p>
        <p className="font-[Lato] font-semibold text-[11px] leading-[13.2px] text-[#8A8FB9] group-hover:text-white">
          {date}
        </p>
      </div>
    </div>
  );
}
