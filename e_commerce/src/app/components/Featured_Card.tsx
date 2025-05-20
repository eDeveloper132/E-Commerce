// components/Featured_Card.tsx
import Image from "next/image";
import Link from "next/link";

// Utility function to truncate description to 10 words
const truncateDescription = (text: string, maxWords: number): string => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
};

export default function Featured_Card({
  id,
  name,
  description,
  price,
  image,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}) {
  const truncatedDescription = truncateDescription(description, 10);

  return (
    <div className="w-full group flex flex-col gap-3 shadow-lg pb-4 hover:shadow-xl transition-shadow duration-300 hover:bg-[#2F1AC4]">
      {/* Image container */}
      <div className="relative w-full aspect-[270/236] bg-[#F6F7FB] flex justify-center items-center">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="object-center"
        />

        {/* Overlay with icons */}
        {/* <div className="absolute inset-0 flex-col-reverse items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-30">
          <i className="fa-solid fa-cart-shopping text-blue-950 text-lg md:text-xl cursor-pointer px-2 mt-2"></i>
          <i className="fa-regular fa-heart text-blue-500 text-lg md:text-xl cursor-pointer pr-2"></i>
        </div> */}

        {/* "View Details" button wrapped in Link */}
        <Link href={`./Product_Main/${id}`}>
          <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 md:px-4 md:py-1 rounded-sm text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-600 font-[Josefin Sans] h-[29px] flex items-center justify-center">
            View Details
          </button>
        </Link>
      </div>

      {/* Product details */}
      <div className="text-[#FB2E86] group-hover:text-white font-[Lato] font-bold text-base md:text-lg text-center">
        {name}
      </div>
      <ul className="flex justify-center gap-2 md:gap-3">
        <li className="w-3 h-0.5 md:w-4 md:h-1 rounded-[10px] bg-[#05E6B7]"></li>
        <li className="w-3 h-0.5 md:w-4 md:h-1 rounded-[10px] bg-[#F701A8]"></li>
        <li className="w-3 h-0.5 md:w-4 md:h-1 rounded-[10px] group-hover:bg-[#FFEAC1] bg-[#00009D]"></li>
      </ul>
      <p className="font-[Josefin Sans] text-sm md:text-base group-hover:text-white text-[#151875] text-center">
        {truncatedDescription}
      </p>
      <p className="font-[Lato] font-normal text-sm md:text-base group-hover:text-white text-[#151875] text-center">
        {price}PKR
      </p>
    </div>
  );
}