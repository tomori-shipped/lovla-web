/**
 * Content types for press/media pages.
 */

/** Represents a press contact */
export interface PressContact {
  /** Contact name or department */
  name: string;
  /** Contact email address */
  email: string;
  /** Optional role/title */
  role?: string;
}

/** Represents a media asset for download */
export interface MediaAsset {
  /** Asset name */
  name: string;
  /** Asset description */
  description: string;
  /** Asset type (e.g., "Logo", "Screenshot", "Brand Guidelines") */
  type: string;
}

/** Represents a company fact/stat */
export interface CompanyFact {
  /** The fact label */
  label: string;
  /** The fact value */
  value: string;
}

/**
 * Full press page content structure.
 */
export interface PressPageContent {
  /** Page title */
  title: string;
  /** Company tagline or mission statement */
  tagline: string;
  /** Company description/about paragraph */
  about: string;
  /** Key company facts/stats */
  facts: CompanyFact[];
  /** Press contact information */
  contact: PressContact;
  /** Available media assets */
  mediaAssets: MediaAsset[];
  /** Brand guidelines or usage notes */
  brandGuidelines: string;
}
