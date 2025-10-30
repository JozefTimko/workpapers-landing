// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // In production, DO NOT set CSP here (next.config.ts handles it).
  if (process.env.NODE_ENV === "production") {
    return NextResponse.next();
  }

  // Dev CSP: relaxed for Turbopack/React Refresh + allow Clarity/Plausible/Formspree
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://www.clarity.ms https://plausible.io",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://i.ytimg.com https://www.clarity.ms",
    "font-src 'self' data:",
    "connect-src 'self' https://formspree.io https://*.formspree.io https://www.clarity.ms https://vitals.vercel-insights.com",
    "frame-src https://www.youtube-nocookie.com",
    "frame-ancestors 'none'",
    "form-action 'self' https://formspree.io https://*.formspree.io",
    "base-uri 'self'",
    "object-src 'none'",
    // "upgrade-insecure-requests", // usually not needed in dev
  ].join("; ");

  const res = NextResponse.next();
  res.headers.set("Content-Security-Policy", csp);
  return res;
}

export const config = { matcher: "/:path*" };
