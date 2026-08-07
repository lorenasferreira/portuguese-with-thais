import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import styles from "./TestimonialsPreview.module.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Thaís doesn't just teach grammar; she immerses you in the culture. My confidence speaking with my Brazilian colleagues skyrocketed in just a few months. It's the most effective learning experience I've had.",
    author: "Michael T.",
    meta: "Verified Student · United States",
    sourceUrl: "",
  },
  {
    id: 2,
    quote:
      "The personalized approach makes all the difference. I finally understand the nuances of the language.",
    author: "Sarah J.",
    meta: "Verified Student · United Kingdom",
    sourceUrl: "",
  },
  {
    id: 3,
    quote:
      "Classes feel like conversations with a knowledgeable friend. Highly recommended for serious learners.",
    author: "David L.",
    meta: "Verified Student · Canada",
    sourceUrl: "",
  },
];

function TestimonialsPreview() {
  const [featuredTestimonial, ...secondaryTestimonials] = testimonials;

  return (
    <section className={styles.section} id="testimonials">
      <SectionContainer>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Student Stories</p>

            <h2 className={styles.title}>What students say.</h2>

            <p className={styles.description}>
              Real experiences from students learning Brazilian Portuguese with
              Thaís.
            </p>
          </div>

          <dl className={styles.metrics}>
            <div className={styles.metric}>
              <dd>
                5.0 <span aria-hidden="true">★</span>
              </dd>
              <dt>Rating</dt>
            </div>

            <div className={styles.metric}>
              <dd>5,000+</dd>
              <dt>Lessons</dt>
            </div>
          </dl>
        </div>

        <div className={styles.testimonials}>
          <article className={styles.featured}>
            <blockquote>“{featuredTestimonial.quote}”</blockquote>

            <footer className={styles.testimonialFooter}>
              <div>
                <strong>{featuredTestimonial.author}</strong>
                <span>{featuredTestimonial.meta}</span>
              </div>

              {featuredTestimonial.sourceUrl && (
                <a
                  href={featuredTestimonial.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View original review
                </a>
              )}
            </footer>
          </article>

          <div className={styles.secondaryList}>
            {secondaryTestimonials.map((testimonial) => (
              <article key={testimonial.id} className={styles.secondary}>
                <blockquote>“{testimonial.quote}”</blockquote>

                <footer className={styles.testimonialFooter}>
                  <div>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.meta}</span>
                  </div>

                  {testimonial.sourceUrl && (
                    <a
                      href={testimonial.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View original review
                    </a>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <a href="/testimonials" className={styles.allStoriesLink}>
            Read more student stories
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TestimonialsPreview;
