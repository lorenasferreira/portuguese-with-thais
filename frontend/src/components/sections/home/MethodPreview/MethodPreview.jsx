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

          <em className={styles.subtitle}>Portuguese beyond the textbook</em>
        </div>

        <div className={styles.topGrid}>
          <article className={styles.mainCard}>
            <span className={styles.accentSquare} />

            <h3>Lessons shaped around you.</h3>

            <p>
              Your goals, interests and learning pace guide every lesson.
              Instead of following a one-size-fits-all formula, each class
              adapts to the way you learn and the Portuguese you actually want
              to use.
            </p>

            <ul>
              <li>Personalized learning</li>
              <li>Flexible progression</li>
              <li>Goals that matter to you</li>
            </ul>
          </article>

          <article className={styles.highlightCard}>
            <span>Culture in every lesson</span>

            <h3>
              Language
              <br />
              comes alive.
            </h3>

            <p>
              Music, films, literature, Brazilian expressions and everyday
              references bring context to the language and turn learning into
              cultural immersion.
            </p>
          </article>
        </div>

        <div className={styles.visualRow}>
          <article className={styles.smallCard}>
            <span>Real Conversation</span>

            <h3>Speak Portuguese as it is really lived.</h3>

            <p>
              Conversation is part of the process from the beginning, helping
              you build confidence, understand natural expressions and
              communicate beyond rehearsed textbook dialogues.
            </p>
          </article>

          <div className={styles.imageWrapper}>
            <img
              src={methodStudy}
              alt="Student exploring language and culture through study"
            />
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
