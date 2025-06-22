// components/AddToCartModal.tsx
'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

export type UserInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
};

export type ProductInfo = {
  id: string;
  name: string;
  price: number;
  image: string;
};

interface ModalProps {
  product: ProductInfo;
  onClose: () => void;
}

const AddToCartModal: FC<ModalProps> = ({ product, onClose }) => {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(u => ({ ...u, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, product }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      // On success, navigate to the completed page
      router.push('/order_completed');
    } catch (error: unknown) {
      console.error('Order submission failed', error);
      const message =
        error instanceof Error ? error.message : 'Unknown error';
      alert(`Failed to submit: ${message}`);
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 text-black">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Order {product.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
          />
          <input
            name="address"
            value={user.address}
            onChange={handleChange}
            required
            placeholder="Residential Address"
            className="w-full p-2 border rounded"
          />
          <input
            name="postalCode"
            value={user.postalCode}
            onChange={handleChange}
            required
            placeholder="Postal Code"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:opacity-50"
          >
            {submitting ? 'Submitting…' : 'Submit Order'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToCartModal;
