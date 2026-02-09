import type { LegalPageContent } from "./types";

/**
 * Privacy Policy content for the Lovla app.
 * This content is separated from the presentation layer for easier maintenance.
 */
export const PRIVACY_POLICY_CONTENT: LegalPageContent = {
  title: "Privacy Policy",
  lastUpdated: "February 9, 2026",
  sections: [
    {
      number: 1,
      title: "Overview",
      content: [
        {
          type: "paragraph",
          content:
            'This Privacy Policy explains how Lovla ("we," "us," or "our") collects, uses, stores, and shares personal data when you use the Lovla mobile application and related services (the "Service").',
        },
        {
          type: "paragraph",
          content: "This Policy applies to:",
        },
        {
          type: "list",
          items: [
            { text: "Users who create accounts;" },
            {
              text: "People whose images or information appear in User Content.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "This Policy is designed to comply with applicable data protection laws, including laws in the United States, Nigeria, the United Kingdom, and the European Union (GDPR). Additional local laws may provide you with extra rights.",
        },
        {
          type: "paragraph",
          content:
            "By using Lovla, you agree to the practices described in this Privacy Policy.",
        },
      ],
    },
    {
      number: 2,
      title: "Information We Collect",
      content: [
        {
          type: "paragraph",
          content: "We collect the following categories of information:",
        },
      ],
      subsections: [
        {
          number: "2.1",
          title: "Information You Provide Directly",
          content: [
            {
              type: "list",
              items: [
                {
                  text: "Account Information: name, username, email address, password, profile image.",
                },
                {
                  text: "Relationship Information: linked partner's account details and pairing status.",
                },
                {
                  text: "User Content: photographs, text notes, and other content you upload or create.",
                },
                {
                  text: "Communications: messages sent to us for support, feedback, or inquiries.",
                },
              ],
            },
            {
              type: "paragraph",
              content:
                "Most information we collect is associated with your Lovla account and user ID in order to provide the Service.",
            },
          ],
        },
        {
          number: "2.2",
          title: "Information Collected Automatically",
          content: [
            {
              type: "list",
              items: [
                {
                  text: "Device and Technical Data: IP address, device identifiers, operating system, app version, language, and crash logs.",
                },
                {
                  text: "Usage Data: screens viewed, features used, interactions, and time spent in the app.",
                },
              ],
            },
          ],
        },
        {
          number: "2.3",
          title: "Data From Others",
          content: [
            {
              type: "list",
              items: [
                {
                  text: "Your linked partner may upload content that includes you.",
                },
                {
                  text: "Service providers (such as analytics or cloud hosting partners) may provide aggregated or de-identified information.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "How We Use Your Data",
      content: [
        {
          type: "paragraph",
          content: "We use personal data to:",
        },
        {
          type: "list",
          items: [
            {
              text: "Create and manage user accounts and linked accounts",
            },
            { text: "Provide and personalize Lovla features" },
            { text: "Process photos and generate AI outputs" },
            { text: "Enable pairing between users" },
            {
              text: "Maintain security, detect fraud, and prevent abuse",
            },
            { text: "Respond to support requests" },
            { text: "Send important service-related notifications" },
            { text: "Analyze usage to improve the Service" },
            { text: "Comply with legal obligations" },
          ],
        },
        {
          type: "paragraph",
          content: "We do not sell personal data.",
        },
        {
          type: "paragraph",
          content:
            "We do not use personal data for third-party advertising or targeted advertising.",
        },
      ],
    },
    {
      number: 4,
      title: "AI Image Processing",
      content: [
        {
          type: "paragraph",
          content:
            "When you upload photos, we process them using AI systems to:",
        },
        {
          type: "list",
          items: [
            { text: "Remove or detect backgrounds" },
            { text: "Simplify colors" },
            {
              text: "Generate digital coloring-style images and similar outputs",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "We may use third-party service providers to assist with image processing and AI functionality. These providers process data only on our behalf and under contractual obligations to protect user data.",
        },
        {
          type: "paragraph",
          content:
            "We may use aggregated or de-identified data to improve our systems. We will not use identifiable images to train public AI models without your explicit consent.",
        },
        {
          type: "paragraph",
          content:
            "AI outputs are generated automatically and may contain errors. We do not guarantee accuracy, quality, or suitability of AI-generated content.",
        },
        {
          type: "paragraph",
          content:
            "Generated coloring pages are digital-only and are not currently available for export or printing.",
        },
      ],
    },
    {
      number: 5,
      title: "Payment & Subscription Information",
      content: [
        {
          type: "paragraph",
          content:
            "Lovla does not collect or store payment card information.",
        },
        {
          type: "paragraph",
          content:
            "All payments are processed by Apple through the App Store's In-App Purchase system. We receive limited transaction information from Apple, such as subscription status, product type, and expiration date, to provide access to paid features.",
        },
        {
          type: "paragraph",
          content:
            "We do not have access to your full payment details.",
        },
      ],
    },
    {
      number: 6,
      title: "User Content Ownership and Licensing",
      content: [
        {
          type: "paragraph",
          content: "You retain ownership of your User Content.",
        },
        {
          type: "paragraph",
          content:
            "You grant Lovla a limited license to store, process, and display your content solely to operate the Service.",
        },
        {
          type: "paragraph",
          content:
            "You are responsible for ensuring you have the right to upload any images, including images of other people.",
        },
      ],
    },
    {
      number: 7,
      title: "Children and Minors",
      content: [
        {
          type: "paragraph",
          content:
            "Lovla is intended for users aged 13 and older.",
        },
        {
          type: "paragraph",
          content:
            "You must not upload sexual or explicit images of minors. If we become aware that prohibited content has been uploaded, we will remove it and may suspend the account.",
        },
      ],
    },
    {
      number: 8,
      title: "Sharing Your Data",
      content: [
        {
          type: "paragraph",
          content: "We may share personal data with:",
        },
        {
          type: "list",
          items: [
            {
              text: "Your linked partner (for shared content)",
            },
            {
              text: "Service providers (cloud hosting, analytics, AI processing)",
            },
            {
              text: "Authorities when required by law",
            },
          ],
        },
        {
          type: "paragraph",
          content: "We do not sell personal data.",
        },
      ],
    },
    {
      number: 9,
      title: "International Transfers",
      content: [
        {
          type: "paragraph",
          content:
            "Your data may be processed in countries outside your own. We use appropriate safeguards to protect personal data during international transfers.",
        },
      ],
    },
    {
      number: 10,
      title: "Data Storage, Retention, and Deletion",
      content: [
        {
          type: "paragraph",
          content:
            "We store data for as long as your account is active and for a limited period after account closure for legal and operational purposes.",
        },
        {
          type: "paragraph",
          content:
            "You may delete specific content or your account within the app. Backup copies may persist temporarily.",
        },
        {
          type: "paragraph",
          content:
            "Deleting your account does not automatically delete content already saved or downloaded by your linked partner.",
        },
      ],
    },
    {
      number: 11,
      title: "Your Rights",
      content: [
        {
          type: "paragraph",
          content:
            "Depending on your location, you may have rights to:",
        },
        {
          type: "list",
          items: [
            { text: "Access your data" },
            { text: "Correct inaccurate data" },
            { text: "Request deletion" },
            { text: "Request data portability" },
          ],
        },
        {
          type: "paragraph",
          content:
            "Contact us to exercise these rights. We may verify your identity.",
        },
      ],
    },
    {
      number: 12,
      title: "Security",
      content: [
        {
          type: "paragraph",
          content:
            "We use reasonable technical and organizational safeguards to protect personal data. No system is completely secure. You are responsible for protecting your login credentials.",
        },
      ],
    },
    {
      number: 13,
      title: "Reporting and Takedown",
      content: [
        {
          type: "paragraph",
          content:
            "If you believe your privacy rights have been violated or your image was uploaded without consent, contact us or use in-app reporting tools. We will investigate and take appropriate action.",
        },
      ],
    },
    {
      number: 14,
      title: "Changes to This Policy",
      content: [
        {
          type: "paragraph",
          content:
            "We may update this Privacy Policy from time to time. Continued use of Lovla means you accept the updated Policy.",
        },
      ],
    },
    {
      number: 15,
      title: "Contact",
      content: [
        {
          type: "paragraph",
          content:
            "If you have questions about this Privacy Policy, contact us at: info@benekan.com",
        },
      ],
    },
  ],
};
