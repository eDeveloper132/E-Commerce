"use client";

import { useState } from "react";
import Link from "next/link";
import RealTimeDate from "./RealTimeDate";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-black">
      {/* Top Bar */}
      <div className="flex bg-[#7E33E0] h-auto w-screen items-center font-[Josefin Sans] font-bold justify-between flex-wrap px-4">
        <RealTimeDate />
        <div className="flex gap-4 w-auto mt-2 md:mt-0 items-center px-4">
          <Link href="/Shopping_curt_page">
            <i
              className="fa-solid fa-cart-shopping my-auto cursor-pointer"
              style={{ color: "white" }}
            ></i>
          </Link>
          <div className="mt-1 text-white">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
<div className="flex px-4">
  <div className="flex my-4 w-full justify-between flex-wrap items-center relative">
    <Link href="/">
      <p className="font-[Josefin Sans] font-bold text-2xl sm:text-3xl md:text-4xl text-[#0D0E43] cursor-pointer">
        ShopEasy
      </p>
    </Link>
    <div className="right-0">
      <button
        title="Menu"
        className="md:hidden text-[#0D0E43]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>
      <ul
        className={`${
          isMenuOpen
            ? "flex flex-col w-full absolute top-full left-0 bg-white z-10 py-4"
            : "hidden"
        } md:flex md:flex-row md:w-auto md:static md:py-0 gap-4 font-[Lato] font-medium`}
      >
        {/* Your menu items remain unchanged */}
       <li className="relative flex items-center gap-2 text-[#FB2E86] cursor-pointer group px-4 py-2 md:px-0 md:py-0">
                <span className="text-base md:text-lg font-medium">Home</span>
                <i className="fa-solid fa-caret-down text-sm"></i>
                <ul className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg text-gray-800 rounded-lg w-48">
                  <li className="relative px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300 rounded-t-lg group">
                    Pages
                    <i className="fa-solid fa-caret-right ml-2 text-sm"></i>
                    <ul className="absolute hidden group-hover:block top-0 left-full bg-white shadow-lg text-gray-800 rounded-lg ml-1 w-48">
                      <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
                        <Link href="/Shop_grid_page">Shop Grid Default</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
                        <Link href="/Shop_list_page">Shop List</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
                        <Link href="/Shop_left_page">Shop Left</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
                        <Link href="/Product_details_page">Product Details</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#FB2E86] hover:text-white cursor-pointer transition-colors duration-300">
                        <Link href="/About_us_page">About Us</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
               <li className="my-auto h-[20px] cursor-pointer px-4 py-2 md:px-0 md:py-0 text-base md:text-lg">Products</li>
        <li className="my-auto h-[20px] cursor-pointer px-4 py-2 md:px-0 md:py-0 text-base md:text-lg">
          <Link href="/Blog_web_page">Blog</Link>
        </li>
        <li className="my-auto h-[20px] cursor-pointer px-4 py-2 md:px-0 md:py-0 text-base md:text-lg">Shop</li>
        <li className="my-auto h-[20px] cursor-pointer px-4 py-2 md:px-0 md:py-0 text-base md:text-lg">
          <Link href="/Contact_us_page">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
    </nav>
  );
}
