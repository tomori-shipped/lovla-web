import type { Metadata } from "next";
import Link from "next/link";
import { memo } from "react";
import { Mail } from "lucide-react";
import { PRESS_CONTENT } from "@/constants/press/press.content";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press resources and media kit for Lovla - the relationship app for couples.",
};

/**
 * A card component for displaying company facts.
 */
const FactCard = memo<{ label: string; value: string }>(({ label, value }) => (
  <div className="rounded-xl bg-white p-6 shadow-sm">
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="mt-1 text-xl font-semibold text-primary">{value}</p>
  </div>
));

FactCard.displayName = "FactCard";

/**
 * A card component for displaying media assets.
 */
const AssetCard = memo<{ name: string; description: string; type: string }>(
  ({ name, description, type }) => (
    <div className="rounded-xl border border-primary/10 bg-white p-6">
      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {type}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-primary">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
);

AssetCard.displayName = "AssetCard";

export default function PressPage() {
  const { title, tagline, about, facts, contact, mediaAssets, brandGuidelines } =
    PRESS_CONTENT;

  return (
    <main className="min-h-screen bg-accent">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-block text-primary hover:underline"
          >
            &larr; Back to Home
          </Link>

          {/* Header */}
          <h1 className="mb-4 text-center font-helix text-4xl text-primary">
            {title}
          </h1>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            {tagline}
          </p>

          {/* About Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-primary">
              About Lovla
            </h2>
            <p className="text-foreground leading-relaxed">{about}</p>
          </section>

          {/* Facts Grid */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-primary">
              Quick Facts
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {facts.map((fact) => (
                <FactCard key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </div>
          </section>

          {/* Media Assets */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-primary">
              Media Kit
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mediaAssets.map((asset) => (
                <AssetCard
                  key={asset.name}
                  name={asset.name}
                  description={asset.description}
                  type={asset.type}
                />
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {brandGuidelines}
            </p>
          </section>

          {/* Press Contact */}
          <section className="rounded-xl bg-primary p-8 text-center text-white">
            <h2 className="mb-2 text-2xl font-semibold">Press Contact</h2>
            <p className="mb-4 text-white/80">{contact.role}</p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-white/90"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
