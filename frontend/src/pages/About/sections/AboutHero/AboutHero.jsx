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
              <img
                src="/images/about/about-hero-2560.webp"
                srcSet="/images/about/about-hero-640.webp 640w, /images/about/about-hero-960.webp 960w, /images/about/about-hero-2560.webp 2560w"
                sizes="(max-width: 768px) max(667px, calc(100vw - max(2.8rem, 8vw) - 2px)), (max-width: 1000px) max(87vw, calc(92vw - 2px)), min(1014px, max(720px, 86.667vw))"
                width="4032"
                height="3024"
                loading="eager"
                alt="Thais"
              />
            </div>

            <span className={styles.imageCaption}>Salvador, Brazil</span>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default AboutHero;
