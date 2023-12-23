import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("hello");
  const path = request.nextUrl.pathname;
  const isPublic = path === "/" || path === "/form";
  const token = request.cookies.get("MyToken")?.value;

  if (isPublic && token) {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/", "/home", "/form"],
};
