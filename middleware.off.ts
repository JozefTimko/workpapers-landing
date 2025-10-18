// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const csp = [
    "default-src 'self'",
    // allow dev scripts and WASM eval for Turbopack/React Refresh
    "script-src 'self' 'unsafe-eval' 'wasm-unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://i.ytimg.com",
    "font-src 'self'",
    "connect-src 'self' https://formspree.io",
    "frame-src https://www.youtube-nocookie.com",
    "frame-ancestors 'none'",
    "form-action https://formspree.io",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");  

  res.headers.set("Content-Security-Policy", csp);
  return res;
}

export const config = { matcher: "/:path*" };
