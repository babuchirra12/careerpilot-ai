import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/resume") || pathname.startsWith("/jobs") || pathname.startsWith("/ai-coach") || pathname.startsWith("/profile")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
