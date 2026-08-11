import { FaArrowRight } from "react-icons/fa";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import methodStudy from "../../../../assets/images/method/method-study.jpg";

import styles from "./MethodPreview.module.css";

function MethodPreview() {
  return (
    <section className={styles.section} id="method">
      <SectionContainer>
        <div className={styles.header}>
          <span>Method & Approach</span>

          <em className={styles.subtitle}>Designed around real life</em>
        </div>

        <div className={styles.topGrid}>
          <article className={styles.mainCard}>
            <span className={styles.accentSquare} />

            <h3>Learning built around you.</h3>

            <p>
              Every lesson is shaped around your goals, pace and interests.
              Language structure becomes practical when it connects with the
              situations you actually want to navigate.
            </p>

            <ul>
              <li>Personalized learning</li>
              <li>Flexible progression</li>
              <li>Real-world Portuguese</li>
            </ul>
          </article>

          <article className={styles.highlightCard}>
            <span>Beyond Grammar</span>

            <h3>
              Culture
              <br />
              &amp; Context
            </h3>

            <p>
              Music, literature, expressions and everyday Brazilian life bring
              meaning to the language beyond the textbook.
            </p>
          </article>
        </div>

        <div className={styles.visualRow}>
          <article className={styles.smallCard}>
            <span>Conversation Practice</span>

            <h3>Confidence grows through connection.</h3>

            <p>
              Speak first. Refine as you go. Portuguese becomes natural through
              meaningful interaction.
            </p>
          </article>

          <div className={styles.imageWrapper}>
            <img src={methodStudy} alt="Student studying in a quiet library" />
          </div>
        </div>

        <div className={styles.footer}>
          <a href="/method">
            Discover the Method
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}

export default MethodPreview;
