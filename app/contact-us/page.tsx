import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/common/footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Lovla team. Whether you have a question, partnership idea, or press inquiry, we're here to help.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen w-full bg-accent">
      <div className="mx-auto h-full max-w-6xl px-4 pt-8 md:px-6 md:pt-[50px]">
        {/* Header */}
        <header className="flex items-start justify-between">
          <div className="flex-1" />
          <Link href="/">
            <h1 className="text-5xl font-helix text-primary sm:text-6xl md:text-8xl lg:text-[110px]">
              Lovla.
            </h1>
          </Link>
          <div className="flex flex-1 justify-end">
            <Link
              href="/"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary transition-colors hover:bg-primary/10"
              aria-label="Back to home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 14 4 9l5-5" />
                <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
              </svg>
            </Link>
          </div>
        </header>

        {/* Content Container - 690px centered */}
        <div className="mx-auto mt-12 w-full max-w-[690px] md:mt-20">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            We&apos;d love to hear from you! Whether you have a question,
            partnership idea, or press inquiry the Lovla team is here to help.
          </p>

          {/* Get in Touch + Form */}
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {/* Left: Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-foreground md:text-2xl">
                Get in Touch
              </h3>
              <div className="mt-6 flex flex-col gap-3">
                <p className="flex items-center gap-2 text-sm text-foreground sm:text-base">
                  <span aria-hidden="true">💌</span>
                  <span>
                    <span className="font-medium">Email: </span>
                    <a
                      href="mailto:info@benekan.com"
                      className="text-primary hover:underline"
                    >
                      info@benekan.com
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2 text-sm text-foreground sm:text-base">
                  <span aria-hidden="true">📞</span>
                  <span>
                    <span className="font-medium">Phone number: </span>
                    <a
                      href="tel:+18477735552"
                      className="text-primary hover:underline"
                    >
                      +18477735552
                    </a>
                  </span>
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <ContactForm />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
