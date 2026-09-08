import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "@/app/home.module.css";

export default function MarketingFooter() {
  return (
    <footer className={styles.darkFooter}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerAbout}>
            <Link
              href="/"
              aria-label="Lovla home"
              className={styles.footerLogo}
            >
              Lovla.
            </Link>
            <p>
              A little more color.
              <br />A little more us.
              <br />A coloring journal, made for two.
            </p>
            <a href="mailto:Info@benekan.com">
              Info@benekan.com <ArrowUpRight size={14} />
            </a>
          </div>
          <nav aria-label="Explore Lovla">
            <span>Explore</span>
            <Link href="/#features">Features</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/press-kit">Press kit</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <nav aria-label="Connect with Lovla">
            <span>Stay close</span>
            <a
              href="https://www.instagram.com/lovla.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={14} />
            </a>
            <Link href="/contact-us">
              Contact us <ArrowUpRight size={14} />
            </Link>
          </nav>
        </div>
        <div className={styles.footerLegal}>
          <p>© {new Date().getFullYear()} Lovla. Benekan Technologies LLC.</p>
          <div>
            <Link href="/terms-and-conditions">Terms & conditions</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </div>
        </div>
        <div className={styles.footerWordmark} aria-hidden="true">
          Lovla.
        </div>
      </div>
    </footer>
  );
}
