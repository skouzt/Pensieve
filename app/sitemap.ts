import type { MetadataRoute } from "next";

export const SITE_URL = "https://imavi.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-19");

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/data-deletion`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
