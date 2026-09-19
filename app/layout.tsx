import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, socialImage } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import type { Metadata } from "next";
import { hellixBold, inter, instrumentSerif } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | Lovla" },
  description: SITE_DESCRIPTION,
  authors: [{ name: "The Lovla Team", url: SITE_URL }],
  creator: "Benekan Technologies LLC",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: "Lovla",
    locale: "en_US",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [socialImage],
  },
  icons: { icon: "/lovla-favicon.ico" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${instrumentSerif.variable} ${hellixBold.variable} antialiased`}
      >
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Lovla",
            legalName: "Benekan Technologies LLC",
            url: SITE_URL,
            logo: `${SITE_URL}/press-kit/brand/lovla-app-icon-plum.png`,
            sameAs: [
              "https://www.instagram.com/lovla.app",
              "https://apps.apple.com/us/app/lovla-couples-coloring-games/id6758548454",
            ],
          }}
        />
        {children}
      </body>
    </html>
  );
}
