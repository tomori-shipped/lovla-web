import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";

const canonicalUrl = "https://www.lovla.app/blog/best-apps-for-couples";
const heroImageUrl =
  "https://www.lovla.app/blog/best-apps-for-couples-2026.webp";

const apps = [
  {
    name: "Lovla",
    bestFor: "Creative dates and shared memories",
    link: "https://apps.apple.com/gb/app/lovla/id6758548454",
    linkLabel: "Download Lovla on the App Store",
    description: (
      <>
        Your camera roll probably has a photo that deserves better than being
        buried beneath screenshots of parking instructions. Lovla turns that
        photo into a coloring page you can work on together in real time. You
        can also start with a text idea, leave love notes, and keep your
        creations. Pick a memory, choose wildly unrealistic colors, and see
        where the conversation goes.
      </>
    ),
    fit: "Choose it if you want an activity to do together, especially when another video call feels a little stale.",
    caveat:
      "Available on iOS. If you use Android, join the waitlist on the Lovla homepage.",
  },
  {
    name: "Paired",
    bestFor: "Guided relationship conversations",
    link: "https://www.paired.com/",
    linkLabel: "Visit Paired",
    description: (
      <>
        “How was your day?” has its limits. Paired gives you daily questions,
        quizzes, games, and guided exercises that open up different
        conversations. It can be handy when you want to get beyond the usual
        updates but drawing a blank is getting in the way.
      </>
    ),
    fit: "Choose it if you want structured prompts and relationship education in one place.",
    caveat:
      "The guided format is the point, but it can feel like homework if one partner is not genuinely interested.",
  },
  {
    name: "Agapé",
    bestFor: "One meaningful question a day",
    link: "https://www.getdailyagape.com/",
    linkLabel: "Visit Agapé",
    description: (
      <>
        One question. Two answers. A small surprise when you discover what your
        partner wrote. That’s the appeal of Agapé: you each answer a daily
        relationship question before seeing the other response. It gives you
        something to talk about without needing to clear your evening.
      </>
    ),
    fit: "Choose it if consistency matters more to you than having dozens of features.",
    caveat:
      "It is built around conversation, so couples looking for games or shared planning will want something else too.",
  },
  {
    name: "Cupla",
    bestFor: "Coordinating two busy schedules",
    link: "https://cupla.app/",
    linkLabel: "Visit Cupla",
    description: (
      <>
        “I thought we were free on Friday” is a sentence with a lot of potential
        for disappointment. Cupla puts calendars, date plans, reminders, tasks,
        and lists in one place. It’s a practical choice when you adore each
        other but your schedules seem to be in separate relationships.
      </>
    ),
    fit: "Choose it if logistics are creating more friction than a lack of affection.",
    caveat:
      "It makes plans easier; it does not provide as much help with what to do or talk about once the date begins.",
  },
  {
    name: "Between",
    bestFor: "A private space for two",
    link: "https://between.us/?lang=en",
    linkLabel: "Visit Between",
    description: (
      <>
        Between gives your relationship a room of its own. Chat, photos, videos,
        notes, schedules, and calls sit together, away from the work messages
        and noisy group chats. The appeal is having a place where the person you
        want to hear from is the whole point.
      </>
    ),
    fit: "Choose it if you want your messages and relationship archive together in one dedicated app.",
    caveat:
      "It overlaps with tools you may already use, so the value depends on whether both of you want a separate space.",
  },
  {
    name: "Cozy Couples",
    bestFor: "Gamified everyday closeness",
    link: "https://cozycouples.co/",
    linkLabel: "Visit Cozy Couples",
    description: (
      <>
        If you’re the couple who names every houseplant, Cozy Couples might make
        sense immediately. Its shared world brings together moods, notes,
        photos, questions, games, and virtual items to care for. Small visits to
        the app become something playful you can both return to.
      </>
    ),
    fit: "Choose it if you both enjoy streaks, customization, and a little friendly motivation.",
    caveat:
      "The cozy virtual world style is specific. If either partner finds it too cute, the habit may not last.",
  },
  {
    name: "Lovewick",
    bestFor: "Questions and date inspiration",
    link: "https://lovewick.com/",
    linkLabel: "Visit Lovewick",
    description: (
      <>
        You want a date. You don’t want another evening spent deciding what the
        date should be. Lovewick gathers question cards, date ideas, reminders,
        and relationship inspiration in one place. Browse together, each choose
        a favorite, and let the better pitch win.
      </>
    ),
    fit: "Choose it if you want a broad idea library without committing to a narrowly defined daily routine.",
    caveat:
      "Because it covers a lot, it can feel more like a toolbox than one distinctive shared experience.",
  },
  {
    name: "Locket",
    bestFor: "Tiny photo updates throughout the day",
    link: "https://apps.apple.com/us/app/locket-widget/id1600525061",
    linkLabel: "View Locket on the App Store",
    description: (
      <>
        Not every photo needs a caption or an occasion. Locket puts pictures
        from your closest people on a home screen widget: the questionable
        lunch, the rainy commute, the dog claiming your pillow. It’s a lovely
        fit when the ordinary bits are exactly what you miss.
      </>
    ),
    fit: "Choose it if seeing each other’s unpolished daily life helps you feel present, especially at a distance.",
    caveat:
      "It is intentionally lightweight and does not replace a couples calendar, activity, or deeper conversation tool.",
  },
  {
    name: "Rave",
    bestFor: "Long distance watch parties",
    link: "https://rave.io/",
    linkLabel: "Visit Rave",
    description: (
      <>
        Somebody is always three seconds ahead. Rave synchronizes video so you
        can watch together while texting or talking, taking the repeated
        countdown out of movie night. If watching a film together is already
        your thing, this gives the evening a little less technical rehearsal.
      </>
    ),
    fit: "Choose it if streaming together is already one of your favorite dates.",
    caveat:
      "Content access still depends on the services involved, and it is a focused watch party tool rather than an all purpose couples app.",
  },
];

