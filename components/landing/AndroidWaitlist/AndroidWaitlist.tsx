"use client";

import { memo, useState, useCallback, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { WaitlistConfig } from "@/constants/landing/types";

/**
 * Possible states for the waitlist form.
 */
type WaitlistStatus = "idle" | "submitting" | "success" | "error";

/**
 * Props for the AndroidWaitlist component.
 */
export interface AndroidWaitlistProps {
  /** Configuration for the waitlist section */
  config: WaitlistConfig;
  /** Additional CSS classes to apply. Defaults to no additional classes. */
  className?: string;
}

/**
 * Email capture section for Android waitlist.
 * Allows collecting emails from potential Android users.
 */
export const AndroidWaitlist = memo<AndroidWaitlistProps>(
  ({ config, className }) => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<WaitlistStatus>("idle");

    const handleSubmit = useCallback(
      async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const emailValue = formData.get("email") as string;

        if (!emailValue?.trim()) return;

        setStatus("submitting");

        // TODO: Replace with actual API call
        // For now, simulate a successful submission
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setStatus("success");
          setEmail("");
        } catch {
          setStatus("error");
        }
      },
      []
    );

    const isDisabled = status === "submitting" || status === "success";

    return (
      <section
        className={cn(
          "rounded-2xl bg-primary/5 px-4 py-8 text-center sm:rounded-3xl sm:px-6 sm:py-10 md:px-12 md:py-12",
          className
        )}
      >
        <h2 className="mb-2 text-xl font-bold text-primary sm:text-2xl md:text-3xl">
          {config.headline}
        </h2>
        <p className="mb-6 text-sm text-gray-600 sm:mb-8 sm:text-base">
          {config.subheadline}
        </p>

        {status === "success" ? (
          <div className="mx-auto max-w-md rounded-lg bg-green-50 p-3 text-sm text-green-700 sm:rounded-xl sm:p-4 sm:text-base">
            {config.successMessage}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md items-stretch overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={config.inputPlaceholder}
              required
              disabled={isDisabled}
              className="h-12 flex-1 bg-transparent px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:h-14 sm:px-5 sm:text-base"
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={isDisabled}
              className="h-12 rounded-none bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-14 sm:px-6 sm:text-base"
            >
              {status === "submitting" ? "Submitting..." : config.buttonText}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-xs text-red-600 sm:mt-4 sm:text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </section>
    );
  }
);

AndroidWaitlist.displayName = "AndroidWaitlist";
