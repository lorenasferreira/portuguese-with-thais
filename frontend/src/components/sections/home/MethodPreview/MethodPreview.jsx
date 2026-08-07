import SectionContainer from "../../../common/SectionContainer/SectionContainer";
import SectionHeading from "../../../common/SectionHeading/SectionHeading";

import styles from "./MethodPreview.module.css";

const methodPillars = [
  {
    number: "01",
    title: "Strong Foundations",
    description:
      "Clear grammar and language structure explained through practical examples you can actually use.",
  },
  {
    number: "02",
    title: "Real Brazilian Portuguese",
    description:
      "Natural vocabulary, pronunciation, expressions and conversations from everyday life in Brazil.",
  },
  {
    number: "03",
    title: "Lessons Built Around You",
    description:
      "Personalized sessions shaped around your goals, pace, interests and learning style.",
  },
];

function MethodPreview() {
  return (
    <section className={styles.section} id="method">
      <SectionContainer>
        <div className={styles.header}>
          <SectionHeading
            eyebrow="The Method"
            title="Structure gives you confidence. Culture makes the language come alive."
            description="Thaís combines academic knowledge, real conversation and cultural context to create lessons that feel clear, personal and useful."
            maxWidth="820px"
          />

          <a href="/method" className={styles.headerLink}>
            Discover the Method
          </a>
        </div>

        <div className={styles.grid}>
          {methodPillars.map((pillar, index) => (
            <article
              key={pillar.number}
              className={`${styles.pillar} ${
                index === 1 ? styles.pillarOffset : ""
              }`}
            >
              <span className={styles.number}>{pillar.number}</span>

              <div className={styles.pillarContent}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>

        <a href="/method" className={styles.mobileLink}>
          Discover the Method
        </a>
      </SectionContainer>
    </section>
  );
}

export default MethodPreview;
