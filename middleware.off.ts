// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    // In production, CSP comes from next.config.ts only
    return NextResponse.next();
  }

  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://*.clarity.ms https://plausible.io",
    "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://*.clarity.ms https://plausible.io",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://*.clarity.ms https://i.ytimg.com",
    "img-src-elem 'self' data: blob: https://*.clarity.ms https://i.ytimg.com",
    "font-src 'self' data:",
    "connect-src 'self' https://*.clarity.ms https://formspree.io https://*.formspree.io https://vitals.vercel-insights.com",
    "frame-src https://www.youtube-nocookie.com",
    "frame-ancestors 'none'",
    "form-action 'self' https://formspree.io https://*.formspree.io",
    "base-uri 'self'",
    "object-src 'none'",
  ].join("; ");

  const res = NextResponse.next();
  res.headers.set("Content-Security-Policy", csp);
  return res;
}

export const config = { matcher: "/:path*" };
