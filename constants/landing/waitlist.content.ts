import type { WaitlistConfig, TrustBadge } from "./types";

/**
 * Configuration for the Android & Web waitlist section.
 */
export const waitlistConfig: WaitlistConfig = {
  headline: "Waiting for Android or web?",
  subheadline:
    "Leave your email. We’ll let you know when it’s your turn to color.",
  inputPlaceholder: "Enter your email",
  buttonText: "Keep me posted",
  successMessage: "You're in! We'll notify you when we launch.",
};

/**
 * Trust badges displayed near CTAs to build confidence.
 * These are trust signals that don't require existing user data.
 */
export const trustBadges: TrustBadge[] = [
  {
    id: "badge-privacy",
    text: "Your photos stay private",
  },
  {
    id: "badge-couples",
    text: "Made for couples",
  },
];
