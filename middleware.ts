import { NextResponse } from "next/server";

export async function middleware(request: Request) {
  const regex = new RegExp("/api/*");
  if (regex.test(request.url)) {
  }
  console.log("middleware !");
  console.log(request.method);
  const origin = request.headers.get("origin");
  console.log("origin", origin);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
