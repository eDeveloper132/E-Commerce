import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// ✅ Define protected routes that require authentication
// const protectedRoutes = ["/dashboard", "/settings"];

export default clerkMiddleware(async (auth, req: NextRequest) => {
  // const { userId } = await auth(); // Await auth to get the userId
  const pathname = req.nextUrl.pathname;

  // // ✅ Redirect unauthenticated users trying to access protected routes
  // if (!userId) {
  //   const signInUrl = new URL("/sign-in", req.url); // Redirect to sign-in page
  //   return NextResponse.redirect(signInUrl); // Redirect unauthenticated users to sign-in
  // }

  // ✅ Log requests (useful for debugging)
  const clientIp = req.headers.get("x-forwarded-for") || "unknown"; // Get IP from headers
  console.log(`[MIDDLEWARE] Request from ${clientIp} to ${pathname}`);

  return NextResponse.next();
});

// ✅ Exclude public files, assets, and "/studio"
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|studio).*)", // Exclude "/studio" & public files
  ],
};
