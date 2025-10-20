// next.config.ts
import type { NextConfig } from "next";

const dev = process.env.NODE_ENV !== "production";

const cspDev = ``;

const cspProd = `
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io;
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self' data:;
connect-src 'self' https://plausible.io https://formspree.io https://*.formspree.io;
frame-src https://www.youtube-nocookie.com;
base-uri 'self';
form-action 'self' https://formspree.io https://*.formspree.io;
`.trim().replace(/\n/g, " ");

const securityHeaders = dev ? [] : [{ key: "Content-Security-Policy", value: cspProd }];

const nextConfig: NextConfig = {
  async headers() {
    if (securityHeaders.length === 0) return [];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
