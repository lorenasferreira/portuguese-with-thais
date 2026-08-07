import { FaArrowRight } from "react-icons/fa";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";
import SectionHeading from "../../../common/SectionHeading/SectionHeading";

import styles from "./BeyondClassroom.module.css";

const topics = [
  "Brazilian Music",
  "Literature",
  "Everyday Expressions",
  "Brazilian Culture",
];

function BeyondClassroom() {
  return (
    <section className={styles.section} id="beyond-classroom">
      <SectionContainer>
        <div className={styles.layout}>
          <div
            className={styles.imagePlaceholder}
            role="img"
            aria-label="Placeholder for Brazilian cultural imagery"
          >
            <span>Cultural Immersion</span>

            <div className={styles.imageLabel}>
              <strong>São Paulo, BR.</strong>
              <span>Where the journey begins</span>
            </div>
          </div>

          <div className={styles.content}>
            <SectionHeading
              eyebrow="Beyond the Classroom"
              title="Portuguese is only the beginning."
              description="Learning a language is also learning the people behind it. Every lesson invites you to discover Brazilian culture through music, literature, everyday conversations and the small details that make the language come alive."
              maxWidth="620px"
            />

            <ol className={styles.topicList}>
              {topics.map((topic, index) => (
                <li key={topic} className={styles.topicItem}>
                  <span className={styles.topicNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.topicTitle}>{topic}</span>

                  <FaArrowRight
                    className={styles.topicIcon}
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ol>

            <a href="/the-brazilian-soul" className={styles.cta}>
              Explore Brazilian Culture
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BeyondClassroom;
