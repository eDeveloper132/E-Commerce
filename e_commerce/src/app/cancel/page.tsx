import Link from "next/link";

// app/cancel/page.tsx
export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
        <p>Your payment was not completed. You can try again at any time.</p>
        <Link href="/Shopping_Curt_Main" className="mt-6 inline-block text-blue-600 hover:underline">
          Back to Cart
        </Link>
      </div>
    </div>
  );
}
