import { pageMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { PRIVACY_POLICY_CONTENT } from "@/constants/legal/privacy-policy.content";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Read how Lovla collects, uses, and protects your personal information, and learn about your privacy choices.",
  "/privacy-policy",
);

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
