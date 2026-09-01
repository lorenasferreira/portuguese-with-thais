import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import { expressions } from "../../cultureData";

import styles from "./EverydayPortuguese.module.css";

function EverydayPortuguese() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>04 — Speak</span>

            <h2>
              Portuguese you will
              <span>actually hear.</span>
            </h2>
          </div>

          <p>
            Some of the most useful parts of a language are not difficult
            grammatical structures. They are the little expressions that make
            conversation sound human.
          </p>
        </div>

        <div className={styles.expressions}>
          {expressions.map((item) => (
            <article key={item.expression}>
              <div className={styles.expression}>
                <h3>{item.expression}</h3>
                <span>{item.meaning}</span>
              </div>

              <p>{item.context}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default EverydayPortuguese;
