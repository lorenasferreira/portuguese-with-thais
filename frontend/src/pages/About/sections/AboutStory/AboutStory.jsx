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
              A life shaped by
              <span>movement and language.</span>
            </h2>
          </div>

          <p>
            My journey across Brazil began when I was just two months old, on a
            long bus ride from São Paulo to Ceará with my parents.
          </p>
        </div>

        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <p>
              Raised by parents from the Northeast, I grew up constantly
              crossing the country by bus, car, plane and even hitchhiking.
              Experiencing this constant movement exposed me early on to the
              incredible diversity of Brazilian Portuguese: its vibrant accents,
              regional expressions and distinct ways of life.
            </p>

            <p>
              Those childhood journeys sparked a lifelong passion for travel and
              languages. Being encouraged by my parents from a very young age
              led me to live in the United States for two years to study and
              travel, explore South America and, eventually, find myself in
              Europe.
            </p>

            <p>
              Today, I teach Brazilian Portuguese to international students,
              mostly online, while traveling the world myself. Beyond my native
              Portuguese, I speak fluent English and Spanish, and I am currently
              learning French.
            </p>

            <p>
              Knowing what it feels like to step into a new language gives me a
              deep appreciation for every student&apos;s learning journey.
            </p>

            <div className={styles.smallImage}>
              <img
                src="/images/about/about-climbing-1536.webp"
                width="3024"
                height="4032"
                loading="lazy"
                alt="Thais rock climbing"
              />
            </div>
          </div>

          <div className={styles.storyVisual}>
            <div className={styles.largeStoryImage}>
              <img
                src="/images/about/about-sao-paulo-1600.webp"
                width="3971"
                height="3120"
                loading="lazy"
                alt="São Paulo, Brazil"
              />

              <span className={styles.location}>São Paulo, Brazil</span>
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
              From curiosity
              <span>to a life&apos;s mission.</span>
            </h3>
          </div>

          <div className={styles.educationContent}>
            <p>
              I believe it was my curiosity, fueled by growing up in a country
              as diverse and beautiful as Brazil, my early travels and my
              passion for Brazilian literature, that revealed my life&apos;s
              mission: to introduce Brazilian Portuguese to the world.
            </p>

            <p>
              Driven by this passion, I spent five years earning my degree in
              Literature and Linguistics at the University of São Paulo (USP),
              focusing on Brazilian Literature and the Portuguese language.
            </p>

            <p>
              My teaching journey started during my university years,
              volunteering in a social project preparing low-income students for
              entrance exams. Over the last decade, that work expanded into
              classrooms with children, teenagers and adults.
            </p>
          </div>
        </div>

        <div className={styles.students}>
          <div className={styles.studentsImage}>
            <img
              src="/images/about/about-classroom-1536.webp"
              width="4160"
              height="3328"
              loading="lazy"
              alt="Thais teaching in a classroom"
            />
          </div>

          <div className={styles.studentsContent}>
            <span className={styles.sectionLabel}>Today</span>

            <h3>
              Every student arrives
              <span>with a different story.</span>
            </h3>

            <p>
              Today, my students range from absolute beginners at A1 to advanced
              speakers at C2, living across countries like Canada, Australia,
              the United States, France and Italy.
            </p>

            <p>
              Whether you are learning to travel through Brazil, preparing for
              work, connecting with a partner and their family, or raising
              children between cultures, I believe every student arrives with a
              unique background.
            </p>

            <p>
              Every learning path can be built differently, and I am here to
              help you find yours.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default AboutStory;
