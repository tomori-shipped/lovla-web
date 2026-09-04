import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/footer";

const post = {
  title: "9 Best Apps for Couples in 2026 That Are Actually Useful",
  excerpt:
    "A practical, honest comparison of couples apps for better conversations, shared plans, creative dates, everyday photos, and long-distance quality time.",
  href: "/blog/best-apps-for-couples",
  image: "/blog/best-apps-for-couples-2026.webp",
  date: "September 4, 2026",
};

export const metadata: Metadata = {
  title: "Relationship Ideas & Advice",
  description:
    "Practical relationship ideas, long-distance date inspiration, and honest couples-app guides from The Lovla Team.",
  alternates: {
    canonical: "https://www.lovla.app/blog",
  },
  openGraph: {
    title: "Relationship Ideas & Advice | Lovla",
    description:
      "Practical relationship ideas, long-distance date inspiration, and honest couples-app guides from The Lovla Team.",
    url: "https://www.lovla.app/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-accent text-[#171217]">
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
            Thoughtful date ideas, honest app guides, and small rituals that
            make a relationship feel like yours—wherever you both happen to be.
          </p>
        </div>

        <section className="mt-12" aria-labelledby="latest-posts">
          <h2 id="latest-posts" className="sr-only">
            Latest posts
          </h2>
          <article className="overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-[0_20px_60px_rgba(75,22,76,0.08)]">
            <Link href={post.href} className="group grid md:grid-cols-[1.15fr_0.85fr]">
              <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:min-h-[410px]">
                <Image
                  src={post.image}
                  alt="Illustration of a couple choosing relationship apps together"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#725f73]">
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>12 min read</span>
                </div>
                <h2 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                  {post.title}
                </h2>
                <p className="mt-5 leading-7 text-[#4f4350]">{post.excerpt}</p>
                <span className="mt-8 w-fit border-b-2 border-[#D98AB8] pb-1 font-bold text-primary">
                  Read the guide
                </span>
              </div>
            </Link>
          </article>
        </section>
      </main>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Footer />
      </div>
    </div>
  );
}
