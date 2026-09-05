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

        try {
          const res = await fetch("/api/waitlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailValue }),
          });

          if (!res.ok) throw new Error();

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
        id="android-waitlist"
        className={cn(
          "rounded-2xl bg-[#F3EBF4] px-5 py-10 text-center sm:px-8 md:px-12 md:py-14",
          className
        )}
      >
        <h2 className="mb-3 font-helix text-2xl tracking-[-0.02em] text-primary sm:text-3xl">
          {config.headline}
        </h2>
        <p className="mb-6 text-sm text-gray-600 sm:mb-8 sm:text-base">
          {config.subheadline}
        </p>

        {status === "success" ? (
          <div role="status" className="mx-auto max-w-md rounded-lg bg-primary/10 p-3 text-sm text-primary sm:rounded-xl sm:p-4 sm:text-base">
            {config.successMessage}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row sm:gap-0"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={config.inputPlaceholder}
              required
              disabled={isDisabled}
              autoComplete="email"
              aria-describedby={status === "error" ? "waitlist-error" : undefined}
              className="h-12 min-w-0 flex-1 rounded-lg border border-primary/15 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-r-none sm:border-r-0"
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={isDisabled}
              className="h-12 shrink-0 rounded-lg bg-primary px-5 text-sm font-medium text-white hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-l-none"
            >
              {status === "submitting" ? "Submitting..." : config.buttonText}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p id="waitlist-error" role="alert" className="mt-3 text-xs text-red-600 sm:mt-4 sm:text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </section>
    );
  }
);

AndroidWaitlist.displayName = "AndroidWaitlist";
