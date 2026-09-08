"use client";

import { useState } from "react";
import { ArrowUpRight, Pause, Play, Quote } from "lucide-react";
import styles from "@/app/home.module.css";

// Verbatim excerpts from the US App Store listing, checked September 8, 2026.
// The first excerpt is the review title. No invented names or customer claims.
const reviewUrl =
  "https://apps.apple.com/us/app/lovla-couples-coloring-games/id6758548454?see-all=reviews";
const reviews = [
  { quote: "Great bonding app!", author: "Amourcameron" },
  { quote: "I love the coloring experience.", author: "Reairria" },
  {
    quote: "Super cool to able to laugh and enjoying coloring with my gf.",
    author: "kkkokooplpp",
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
          Ask our couples.
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
          Read the App Store reviews <ArrowUpRight size={16} />
        </a>
        <button
          type="button"
          className={styles.reviewPause}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}{" "}
          {paused ? "Play reviews" : "Pause reviews"}
        </button>
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
                  <Quote size={23} aria-hidden="true" />
                  <blockquote>{review.quote}</blockquote>
                  <figcaption>
                    <strong>{review.author}</strong>
                    <span>App Store review excerpt</span>
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
