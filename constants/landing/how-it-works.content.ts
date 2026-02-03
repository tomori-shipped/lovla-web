import type { HowItWorksStep } from "./types";

/**
 * Steps displayed in the "How It Works" section.
 * Provides a clear 3-step journey for potential users to understand the app flow.
 */
export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "step-upload",
    stepNumber: 1,
    title: "Upload",
    description:
      "Add your favorite photos together; date nights, vacations, everyday moments.",
  },
  {
    id: "step-color",
    stepNumber: 2,
    title: "Color",
    description:
      "Watch them transform into coloring pages and color them together, at your own pace.",
  },
  {
    id: "step-connect",
    stepNumber: 3,
    title: "Connect",
    description:
      "Discover each other's love language and strengthen your bond through shared creativity.",
  },
];
