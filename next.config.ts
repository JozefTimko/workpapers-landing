// next.config.ts
import type { NextConfig } from "next";

const dev = process.env.NODE_ENV !== "production";

// --- Production CSP (security-first + Clarity + Plausible + Formspree + YouTube + Vercel analytics) ---
const cspProd = `
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://www.clarity.ms;
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob: https://www.clarity.ms https://i.ytimg.com;
font-src 'self' data:;
connect-src 'self' https://plausible.io https://formspree.io https://*.formspree.io https://www.clarity.ms https://vitals.vercel-insights.com https://region1.analytics.google.com;
frame-src https://www.youtube-nocookie.com;
base-uri 'self';
form-action 'self' https://formspree.io https://*.formspree.io;
`.trim().replace(/\n/g, " ");

const securityHeaders = dev ? [] : [
  { key: "Content-Security-Policy", value: cspProd },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    if (securityHeaders.length === 0) return [];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
