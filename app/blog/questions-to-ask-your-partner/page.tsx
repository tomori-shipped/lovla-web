import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";
import { partnerQuestionGroups as questionGroups, partnerQuestionsPost as post } from "@/constants/blog/questions-to-ask-your-partner";

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
        { "@type": "ListItem", position: 3, name: "Questions to ask your partner", item: canonical },
      ],
    },
  ],
};

export default function PartnerQuestionsPage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">A little less small talk</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">Find your conversation</p>
                <ul className="mt-4 space-y-3">
                  {questionGroups.map((group) => <li key={group.id}><a href={`#${group.id}`} className="block py-1 text-sm leading-6 text-primary underline-offset-4 hover:underline">{group.title}</a></li>)}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]">
              <div className="space-y-5">
                <p>Sometimes you have talked all day without saying much beyond what needs buying, who is running late, and what to eat. Then you finally get a quiet moment together and cannot think of where to start.</p>
                <p>These questions to ask your partner give you somewhere to begin. Some are silly, some bring back a memory, and some need a little more thought. You do not have to reach the deepest section to have a good conversation.</p>
                <p>Choose three questions that fit tonight. Take turns answering, follow the interesting details, and let a question last longer than you expected. There is no score and nothing to finish.</p>
              </div>
              <section className="my-10 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8" aria-labelledby="how-to-use">
                <h2 id="how-to-use" className="font-helix text-3xl leading-tight text-primary">How to use these questions without making it an interview</h2>
                <ul className="mt-5 list-disc space-y-3 pl-5">
                  <li><strong>Pick a comfortable moment.</strong> Try dinner, a walk, or a quiet part of a call when you can pay attention.</li>
                  <li><strong>Both answer.</strong> Share your own story too, even if the question was your choice.</li>
                  <li><strong>Follow the detail.</strong> A simple “tell me more about that” often goes further than the next prompt.</li>
                  <li><strong>Leave room to pass.</strong> Skip anything that feels too personal or badly timed. You can come back another day.</li>
                  <li><strong>Listen before fixing.</strong> If something difficult comes up, find out whether your partner wants advice, practical help, or company.</li>
                </ul>
                <p className="mt-5">Start with the easy or funny section if you are tired. Save deeper questions for a time when neither of you needs to rush away.</p>
              </section>
              {questionGroups.map((group) => (
                <section key={group.id} id={group.id} className="mt-12 scroll-mt-8 border-t border-primary/10 pt-10">
                  <h2 className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">{group.title}</h2>
                  <p className="mt-4">{group.intro}</p>
                  <ol start={group.start} className="mt-7 ml-7 list-decimal space-y-4 marker:font-semibold marker:text-primary">
                    {group.questions.map((question) => <li key={question} data-partner-question="true" className="pl-2">{question}</li>)}
                  </ol>
                </section>
              ))}
              <section className="mt-12 border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">What to do with a surprising answer</h2>
                <p className="mt-5">Try staying with what your partner said before explaining what you assumed. A new dream does not need an immediate plan. A different memory does not need a referee. An unfamiliar preference may simply mean something has changed.</p>
                <p className="mt-5">If an answer touches on an ongoing disagreement, you can choose a separate time to talk about it properly. You do not have to resolve everything in the middle of a relaxed evening.</p>
                <p className="mt-5">At the end, choose one small thing worth remembering: a date idea, a way to offer support, or a story you want to hear more about. That gives the conversation somewhere to go after you close the list.</p>
              </section>
              <section className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">Give the conversation something to sit beside</p>
                <h2 className="mt-3 font-helix text-3xl leading-tight text-primary">Talk while you make a memory colorful.</h2>
                <p className="mt-4">If sitting face-to-face with a list feels awkward, try a shared activity. Lovla turns a favorite photo into a coloring page you can color together in real time. Pick a photo with a story, choose a couple of questions, and take your time with both.</p>
                <div className="mt-6"><AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" /></div>
                <Link href="/blog/turn-photo-into-coloring-page" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">Turn a photo into a coloring date <ArrowRight size={15} aria-hidden="true" /></Link>
              </section>
              <section className="border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">A few things you might be wondering</h2>
                <h3 className="mt-7 text-xl font-semibold text-primary">What are good questions to ask your partner first?</h3>
                <p className="mt-3">Start with something specific and easy to answer, such as the nicest unexpected part of their day or an ordinary day together they would revisit. Follow their interest instead of working through the list in order.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">How many questions should we ask in one night?</h3>
                <p className="mt-3">Three is a useful starting point. One might lead to a long story; another might get a quick answer. Stop when you have enjoyed the time together, even if you only asked one.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">Can we use these in a long-distance relationship?</h3>
                <p className="mt-3">Yes. Use a call, trade voice notes, or send one question when you both have room to reply. The time-apart section focuses on including each other in ordinary life. For an activity alongside the conversation, explore our <Link href="/blog/things-to-do-on-facetime-with-your-partner" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">35 things to do on FaceTime</Link>.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">How is this different from Who Knows Me Better?</h3>
                <p className="mt-3">Here, each person describes their own answer and the other listens. In <Link href="/blog/who-knows-me-better-questions-for-couples" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">Who Knows Me Better</Link>, you guess your partner’s answers for a playful game. Choose whichever fits your mood.</p>
              </section>
              <p className="mt-12 border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">Written by <span className="font-semibold text-primary">The Lovla Team</span>. These are original conversation prompts for spending time together; there is no required order or right answer.</p>
            </div>
          </div>
        </article>
      </main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
    </div>
  );
}
