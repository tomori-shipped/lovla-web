"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, Check } from "lucide-react";
import { mascots } from "@/constants/press-kit/mascots";
import styles from "./mascots.module.css";

export default function MascotGallery() {
  const [background, setBackground] = useState("paper");
  return <section aria-label="Mascot sticker collection">
    <div className={styles.collectionBar}>
      <p>THE COLLECTION <span>{mascots.length} designs</span></p>
      <fieldset className={styles.backgrounds}><legend>Try a background</legend>
        {[{ id: "paper", label: "Paper" }, { id: "pink", label: "Pink" }, { id: "plum", label: "Plum" }].map(({ id, label }) => <button key={id} type="button" aria-label={`${label} preview background`} aria-pressed={background === id} onClick={() => setBackground(id)} className={styles.swatch} data-color={id}>{background === id && <Check size={13} />}</button>)}
      </fieldset>
    </div>
    <div className={styles.grid} data-background={background}>
      {mascots.map((mascot, index) => <article className={styles.card} key={mascot.slug}>
        <div className={styles.artwork}>
          <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
          {mascot.isNew && <span className={styles.newBadge}>NEW MOOD</span>}
          <Image src={`/press-kit/mascots/${mascot.slug}.webp`} alt={mascot.alt} width={1024} height={1024} sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" preload={index < 3} className={styles.sticker} />
        </div>
        <div className={styles.caption}><div><h2>{mascot.title}</h2><p>{mascot.caption}</p></div>
          <div className={styles.downloads}>
            <a href={`/press-kit/mascots/${mascot.slug}.png`} download aria-label={`Download ${mascot.title} as PNG`}>PNG <ArrowDown size={14} /></a>
            <a href={`/press-kit/mascots/${mascot.slug}.webp`} download aria-label={`Download ${mascot.title} as WebP`}>WebP <ArrowDown size={14} /></a>
          </div>
        </div>
      </article>)}
    </div>
  </section>;
}
