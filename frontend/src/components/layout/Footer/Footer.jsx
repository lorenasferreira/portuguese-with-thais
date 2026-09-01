import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

import SectionContainer from "../../common/SectionContainer/SectionContainer";

import styles from "./Footer.module.css";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Lessons", href: "/lessons" },
  { label: "Method", href: "/method" },
  { label: "The Brazilian Soul", href: "/the-brazilian-soul" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/portuguesewiththais/",
    icon: <FaInstagram aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thais-d-26894577",
    icon: <FaLinkedinIn aria-hidden="true" />,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <SectionContainer>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              Portuguese with Thais
            </Link>

            <p className={styles.tagline}>
              Brazilian Portuguese,
              <span>beyond grammar.</span>
            </p>
          </div>

          <div className={styles.navigationArea}>
            <nav aria-label="Footer navigation">
              <p className={styles.columnTitle}>Explore</p>

              <ul className={styles.linkList}>
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className={styles.columnTitle}>Start learning</p>

              <Link to="/book-a-lesson" className={styles.bookingLink}>
                Book a lesson
              </Link>

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
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Portuguese with Thais</p>

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
