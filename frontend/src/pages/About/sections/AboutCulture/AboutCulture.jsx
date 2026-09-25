import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./AboutCulture.module.css";

function AboutCulture() {
  return (
    <section className={styles.culture}>
      <SectionContainer>
        <div className={styles.cultureHeader}>
          <div>
            <span className={styles.sectionLabel}>Beyond the classroom</span>

            <h2>
              Curiosity is part
              <span>of who she is.</span>
            </h2>
          </div>

          <p>
            Thais&apos; relationship with Brazilian culture started long before
            she became a teacher. Music, literature, travel and discovery have
            always been part of the way she experiences Brazil.
          </p>
        </div>

        <div className={styles.personalGrid}>
          <article className={styles.climbing}>
            <div className={styles.climbingImage}>
              <img
                src="/images/about/about-climbing-1536.webp"
                width="3024"
                height="4032"
                loading="lazy"
                alt="Thais climbing"
              />
            </div>

            <div className={styles.personalText}>
              <span>01 · Climbing</span>

              <h3>Progress does not need to be fast.</h3>

              <p>
                Thais sees climbing as a metaphor for learning. Some parts of
                the journey are difficult, some require patience, and sometimes
                progress happens slowly.
              </p>

              <p>
                What matters is continuing upward. Eventually, you look back and
                realize how far you have already come.
              </p>
            </div>
          </article>

          <article className={styles.music}>
            <div className={styles.musicImage}>
              <img
                src="/images/about/about-pandeiro-1536.webp"
                width="4160"
                height="3327"
                loading="lazy"
                alt="Thais playing pandeiro"
              />
            </div>

            <div className={styles.personalText}>
              <span>02 · Music</span>

              <h3>Brazilian culture has always been personal.</h3>

              <p>
                Music was one of her first connections to Brazilian culture,
                followed by literature and an even deeper curiosity about the
                country during university.
              </p>

              <p>
                She studied Brazilian percussion for several years and the
                pandeiro became her favourite instrument.
              </p>
            </div>
          </article>
        </div>

        <div className={styles.cultureFooter}>
          <div>
            <span className={styles.sectionLabel}>A curated Brazil</span>

            <p>
              That same curiosity naturally enters her lessons through music,
              literature, cinema and everyday Brazilian references.
            </p>
          </div>

          <Link to="/the-brazilian-soul">
            Explore The Brazilian Soul
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}

export default AboutCulture;
