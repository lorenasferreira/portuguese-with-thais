import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import LevelQuiz from "./sections/LevelQuiz/LevelQuiz";

import SectionContainer from "../../components/common/SectionContainer/SectionContainer";

import styles from "./Lessons.module.css";

const plans = [
  {
    name: "Single Session",
    frequency: "Pay as you go",
    price: "$40",
    description:
      "A flexible option for focused feedback, occasional practice or a single class when you need it.",
    details: ["1 class", "50-minute lesson"],
  },
  {
    name: "Flow",
    frequency: "4 classes / month",
    price: "$150",
    description:
      "Build consistency while keeping a comfortable and flexible learning rhythm.",
    details: ["1 class / week", "4 classes / month"],
  },
  {
    name: "Pace",
    frequency: "8 classes / month",
    price: "$305",
    description:
      "Build fluency and confidence through a more consistent learning routine.",
    details: ["2 classes / week", "8 classes / month"],
    featured: true,
  },
  {
    name: "Mastery",
    frequency: "12 classes / month",
    price: "$460",
    description:
      "A more immersive rhythm for learners looking for faster and deeper progress.",
    details: ["3 classes / week", "12 classes / month"],
  },
];

function Lessons() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SectionContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroVisual}>
              <div className={styles.heroImage}>
                <span>Teaching / lifestyle photo</span>
              </div>

              <div className={styles.heroNote}>
                <span>Brazilian Portuguese</span>
                <p>Conversation, culture and real life.</p>
              </div>
            </div>

            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Lessons</span>

              <h1>
                Find the way of learning
                <span>that fits your life.</span>
              </h1>

              <p>
                Personalized Brazilian Portuguese lessons designed around your
                goals, rhythm and the way you want to use the language.
              </p>

              <Link to="/book-a-lesson" className={styles.heroLink}>
                Book a Trial
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className={styles.lessonSection}>
        <SectionContainer>
          <div className={styles.lessonGrid}>
            <div className={styles.lessonNumber}>01</div>

            <div className={styles.lessonContent}>
              <span className={styles.sectionLabel}>One-on-One</span>

              <h2>
                Portuguese built <span>around you.</span>
              </h2>

              <p>
                Private lessons adapt to your level, goals, interests and pace.
                Whether you want to communicate more naturally, prepare for a
                specific situation or simply feel more confident speaking, every
                lesson has room to evolve with you.
              </p>

              <ul className={styles.lessonList}>
                <li>Personalized lesson planning</li>
                <li>Conversation and real-life Portuguese</li>
                <li>Flexible progression</li>
              </ul>
            </div>

            <div className={styles.lessonImage}>
              <span>One-on-one lesson photo</span>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className={`${styles.lessonSection} ${styles.kids}`}>
        <SectionContainer>
          <div className={`${styles.lessonGrid} ${styles.reverse}`}>
            <div className={styles.lessonNumber}>02</div>

            <div className={styles.lessonImage}>
              <span>Kids / music / playful learning</span>
            </div>

            <div className={styles.lessonContent}>
              <span className={styles.sectionLabel}>Portuguese for Kids</span>

              <h2>
                Learning can feel <span>like play.</span>
              </h2>

              <p>
                Lessons for children bring Portuguese into a playful,
                age-appropriate environment using music, stories, movement and
                cultural references that make the language memorable.
              </p>

              <ul className={styles.lessonList}>
                <li>Music and songs</li>
                <li>Playful activities</li>
                <li>Brazilian cultural references</li>
              </ul>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className={styles.lessonSection}>
        <SectionContainer>
          <div className={styles.lessonGrid}>
            <div className={styles.lessonNumber}>03</div>

            <div className={styles.lessonContent}>
              <span className={styles.sectionLabel}>CELPE-Bras</span>

              <h2>
                Prepare with <span>purpose and confidence.</span>
              </h2>

              <p>
                Focused preparation for the CELPE-Bras exam with practice that
                strengthens communication, comprehension and confidence while
                keeping the language connected to real contexts.
              </p>

              <ul className={styles.lessonList}>
                <li>Exam-focused preparation</li>
                <li>Guided practice</li>
                <li>Feedback and strategy</li>
              </ul>
            </div>

            <div className={styles.lessonImage}>
              <span>Study / exam preparation photo</span>
            </div>
          </div>
        </SectionContainer>
      </section>
      <LevelQuiz />
      <section className={styles.pricing}>
        <SectionContainer>
          <div className={styles.pricingHeader}>
            <div>
              <span className={styles.sectionLabel}>Plans & Pricing</span>

              <h2>
                Choose your <span>learning rhythm.</span>
              </h2>
            </div>

            <p>
              Start with one session or build a regular routine with a monthly
              plan.
            </p>
          </div>

          <div className={styles.plans}>
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`${styles.plan} ${
                  plan.featured ? styles.featured : ""
                }`}
              >
                {plan.featured && (
                  <span className={styles.badge}>Most Popular</span>
                )}

                <span className={styles.frequency}>{plan.frequency}</span>

                <h3>{plan.name}</h3>

                <ul>
                  {plan.details.map((detail) => (
                    <li key={detail}>
                      <FaCheck aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className={styles.price}>{plan.price}</div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className={styles.trial}>
        <SectionContainer>
          <div className={styles.trialGrid}>
            <div>
              <span className={styles.goldLabel}>Start here</span>

              <h2>
                Your first step can be <span>one conversation.</span>
              </h2>
            </div>

            <div className={styles.trialInfo}>
              <div>
                <span>Trial Lesson</span>
                <strong>$25</strong>
              </div>

              <p>
                A paid 50-minute lesson to meet, experience the teaching style
                and understand the best path for your Portuguese.
              </p>

              <Link to="/book-a-lesson">
                Book a Trial
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
}

export default Lessons;
