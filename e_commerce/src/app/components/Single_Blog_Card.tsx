import Image, { StaticImageData } from "next/image";

export default function Single_Blog_Card({
  title,
  image,
  discountedPrice,
  originalPrice,
  rating_count,

}: {
  title: string;
  image: StaticImageData;
  discountedPrice: number;
  originalPrice: number;
  rating_count: number;

}) {
    const maxStars = 5;
    const filledStars = Math.min(rating_count, maxStars);
    const emptyStars = maxStars - filledStars;
  return (
    <>
        <div className="w-[210px] h-[320px]">
            <div className="flex flex-col gap-2">
                <div className="h-[254px]">
                    <Image src={image} className="h-[254px]" width={210} alt={title}></Image>
                </div>
                <span className="flex justify-center">
                    <p className="font-[Josefin Sans] text-[19.68pxpx] leading-[23.6px] text-[#000000]">{title}</p>
                </span>
                <div className="flex justify-evenly">
                    <p className="font-[Josefin Sans] text-[13.89px] leading-[16.28px] text-[#232A69] my-auto">${discountedPrice.toFixed(2)}</p>
                    <p className="font-[Josefin Sans] text-[13.89px] leading-[16.28px] line-through text-[#FF38B0] my-auto">${originalPrice.toFixed(2)}</p>
                    <ul className="flex gap-1">
                        {Array.from({ length: filledStars }).map((_, index) => (
                        <li key={`filled-star-${index}`}>
                            <i className="fa-solid fa-star text-[10px] text-[#FFC416]"></i>
                        </li>
                        ))}
                        {Array.from({ length: emptyStars }).map((_, index) => (
                        <li key={`empty-star-${index}`}>
                            <i className="fa-regular fa-star text-[10px] text-[#B2B2B2]"></i>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
}
