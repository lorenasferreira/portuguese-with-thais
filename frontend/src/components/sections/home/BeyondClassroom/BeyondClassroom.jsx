import { FaArrowRight } from "react-icons/fa";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";

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
          <div className={styles.visual}>
            <div
              className={styles.imagePlaceholder}
              role="img"
              aria-label="Placeholder for Brazilian cultural imagery"
            >
              <span>Brazil lives between the lines.</span>
            </div>

            <div className={styles.visualNote}>
              <span>São Paulo</span>
              <span>Culture / Language / Life</span>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>Beyond the Classroom</span>
            </div>

            <h2 className={styles.title}>
              Portuguese is only
              <span>the beginning.</span>
            </h2>

            <p className={styles.description}>
              Learning a language is also learning the people behind it.
              Discover Brazil through music, literature, everyday expressions
              and the small details that make Portuguese come alive.
            </p>

            <ul className={styles.topicList}>
              {topics.map((topic, index) => (
                <li key={topic} className={styles.topic}>
                  <span className={styles.topicNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{topic}</span>

                  <FaArrowRight aria-hidden="true" />
                </li>
              ))}
            </ul>

            <a href="/the-brazilian-soul" className={styles.cta}>
              Explore the Brazilian Soul
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BeyondClassroom;
