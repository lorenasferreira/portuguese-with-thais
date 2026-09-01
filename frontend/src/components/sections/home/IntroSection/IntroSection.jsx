import styles from "./IntroSection.module.css";

function IntroSection() {
  return (
    <section className={styles.intro} id="about">
      <div className={styles.container}>
        <div
          className={styles.originLabel}
          aria-label="Established in 2024, São Paulo"
        >
          <span>TEACHING SINCE 2015</span>
          <span> SÃO PAULO</span>
        </div>
        <div className={styles.headingColumn}>
          <h2 className={styles.title}>
            Language is the doorway.
            <span>Culture is the journey.</span>
          </h2>
        </div>

        <div className={styles.textColumn}>
          <p>
            Learning Brazilian Portuguese is more than studying grammar. It's
            about understanding how people think, speak, celebrate and connect
            in everyday life.
          </p>

          <p>
            Every lesson combines language, culture and authentic conversation,
            so you don't just learn Portuguese — you experience it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
