import { memo } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/landing/SectionHeading";
import type { FeatureItem } from "@/constants/landing/types";

/**
 * Props for a single feature card.
 */
interface FeatureCardProps {
  /** The feature data to display */
  feature: FeatureItem;
}

/**
 * Renders a single feature card.
 */
const FeatureCard = memo<FeatureCardProps>(({ feature }) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:rounded-2xl sm:p-6">
      {feature.icon && (
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
          {feature.icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-primary sm:text-xl">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600 sm:text-base">{feature.description}</p>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

/**
 * Props for the FeaturesGrid component.
 */
export interface FeaturesGridProps {
  /** Array of feature items to display */
  features: FeatureItem[];
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
}

/**
 * Displays a grid of feature cards with a section heading.
 * Used to highlight key value propositions of the app.
 */
export const FeaturesGrid = memo<FeaturesGridProps>(
  ({ features, className }) => {
    return (
      <section className={cn("py-10 sm:py-12 md:py-16", className)}>
        <SectionHeading
          title="Why Couples Love Lovla"
          subtitle="Everything you need to turn your memories into meaningful moments together."
        />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>
    );
  }
);

FeaturesGrid.displayName = "FeaturesGrid";
