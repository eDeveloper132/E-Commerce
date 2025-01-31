import lamb from "../../../public/lamb.png";
import sofa from "../../../public/sofa.png";
import Image from "next/image";
// import Featured_Card from "../components/Featured_Card";
import Latestproducts_Card from "../components/Latestproducts_Card";
import Top_Catagories_Card from "../components/Top_Catagories_Card";
import Trending_Products from "../components/Trending_Products";
import Blog_Card from "../components/Blog_Card";
// import kursi_1 from "../../../public/kursi_1.png";
// import kursi_2 from "../../../public/kursi_2.png";
// import kursi_3 from "../../../public/kursi_3.png";
// import kursi_4 from "../../../public/kursi_4.png";
import kursi_5 from "../../../public/kursi_5.png";
import kursi_6 from "../../../public/kursi_6.png";
import kursi_7 from "../../../public/kursi_7.png";
import kursi_8 from "../../../public/kursi_8.png";
import kursi_9 from "../../../public/kursi_9.png";
import kursi_10 from "../../../public/kursi_10.png";
import kursi_11 from "../../../public/kursi_11.png";
import kursi_12 from "../../../public/kursi_12.png";
import kursi_13 from "../../../public/kursi_13.png";
import kursi_14 from "../../../public/kursi_14.png";
import kursi_15 from "../../../public/kursi_15.png";
import kursi_16 from "../../../public/kursi_16.png";
import kursi_17 from "../../../public/kursi_17.png";
import kursi_18 from "../../../public/kursi_18.png";
import kursi_19 from "../../../public/kursi_19.png";
import kursi_20 from "../../../public/kursi_20.png";
import Offer_Card from "../components/Offer_Card";
import delivery_van from "../../../public/delivery_van.png";
import twentyfourseven from "../../../public/24_7.png";
import support from "../../../public/support.png";
import award from "../../../public/award.png";
import bigsofa from "../../../public/bigsofa.png";
import gharyal from "../../../public/gharyal.png";
import boxes from "../../../public/boxes.png";
import discount_sofa from "../../../public/discount_sofa.png";
import sponsor from "../../../public/sponsor.png";
import background_image1 from "../../../public/background_image1.jpeg";
import background_image2 from "../../../public/background_image2.jpeg";
import background_image3 from "../../../public/background_image3.jpeg";
import pen_nib from "../../../public/pen_nib.png";
import calendar_iop from "../../../public/calendar_iop.png";
import { getProducts } from "../api/products/products";
// import IProduct from "../types/IProduct";
// import { urlFor } from "@/sanity/lib/image";
import ProductGrid from "../components/Products_Grid";
export default async function MainHome(){
  const productsData = await getProducts();
    return(
<main className="w-full bg-white">
    <div className="bg-[#F2F0FF] flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
            <Image src={lamb} alt="lamb" />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
  <div className="h-auto md:h-[300px] px-4 md:px-0">
    <p className="text-[#FB2E86] font-[Lato] font-bold text-[14px] md:text-[16px] leading-6 md:leading-7 pb-3">
      Best Furniture For Your Castle....
    </p>
    <h1 className="font-[Josefin Sans] text-[32px] sm:text-[42px] md:text-[48px] lg:text-[53px] font-bold leading-[42px] md:leading-[60px] lg:leading-[82px] tracking-[0.5%] pb-3 text-black">
      New Furniture Collection Trends in {new Date().getFullYear()}
    </h1>
    <p className="font-[Lato] font-bold text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#8A8FB9] pb-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
    </p>
    <button type="button" className="bg-[#FB2E86] text-white font-[Josefin Sans] rounded-sm h-[45px] md:h-[50px] w-[150px] md:w-[163px]">
      Shop Now
    </button>
  </div>
</div>

        <div className="w-full hidden md:w-1/3 lg:flex xl:flex 2xl:flex flex-col justify-center">
            <Image src={sofa} alt="sofa" />
        </div>
    </div>

    <div className="bg-[#F2F0FF] flex justify-center h-20">

    </div>

    <div className="flex justify-center mt-16 md:mt-32">
  <h1 className="font-[Josefin Sans] text-[28px] md:text-[42px] leading-[36px] md:leading-[50px] font-bold text-[#1A0B5B]">
    Featured Products
  </h1>
</div>


      <ProductGrid productsData={productsData} />

    {/* <div className="flex justify-center my-14">
        <ul className="flex gap-3">
        <li className="w-6 h-1 rounded-[10px] bg-[#FB2E86] cursor-pointer"></li>
        <li className="w-4 h-1 rounded-[10px] bg-[#FEBAD7] cursor-pointer"></li>
        <li className="w-4 h-1 rounded-[10px] bg-[#FEBAD7] cursor-pointer"></li>
        <li className="w-4 h-1 rounded-[10px] bg-[#FEBAD7] cursor-pointer"></li>
        </ul>
    </div> */}

    <div className="flex justify-center">
  <h1 className="font-[Josefin Sans] text-[28px] md:text-[42px] leading-[36px] md:leading-[50px] font-bold text-[#1A0B5B]">
    Latest Products
  </h1>
</div>

<div className="flex justify-center mt-6 mb-16 md:mb-32">
  <ul className="flex flex-wrap justify-center gap-6 md:gap-[58px]">
    <li className="text-[#FB2E86] border-b-2 border-[#FB2E86] font-[Lato] font-normal text-[16px] md:text-[18px] leading-[21px] cursor-pointer">
      New Arrival
    </li>
    <li className="text-[#151875] font-[Lato] font-normal text-[16px] md:text-[18px] leading-[21px] cursor-pointer">
      Best Seller
    </li>
    <li className="text-[#151875] font-[Lato] font-normal text-[16px] md:text-[18px] leading-[21px] cursor-pointer">
      Featured
    </li>
    <li className="text-[#151875] font-[Lato] font-normal text-[16px] md:text-[18px] leading-[21px] cursor-pointer">
      Special Offer
    </li>
  </ul>
</div>


    <div className="flex justify-center mt-[38px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
            <Latestproducts_Card image={kursi_5} title="Comfort Handy Craft" discountedPrice={42.00} originalPrice={65.00}/>
            <Latestproducts_Card image={kursi_6} title="Comfort Handy Craft" discountedPrice={42.00} originalPrice={65.00}/>
            <Latestproducts_Card image={kursi_7} title="Comfort Handy Craft" discountedPrice={42.00} originalPrice={65.00}/>
            <Latestproducts_Card image={kursi_8} title="Comfort Handy Craft" discountedPrice={42.00} originalPrice={65.00}/>
            <Latestproducts_Card image={kursi_9} title="Comfort Handy Craft" discountedPrice={42.00} originalPrice={65.00}/>
            <Latestproducts_Card image={kursi_10} title="Comfort Handy Craft" discountedPrice={42.00} originalPrice={65.00}/>
        </div>
    </div>

    <div className="flex justify-center my-16 md:my-32">
  <h1 className="font-[Josefin Sans] text-[28px] md:text-[42px] leading-[36px] md:leading-[49px] font-bold text-[#151875]">
    What ShopEasy Offer!
  </h1>
</div>


    <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
            <Offer_Card image={delivery_van} title="24/7 Support" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."/>
            <Offer_Card image={support} title="24/7 Support" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."/>
            <Offer_Card image={award} title="24/7 Support" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."/>
            <Offer_Card image={twentyfourseven} title="24/7 Support" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."/>
        </div>
    </div>
    <div className="bg-[#F1F0FF] my-[50px] md:my-[100px] lg:my-[135px] py-10">
    <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 px-5">
        <div className="w-full md:w-1/2 lg:w-1/4 py-10">
            <Image src={bigsofa} alt="sofa" className="max-w-full h-auto" />
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6 lg:gap-8 justify-center">
            <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[1.3] tracking-[1.5%] text-[#151875] font-bold text-center md:text-left">
                Unique Features Of Latest & Trending Products
            </p>
            
            <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#F52B70] my-auto"></div>
                    <p className="font-[Lato] font-medium text-[14px] sm:text-[16px] leading-[1.5] tracking-[1.5%] text-[#ACABC3]">
                        All frames constructed with hardwood solids and laminates
                    </p>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#2B2BF5] my-auto"></div>
                    <p className="font-[Lato] font-medium text-[14px] sm:text-[16px] leading-[1.5] tracking-[1.5%] text-[#ACABC3]">
                        Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails
                    </p>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#2BF5CC] my-auto"></div>
                    <p className="font-[Lato] font-medium text-[14px] sm:text-[16px] leading-[1.5] tracking-[1.5%] text-[#ACABC3]">
                        Arms, backs, and seats are structurally reinforced
                    </p>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-5 items-center">
                <button type="button" className="bg-[#FB2E86] px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] lg:text-[17px] rounded-sm font-[Josefin Sans] text-white">
                    Add To Cart
                </button>
                <div className="flex flex-col text-center md:text-left">
                    <p className="font-[Josefin Sans] text-[14px] sm:text-[16px] text-[#151875] font-bold">
                        B&B Italian Sofa
                    </p>
                    <p className="font-[Lato] font-semibold text-[#151875] text-[14px] sm:text-[16px]">
                        $32.00
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="flex justify-center my-16 md:my-32">
  <h1 className="font-[Josefin Sans] text-[28px] md:text-[42px] leading-[36px] md:leading-[50px] font-bold text-[#1A0B5B]">
    Trending Products
  </h1>
</div>


    <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
            <Trending_Products image={kursi_11} title="Cantilever chair" discountedPrice={42.00} originalPrice={65.00}/>
            <Trending_Products image={kursi_12} title="Cantilever chair" discountedPrice={42.00} originalPrice={65.00}/>
            <Trending_Products image={kursi_13} title="Cantilever chair" discountedPrice={42.00} originalPrice={65.00}/>
            <Trending_Products image={kursi_14} title="Cantilever chair" discountedPrice={42.00} originalPrice={65.00}/>
        </div>
    </div>

    <div className="flex justify-center my-32">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* First Card */}
        <div className="w-full max-w-[420px] h-[270px] shadow-lg shadow-[#31208A0D]/5 bg-[#FFF6FB] flex flex-col">
            <div className="flex flex-col gap-2 ml-6 mt-6">
                <h3 className="font-[Josefin Sans] font-bold text-[26px] leading-[26px] text-[#151875]">23% off in all products</h3>
                <p className="text-[#FB2E86] font-[Lato] font-semibold text-[16px] leading-[19.2px]"><u className="cursor-pointer">Shop Now</u></p>
            </div>
            <div className="flex justify-end -mt-4">
                <Image src={gharyal} alt="kursi" width={213}></Image>
            </div>
        </div>

        {/* Second Card */}
        <div className="w-full max-w-[420px] h-[270px] shadow-lg shadow-[#31208A]/5 bg-[#EEEFFB] flex flex-col">
            <div className="flex flex-col gap-2 ml-6 mt-6">
                <h3 className="font-[Josefin Sans] font-bold text-[26px] leading-[26px] text-[#151875]">23% off in all products</h3>
                <p className="text-[#FB2E86] font-[Lato] font-semibold text-[16px] leading-[19.2px]"><u className="cursor-pointer">View Collection</u></p>
            </div>
            <div className="flex justify-end -mt-28 -mr-5">
                <Image src={boxes} alt="kursi" width={312} height={173}></Image>
            </div>
        </div>

        {/* Third Card */}
        <div className="w-full max-w-[420px] flex flex-col gap-6">
            <div className="w-full flex gap-2">
                <div className="w-[107px] h-[74px] bg-[#F5F6F8] flex justify-center">
                    <Image src={kursi_15} width={67} alt="kursi"></Image>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-[Josefin Sans] font-normal text-[16px] leading-[18.75px] text-[#151875]">Executive Seat chair</p>
                    <p className="font-[Josefin Sans] font-normal text-[12px] leading-[12px] text-[#151875] line-through">$32.00</p>
                </div>
            </div>
            <div className="w-full flex gap-2">
                <div className="w-[107px] h-[74px] bg-[#F5F6F8] flex justify-center">
                    <Image src={kursi_16} width={67} alt="kursi"></Image>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-[Josefin Sans] font-normal text-[16px] leading-[18.75px] text-[#151875]">Executive Seat chair</p>
                    <p className="font-[Josefin Sans] font-normal text-[12px] leading-[12px] text-[#151875] line-through">$32.00</p>
                </div>
            </div>
            <div className="w-full flex gap-2">
                <div className="w-[107px] h-[74px] bg-[#F5F6F8] flex justify-center">
                    <Image src={kursi_17} width={67} alt="kursi"></Image>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-[Josefin Sans] font-normal text-[16px] leading-[18.75px] text-[#151875]">Executive Seat chair</p>
                    <p className="font-[Josefin Sans] font-normal text-[12px] leading-[12px] text-[#151875] line-through">$32.00</p>
                </div>
            </div>
        </div>
    </div>
</div>


    <div className="flex justify-center mt-16 md:mt-32">
  <h1 className="font-[Josefin Sans] text-[28px] md:text-[42px] leading-[36px] md:leading-[50px] font-bold text-[#1A0B5B]">
    Discounted Item
  </h1>
</div>

<div className="flex justify-center my-5 px-4 sm:px-5">
  <ul className="flex flex-wrap gap-5 sm:gap-10 lg:gap-[58px] justify-center">
    <li className="cursor-pointer text-[#FB2E86] font-[Lato] font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] sm:leading-[21.6px] flex gap-2 sm:gap-3 items-center">
      <p className="border-b-2 border-[#FB2E86]">Wood Chair</p>
      <span className="w-[5px] h-[5px] bg-[#FB4997] rounded-full"></span>
    </li>
    <li className="cursor-pointer text-[#151875] font-[Lato] font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] sm:leading-[21.6px]">
      Plastic Chair
    </li>
    <li className="cursor-pointer text-[#151875] font-[Lato] font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] sm:leading-[21.6px]">
      Sofa Collection
    </li>
  </ul>
</div>


    <div className="flex flex-wrap justify-center items-center gap-5 px-5 lg:gap-10 my-32">
    <div className="flex flex-col justify-center gap-5 w-full md:w-2/3 lg:w-1/3">
        <h3 className="font-[Josefin Sans] font-semibold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[35px] leading-[1.2] text-[#151875] tracking-[1.5%]">
            20% Discount Of All Products
        </h3>
        <p className="text-[#FB2E86] font-[Josefin Sans] font-normal text-[18px] sm:text-[20px] md:text-[21px] leading-[1.3] tracking-[1.5%]">
            Eams Sofa Compact
        </p>
        <p className="font-[Lato] font-normal text-[14px] sm:text-[16px] md:text-[17px] leading-[1.8] tracking-[2%] text-[#B7BACB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <i className="fa-solid fa-check w-4 py-2" style={{ color: '#7569B2', fill: 'transparent'}}></i>
                    <p className="font-[Lato] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] tracking-[2%] text-[#B8B8DC]">
                        Material expose like metals
                    </p>
                </div>
                <div className="flex gap-2">
                    <i className="fa-solid fa-check w-4 py-2" style={{ color: '#7569B2', fill: 'transparent'}}></i>
                    <p className="font-[Lato] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] tracking-[2%] text-[#B8B8DC]">
                        Simple neutral colours.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <i className="fa-solid fa-check w-4 py-2" style={{ color: '#7569B2', fill: 'transparent'}}></i>
                    <p className="font-[Lato] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] tracking-[2%] text-[#B8B8DC]">
                        Clear lines and geometric figures
                    </p>
                </div>
                <div className="flex gap-2">
                    <i className="fa-solid fa-check w-4 py-2" style={{ color: '#7569B2', fill: 'transparent'}}></i>
                    <p className="font-[Lato] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] tracking-[2%] text-[#B8B8DC]">
                        Material expose like metals
                    </p>
                </div>
            </div>
        </div>
        <button className="w-full sm:w-[200px] h-[50px] sm:h-[57px] rounded-sm bg-[#FB2E86] font-[Josefin Sans] text-[14px] sm:text-[16px] md:text-[17px] leading-[19.91px] tracking-[2%] text-white" type="button">
            Shop Now
        </button>
    </div>
    <div className="w-full md:w-2/3 lg:w-1/3 flex justify-center">
        <Image src={discount_sofa} width={699} height={500} alt="kursa" className="max-w-full h-auto" />
    </div>
</div>
<div className="flex justify-center my-16 md:my-32">
  <h1 className="font-[Josefin Sans] text-[28px] md:text-[42px] leading-[34px] md:leading-[49.22px] font-bold text-[#151875]">
    Top Categories
  </h1>
</div>

<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
    <Top_Catagories_Card image={kursi_18} title="Mini LCW Chair" price={56.0} />
    <Top_Catagories_Card image={kursi_19} title="Mini LCW Chair" price={56.0} />
    <Top_Catagories_Card image={kursi_20} title="Mini LCW Chair" price={56.0} />
    <Top_Catagories_Card image={kursi_18} title="Mini LCW Chair" price={56.0} />
  </div>
</div>

<div className="flex justify-center mt-6 md:mt-9">
  <ul className="flex gap-3">
    <li className="cursor-pointer w-[10px] h-[10px] rounded-full bg-[#FB2E86]"></li>
    <li className="cursor-pointer w-[10px] h-[10px] rounded-full border-[1px] border-[#FB2E86]"></li>
    <li className="cursor-pointer w-[10px] h-[10px] rounded-full border-[1px] border-[#FB2E86]"></li>
  </ul>
</div>

<div className="gerber bg-cover bg-center bg-no-repeat my-16 md:my-24">
  <div className="flex justify-center h-full">
    <div className="flex flex-col items-center gap-4 py-20 md:py-44 px-4">
      <p className="font-[Josefin Sans] text-[24px] md:text-[35px] font-bold leading-[36px] md:leading-[54.25px] tracking-wide text-[#151875] text-center">
        Get Latest Update By Subscribing to Our Newsletter
      </p>
      <button
        type="button"
        className="w-[140px] md:w-[173px] h-[45px] md:h-[49px] rounded-sm bg-[#FB2E86] text-white text-sm md:text-base"
      >
        Shop Now
      </button>
    </div>
  </div>
</div>

<div className="flex justify-center">
  <Image 
    src={sponsor} 
    width={1000} 
    height={100} 
    alt="sponsor" 
    className="max-w-full h-auto" 
    style={{ objectFit: 'contain' }}
  />
</div>

<div className="flex justify-center my-16 md:my-32">
  <h1 className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] sm:leading-[36px] md:leading-[44px] lg:leading-[50px] font-bold text-[#151875] text-center">
    Latest Blog
  </h1>
</div>

<div className="flex justify-center px-4 md:px-8 pb-28">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-[1200px]">
    <Blog_Card 
      title="Top Essential Trends in" 
      image={background_image1} 
      image_1={pen_nib} 
      image_2={calendar_iop} 
      writer="SaberAli" 
      paragraph="More off this less hello samlande lied much over tightly circa horse taped mightly" 
      date="21 August, 2020" 
    />
    <Blog_Card 
      title="Top Essential Trends in" 
      image={background_image2} 
      image_1={pen_nib} 
      image_2={calendar_iop} 
      writer="Surfauxion" 
      paragraph="More off this less hello samlande lied much over tightly circa horse taped mightly" 
      date="21 August, 2020" 
    />
    <Blog_Card 
      title="Top Essential Trends in" 
      image={background_image3} 
      image_1={pen_nib} 
      image_2={calendar_iop} 
      writer="SaberAli" 
      paragraph="More off this less hello samlande lied much over tightly circa horse taped mightly" 
      date="21 August, 2020" 
    />
  </div>
</div>


</main>

    )
}