import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./CultureInPractice.module.css";

function CultureInPractice() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>Culture in practice</span>

            <h2>
              Sometimes the lesson starts
              <span>with a song.</span>
            </h2>
          </div>

          <p>
            A scene from a film, a Brazilian expression, a song lyric or a story
            can become the starting point for vocabulary, grammar and
            conversation.
          </p>
        </div>

        <div className={styles.gallery}>
          <div className={styles.largeVisual}>
            <img
              src="/images/method/brazilian-culture-collage-1401.webp"
              srcSet="/images/method/brazilian-culture-collage-640.webp 640w, /images/method/brazilian-culture-collage-960.webp 960w, /images/method/brazilian-culture-collage-1401.webp 1401w"
              sizes="(max-width: 768px) max(537px, calc(100vw - max(2.8rem, 8vw))), (max-width: 1440px) max(811px, 72vw), 1040px"
              width="1401"
              height="1123"
              loading="lazy"
              alt="Brazilian culture collage with cinema, literature and music"
            />
          </div>

          <div className={styles.side}>
            <div className={styles.smallVisual}>
              <img
                src="/images/method/pandeiro-salvador-1122.webp"
                width="1122"
                height="1402"
                loading="lazy"
                alt="Hands playing pandeiro in Salvador"
              />
            </div>

            <blockquote>
              Learn the grammar, but also understand why people speak the way
              they do.
            </blockquote>

            <Link to="/the-brazilian-soul">
              Explore The Brazilian Soul
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CultureInPractice;
