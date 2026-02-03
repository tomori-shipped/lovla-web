import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { PRIVACY_POLICY_CONTENT } from "@/constants/legal/privacy-policy.content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lovla - Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  const { title, lastUpdated, sections } = PRIVACY_POLICY_CONTENT;

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
