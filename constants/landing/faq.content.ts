import type { FaqItem } from "./types";

/**
 * FAQ items displayed on the landing page.
 * Addresses common questions and concerns from potential users.
 */
export const faqItems: FaqItem[] = [
  {
    id: "faq-both-need-app",
    question: "Do we both need the app?",
    answer:
      "Yes! Both partners need to download Lovla to share and color together.",
  },
  {
    id: "faq-photo-types",
    question: "What kinds of photos work best?",
    answer:
      "Photos with clear subjects and good contrast work great — couple selfies, travel photos, or memorable moments. The app handles the rest!",
  },
  {
    id: "faq-pricing",
    question: "How much does Lovla cost?",
    answer:
      "Lovla offers a subscription that gives you unlimited access to all features. Check the App Store for current pricing.",
  },
  {
    id: "faq-long-distance",
    question: "Does it work for long-distance couples?",
    answer:
      "Absolutely! Lovla was designed with long-distance couples in mind. Color together in real-time, no matter where you are.",
  },
  {
    id: "faq-privacy",
    question: "Are my photos private?",
    answer:
      "Your privacy is our priority. Photos are only shared between you and your partner — we never access or share your personal images.",
  },
];
