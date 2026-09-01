import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./BrazilianSoulHero.module.css";

function BrazilianSoulHero() {
  return (
    <section className={styles.hero}>
      <SectionContainer>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Brazilian Soul</span>

          <h1>
            Portuguese lives
            <span>beyond the textbook.</span>
          </h1>

          <p>
            Music, literature, cinema and everyday expressions offer another way
            into Brazilian Portuguese — one shaped by voices, stories, rhythm
            and culture.
          </p>
        </div>

        <div className={styles.visual}>
          <img
            src="/images/method/brazilian-culture-collage.png"
            alt="Collage inspired by Brazilian music, cinema and literature"
          />

          <div className={styles.note}>
            <span>A cultural guide</span>
            <p>Listen. Read. Watch. Notice how Portuguese is actually lived.</p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BrazilianSoulHero;
