import type { AppScreenshot } from "./types";

/**
 * App screenshots displayed in the landing page preview section.
 *
 * IMPORTANT: Replace these placeholder paths with your actual app screenshots.
 * Screenshots should be placed in /public/screenshots/ directory.
 *
 * Recommended image specifications:
 * - Aspect ratio: 9:19 (standard phone aspect ratio)
 * - Resolution: 1080 x 2280 pixels (or similar)
 * - Format: PNG or WebP for best quality
 */
export const appScreenshots: AppScreenshot[] = [
  {
    id: "screenshot-home",
    src: "/screenshots/home.png",
    alt: "Lovla app home screen showing couple's shared memories",
    caption: "Your shared memories",
  },
  {
    id: "screenshot-coloring",
    src: "/screenshots/coloring.png",
    alt: "Lovla app coloring screen with a photo transformed into line art",
    caption: "Color together",
  },
  {
    id: "screenshot-love-language",
    src: "/screenshots/love-language.png",
    alt: "Lovla app showing love language insights and results",
    caption: "Discover your love language",
  },
];
