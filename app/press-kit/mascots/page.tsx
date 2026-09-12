import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import MarketingHeader from "@/components/common/marketing-header";
import Footer from "@/components/common/footer";
import MascotGallery from "./mascot-gallery";
import { mascots } from "@/constants/press-kit/mascots";
import site from "@/app/home.module.css";
import styles from "./mascots.module.css";

export const metadata: Metadata = {
  title: "Mascot sticker pack",
  description: "A little ghost. A lot of feelings. Explore and download the Lovla mascot sticker collection with transparent backgrounds.",
  alternates: { canonical: "https://www.lovla.app/press-kit/mascots" },
};

export default function MascotsPage() {
  return <div className={site.site}>
    <MarketingHeader />
    <main className={styles.main}>
      <Link href="/press-kit" className={styles.back}><ArrowLeft size={16} /> Back to press kit</Link>
      <header className={styles.intro}>
        <div><span className={styles.eyebrow}>THE LOVLA STICKER CLUB</span>
          <h1>Little ghost.<br /><em>Big feelings.</em></h1>
          <p>Hopeless romantic. Part-time artist. Full-time mood.<br className={styles.desktopBreak} /> Meet every side of our favorite little ghost.</p>
        </div>
        <div className={styles.packCallout}>
          <span className={styles.packNumber}>{String(mascots.length).padStart(2, "0")}</span>
          <span>personalities. one Lovla.</span>
          <a className={styles.downloadPack} href="/press-kit/lovla-mascot-sticker-pack.zip" download><Download size={17} /> Get the whole pack</a>
          <small>Transparent PNGs + WebP · ZIP</small>
        </div>
      </header>
      <MascotGallery />
      <section className={styles.usage} aria-labelledby="using-mascots">
        <div><span className={styles.eyebrow}>A LITTLE NOTE</span><h2 id="using-mascots">Keep the love intact.</h2></div>
        <p>Made for stories, features, and a little extra personality. Keep our mascot’s colors and proportions, credit Lovla, and please don’t imply a partnership or endorsement. Need something special? <a href="mailto:Info@benekan.com">Say hello.</a></p>
        <a href="/press-kit/lovla-mascot.svg" download className={styles.original}>Original mascot SVG <Download size={16} /></a>
      </section>
    </main>
    <div className={site.footer}><Footer compact /></div>
  </div>;
}
