import type { Metadata } from "next";
import BookStudio from "@/components/shop/BookStudio";

export const metadata: Metadata = {
  title: "Make your own coloring book",
  description:
    "A little book of your favorite us moments. Arrange your photos, make every page your own, and turn your memories into a coloring book with Lovla.",
  alternates: { canonical: "/shop" },
  robots: { index: false, follow: false },
};

export default function ShopPage() {
  return <BookStudio />;
}
