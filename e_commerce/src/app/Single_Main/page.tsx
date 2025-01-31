import Image from "next/image"
import blog_web_1 from "../../../public/blog_web_1.jpeg"
import pen_nib from "../../../public/pen_nib.png";
import calendar_iop from "../../../public/calendar_iop.png";
import blog_web_4 from "../../../public/blog_web_4.jpeg"
import blog_web_5 from "../../../public/blog_web_5.jpeg"
import blog_web_6 from "../../../public/blog_web_6.jpeg"
import blog_web_7 from "../../../public/blog_web_7.jpeg"
import blog_web_8 from "../../../public/blog_web_9.jpeg"
import blog_web_9 from "../../../public/blog_web_10.jpeg"
import blog_web_10 from "../../../public/blog_web_11.jpeg"
import blog_web_11 from "../../../public/blog_web_12.jpeg"
import blog_web_12 from "../../../public/blog_web_13.jpeg"
import blog_web_13 from "../../../public/blog_web_14.jpeg"
import blog_web_14 from "../../../public/blog_web_15.jpeg"
import blog_web_15 from "../../../public/blog_web_8.jpeg"
import blog_web_16 from "../../../public/blog_web_16.jpeg"
import blog_web_17 from "../../../public/blog_web_17.jpeg"
import blog_web_18 from "../../../public/blog_web_18.jpeg"
import blog_web_19 from "../../../public/blog_web_19.jpeg"
import blog_web_20 from "../../../public/blog_web_20.jpeg"
import blog_web_21 from "../../../public/blog_web_21.jpeg"
import blog_web_22 from "../../../public/blog_web_22.jpeg"
import Little_Card from "../components/Little_Card";
import Little_Card_Two from "../components/Little_Card_Two";
import sponsor from "../../../public/sponsor.png";
import Single_Blog_Card from "../components/Single_Blog_Card";

