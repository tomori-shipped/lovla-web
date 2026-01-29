import { footerLinks, socialLinks } from "@/constants/footer.constant";
import Link from "next/link";
import FooterMascot from "@/assets/svg/footer-mascot.svg";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="flex flex-row items-center justify-between h-fit">
      <div className="flex flex-col justify-center mt-14 h-full">
        <div className="flex flex-row items-center gap-12">
          {footerLinks.map((link) => (
            <Link
              className="text-primary font-semibold underline text-sm"
              key={link.href}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center gap-8 mt-14">
          <div className="text-sm text-primary">
            &copy; {currentYear} Lovla.
          </div>
          <div className="text-sm text-primary">Benekan Technologies LLC</div>
          <div className="flex flex-row items-center gap-3">
            {socialLinks.map((link) => (
              <Link key={link.href} className="no-underline" href={link.href}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Image src={FooterMascot} alt="mascot" width={400.13} height={600.2} />
      </div>
    </footer>
  );
};

export default Footer;
