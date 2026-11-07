import type { LegalPageContent } from "./types";

/**
 * Privacy Policy content for the Lovla app.
 * This content is separated from the presentation layer for easier maintenance.
 */
export const PRIVACY_POLICY_CONTENT: LegalPageContent = {
  title: "Privacy Policy",
  lastUpdated: "November 7, 2026",
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
                  text: "Account Information: name, username, email address, password, and profile image. If you sign in with Apple or Google, we receive your name and email address (or Apple's private relay email) from that provider.",
                },
                {
                  text: "Relationship Information: linked partner's account details and pairing status.",
                },
                {
                  text: "User Content: photographs, text prompts, drawings, coloring pages, notes, journal entries, and other content you upload or create.",
                },
                {
                  text: "Survey Answers: optional answers you give during onboarding.",
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
                  text: "Device and Technical Data: IP address, device identifiers, operating system, app version, language, push notification token, and crash logs.",
                },
                {
                  text: "Usage Data: screens viewed, features used, interactions, and time spent in the app.",
                },
                {
                  text: "Purchase Data: subscription status, product, and transaction details received from Apple.",
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
                  text: "Sign-in providers (Apple, Google) and Apple's App Store provide the account and purchase information described above.",
                },
              ],
            },
          ],
        },
        {
          number: "2.4",
          title: "Analytics and Diagnostics",
          content: [
            {
              type: "paragraph",
              content:
                "We use PostHog for product analytics and session recordings (photos are hidden in recordings), linked to your account and email address so we can understand how the app is used, and Sentry for crash reports. If you allow tracking, Meta receives app events to measure our ads.",
            },
            {
              type: "paragraph",
              content:
                "Text you type is masked in session recordings. Crash reports include device and app information and details of the error.",
            },
          ],
        },
        {
          number: "2.5",
          title: "Location",
          content: [
            {
              type: "paragraph",
              content:
                "If you turn on distance sharing, we store your most recent location to calculate the distance to your partner. Your partner sees only the distance, never your location. Turning sharing off deletes it.",
            },
            {
              type: "paragraph",
              content:
                "Distance sharing is optional and off by default. If you also allow location access \"Always,\" Lovla updates your location in the background, including when the app is closed, so the distance stays current. We keep only your latest location, not a history. You can stop sharing at any time in the app or by turning off location access in your device settings.",
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
            { text: "Process photos and prompts to generate AI coloring pages" },
            { text: "Enable pairing between users and partner features such as distance sharing" },
            {
              text: "Maintain security, detect fraud, and prevent abuse",
            },
            { text: "Respond to support requests" },
            { text: "Send service-related and reminder notifications" },
            { text: "Analyze usage and diagnose crashes to improve the Service" },
            {
              text: "Measure the performance of our advertising, only if you allow tracking (see Section 9)",
            },
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
            "We do not show third-party ads in Lovla. Your photos, coloring pages, notes, messages, partner details, and location are never used for advertising.",
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
            "When you upload photos or enter prompts, we process them using AI systems to:",
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
            "To create coloring pages, the photos and prompts you submit are sent to Replicate, Inc., which runs AI models, including models from OpenAI and ByteDance. They are used only to generate your page. We ask your permission before the first one is sent.",
        },
        {
          type: "paragraph",
          content:
            "We do not use your photos or prompts to train AI models.",
        },
        {
          type: "paragraph",
          content:
            "AI outputs are generated automatically and may contain errors. We do not guarantee accuracy, quality, or suitability of AI-generated content.",
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
            "Lovla is intended for users aged 13 and older. We do not knowingly collect personal data from children under 13. If we learn that we have, we will delete it.",
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
          content: "We share personal data only with:",
        },
        {
          type: "list",
          items: [
            {
              text: "Your linked partner (shared content, and the distance between you if you turn on distance sharing)",
            },
            {
              text: "Supabase (database, file storage, and sign-in hosting)",
            },
            {
              text: "Replicate, Inc. and the AI model providers it runs, such as OpenAI and ByteDance (AI coloring page generation)",
            },
            {
              text: "PostHog (product analytics and session recordings) and Sentry (crash reports)",
            },
            {
              text: "Expo and Apple (delivering push notifications)",
            },
            {
              text: "Apple and Google (sign-in) and Apple (in-app purchases)",
            },
            {
              text: "Meta Platforms (advertising measurement, only if you allow tracking; see Section 9)",
            },
            {
              text: "Authorities when required by law",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "Our service providers process data on our behalf to provide their services to us. We do not sell personal data.",
        },
      ],
    },
    {
      number: 9,
      title: "Advertising Measurement and Tracking",
      content: [
        {
          type: "paragraph",
          content:
            "On iOS, Lovla asks for your permission through Apple's App Tracking Transparency prompt before any tracking happens. If you allow tracking, Lovla uses Meta's software development kit to understand whether our Facebook and Instagram ads lead to app installs and activity, measure advertising performance, and make our ads more relevant.",
        },
        {
          type: "paragraph",
          content:
            "If you allow tracking, Meta may receive device identifiers (including your advertising identifier), IP address and device information, app activation and usage events, and information about App Store purchases, subscriptions, and trials. We do not send Meta your name, email address, partner details, photos, coloring pages, messages, notes, or location.",
        },
        {
          type: "paragraph",
          content:
            "If you decline, none of this is sent to Meta and you can keep using every part of Lovla. You can change your choice at any time in your device's Settings. Withdrawing permission stops further sharing but does not delete information Meta has already received. Meta processes the information it receives under its own privacy policy: https://www.facebook.com/privacy/policy/.",
        },
      ],
    },
    {
      number: 10,
      title: "International Transfers",
      content: [
        {
          type: "paragraph",
          content:
            "Your data may be processed in countries outside your own, including the United States, where our service providers operate. We use appropriate safeguards to protect personal data during international transfers.",
        },
      ],
    },
    {
      number: 11,
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
            "Your stored location is deleted when you turn off distance sharing.",
        },
        {
          type: "paragraph",
          content:
            "Deleting your account does not automatically delete content already saved or downloaded by your linked partner.",
        },
      ],
    },
    {
      number: 12,
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
            { text: "Object to or restrict certain processing" },
            { text: "Withdraw consent at any time, such as for tracking, AI processing, or location" },
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
      number: 13,
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
      number: 14,
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
      number: 15,
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
      number: 16,
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
