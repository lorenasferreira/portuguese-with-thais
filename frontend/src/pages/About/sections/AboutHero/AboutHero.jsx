import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./AboutHero.module.css";

function AboutHero() {
  return (
    <section className={styles.hero}>
      <SectionContainer>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Meet Thais</span>

            <h1>
              Language is not just spoken.
              <span>It is lived.</span>
            </h1>

            <p>
              A Brazilian Portuguese teacher shaped by language, culture,
              curiosity and more than a decade of experience helping people find
              their own way into the language.
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <img src="/images/about/about-hero.jpg" alt="Thais" />
            </div>

            <span className={styles.imageCaption}>01 · Meet the teacher</span>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default AboutHero;
