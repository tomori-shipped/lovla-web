import type { Metadata } from "next";
import { hellixBold, inter } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lovla.app"),
  title: {
    default: "Lovla - A Coloring Journal Made For Lovers",
    template: "%s | Lovla",
  },
  description:
    "Turn your shared memories into meaningful activities. Lovla helps couples discover their love language through a beautiful coloring journal experience.",
  keywords: [
    "couples app",
    "relationship app",
    "coloring journal",
    "love language",
    "couples activity",
    "date night app",
    "couples game",
  ],
  authors: [{ name: "Benekane Technologies LLC" }],
  creator: "Benekane Technologies LLC",
  openGraph: {
    title: "Lovla - A Coloring Journal Made For Lovers",
    description:
      "Turn your shared memories into meaningful activities. Discover your love language together.",
    type: "website",
    siteName: "Lovla",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovla - A Coloring Journal Made For Lovers",
    description:
      "Turn your shared memories into meaningful activities. Discover your love language together.",
  },
  icons: {
    icon: "/lovla-favicon.ico"
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${hellixBold.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
