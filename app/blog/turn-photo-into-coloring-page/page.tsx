import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";
import { photoColoringPost as post } from "@/constants/blog/photo-to-coloring-page";

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
    modifiedTime: post.date,
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
      dateModified: post.date,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: post.author, url: "https://www.lovla.app" },
      publisher: { "@type": "Organization", name: "Lovla", url: "https://www.lovla.app" },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Lovla", item: "https://www.lovla.app" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.lovla.app/blog" },
        { "@type": "ListItem", position: 3, name: "Turn a photo into a coloring page", item: canonical },
      ],
    },
  ],
};

const sections = [
  ["quick-answer", "The quick answer"],
  ["choose-photo", "Choose a photo"],
  ["make-page", "Make the page"],
  ["fix-results", "Fix the result"],
  ["date-night", "Turn it into a date"],
  ["ideas", "Photo ideas"],
] as const;

export default function PhotoToColoringPage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">Make a memory you can color</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">In this guide</p>
                <ul className="mt-4 space-y-3">
                  {sections.map(([id, label]) => <li key={id}><a href={`#${id}`} className="block py-1 text-sm leading-6 text-primary underline-offset-4 hover:underline">{label}</a></li>)}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]">
              <section id="quick-answer" className="scroll-mt-8">
                <h2 className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">The quick answer</h2>
                <p className="mt-5">To turn a photo into a coloring page, start with a clear picture, convert it to simple black-and-white line art, check that the faces and important details still look right, and then print it or color it digitally. An app can handle the conversion for you; a photo editor gives you more control; tracing by hand creates the most personal result.</p>
                <p className="mt-5">For a date night, the conversion is only the setup. The good part is choosing a memory together, deciding who gets which section, and talking about the moment while you color.</p>
                <div className="my-9 border-l-2 border-[#D98AB8] py-1 pl-5">
                  <p className="font-semibold text-primary">The simplest plan for tonight</p>
                  <p className="mt-2">Choose one well-lit couple photo, turn it into a page, pick five colors, and set a 30-minute timer. You do not need special art skills or a perfect final picture.</p>
                </div>
              </section>

              <section id="choose-photo" className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A93F7B]">Step 1</p>
                <h2 className="mt-3 font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">Choose a photo that will become clean line art</h2>
                <p className="mt-5">A beautiful photo is not automatically a good coloring page. Conversion tools have to decide which edges matter. If the picture contains patterned clothes, a busy crowd, trees, signs, and tiny faces, the page may become a thicket of lines.</p>
                <h3 className="mt-8 text-xl font-semibold text-primary">Look for these qualities</h3>
                <ul className="mt-4 ml-6 list-disc space-y-3 marker:text-[#A93F7B]">
                  <li><strong className="text-primary">A clear subject.</strong> One person, one couple, or one pet is easier to read than a large group.</li>
                  <li><strong className="text-primary">Good light.</strong> Even light keeps eyes, smiles, hair, and clothing from disappearing into heavy shadows.</li>
                  <li><strong className="text-primary">Some separation from the background.</strong> A plain wall, open sky, beach, or softly blurred room usually converts more cleanly.</li>
                  <li><strong className="text-primary">Faces large enough to recognize.</strong> Crop away empty space if your faces occupy only a small part of the frame.</li>
                  <li><strong className="text-primary">A memory with a story.</strong> The page will be more fun to color if the picture makes you both want to talk.</li>
                </ul>
                <p className="mt-5">Before converting, make a copy and crop it. Straighten the horizon, brighten a dark image gently, and remove space that does not add anything. Avoid sharpening the picture aggressively; extra texture can turn into distracting marks.</p>
              </section>

              <section id="make-page" className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A93F7B]">Steps 2–5</p>
                <h2 className="mt-3 font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">Turn the picture into a coloring page</h2>
                <ol className="mt-8 ml-7 list-decimal space-y-8 marker:font-semibold marker:text-primary">
                  <li className="pl-1 sm:pl-2"><h3 className="text-xl font-semibold text-primary">Choose how you want to color</h3><p className="mt-2">If you want paper, use a converter or editor that lets you save a high-resolution image for printing. If you want to color on your phones together, choose a shared digital option. Lovla is built for the second approach: you can turn one of your photos into a coloring page and color it together in real time.</p></li>
                  <li className="pl-1 sm:pl-2"><h3 className="text-xl font-semibold text-primary">Upload the cropped copy</h3><p className="mt-2">Use a photo you have permission to upload. For private or sensitive pictures, read the tool’s privacy terms before continuing. A normal JPG, PNG, or phone photo is accepted by many tools, but check the specific service you choose.</p></li>
                  <li className="pl-1 sm:pl-2"><h3 className="text-xl font-semibold text-primary">Generate the outline</h3><p className="mt-2">Choose a clean or simple line-art style when that option exists. You want recognizable contours and open spaces, not every pore, leaf, and thread reproduced. If the result offers detail controls, begin around the middle and adjust after previewing.</p></li>
                  <li className="pl-1 sm:pl-2"><h3 className="text-xl font-semibold text-primary">Inspect the important parts</h3><p className="mt-2">Zoom in on eyes, mouths, hands, hairlines, and anything meaningful in the scene. A page can look convincing at thumbnail size while containing broken facial features or fused fingers. Regenerate, simplify, or try a tighter crop if the subject no longer feels like you.</p></li>
                  <li className="pl-1 sm:pl-2"><h3 className="text-xl font-semibold text-primary">Save, print, or start coloring</h3><p className="mt-2">For paper, keep the highest-resolution version, place it on US Letter paper, and use “fit to page” so no outlines are clipped. For digital coloring, open the finished page in your chosen app and agree on a loose palette before you begin.</p></li>
                </ol>
              </section>

              <section id="fix-results" className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12">
                <h2 className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">How to fix a messy coloring page</h2>
                <div className="mt-7 overflow-hidden rounded-xl border border-primary/10">
                  <div className="grid grid-cols-[0.9fr_1.3fr] bg-[#F0E6F0] px-4 py-3 text-sm font-semibold text-primary"><span>Problem</span><span>Try this</span></div>
                  {[
                    ["Faces look vague", "Crop closer and use a brighter original with fewer shadows."],
                    ["Too many tiny lines", "Reduce detail, simplify the background, or use a cleaner style."],
                    ["Dark areas become solid", "Lift the shadows in a copy of the photo before converting."],
                    ["Background overwhelms you", "Crop it out or choose a portrait with more subject separation."],
                    ["The page feels empty", "Keep one meaningful object, such as flowers, a café cup, or a landmark."],
                    ["Printed lines look faint", "Export at high resolution and print in grayscale or black and white."],
                  ].map(([problem, fix]) => <div key={problem} className="grid grid-cols-[0.9fr_1.3fr] gap-4 border-t border-primary/10 px-4 py-4 text-sm leading-6"><strong className="text-primary">{problem}</strong><span>{fix}</span></div>)}
                </div>
                <p className="mt-5">Do not spend the whole date fixing one stubborn image. Give a photo two attempts. If it still looks strange, choose another memory and keep the imperfect version for a laugh.</p>
              </section>

              <section id="date-night" className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12">
                <h2 className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">Make the coloring page feel like a date</h2>
                <p className="mt-5">Set a time and make the small choices together. Pick a five-color palette from the original photo, or ignore reality and give everything impossible colors. Split the page down the middle, alternate sections, or swap every five minutes.</p>
                <p className="mt-5">Try three questions while you color: What do you remember first when you see this photo? What happened immediately before it? What tiny detail would you want to remember ten years from now? Conversation has somewhere natural to go because the memory is sitting in front of you.</p>
                <p className="mt-5">Long-distance couples can keep a video or audio call open, but you do not have to fill every quiet moment. If you want more ideas with different time and energy levels, browse our <Link href="/blog/long-distance-relationship-activities" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">45 long-distance relationship activities</Link>.</p>
              </section>

              <section id="ideas" className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12">
                <h2 className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">Eight photos that make good date-night pages</h2>
                <ol className="mt-6 ml-7 list-decimal space-y-3 marker:font-semibold marker:text-primary">
                  <li>Your first photo together</li><li>A candid picture that still makes you laugh</li><li>A favorite trip or landmark</li><li>Your pet sitting between you</li><li>A dressed-up anniversary photo</li><li>An ordinary Sunday at home</li><li>A screenshot from a long-distance video call</li><li>A future place you want to visit together</li>
                </ol>
                <p className="mt-5">For the last idea, use a picture of the place rather than pretending you have already been there. Add yourselves later as stick figures if necessary. The charm is in making it yours.</p>
              </section>

              <section aria-labelledby="photo-faq" className="mt-12 border-t border-primary/10 pt-10">
                <h2 id="photo-faq" className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">Photo-to-coloring-page questions</h2>
                <div className="mt-7 space-y-7">
                  <div><h3 className="text-xl font-semibold text-primary">Can I turn a photo into a coloring page on my phone?</h3><p className="mt-2">Yes. A phone-based converter or coloring app can create line art from a picture in your camera roll. Crop and brighten the photo first if the subject is small or dark.</p></div>
                  <div><h3 className="text-xl font-semibold text-primary">What kind of photo works best?</h3><p className="mt-2">Use a sharp, well-lit image with one clear subject, visible faces, and a relatively simple background. Strong separation between the subject and background helps preserve recognizable outlines.</p></div>
                  <div><h3 className="text-xl font-semibold text-primary">Can I print a coloring page made from a picture?</h3><p className="mt-2">If your chosen tool lets you save the result, use the highest-resolution file and print with “fit to page” selected. Check the preview so the edges are not cut off.</p></div>
                  <div><h3 className="text-xl font-semibold text-primary">Can two people color the same page digitally?</h3><p className="mt-2">Yes, if the app supports shared coloring. Lovla lets couples color the same page together in real time, including while apart.</p></div>
                </div>
              </section>

              <section aria-labelledby="try-lovla" className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">Color a memory together</p>
                <h2 id="try-lovla" className="mt-3 font-helix text-3xl leading-tight text-primary">Turn your photo into tonight’s date.</h2>
                <p className="mt-4">Lovla turns couple photos into coloring pages you can color together in real time and keep in a shared coloring journal. Choose one memory and see what the two of you make from it.</p>
                <div className="mt-6"><AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" /></div>
                <Link href="/" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4">See how Lovla works <ArrowRight size={15} aria-hidden="true" /></Link>
              </section>
              <p className="border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">Written by <span className="font-semibold text-primary">The Lovla Team</span>. We make Lovla, a shared coloring journal for couples, and publish practical ideas for making time together feel more personal.</p>
            </div>
          </div>
        </article>
      </main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
    </div>
  );
}
