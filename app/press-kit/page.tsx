import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import MarketingHeader from "@/components/common/marketing-header";
import Footer from "@/components/common/footer";
import styles from "../home.module.css";
export const metadata: Metadata = {
  title: "Press kit",
  description:
    "Meet Lovla. Download product screenshots, the Lovla mascot, and brand information for your story.",
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
          <div className={styles.pressAssets}>
            {[
              {
                title: "Lovla mascot",
                src: "/press-kit/lovla-mascot.svg",
                copy: "Our original brand mascot. Scalable SVG with a transparent background.",
              },
              {
                title: "Color together",
                src: "/screenshots/lovla-shared-coloring.webp",
                copy: "Product screenshot showing the shared coloring experience.",
              },
              {
                title: "Photo to art",
                src: "/screenshots/lovla-photo-to-art.webp",
                copy: "Product screenshot showing the photo-to-coloring experience.",
              },
              {
                title: "Product campaign image",
                src: "/media/lovla-hand.png",
                copy: "AI-generated hand-held phone illustration based on the Lovla interface. A marketing mockup, rather than an exact product screenshot.",
              },
            ].map((asset) => (
              <article key={asset.title} className={styles.assetCard}>
                <Image
                  src={asset.src}
                  width={600}
                  height={600}
                  alt={asset.title}
                  className={styles.assetImage}
                />
                <h3>{asset.title}</h3>
                <p>{asset.copy}</p>
                <a href={asset.src} download>
                  Download asset <ArrowDown size={16} />
                </a>
              </article>
            ))}
          </div>
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
            colors. Please don’t imply a partnership or endorsement. Label the
            campaign mockup as illustrative when used to describe the product
            interface.
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
