import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  // Public routes that don't require authentication
  const publicRoutes = ["/studio", "/api(.*)"];

  // Check if the current route is public
  if (publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.next(); // Allow access to public routes
  }

  // Wait for the auth object to resolve
  const resolvedAuth = await auth();

  // If no session exists (user is not authenticated), Clerk should automatically redirect
  if (!resolvedAuth.sessionId) {
    console.log(NextResponse)
    // No need to redirect to /sign-in manually; Clerk will handle that for you.
    return NextResponse.next(); // Let Clerk redirect unauthenticated users to its default sign-in page
  }

  // If the user is authenticated, allow access
  return NextResponse.next();
});
export const config = {
  matcher: [
    // Match all paths except for public routes and internal Next.js files
    // Allow paths that don't start with /studio, /_next, or /favicon.ico
"/((?!_next/static|_next/image|favicon.ico|studio).*)"  ]
  };
