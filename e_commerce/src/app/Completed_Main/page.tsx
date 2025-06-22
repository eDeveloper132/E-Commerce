'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Completed_Main() {
  const router = useRouter();

  useEffect(() => {
    // Set a 10 second timer
    const timer = setTimeout(() => {
      // Remove cart data from localStorage
      try {
        localStorage.removeItem('cartData');
        localStorage.removeItem('cart'); // in case you have legacy key
      } catch (e) {
        console.error('Failed to clear cartData:', e);
      }
      // Redirect to home page
      router.push('/');
    }, 10000);

    // Clean up in case component unmounts early
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-2xl font-semibold text-black">
            Order Completed
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="flex justify-center my-16 md:my-32">
          <div className="w-full max-w-[700px] h-auto md:h-64 relative px-4 sm:px-6">
            <div className="absolute top-0 left-0">
              <i className="fa-regular fa-clock text-5xl md:text-7xl text-[#395093]"></i>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-3 items-center">
                <div className="relative w-16 h-16 md:w-[65px] md:h-[65px] border-4 md:border-8 border-[#F6F7FA] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-2xl md:text-4xl text-[#FF1788]"></i>
                </div>
                <p className="font-[Josefin Sans] text-xl md:text-[36px] leading-6 md:leading-[42.19px] font-semibold text-[#101750] text-center">
                  Your Order Is Completed!
                </p>
                <p className="max-w-full text-sm md:text-[16px] leading-5 md:leading-[30px] font-medium text-[#8D92A7] text-center">
                  Thank you for your order! Your order is being processed and will be completed within 3–6
                  working days. You will receive an email confirmation when your order is completed. You will be redirected
                  to the home page in 10 seconds.
                </p>
                <span>
                    
                </span>
              </div>
            </div>
            <div className="absolute -bottom-10 md:-bottom-20 right-0">
              <i className="fa-solid fa-clipboard-list text-5xl md:text-7xl text-[#FB636F]"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
