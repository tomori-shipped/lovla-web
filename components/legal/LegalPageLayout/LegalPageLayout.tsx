import { memo, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Base props interface for consistent prop naming across components.
 */
export interface BaseProps {
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
  /** Test ID for testing purposes. Defaults to no test ID. */
  testId?: string;
}

/**
 * Props for the LegalPageLayout component.
 */
export interface LegalPageLayoutProps extends BaseProps {
  /** The page title displayed as h1 */
  title: string;
  /** The last updated date string */
  lastUpdated: string;
  /** The content sections to render within the layout */
  children: ReactNode;
}

/**
 * A shared layout component for legal pages (Privacy Policy, Terms of Service, etc.).
 * Provides consistent structure with back navigation, title, date, and prose styling.
 */
export const LegalPageLayout = memo<LegalPageLayoutProps>(
  ({ title, lastUpdated, children, className, testId }) => {
    return (
      <main
        className={cn("min-h-screen bg-accent", className)}
        data-testid={testId}
      >
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="mb-8 inline-block text-primary hover:underline"
            >
              &larr; Back to Home
            </Link>

            <h1 className="mb-2 text-center font-helix text-4xl text-primary">
              {title}
            </h1>
            <p className="mb-12 text-center text-muted-foreground">
              Last updated: {lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              {children}
            </div>
          </div>
        </div>
      </main>
    );
  }
);

LegalPageLayout.displayName = "LegalPageLayout";
