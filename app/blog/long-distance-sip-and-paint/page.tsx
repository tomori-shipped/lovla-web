import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";
import { colorBattleSections as questionGroups, colorBattlePost as post } from "@/constants/blog/long-distance-sip-and-paint";

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
        { "@type": "ListItem", position: 3, name: "Long distance sip and paint", item: canonical },
      ],
    },
  ],
};

export default function ColorBattleDatePage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">A little friendly competition</p>
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
              <nav aria-label="In this guide" className="rounded-xl border border-primary/10 p-5 lg:sticky lg:top-8 lg:rounded-none lg:border-0 lg:p-0">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">Plan your paint date</p>
                <ul className="mt-4 space-y-3">
                  {questionGroups.map((group) => <li key={group.id}><a href={`#${group.id}`} className="block py-1 text-sm leading-6 text-primary underline-offset-4 hover:underline">{group.title}</a></li>)}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]">
              <div className="space-y-5">
                <p>You have agreed on a video call. You have caught up on your days. Now you are both waiting for something more interesting to happen than another conversation about what to eat.</p>
                <p>A long distance paint date gives you something to do together. The appeal of a sip and paint evening is easy to understand: a little creativity, a shared challenge, and the possibility of laughing at a portrait that went spectacularly off course. You can bring that painting activity into your relationship without a table full of supplies.</p>
                <p>Lovla’s <strong>Color Battle</strong> makes it a virtual, timed challenge. Two users paint each other in Lovla from a reference image. You are in different places, but you have the same kind of task to focus on: turning the person you know into a portrait before the time runs out.</p>
              </div>
              <section id="what-is-it" className="mt-10 scroll-mt-8 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <h2 className="font-helix text-3xl leading-tight text-primary">What is a long distance sip and paint date?</h2>
                <p className="mt-4">For this date, take the idea of painting together and adapt it to two locations. Instead of attending a studio or getting matching art supplies delivered, you paint digitally in Lovla. Color Battle provides the timed activity of painting portraits together.</p>
                <p className="mt-4">The subject is personal, too. You are painting your partner from a reference image, and they are painting you. A familiar smile, hairstyle, or expression gives you something more meaningful to work with than an unrelated still life.</p>
              </section>
              <section id="color-battle" className="mt-12 scroll-mt-8 border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">How Color Battle makes the date work from different places</h2>
                <p className="mt-5">An ordinary remote paint night can involve finding supplies, choosing what to paint, and agreeing when to stop. Color Battle brings the activity into Lovla: two people, reference based portraits of each other, and a timer.</p>
                <p className="mt-5">That gives your evening a clear focus. You are not responsible for keeping a conversation going every second because you both have something to work on. A quiet minute can simply mean someone is concentrating very hard on an eyebrow.</p>
                <p className="mt-5">The timer also gives you a reason to make a choice and move on. You might spend your attention on the expression rather than every detail of the outfit. Treat that constraint as part of the fun, not a demand to produce professional art.</p>
                <p className="mt-5">This is different from coloring one shared photo together. In Color Battle, the activity is painting each other from a reference image in a timed round.</p>
              </section>
              <section id="prepare" className="mt-12 scroll-mt-8 border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">What to prepare before your virtual paint date</h2>
                <ul className="mt-5 list-disc space-y-3 pl-5">
                  <li><strong>Lovla for both people.</strong> Have the app ready before your planned time together.</li>
                  <li><strong>Clear reference images.</strong> Choose pictures in which you can easily see each other’s faces and expressions.</li>
                  <li><strong>A comfortable place to paint.</strong> Charge your phones, settle in, and give yourselves room to concentrate.</li>
                  <li><strong>Time around the round.</strong> Leave space before you start to catch up and after you finish to talk about the experience.</li>
                </ul>
                <p className="mt-5">If you want to chat while you paint, arrange a separate call using the calling setup you normally use. You can also catch up before and afterward. The date does not depend on filling every moment with conversation.</p>
                <p className="mt-5">You do not need physical paint, brushes, or matching canvases for Color Battle. The painting happens in Lovla.</p>
              </section>
              <section id="plan" className="mt-12 scroll-mt-8 border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">A simple plan for your first Color Battle date</h2>
                <ol className="mt-7 ml-7 list-decimal space-y-7 marker:font-semibold marker:text-primary">
                  <li className="pl-2"><h3 className="text-xl font-semibold text-primary">Invite your partner to something specific</h3><p className="mt-3">Try: “Want to paint each other in Lovla tonight? I cannot promise a convincing nose.” Agree on a time when neither of you needs to rush straight into another task.</p></li>
                  <li className="pl-2"><h3 className="text-xl font-semibold text-primary">Choose references you both like</h3><p className="mt-3">Use a clear photo with one obvious subject. A face hidden in shadow or a tiny person in a large landscape makes the task harder. Choose a photo your partner is happy for you to use, especially if you plan to joke about the result.</p></li>
                  <li className="pl-2"><h3 className="text-xl font-semibold text-primary">Agree on the mood</h3><p className="mt-3">You can aim for a recognizable likeness or enjoy a more playful interpretation. Neither person needs to be a skilled artist. Agree that the portraits are a creative attempt, not an opportunity to criticize how someone looks.</p></li>
                  <li className="pl-2"><h3 className="text-xl font-semibold text-primary">Paint each other in the timed round</h3><p className="mt-3">Use Color Battle in Lovla and work from your reference images. Follow the timer in the app. Start with the large shapes, then choose the features you most want to capture instead of trying to perfect every line.</p></li>
                  <li className="pl-2"><h3 className="text-xl font-semibold text-primary">Make time for the stories afterward</h3><p className="mt-3">Talk about which part was hardest, what you noticed in the reference, and where your artistic confidence got ahead of your abilities. Give your portrait a ridiculous title if you like. The conversation afterward can be as enjoyable as the painting.</p></li>
                </ol>
              </section>
              <section id="references" className="mt-12 scroll-mt-8 border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">Choose a reference that makes painting more fun</h2>
                <p className="mt-5">A simple photo gives you more time to enjoy the challenge. Look for a face that is large enough to see, natural light, and an expression you recognize. A plain background helps keep your attention on your partner.</p>
                <p className="mt-5">You could choose recent photos, pictures from an early date, or portraits from a trip you both remember. Avoid a complicated group shot for your first attempt. The point is to paint each other, not spend the round working out which tiny shape is an eye.</p>
                <p className="mt-5">For another creative activity built around your photos, read our guide to <Link href="/blog/turn-photo-into-coloring-page" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">turning a photo into a coloring page</Link>. That is a separate date idea from the timed portrait challenge.</p>
              </section>
              <section id="keep-it-playful" className="mt-12 scroll-mt-8 border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">Keep the battle playful</h2>
                <p className="mt-5">The name can invite a little competitive energy, but your evening does not need to turn into an art exam. Notice the detail your partner got right before laughing at the part that wandered off course. “You got my smile” is a nicer opening than a list of anatomical complaints.</p>
                <p className="mt-5">If one of you draws more often, avoid comparing speed or polish. Each person can choose a personal goal: capture the hairstyle, try an unexpected color, or finish without endlessly reworking one feature. Those are your own creative challenges, not extra app rules.</p>
                <p className="mt-5">Stop while you are still enjoying yourselves. One round and a warm conversation can be a complete date. If you need more ideas for another night, explore our <Link href="/blog/things-to-do-on-facetime-with-your-partner" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">35 things to do on FaceTime</Link>.</p>
              </section>
              <section className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">Different rooms. A shared challenge.</p>
                <h2 className="mt-3 font-helix text-3xl leading-tight text-primary">Make your next date a Color Battle.</h2>
                <p className="mt-4">Paint each other from reference images in a timed round on Lovla. Bring your favorite person and a willingness to try. A perfect portrait is optional.</p>
                <div className="mt-6"><AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" /></div>
                <Link href="/blog/creative-date-ideas-for-couples" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Explore more creative date ideas <ArrowRight size={15} aria-hidden="true" /></Link>
              </section>
              <section id="questions" className="border-t border-primary/10 pt-10">
                <h2 className="font-helix text-3xl leading-tight text-primary">Questions about a long distance paint date</h2>
                <h3 className="mt-7 text-xl font-semibold text-primary">Are we painting the same picture together?</h3><p className="mt-3">In Color Battle, two users paint each other from a reference image. It is a portrait challenge rather than both people coloring one shared picture.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">Do we need to know how to paint?</h3><p className="mt-3">You can approach the date as a playful first attempt. Choose a straightforward reference, focus on a few recognizable features, and let the result be imperfect.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">How long is a Color Battle round?</h3><p className="mt-3">Color Battle is timed. Follow the timer shown in Lovla for your round, and leave extra time before and after for choosing references and talking.</p>
                <h3 className="mt-7 text-xl font-semibold text-primary">What if we are in different time zones?</h3><p className="mt-3">Choose an overlapping time when you can both participate. Keep the rest of the plan simple, especially if it is early for one person and late for the other. A short painting date can be enough without adding a full evening of activities.</p>
              </section>
              <p className="mt-12 border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">Written by <span className="font-semibold text-primary">The Lovla Team</span>. A practical guide to making time together through a virtual painting challenge.</p>
            </div></div></article></main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
    </div>
  );
}
