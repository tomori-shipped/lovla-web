import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";
import { noQuizPost as post } from "@/constants/blog/couples-apps-without-quizzes";

const canonical = `https://www.lovla.app/blog/${post.slug}`;
export const metadata: Metadata = {
  title: post.seoTitle,
  description: post.description,
  authors: [{ name: post.author }],
  alternates: { canonical },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    url: canonical,
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: [post.author],
    images: [{ url: `https://www.lovla.app${post.image}`, alt: post.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.seoTitle,
    description: post.description,
    images: [`https://www.lovla.app${post.image}`],
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `https://www.lovla.app${post.image}`,
      datePublished: post.date,
      dateModified: post.date,
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
        { "@type": "ListItem", position: 3, name: post.title, item: canonical },
      ],
    },
  ],
};
const sections = [
  ["different-activity", "When questions start feeling like homework"],
  ["try-tonight", "A creative date to try tonight"],
  ["shared-coloring", "What shared coloring looks like"],
  ["choose-your-fit", "Choose the right kind of app"],
  ["questions", "A few useful answers"],
];
const sectionClass = "mt-12 scroll-mt-8 border-t border-primary/10 pt-9";
const headingClass = "font-helix text-3xl leading-tight text-primary";
const linkClass =
  "font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4";

export default function NoQuizPostPage() {
  return (
    <div className="min-h-screen bg-[#FDFBFD] text-[#171217]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <header className="border-b border-primary/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            aria-label="Lovla home"
            className="font-helix text-3xl text-primary"
          >
            Lovla.
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold text-primary hover:underline"
          >
            All stories
          </Link>
        </div>
      </header>
      <main>
        <article>
          <header className="mx-auto max-w-4xl px-6 pb-10 pt-12 md:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">
              More doing. Less interviewing.
            </p>
            <h1 className="mt-5 font-helix text-[38px] leading-[1.08] tracking-[-0.03em] text-primary sm:text-5xl md:text-[60px]">
              {post.title}
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-[#4F4350]"
              data-article-answer
            >
              If you want a couples app without quizzes, choose a shared
              activity: coloring a photo, making a small scrapbook, or planning
              something you will actually do. Lovla lets you turn a photo into a
              coloring page and color it together in real time. Pick a memory,
              split the picture between you, and spend a few minutes making
              something. You can talk while you color, but nobody has to come up
              with a profound answer about their childhood.
            </p>
            <p className="mt-5 text-base leading-7 text-[#6F5B6D]">
              Lovla gives you one picture to work on together, so the activity
              can start with your own memories.
            </p>
            <AppStoreButton className="mt-5" />
            <p className="mt-3 text-xs leading-6 text-[#786577]">
              For iPhone and iPad. Check the App Store for current subscription
              details.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-sm text-[#786577]">
              <span>By {post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>September 15, 2026</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </header>
          <figure className="mx-auto max-w-5xl px-4 sm:px-8">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1536}
              height={864}
              preload
              sizes="(max-width: 1024px) 100vw, 960px"
              className="h-auto w-full rounded-2xl"
            />
          </figure>
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14">
            <aside>
              <nav
                aria-label="In this guide"
                className="rounded-xl border border-primary/10 p-5 lg:sticky lg:top-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">
                  Find your kind of connection
                </p>
                <ul className="mt-4 space-y-3">
                  {sections.map(([id, title]) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="block text-sm leading-6 text-primary hover:underline"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]">
              <section id="different-activity" className="scroll-mt-8">
                <h2 className={headingClass}>
                  When questions start feeling like homework
                </h2>
                <p className="mt-5">
                  You know their favorite food. You know their dream holiday. At
                  this point, you could probably answer the favorite food
                  question on their behalf, including the argument about whether
                  fries count as a meal.
                </p>
                <p className="mt-5">
                  Questions can open a good conversation. They can also feel
                  repetitive when you have been together a while, or badly timed
                  when one person has just finished a long shift. Wanting
                  something different tonight does not mean you have run out of
                  interest in each other.
                </p>
                <p className="mt-5">
                  Try changing the task. A shared picture gives you something to
                  notice, change, and laugh about. You are no longer taking
                  turns producing answers. You are deciding whether the sky
                  should really be that shade of pink.
                </p>
              </section>
              <section id="try-tonight" className={sectionClass}>
                <h2 className={headingClass}>A creative date to try tonight</h2>
                <p className="mt-5">
                  Set aside about fifteen minutes for your date. Stretch it out
                  if you are enjoying yourselves.
                </p>
                <ol className="mt-6 list-decimal space-y-6 pl-6 marker:font-semibold marker:text-primary">
                  <li>
                    <strong className="text-primary">
                      Choose one photo with a story.
                    </strong>
                    <p className="mt-2">
                      The first trip, the rainy picnic, the selfie taken just
                      before you missed the train. Pick a clear picture you both
                      like. Skip the group shot with seventeen tiny faces for
                      your first attempt.
                    </p>
                  </li>
                  <li>
                    <strong className="text-primary">
                      Turn it into a page in Lovla.
                    </strong>
                    <p className="mt-2">
                      Turn your chosen photo into a coloring page and connect
                      with your partner for shared coloring. Keep the first
                      attempt simple. You can save the complicated holiday
                      panorama for another evening.
                    </p>
                  </li>
                  <li>
                    <strong className="text-primary">
                      Give each person a part of the picture.
                    </strong>
                    <p className="mt-2">
                      You take the background; they take the clothes.
                      Agree that either person can suggest a wonderfully
                      questionable color.
                    </p>
                  </li>
                  <li>
                    <strong className="text-primary">
                      Let the picture carry the conversation.
                    </strong>
                    <p className="mt-2">
                      Remember the journey there, the food afterward, or what
                      happened outside the frame. If neither of you feels like
                      talking much, keep coloring. A quiet moment does not need
                      rescuing.
                    </p>
                  </li>
                  <li>
                    <strong className="text-primary">
                      Keep the result and stop while it is fun.
                    </strong>
                    <p className="mt-2">
                      Save the artwork in your Lovla journal. Give it a title
                      together, even if you just say it aloud. “The Holiday
                      Where Your Shirt Became Neon” has a certain charm.
                    </p>
                  </li>
                </ol>
                <p className="mt-5">
                  If you are apart and want to talk, use your usual separate
                  calling setup. For help choosing a picture, see{" "}
                  <Link
                    href="/blog/turn-photo-into-coloring-page"
                    className={linkClass}
                  >
                    how to turn a photo into a coloring page
                  </Link>
                  .
                </p>
              </section>
              <section id="shared-coloring" className={sectionClass}>
                <h2 className={headingClass}>
                  What shared coloring looks like
                </h2>
                <div className="mt-6 grid items-start gap-7 sm:grid-cols-[220px_minmax(0,1fr)]">
                  <figure>
                    <Image
                      src="/screenshots/lovla-shared-coloring.webp"
                      alt="Lovla feature artwork showing two partner avatars above a shared photo coloring canvas"
                      width={600}
                      height={1299}
                      sizes="(max-width: 640px) 260px, 220px"
                      className="mx-auto h-auto w-full max-w-[260px] rounded-2xl"
                    />
                    <figcaption className="mt-3 text-xs leading-5 text-[#786577]">
                      Lovla shared coloring feature artwork: two partners,
                      one photo canvas.
                    </figcaption>
                  </figure>
                  <div className="space-y-5">
                    <p>
                      The point is the shared canvas. Your partner can add color
                      to the same page while you work on it, so you have
                      something happening together instead of another question
                      to complete.
                    </p>
                    <p>
                      You do not need to be good at drawing. Starting with a
                      photo outline lets you focus on colors and memories.
                      Recognizable faces are already doing some of the work.
                    </p>
                    <p>
                      Lovla’s{" "}
                      <a
                        href="https://apps.apple.com/us/app/lovla-couples-coloring-games/id6758548454"
                        className={linkClass}
                      >
                        App Store listing
                      </a>{" "}
                      describes photo coloring, real time collaboration, and a
                      journal for finished artwork. Check the current listing
                      for access details before planning your date.
                    </p>
                  </div>
                </div>
              </section>
              <section id="choose-your-fit" className={sectionClass}>
                <h2 className={headingClass}>
                  Choose an app around what you miss
                </h2>
                <p className="mt-5">
                  If you miss doing things together, a creative activity is a
                  sensible place to start. If your real problem is finding a
                  time when you are both free, a shared calendar may help more.
                  If you want help opening a particular conversation, a question
                  based app might still be the right choice.
                </p>
                <p className="mt-5">
                  Lovla is a fit for people who want to make something personal
                  together. It is not a replacement for a scheduling tool, and a
                  coloring date cannot resolve a disagreement you are avoiding.
                  Choose it because you want the activity.
                </p>
                <p className="mt-5">
                  Before committing to any couples app, check whether it works
                  on both devices, what access requires payment, and whether you
                  both enjoy its main activity. A giant feature list is less
                  useful than something your partner actually wants to open.
                </p>
                <p className="mt-5">
                  For different kinds of connection, our{" "}
                  <Link
                    href="/blog/best-apps-for-couples"
                    className={linkClass}
                  >
                    couples app guide
                  </Link>{" "}
                  covers conversation, planning, photos, and shared
                  entertainment.
                </p>
              </section>
              <section id="questions" className={sectionClass}>
                <h2 className={headingClass}>A few useful answers</h2>
                <h3 className="mt-7 text-xl font-semibold text-primary">
                  Can we do something similar without an app?
                </h3>
                <p className="mt-3">
                  Yes. Each draw the same holiday memory on paper, make a small
                  photo album together, or invent terrible postcards from your
                  next dream trip. These will not provide Lovla’s shared digital
                  canvas, but they give you an activity to enjoy without
                  installing anything.
                </p>
                <h3 className="mt-7 text-xl font-semibold text-primary">
                  What if one of us does not like art?
                </h3>
                <p className="mt-3">
                  Ask first. Try choosing colors together or let one person tell
                  the story behind the photo. If neither sounds fun, pick a
                  different activity. The best date idea is one you both want,
                  not one somebody has to sell for twenty minutes.
                </p>
                <h3 className="mt-7 text-xl font-semibold text-primary">
                  Do we have to be long distance?
                </h3>
                <p className="mt-3">
                  No. You can color together from separate places or sit beside
                  each other. Being on the same sofa also makes it easier to
                  defend your artistic choices in person.
                </p>
                <h3 className="mt-7 text-xl font-semibold text-primary">
                  What if we still want conversation starters sometimes?
                </h3>
                <p className="mt-3">
                  Keep them for the nights you want them. There is no need to
                  choose one permanent relationship routine. Try our{" "}
                  <Link
                    href="/blog/questions-to-ask-your-partner"
                    className={linkClass}
                  >
                    questions to ask your partner
                  </Link>{" "}
                  when you feel like talking, and a creative activity when you
                  feel like doing.
                </p>
              </section>
              <section className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <h2 className={headingClass}>
                  Start with the photo you both love.
                </h2>
                <p className="mt-4">
                  Make it colorful, make it a little ridiculous, and keep what
                  you create. That is enough of a plan for tonight.
                </p>
                <AppStoreButton className="mt-6" />
              </section>
              <p className="border-t border-primary/10 pt-6 text-sm text-[#786577]">
                Written by The Lovla Team. A practical guide to spending time
                together through shared creativity.
              </p>
            </div>
          </div>
        </article>
      </main>
      <div className="mx-auto max-w-6xl px-6">
        <Footer compact />
      </div>
    </div>
  );
}
