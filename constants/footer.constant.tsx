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
    title: "Press",
    href: "/press",
  },

  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },

  {
    title: "Terms and Condition of use",
    href: "/terms-and-conditions",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/lovlaofficial/",
  },
  {
    icon: <LinkedIn />,
    href: "https://www.linkedin.com/company/lovla/",
  },
  {
    icon: <EmailIcon />,
    href: "mailto:info@lovla.com",
  },
];
