import { Link } from "react-router-dom";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./AboutClosing.module.css";

function AboutClosing() {
  return (
    <section className={styles.closing}>
      <SectionContainer>
        <div className={styles.philosophy}>
          <span>A space to learn</span>

          <blockquote>
            The classroom should be a place where you can be yourself, make
            mistakes, bring your own interests and build your learning path with
            guidance and confidence.
          </blockquote>

          <p>
            Thais wants every student to feel welcomed and safe while learning.
            She guides the process as a teacher, but believes the best lessons
            are built together with the student.
          </p>
        </div>

        <div className={styles.closingDivider} />

        <div className={styles.testimonial}>
          <span className={styles.testimonialLabel}>Student story</span>

          <span className={styles.openQuote} aria-hidden="true">
            “
          </span>

          <blockquote>
            Thais is a really fantastic teacher and her lessons have become the
            thing I look forward to most during the week. Very patient and takes
            time to make sure everything is understood. Highly recommend!
          </blockquote>

          <span className={styles.closeQuote} aria-hidden="true">
            ”
          </span>

          <span className={styles.student}>Jimmy - England</span>
        </div>

        <div className={styles.closingDivider} />

        <div className={styles.cta}>
          <span>Begin your journey</span>

          <h2>
            You don't need to climb
            <span>the whole mountain at once.</span>
          </h2>

          <p>
            Start with one conversation and build your Portuguese step by step.
          </p>

          <div className={styles.ctaActions}>
            <Link to="/book-a-lesson" className={styles.primaryButton}>
              Book a Trial
            </Link>

            <Link to="/lessons" className={styles.secondaryButton}>
              Explore Lessons
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default AboutClosing;
