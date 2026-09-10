"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { PauseIcon as Pause } from "@phosphor-icons/react/dist/ssr/Pause";
import { PlayIcon as Play } from "@phosphor-icons/react/dist/ssr/Play";
import { QuotesIcon as Quote } from "@phosphor-icons/react/dist/ssr/Quotes";
import styles from "@/app/home.module.css";

// Verbatim excerpts from the US App Store listing, checked September 8, 2026.
// The first excerpt is the review title. No invented names or customer claims.
const reviewUrl =
  "https://apps.apple.com/us/app/lovla-couples-coloring-games/id6758548454?see-all=reviews";
const reviews = [
  { quote: "Great bonding app!", author: "Amourcameron", avatar: "/media/sample-lifestyle-1.png" },
  { quote: "I love the coloring experience.", author: "Reairria", avatar: "/media/sample-lifestyle-2.png" },
  {
    quote: "Super cool to able to laugh and enjoying coloring with my gf.",
    author: "kkkokooplpp",
    avatar: "/media/sample-lifestyle-3.png",
  },
];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.testimonialIntro}>
        <span className={styles.tag}>LITTLE NOTES. LOTS OF LOVE.</span>
        <h2 id="testimonials-title">
          Better together.
          <br />
          Ask <em>our couples.</em>
        </h2>
        <p>
          A few words from people making
          <br />a little more time for each other.
        </p>
        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.textLink}
        >
          Read the App Store reviews <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          type="button"
          className={styles.reviewPause}
          aria-pressed={paused}
          onClick={() => setPaused((previous) => !previous)}
        >
          {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}{" "}
          {paused ? "Play reviews" : "Pause reviews"}
        </button>
        <small className={styles.portraitNote}>Portraits are illustrative.</small>
      </div>
      <div
        className={styles.reviewWindow}
        data-paused={paused}
        role="region"
        aria-label="Lovla user reviews"
        tabIndex={0}
      >
        <div className={styles.reviewTrack}>
          {[0, 1].map((copy) => (
            <div
              className={styles.reviewGroup}
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {reviews.map((review) => (
                <figure className={styles.reviewCard} key={review.author}>
                  <Quote size={26} weight="duotone" aria-hidden="true" />
                  <blockquote>{review.quote}</blockquote>
                  <figcaption>
                    <Image
                      src={review.avatar}
                      width={48}
                      height={48}
                      sizes="48px"
                      alt=""
                      className={styles.reviewAvatar}
                    />
                    <div>
                      <strong>{review.author}</strong>
                      <span>App Store</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
