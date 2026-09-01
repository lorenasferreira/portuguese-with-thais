import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./MethodPrinciples.module.css";

const principles = [
  {
    number: "01",
    title: "Built around the learner",
    text: "Goals, interests, confidence and pace shape the learning process. The lesson adapts instead of forcing every student into the same structure.",
  },
  {
    number: "02",
    title: "Conversation with purpose",
    text: "Speaking is not something reserved for later. Real interaction becomes part of learning from the beginning, with space to refine naturally along the way.",
  },
  {
    number: "03",
    title: "Culture gives language meaning",
    text: "Music, literature, films, expressions and everyday references help students understand not only what people say, but the world behind the words.",
  },
];

function MethodPrinciples() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.header}>
          <span>Core Principles</span>

          <h2>
            Structure matters.
            <span>Context makes it stay.</span>
          </h2>
        </div>

        <div className={styles.list}>
          {principles.map((principle) => (
            <article key={principle.number} className={styles.item}>
              <span className={styles.number}>{principle.number}</span>

              <h3>{principle.title}</h3>

              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default MethodPrinciples;