const faqs = [
  {
    question: "What is the best app for couples?",
    answer:
      "The best app depends on the habit you want to build. Lovla is best for creative shared dates, Paired for guided conversations, Cupla for planning, and Rave for synchronized movie nights. Pick one clear job instead of downloading the app with the longest feature list.",
  },
  {
    question: "What are the best apps for long distance couples?",
    answer:
      "Lovla, Agapé, Locket, and Rave are especially useful for long distance couples because they create shared moments across time zones: a creative activity, a daily question, an everyday photo, or a movie night.",
  },
  {
    question: "Are there free couples apps?",
    answer:
      "Yes. Several couples apps offer free access or free core features, although plans can change. Check each app's current store listing before downloading if a specific feature or price matters to you.",
  },
  {
    question: "Can a couples app actually improve a relationship?",
    answer:
      "An app cannot repair a relationship by itself. It can make a useful behavior easier to repeat, such as asking a thoughtful question, planning time together, or sharing a low pressure activity. The repeatable habit matters more than the app.",
  },
];

export const metadata: Metadata = {
  title: "9 Best Apps for Couples in 2026 That Help",
  description:
    "Compare nine useful apps for couples, including options for long distance dates, shared memories, questions, planning, photos, and quality time.",
  keywords: [
    "best apps for couples",
    "couple app",
    "apps for couples",
    "relationship apps",
    "apps for long distance couples",
  ],
  authors: [{ name: "The Lovla Team", url: "https://www.lovla.app" }],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "9 Best Apps for Couples in 2026 That Are Actually Useful",
    description:
      "A guide to couples apps for better conversations, shared plans, creative dates, photos, and long distance quality time.",
    url: canonicalUrl,
    type: "article",
    publishedTime: "2026-09-04T00:00:00.000Z",
    modifiedTime: "2026-09-08T00:00:00.000Z",
    authors: ["The Lovla Team"],
    images: [
      {
        url: heroImageUrl,
        width: 1672,
        height: 941,
        alt: "9 best apps for couples in 2026 illustrated guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "9 Best Apps for Couples in 2026 That Are Actually Useful",
    description:
      "A guide to couples apps for conversations, planning, creative dates, photos, and long distance quality time.",
    images: [heroImageUrl],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "9 Best Apps for Couples in 2026 That Are Actually Useful",
  description:
    "A comparison of couples apps for conversations, planning, shared memories, creative dates, photos, and long distance quality time.",
  image: [heroImageUrl],
  datePublished: "2026-09-04",
  dateModified: "2026-09-08",
  author: {
    "@type": "Organization",
    name: "The Lovla Team",
    url: "https://www.lovla.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Lovla",
    url: "https://www.lovla.app",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BestAppsForCouplesPage() {
  return (
    <div className="min-h-screen bg-accent text-[#171217]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="border-b border-primary/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6">
          <Link
            href="/"
            className="font-helix text-3xl text-primary"
            aria-label="Lovla home"
          >
            Lovla.
          </Link>
          <nav
            className="flex items-center gap-5"
            aria-label="Primary navigation"
          >
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Blog
            </Link>
            <Link
              href="/#android-waitlist"
              className="hidden text-sm font-semibold text-primary hover:underline sm:block"
            >
              Android waitlist
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <article>
          <div className="mx-auto max-w-4xl px-4 pb-12 pt-12 md:px-6 md:pt-20">
            <nav aria-label="Breadcrumb" className="text-sm text-[#725f73]">
              <Link href="/" className="hover:text-primary hover:underline">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href="/blog" className="hover:text-primary hover:underline">
                Blog
              </Link>
            </nav>

            <p className="mt-9 text-sm font-bold uppercase tracking-[0.18em] text-[#A93F7B]">
              Couples apps
            </p>
            <h1 className="mt-4 font-helix text-5xl leading-[1.02] text-primary sm:text-6xl md:text-7xl">
              9 Best Apps for Couples in 2026 That Are Actually Useful
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-[#4f4350] md:text-2xl md:leading-9">
              You sent twelve memes today. You still haven’t picked a date
              night. These nine apps can help turn “we should” into something
              you actually do together.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#725f73]">
              <span className="font-bold text-primary">The Lovla Team</span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-09-04">September 4, 2026</time>
              <span aria-hidden="true">·</span>
              <span>8 min read</span>
            </div>

            <div className="relative mt-10 aspect-[1672/941] overflow-hidden rounded-[28px] border border-primary/10 bg-[#E9DDF0] shadow-[0_22px_70px_rgba(75,22,76,0.12)]">
              <Image
                src="/blog/best-apps-for-couples-2026.webp"
                alt="Hand drawn illustration of a couple choosing the best relationship apps together"
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-4 pb-20 md:px-6">
            <div className="space-y-6 text-[17px] leading-8 text-[#352d35]">
              <p>
                It’s Wednesday. Dinner is finished, the sofa has claimed you
                both, and somehow you’re sending each other videos from opposite
                ends of the same room. Cute? Absolutely. The quality time you
                had in mind? Maybe not quite.
              </p>
              <p>
                A good couples app gives that evening a small change of
                direction. A photo to color. A question you’ve never thought to
                ask. A plan that makes it out of the group chat. The nine
                options below each have a different job, so start with the kind
                of evening you’d like to have.
              </p>
            </div>

            <section className="mt-14" aria-labelledby="quick-comparison">
              <h2
                id="quick-comparison"
                className="font-helix text-4xl leading-tight text-primary sm:text-5xl"
              >
                The best couples apps at a glance
              </h2>
              <div className="mt-7 overflow-x-auto rounded-3xl border border-primary/10 bg-white">
                <table className="w-full min-w-[620px] border-collapse text-left">
                  <thead className="bg-[#E9DDF0]/55 text-sm text-primary">
                    <tr>
                      <th className="px-5 py-4 font-bold">App</th>
                      <th className="px-5 py-4 font-bold">Best for</th>
                      <th className="px-5 py-4 font-bold">Try it when...</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/10 text-sm leading-6">
                    {apps.map((app) => (
                      <tr key={app.name}>
                        <td className="px-5 py-4 font-bold text-primary">
                          <a
                            href={app.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-[#D98AB8] decoration-2 underline-offset-4"
                          >
                            {app.name}
                          </a>
                        </td>
                        <td className="px-5 py-4">{app.bestFor}</td>
                        <td className="px-5 py-4 text-[#5f505f]">{app.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-16" aria-labelledby="how-we-chose">
              <h2
                id="how-we-chose"
                className="font-helix text-4xl leading-tight text-primary sm:text-5xl"
              >
                What would make tonight better?
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#352d35]">
                <p>
                  Before you download anything, finish this sentence together:
                  “I wish we had more time for…” Your answer is a much better
                  filter than a long feature list. If you miss proper
                  conversations, choose prompts. If you miss doing things
                  together, choose an activity.
                </p>
                <p>
                  Try one app for a week. Give it a moment in your day, such as
                  coffee before work or the first ten minutes of your evening
                  call. If it feels like another chore, try a different kind of
                  activity. Nobody needs homework from their phone.
                </p>
              </div>
            </section>

            <section className="mt-16" aria-labelledby="full-list">
              <h2
                id="full-list"
                className="font-helix text-4xl leading-tight text-primary sm:text-5xl"
              >
                9 best apps for couples in 2026
              </h2>
              <div className="mt-10 space-y-14">
                {apps.map((app, index) => (
                  <section key={app.name} aria-labelledby={`app-${index + 1}`}>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#A93F7B]">
                      {index + 1}. Best for {app.bestFor.toLowerCase()}
                    </p>
                    <h3
                      id={`app-${index + 1}`}
                      className="mt-2 text-3xl font-bold leading-tight text-primary sm:text-4xl"
                    >
                      {app.name}
                    </h3>
                    <div className="mt-5 space-y-4 text-[17px] leading-8 text-[#352d35]">
                      <p>{app.description}</p>
                      <p>
                        <strong className="text-primary">Best fit:</strong>{" "}
                        {app.fit}
                      </p>
                      <p>
                        <strong className="text-primary">Keep in mind:</strong>{" "}
                        {app.caveat}
                      </p>
                    </div>
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex border-b-2 border-[#D98AB8] pb-1 text-sm font-bold text-primary"
                    >
                      {app.linkLabel}
                      <span className="ml-1" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </section>
                ))}
              </div>
            </section>

            <section className="mt-16 rounded-[32px] bg-primary p-7 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#E9DDF0]">
                Our shortest answer
              </p>
              <h2 className="mt-3 font-helix text-4xl leading-tight sm:text-5xl">
                Pick the ritual, then pick the app
              </h2>
              <div className="mt-6 space-y-4 text-[17px] leading-8 text-white/90">
                <p>
                  If you want a creative date, try Lovla. For better
                  conversations, start with Paired or Agapé. If calendar chaos
                  keeps winning, use Cupla. For a private shared space, choose
                  Between. If playful check ins are your thing, Cozy Couples
                  fits. For more ideas, open Lovewick. For tiny photo updates,
                  use Locket. For movie night across the miles, pick Rave.
                </p>
                <p>
                  Make your first plan specific: “one question with coffee” or
                  “color that holiday photo after dinner.” Tiny plans are easy
                  to start. You can always stay longer if you’re having fun.
                </p>
              </div>
            </section>

            <section className="mt-16" aria-labelledby="long-distance-apps">
              <h2
                id="long-distance-apps"
                className="font-helix text-4xl leading-tight text-primary sm:text-5xl"
              >
                Best apps for long distance couples
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#352d35]">
                <p>
                  Distance changes what “quality time” has to do. It must be
                  easy to start, work across separate routines, and leave you
                  with something to share afterward. That makes Lovla, Agapé,
                  Locket, and Rave our strongest long distance picks from this
                  list.
                </p>
                <p>
                  Some nights you’ll want a proper conversation. Other nights
                  you’ll want to watch something ridiculous and hear your
                  partner laugh. Leave room for both. There’s no prize for
                  making every call profound.
                </p>
              </div>
            </section>

            <section className="mt-16" aria-labelledby="faq">
              <h2
                id="faq"
                className="font-helix text-4xl leading-tight text-primary sm:text-5xl"
              >
                Frequently asked questions
              </h2>
              <div className="mt-7 divide-y divide-primary/10 rounded-3xl border border-primary/10 bg-white px-6 sm:px-8">
                {faqs.map((faq) => (
                  <div key={faq.question} className="py-7">
                    <h3 className="text-xl font-bold text-primary">
                      {faq.question}
                    </h3>
                    <p className="mt-3 leading-7 text-[#4f4350]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-16 overflow-hidden rounded-[32px] border border-[#D98AB8]/35 bg-[#E9DDF0]/55 p-7 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#A93F7B]">
                A date you can start now
              </p>
              <h2 className="mt-3 font-helix text-4xl leading-tight text-primary sm:text-5xl">
                Turn a favorite photo into something you make together.
              </h2>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#4f4350]">
                Lovla turns shared memories and new ideas into coloring pages
                for two. Color together in real time, leave a note, and keep
                what you create as part of your story.
              </p>
              <div className="mt-7">
                <AppStoreButton />
              </div>
            </section>

            <aside className="mt-12 border-t border-primary/10 pt-8">
              <p className="font-bold text-primary">
                Written by The Lovla Team
              </p>
              <p className="mt-2 leading-7 text-[#5f505f]">
                We build playful, low pressure ways for couples to make time
                together and turn shared moments into memories.
              </p>
            </aside>
          </div>
        </article>
      </main>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Footer />
      </div>
    </div>
  );
}
