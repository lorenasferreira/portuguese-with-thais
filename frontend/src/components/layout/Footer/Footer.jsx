import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import SectionContainer from "../../common/SectionContainer/SectionContainer";

import styles from "./Footer.module.css";

const navigationLinks = [
  { label: "About", href: "/about" },
  { label: "Lessons", href: "/lessons" },
  { label: "Method", href: "/method" },
  { label: "The Brazilian Soul", href: "/the-brazilian-soul" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: <FaInstagram aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <FaLinkedinIn aria-hidden="true" />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <FaYoutube aria-hidden="true" />,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <SectionContainer>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              Portuguese with Thaís
            </a>

            <p className={styles.tagline}>
              Brazilian Portuguese,
              <span>beyond grammar.</span>
            </p>

            <p className={styles.location}>
              Made in São Paulo. Shared from Paris.
            </p>
          </div>

          <div className={styles.navigationArea}>
            <nav aria-label="Footer navigation">
              <p className={styles.columnTitle}>Explore</p>

              <ul className={styles.linkList}>
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className={styles.columnTitle}>Start learning</p>

              <a href="/book-a-lesson" className={styles.bookingLink}>
                Book a lesson
              </a>

              <a
                href="mailto:hello@portuguesewiththais.com"
                className={styles.email}
              >
                hello@portuguesewiththais.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Portuguese with Thaís</p>

          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className={styles.credit}>
            Website by{" "}
            <a
              href="https://lorenaferreira.dev"
              target="_blank"
              rel="noreferrer"
            >
              Lorena Ferreira
            </a>
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}

export default Footer;
