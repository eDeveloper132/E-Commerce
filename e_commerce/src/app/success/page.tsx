import Link from "next/link";

// app/success/page.tsx
export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p>Thank you for your purchase. 🎉</p>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
