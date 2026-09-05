import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Heart } from "lucide-react";
import AppStoreButton from "@/components/ui/app-store-button";
import Footer from "@/components/common/footer";
import { AndroidWaitlist } from "@/components/landing/AndroidWaitlist";
import { waitlistConfig } from "@/constants/landing/waitlist.content";
import styles from "./home.module.css";

const description =
  "Turn your favorite photos into coloring pages and color together in Lovla. A shared coloring journal for couples, near or far. Available on iOS.";

export const metadata: Metadata = {
  title: { absolute: "Lovla — Color Your Memories, Together" },
  description,
  alternates: { canonical: "https://www.lovla.app" },
  openGraph: {
    title: "Lovla — Color Your Memories, Together",
    description,
    url: "https://www.lovla.app",
    type: "website",
    siteName: "Lovla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovla — Color Your Memories, Together",
    description,
  },
};

const steps = [
  { number: "01", title: "Pick a memory.", text: "The first date. That blurry holiday selfie. A little moment you both love." },
  { number: "02", title: "Make it colorful.", text: "Turn your photo into a coloring page. Pick your colors and fill it in together, in real time." },
  { number: "03", title: "Keep it yours.", text: "Save your finished page in your shared journal. One more memory, made by the two of you." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBFD] text-[#171217]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-white">Skip to content</a>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8 md:py-8">
        <Link href="/" aria-label="Lovla home" className="font-helix text-[38px] leading-none tracking-[-1.5px] text-primary">Lovla.</Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm font-medium text-primary sm:gap-9">
          <a href="#how-it-works" className="hidden py-2 transition-opacity hover:opacity-60 sm:block">How it works</a>
          <Link href="/blog" className="py-2 transition-opacity hover:opacity-60">The blog</Link>
          <a href="#download" className="rounded-full border border-primary/20 px-4 py-2.5 transition-colors hover:bg-primary hover:text-white sm:px-5">Get Lovla <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main-content">
        <section aria-labelledby="hero-title" className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-12 pt-9 sm:px-8 sm:pt-14 md:grid-cols-[1fr_1fr] md:gap-5 md:pb-20 md:pt-16 lg:pb-24">
          <div className="relative z-10 max-w-xl">
            <p className="mb-6 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C4677] sm:text-xs"><span className="size-1.5 rounded-full bg-[#A93F7B]" aria-hidden="true" />A little more us time</p>
            <h1 id="hero-title" className="font-helix text-[clamp(3.25rem,6.3vw,5rem)] leading-[1.02] tracking-[-0.045em] text-primary">Your memories.<br />A little more<br /><span className="text-[#A93F7B]">colorful.</span></h1>
            <p className="mt-6 max-w-[370px] text-base leading-[1.8] text-[#6F5B6D] sm:text-lg">Turn your favorite photos into coloring pages. Make something together, even when you&apos;re apart.</p>
            <div id="download" className="mt-8 scroll-mt-8">
              <AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" />
              <p className="mt-3 text-xs text-[#786577]">Made for two. Available on iOS.</p>
            </div>
            <a href="#how-it-works" className="mt-9 inline-flex items-center gap-2 py-2 text-sm font-medium text-primary transition-opacity hover:opacity-60 md:mt-12">A memory becomes a moment <ArrowDown size={15} aria-hidden="true" /></a>
          </div>
          <figure className={styles.memories} aria-label="A couple’s photo becomes a coloring page in Lovla">
            <div className={styles.backdrop} aria-hidden="true" />
            <div className={`${styles.memoryCard} ${styles.photoCard}`}>
              <div className={styles.photoWindow}>
                <Image src="/screenshots/lovla-photo-to-art.webp" alt="A couple sharing a kiss in their original photo in Lovla" width={600} height={1299} preload sizes="(max-width: 767px) 460px, 560px" className={styles.photoImage} />
              </div>
              <p className={styles.cardCaption}>A favorite memory.</p>
            </div>
            <div className={`${styles.memoryCard} ${styles.artCard}`}>
              <div className={styles.artWindow}>
                <Image src="/screenshots/lovla-shared-coloring.webp" alt="The same couple’s photo transformed into a line-art coloring page in Lovla" width={600} height={1299} preload sizes="(max-width: 767px) 330px, 410px" className={styles.artImage} />
              </div>
              <p className={styles.cardCaption}>A new way to share it.</p>
            </div>
            <span className={styles.heart} aria-hidden="true"><Heart size={26} strokeWidth={1.5} /></span>
            <figcaption className={styles.figureCaption}>Yours to color. Together.</figcaption>
          </figure>
        </section>
        <section id="how-it-works" aria-labelledby="how-title" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-12 sm:px-8 md:py-16">
          <div className="border-t border-primary/12 pt-12 md:pt-16">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 id="how-title" className="font-helix text-3xl leading-tight tracking-[-0.025em] text-primary sm:text-[40px]">Less scrolling. More creating.</h2>
              <p className="max-w-xs text-sm leading-6 text-[#6F5B6D]">From your camera roll to a little quality time.</p>
            </div>
            <ol className="mt-10 grid gap-9 md:mt-12 md:grid-cols-3 md:gap-12">
              {steps.map((step) => (
                <li key={step.number}>
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#A93F7B]">{step.number}</span>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-primary">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#6F5B6D]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <Link href="/blog/long-distance-relationship-activities" className="mt-12 flex items-center justify-between gap-5 border-y border-primary/12 py-5 text-sm text-primary transition-colors hover:text-[#A93F7B] md:mt-16">
            <span><span className="mr-3 hidden text-[#786577] sm:inline">A little inspiration</span>45 long-distance date ideas for your next night in</span><ArrowRight size={18} className="shrink-0" aria-hidden="true" />
          </Link>
        </section>
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-2 sm:px-8 md:pb-20"><AndroidWaitlist config={waitlistConfig} /></div>
      </main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
    </div>
  );
}
