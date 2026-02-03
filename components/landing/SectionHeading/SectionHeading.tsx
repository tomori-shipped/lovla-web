import { memo } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the SectionHeading component.
 */
export interface SectionHeadingProps {
  /** The main heading text */
  title: string;
  /** Optional subtitle/description text. Defaults to no subtitle if not provided. */
  subtitle?: string;
  /** Text alignment. Defaults to "center". */
  align?: "left" | "center" | "right";
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
}

/**
 * A reusable section heading component for landing page sections.
 * Provides consistent typography and spacing for section titles.
 */
export const SectionHeading = memo<SectionHeadingProps>(
  ({ title, subtitle, align = "center", className }) => {
    const alignmentClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    return (
      <div className={cn("mb-8 md:mb-12", alignmentClasses[align], className)}>
        <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:mt-4 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";
