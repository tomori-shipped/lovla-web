import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";
import {
  lovlaStories,
  storyImage,
  storyDate,
  storyMinutes,
} from "@/constants/blog/lovla-september-posts";

export const dynamicParams = false;
export function generateStaticParams() {
  return lovlaStories.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
const findStory = (slug: string) =>
  lovlaStories.find((post) => post.slug === slug);
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = findStory((await params).slug);
  if (!post) notFound();
  const url = `https://www.lovla.app/blog/${post.slug}`;
  const image = `https://www.lovla.app${storyImage(post)}`;
  return {
    title: post.seoTitle,
    description: post.description,
    authors: [{ name: "The Lovla Team" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? "2026-09-19",
      authors: ["The Lovla Team"],
      images: [{ url: image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

export default async function LovlaStoryPage({ params }: Props) {
  const post = findStory((await params).slug);
  if (!post) notFound();
  const canonical = `https://www.lovla.app/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updatedDate ?? "2026-09-19",
        image: `https://www.lovla.app${storyImage(post)}`,
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
            name: post.title,
            item: canonical,
          },
        ],
      },
    ],
  };
  return (
    <div className="min-h-screen bg-[#FDFBFD] text-[#171217]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
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
              {post.category}
            </p>
            <h1 className="mt-5 font-helix text-[38px] leading-[1.08] tracking-[-0.03em] text-primary sm:text-5xl md:text-[60px]">
              {post.title}
            </h1>
            <p
              data-article-answer
              className="mt-6 text-lg leading-8 text-[#4F4350]"
            >
              {post.answer}
            </p>
            <p className="mt-5 text-base leading-7 text-[#6F5B6D]">
              {post.featureLine}
            </p>
            <AppStoreButton className="mt-5" />
            <p className="mt-3 text-xs leading-6 text-[#786577]">
              For iPhone and iPad. Check the App Store for current subscription
              details.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-sm text-[#786577]">
              <span>By The Lovla Team</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{storyDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{storyMinutes(post)} min read</span>
            </div>
          </header>
          <figure className="mx-auto max-w-5xl px-4 sm:px-8">
            <Image
              src={storyImage(post)}
              alt={post.imageAlt}
              width={1672}
              height={941}
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
                  In this guide
                </p>
                <ul className="mt-4 space-y-3">
                  {post.sections.map((section, i) => (
                    <li key={section.title}>
                      <a
                        href={`#section-${i + 1}`}
                        className="block text-sm leading-6 text-primary hover:underline"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]">
              {post.sections.map((section, i) => (
                <section
                  key={section.title}
                  id={`section-${i + 1}`}
                  className={
                    i
                      ? "mt-12 scroll-mt-8 border-t border-primary/10 pt-9"
                      : "scroll-mt-8"
                  }
                >
                  <h2 className="font-helix text-3xl leading-tight text-primary">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p key={p} className="mt-5">
                      {p}
                    </p>
                  ))}
                  {section.items && (
                    <ul className="mt-5 list-disc space-y-3 pl-6">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.links && (
                    <ul className="mt-5 space-y-2 text-sm">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {post.screenshot && i === 2 && (
                    <figure className="mt-8 rounded-2xl bg-[#F3EBF4] p-6">
                      <Image
                        src={post.screenshot}
                        alt="Lovla feature artwork showing the shared photo coloring canvas"
                        width={600}
                        height={1299}
                        sizes="260px"
                        className="mx-auto h-auto w-full max-w-[260px] rounded-xl"
                      />
                      <figcaption className="mt-4 text-center text-xs leading-5 text-[#786577]">
                        Lovla shared coloring feature artwork.
                      </figcaption>
                    </figure>
                  )}
                </section>
              ))}
              <section className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8">
                <h2 className="font-helix text-3xl leading-tight text-primary">
                  Make a little more time for us.
                </h2>
                <p className="mt-4">{post.featureLine}</p>
                <AppStoreButton className="mt-6" />
              </section>
              <nav
                aria-label="Related stories"
                className="border-t border-primary/10 pt-7"
              >
                <h2 className="font-helix text-2xl text-primary">
                  Something for your next date
                </h2>
                <ul className="mt-4 space-y-3">
                  {post.related.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="mt-10 text-sm leading-7 text-[#786577]">
                Written by The Lovla Team. Find current product and access
                details on{" "}
                <a
                  href="https://apps.apple.com/us/app/lovla-couples-coloring-games/id6758548454"
                  className="underline underline-offset-4"
                >
                  Lovla’s App Store page
                </a>
                .
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
