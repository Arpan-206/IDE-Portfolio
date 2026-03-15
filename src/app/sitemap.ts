import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arpanpandey.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL(siteUrl);

  return [
    {
      url: new URL("/", base).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
