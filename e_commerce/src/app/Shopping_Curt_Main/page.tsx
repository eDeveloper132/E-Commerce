'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  stock: number;
  imgs: string;
};

const EXPIRY_MS = 60 * 60 * 1000; // 1 hour
const STORAGE_KEY = 'cartData';
const LEGACY_KEY  = 'cart';

export default function ShoppingCartMain() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  // Load & migrate on first mount
  useEffect(() => {
    const rawNew = localStorage.getItem(STORAGE_KEY);
    const rawOld = localStorage.getItem(LEGACY_KEY);

    let items: CartItem[] = [];
    let updatedAt = Date.now();

    const tryParse = (val: string | null) => {
      try {
        return val ? JSON.parse(val) : null;
      } catch {
        return null;
      }
    };

    const newParsed = tryParse(rawNew);
    const oldParsed = tryParse(rawOld);

    if (
      (!newParsed?.items || newParsed.items.length === 0) &&
      Array.isArray(oldParsed) &&
      oldParsed.length > 0
    ) {
      items = oldParsed;
      updatedAt = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, updatedAt }));
      localStorage.removeItem(LEGACY_KEY);
    } else if (
      newParsed?.items &&
      Array.isArray(newParsed.items) &&
      typeof newParsed.updatedAt === 'number'
    ) {
      const isExpired = Date.now() - newParsed.updatedAt > EXPIRY_MS;
      if (!isExpired) {
        items = newParsed.items;
        updatedAt = newParsed.updatedAt;
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    items = items.map(item => ({
      ...item,
      quantity: Math.min(item.quantity, item.stock),
    }));

    setCart(items);
    setHydrated(true);
  }, []);

  // Sync & recalc after hydration
  useEffect(() => {
    if (!hydrated) return;
    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    setGrandTotal(total);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ items: cart, updatedAt: Date.now() })
    );
  }, [cart, hydrated]);

  const increment = (idx: number) =>
    setCart(old =>
      old.map((it, i) =>
        i === idx && it.quantity < it.stock
          ? { ...it, quantity: it.quantity + 1 }
          : it
      )
    );

  const decrement = (idx: number) =>
    setCart(old =>
      old.map((it, i) =>
        i === idx && it.quantity > 1
          ? { ...it, quantity: it.quantity - 1 }
          : it
      )
    );

  const removeItem = (idx: number) =>
    setCart(old => old.filter((_, i) => i !== idx));

  const clearCart = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCart([]);
  };

  if (!hydrated) return null;

  return (
    <div className="max-w-4xl mx-auto p-4 my-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="p-6 text-center text-gray-600">
          Your cart is empty.
        </p>
      ) : (
        <>
          {/* Table view for md+ */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full table-auto border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left text-gray-700">
                  <th className="py-2">Product</th>
                  <th className="py-2">Unit Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Line Total</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => {
                  const lineTotal = item.price * item.quantity;
                  const img = item.imgs || '/placeholder.png';
                  return (
                    <tr
                      key={idx}
                      className="bg-white shadow-sm rounded-lg hover:bg-gray-50 transition"
                    >
                      <td className="flex items-center gap-4 p-4">
                        <button
                          onClick={() => removeItem(idx)}
                          className="text-red-500 font-bold text-xl"
                        >
                          ×
                        </button>
                        <Image
                          src={img}
                          width={80}
                          height={80}
                          alt={item.name}
                          className="rounded"
                        />
                        <span className="font-medium text-gray-800">
                          {item.name}
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2 text-black">
                          <button
                            onClick={() => decrement(idx)}
                            className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50 cursor-pointer"
                            disabled={item.quantity <= 1}
                          >
                            –
                          </button>
                          <span className="text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increment(idx)}
                            className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50 cursor-pointer"
                            disabled={item.quantity >= item.stock}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          / {item.stock} in stock
                        </p>
                      </td>
                      <td className="p-4 font-semibold text-gray-800">
                        ${lineTotal.toFixed(2)}
                      </td>
                      <td className="p-4"></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Card view for mobile */}
          <div className="md:hidden">
            {cart.map((item, idx) => {
              const lineTotal = item.price * item.quantity;
              const img = item.imgs || '/placeholder.png';
              return (
                <div
                  key={idx}
                  className="bg-white shadow rounded-lg p-4 mb-4 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <button
                      onClick={() => removeItem(idx)}
                      className="text-red-500 text-lg"
                    >
                      ×
                    </button>
                  </div>
                  <div className="flex items-center mb-3">
                    <Image
                      src={img}
                      width={60}
                      height={60}
                      alt={item.name}
                      className="rounded mr-3"
                    />
                    <span className="text-gray-600">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrement(idx)}
                        className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        –
                      </button>
                      <span className="text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => increment(idx)}
                        className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-400">
                      / {item.stock} in stock
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      Total: ${lineTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <button
              onClick={clearCart}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
            <div className="text-2xl font-bold text-gray-800">
              Grand Total: ${grandTotal.toFixed(2)}
            </div>
            <Link
              href="/Order_completed_page"
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
