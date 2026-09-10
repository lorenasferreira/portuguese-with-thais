import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./AboutApproach.module.css";

function AboutApproach() {
  return (
    <section className={styles.approach}>
      <SectionContainer>
        <div className={styles.approachGrid}>
          <div className={styles.approachIntro}>
            <span className={styles.goldLabel}>A way of teaching</span>

            <h2>
              Three things belong
              <span>in the same classroom.</span>
            </h2>

            <p>
              Years of teaching taught Thais that fluency becomes more natural
              when conversation, grammar and cultural knowledge grow together.
            </p>

            <Link to="/method" className={styles.darkLink}>
              Discover my teaching approach
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.approachContent}>
            <article>
              <span>01</span>

              <div>
                <h3>Conversation</h3>

                <p>
                  Students need space to use Portuguese naturally, express
                  themselves, make mistakes and gradually build confidence.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>

              <div>
                <h3>Grammar</h3>

                <p>
                  Structure matters, but it becomes more useful when it is
                  connected to communication instead of learned in isolation.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>

              <div>
                <h3>Culture</h3>

                <p>
                  Music, literature, films, novelas and everyday Brazilian
                  references give language context, personality and meaning.
                </p>
              </div>
            </article>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default AboutApproach;
