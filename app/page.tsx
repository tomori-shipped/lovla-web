import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Heart,
  Palette,
  Sparkles,
} from "lucide-react";
import MarketingHeader from "@/components/common/marketing-header";
import { storeUrl } from "@/constants/landing/links";
import MarketingFooter from "@/components/common/marketing-footer";
import { AndroidWaitlist } from "@/components/landing/AndroidWaitlist";
import { waitlistConfig } from "@/constants/landing/waitlist.content";
import styles from "./home.module.css";
import Testimonials from "@/components/landing/Testimonials";
export const metadata: Metadata = {
  title: { absolute: "Lovla — A little more color. A little more us." },
  description:
    "Turn photos into coloring pages, color together in real time, and save your favorite moments in a shared journal. Lovla is made for two.",
  alternates: { canonical: "https://www.lovla.app" },
};
const faqs = [
  [
    "What is Lovla?",
    "Lovla is a shared coloring journal for couples. Turn your photos into coloring pages, create together, and keep your memories in one place.",
  ],
  [
    "Can we color together from different places?",
    "Yes. Color together in real time, whether you’re on the same sofa or in different time zones.",
  ],
  [
    "Do we both need the app?",
    "Both partners need Lovla to connect and color together. Download the app on your iPhones to get started.",
  ],
  [
    "What photos should we use?",
    "Choose a photo with a clear subject and good contrast. Couple selfies, holiday snapshots, and everyday moments are a lovely place to start.",
  ],
  [
    "Is Lovla available on Android?",
    "Lovla is available on iOS. Join the waitlist below for updates about Android and web.",
  ],
];
export default function Home() {
  return (
    <div className={styles.site}>
      <a href="#main-content" className={styles.skip}>
        Skip to content
      </a>
      <MarketingHeader />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.eyebrow}>
            <Heart size={13} /> A LITTLE MORE US TIME
          </div>
          <h1>
            A little more color.
            <br />A little more <span>us.</span>
          </h1>
          <p>
            Turn your favorite memories into something
            <br className={styles.desktopBreak} /> you make together. A coloring
            journal, made for two.
          </p>
          <div className={styles.actions}>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Download for iOS <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className={styles.secondary}>
              Meet Lovla <ArrowDown size={17} />
            </a>
          </div>
          <div className={styles.heroStage}>
            <Image
              src="/media/lovla-hand.png"
              width={1024}
              height={1536}
              alt="A hand holding Lovla, with a couple coloring their shared portrait"
              className={styles.hand}
              preload
              sizes="(max-width: 600px) 400px, 560px"
            />
            <div className={`${styles.floating} ${styles.floatLeft}`}>
              <div className={styles.floatIcon}>
                <Palette size={22} />
              </div>
              <div>
                <strong>Your photo. Your palette.</strong>
                <small>Make a memory your own.</small>
              </div>
            </div>
            <div className={`${styles.floating} ${styles.floatRight}`}>
              <div className={styles.floatIcon}>
                <Heart size={22} />
              </div>
              <div>
                <strong>Closer, wherever.</strong>
                <small>Color together in real time.</small>
              </div>
            </div>
            <span className={styles.stageNote}>
              Less scrolling.
              <br />
              More connecting.
            </span>
          </div>
        </section>
        <section id="features" className={styles.section}>
          <div className={styles.sectionIntro}>
            <span className={styles.tag}>
              <Sparkles size={14} /> Your kind of quality time
            </span>
            <h2>
              Small moments.
              <br />A colorful connection.
            </h2>
            <p>
              A new way to spend time together.
              <br />
              No perfect plans. No artistic talent required.
            </p>
          </div>
          <div className={styles.benefitGrid}>
            {[
              {
                image: "couple-cafe",
                alt: "A couple laughing together at a sunlit café",
                label: "THE LITTLE THINGS",
                title: "Turn a memory into a moment.",
                text: "Your favorite photos. A new way to enjoy them together.",
              },
              {
                image: "couple-home",
                alt: "A couple sharing a quiet moment on their sofa",
                label: "YOUR KIND OF DATE NIGHT",
                title: "Less scrolling. More us time.",
                text: "Find your rhythm on one shared canvas, wherever you are.",
              },
              {
                image: "couple-coast",
                alt: "A couple smiling at each other on a coastal walk",
                label: "SOMETHING TO KEEP",
                title: "A little collection of your love.",
                text: "Keep the pages you make in a journal that’s just yours.",
              },
            ].map((benefit) => (
              <article key={benefit.image} className={styles.benefitCard}>
                <Image
                  src={`/media/${benefit.image}.webp`}
                  fill
                  alt={benefit.alt}
                  sizes="(max-width: 650px) 100vw, (max-width: 900px) 33vw, 400px"
                />
                <div className={styles.benefitCopy}>
                  <span>{benefit.label}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className={styles.memorySpotlight}
          aria-labelledby="memory-title"
        >
          <div className={styles.sectionIntro}>
            <span className={styles.tag}>
              <Palette size={14} /> A MEMORY, REIMAGINED
            </span>
            <h2 id="memory-title">
              Your favorite days.
              <br />
              All over again.
            </h2>
            <p>
              The big adventures. The in-between moments.
              <br />
              Bring them back to life, one color at a time.
            </p>
          </div>
          <figure className={styles.festivalArtwork}>
            <Image
              src="/media/lovla-festival.png"
              width={1920}
              height={1080}
              alt="A couple’s festival selfie reimagined as a partially colored illustration"
              sizes="(max-width: 700px) 100vw, 1180px"
            />
            <figcaption>
              <span>A day to remember.</span>
              <span>A page to make together.</span>
            </figcaption>
          </figure>
        </section>
        <section
          id="how-it-works"
          className={`${styles.section} ${styles.howSection}`}
        >
          <div>
            <span className={styles.tag}>
              <Heart size={14} /> From photo to quality time
            </span>
            <h2>
              Your next date night?
              <br />
              Already in your
              <br />
              camera roll.
            </h2>
            <p className={styles.bodyCopy}>
              A few minutes. Your favorite person.
              <br />
              Something that’s just yours.
            </p>
            <a
              className={styles.textLink}
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start making memories <ArrowRight size={18} />
            </a>
          </div>
          <ol className={styles.steps}>
            {[
              [
                "Pick a memory.",
                "Choose a photo that makes you both smile. Lovla turns it into a coloring page.",
              ],
              [
                "Make it colorful.",
                "Connect with your partner, pick your colors, and bring your page to life together.",
              ],
              [
                "Keep it close.",
                "Save your creation in your shared journal. Your next little tradition starts here.",
              ],
            ].map(([title, copy], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <Testimonials />
        <section className={`${styles.section} ${styles.faqSection}`}>
          <div>
            <span className={styles.tag}>A LITTLE CLARITY</span>
            <h2>Glad you asked.</h2>
            <p>
              Still curious?{" "}
              <Link href="/contact-us" className={styles.inlineLink}>
                Say hello.
              </Link>
            </p>
          </div>
          <div className={styles.faqs}>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <div className={styles.waitlist}>
          <AndroidWaitlist config={waitlistConfig} />
        </div>
        <section className={styles.downloadPanel}>
          <div className={styles.downloadCopy}>
            <span className={styles.tag}>
              <Heart size={14} /> MADE FOR YOUR KIND OF LOVE
            </span>
            <h2>
              Make time.
              <br />
              Make something
              <br />
              together.
            </h2>
            <p>
              Your memories. Your colors. Your person.
              <br />
              Your next little tradition starts with Lovla.
            </p>
            <div className={styles.downloadActions}>
              <a
                className={styles.primary}
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Lovla <ArrowRight size={18} />
              </a>
              <a className={styles.downloadSecondary} href="#features">
                Explore the app <ArrowUpRight size={18} />
              </a>
            </div>
            <small>Available on iOS. Made for two.</small>
          </div>
          <div className={styles.downloadMascot}>
            <Image
              src="/media/lovla-mascot-paintbrush.png"
              width={1183}
              height={1329}
              alt="Lovla’s smiling mascot holding a pink paintbrush"
              sizes="(max-width: 650px) 300px, 430px"
            />
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
