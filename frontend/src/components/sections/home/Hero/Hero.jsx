import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          Brazilian Portuguese, Beyond Grammar.
        </span>

        <h1 className={styles.title}>
          Build your voice
          <span>in Brazilian Portuguese.</span>
        </h1>

        <p className={styles.description}>
          Personalized Brazilian Portuguese lessons that combine language,
          culture and real conversations, helping you feel at home wherever
          Portuguese is spoken.
        </p>

        <div className={styles.actions}>
          <Link to="/book-a-lesson?plan=trial#booking" className={styles.primaryButton}>
            Book a Trial
          </Link>

          <a href="#method" className={styles.secondaryButton}>
            Discover the Method
          </a>
        </div>
      </div>

      <div className={styles.heroImage} data-scroll-image>
        <img
          src="/images/home/thais-portrait-1680.webp"
          srcSet="/images/home/thais-portrait-352.webp 352w,
            /images/home/thais-portrait-640.webp 640w,
            /images/home/thais-portrait-960.webp 960w,
            /images/home/thais-portrait-1200.webp 1200w,
            /images/home/thais-portrait-1680.webp 1680w"
          sizes="(max-width: 900px) max(345px, calc(100vw - max(2.8rem, 8vw))), (max-width: 1440px) max(340px, 40.375vw), 581px"
          width="1680"
          height="2240"
          loading="eager"
          fetchPriority="high"
          alt="Thais, Brazilian Portuguese teacher"
        />
      </div>
    </section>
  );
}

export default Hero;
