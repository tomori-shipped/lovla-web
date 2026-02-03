/**
 * Type definitions for landing page content.
 * Provides type-safe structures for features, how-it-works, FAQ, and other landing sections.
 */

import type { ReactNode } from "react";

/**
 * Represents a feature item displayed in the features grid.
 */
export interface FeatureItem {
  /** Unique identifier for the feature */
  id: string;
  /** The feature title */
  title: string;
  /** A brief description of the feature */
  description: string;
  /** Icon component or element to display. Defaults to no icon if not provided. */
  icon?: ReactNode;
}

/**
 * Represents a step in the "How It Works" section.
 */
export interface HowItWorksStep {
  /** Unique identifier for the step */
  id: string;
  /** Step number (1, 2, 3, etc.) */
  stepNumber: number;
  /** The step title */
  title: string;
  /** A brief description of what happens in this step */
  description: string;
  /** Icon component or element to display. Defaults to no icon if not provided. */
  icon?: ReactNode;
}

/**
 * Represents a single FAQ item with question and answer.
 */
export interface FaqItem {
  /** Unique identifier for the FAQ item */
  id: string;
  /** The question being asked */
  question: string;
  /** The answer to the question */
  answer: string;
}

/**
 * Represents an app screenshot for the preview section.
 */
export interface AppScreenshot {
  /** Unique identifier for the screenshot */
  id: string;
  /** The image source path */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Caption describing what the screenshot shows. Defaults to no caption if not provided. */
  caption?: string;
}

/**
 * Represents a trust badge or indicator.
 */
export interface TrustBadge {
  /** Unique identifier for the badge */
  id: string;
  /** The badge text */
  text: string;
  /** Icon component or element to display. Defaults to no icon if not provided. */
  icon?: ReactNode;
}

/**
 * Configuration for the Android waitlist section.
 */
export interface WaitlistConfig {
  /** The headline text */
  headline: string;
  /** The subheadline or description text */
  subheadline: string;
  /** Placeholder text for the email input */
  inputPlaceholder: string;
  /** Button text */
  buttonText: string;
  /** Success message after submission */
  successMessage: string;
}
