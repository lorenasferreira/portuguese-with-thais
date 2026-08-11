import { FaArrowRight } from "react-icons/fa";
import {
  PiBookOpenTextThin,
  PiCoffeeThin,
  PiLeafThin,
  PiPenNibThin,
} from "react-icons/pi";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import styles from "./TestimonialsPreview.module.css";

const testimonials = [
  {
    id: "jimmy",
    quote:
      "Thais is a really fantastic teacher and her lessons have become the thing I look forward to most during the week. Very patient and takes time to make sure everything is understood. Highly recommend!",
    author: "Jimmy",
    country: "England",
  },
  {
    id: "tara",
    quote:
      "Thais is a wonderful teacher. She is amazing with children. I would recommend her if you need a tutor for a child or an adult.",
    author: "Tara",
    country: "Ireland",
  },
  {
    id: "sophie",
    quote:
      "Thais is a perfect teacher. She prepares the lessons well, the lessons are fun and she adapts them perfectly to your level!",
    author: "Sophie",
    country: "Netherlands",
  },
];

function TestimonialsPreview() {
  const [featured, ...secondary] = testimonials;

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.decorations} aria-hidden="true">
        <PiBookOpenTextThin className={styles.bookDecor} />
        <PiCoffeeThin className={styles.coffeeDecor} />
        <PiPenNibThin className={styles.penDecor} />
        <PiLeafThin className={styles.leafDecor} />
      </div>

      <SectionContainer>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <span className={styles.headingLine} />
            <p>
              In Their <span>Own</span> Words
            </p>
          </div>

          <div className={styles.reviews}>
            <article className={styles.featured}>
              <span className={styles.quoteMark} aria-hidden="true">
                “
              </span>

              <blockquote>{featured.quote}</blockquote>

              <footer>
                <strong>{featured.author}</strong>
                <span>{featured.country}</span>
              </footer>
            </article>

            <div className={styles.secondaryColumn}>
              {secondary.map((testimonial) => (
                <article key={testimonial.id} className={styles.secondary}>
                  <footer>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.country}</span>
                  </footer>

                  <blockquote>“{testimonial.quote}”</blockquote>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.bottom}>
            <a href="/testimonials">
              Read all student stories
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TestimonialsPreview;
