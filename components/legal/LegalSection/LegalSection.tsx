import { memo } from "react";
import { cn } from "@/lib/utils";
import { LegalSubsection } from "@/components/legal/LegalSubsection";
import type {
  LegalContentBlock,
  LegalSubsectionContent,
} from "@/constants/legal/types";

/**
 * Props for the LegalSection component.
 */
export interface LegalSectionProps {
  /** The section number (1, 2, 3, etc.) */
  number: number;
  /** The section title */
  title: string;
  /** Content blocks within this section (before any subsections) */
  content: LegalContentBlock[];
  /** Optional subsections within this section */
  subsections?: LegalSubsectionContent[];
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
}

/**
 * Renders a content block (paragraph or list).
 */
const ContentBlock = ({ block }: { block: LegalContentBlock }) => {
  if (block.type === "paragraph") {
    return <p className="mb-4">{block.content}</p>;
  }

  return (
    <ul className="mb-4 list-disc space-y-2 pl-6">
      {block.items.map((item, index) => (
        <li key={index}>
          {item.text}
          {item.nestedItems && item.nestedItems.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-6">
              {item.nestedItems.map((nestedItem, nestedIndex) => (
                <li key={nestedIndex}>{nestedItem}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

/**
 * A component for rendering top-level sections in legal documents.
 * Used for numbered sections like "1. Introduction".
 */
export const LegalSection = memo<LegalSectionProps>(
  ({ number, title, content, subsections, className }) => {
    return (
      <section className={cn("mb-10", className)}>
        <h2 className="mb-4 text-2xl font-semibold text-primary">
          {number}. {title}
        </h2>
        {content.map((block, index) => (
          <ContentBlock key={index} block={block} />
        ))}
        {subsections?.map((subsection) => (
          <LegalSubsection
            key={subsection.number}
            number={subsection.number}
            title={subsection.title}
            content={subsection.content}
          />
        ))}
      </section>
    );
  }
);

LegalSection.displayName = "LegalSection";
