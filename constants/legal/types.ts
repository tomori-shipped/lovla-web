/**
 * Content block types for legal documents.
 * Supports paragraphs, lists, and nested lists for flexible content structure.
 */

/** Represents a single paragraph of text */
export interface LegalParagraph {
  /** The paragraph text content */
  text: string;
}

/** Represents a list item, optionally with nested items */
export interface LegalListItem {
  /** The list item text content */
  text: string;
  /** Optional nested list items for sub-bullets */
  nestedItems?: string[];
}

/** Union type for content blocks within a section */
export type LegalContentBlock =
  | { type: "paragraph"; content: string }
  | { type: "list"; items: LegalListItem[] };

/**
 * Represents a subsection within a legal document section.
 * Used for numbered subsections like "4.1. Consent and Shared Content"
 */
export interface LegalSubsectionContent {
  /** The subsection number (e.g., "4.1", "7.2") */
  number: string;
  /** The subsection title */
  title: string;
  /** Content blocks within this subsection */
  content: LegalContentBlock[];
}

/**
 * Represents a top-level section in a legal document.
 * Used for numbered sections like "1. Introduction"
 */
export interface LegalSectionContent {
  /** The section number (1, 2, 3, etc.) */
  number: number;
  /** The section title */
  title: string;
  /** Content blocks within this section (before any subsections) */
  content: LegalContentBlock[];
  /** Optional subsections within this section */
  subsections?: LegalSubsectionContent[];
}

/**
 * Full legal document content structure.
 * Represents an entire legal page like Privacy Policy or Terms of Service.
 */
export interface LegalPageContent {
  /** The page title (e.g., "Privacy Policy") */
  title: string;
  /** The last updated date string */
  lastUpdated: string;
  /** All sections in the document */
  sections: LegalSectionContent[];
}
