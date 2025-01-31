import Image, { StaticImageData } from "next/image";

export default function Shop_List_Card({
  title,
  image,
  paragraph,
  discountedPrice,
  originalPrice,
  width
}: {
  title: string;
  image: StaticImageData;
  paragraph: string;
  discountedPrice: number;
  originalPrice: number;
  width: string
}) {
  return (
    <>
      {/* For large devices */}
      <div className="hidden lg:block xl:block 2xl:block">
      <div className={width}>
      <div className="flex shadow-lg shadow-[#F6F6FD80]/50 gap-6 px-4 p-4">
        <span>
          <Image src={image} width={313} alt={title} className="h-[217px]"></Image>
        </span>
        <div className="flex flex-col justify-center gap-4">
          <span className="flex gap-4">
            <p className="text-[#111C85] font-[Josefin Sans] text-[19.88px] leading-[23.29px] font-semibold">
              {title}
            </p>
            <ul className="flex gap-2 my-auto">
              <li className="w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full"></li>
              <li className="w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full"></li>
              <li className="w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full"></li>
            </ul>
          </span>
          <div className="flex">
            <ul className="flex gap-4">
              <li className="text-[15.46px] leading-[18.12px] text-[#111C85] font-[Josefin Sans]">
                ${discountedPrice}
              </li>
              <li className="text-[15.46px] leading-[18.12px] text-[#FF2AAA] font-[Josefin Sans] line-through">
                ${originalPrice}
              </li>
              <li className="flex gap-1">
                <i className="fa-solid fa-star text-[#FFC416]"></i>
                <i className="fa-solid fa-star text-[#FFC416]"></i>
                <i className="fa-solid fa-star text-[#FFC416]"></i>
                <i className="fa-solid fa-star text-[#FFC416]"></i>
                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
              </li>
            </ul>
          </div>
          <p className="font-[Lato] font-normal text-[17.67px] leading-[30.92px] text-[#9295AA]">
            {paragraph}
          </p>
          <ul className="flex gap-6">
            <li className="relative w-[34.23px] h-[34.23px] bg-[#FFFFFF] shadow-md shadow-[#0000000D]/5 flex justify-center">
              <i className="absolute fa-solid fa-cart-shopping text-[#535399] text-xl cursor-pointer top-2"></i>
            </li>
            <li className="relative w-[34.23px] h-[34.23px] bg-[#FFFFFF] shadow-md shadow-[#0000000D]/5 flex justify-center">
              <i className="absolute fa-regular fa-heart text-[#535399] text-xl cursor-pointer top-2"></i>
            </li>
            <li className="relative w-[34.23px] h-[34.23px] bg-[#FFFFFF] shadow-md shadow-[#0000000D]/5 flex justify-center">
              <i className="absolute fa-solid fa-search text-[#535399] text-xl cursor-pointer top-2"></i>
            </li>
          </ul>
        </div>
      </div>
      </div>
      </div>

      {/* For small devices */}
      <div className="flex lg:hidden flex-col shadow-md shadow-[#F6F6FD80]/50 w-full h-auto gap-4 p-4 my-4">
        <span>
          <Image src={image} width={250} alt={title} className="mx-auto h-[250px]"></Image>
        </span>
        <div className="flex flex-col gap-4">
        <span className="flex justify-center gap-2">
            <p className="text-[#111C85] font-[Josefin Sans] text-[19.88px] leading-[23.29px] font-semibold">
              {title}
            </p>
            <ul className="flex gap-2 my-auto">
              <li className="w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full"></li>
              <li className="w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full"></li>
              <li className="w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full"></li>
            </ul>
          </span>
          
          <div className="flex justify-center gap-4">
            <span className="text-[14px] text-[#111C85] font-[Josefin Sans]">${discountedPrice}</span>
            <span className="text-[14px] text-[#FF2AAA] font-[Josefin Sans] line-through">${originalPrice}</span>
              <li className="flex justify-center gap-1">
                <i className="fa-solid fa-star text-[#FFC416]"></i>
                <i className="fa-solid fa-star text-[#FFC416]"></i>
                <i className="fa-solid fa-star text-[#FFC416]"></i>
                <i className="fa-solid fa-star text-[#FFC416]"></i>
                <i className="fa-regular fa-star text-[#B2B2B2]"></i>
              </li>
          </div>
          <div className="flex justify-center">
            <p className="font-[Lato] font-normal text-sm text-[#9295AA] text-justify w-[200px]">{paragraph}</p>
          </div>
          <div className="flex justify-center">
          <ul className="flex gap-4 mt-2">
            <li className="relative w-[30px] h-[30px] bg-[#FFFFFF] shadow-md shadow-[#0000000D]/5 flex justify-center items-center">
              <i className="fa-solid fa-cart-shopping text-[#535399] text-sm cursor-pointer"></i>
            </li>
            <li className="relative w-[30px] h-[30px] bg-[#FFFFFF] shadow-md shadow-[#0000000D]/5 flex justify-center items-center">
              <i className="fa-regular fa-heart text-[#535399] text-sm cursor-pointer"></i>
            </li>
            <li className="relative w-[30px] h-[30px] bg-[#FFFFFF] shadow-md shadow-[#0000000D]/5 flex justify-center items-center">
              <i className="fa-solid fa-search text-[#535399] text-sm cursor-pointer"></i>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}
