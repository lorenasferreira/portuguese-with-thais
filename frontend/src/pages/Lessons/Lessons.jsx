import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import PlacementTest from "./sections/PlacementTest/PlacementTest";
import SectionContainer from "../../components/common/SectionContainer/SectionContainer";

import styles from "./Lessons.module.css";

const plans = [
  {
    name: "Single Session",
    id: "single",
    frequency: "Pay as you go",
    price: "€40",
    description:
      "A flexible option for focused feedback, occasional practice or a single class when you need it.",
    details: ["1 class", "50-minute lesson"],
  },
  {
    name: "Flow",
    id: "flow",
    frequency: "4 classes / month",
    price: "€150",
    description:
      "Build consistency while keeping a comfortable and flexible learning rhythm.",
    details: ["1 class / week", "4 classes / month"],
  },
  {
    name: "Pace",
    id: "pace",
    frequency: "8 classes / month",
    price: "€280",
    description:
      "Build fluency and confidence through a more consistent learning routine.",
    details: ["2 classes / week", "8 classes / month"],
    featured: true,
  },
  {
    name: "Mastery",
    id: "mastery",
    frequency: "12 classes / month",
    price: "€400",
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
                <img
                  src="/images/lessons/lessons-hero-1872.webp"
                  srcSet="/images/lessons/lessons-hero-640.webp 640w, /images/lessons/lessons-hero-960.webp 960w, /images/lessons/lessons-hero-1280.webp 1280w, /images/lessons/lessons-hero-1872.webp 1872w"
                  sizes="(max-width: 1000px) calc(100vw - max(2.8rem, 8vw) - 2px), (max-width: 1440px) calc(48.3vw - 2px), 700px"
                  width="1872"
                  height="2496"
                  loading="eager"
                  fetchPriority="high"
                  alt="Brazilian Portuguese lesson with Thais"
                />
              </div>

              <div className={styles.heroNote}>
                <span>Brazilian Portuguese</span>
                <p>Conversation, culture and real life.</p>
              </div>
            </div>

            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Lessons</span>

              <h1>
                Learn Brazilian Portuguese
                <span>at your own rhythm.</span>
              </h1>

              <p>
                Personalized Brazilian Portuguese lessons designed around your
                goals, rhythm and the way you want to use the language.
              </p>

              <Link to="/book-a-lesson?plan=trial#booking" className={styles.heroLink}>
                Book a Trial
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className={styles.lessonSection} id="one-on-one">
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
              <img
                src="/images/lessons/one-on-one.jpeg"
                width="999"
                height="1376"
                loading="lazy"
                alt="One-on-one Brazilian Portuguese lesson"
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className={`${styles.lessonSection} ${styles.kids}`} id="kids">
        <SectionContainer>
          <div className={`${styles.lessonGrid} ${styles.reverse}`}>
            <div className={styles.lessonNumber}>02</div>

            <div className={styles.lessonImage}>
              <img
                src="/images/lessons/kids-reading.avif"
                width="740"
                height="504"
                loading="lazy"
                alt="Children reading books together"
              />
            </div>

            <div className={styles.lessonContent}>
              <span className={styles.sectionLabel}>Portuguese for Kids</span>

              <h2>
                Portuguese as a Heritage <span>Language.</span>
              </h2>

              <p>
                Designed for children from diverse backgrounds, these lessons
                make learning Brazilian Portuguese fun, engaging, and
                age-appropriate. With a special focus on heritage language
                learning, they also help children of Brazilian families around
                the world connect with their roots through music, stories,
                movement, and cultural expression.
              </p>

              <p>Available online worldwide or in person in Paris.</p>

              <ul className={styles.lessonList}>
                <li>Heritage language and identity building</li>
                <li>Music, stories, and creative expression</li>
                <li>Brazilian cultural references</li>
                <li>Flexible format: online or in person (Paris)</li>
              </ul>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className={styles.lessonSection} id="celpe-bras">
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
              <img
                src="/images/lessons/celpe-bras-1254.webp"
                width="1254"
                height="1254"
                loading="lazy"
                alt="CELPE-Bras preparation and study"
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      <PlacementTest />

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

                <h3>
                  <Link to={`/book-a-lesson?plan=${plan.id}#booking`}>
                    {plan.name}
                  </Link>
                </h3>

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
                <strong>€25</strong>
              </div>

              <p>
                A paid 50-minute lesson to meet, experience the teaching style
                and understand the best path for your Portuguese.
              </p>

              <Link to="/book-a-lesson?plan=trial#booking">
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
