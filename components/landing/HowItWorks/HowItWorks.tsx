import { memo } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/landing/SectionHeading";
import type { HowItWorksStep } from "@/constants/landing/types";

/**
 * Props for a single step card.
 */
interface StepCardProps {
  /** The step data to display */
  step: HowItWorksStep;
  /** Whether this is the last step (hides the connector). Defaults to false. */
  isLast?: boolean;
}

/**
 * Renders a single step in the how-it-works flow.
 */
const StepCard = memo<StepCardProps>(({ step, isLast = false }) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step number circle */}
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white sm:mb-4 sm:h-14 sm:w-14 sm:text-2xl md:h-16 md:w-16">
        {step.stepNumber}
      </div>

      {/* Connector line (hidden on mobile and for last item) */}
      {!isLast && (
        <div className="absolute left-[calc(50%+40px)] top-8 hidden h-0.5 w-[calc(100%-80px)] bg-primary/20 lg:block" />
      )}

      <h3 className="mb-2 text-lg font-semibold text-primary sm:text-xl">
        {step.title}
      </h3>
      <p className="max-w-xs text-sm text-gray-600 sm:text-base">
        {step.description}
      </p>
    </div>
  );
});

StepCard.displayName = "StepCard";

/**
 * Props for the HowItWorks component.
 */
export interface HowItWorksProps {
  /** Array of steps to display */
  steps: HowItWorksStep[];
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
}

/**
 * Displays a 3-step process showing how the app works.
 * Provides visual clarity on the user journey.
 */
export const HowItWorks = memo<HowItWorksProps>(({ steps, className }) => {
  return (
    <section className={cn("py-10 sm:py-12 md:py-16", className)}>
      <SectionHeading
        title="How It Works"
        subtitle="Three simple steps to turn your photos into quality time together."
      />
      <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
});

HowItWorks.displayName = "HowItWorks";
