import Image, { StaticImageData } from "next/image";

export default function Featured_Card({
  title,
  image,
  code,
  price,
}: {
  title: string;
  image: StaticImageData;
  code: string;
  price: number;
}) {
  return (
    <div className="w-[270px] group flex flex-col gap-3 shadow-lg pb-4 hover:shadow-xl transition-shadow duration-300 hover:bg-[#2F1AC4]">
      {/* Image container with hover effect */}
      <div className="relative bg-[#F6F7FB] w-[270px] h-[236px] flex justify-center items-center">
        <div className="w-[178px] bg-[#F6F7FB] my-auto">
          <Image src={image} alt={title} />
        </div>

        {/* Overlay with icons */}
        <div className="absolute inset-0 flex-col-reverse items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-30">
          <i className="fa-solid fa-cart-shopping text-blue-950 text-xl cursor-pointer px-2 mt-2"></i>
          <i className="fa-regular fa-heart text-blue-500 text-xl cursor-pointer pr-2"></i>
          <i className="fa-solid fa-search text-blue-500 text-xl cursor-pointer"></i>
        </div>

        {/* "View Details" button at the bottom */}
        <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-sm text-[12px] leading-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-600 font-[Josefin Sans] font-[1px] h-[29px] flex-col justify-center">
          View Details
        </button>
      </div>

      {/* Product details */}
      <div className="text-[#FB2E86] group-hover:text-white font-[Lato] font-bold text-[18px] leading-[21.6px] text-center">
        {title}
      </div>
      <ul className="flex justify-center gap-3">
        <li className="w-[14px] h-1 rounded-[10px] bg-[#05E6B7]"></li>
        <li className="w-[14px] h-1 rounded-[10px] bg-[#F701A8]"></li>
        <li className="w-[14px] h-1 rounded-[10px] group-hover:bg-[#FFEAC1] bg-[#00009D]"></li>
      </ul>
      <p className="font-[Josefin Sans] text-[14px] group-hover:text-white leading-[16.41px] text-[#151875] text-center">
        Code - {code}
      </p>
      <p className="font-[Lato] font-normal text-[14px] group-hover:text-white leading-[16.8px] text-[#151875] text-center">
        ${price}
      </p>
    </div>
  );
}
