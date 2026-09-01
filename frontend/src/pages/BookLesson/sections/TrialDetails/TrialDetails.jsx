import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./TrialDetails.module.css";

function TrialDetails() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.layout}>
          <div className={styles.priceBlock}>
            <span>Trial Lesson</span>

            <div className={styles.price}>
              <strong>$25</strong>
              <span>/ 50 min</span>
            </div>
          </div>

          <div className={styles.details}>
            <h2>
              A first lesson with
              <span>a real purpose.</span>
            </h2>

            <p>
              The trial is a chance to meet, talk about your goals and
              experience the teaching approach before choosing the rhythm that
              works best for you.
            </p>

            <ul>
              <li>50-minute private lesson</li>
              <li>Conversation about your goals and experience</li>
              <li>Initial level observation</li>
              <li>Personalized next-step recommendation</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TrialDetails;
