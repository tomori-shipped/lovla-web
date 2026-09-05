import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/footer";
import { activitiesPost } from "@/constants/blog/long-distance-activities";

const posts = [
  {
    title: activitiesPost.title,
    excerpt: activitiesPost.excerpt,
    href: `/blog/${activitiesPost.slug}`,
    image: activitiesPost.image,
    alt: activitiesPost.imageAlt,
    date: activitiesPost.displayDate,
    dateTime: activitiesPost.date,
    readingMinutes: activitiesPost.readingMinutes,
    category: "Long-distance dates",
  },
  {
  title: "9 Best Apps for Couples in 2026 That Are Actually Useful",
  excerpt:
    "A practical, honest comparison of couples apps for better conversations, shared plans, creative dates, everyday photos, and long-distance quality time.",
  href: "/blog/best-apps-for-couples",
  image: "/blog/best-apps-for-couples-2026.webp",
  date: "September 4, 2026",
  dateTime: "2026-09-04",
  alt: "Illustration of a couple choosing relationship apps together",
  readingMinutes: 12,
  category: "Couples guides",
  },
];

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
          <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
          <article key={post.href} className="overflow-hidden rounded-2xl border border-primary/10 bg-white">
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
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#A93F7B]">{post.category}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#725f73]">
                  <time dateTime={post.dateTime}>{post.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="mt-5 font-helix text-3xl leading-tight tracking-[-0.02em] text-primary">
                  {post.title}
                </h2>
                <p className="mt-5 leading-7 text-[#4f4350]">{post.excerpt}</p>
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
