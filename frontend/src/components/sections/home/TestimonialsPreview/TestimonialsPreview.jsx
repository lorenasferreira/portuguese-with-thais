import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    const interval = window.setInterval(showNext, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

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

          <div className={styles.carousel}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>

            <div
              className={styles.review}
              key={activeTestimonial.id}
              aria-live="polite"
            >
              <blockquote>{activeTestimonial.quote}</blockquote>

              <footer>
                <strong>{activeTestimonial.author}</strong>
                <span>{activeTestimonial.country}</span>
              </footer>
            </div>

            <div className={styles.controls}>
              <div className={styles.dots}>
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    className={`${styles.dot} ${
                      index === activeIndex ? styles.activeDot : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show review from ${testimonial.author}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>

              <div className={styles.arrows}>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous testimonial"
                >
                  <FaArrowLeft aria-hidden="true" />
                </button>

                <span>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next testimonial"
                >
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TestimonialsPreview;
