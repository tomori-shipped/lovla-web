import InstagramIcon from "@/assets/svg/instagram";
import LinkedIn from "@/assets/svg/linkedin";
import EmailIcon from "@/assets/svg/mail";

interface FooterLink {
  title: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

export const footerLinks: FooterLink[] = [
  {
    title: "Contact Us",
    href: "/contact-us",
  },

  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },

  {
    title: "Terms and Conditions",
    href: "/terms-and-conditions",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/lovla.app",
  },
  {
    icon: <EmailIcon />,
    href: "mailto:Info@benekan.com",
  },
];
