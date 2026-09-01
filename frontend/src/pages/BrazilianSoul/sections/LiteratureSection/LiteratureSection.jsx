import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import { books } from "../../cultureData";

import styles from "./LiteratureSection.module.css";

function LiteratureSection() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>02 — Read</span>

            <h2>
              Discover Brazil
              <span>between the lines.</span>
            </h2>
          </div>

          <p>
            Reading lets you slow the language down while discovering voices,
            places and ways of seeing Brazil that conversation alone cannot
            always reveal.
          </p>
        </div>

        <div className={styles.library}>
          {books.map((book, index) => (
            <article key={book.title} className={styles.book}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.level}>{book.level}</span>

              <div>
                <h3>{book.title}</h3>
                <span className={styles.author}>{book.author}</span>
              </div>

              <p>{book.note}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default LiteratureSection;
