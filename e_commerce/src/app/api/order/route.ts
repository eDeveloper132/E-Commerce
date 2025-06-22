// app/api/order/route.ts
import { NextResponse } from 'next/server';
import { OrderModel } from '../../../../schema/schemas';
import IOrder from '../../../../schema/interfaces/IOrder';
import {notifyOwner, sendOrderDetails} from '../../../../emailservice';
import { auth } from '@clerk/nextjs/server';

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

export async function POST(req: Request) {
  const { user, product }: { user: UserInfo; product: ProductInfo } = await req.json();
  console.log('New order received:', { user, product });
  const { userId } = await auth();

  try {
      const order: IOrder = await OrderModel.create({
        product_id: product.id,
        product_name: product.name,
        user_clerk_id: userId,
        product_price: product.price,
        product_image: product.image,
        shippingAddress: {
          name: user.name,
          address: user.address,
          email: user.email,
          phone: user.phone,
          postalCode: user.postalCode,
        },
      })
      order.save();
      try {
        sendOrderDetails(order);
      } catch (error) {
        console.log('Error sending order details:', error);
      }
      try {
        notifyOwner(order);
      } catch (error) {
        console.log('Error sending order details:', error);
      }
  } catch (error) {
    console.log('Error creating order:', error);
    return NextResponse.json({ success: false });
  }

  return NextResponse.json({ success: true });
}
