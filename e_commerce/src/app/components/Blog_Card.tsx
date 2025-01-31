import Image, { StaticImageData } from "next/image";

export default function Blog_Card({
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
    <div className="w-full group sm:w-[370px] rounded-lg shadow-lg shadow-[#31208A0D]/5 flex flex-col">
      <Image
        src={image}
        width={370}
        height={220}
        alt={title}
        className="rounded-t-lg w-full h-[200px] object-cover"
      />

      <div className="flex gap-5 my-4 px-4">
        <div className="flex gap-1 items-center">
          <Image
            src={image_1}
            width={14}
            alt={title}
            className="my-auto"
            style={{
              filter: "invert(28%) sepia(91%) saturate(5487%) hue-rotate(322deg) brightness(94%) contrast(104%)",
            }}
          />
          <p className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#151875] my-auto">
            {writer}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <Image
            src={image_2}
            width={14}
            alt={title}
            className="my-auto"
            style={{
              filter: "invert(76%) sepia(67%) saturate(732%) hue-rotate(1deg) brightness(101%) contrast(98%)",
            }}
          />
          <p className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-[#151875] my-auto">
            {date}
          </p>
        </div>
      </div>

      <div className="my-2 px-4 sm:px-6 flex flex-col gap-3">
        <h1 className="font-[Josefin Sans] font-semibold text-[18px] sm:text-[20px] leading-[24px] group-hover:text-[#FB2E86] text-[#151875]">
          {title} {new Date().getFullYear()}
        </h1>
        <p className="font-[Lato] font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#72718F]">
          {paragraph}
        </p>

        <p className="font-[Lato] font-normal text-[14px] sm:text-[16px] leading-[24px] group-hover:text-[#FB2E86] text-[#151875]">
          <u className="cursor-pointer">Read More</u>
        </p>
      </div>
    </div>
  );
}
