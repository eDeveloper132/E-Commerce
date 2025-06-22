import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { key } = await req.json();
  if (key === process.env.SECRET_ADMIN_KEY) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('admin_token', process.env.SECRET_ADMIN_KEY as string, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS in production
      maxAge: 3600, // Expires in 1 hour
    });
    return response;
  }
  return NextResponse.json({ success: false }, { status: 401 });
}