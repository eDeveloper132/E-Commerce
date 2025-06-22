import { NextRequest, NextResponse } from 'next/server';
import { getOrders } from '../../../../lib/mongodbHelpers';

export async function GET(request: NextRequest) {
  const adminToken = request.cookies.get('admin_token');
  if (adminToken?.value !== process.env.SECRET_ADMIN_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const orders = await getOrders();
  return NextResponse.json(orders);
}