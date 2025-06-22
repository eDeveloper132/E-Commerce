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
      <div className="flex bg-[#7E33E0] h-auto w-full items-center font-[Josefin Sans] font-bold justify-between flex-wrap px-4">
        <RealTimeDate />
        <div className="flex gap-4 w-auto my-1 lg:mt-2 xl:mt-2 2xl:mt-2 md:mt-0 items-center px-4">
          <Link href="/shopping_cart">
            <i
              className="fa-solid fa-cart-shopping my-auto cursor-pointer"
              style={{ color: "white" }}
            ></i>
          </Link>
          <div className="text-white">
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
                  ? "flex flex-col w-full absolute top-full left-0 bg-white z-50 py-4"
                  : "hidden"
              } md:flex md:flex-row md:w-auto md:static md:py-0 gap-4 font-[Lato] font-medium`}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/electronics", label: "Electronics" },
                { href: "/watches", label: "Watches" },
                { href: "/about_us", label: "About Us" },
                { href: "/contact_us", label: "Contact Us" },
                { href: "/dashboard", label: "Dashboard" },
              ].map((item) => (
                <li key={item.href} className="px-4 py-2 md:px-0 md:py-0 text-base md:text-lg">
                  <Link
                    href={item.href}
                    className="block w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
