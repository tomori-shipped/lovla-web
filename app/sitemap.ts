import { blogPosts } from "@/constants/blog";
import { SITE_URL } from "@/lib/seo";
import type { MetadataRoute } from "next";
import { lovlaStories } from "@/constants/blog/lovla-september-posts";
import { activitiesPost } from "@/constants/blog/long-distance-activities";
import { photoColoringPost } from "@/constants/blog/photo-to-coloring-page";
import { whoKnowsMeBetterPost } from "@/constants/blog/who-knows-me-better";

const baseUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    ...lovlaStories.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedDate ?? "2026-09-19"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/blog/couples-apps-without-quizzes`,
      lastModified: new Date("2026-09-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/long-distance-sip-and-paint`,
      lastModified: new Date("2026-09-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/creative-date-ideas-for-couples`,
      lastModified: new Date("2026-09-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/questions-to-ask-your-partner`,
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/long-distance-anniversary-ideas`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/long-distance-relationship-gifts`,
      lastModified: new Date("2026-09-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/press-kit/mascots`,
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/press-kit`,
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: baseUrl,
      lastModified: new Date("2026-09-19"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-09-21"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/things-to-do-on-facetime-with-your-partner`,
      lastModified: new Date("2026-09-09"),
      changeFrequency: "monthly",
      priority: 0.8,
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
      url: `${baseUrl}/blog/${whoKnowsMeBetterPost.slug}`,
      lastModified: new Date(whoKnowsMeBetterPost.updatedDate),
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
  return entries.map((entry) => {
    const post = blogPosts.find(
      (post) => `${baseUrl}${post.href}` === entry.url,
    );
    return post ? { ...entry, images: [`${baseUrl}${post.image}`] } : entry;
  });
}
