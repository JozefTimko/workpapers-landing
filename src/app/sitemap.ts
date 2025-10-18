import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://workpapersai.com";
  const now = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#waitlist`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
