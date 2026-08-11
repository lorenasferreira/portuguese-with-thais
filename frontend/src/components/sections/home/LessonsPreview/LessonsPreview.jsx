import { FaArrowRight } from "react-icons/fa";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import styles from "./LessonsPreview.module.css";

const experiences = [
  {
    number: "01",
    title: "Tailored Experience",
    description:
      "Every learning journey is built around your goals, interests and pace, creating a learning experience that feels genuinely personal.",
  },
  {
    number: "02",
    title: "The Art of Conversation",
    description:
      "Move beyond textbook dialogues through meaningful conversations, real Brazilian expressions and authentic cultural context.",
  },
  {
    number: "03",
    title: "Professional Confidence",
    description:
      "Whether you're relocating, working internationally or expanding your opportunities, learn to communicate naturally and confidently.",
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
              Choose how you’ll experience
              <span>Brazilian Portuguese.</span>
            </h2>

            <p>
              Explore a learning experience shaped around conversation,
              confidence and the way Portuguese is actually lived.
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

              <a href="/lessons" className={styles.link}>
                Explore
                <FaArrowRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="/lessons" className={styles.allLessonsLink}>
            View all lesson formats
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}

export default LessonsPreview;
