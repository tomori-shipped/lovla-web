import { blogPosts as posts } from "@/constants/blog";
import StructuredData from "@/components/seo/StructuredData";
import { SITE_URL } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/footer";

export const metadata = pageMetadata(
  "Couples Date Ideas, Creative Activities & App Guides",
  "Find creative date ideas, long distance activities, couples app comparisons, and ways to make shared memories with Lovla.",
  "/blog",
);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-accent text-[#171217]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${SITE_URL}/blog#webpage`,
          url: `${SITE_URL}/blog`,
          name: "Lovla Blog: Couples Date Ideas and App Guides",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: post.title,
              url: `${SITE_URL}${post.href}`,
            })),
          },
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
          <Link
            href="/"
            className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Explore Lovla
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#A93F7B]">
            The Lovla Blog
          </p>
          <h1 className="mt-4 font-helix text-5xl leading-[0.98] text-primary sm:text-6xl md:text-7xl">
            More ways to feel close.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f4350]">
            For the nights when “what should we do?” needs a better answer. Find
            something to try, something to laugh about, and a little more time
            for each other.
          </p>
        </div>
        <section className="mt-12" aria-labelledby="latest-posts">
          <h2 id="latest-posts" className="sr-only">
            Latest posts
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post.href}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-white"
              >
                <Link href={post.href} className="group block h-full">
                  <div className="relative aspect-[1672/941] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      preload={index === 0}
                      sizes="(max-width: 768px) 100vw, 540px"
                      className="object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col p-6 sm:p-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#A93F7B]">
                      {post.category}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#725f73]">
                      <time dateTime={post.dateTime}>{post.date}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-5 font-helix text-3xl leading-tight tracking-[-0.02em] text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-5 leading-7 text-[#4f4350]">
                      {post.excerpt}
                    </p>
                    <span className="mt-8 w-fit border-b-2 border-[#D98AB8] pb-1 font-bold text-primary">
                      Read the guide
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Footer compact />
      </div>
    </div>
  );
}
