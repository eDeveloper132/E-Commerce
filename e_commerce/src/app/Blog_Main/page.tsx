import blog_web_1 from "../../../public/blog_web_1.jpeg"
import blog_web_2 from "../../../public/blog_web_2.jpeg"
import blog_web_3 from "../../../public/blog_web_3.jpeg"
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
import pen_nib from "../../../public/pen_nib.png";
import calendar_iop from "../../../public/calendar_iop.png";
import Blog_Reader from "../components/Blog_Reader";
import Little_Card from "../components/Little_Card";
import Little_Card_Two from "../components/Little_Card_Two";
import Image from "next/image"
import sponsor from "../../../public/sponsor.png";
export default function Blog_Main() {
    return (
        <>
            <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
                <div className="flex xs250:w-screen xs250:justify-center sm:w-screen sm:justify-center md:w-screen md:justify-center lg:w-5/12 lg:justify-end xl:w-5/12 xl:justify-end 2xl:w-5/12 2xl:justify-end">
                    <div className="flex flex-col">
                        <p className="font-[Josefin Sans] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[42.19px] text-[#101750] font-bold">
                            Blog Page
                        </p>
                        <div className="flex">
                            <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[19.2px]">
                                Home.Pages.
                            </p>
                            <p className="text-[#FB2E86] font-[Lato] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.2px] my-auto">
                                Blog Page
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
  <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 py-16 lg:my-40 px-4 md:px-8">
    {/* Blog Reader Section */}
    <div className="flex flex-col gap-10 w-full max-w-[870px]">
      <Blog_Reader
        title="Mauris at orci non vulputate diam tincidunt nec."
        image={blog_web_1}
        image_1={pen_nib}
        image_2={calendar_iop}
        writer="Surf Auxion"
        date="Aug 09 2020"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
      />
      <Blog_Reader
        title="Aenean vitae in aliquam ultrices lectus. Etiam."
        image={blog_web_2}
        image_1={pen_nib}
        image_2={calendar_iop}
        writer="Surf Auxion"
        date="Aug 09 2020"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
      />
      <Blog_Reader
        title="Sit nam congue feugiat nisl, mauris amet nisi."
        image={blog_web_3}
        image_1={pen_nib}
        image_2={calendar_iop}
        writer="Surf Auxion"
        date="Aug 09 2020"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
      />

      <div className="h-6 flex justify-center mt-16">
          <ul className="flex gap-10">
            <li className="w-8 h-6 rounded-sm bg-[#FB2CA8] text-white flex justify-center cursor-pointer">1</li>
            <li className="w-8 h-6 rounded-sm border-[1px] border-[#E0D3F5] text-[#E0D3F5] hover:bg-pink-300 hover:text-white flex justify-center cursor-pointer">2</li>
            <li className="w-8 h-6 rounded-sm border-[1px] border-[#E0D3F5] text-[#E0D3F5] hover:bg-pink-300 hover:text-white flex justify-center cursor-pointer">3</li>
            <li className="w-8 h-6 rounded-sm border-[1px] border-[#E0D3F5] text-[#E0D3F5] hover:bg-pink-300 hover:text-white flex justify-center cursor-pointer">4</li>
          </ul>
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