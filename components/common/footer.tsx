import { footerLinks, socialLinks } from "@/constants/footer.constant";
import Link from "next/link";
import FooterMascot from "@/assets/svg/footer-mascot.svg";
import Image from "next/image";

/**
 * Footer component with navigation links, social media, and mascot.
 * Responsive design that stacks on mobile and displays side-by-side on desktop.
 */
const Footer = ({ compact = false }: { compact?: boolean }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  if (compact) {
    return (
      <footer className="border-t border-primary/12 pb-8 pt-8 text-primary">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <Link href="/" aria-label="Lovla home" className="w-fit font-helix text-3xl tracking-[-1px]">Lovla.</Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-4 text-xs">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-1 hover:underline underline-offset-4">{link.title}</Link>
            ))}
          </nav>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#786577]">
          <p>&copy; {currentYear} Lovla. Benekan Technologies LLC.</p>
          <a href="https://www.instagram.com/lovla.app" target="_blank" rel="noopener noreferrer" className="py-1 hover:text-primary">Find us on Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    );
  }

  return (
    <footer className="flex h-fit flex-col items-center justify-between gap-8 md:flex-row md:items-end">
      <div className="flex h-full flex-col items-center justify-center md:mt-14 md:items-start md:order-first">
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-12">
          {footerLinks.map((link) => (
            <Link
              className="text-sm font-semibold text-primary underline"
              key={link.href}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 md:mt-14 md:flex-row md:flex-nowrap md:items-center md:gap-4 lg:gap-8">
          <div className="flex-shrink-0 text-sm text-primary">
            &copy; {currentYear} Lovla.
          </div>
          <div className="flex-shrink-0 text-sm text-primary">
            Benekan Technologies LLC
          </div>
          <div className="flex flex-row items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                className="no-underline transition-opacity hover:opacity-70"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="order-last w-[200px] md:w-auto md:flex-shrink-0">
        <Image
          src={FooterMascot}
          alt="Lovla mascot"
          width={400.13}
          height={600.2}
          className="h-auto w-full md:w-[300px] lg:w-[400px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
