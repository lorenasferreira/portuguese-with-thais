import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import styles from "./LessonsPreview.module.css";

const experiences = [
  {
    number: "01",
    title: "One-on-One Portuguese",
    description:
      "Personalized lessons built around your goals, interests and pace.",
  },
  {
    number: "02",
    title: "Portuguese for Kids",
    description:
      "Playful, engaging lessons using music, culture and age-appropriate activities.",
  },
  {
    number: "03",
    title: "CELPE-Bras Preparation",
    description:
      "Focused preparation for learners working toward Brazil’s official Portuguese proficiency exam.",
  },
];

function LessonsPreview() {
  return (
    <section className={styles.section} id="lessons">
      <SectionContainer>
        <div className={styles.top}>
          <div className={styles.sectionLabel}>
            <span>Programs & Experience</span>
            <span className={styles.labelLine} />
          </div>

          <div className={styles.intro}>
            <h2>
              Find the Portuguese experience
              <span>that fits your goals.</span>
            </h2>

            <p>
              From personalized one-on-one lessons to playful classes for kids
              and CELPE-Bras preparation, choose the path that makes sense for
              you.
            </p>
          </div>
        </div>

        <div className={styles.experiences}>
          {experiences.map((experience) => (
            <article key={experience.number} className={styles.experience}>
              <span className={styles.number}>{experience.number}</span>

              <div className={styles.content}>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>

              <Link to="/lessons" className={styles.link}>
                Explore
                <FaArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="/lessons" className={styles.allLessonsLink}>
            Explore all lessons
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}

export default LessonsPreview;
