import type { Metadata } from "next";

export const SITE_URL = "https://www.lovla.app";
export const SITE_TITLE =
  "Lovla | Couples Coloring App & Shared Memory Journal";
export const SITE_DESCRIPTION =
  "Turn photos into coloring pages, color together in real time, and save your art in a shared journal. Discover creative date nights with Lovla for iPhone and iPad.";
export const socialImage = {
  url: `${SITE_URL}/share-image`,
  width: 1200,
  height: 630,
  alt: "Lovla. A couples coloring app for creative dates and shared memories.",
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = `${title} | Lovla`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "Lovla",
      locale: "en_US",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}
