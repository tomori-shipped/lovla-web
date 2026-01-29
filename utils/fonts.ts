import {
  Geist,
  Geist_Mono,
  Inter,
  Love_Ya_Like_A_Sister,
} from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const loveYaLikeASister = Love_Ya_Like_A_Sister({
  variable: "--font-love-ya-like-a-sister",
  weight: "400",
  subsets: ["latin"],
});

export const hellixBold = localFont({
  src: "../assets/fonts/Hellix-Bold.ttf",
  variable: "--font-helix-bold",
  weight: "700",
  display: "swap",
});
