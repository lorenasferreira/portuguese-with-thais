import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          Brazilian Portuguese, Beyond Grammar.
        </span>

        <h1 className={styles.title}>
          Unlock the soul
          <span>of Brazil.</span>
        </h1>

        <p className={styles.description}>
          Personalized Brazilian Portuguese lessons that combine language,
          culture and real conversations — helping you feel at home wherever
          Portuguese is spoken.
        </p>

        <div className={styles.actions}>
          <a href="/book-a-lesson" className={styles.primaryButton}>
            Book a Trial
          </a>

          <a href="#method" className={styles.secondaryButton}>
            Discover the Method
          </a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <img
          src="/images/home/hero-thais-1680.webp"
          srcSet="/images/home/hero-thais-640.webp 640w, /images/home/hero-thais-960.webp 960w, /images/home/hero-thais-1680.webp 1680w"
          sizes="(max-width: 900px) max(345px, calc(100vw - max(2.8rem, 8vw))), (max-width: 1440px) max(465px, 40.4vw), 600px"
          width="2316"
          height="3088"
          loading="eager"
          alt="Thais, Brazilian Portuguese teacher"
        />
      </div>
    </section>
  );
}

export default Hero;
