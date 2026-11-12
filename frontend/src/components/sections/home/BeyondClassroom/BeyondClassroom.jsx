import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import styles from "./BeyondClassroom.module.css";

const topics = [
  { label: "Brazilian Music", id: "music" },
  { label: "Literature", id: "literature" },
  { label: "Everyday Expressions", id: "expressions" },
  { label: "Brazilian Culture", id: "cinema" },
];

function BeyondClassroom() {
  return (
    <section className={styles.section} id="beyond-classroom">
      <SectionContainer>
        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.image} data-scroll-image>
              <img
                src="/images/home/beyond-classroom-1440.webp"
                srcSet="/images/home/beyond-classroom-640.webp 640w, /images/home/beyond-classroom-960.webp 960w, /images/home/beyond-classroom-1440.webp 1440w"
                sizes="(max-width: 1000px) min(680px, calc(100vw - max(2.8rem, 8vw))), min(540px, 40vw)"
                width="3024"
                height="4032"
                loading="lazy"
                alt="Brazilian cultural scene"
              />
            </div>

            <div className={styles.visualNote}>
              <span>Rio de Janeiro, Brazil</span>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>Beyond the Classroom</span>
            </div>

            <h2 className={styles.title}>
              Portuguese is only
              <span>the beginning.</span>
            </h2>

            <p className={styles.description}>
              Learning a language is also learning the people behind it.
              Discover Brazil through music, literature, everyday expressions
              and the small details that make Portuguese come alive.
            </p>

            <ul className={styles.topicList}>
              {topics.map((topic, index) => (
                <li key={topic.id}>
                  <Link to={`/the-brazilian-soul#${topic.id}`} className={styles.topic}>
                    <span className={styles.topicNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{topic.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <a href="/the-brazilian-soul" className={styles.cta}>
              Explore the Brazilian Soul
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BeyondClassroom;
