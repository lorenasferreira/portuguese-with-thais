import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./BookingHero.module.css";

function BookingHero() {
  return (
    <section className={styles.hero}>
      <SectionContainer>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Book a lesson</span>

          <h1>
            Your Portuguese journey
            <span>starts with one conversation.</span>
          </h1>

          <p>
            Start with a 50-minute trial lesson designed to understand your
            goals, your current level and the way you learn best.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BookingHero;
