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
  {
    id: "mike",
    quote:
      "Thais is fantastic. She makes the lesson fun, moves at a great pace that's challenging yet not overwhelming, and sets homework and goals for you. Couldn't recommend her more!",
    author: "Mike",
    country: "Australia",
  },
  {
    id: "sabina",
    quote:
      "Thais is awesome! Her lessons are well planned, and she's willing to adapt to my needs. Whenever I need extra clarification or want to dive deeper into a topic, she's always happy to slow down and make sure I understand.",
    author: "Sabina",
    country: "United States",
  },
  {
    id: "sylvain",
    quote:
      "Super cool learning with Thais. She's very dynamic and enthusiastic, and we learn a lot of things. She prepares each lesson well and gives me a recap of each lesson plus exercises.",
    author: "Sylvain",
    country: "France",
  },
  {
    id: "alexia",
    quote:
      "A truly dedicated and flexible teacher. Exactly what you need to grow and make real progress in a language. Her guidance makes my Portuguese journey both smooth and enjoyable.",
    author: "Alexia",
    country: "France",
  },
];

function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const isRotating = !isPaused && !isHovered && !hasFocus && !reducedMotion;

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
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event) => setReducedMotion(event.matches);
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!isRotating) return;

    const interval = window.setInterval(showNext, 6500);

    return () => window.clearInterval(interval);
  }, [isRotating]);

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

          <div
            className={styles.carousel}
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") setIsHovered(true);
            }}
            onPointerLeave={() => setIsHovered(false)}
            onPointerDown={(event) => {
              if (
                event.pointerType === "touch" &&
                !event.target.closest(`.${styles.rotationControl}`)
              ) {
                setIsPaused(true);
              }
            }}
            onFocusCapture={() => setHasFocus(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setHasFocus(false);
              }
            }}
          >
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>

            <div aria-live={isRotating ? "off" : "polite"}>
              <div className={styles.review} key={activeTestimonial.id}>
                <blockquote>{activeTestimonial.quote}</blockquote>

                <footer>
                  <strong>{activeTestimonial.author}</strong>
                  <span>{activeTestimonial.country}</span>
                </footer>
              </div>
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
            {!reducedMotion && (
              <button
                type="button"
                className={styles.rotationControl}
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={`${isPaused ? "Resume" : "Pause"} automatic testimonial rotation`}
              >
                {isPaused ? "Resume" : "Pause"} auto-rotation
              </button>
            )}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TestimonialsPreview;
