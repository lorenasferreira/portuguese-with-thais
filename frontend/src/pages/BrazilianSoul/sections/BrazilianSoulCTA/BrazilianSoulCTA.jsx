import { Link } from "react-router-dom";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./BrazilianSoulCTA.module.css";

function BrazilianSoulCTA() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.content}>
          <span>Take it into the classroom</span>

          <h2>
            Culture gives you context.
            <span>Conversation makes it yours.</span>
          </h2>

          <p>
            Bring the music, stories and Portuguese you discover here into a
            lesson built around your own interests and goals.
          </p>

          <Link to="/book-a-lesson">Book a Trial — $25</Link>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BrazilianSoulCTA;
