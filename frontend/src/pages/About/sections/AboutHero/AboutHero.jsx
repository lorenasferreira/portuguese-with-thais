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
              Hi! My name is Thais, I am your Brazilian Portuguese teacher, and
              I want to share a little bit of my story and my connection with
              Brazil and the teaching of Brazilian Portuguese.
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <img src="/images/about/about-hero.jpg" alt="Thais" />
            </div>

            <span className={styles.imageCaption}>Salvador, Brazil</span>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default AboutHero;
