import type { LegalPageContent } from "./types";

/**
 * Privacy Policy content for the Lovla app.
 * This content is separated from the presentation layer for easier maintenance.
 */
export const PRIVACY_POLICY_CONTENT: LegalPageContent = {
  title: "Privacy Policy",
  lastUpdated: "26 January, 2026",
  sections: [
    {
      number: 1,
      title: "Overview",
      content: [
        {
          type: "paragraph",
          content:
            "This Privacy Policy explains how we collect, use, store, and share personal data when you use the Service. It applies to:",
        },
        {
          type: "list",
          items: [
            { text: "users who create accounts;" },
            {
              text: "people whose images or information appear in User Content.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "This Policy is designed to comply with key data protection principles in jurisdictions such as Nigeria, the UK, the EU (including GDPR), and the US. Mandatory local laws may give you additional rights.",
        },
      ],
    },
    {
      number: 2,
      title: "Information We Collect",
      content: [
        {
          type: "paragraph",
          content: "We collect three types of data that includes:",
        },
        {
          type: "list",
          items: [
            {
              text: "The information you provide directly (account information, profile details, user generated content, feedback, and support requests).",
            },
            {
              text: "Information collected automatically (device information, usage data, app activity).",
            },
            { text: "Data from others (linked accounts)." },
          ],
        },
        {
          type: "paragraph",
          content:
            "This information is essential for providing and improving our services, ensuring the safety of our community, and complying with our legal obligations.",
        },
      ],
      subsections: [
        {
          number: "2.1",
          title: "Information you provide directly:",
          content: [
            {
              type: "list",
              items: [
                {
                  text: "Account information: name, username, email address, password, profile image.",
                },
                {
                  text: "Relationship information: linked partner's account details, relationship status (if you choose to share it).",
                },
                {
                  text: "User Content: photographs, AI Outputs, text notes, and other content you upload or create.",
                },
                {
                  text: "Communications: messages you send to us (support, feedback, complaints).",
                },
              ],
            },
          ],
        },
        {
          number: "2.2",
          title: "Information we collect automatically:",
          content: [
            {
              type: "list",
              items: [
                {
                  text: "Device and technical data: IP address, device identifiers, app version, operating system, language, crash logs.",
                },
                {
                  text: "Usage data: pages and screens visited, features used, time spent in the app.",
                },
              ],
            },
          ],
        },
        {
          number: "2.3",
          title: "Data from others:",
          content: [
            {
              type: "list",
              items: [
                {
                  text: "Your linked partner may upload photos or content that includes you.",
                },
                {
                  text: "Third-party service providers (for example, analytics or cloud hosting) may provide us with aggregated information.",
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
          content: "We use your personal data to:",
        },
        {
          type: "list",
          items: [
            { text: "create and manage your account and Linked Accounts;" },
            { text: "provide and personalize the Service and AI features;" },
            { text: "process photos and generate AI Outputs;" },
            { text: "maintain security, detect fraud, and prevent abuse;" },
            { text: "respond to your inquiries and support requests;" },
            {
              text: "send service-related messages (for example, changes to terms or privacy);",
            },
            { text: "conduct analytics to improve the Service; and" },
            { text: "comply with legal obligations and enforce our rights." },
          ],
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
            "When you upload photos, we process them using our AI tools to:",
        },
        {
          type: "list",
          items: [
            { text: "detect and remove backgrounds;" },
            { text: "simplify colours; and" },
            { text: "generate colouring-book style or similar images." },
          ],
        },
        {
          type: "paragraph",
          content:
            "We process this data primarily to perform our contract with you.",
        },
        {
          type: "paragraph",
          content:
            "We may also use aggregated or de-identified data from AI processing to improve our models and systems. We will not publish or share your identifiable images for training public models without your explicit consent.",
        },
        {
          type: "paragraph",
          content:
            "We do not guarantee the accuracy, completeness, or quality of AI Outputs. See the AI Image Processing and Licensing Policy and the Disclaimer, Limitation of Liability, and Indemnity document for more information.",
        },
      ],
    },
    {
      number: 5,
      title: "User Content Ownership and Licensing",
      content: [
        {
          type: "paragraph",
          content:
            "You retain ownership of your User Content. We do not claim ownership over your images or AI Outputs. You licence us to process, store, and handle your User Content as described in the Terms of Service.",
        },
        {
          type: "paragraph",
          content:
            "You must ensure you have the right to upload photos of others and to allow us to process them in this way.",
        },
      ],
    },
    {
      number: 6,
      title: "Children and Minors",
      content: [
        {
          type: "paragraph",
          content:
            "The Service is for individuals from 13 and above. We do not knowingly allow the upload of sexual/explicit images of minors. Accordingly, you must not upload images of anyone without their explicit consent.",
        },
        {
          type: "paragraph",
          content:
            "If we become aware that we hold images of minors without proper consent, we will take steps to delete them and may suspend the relevant account.",
        },
      ],
    },
    {
      number: 7,
      title: "Sharing Your Data",
      content: [
        {
          type: "paragraph",
          content: "We may share your personal data with:",
        },
        {
          type: "list",
          items: [
            {
              text: "Your linked partner, for content you share in Linked Accounts;",
            },
            {
              text: "Service providers (for example, cloud hosting, analytics, and AI processing infrastructure providers) under appropriate contracts;",
            },
            {
              text: "Authorities, regulators, or law enforcement when required by law or to protect rights and safety.",
            },
          ],
        },
        {
          type: "paragraph",
          content: "We do not sell your personal data to third parties.",
        },
      ],
    },
    {
      number: 8,
      title: "International Transfers",
      content: [
        {
          type: "paragraph",
          content:
            "Your personal data may be transferred to and processed in countries other than your own, including countries that may not have the same level of data protection. Where we transfer personal data, we use appropriate safeguards.",
        },
      ],
    },
    {
      number: 9,
      title: "Data Storage, Retention, and Deletion",
      content: [
        {
          type: "paragraph",
          content:
            "We store your data on servers operated by us or our service providers. We keep personal data:",
        },
        {
          type: "list",
          items: [
            { text: "for as long as you have an active account; and" },
            {
              text: "for a limited period after account closure, as necessary for legal, security, and business continuity reasons.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "When we no longer need personal data, we will delete or de-identify it.",
        },
        {
          type: "paragraph",
          content:
            "When you delete specific content, we will remove it from active use and our systems within reasonable timeframes. Copies may remain in backups for a limited period.",
        },
        {
          type: "paragraph",
          content:
            "Deleting your account does not automatically delete content already downloaded or copied by your linked partner.",
        },
      ],
    },
    {
      number: 10,
      title: "Your Rights",
      content: [
        {
          type: "paragraph",
          content:
            "Depending on your location, you may have rights such as:",
        },
        {
          type: "list",
          items: [
            { text: "Access to your personal data;" },
            { text: "Rectification of inaccurate data;" },
            { text: "Erasure of your data in certain circumstances;" },
            { text: "Data portability." },
          ],
        },
        {
          type: "paragraph",
          content:
            "You can exercise these rights by contacting us. We may need to verify your identity. You may also have the right to lodge a complaint with a data protection authority in your country.",
        },
      ],
    },
    {
      number: 11,
      title: "Security",
      content: [
        {
          type: "paragraph",
          content:
            "We use reasonable technical and organizational measures to protect your personal data. No system is perfectly secure. You are responsible for keeping your login credentials safe and using strong passwords.",
        },
      ],
    },
    {
      number: 12,
      title: "Reporting Concerns and Takedown",
      content: [
        {
          type: "paragraph",
          content:
            "If you believe your privacy rights have been infringed (for example, someone uploaded your image without permission), you may contact us or use in-app tools. We will review and, where appropriate, remove or restrict access to the relevant content.",
        },
      ],
    },
    {
      number: 13,
      title: "Changes to This Policy",
      content: [
        {
          type: "paragraph",
          content:
            "We may update this Policy from time to time. We will notify you of material changes where required by law. Continued use of the Service after changes take effect means you accept the updated Policy.",
        },
      ],
    },
    {
      number: 14,
      title: "Contact",
      content: [
        {
          type: "paragraph",
          content:
            "If you have any questions about this Privacy Policy, please contact us.",
        },
      ],
    },
  ],
};
