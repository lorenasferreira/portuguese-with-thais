import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./BookingEmbed.module.css";

function BookingEmbed() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.bookingArea}>
          <div className={styles.intro}>
            <span>Choose your lesson time</span>

            <h2>
              Find a time
              <span>that works for you.</span>
            </h2>

            <p>
              Available lesson times will appear here, automatically adjusted to
              your timezone.
            </p>
          </div>

          <div className={styles.integration}>
            <div className={styles.integrationInner}>
              <span>Online booking</span>

              <p>
                Lesson availability and secure booking are currently being
                prepared.
              </p>

              <a href="mailto:">Contact Thais to book</a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BookingEmbed;
