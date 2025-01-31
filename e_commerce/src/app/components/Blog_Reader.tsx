import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export default function Blog_Reader({
  title,
  image,
  image_1,
  writer,
  image_2,
  date,
  paragraph,
}: {
  title: string;
  image_1: StaticImageData;
  image_2: StaticImageData;
  image: StaticImageData;
  writer: string;
  date: string;
  paragraph: string;
}) {
  return (
    <div className="w-full max-w-[870px] flex flex-col gap-4 px-4 md:px-6 lg:px-0">
      <Image
        src={image}
        width={870}
        alt="image"
        className="w-full max-w-[870px] h-auto rounded-md"
      />
      <div className="flex flex-wrap gap-4">
        <span className="flex gap-2 items-center">
          <Image
            src={image_1}
            alt="image"
            width={12}
            height={12}
            className="h-[12px]"
            style={{
              filter:
                "invert(28%) sepia(91%) saturate(5487%) hue-rotate(322deg) brightness(94%) contrast(104%)",
            }}
          />
          <span className="w-auto max-w-[160px] rounded-sm bg-[#FFE7F9] py-1 px-2">
            <p className="font-[Josefin-sans] text-[14px] text-[#151875] text-center">
              {writer}
            </p>
          </span>
        </span>
        <span className="flex gap-2 items-center">
          <Image
            src={image_2}
            alt="image"
            width={12}
            height={12}
            className="h-[12px]"
            style={{
              filter:
                "invert(76%) sepia(67%) saturate(732%) hue-rotate(1deg) brightness(101%) contrast(98%)",
            }}
          />
          <span className="w-auto max-w-[160px] rounded-sm bg-[#FFECE2] py-1 px-2">
            <p className="font-[Lato] font-semibold text-[14px] text-[#151875] text-center">
              {date}
            </p>
          </span>
        </span>
      </div>
      <p className="font-[Josefin-sans] font-bold text-[24px] md:text-[30px] text-[#151875] leading-[1.2]">
        {title}
      </p>
      <p className="font-[Lato] text-[14px] md:text-[16px] text-[#8A8FB9] leading-[1.6] text-justify">
        {paragraph}
      </p>
      <span className="flex gap-1 items-center">
        <p className="font-[Lato] font-semibold text-[16px] md:text-[18px] text-[#151875]">
          <Link href={'/Blog_single_page'}>Read More</Link>
        </p>
        <span className="w-2 h-2 rounded-full bg-red-600"></span>
      </span>
    </div>
  );
}
