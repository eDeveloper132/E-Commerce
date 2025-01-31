import Image, { StaticImageData } from "next/image";

export default function Related_Products_Card({
  title,
  image,
  Price,
  rating_count,
}: {
  title: string;
  image: StaticImageData;
  Price: number;
  rating_count: number;
}) {
  const maxStars = 5;
  const filledStars = Math.min(rating_count, maxStars);
  const emptyStars = maxStars - filledStars;

  return (
    <>
      <div className="w-[270px] h-[400px] flex flex-col gap-3">
        <div className="w-[270px] h-[340px] bg-[#C4C4C4] rounded-[4px]">
          <Image src={image} width={270} className="h-[340px]" alt={title}></Image>
        </div>
        <div className="flex justify-between">
          <p className="font-[Josefin Sans] text-[16px] leading-[18.75px] text-[#151875] font-semibold">{title}</p>
          <ul className="flex gap-1">
            {Array.from({ length: filledStars }).map((_, index) => (
              <li key={`filled-star-${index}`}>
                <i className="fa-solid fa-star text-[#FFC416]"></i>
              </li>
            ))}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <li key={`empty-star-${index}`}>
                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-[Josefin Sans] text-[13px] leading-[15.23px] text-[#151875]">${Price}</p>
      </div>
    </>
  );
}
