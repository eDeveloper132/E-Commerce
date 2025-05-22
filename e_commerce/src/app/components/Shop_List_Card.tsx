import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function Shop_List_Card({
  id,
  title,
  image,
  paragraph,
  discountedPrice,
  originalPrice,
  width
}: {
  id?: string;
  title: string;
  image: string | StaticImageData;
  paragraph: string;
  discountedPrice?: number;
  originalPrice: number;
  width: string;
}) {
  const displayPrice = discountedPrice ?? originalPrice;
  const imageSrc = typeof image === 'string' ? image : image.src

  // Extract original dimensions from the image URL
  const { origWidth, origHeight } = useMemo(() => {
    const parts = imageSrc.split('-')
    const dimensionsPart = parts[parts.length - 1].split('.')[0]
    const [w, h] = dimensionsPart.split('x').map(Number)
    return { origWidth: w, origHeight: h }
  }, [imageSrc])

  const aspectRatio = origWidth / origHeight;

  // Define display dimensions for large devices
  const largeDeviceWidth = 5000;
  const largeDeviceHeight = Math.round(largeDeviceWidth / aspectRatio);

  // Define display dimensions for small devices
  const smallDeviceWidth = 250;
  const smallDeviceHeight = Math.round(smallDeviceWidth / aspectRatio);

  return (
    <>
      {/* For large devices */}
      <div className="hidden lg:block xl:block 2xl:block">
        <div className={width}>
          <div className="flex shadow-lg shadow-[#F6F6FD80]/50 gap-6 px-4 p-4">
            <span>
              <Image
                src={image}
                width={largeDeviceWidth}
                height={largeDeviceHeight}
                alt={title}
              />
            </span>
            <div className="flex flex-col justify-center gap-4">
              {/* Existing content */}
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
                    {displayPrice}PKR
                  </li>
                </ul>
              </div>
              <p className="font-[Lato] font-normal text-[17.67px] leading-[30.92px] text-[#9295AA] line-clamp-2">
                {paragraph}
              </p>
              <Link href={`./Product_Main/${id}`}>
                <button className="bg-green-500 text-white px-2 py-1 md:px-4 md:py-1 rounded-sm text-xs md:text-sm hover:bg-green-600 font-[Josefin Sans] h-[29px] flex items-center justify-center">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* For small devices */}
      <div className="flex lg:hidden flex-col shadow-md shadow-[#F6F6FD80]/50 w-full h-auto gap-4 p-4 my-4">
        <span>
          <Image
            src={image}
            width={smallDeviceWidth}
            height={smallDeviceHeight}
            alt={title}
            className="mx-auto"
          />
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
            <span className="text-[14px] text-[#111C85] font-[Josefin Sans]">{displayPrice}PKR</span>
          </div>
          <div className="flex justify-center">
            <p className="font-[Lato] font-normal text-sm text-[#9295AA] text-justify w-[200px] line-clamp-3">{paragraph}</p>
          </div>
          <div className="flex justify-center">
            <Link href={`./Product_Main/${id}`}>
              <button className="bg-green-500 text-white px-2 py-1 md:px-4 md:py-1 rounded-sm text-xs md:text-sm hover:bg-green-600 font-[Josefin Sans] h-[29px] flex items-center justify-center">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}