export default function Single_Main() {
    return (
        <>
            <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Single Blog
                        </p>
                        <div className="flex">
                            <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                Single Blog
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
  <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 py-16 lg:py-40 px-4 md:px-8">
    {/* Blog Reader Section */}
    <div className="flex flex-col gap-10 w-full max-w-[870px]">
  <div className="w-full max-w-[870px] flex flex-col gap-4 px-4 sm:px-6 lg:px-0">
    <Image
      src={blog_web_1}
      width={870}
      alt="image"
      className="w-full max-w-full h-auto rounded-md"
    />
    <div className="flex flex-wrap gap-4">
      <span className="flex gap-2 items-center">
        <Image
          src={pen_nib}
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
            Surf Auxion
          </p>
        </span>
      </span>
      <span className="flex gap-2 items-center">
        <Image
          src={calendar_iop}
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
            Aug 09 2020
          </p>
        </span>
      </span>
    </div>
    <p className="font-[Josefin-sans] font-bold text-[24px] md:text-[30px] text-[#151875] leading-[1.2]">
      Mauris at orci non vulputate diam tincidunt nec.
    </p>
    <p className="font-[Lato] text-[14px] md:text-[16px] text-[#8A8FB9] leading-[1.6] text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
      quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae
      ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate
      id id dictum at.
    </p>
    <p className="font-[Lato] text-[14px] md:text-[16px] text-[#8A8FB9] leading-[1.6] text-justify mt-10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
    </p>
    <span className="h-auto border-l-2 border-[#FC45A0] mt-10 flex flex-col justify-center px-4">
      <p className="font-[Lato] text-[14px] md:text-[16px] text-[#8A8FB9] leading-[1.6] text-justify">
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”      </p>
    </span>
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
      <span className="w-full md:w-[48%] h-[245px] relative">
      <Image
        src={blog_web_15}
        width={417}
        className="h-[245px]"
        alt="image"
      />
      <span className="absolute top-0 left-0 w-full h-full bg-[#00000033] opacity-50"></span>
      <div className="flex justify-center">
        <span className="absolute w-[60px] h-[60px] bg-white rounded-full top-20 flex justify-center">
          <span className="flex flex-col justify-center">
            <i className="fa-solid fa-play text-[#FC209D] text-3xl ml-1 cursor-pointer"></i>
          </span>
        </span>
      </div>
      </span>
      <span className="w-full md:w-[48%] h-[245px] relative">
      <Image
        src={blog_web_16}
        width={417}
        className="h-[245px]"
        alt="image"
      />
      <span className="absolute top-0 left-0 w-full h-full bg-[#00000033] opacity-50"></span>
      <div className="flex justify-center">
        <span className="absolute w-[60px] h-[60px] bg-white rounded-full top-20 flex justify-center">
          <span className="flex flex-col justify-center">
            <i className="fa-solid fa-play text-[#FC209D] text-3xl ml-1 cursor-pointer"></i>
          </span>
        </span>
      </div>
      </span>    
      </div>
    <p className="font-[Lato] text-[14px] md:text-[16px] text-[#8A8FB9] leading-[1.6] text-justify mt-10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,    
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <Single_Blog_Card
        title="Quam sed"
        image={blog_web_17}
        discountedPrice={32}
        originalPrice={56}
        rating_count={4}
      />
      <Single_Blog_Card
        title="Tristique sed"
        image={blog_web_18}
        discountedPrice={32}
        originalPrice={56}
        rating_count={4}
      />
      <Single_Blog_Card
        title="A etiam"
        image={blog_web_19}
        discountedPrice={32}
        originalPrice={56}
        rating_count={4}
      />
      <Single_Blog_Card
        title="Mi nisi"
        image={blog_web_20}
        discountedPrice={32}
        originalPrice={56}
        rating_count={4}
      />
    </div>
    <p className="font-[Lato] text-[14px] md:text-[16px] text-[#8A8FB9] leading-[1.6] text-justify mt-10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,    
    </p>
    <p className="font-[Lato] text-[14px] md:text-[16px] text-[#8A8FB9] leading-[1.6] text-justify mt-10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,    
    </p>
    <div className="flex justify-center mt-10">
    <span className="flex gap-4">
            <span className="w-[25px] h-[25px] rounded-full bg-[#3F509E] flex justify-center">
                <span className="flex flex-col justify-center">
                    <i className="fa-brands fa-facebook-f text-white text-lg cursor-pointer"></i>
                </span>
            </span>
            
            <span className="w-[25px] h-[25px] rounded-full bg-gradient-to-t from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex justify-center">
                <span className="flex flex-col justify-center">
                    <i className="fa-brands fa-instagram text-white text-lg cursor-pointer"></i>
                </span>
            </span>

            <span className="w-[25px] h-[25px] rounded-full bg-[#55ACEE] flex justify-center">
                <span className="flex flex-col justify-center">
                    <i className="fa-brands fa-twitter text-white text-lg cursor-pointer"></i>
                </span>
            </span>
        </span>
    </div>

    <div className="h-[45px] bg-[#F7F8FB] rounded-[3px] flex justify-between px-2">
      <span className="flex gap-1">
        <span className="flex flex-col justify-center">
          <i className="fa-solid fa-arrow-left text-[#8A8FB9] cursor-pointer"></i>
        </span>
        <span className="flex flex-col justify-center">
          <p className="font-[Lato] font-medium text-[16.15px] leading-[19.38px] text-[#8A8FB9]">
            Previous Post
          </p>
        </span>
      </span>
      <span className="flex gap-1">
        <span className="flex flex-col justify-center">
          <p className="font-[Lato] font-medium text-[16.15px] leading-[19.38px] text-[#8A8FB9]">
            Next Post
          </p>
        </span>
        <span className="flex flex-col justify-center">
          <i className="fa-solid fa-arrow-right text-[#8A8FB9] cursor-pointer"></i>
        </span>
      </span>
    </div>
    <div className="w-full sm:w-[668px] h-auto shadow-md shadow-[#00000040]/10 mt-20 p-2 flex flex-col sm:flex-row gap-3">
  <span className="flex flex-col justify-center">
    <Image src={blog_web_21} width={103} className="h-[107px]" alt="image" />
  </span>
  <div className="flex flex-col justify-center gap-1">
    <div className="flex gap-16 ">
      <p className="font-[Josefin Sans] text-[18.14px] leading-[21.25px] tracking-[1px] text-[#363385] font-semibold">
        Sapien ac
      </p>
      <p className="font-[Lato] font-normal text-[12.47px] leading-[14.96px] text-[#A3A2B6] my-auto">
        Jan 09 2020
      </p>
    </div>
    <p className="text-justify sm:w-[506px] font-[Lato] font-normal text-[12.47px] leading-[28.34px] text-[#A3A2B6]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.
    </p>
  </div>
</div>

<div className="w-full sm:w-[668px] h-auto shadow-md shadow-[#00000040]/10 mt-2 p-2 flex flex-col sm:flex-row gap-3">
  <span className="flex flex-col justify-center">
    <Image src={blog_web_22} width={103} className="h-[107px]" alt="image" />
  </span>
  <div className="flex flex-col justify-center gap-1">
    <div className="flex gap-16 ">
      <p className="font-[Josefin Sans] text-[18.14px] leading-[21.25px] tracking-[1px] text-[#363385] font-semibold">
        Augue conva
      </p>
      <p className="font-[Lato] font-normal text-[12.47px] leading-[14.96px] text-[#A3A2B6] my-auto">
        Aug 18 2020
      </p>
    </div>
    <p className="text-justify sm:w-[506px] font-[Lato] font-normal text-[12.47px] leading-[28.34px] text-[#A3A2B6]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.
    </p>
  </div>
</div>


    <div className="flex flex-col md:flex-row md:justify-between mt-32">
  <div className="relative mb-4 md:mb-0 md:w-[342px]">
    <input type="text" placeholder="Your Name*" className="w-full h-[43px] border-[1.12px] border-[#8A8FB9] pl-10 text-[#8A8FB9]" />
    <i className="fa-solid fa-user text-[#8A8FB9] absolute top-3 left-3 cursor-pointer"></i>
  </div>
  <div className="relative md:w-[342px]">
    <input type="text" placeholder="Write Your Email*" className="w-full h-[43px] border-[1.12px] border-[#8A8FB9] pl-10 text-[#8A8FB9]" />
    <i className="fa-solid fa-envelope text-[#8A8FB9] absolute top-3 left-3 cursor-pointer"></i>
  </div>
</div>

<div className="mt-8 relative h-[205px] border-[1.12px] border-[#8A8FB9] flex">
  <div className="w-12">
    <i className="fa-solid fa-comment text-[#8A8FB9] text-[13.49px] absolute top-6 left-6"></i>
  </div>
  <textarea name="textarea" placeholder="Write your comment*" className="pt-5 w-full font-[Lato] font-normal text-[15.73px] leading-[18.88px] tracking-[1px] text-[#8A8FB9]" id="jojas"></textarea>
</div>

<div className="flex gap-2 mt-2">
  <input type="checkbox" className="w-[12px] h-[12px] border-[1px] border-[#8A8FB9] my-auto" placeholder="checkbox" />
  <p className="font-[Lato] font-normal text-[13.49px] leading-[13.18px] tracking-[2px] text-[#8A91AB]">
    Save my name, email, and website in this browser for the next time I comment.
  </p>
</div>

<div className="flex justify-center mt-10">
  <button type="submit" className="h-[50px] w-full sm:w-[698px] rounded-[3px] bg-[#FB2E86] text-white">Continue Shipping</button>
</div>

    </div>
</div>


    {/* Sidebar Section */}
    <div className="w-full lg:w-[270px] flex flex-col gap-10">
      {/* Search Box */}
      <div className="flex flex-col gap-3">
        <p className="font-[Josefin-Sans] font-semibold text-[22px] leading-[25.78px] text-[#151875]">
          Search
        </p>
        <div className="h-10 rounded-sm border border-[#BDBDD8] relative">
          <i className="fa-solid fa-magnifying-glass text-[16px] text-[#BDBDD8] absolute right-4 top-3 cursor-pointer"></i>
          <input
            type="text"
            placeholder="Search For Posts"
            className="w-full h-full pl-4 font-[Lato] font-normal text-[14px] text-[#1518751A]/10"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-3">
        <p className="font-[Josefin-Sans] font-semibold text-[22px] leading-[25.78px] text-[#151875]">
          Categories
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
          <div className="h-[30px] rounded-[3px] bg-[#F939BF] flex items-center hover:bg-slate-500">
            <p className="font-[Josefin-Sans] text-[14px] text-white pl-2 cursor-pointer hover:text-red-500">
              Hobbies (14)
            </p>
          </div>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-[30px] rounded-[3px] flex items-center pl-2"
            >
              <p className="font-[Josefin-Sans] text-[14px] text-[#3F509E] hover:text-red-500 cursor-pointer">
                Women (21)
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-[Josefin-Sans] font-semibold text-[22px] leading-[25.78px] text-[#151875]">
            Recent Post
        </p>
        <div className="flex flex-col gap-2">
            <Little_Card title="It is a long established fact" image={blog_web_8} date="Aug 09 2020" />
            <Little_Card title="It is a long established fact" image={blog_web_9} date="Aug 09 2020" />
            <Little_Card title="It is a long established fact" image={blog_web_10} date="Aug 09 2020" />
            <Little_Card title="It is a long established fact" image={blog_web_11} date="Aug 09 2020" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-[Josefin-Sans] font-semibold text-[22px] leading-[25.78px] text-[#151875]">
            Sale Product
        </p>
        <div className="flex flex-col gap-2">
            <Little_Card title="It is a long established fact" image={blog_web_12} date="Aug 09 2020" />
            <Little_Card title="It is a long established fact" image={blog_web_13} date="Aug 09 2020" />
            <Little_Card title="It is a long established fact" image={blog_web_14} date="Aug 09 2020" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-[Josefin-Sans] font-semibold text-[22px] leading-[25.78px] text-[#151875]">
            Offer product
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
            <Little_Card_Two title="Duis lectus est." image={blog_web_4} lowerPrice={12.00} upperPrice={15.00} />
            <Little_Card_Two title="Sed placerat." image={blog_web_5} lowerPrice={12.00} upperPrice={15.00} />
            <Little_Card_Two title="Netus proin." image={blog_web_6} lowerPrice={12.00} upperPrice={15.00} />
            <Little_Card_Two title="Platea in." image={blog_web_7} lowerPrice={12.00} upperPrice={15.00} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-[Josefin-Sans] font-semibold text-[22px] leading-[25.78px] text-[#151875]">
            Follow
        </p>
        <span className="flex gap-4 mt-4">
            <span className="w-[25px] h-[25px] rounded-full bg-[#3F509E] flex justify-center">
                <span className="flex flex-col justify-center">
                    <i className="fa-brands fa-facebook-f text-white text-lg cursor-pointer"></i>
                </span>
            </span>
            
            <span className="w-[25px] h-[25px] rounded-full bg-gradient-to-t from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex justify-center">
                <span className="flex flex-col justify-center">
                    <i className="fa-brands fa-instagram text-white text-lg cursor-pointer"></i>
                </span>
            </span>

            <span className="w-[25px] h-[25px] rounded-full bg-[#55ACEE] flex justify-center">
                <span className="flex flex-col justify-center">
                    <i className="fa-brands fa-twitter text-white text-lg cursor-pointer"></i>
                </span>
            </span>
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-[Josefin-Sans] font-semibold text-[22px] leading-[25.78px] text-[#151875]">
          Tags
        </p>
        <div className="grid grid-cols-3 gap-2">
          {['General','Insas','Bibsaas','Nulla'].map((element, index) => (
              <p key={index} className="font-[Lato] hover:text-yellow-500 font-normal text-[16px] leading-[25.6px] underline text-[#3F509E] cursor-pointer">
                {element}
              </p>
          ))}
              <p className="font-[Lato] font-normal text-[16px] hover:text-yellow-500 leading-[25.6px] underline text-[#FB2E86] cursor-pointer">
                Atsanil
              </p>  
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-5">
                <Image 
                    src={sponsor} 
                    width={1000} 
                    height={100} 
                    alt="sponsor" 
                    className="max-w-full h-auto" 
                    style={{ objectFit: 'contain' }}
                />
    </div>
</div>
        </>
    )
}