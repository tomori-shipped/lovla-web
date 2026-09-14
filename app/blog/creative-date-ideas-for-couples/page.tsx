import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";
import { creativeDateGroups as questionGroups, creativeDatesPost as post } from "@/constants/blog/creative-date-ideas";

const canonical = `https://www.lovla.app/blog/${post.slug}`;

export const metadata: Metadata = {
  title: post.seoTitle,
  description: post.description,
  authors: [{ name: post.author, url: "https://www.lovla.app" }],
  alternates: { canonical },
  openGraph: {
    type: "article", title: post.title, description: post.description, url: canonical,
    siteName: "Lovla", publishedTime: post.date, modifiedTime: post.updatedDate,
    authors: [post.author], images: [{ url: `https://www.lovla.app${post.image}`, width: 1672, height: 941, alt: post.imageAlt }],
  },
  twitter: { card: "summary_large_image", title: post.seoTitle, description: post.description, images: [{ url: `https://www.lovla.app${post.image}`, alt: post.imageAlt }] },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting", "@id": `${canonical}#article`, headline: post.title,
      description: post.description, image: `https://www.lovla.app${post.image}`,
      datePublished: post.date, dateModified: post.updatedDate, inLanguage: "en-US",
      author: { "@type": "Organization", name: post.author, url: "https://www.lovla.app" },
      publisher: { "@type": "Organization", name: "Lovla", url: "https://www.lovla.app" },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Lovla", item: "https://www.lovla.app" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.lovla.app/blog" },
        { "@type": "ListItem", position: 3, name: "Creative date ideas for couples", item: canonical },
      ],
    },
  ],
};

export default function CreativeDatesPage() {
  return (
    <div className="min-h-screen bg-[#FDFBFD] text-[#171217]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="border-b border-primary/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
          <Link href="/" aria-label="Lovla home" className="font-helix text-3xl tracking-[-1px] text-primary">Lovla.</Link>
          <Link href="/blog" className="flex items-center gap-2 py-2 text-sm font-medium text-primary hover:underline underline-offset-4"><ArrowLeft size={15} aria-hidden="true" />All stories</Link>
        </div>
      </header>
      <main>
        <article>
          <header className="mx-auto max-w-4xl px-6 pb-10 pt-12 text-center sm:px-8 md:pb-12 md:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">A date worth making time for</p>
            <h1 className="mt-5 font-helix text-[38px] leading-[1.1] tracking-[-0.03em] text-primary sm:text-5xl md:text-[60px]">{post.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F5B6D] sm:text-lg">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-[#786577] sm:text-sm">
              <span>By {post.author}</span><span aria-hidden="true">·</span><time dateTime={post.date}>{post.displayDate}</time><span aria-hidden="true">·</span><span>{post.readingMinutes} min read</span>
            </div>
          </header>
          <div className="mx-auto max-w-5xl px-4 sm:px-8">
            <Image src={post.image} alt={post.imageAlt} width={1672} height={941} preload sizes="(max-width: 1024px) 100vw, 960px" className="h-auto w-full rounded-2xl border border-primary/10" />
          </div>
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-8 md:py-16 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14">
            <aside>
              <nav aria-label="Question categories" className="rounded-xl border border-primary/10 p-5 lg:sticky lg:top-8 lg:rounded-none lg:border-0 lg:p-0">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">Pick your kind of date</p>
                <ul className="mt-4 space-y-3">
                  {questionGroups.map((group) => <li key={group.id}><a href={`#${group.id}`} className="block py-1 text-sm leading-6 text-primary underline-offset-4 hover:underline">{group.title}</a></li>)}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]">
              <div className="space-y-5">
                <p>Dinner and a movie can be lovely. But when every date starts with the same restaurant search and ends with scrolling through things neither of you wants to watch, it helps to change the plan.</p>
                <p>A creative date gives you a small shared mission. You might make a terrible portrait, find a strange secondhand treasure, or build something that collapses immediately. The result is part of the fun, but so is having something to react to together.</p>
                <p>These 25 creative date ideas for couples include projects at home, playful challenges, inexpensive outings, and quieter options for low-energy evenings. The time estimates are flexible. Pick one that fits the evening you actually have.</p>
              </div>
              <section className="my-10 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <h2 className="font-helix text-3xl leading-tight text-primary">Choose by energy, supplies, and budget</h2>
                <p className="mt-4">For twenty spare minutes, try a story swap or future postcards. For a whole evening, choose a craft or an outing. Check what you already own before buying supplies, agree on a spending limit, and make the first attempt small enough to finish.</p>
                <p className="mt-4">You do not need a surprise itinerary unless your partner enjoys surprises. “Want to draw ridiculous portraits after dinner?” is a complete invitation.</p>
              </section>
              {questionGroups.map(group => <section key={group.id} id={group.id} className="mt-12 scroll-mt-8 border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary sm:text-4xl">{group.title}</h2>
                <ol start={group.start} className="mt-8 ml-7 list-decimal space-y-9 marker:font-semibold marker:text-primary">
                  {group.ideas.map(idea => <li key={idea.title} data-creative-date="true" className="pl-2">
                    <h3 className="text-xl font-semibold text-primary">{idea.title}</h3>
                    <p className="mt-2 text-sm font-medium text-[#786577]">{idea.setup}</p>
                    <p className="mt-3">{idea.body}</p>
                  </li>)}
                </ol>
              </section>)}
              <section className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">Start with a memory you already love</p>
                <h2 className="mt-3 font-helix text-3xl leading-tight text-primary">Your camera roll has a date idea in it.</h2>
                <p className="mt-4">Lovla turns your photos into coloring pages you can color together in real time. Choose a favorite memory, bring it to life with your own colors, and keep the page in your shared journal. It works for an evening together or time spent connecting from different places.</p>
                <div className="mt-6"><AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" /></div>
                <Link href="/blog/turn-photo-into-coloring-page" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Plan a photo-to-coloring date <ArrowRight size={15} aria-hidden="true" /></Link>
              </section>
              <section className="border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">Make the next date easy to start</h2>
                <p className="mt-5">Before you pack up, choose one thing you would repeat and one you would change. Keep useful supplies together or save the idea somewhere you both can find it. A date you enjoyed does not need a bigger budget or a more elaborate version next time.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">What if neither of us is artistic?</h3>
                <p className="mt-3">Choose an activity where making choices is the fun: a photo challenge, a collage, or a tiny museum visit. For painting or drawing, agree that a recognizable result is optional. You can enjoy trying without turning it into a lesson.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">Which ideas work with almost no budget?</h3>
                <p className="mt-3">A one-color walk, library book picks, a shared story, and mini playlists can use things you already have. For other ideas, check the supplies first so an inexpensive project does not quietly become a shopping trip.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">Can we adapt these for long distance?</h3>
                <p className="mt-3">Yes. Portraits, collages, playlists, and shared writing can happen during a call. Agree on supplies beforehand and leave time to show each other what you made. Our <Link href="/blog/things-to-do-on-facetime-with-your-partner" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">FaceTime date ideas</Link> focus on activities designed for that setting.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">What should we talk about while we make something?</h3>
                <p className="mt-3">Start with the activity or the memory it brings up. If you want a prompt, choose one from our <Link href="/blog/questions-to-ask-your-partner" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">questions to ask your partner</Link>. Quiet moments are allowed too.</p>
              </section>
              <p className="mt-12 border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">Written by <span className="font-semibold text-primary">The Lovla Team</span>. Time estimates are suggestions; adapt each idea to your energy, budget, and surroundings.</p>
            </div></div></article></main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
    </div>
  );
}
