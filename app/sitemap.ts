import type { MetadataRoute } from "next";
import { activitiesPost } from "@/constants/blog/long-distance-activities";
import { photoColoringPost } from "@/constants/blog/photo-to-coloring-page";

const baseUrl = "https://www.lovla.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/press-kit`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: baseUrl,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/${activitiesPost.slug}`,
      lastModified: new Date(activitiesPost.updatedDate),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/${photoColoringPost.slug}`,
      lastModified: new Date(photoColoringPost.updatedDate),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-apps-for-couples`,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
