import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./MethodHero.module.css";

function MethodHero() {
  return (
    <section className={styles.hero}>
      <SectionContainer>
        <div className={styles.top}>
          <span className={styles.eyebrow}>Method & Approach</span>

          <h1>
            Learn the language.
            <span>Live what comes with it.</span>
          </h1>

          <p>
            Portuguese becomes meaningful when grammar, conversation and culture
            stop living in separate boxes.
          </p>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/method/method-culture.png"
              alt="People experiencing Brazilian music and culture in Salvador"
            />
          </div>

          <div className={styles.note}>
            <span>01</span>
            <p>
              Real language grows through real context, curiosity and
              connection.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default MethodHero;
