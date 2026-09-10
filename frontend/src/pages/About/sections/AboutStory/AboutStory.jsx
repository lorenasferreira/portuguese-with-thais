import { FaQuoteLeft } from "react-icons/fa";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./AboutStory.module.css";

function AboutStory() {
  return (
    <section className={styles.story}>
      <SectionContainer>
        <div className={styles.storyIntro}>
          <div>
            <span className={styles.sectionLabel}>
              From São Paulo to the World
            </span>

            <h2>
              A story shaped by
              <span>language, people and culture.</span>
            </h2>
          </div>

          <p>
            Born in São Paulo and raised with strong connections to different
            parts of Brazil, Thais grew up surrounded by different accents,
            regional expressions and ways of experiencing Brazilian culture.
          </p>
        </div>

        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <p>
              Her parents are from Ceará, in the northeast of Brazil, and family
              trips across the country became part of her childhood. Over the
              years, she continued travelling through Brazil, lived in different
              places and eventually called Salvador, Bahia, home.
            </p>

            <p>
              Those experiences gave her a relationship with Brazilian
              Portuguese that goes far beyond one accent or one region. Although
              her own accent comes from São Paulo, she grew up listening to
              different registers of Portuguese at home and discovering many
              others through travel and daily life.
            </p>

            <div className={styles.smallImage}>
              <img
                src="/images/about/about-lifestyle.jpg"
                alt="Thais during her travels"
              />
            </div>
          </div>

          <div className={styles.storyVisual}>
            <div className={styles.largeStoryImage}>
              <img
                src="/images/about/about-salvador.jpg"
                alt="Thais in Salvador, Bahia"
              />

              <span className={styles.location}>Salvador · Bahia</span>
            </div>

            <blockquote>
              <FaQuoteLeft aria-hidden="true" />

              <p>
                Learning a language can open a new cultural territory and a new
                way of experiencing the world.
              </p>
            </blockquote>
          </div>
        </div>

        <div className={styles.education}>
          <div>
            <span className={styles.sectionLabel}>Language as a path</span>

            <h3>
              From studying language
              <span>to teaching it.</span>
            </h3>
          </div>

          <div className={styles.educationContent}>
            <p>
              Thais studied Literature and Linguistics at the University of São
              Paulo, with a strong focus on Portuguese, Brazilian language and
              culture.
            </p>

            <p>
              She began teaching Portuguese while still at university, working
              as a volunteer in a social project for low income students
              preparing for university entrance exams.
            </p>

            <p>
              Teaching soon expanded into schools, informal educational
              institutions and classrooms with children, teenagers and adults.
              Today, she has around ten years of teaching experience and has
              spent the last few years teaching Brazilian Portuguese to
              international students.
            </p>
          </div>
        </div>

        <div className={styles.students}>
          <div className={styles.studentsImage}>
            <img
              src="/images/about/about-culture.jpg"
              alt="Brazilian culture and everyday life"
            />
          </div>

          <div className={styles.studentsContent}>
            <span className={styles.sectionLabel}>Around the world</span>

            <h3>
              Different people.
              <span>Different reasons to learn.</span>
            </h3>

            <p>
              Her students range from A1 to C2 and live across countries such as
              Canada, Australia, the United States, France and Italy.
            </p>

            <p>
              Some want to travel through Brazil. Some are preparing to work
              there. Others want to communicate with a Brazilian partner or
              their partner&apos;s family. She also teaches children growing up
              between Brazilian and international cultures.
            </p>

            <p>
              That variety of backgrounds is one of the things she values most
              about teaching. Every student arrives with a different story, and
              every learning path can be built differently.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default AboutStory;
