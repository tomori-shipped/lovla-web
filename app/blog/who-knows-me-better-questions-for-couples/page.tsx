import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";
import { questionGroups, whoKnowsMeBetterPost as post } from "@/constants/blog/who-knows-me-better";

const canonical = `https://www.lovla.app/blog/${post.slug}`;

export const metadata: Metadata = {
  title: post.seoTitle,
  description: post.description,
  authors: [{ name: post.author, url: "https://www.lovla.app" }],
  alternates: { canonical },
  openGraph: {
    type: "article", title: post.title, description: post.description, url: canonical,
    siteName: "Lovla", publishedTime: post.date, modifiedTime: post.updatedDate,
    authors: [post.author], images: [{ url: post.image, width: 1672, height: 941, alt: post.imageAlt }],
  },
  twitter: { card: "summary_large_image", title: post.seoTitle, description: post.description, images: [{ url: post.image, alt: post.imageAlt }] },
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
        { "@type": "ListItem", position: 3, name: "Who Knows Me Better questions for couples", item: canonical },
      ],
    },
  ],
};

export default function WhoKnowsMeBetterPage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">A date night with receipts</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">Pick a round</p>
                <ul className="mt-4 space-y-3">
                  {questionGroups.map((group) => <li key={group.id}><a href={`#${group.id}`} className="block py-1 text-sm leading-6 text-primary underline-offset-4 hover:underline">{group.shortTitle}</a></li>)}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]">
              <div className="space-y-5">
                <p>“Who knows me better?” sounds like a test, but the best version is less about proving who remembers more and more about discovering what has changed. Your partner may know your coffee order perfectly and have no idea that your dream vacation moved from a beach to a quiet cabin last year.</p>
                <p>These 101 questions move from easy facts to everyday habits, shared memories, relationship details, future hopes, and a final ridiculous round. Use all of them over several dates or choose ten from different sections for a quick game tonight.</p>
              </div>

              <section aria-labelledby="how-to-play" className="mt-10 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">Simple rules</p>
                <h2 id="how-to-play" className="mt-3 font-helix text-3xl leading-tight text-primary">How to play Who Knows Me Better as a couple</h2>
                <ol className="mt-5 ml-6 list-decimal space-y-3 marker:font-semibold marker:text-primary">
                  <li>Choose who will be the answer person for the first round.</li>
                  <li>They privately write their real answer before their partner guesses.</li>
                  <li>Reveal both answers. Give one point for a match and half a point if you both agree it was close.</li>
                  <li>Let the answer person explain anything surprising, then switch roles.</li>
                  <li>Play to ten points, or ignore the score when a story becomes more interesting.</li>
                </ol>
              </section>

              <div className="my-9 border-l-2 border-[#D98AB8] py-1 pl-5">
                <p className="font-semibold text-primary">One rule worth keeping</p>
                <p className="mt-2">A wrong answer is not evidence that somebody does not care. People change, details get forgotten, and some answers have never been said out loud. Allow a pass on anything too personal and use the game to update each other.</p>
              </div>

              {questionGroups.map((group) => (
                <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A93F7B]">Questions {group.start}–{group.start + group.questions.length - 1}</p>
                  <h2 id={`${group.id}-title`} className="mt-3 font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">{group.title}</h2>
                  <p className="mt-4">{group.intro}</p>
                  <ol start={group.start} className="mt-7 ml-7 list-decimal space-y-3 marker:font-semibold marker:text-primary">
                    {group.questions.map((question) => <li key={question} data-question className="pl-1 sm:pl-2">{question}</li>)}
                  </ol>
                </section>
              ))}

              <section aria-labelledby="good-round" className="mt-12 border-t border-primary/10 pt-10">
                <h2 id="good-round" className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">How to choose questions for a good round</h2>
                <p className="mt-5">For a short game, choose two easy questions, three everyday questions, two memories, two relationship questions, and one funny question. Ten is enough to create momentum without turning the evening into an interview.</p>
                <p className="mt-5">New couples may want to stay with favorites, routines, and future wishes. Couples who have been together for years can make the everyday round harder by asking for the current answer, not the answer from when they met. Long-distance couples can play over video, in voice notes, or one question at a time across the day.</p>
                <p className="mt-5">If the game uncovers a favorite memory, make that the next activity. Pull up the photo, tell the story from both sides, and use our guide to <Link href="/blog/turn-photo-into-coloring-page" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">turn the photo into a coloring page</Link>. It gives the answer somewhere creative to go.</p>
              </section>

              <section aria-labelledby="keep-fun" className="mt-12 border-t border-primary/10 pt-10">
                <h2 id="keep-fun" className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">Keep it curious, not competitive</h2>
                <p className="mt-5">Do not choose questions only because you expect your partner to fail. Mix obvious answers with things you genuinely want them to know. Accept reasonable variations, especially for feelings, future plans, and memories. If somebody says, “That used to be true,” pause the score and listen to the update.</p>
                <p className="mt-5">You can also skip scoring completely. Predict each answer, reveal it, and ask one follow-up: “Why that one?” The point of a good couple question is not the fact itself. It is the small conversation hiding behind it.</p>
                <p className="mt-5">Need another activity when the questions run out? Pick something from our <Link href="/blog/long-distance-relationship-activities" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">long-distance relationship activities</Link>. Many work just as well when you are sitting on the same couch.</p>
              </section>

              <section aria-labelledby="lovla-question-date" className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">Make an answer into something</p>
                <h2 id="lovla-question-date" className="mt-3 font-helix text-3xl leading-tight text-primary">Turn your favorite answer into your next coloring date.</h2>
                <p className="mt-4">Lovla is made by our team for couples to create and color together. Use a favorite memory photo, or turn an idea from your answers into a coloring page, then work on it together in real time and keep it in your shared journal.</p>
                <div className="mt-6"><AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" /></div>
                <Link href="/" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4">See how Lovla works <ArrowRight size={15} aria-hidden="true" /></Link>
              </section>
              <p className="border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">Written by <span className="font-semibold text-primary">The Lovla Team</span>. We make Lovla, a shared coloring journal for couples, and publish practical ideas for spending better time together.</p>
            </div>
          </div>
        </article>
      </main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
    </div>
  );
}
