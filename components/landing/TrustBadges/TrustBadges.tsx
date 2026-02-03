import { memo } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TrustBadge } from "@/constants/landing/types";

/**
 * Props for the TrustBadges component.
 */
export interface TrustBadgesProps {
  /** Array of trust badges to display */
  badges: TrustBadge[];
  /** Layout direction. Defaults to "horizontal". */
  direction?: "horizontal" | "vertical";
  /** Size variant. Defaults to "default". */
  size?: "small" | "default";
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
}

/**
 * Displays a list of trust badges/indicators.
 * Used near CTAs to build confidence and reduce friction.
 */
export const TrustBadges = memo<TrustBadgesProps>(
  ({ badges, direction = "horizontal", size = "default", className }) => {
    const containerClasses = {
      horizontal: "flex flex-wrap items-center justify-center gap-4 md:gap-6",
      vertical: "flex flex-col items-start gap-2",
    };

    const textClasses = {
      small: "text-xs",
      default: "text-sm",
    };

    const iconClasses = {
      small: "h-3 w-3",
      default: "h-4 w-4",
    };

    return (
      <div className={cn(containerClasses[direction], className)}>
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={cn(
              "flex items-center gap-2 text-gray-600",
              textClasses[size]
            )}
          >
            {badge.icon || (
              <Check className={cn("text-green-600", iconClasses[size])} />
            )}
            <span>{badge.text}</span>
          </div>
        ))}
      </div>
    );
  }
);

TrustBadges.displayName = "TrustBadges";
