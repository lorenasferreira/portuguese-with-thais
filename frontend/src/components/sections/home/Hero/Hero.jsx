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
          <a href="#booking" className={styles.primaryButton}>
            Book a Trial
          </a>

          <a href="#lessons" className={styles.secondaryButton}>
            Discover the Method
          </a>
        </div>
      </div>

      <div
        className={styles.imagePlaceholder}
        role="img"
        aria-label="Placeholder for a portrait of Thais"
      >
        <span>Photo placeholder</span>
      </div>
    </section>
  );
}

export default Hero;
