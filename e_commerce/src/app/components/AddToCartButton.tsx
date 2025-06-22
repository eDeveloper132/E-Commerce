'use client';

import { useEffect, useState } from "react";
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'; // Need Heroicons

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stock: number
  imgs: string
};

export default function AddToCartButton({ name, price, stock, imgs, id }: { name: string; price: number; stock: number; imgs: string; id: string; }) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  const handleAddToCart = () => {
    if (typeof window === 'undefined') return;

    const newItem: CartItem = { name, price, quantity: 1 , stock, imgs, id };
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="mt-6 bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Add To Cart
      </button>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg shadow-md animate-slide-in space-x-3 max-w-sm w-full">
          <CheckCircleIcon className="h-6 w-6 text-green-600" />
          <span className="flex-1 text-sm font-medium">{name} added to cart!</span>
          <button
            onClick={() => setShowToast(false)}
            className="text-green-800 hover:text-green-600 transition"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0%);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
}
