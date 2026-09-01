import { Link } from "react-router-dom";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

import SectionContainer from "../../components/common/SectionContainer/SectionContainer";

import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <SectionContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Meet Thais</span>

              <h1>
                Language is not just spoken.
                <span>It is lived.</span>
              </h1>

              <p>
                Brazilian Portuguese shaped by conversation, culture and the
                experiences that make a language feel truly alive.
              </p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImage}>
                <span>Portrait of Thais</span>
              </div>

              <span className={styles.imageCaption}>01 — Meet the teacher</span>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* STORY */}
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
              This is where Thais&apos; real story will live — her background,
              relationship with languages, academic path and the experiences
              that eventually led her to teaching Brazilian Portuguese.
            </p>
          </div>

          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <p>
                Her path into teaching was not built around a single formula. It
                grew through language, study, travel, cultural curiosity and the
                people she met along the way.
              </p>

              <p>
                As her experience evolved, so did the way she understood
                language learning: not as memorizing isolated structures, but as
                learning how people communicate, connect and make sense of the
                world around them.
              </p>

              <div className={styles.smallImage}>
                <span>Lifestyle / study photo</span>
              </div>
            </div>

            <div className={styles.storyVisual}>
              <div className={styles.largeStoryImage}>
                <span>Thais / teaching / city photo</span>
              </div>

              <blockquote>
                <FaQuoteLeft aria-hidden="true" />

                <p>
                  Language becomes meaningful when you understand the people,
                  stories and culture living inside it.
                </p>
              </blockquote>
            </div>
          </div>

          <div className={styles.storyContinuation}>
            <div className={styles.wideImage}>
              <span>Another personal / cultural image</span>
            </div>

            <div>
              <span className={styles.sectionLabel}>The journey continues</span>

              <p>
                Today, her work brings together everything that shaped her own
                relationship with languages: curiosity, conversation, individual
                connection and a strong sense of Brazilian culture.
              </p>

              <p>
                This section can later include more of her real story —
                university, living abroad, teaching experiences, important
                moments and what inspired Portuguese with Thais.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* METHOD PREVIEW */}
      <section className={styles.approach}>
        <SectionContainer>
          <div className={styles.approachGrid}>
            <div className={styles.approachIntro}>
              <span className={styles.goldLabel}>A way of teaching</span>

              <h2>
                Experience changed
                <span>the way she teaches.</span>
              </h2>

              <p>
                What Thais learned through languages and culture naturally
                became part of her classroom.
              </p>

              <Link to="/method" className={styles.darkLink}>
                Discover my teaching approach
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.approachContent}>
              <article>
                <span>01</span>

                <div>
                  <h3>Personalized learning</h3>
                  <p>
                    Different students arrive with different goals, interests
                    and rhythms. The lesson adapts to the person.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <h3>Real conversation</h3>
                  <p>
                    Portuguese is practiced as a living language, with space for
                    natural expression, mistakes and real communication.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>

                <div>
                  <h3>Culture as context</h3>
                  <p>
                    Music, film, literature and everyday Brazilian references
                    help give meaning to what is learned.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CULTURAL CURATION */}
      <section className={styles.culture}>
        <SectionContainer>
          <div className={styles.cultureHeader}>
            <div>
              <span className={styles.sectionLabel}>A curated Brazil</span>

              <h2>
                Culture naturally finds
                <span>its way into the lesson.</span>
              </h2>
            </div>

            <p>
              Brazilian culture is not an extra layer added to Thais&apos;
              classes. It is part of how she understands and teaches the
              language itself.
            </p>
          </div>

          <div className={styles.cultureGallery}>
            <article className={styles.cultureLarge}>
              <div className={styles.cultureImageLarge}>
                <span>Brazilian music image</span>
              </div>

              <span>01</span>
              <h3>Rhythm & Sound</h3>
              <p>Music, lyrics, artists and the sound of Brazilian life.</p>
            </article>

            <div className={styles.cultureColumn}>
              <article>
                <div className={styles.cultureImage}>
                  <span>Brazilian literature</span>
                </div>

                <span>02</span>
                <h3>Literature</h3>
                <p>Books and stories for different levels and interests.</p>
              </article>

              <article>
                <div className={styles.cultureImage}>
                  <span>Cinema / Brazilian life</span>
                </div>

                <span>03</span>
                <h3>Cinema & Everyday Life</h3>
                <p>
                  Films, series, places and references that reveal the language
                  in context.
                </p>
              </article>
            </div>
          </div>

          <div className={styles.cultureFooter}>
            <Link to="/the-brazilian-soul">
              Explore The Brazilian Soul
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </SectionContainer>
      </section>

      {/* TESTIMONIAL + CTA */}
      <section className={styles.closing}>
        <SectionContainer>
          <div className={styles.testimonial}>
            <span className={styles.quoteMark}>”</span>

            <blockquote>
              Learning with Thais isn&apos;t just about mastering Portuguese.
              It&apos;s about understanding the culture and feeling increasingly
              comfortable inside the language.
            </blockquote>

            <span className={styles.student}>— Student testimonial</span>
          </div>

          <div className={styles.closingDivider} />

          <div className={styles.cta}>
            <span>Begin your journey</span>

            <h2>Ready to experience Portuguese differently?</h2>

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
    </main>
  );
}

export default About;
