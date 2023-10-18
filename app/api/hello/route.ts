import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";
export async function GET(request: Request) {
  const ramining = limiter.removeTokens(1);
  console.log("remaddddddddin", ramining);
  return NextResponse.json("ee");
}
