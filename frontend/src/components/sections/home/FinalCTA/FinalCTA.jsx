import { Link } from "react-router-dom";
import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import styles from "./FinalCTA.module.css";

function FinalCTA() {
  return (
    <section className={styles.section} id="book-a-lesson">
      <SectionContainer>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Ready when you are</p>

          <h2 className={styles.title}>
            <span className={styles.titleLead}>Ready to experience</span>

            <span className={styles.titleLanguage}>Brazilian Portuguese?</span>
          </h2>

          <p className={styles.description}>
            Start with a personalized lesson and discover a way of learning that
            combines language, culture and real conversation.
          </p>

          <div className={styles.actions}>
            <Link to="/book-a-lesson?plan=trial#booking" className={styles.primaryButton}>
              Book your first lesson
            </Link>

            <a href="/lessons" className={styles.secondaryLink}>
              Explore lesson formats
            </a>
          </div>
        </div>

        <div className={styles.sideNote}>
          <span>Available Worldwide</span>
        </div>
      </SectionContainer>
    </section>
  );
}

export default FinalCTA;
