import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import { films } from "../../cultureData";

import styles from "./CinemaSection.module.css";

function CinemaSection() {
  return (
    <section className={styles.section} id="cinema">
      <SectionContainer>
        <div className={styles.header}>
          <span>03 — Watch</span>

          <h2>
            Hear Portuguese
            <span>inside a story.</span>
          </h2>

          <p>
            Film and television reveal accents, rhythm, social context and the
            kind of language people use when nobody is following a textbook.
          </p>
        </div>

        <div className={styles.grid}>
          {films.map((film, index) => (
            <article
              key={film.title}
              className={`${styles.film} ${index === 0 ? styles.featured : ""}`}
            >
              <div className={styles.poster}>
                <img src={film.image} width={film.imageWidth} height={film.imageHeight}
                  loading="lazy" alt={`${film.title}${film.type === "Film" ? " film" : " series"} ${film.title === "Que Horas Ela Volta?" ? "still" : "poster"}`} />
              </div>
              <div className={styles.filmContent}>
                <div className={styles.meta}>
                  <span>{film.type}</span>
                  {film.year && <span>{film.year}</span>}
                </div>

                <h3>{film.title}</h3>

                <span className={styles.level}>{film.level}</span>

                <p>{film.note}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default CinemaSection;
