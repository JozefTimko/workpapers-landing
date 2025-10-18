import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  // YouTube demos
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
  // Tailwind & minimal inline style during hydration
  "style-src 'self' 'unsafe-inline'",
  // Scripts: self + Plausible
  "script-src 'self' https://plausible.io",
  // XHR/fetch: self + Plausible + Formspree
  "connect-src 'self' https://plausible.io https://formspree.io",
  // Images: self, data URIs, and https (covers ytimg)
  "img-src 'self' data: https:",
  // Fonts bundled by next/font
  "font-src 'self'",
  // Allow posting to Formspree
  "form-action 'self' https://formspree.io",
  // No plugins/objects
  "object-src 'none'",
  // Workers if needed
  "worker-src 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
