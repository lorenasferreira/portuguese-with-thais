import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import styles from "./FAQSection.module.css";

const faqs = [
  {
    id: "lesson-length",
    question: "How long is each lesson?",
    answer:
      "Each lesson lasts 50 minutes, giving us enough time to practice, explore new language and work on your goals without making the session feel rushed.",
  },
  {
    id: "beginner",
    question: "Do I need to know Portuguese already?",
    answer:
      "Not at all. Lessons can be adapted to complete beginners as well as learners who already speak Portuguese and want to build fluency, confidence or accuracy.",
  },
  {
    id: "kids",
    question: "Are lessons suitable for children?",
    answer:
      "Yes. Portuguese for Kids is designed to be more playful and engaging, using activities, conversation, music and age-appropriate materials to make learning feel natural.",
  },
  {
    id: "celpe",
    question: "Do you prepare students for CELPE-Bras?",
    answer:
      "Yes. CELPE-Bras preparation focuses on the skills and communication strategies needed for the exam, with lessons adapted to your current level and goals.",
  },
  {
    id: "scheduling",
    question: "How does scheduling work?",
    answer:
      "You will be able to choose an available time that works for you when booking your lesson. Available slots are based on Thais's teaching schedule.",
  },
  {
    id: "reschedule",
    question: "What if I need to cancel or reschedule?",
    answer:
      "If your plans change, get in touch as early as possible. Specific cancellation and rescheduling conditions will be confirmed when booking.",
  },
];

function FAQSection() {
  const [openId, setOpenId] = useState(faqs[0].id);

  function toggleFAQ(id) {
    setOpenId((currentId) => (currentId === id ? null : id));
  }

  return (
    <section className={styles.section} id="faq">
      <SectionContainer>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Good to know</span>

            <h2>
              A few things you might
              <span>want to ask.</span>
            </h2>

            <p>
              Everything you need to know before choosing a lesson and starting
              your Portuguese journey.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <article
                  key={faq.id}
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqItemOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                  >
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.questionText}>{faq.question}</span>

                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <div
                    id={`${faq.id}-answer`}
                    className={`${styles.answer} ${
                      isOpen ? styles.answerOpen : ""
                    }`}
                  >
                    <div className={styles.answerInner}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default FAQSection;
