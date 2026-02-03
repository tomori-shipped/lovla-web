import type { LegalPageContent } from "./types";

/**
 * Terms of Service content for the Lovla app.
 * This content is separated from the presentation layer for easier maintenance.
 */
export const TERMS_AND_CONDITIONS_CONTENT: LegalPageContent = {
  title: "Terms of Service",
  lastUpdated: "23 January 2026",
  sections: [
    {
      number: 1,
      title: "Introduction",
      content: [
        {
          type: "paragraph",
          content:
            'Lovla is short for Love Language, it\'s a relationship app for couples, operated by Benekane Technologies LLC ("we", "us" or "our"). It allows couples to create linked accounts, upload personal photographs, and use AI tools to transform these photographs into a colouring book style image, save and export their coloured images.',
        },
        {
          type: "paragraph",
          content:
            'These Terms of Service ("Terms") govern your use of the Lovla mobile application, (the "App"). By downloading, installing, creating an account, linking an account, or using the Service, you agree to be bound by these Terms of Service. If you do not agree please do not use the app.',
        },
      ],
    },
    {
      number: 2,
      title: "Eligibility and Age",
      content: [
        {
          type: "list",
          items: [
            { text: "You must be at least the age of 13 years to use the app" },
            {
              text: "You must be at least the age of 18 years to make purchases or subscribe to premium.",
            },
            {
              text: "All information provided by you must be accurate and complete",
            },
            { text: "Your confidentiality is your responsibility" },
          ],
        },
        {
          type: "paragraph",
          content:
            "The Service is designed for couples. Any picture (explicit or not) uploaded must be done so with consent. Users must not upload explicit/sexual images of anyone under 18 years of age. Lovla will not be liable if you allow anyone irrespective of their age to access your account or view content that may not be appropriate for them, and share it for their personal interests.",
        },
      ],
    },
    {
      number: 3,
      title: "Accounts Creation and Security",
      content: [
        {
          type: "list",
          items: [
            {
              text: "You must create an account to use most features of the Service.",
            },
            { text: "You must provide accurate and up-to-date information." },
            {
              text: "You must provide a valid email and create a secure password.",
            },
            {
              text: "You can choose a display name and add a profile picture to modify your profile.",
            },
            {
              text: "Users are responsible for the actions taken in their accounts and maintain the accounts confidentiality.",
            },
          ],
        },
        {
          type: "paragraph",
          content: "For security purposes:",
        },
        {
          type: "list",
          items: [
            {
              text: "You must notify us immediately if you believe your account has been compromised.",
            },
            { text: "Keep your login details safe." },
            {
              text: "Lovla will not be held liable for any leak of sensitive information or loss of information due to authorised access.",
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Linked Accounts and Couples Features",
      content: [
        {
          type: "paragraph",
          content:
            'The Service allows two individual user accounts to be linked as a couple account ("Linked Accounts"). The Service allows two individual user accounts to be linked, creating a shared space for photos, AI Outputs, and other Content.',
        },
        {
          type: "list",
          items: [
            {
              text: "Each user must create their own account and must not share login credentials with the other.",
            },
            {
              text: "Linking accounts requires mutual consent: one user sends an invitation and the other accepts.",
            },
            {
              text: "You must only link with someone you have a personal relationship with and who has agreed to use the Service with you.",
            },
          ],
        },
      ],
      subsections: [
        {
          number: "4.1",
          title: "Consent and Shared Content",
          content: [
            {
              type: "paragraph",
              content:
                "By using a Linked Account, each partner consents to:",
            },
            {
              type: "list",
              items: [
                {
                  text: "The other partner viewing Content that is shared into the linked space; and",
                },
                {
                  text: "Us processing shared Content, including AI processing, in line with our policies.",
                },
              ],
            },
          ],
        },
        {
          number: "4.2",
          title: "You remain responsible for:",
          content: [
            {
              type: "list",
              items: [
                {
                  text: "Only sharing Content that your partner is comfortable seeing; and",
                },
                {
                  text: "Not using Content to harass, manipulate, or harm your partner.",
                },
              ],
            },
          ],
        },
        {
          number: "4.3",
          title: "Content Restrictions",
          content: [
            {
              type: "paragraph",
              content:
                "You must not upload Content that includes your partner or any other person without their consent to both:",
            },
            {
              type: "list",
              items: [
                { text: "The upload and sharing; and" },
                { text: "The AI processing of their image." },
              ],
            },
          ],
        },
        {
          number: "4.4",
          title: "Images of Minors",
          content: [
            {
              type: "paragraph",
              content:
                "Uploading images of minors into Linked Accounts is prohibited UNLESS you are their parent, authorised ward or guardian. However, uploading and sharing explicit or sexualized content is prohibited.",
            },
          ],
        },
        {
          number: "4.5",
          title: "Ownership and Access to Shared Content",
          content: [
            {
              type: "paragraph",
              content:
                "Each user remains the owner of the Content they upload, subject to the licences granted in the Terms and AI Policy.",
            },
            {
              type: "paragraph",
              content: "Both linked partners may:",
            },
            {
              type: "list",
              items: [
                {
                  text: "View and use Content shared into the linked space; and",
                },
                {
                  text: "Download such Content for personal, non-commercial use.",
                },
              ],
            },
            {
              type: "paragraph",
              content:
                "Deleting a Linked Account or unlinking may affect access to shared Content. Either partner may request to unlink accounts at any time, using in-app tools or by contacting support.",
            },
            {
              type: "paragraph",
              content:
                "P.S We are not responsible for relationship breakdowns, reconciliation, or any emotional or psychological impact arising from linking or unlinking accounts.",
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: "User Content: Ownership and Licence",
      content: [
        {
          type: "paragraph",
          content:
            '"User Content" means any content you create, upload, share, or otherwise make available through the Service, including photos, AI Outputs, text, and feedback.',
        },
        {
          type: "list",
          items: [
            {
              text: "You retain all ownership rights in your User Content, subject to the licences you grant us under these Terms and related policies.",
            },
            {
              text: "You grant us a worldwide, non-exclusive, royalty-free, sublicensable, transferable licence to host, store, use, reproduce, modify, adapt, display, and distribute your User Content:",
              nestedItems: [
                "to operate, maintain, and improve the Service;",
                "to generate AI Outputs for you and your linked partner;",
                "to provide customer support and safety features; and",
                "to comply with law and enforce our policies.",
              ],
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "We do not use your identifiable personal images to train public AI models. We may, however, use aggregated or de-identified data to improve our systems, as explained in the Privacy Policy and AI Image Processing and Licensing Policy.",
        },
        {
          type: "paragraph",
          content:
            "You grant your linked partner a non-exclusive licence to view and download your User Content that you share within your Linked Accounts.",
        },
        {
          type: "paragraph",
          content:
            "You are responsible for backing up your User Content. We do not promise to store all User Content indefinitely.",
        },
      ],
    },
    {
      number: 6,
      title: "Consent to Upload Images of Others",
      content: [
        {
          type: "paragraph",
          content:
            "You confirm that you have obtained all necessary permissions and consents from any person whose image, likeness, or personal information is included in your User Content, including your linked partner.",
        },
        {
          type: "paragraph",
          content: "You must only upload photos or other content that:",
        },
        {
          type: "list",
          items: [
            { text: "you own or have the right to use; and" },
            {
              text: "do not infringe the rights or privacy of any third party.",
            },
          ],
        },
        {
          type: "paragraph",
          content: "You must not upload images of anyone who has not consented to:",
        },
        {
          type: "list",
          items: [
            { text: "their image being uploaded; and" },
            {
              text: "the AI processing described in the AI Image Processing section.",
            },
          ],
        },
      ],
    },
    {
      number: 7,
      title: "AI Image Processing",
      content: [
        {
          type: "paragraph",
          content:
            "Our AI tools transform your photos by removing backgrounds and base colours and converting them into colouring-book style outlines or similar effects. You understand and agree that:",
        },
        {
          type: "list",
          items: [
            {
              text: "AI processes may produce imperfect, unexpected, or inaccurate results;",
            },
            {
              text: "We do not guarantee the quality, accuracy, or suitability of any AI Outputs;",
            },
            {
              text: "AI Outputs may not faithfully represent skin tone, body shape, or other attributes.",
            },
          ],
        },
      ],
      subsections: [
        {
          number: "7.2",
          title: "Ownership of Inputs (Your Photos)",
          content: [
            {
              type: "paragraph",
              content:
                "You retain ownership of the original photos and other content you upload. By uploading photos, you grant us the licences described in the Terms of Service.",
            },
          ],
        },
        {
          number: "7.3",
          title: "Aggregated Data",
          content: [
            {
              type: "paragraph",
              content:
                "We may use aggregated or de-identified information derived from your photos and AI Outputs to improve our AI models and services.",
            },
          ],
        },
        {
          number: "7.4",
          title: "Consent and Images of Others",
          content: [
            {
              type: "paragraph",
              content:
                "You must not upload a photo of another person unless:",
            },
            {
              type: "list",
              items: [
                {
                  text: "that person has given informed consent to be photographed; and",
                },
                {
                  text: "that person has given informed consent for their image to be processed.",
                },
              ],
            },
          ],
        },
        {
          number: "7.5",
          title: "Partner Images",
          content: [
            {
              type: "paragraph",
              content:
                "If your photo includes your linked partner, you represent that your partner has given such consent. If any person withdraws consent, you must stop uploading their images and request deletion of affected photos and AI Outputs.",
            },
          ],
        },
        {
          number: "7.6",
          title: "Storage, Retention, and Deletion of AI Data",
          content: [
            {
              type: "paragraph",
              content:
                "We store photos and AI Outputs as part of your account data, in line with the Privacy Policy. When you delete specific images or AI Outputs, we will remove them from active systems within reasonable time. Copies may persist in backups for a limited period.",
            },
          ],
        },
        {
          number: "7.7",
          title: "Abuse, Reporting, and Account Actions",
          content: [
            {
              type: "paragraph",
              content:
                "You may report concerns about AI Outputs using in-app tools or contacting support. We may remove or alter AI Outputs, suspend or terminate accounts, or adjust our AI systems where we consider it necessary to protect users or comply with law.",
            },
          ],
        },
      ],
    },
    {
      number: 8,
      title: "Data Storage, Retention, and Deletion",
      content: [
        {
          type: "paragraph",
          content:
            "We collect, store, and process your personal data, including images, as described in the Privacy Policy. We keep your data for as long as needed:",
        },
        {
          type: "list",
          items: [
            { text: "to provide the Service;" },
            {
              text: "for legitimate business purposes (for example, security and legal compliance); and",
            },
            { text: "as required by law." },
          ],
        },
        {
          type: "paragraph",
          content: "When you delete your account, we will:",
        },
        {
          type: "list",
          items: [
            {
              text: "delete or de-identify your personal data within reasonable timeframes; or",
            },
            {
              text: "retain it only as necessary for legal, regulatory, or legitimate business purposes.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "Deleting your account or content may not automatically delete copies already shared with your linked partner or others, or content retained in backup systems for limited periods.",
        },
      ],
    },
    {
      number: 9,
      title: "Acceptable Use and Prohibited Content",
      content: [
        {
          type: "paragraph",
          content: "You must not use the Service to:",
        },
        {
          type: "list",
          items: [
            { text: "break any law or the rights of others;" },
            {
              text: "upload or share unlawful, abusive, hateful, or sexually explicit content;",
            },
            { text: "harass, or abuse any person;" },
            { text: "upload images of minors;" },
            { text: "upload content without necessary consents; or" },
            {
              text: "interfere with the security or operation of the Service.",
            },
          ],
        },
      ],
      subsections: [
        {
          number: "9.1",
          title: "Prohibited Conduct",
          content: [
            {
              type: "paragraph",
              content: "You must not:",
            },
            {
              type: "list",
              items: [
                {
                  text: "attempt to gain unauthorised access to the Service or other users' accounts;",
                },
                {
                  text: "interfere with or disrupt the Service or our systems;",
                },
                {
                  text: "reverse engineer, decompile, or attempt to extract source code (except where permitted by law);",
                },
                {
                  text: "use automated tools (bots, scrapers) without our express permission; or",
                },
                {
                  text: "misuse reporting or takedown tools to harass others.",
                },
              ],
            },
            {
              type: "paragraph",
              content:
                "Breach of this clause may lead to content removal, account suspension or termination, reporting to authorities, and other steps we consider appropriate.",
            },
          ],
        },
      ],
    },
    {
      number: 10,
      title: "Reporting, Takedown, and Abuse",
      content: [
        {
          type: "paragraph",
          content:
            "You may report abusive, infringing, or otherwise problematic content or behaviour by:",
        },
        {
          type: "list",
          items: [
            { text: "using in-app reporting tools" },
            { text: "contacting us directly" },
          ],
        },
        {
          type: "paragraph",
          content: "We may remove or restrict access to User Content where:",
        },
        {
          type: "list",
          items: [
            {
              text: "we reasonably believe it breaches these Terms or any policy;",
            },
            { text: "we receive a complaint;" },
            {
              text: "we believe it is necessary to protect users or comply with law.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "We may, but are not obliged to, notify you of actions taken in response to reports. You may stop using the Service at any time and may request account deletion as described in the Privacy Policy.",
        },
      ],
    },
    {
      number: 11,
      title: "Changes to the Service and Terms",
      content: [
        {
          type: "paragraph",
          content:
            "We may update the Service and these Terms from time to time. If we make material changes, we will take reasonable steps to notify you, such as through the app or by email. Your continued use of the Service after changes take effect means you accept the updated Terms.",
        },
      ],
    },
    {
      number: 12,
      title: "Disclaimer",
      content: [
        {
          type: "paragraph",
          content:
            "The Service is provided for personal, non-commercial use and general relationship support only. It does not provide:",
        },
        {
          type: "list",
          items: [
            { text: "medical, psychological, or therapeutic advice;" },
            { text: "legal or financial advice;" },
            { text: "professional counselling services." },
          ],
        },
        {
          type: "paragraph",
          content:
            "You are responsible for your own decisions and actions. If you need professional support (for example, for relationship, mental health, or safety issues), you should seek it from qualified providers.",
        },
        {
          type: "paragraph",
          content: "We do not guarantee that:",
        },
        {
          type: "list",
          items: [
            {
              text: "the Service will be uninterrupted, error-free, or secure;",
            },
            { text: "all defects will be corrected; or" },
            {
              text: "content and AI Outputs will meet your expectations.",
            },
          ],
        },
      ],
    },
    {
      number: 13,
      title: "Contact",
      content: [
        {
          type: "paragraph",
          content:
            "If you have any questions about these Terms of Service, please contact us.",
        },
      ],
    },
  ],
};
