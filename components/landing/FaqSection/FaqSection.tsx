"use client";

import { memo, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/landing/SectionHeading";
import type { FaqItem } from "@/constants/landing/types";

/**
 * Props for a single FAQ item.
 */
interface FaqItemCardProps {
  /** The FAQ data to display */
  item: FaqItem;
  /** Whether this item is currently expanded. Defaults to false. */
  isExpanded?: boolean;
  /** Callback when the item is toggled */
  onToggle: () => void;
}

/**
 * Renders a single collapsible FAQ item.
 */
const FaqItemCard = memo<FaqItemCardProps>(
  ({ item, isExpanded = false, onToggle }) => {
    return (
      <div className="border-b border-gray-200 last:border-b-0">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between py-4 text-left sm:py-5"
          aria-expanded={isExpanded}
        >
          <span className="text-base font-medium text-primary sm:text-lg">
            {item.question}
          </span>
          <ChevronDown
            className={cn(
              "ml-3 h-4 w-4 flex-shrink-0 text-primary transition-transform duration-200 sm:ml-4 sm:h-5 sm:w-5",
              isExpanded && "rotate-180"
            )}
          />
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-200",
            isExpanded ? "max-h-96 pb-4 sm:pb-5" : "max-h-0"
          )}
        >
          <p className="text-sm text-gray-600 sm:text-base">{item.answer}</p>
        </div>
      </div>
    );
  }
);

FaqItemCard.displayName = "FaqItemCard";

/**
 * Props for the FaqSection component.
 */
export interface FaqSectionProps {
  /** Array of FAQ items to display */
  items: FaqItem[];
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
}

/**
 * Displays an accordion-style FAQ section.
 * Helps address common questions and reduce friction to conversion.
 */
export const FaqSection = memo<FaqSectionProps>(({ items, className }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className={cn("py-10 sm:py-12 md:py-16", className)}>
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
      />
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 md:p-8">
        {items.map((item) => (
          <FaqItemCard
            key={item.id}
            item={item}
            isExpanded={expandedId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
});

FaqSection.displayName = "FaqSection";
