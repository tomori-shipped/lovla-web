import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";
import {
  activitiesPost as post,
  activityGroups,
} from "@/constants/blog/long-distance-activities";

const canonical = `https://www.lovla.app/blog/${post.slug}`;

export const metadata: Metadata = {
  title: post.seoTitle,
  description: post.description,
  authors: [{ name: post.author, url: "https://www.lovla.app" }],
  alternates: { canonical },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    url: canonical,
    siteName: "Lovla",
    publishedTime: post.date,
    modifiedTime: post.updatedDate,
    authors: [post.author],
    images: [{ url: post.image, width: 1672, height: 941, alt: post.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.seoTitle,
    description: post.description,
    images: [{ url: post.image, alt: post.imageAlt }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${canonical}#article`,
      headline: post.title,
      description: post.description,
      image: `https://www.lovla.app${post.image}`,
      datePublished: post.date,
      dateModified: post.updatedDate,
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: post.author,
        url: "https://www.lovla.app",
      },
      publisher: {
        "@type": "Organization",
        name: "Lovla",
        url: "https://www.lovla.app",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Lovla",
          item: "https://www.lovla.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.lovla.app/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Long distance relationship activities",
          item: canonical,
        },
      ],
    },
  ],
};

export default function LongDistanceActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#FDFBFD] text-[#171217]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <header className="border-b border-primary/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
          <Link
            href="/"
            aria-label="Lovla home"
            className="font-helix text-3xl tracking-[-1px] text-primary"
          >
            Lovla.
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 py-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All stories
          </Link>
        </div>
      </header>
      <main>
        <article>
          <header className="mx-auto max-w-4xl px-6 pb-10 pt-12 text-center sm:px-8 md:pb-12 md:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">
              Long distance, a little closer
            </p>
            <h1 className="mt-5 font-helix text-[38px] leading-[1.1] tracking-[-0.03em] text-primary sm:text-5xl md:text-[60px]">
              {post.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F5B6D] sm:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-[#786577] sm:text-sm">
              <span>By {post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{post.displayDate}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </header>
          <div className="mx-auto max-w-5xl px-4 sm:px-8">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1672}
              height={941}
              preload
              sizes="(max-width: 1024px) 100vw, 960px"
              className="h-auto w-full rounded-2xl border border-primary/10"
            />
          </div>
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-8 md:py-16 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14">
            <aside>
              <nav
                aria-label="In this guide"
                className="rounded-xl border border-primary/10 p-5 lg:sticky lg:top-8 lg:rounded-none lg:border-0 lg:p-0"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">
                  Find your kind of date
                </p>
                <ul className="mt-4 space-y-3">
                  {activityGroups.map((group) => (
                    <li key={group.id}>
                      <a
                        href={`#${group.id}`}
                        className="block py-1 text-sm leading-6 text-primary underline-offset-4 hover:underline"
                      >
                        {group.shortTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]">
              <div className="space-y-5">
                <p>
                  “What else happened today?” You’ve asked it twice. Your
                  partner has told you about lunch in impressive detail. Neither
                  of you wants to hang up, but the conversation has officially
                  reached the weather. Sound familiar?
                </p>
                <p>
                  You don’t need a more interesting life to have a better call.
                  You might just need something to <em>do</em>. Draw a terrible
                  portrait. Put your snack opinions on trial. Cook the same meal
                  and discover that one of you interprets “a little garlic” very
                  differently.
                </p>
                <p>
                  Here are 45 ways to make the distance feel a little smaller,
                  sorted by the time and energy you have tonight. Most use
                  things already in your home; a few need an app, ingredients,
                  or postage. Pick the one that makes you want to send “want to
                  try this?” right now.
                </p>
              </div>
              <div className="my-9 border-l-2 border-[#D98AB8] py-1 pl-5">
                <p className="font-semibold text-primary">
                  Can’t decide? Try this tonight.
                </p>
                <p className="mt-2">
                  Each bring three photos from your day. Take turns explaining
                  them, then choose one longer idea for another evening. Ten
                  minutes is enough to start.
                </p>
              </div>
              {activityGroups.map((group) => (
                <section
                  key={group.id}
                  id={group.id}
                  aria-labelledby={`${group.id}-title`}
                  className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A93F7B]">
                    {group.timing}
                  </p>
                  <h2
                    id={`${group.id}-title`}
                    className="mt-3 font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl"
                  >
                    {group.title}
                  </h2>
                  <p className="mt-4">{group.intro}</p>
                  <ol
                    start={group.start}
                    className="mt-8 ml-7 list-decimal space-y-8 marker:font-semibold marker:text-primary"
                  >
                    {group.activities.map((activity) => (
                      <li key={activity.title} className="pl-1 sm:pl-2">
                        <h3 className="text-xl font-semibold leading-snug tracking-[-0.015em] text-primary">
                          {activity.title}
                        </h3>
                        <p className="mt-2">{activity.text}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
              <section
                aria-labelledby="make-it-work"
                className="mt-12 border-t border-primary/10 pt-10"
              >
                <h2
                  id="make-it-work"
                  className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl"
                >
                  A date shouldn’t become another task
                </h2>
                <p className="mt-5">
                  Before you pick an activity, ask three things: how much time
                  do we have, how tired are we, and do we want to talk or make
                  something? The answer might be different for each of you.
                  Choose the smaller plan if that makes it easier.
                </p>
                <p className="mt-5">
                  Agree on a rough finish time, especially across time zones.
                  Take turns suggesting ideas, and keep a backup for bad
                  internet or low energy. A short voice note can stand in for a
                  video date without anybody having to apologize for it.
                </p>
                <p className="mt-5">
                  If one idea becomes your regular Thursday thing, this list has
                  done its job. You don’t owe the other 44 a turn. Keep the
                  dates that make you laugh, retire the ones that feel awkward,
                  and let your favorite little rituals earn their place.
                </p>
              </section>
              <section
                aria-labelledby="lovla-date"
                className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">
                  One idea to make your own
                </p>
                <h2
                  id="lovla-date"
                  className="mt-3 font-helix text-3xl leading-tight text-primary"
                >
                  Your favorite photo. Your next date.
                </h2>
                <p className="mt-4">
                  Lovla turns your photos into coloring pages you can work on
                  together in real time, then save in a shared journal. Choose a
                  memory and give yourselves a little time to revisit it.
                </p>
                <div className="mt-6">
                  <AppStoreButton
                    showChevron={false}
                    className="gap-3 px-5! w-fit!"
                  />
                </div>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
                >
                  See how Lovla works{" "}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </section>
              <p className="mb-12">
                Want to make activity 10 tonight? Follow our practical guide to{" "}
                <Link
                  href="/blog/turn-photo-into-coloring-page"
                  className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4"
                >
                  turning a photo into a coloring page
                </Link>
                , including which pictures work best and how to fix messy line
                art.
              </p>
              <p className="mb-12">
                For activity 43, use our{" "}
                <Link
                  href="/blog/who-knows-me-better-questions-for-couples"
                  className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4"
                >
                  101 Who Knows Me Better questions for couples
                </Link>{" "}
                to build a round without writing every prompt yourself.
              </p>
              <p className="border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">
                Written by{" "}
                <span className="font-semibold text-primary">
                  The Lovla Team
                </span>
                . Ideas for making ordinary evenings feel a little more like
                time together, wherever you both are.
              </p>
            </div>
          </div>
        </article>
      </main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Footer compact />
      </div>
    </div>
  );
}
