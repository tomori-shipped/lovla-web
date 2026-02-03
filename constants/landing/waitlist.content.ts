import type { WaitlistConfig, TrustBadge } from "./types";

/**
 * Configuration for the Android & Web waitlist section.
 */
export const waitlistConfig: WaitlistConfig = {
  headline: "Android & Web Coming Soon",
  subheadline:
    "Be the first to know when Lovla launches on Android and Web. Join the waitlist!",
  inputPlaceholder: "Enter your email",
  buttonText: "Notify Me",
  successMessage: "You're on the list! We'll notify you when we launch.",
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
