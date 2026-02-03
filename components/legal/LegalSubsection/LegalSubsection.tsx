import { memo } from "react";
import { cn } from "@/lib/utils";
import type { LegalContentBlock } from "@/constants/legal/types";

/**
 * Props for the LegalSubsection component.
 */
export interface LegalSubsectionProps {
  /** The subsection number (e.g., "4.1", "7.2") */
  number: string;
  /** The subsection title */
  title: string;
  /** Content blocks within this subsection */
  content: LegalContentBlock[];
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
 * A component for rendering subsections within legal document sections.
 * Used for numbered subsections like "4.1. Consent and Shared Content".
 */
export const LegalSubsection = memo<LegalSubsectionProps>(
  ({ number, title, content, className }) => {
    return (
      <div className={cn("mb-6", className)}>
        <h3 className="mb-3 text-xl font-semibold text-primary">
          {number}. {title}
        </h3>
        {content.map((block, index) => (
          <ContentBlock key={index} block={block} />
        ))}
      </div>
    );
  }
);

LegalSubsection.displayName = "LegalSubsection";
