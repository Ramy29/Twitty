import { NextRequest, NextResponse } from "next/server";

const authpages = new Set(['/auth/login', '/auth/register']);
const privatepages = new Set([
  '/dashboard/notifications',
  '/dashboard/communites',
  '/dashboard/about-us',
  '/dashboard/profile',
]);

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value; // ✅ الصح

  if (authpages.has(req.nextUrl.pathname)) {
    if (token) {
      const redirectUrl = new URL('/dashboard/profile', req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  if (privatepages.has(req.nextUrl.pathname)) {
    if (!token) {
      const redirectUrl = new URL('/auth/login', req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}
