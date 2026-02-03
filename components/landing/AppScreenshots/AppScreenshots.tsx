"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/landing/SectionHeading";
import type { AppScreenshot } from "@/constants/landing/types";

/**
 * Props for a single screenshot card.
 */
interface ScreenshotCardProps {
  /** The screenshot data to display */
  screenshot: AppScreenshot;
  /** Priority loading for above-the-fold images. Defaults to false. */
  priority?: boolean;
}

/**
 * Renders a single app screenshot with optional caption.
 * Shows a placeholder if the image fails to load.
 */
const ScreenshotCard = memo<ScreenshotCardProps>(
  ({ screenshot, priority = false }) => {
    const [hasError, setHasError] = useState(false);

    return (
      <div className="flex flex-col items-center">
        <div className="relative aspect-[9/19] w-full max-w-[200px] overflow-hidden rounded-[1.75rem] bg-gray-100 shadow-xl ring-4 ring-gray-900/5 sm:max-w-[240px] sm:rounded-[2rem] sm:ring-6 md:max-w-[280px] md:rounded-[2.5rem] md:ring-8">
          {hasError ? (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-primary/5 to-primary/10 p-4 text-center sm:p-6">
              <ImageIcon className="mb-3 h-8 w-8 text-primary/30 sm:mb-4 sm:h-12 sm:w-12" />
              <p className="text-xs text-primary/50 sm:text-sm">
                {screenshot.caption || "Screenshot"}
              </p>
              <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                Add image to
              </p>
              <code className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                public{screenshot.src}
              </code>
            </div>
          ) : (
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover"
              priority={priority}
              sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
              onError={() => setHasError(true)}
            />
          )}
        </div>
        {screenshot.caption && (
          <p className="mt-3 text-center text-xs text-gray-600 sm:mt-4 sm:text-sm">
            {screenshot.caption}
          </p>
        )}
      </div>
    );
  }
);

ScreenshotCard.displayName = "ScreenshotCard";

/**
 * Props for the AppScreenshots component.
 */
export interface AppScreenshotsProps {
  /** Array of screenshots to display */
  screenshots: AppScreenshot[];
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
}

/**
 * Displays a gallery of app screenshots.
 * This is the primary conversion element for a pre-launch landing page.
 */
export const AppScreenshots = memo<AppScreenshotsProps>(
  ({ screenshots, className }) => {
    if (screenshots.length === 0) {
      return null;
    }

    return (
      <section className={cn("py-10 sm:py-12 md:py-16", className)}>
        <SectionHeading
          title="See Lovla in Action"
          subtitle="A sneak peek at how you'll turn your memories into art together."
        />
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard
              key={screenshot.id}
              screenshot={screenshot}
              priority={index < 2}
            />
          ))}
        </div>
      </section>
    );
  }
);

AppScreenshots.displayName = "AppScreenshots";
