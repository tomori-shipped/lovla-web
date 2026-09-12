import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/constants/press-kit/brand";
import brandStyles from "./brand.module.css";
import mascotStyles from "./mascots/mascots.module.css";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import MarketingHeader from "@/components/common/marketing-header";
import Footer from "@/components/common/footer";
import styles from "../home.module.css";
export const metadata: Metadata = {
  title: "Press kit",
  description:
    "Meet Lovla. Download wordmarks, app icons, mascot stickers, and brand information for your story.",
  alternates: { canonical: "https://www.lovla.app/press-kit" },
};
export default function PressKit() {
  return (
    <div className={styles.site}>
      <MarketingHeader />
      <main>
        <section className={styles.pressHero}>
          <span className={styles.tag}>THE LOVLA PRESS KIT</span>
          <h1>A little more Lovla.</h1>
          <p>
            Everything you need to tell our story. Meet the coloring journal
            that helps couples turn shared memories into quality time.
          </p>
          <a
            href="/press-kit/lovla-press-kit.zip"
            download
            className={styles.primary}
          >
            Download press kit <Download size={17} />
          </a>
        </section>
        <section className={styles.section}>
          <div className={styles.pressFacts}>
            <div>
              <span className={styles.tag}>OUR STORY</span>
              <h2>
                Made for a<br />
                little more us.
              </h2>
              <p>
                Lovla is a shared coloring journal for couples. It turns
                favorite photos into coloring pages that partners can color
                together in real time, then save in a shared journal.
              </p>
              <p>
                Whether they’re sharing a sofa or living in different time
                zones, Lovla gives couples a simple way to create something
                together.
              </p>
            </div>
            <dl>
              <dt>PRODUCT</dt>
              <dd>Lovla</dd>
              <dt>CATEGORY</dt>
              <dd>Couples · Creativity · Shared coloring journal</dd>
              <dt>AVAILABILITY</dt>
              <dd>iOS</dd>
              <dt>WEBSITE</dt>
              <dd>
                <a href="https://www.lovla.app">lovla.app</a>
              </dd>
              <dt>MEDIA & GENERAL INQUIRIES</dt>
              <dd>
                <a href="mailto:Info@benekan.com">Info@benekan.com</a>
              </dd>
            </dl>
          </div>
        </section>
        <section className={styles.section} style={{ paddingTop: 0 }}>
          <span className={styles.tag}>READY FOR YOUR STORY</span>
          <h2>The asset collection.</h2>
          <div className={mascotStyles.teaser}>
            <div className={mascotStyles.teaserCopy}>
              <span className={mascotStyles.eyebrow}>MEET THE MASCOT</span>
              <h3>One little ghost.<br /><em>So many moods.</em></h3>
              <p>Our resident romantic has a whole collection of personalities. Find your favorite.</p>
              <Link href="/press-kit/mascots" className={mascotStyles.teaserLink}>Explore the mascot pack <ArrowRight size={17} /></Link>
            </div>
            <Link href="/press-kit/mascots" className={mascotStyles.teaserArt} aria-label="Explore all Lovla mascots">
              <Image src="/press-kit/mascots/original-love.webp" width={1024} height={1024} alt="Lovla ghost hugging a heart and holding a pink paintbrush" sizes="(max-width: 600px) 90vw, 50vw" />
              <span>a whole lot of personality.</span>
            </Link>
          </div>
          <div className={brandStyles.heading}>
            <span className={styles.tag}>THE SIGNATURE DETAILS</span>
            <h2>Make it unmistakably Lovla.</h2>
            <p>Our wordmark and app icon, dressed for light and dark backgrounds.</p>
          </div>
          <div className={brandStyles.grid}>
            {brandAssets.map((asset) => (
              <article key={asset.slug} className={brandStyles.card}>
                <div className={brandStyles.art} style={{ background: asset.bg }}>
                  <Image src={`/press-kit/brand/${asset.slug}.svg`} width={asset.kind === "wordmark" ? 560 : 240} height={240} alt={asset.title} className={asset.kind === "wordmark" ? brandStyles.wordmark : brandStyles.icon} />
                </div>
                <div className={brandStyles.copy}>
                  <h3>{asset.title}</h3>
                  <p>{asset.copy}</p>
                  <div className={brandStyles.downloads}>
                    <a href={`/press-kit/brand/${asset.slug}.svg`} download>SVG <ArrowDown size={16} /></a>
                    <a href={`/press-kit/brand/${asset.slug}.png`} download>PNG <ArrowDown size={16} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.pressNote}>Wordmark SVGs scale crisply at any size. App icon treatments preserve our existing mascot artwork. Choose PNG for quick use in articles and presentations.</p>
        </section>
        <section className={styles.section} style={{ paddingTop: 0 }}>
          <span className={styles.tag}>KEEP IT LOVLA</span>
          <h2>Our colors.</h2>
          <div className={styles.swatches}>
            <div
              className={styles.swatch}
              style={{ background: "#4b164c", color: "#fff" }}
            >
              Plum · #4B164C
            </div>
            <div className={styles.swatch} style={{ background: "#fdf7ff" }}>
              Accent · #FDF7FF
            </div>
            <div className={styles.swatch} style={{ background: "#f8f0fa" }}>
              Lavender · #F8F0FA
            </div>
          </div>
          <p className={styles.pressNote}>
            Write our name as Lovla. Preserve asset proportions and original
            colors. Please don’t imply a partnership or endorsement.
          </p>
        </section>
        <section className={styles.finalCta}>
          <h2>Let’s tell a good story.</h2>
          <p>Need something else for your article or feature?</p>
          <a href="mailto:Info@benekan.com" className={styles.primary}>
            Get in touch <Mail size={17} />
          </a>
        </section>
      </main>
      <div className={styles.footer}>
        <Footer compact />
      </div>
    </div>
  );
}
