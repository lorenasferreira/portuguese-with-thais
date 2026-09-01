import { Link } from "react-router-dom";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./MethodCTA.module.css";

function MethodCTA() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.content}>
          <span>Ready to experience it?</span>

          <h2>
            Your Portuguese starts
            <span>with one conversation.</span>
          </h2>

          <p>
            Begin with a 50-minute trial lesson and discover what your own
            learning rhythm can look like.
          </p>

          <Link to="/book-a-lesson">Book a Trial — $25</Link>
        </div>
      </SectionContainer>
    </section>
  );
}

export default MethodCTA;
