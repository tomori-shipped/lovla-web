import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { TERMS_AND_CONDITIONS_CONTENT } from "@/constants/legal/terms-and-conditions.content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Lovla - Understand the rules and guidelines for using Lovla.",
};

export default function TermsOfServicePage() {
  const { title, lastUpdated, sections } = TERMS_AND_CONDITIONS_CONTENT;

  return (
    <LegalPageLayout title={title} lastUpdated={lastUpdated}>
      {sections.map((section) => (
        <LegalSection
          key={section.number}
          number={section.number}
          title={section.title}
          content={section.content}
          subsections={section.subsections}
        />
      ))}
    </LegalPageLayout>
  );
}
