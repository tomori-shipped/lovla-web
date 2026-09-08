"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { storeUrl } from "@/constants/landing/links";
import styles from "@/app/home.module.css";

const links = [
  ["Features", "/#features"],
  ["How it works", "/#how-it-works"],
  ["Press kit", "/press-kit"],
  ["Blog", "/blog"],
];

export default function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className={styles.headerShell} data-scrolled={scrolled}>
      <div className={styles.header}>
        <Link href="/" aria-label="Lovla home" className={styles.logo}>
          Lovla.
        </Link>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={styles.navLink}>
              <span className={styles.navLabel}>
                <span>{label}</span>
                <span aria-hidden="true">{label}</span>
              </span>
            </Link>
          ))}
        </nav>
        <a
          className={styles.navCta}
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Lovla <ArrowUpRight size={16} />
        </a>
        <details
          ref={menuRef}
          className={styles.mobileMenu}
          onKeyDown={(event) => {
            if (event.key === "Escape" && menuRef.current)
              menuRef.current.open = false;
          }}
        >
          <summary aria-label="Open navigation">
            <Menu size={22} />
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => {
                  if (menuRef.current) menuRef.current.open = false;
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
