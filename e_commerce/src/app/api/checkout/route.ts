// app/api/checkout/route.ts
import { NextResponse } from 'next/server';

type CartItem = {
  name: string;
  price: number;    // in cents
  quantity: number;
};

export async function POST(req: Request) {
  try {
    const { items }: { items: CartItem[] } = await req.json();

    // Build Stripe line_items array
    const line_items = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));


    return NextResponse.json({ line_items });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
