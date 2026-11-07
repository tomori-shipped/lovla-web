import type { LegalContentBlock, LegalPageContent } from "./types";

/** Paragraph block helper. */
const p = (content: string): LegalContentBlock => ({ type: "paragraph", content });

/** List block helper. */
const l = (...items: string[]): LegalContentBlock => ({
  type: "list",
  items: items.map((text) => ({ text })),
});

/**
 * Privacy Policy content for the Lovla app and website.
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
        p('This Privacy Policy explains how Lovla ("we," "us," or "our") collects, uses, stores, shares, and protects personal data when you use the Lovla mobile application, the lovla.app website, our emails, and related services (together, the "Service").'),
        p("This Policy applies to:"),
        l(
          "People who create a Lovla account or use the app;",
          "People whose images or information appear in content uploaded by a Lovla user;",
          "People who visit our website, join a waitlist, or contact us.",
        ),
        p("Lovla is available worldwide. We handle personal data in line with the data protection and privacy laws that apply where our users live. Where the law of your country or state gives you additional rights or protections, you have those rights too, and nothing in this Policy limits them. Section 14 explains additional rights that apply in certain regions."),
        p("By using Lovla, you acknowledge that you have read this Privacy Policy. Where the law requires your consent for a specific activity (for example, tracking, location sharing, or certain marketing), we ask for it separately, and you can withdraw it at any time."),
      ],
    },
    {
      number: 2,
      title: "Information We Collect",
      content: [p("We collect the following categories of information:")],
      subsections: [
        {
          number: "2.1",
          title: "Information You Provide Directly",
          content: [
            l(
              "Account Information: name, username, email address, password (stored in encrypted, hashed form), and profile image. If you sign in with Apple or Google, we receive your name and email address (or Apple's private relay email) from that provider.",
              "Relationship Information: your linked partner's account details and pairing status.",
              "User Content: photographs, text prompts, drawings, coloring pages, notes, journal entries, and other content you upload or create.",
              "Survey Answers: optional answers you give during onboarding.",
              "Communications: messages you send us for support, feedback, or inquiries, including through our website contact form or waitlist.",
            ),
            p("Most information we collect is associated with your Lovla account and user ID in order to provide the Service."),
          ],
        },
        {
          number: "2.2",
          title: "Information Collected Automatically",
          content: [
            l(
              "Device and Technical Data: IP address, device identifiers, operating system, app version, language, time zone, push notification token, and crash logs.",
              "Usage Data: screens viewed, features used, interactions, and time spent in the app.",
              "Purchase Data: subscription status, product, and transaction details received from Apple.",
              "Email Engagement Data: whether our emails were delivered, and, where supported, whether they were opened or links were clicked.",
            ),
          ],
        },
        {
          number: "2.3",
          title: "Information From Others",
          content: [
            l(
              "Your linked partner may upload or create content that includes you.",
              "Sign-in providers (Apple, Google) and Apple's App Store provide the account and purchase information described above.",
            ),
            p("If someone uploads a photo of you and you do not use Lovla, you can contact us to ask what we hold and to request removal (see Sections 13 and 18)."),
          ],
        },
        {
          number: "2.4",
          title: "Analytics and Diagnostics",
          content: [
            p("We use PostHog for product analytics and session recordings (photos are hidden in recordings), linked to your account and email address so we can understand how the app is used, and Sentry for crash reports. If you allow tracking, Meta receives app events to measure our ads (see Section 10)."),
            p("Text you type is masked in session recordings. Crash reports include device and app information and details of the error."),
          ],
        },
        {
          number: "2.5",
          title: "Location",
          content: [
            p("If you turn on distance sharing, we store your most recent location to calculate the distance to your partner. Your partner sees only the distance, never your location. Turning sharing off deletes it."),
            p('Distance sharing is optional and off by default. If you also allow location access "Always," Lovla updates your location in the background, including when the app is closed, so the distance stays current. We keep only your latest location, not a history. You can stop sharing at any time in the app or by turning off location access in your device settings.'),
          ],
        },
        {
          number: "2.6",
          title: "Sensitive Information",
          content: [
            p("We do not ask for sensitive information such as health, religion, political views, or sexual orientation. However, photos, notes, and relationship details can sometimes reveal this kind of information (for example, who your partner is). We process this content only to provide the features you choose to use, never to profile you, and never for advertising. Where the law treats this as sensitive data, we rely on your explicit consent, which you give by choosing to upload it, and you can withdraw it by deleting the content or your account."),
            p("We do not use facial recognition, and we do not create face templates, face geometry, or other biometric identifiers from your photos."),
          ],
        },
        {
          number: "2.7",
          title: "Our Website",
          content: [
            p("When you visit lovla.app, our hosting provider processes standard technical data (such as your IP address, browser type, and pages requested) to deliver and secure the website. If you join our Android waitlist or use our contact form, we collect the email address and message you submit. Our website does not currently use advertising cookies or third-party analytics."),
          ],
        },
      ],
    },
    {
      number: 3,
      title: "How We Use Your Data",
      content: [
        p("We use personal data to:"),
        l(
          "Create and manage user accounts and linked accounts",
          "Provide and personalize Lovla features",
          "Process photos and prompts to generate AI coloring pages",
          "Enable pairing between users and partner features such as distance sharing",
          "Process subscriptions and provide access to paid features",
          "Maintain security, detect fraud, and prevent abuse or violations of our Terms",
          "Respond to support requests",
          "Send service-related and reminder notifications",
          "Send marketing emails about Lovla, as described in Section 6",
          "Analyze usage and diagnose crashes to improve the Service",
          "Measure the performance of our advertising, only if you allow tracking (see Section 10)",
          "Comply with legal obligations, and establish, exercise, or defend legal claims",
        ),
        p("We do not sell personal data."),
        p("We do not show third-party ads in Lovla. Your photos, coloring pages, notes, messages, partner details, and location are never used for advertising."),
        p("We do not make decisions about you based solely on automated processing that produce legal or similarly significant effects."),
      ],
    },
    {
      number: 4,
      title: "Legal Bases for Processing",
      content: [
        p("Where the law requires a legal basis for processing personal data (for example, in the European Economic Area, the United Kingdom, and Brazil), we rely on:"),
        l(
          "Contract: to create your account and provide the features you request, including pairing, AI coloring pages, and subscriptions;",
          "Consent: for app tracking and ad measurement, location and distance sharing, push notifications, AI processing of your photos, sensitive information, and marketing emails where consent is required. You can withdraw consent at any time without affecting processing that happened before;",
          "Legitimate interests: to keep the Service secure, prevent abuse, understand and improve how the app is used, fix crashes, and send marketing emails where the law allows this without prior consent. We balance these interests against your rights, and you can object at any time;",
          "Legal obligation: to comply with tax, accounting, and other legal requirements and lawful requests from authorities.",
        ),
      ],
    },
    {
      number: 5,
      title: "AI Image Processing",
      content: [
        p("When you upload photos or enter prompts, we process them using AI systems to:"),
        l(
          "Remove or detect backgrounds",
          "Simplify colors",
          "Generate digital coloring-style images and similar outputs",
        ),
        p("To create coloring pages, the photos and prompts you submit are sent to Replicate, Inc., which runs AI models, including models from OpenAI and ByteDance. They are used only to generate your page. We ask your permission before the first one is sent."),
        p("Replicate states that, for predictions created through its API, inputs, outputs, and logs are automatically deleted after about one hour by default. OpenAI states that data sent through its API is not used to train or improve its models unless the customer opts in, and that it may keep API data for up to 30 days to monitor for abuse, unless the law requires longer retention. We have not opted in to any such data sharing."),
        p("We do not use your photos or prompts to train AI models, and we do not provide them to anyone for that purpose."),
        p("AI outputs are generated automatically and may contain errors. We do not guarantee the accuracy, quality, or suitability of AI-generated content."),
      ],
    },
    {
      number: 6,
      title: "Emails, Marketing, and Notifications",
      content: [
        p("We use the email address on your account (for example, a Gmail, Yahoo, Outlook, iCloud, or other address) to send you:"),
        l(
          "Service emails, such as account, security, purchase, and support messages. These are part of providing the Service and are sent even if you unsubscribe from marketing.",
          "Marketing emails about Lovla, such as new features, product updates, tips, discounts, special offers, and seasonal promotions.",
        ),
        p("When you create an account, you agree that we may send you Lovla marketing emails, where the law of your country allows this. Where your local law requires your prior opt-in consent before we send marketing emails, we will only send them once you have given that consent."),
        p('You can opt out of marketing emails at any time by clicking the "unsubscribe" link in any marketing email or by contacting us. We will process your request promptly and within the time required by law. Opting out does not affect service emails. We do not send marketing emails to Apple private relay addresses, and we do not sell or rent our email lists.'),
        p("We send emails using Resend, our email service provider. Push notifications are sent only if you allow them, and you can turn them off at any time in your device settings."),
      ],
    },
    {
      number: 7,
      title: "Payment & Subscription Information",
      content: [
        p("Lovla does not collect or store payment card information."),
        p("All payments are processed by Apple through the App Store's In-App Purchase system. We receive limited transaction information from Apple, such as subscription status, product type, and expiration date, to provide access to paid features. Subscriptions, cancellations, and refunds are managed through your Apple account."),
        p("We do not have access to your full payment details."),
      ],
    },
    {
      number: 8,
      title: "User Content Ownership and Licensing",
      content: [
        p("You retain ownership of your User Content."),
        p("You grant Lovla a limited license to store, process, and display your content solely to operate the Service."),
        p("You are responsible for ensuring you have the right to upload any images, including images of other people, and that you have their permission where required."),
      ],
    },
    {
      number: 9,
      title: "Sharing Your Data",
      content: [
        p("We share personal data only with:"),
        l(
          "Your linked partner (shared content, and the distance between you if you turn on distance sharing)",
          "Supabase (database, file storage, and sign-in hosting)",
          "Replicate, Inc. and the AI model providers it runs, such as OpenAI and ByteDance (AI coloring page generation)",
          "PostHog (product analytics and session recordings) and Sentry (crash reports)",
          "Resend (sending service and marketing emails)",
          "Vercel (hosting our website)",
          "Expo and Apple (delivering push notifications)",
          "Apple and Google (sign-in) and Apple (in-app purchases)",
          "Meta Platforms (advertising measurement, only if you allow tracking; see Section 10)",
          "Professional advisers, such as lawyers and accountants, under confidentiality obligations",
          "Authorities, courts, or other parties when required by law, or when needed to protect the rights, safety, or property of our users, the public, or Lovla",
          "A buyer, investor, or successor if Lovla is involved in a merger, acquisition, financing, reorganization, or sale of assets, in which case your data remains subject to this Policy",
          "Anyone else, with your consent or at your direction",
        ),
        p("Our service providers process data on our behalf, under contracts or terms that require them to protect it and use it only to provide their services to us. We do not sell personal data."),
      ],
    },
    {
      number: 10,
      title: "Advertising Measurement and Tracking",
      content: [
        p("On iOS, Lovla asks for your permission through Apple's App Tracking Transparency prompt before any tracking happens. If you allow tracking, Lovla uses Meta's software development kit to understand whether our Facebook and Instagram ads lead to app installs and activity, measure advertising performance, and make our ads more relevant."),
        p("If you allow tracking, Meta may receive device identifiers (including your advertising identifier), IP address and device information, app activation and usage events, and information about App Store purchases, subscriptions, and trials. We do not send Meta your name, email address, partner details, photos, coloring pages, messages, notes, or location."),
        p("If you decline, none of this is sent to Meta and you can keep using every part of Lovla. You can change your choice at any time in your device's Settings. Withdrawing permission stops further sharing but does not delete information Meta has already received. Meta processes the information it receives under its own privacy policy: https://www.facebook.com/privacy/policy/."),
        p('Under some US state laws, such as California\'s, providing this information to Meta for ad measurement may be considered "sharing" for cross-context behavioral advertising, even though no money is exchanged. You can opt out at any time by declining or turning off tracking for Lovla in your device settings, or by contacting us.'),
      ],
    },
    {
      number: 11,
      title: "International Transfers",
      content: [
        p("Lovla and our service providers operate in several countries, including the United States, so your data may be transferred to and processed in countries other than your own, which may have different data protection laws. When we transfer personal data internationally, we rely on appropriate safeguards required by applicable law, such as the European Commission's Standard Contractual Clauses and their UK and other equivalents, or other lawful transfer mechanisms."),
      ],
    },
    {
      number: 12,
      title: "Data Storage, Retention, and Deletion",
      content: [
        p("We keep personal data only for as long as we need it for the purposes described in this Policy:"),
        l(
          "Account data and User Content: while your account is active, and for a limited period after you delete your account so we can complete deletion, resolve disputes, and meet legal obligations.",
          "Location: only your latest location, deleted when you turn off distance sharing.",
          "AI inputs at our providers: as described in Section 5.",
          "Analytics, session recordings, and crash reports: for the period set in our providers' settings, after which they are deleted or anonymized.",
          "Marketing preferences and unsubscribe records: for as long as needed to respect your choice.",
          "Purchase and transaction records: as long as required by tax and accounting laws.",
        ),
        p("You may delete specific content or your account within the app. Backup copies may persist for a limited time before they are overwritten. If you signed in with Apple, deleting your account also revokes Lovla's access to your Apple sign-in."),
        p("Deleting your account does not automatically delete content already saved or downloaded by your linked partner."),
      ],
    },
    {
      number: 13,
      title: "Your Rights and Choices",
      content: [
        p("Depending on where you live, you may have the right to:"),
        l(
          "Know what personal data we hold about you and access a copy",
          "Correct inaccurate or incomplete data",
          "Delete your data",
          "Receive your data in a portable format",
          "Object to or restrict certain processing, including processing based on legitimate interests and direct marketing",
          "Opt out of the sale or sharing of personal data and of targeted advertising",
          "Withdraw consent at any time, such as for tracking, AI processing, location, or marketing emails",
          "Appeal our decision if we decline your request",
          "Lodge a complaint with your local data protection authority",
        ),
        p("To exercise these rights, contact us at the address in Section 18 or use the controls in the app. We may need to verify your identity before acting on a request, and you may use an authorized agent where the law allows. We respond within the time required by applicable law. We will not discriminate against you for exercising your rights."),
      ],
    },
    {
      number: 14,
      title: "Additional Regional Rights",
      content: [
        p("Depending on where you live, the following may also apply to you:"),
        l(
          "European Economic Area, United Kingdom, and Switzerland: you have the rights in Section 13 under the GDPR, UK GDPR, or Swiss law, and our legal bases are described in Section 4. You may complain to your local supervisory authority.",
          "United States: residents of California and other states with comprehensive privacy laws have the right to know, access, correct, delete, and opt out of the sale or sharing of personal data and targeted advertising, and to appeal our decisions. In the past 12 months we have collected the categories of information described in Section 2, for the purposes in Section 3, and disclosed them to the recipients in Section 9. We have not sold personal data. We do not knowingly sell or share the personal data of consumers under 16.",
          "Brazil: under the LGPD, you may confirm whether we process your data, access, correct, anonymize, block, or delete it, request portability, obtain information about who we share it with, and withdraw consent. You may also complain to the ANPD.",
          "Mexico: you may exercise your rights to access, rectify, cancel, and oppose (ARCO rights) and to revoke consent by contacting us.",
          "Canada: you may access and correct your personal data and withdraw consent, subject to legal limits, and complain to the Office of the Privacy Commissioner of Canada.",
          "Other countries: if your local law gives you other privacy rights, contact us and we will honor them as required.",
        ),
      ],
    },
    {
      number: 15,
      title: "Children and Minors",
      content: [
        p("Lovla is intended for users aged 13 and older, or the minimum age required to consent to data processing in your country if that is higher. We do not knowingly collect personal data from children below that age. If we learn that we have, we will delete it. If you believe a child has provided us with personal data, please contact us."),
        p("You must not upload sexual or explicit images of minors. If we become aware that prohibited content has been uploaded, we will remove it, may suspend the account, and will report it to the appropriate authorities where required by law."),
      ],
    },
    {
      number: 16,
      title: "Security",
      content: [
        p("We use reasonable technical and organizational safeguards to protect personal data, including encryption in transit, access controls, and limiting access to personnel and providers who need it. No system is completely secure. You are responsible for protecting your login credentials."),
        p("If a data breach affects your personal data, we will notify you and the relevant authorities where required by law."),
      ],
    },
    {
      number: 17,
      title: "Reporting, Takedown, and Changes",
      content: [
        p("If you believe your privacy rights have been violated or your image was uploaded without consent, contact us or use in-app reporting tools. We will investigate and take appropriate action."),
        p("Our Service may link to third-party websites or services, such as the App Store or social media. Their privacy practices are governed by their own policies."),
        p('We may update this Privacy Policy from time to time. We will change the "Last updated" date, and if we make material changes, we will notify you in the app or by email before they take effect. Where the law requires, we will ask for your consent again. Continued use of Lovla after an update means the updated Policy applies.'),
      ],
    },
    {
      number: 18,
      title: "Contact",
      content: [
        p("If you have questions about this Privacy Policy or want to exercise your rights, contact us at: info@benekan.com"),
      ],
    },
  ],
};
