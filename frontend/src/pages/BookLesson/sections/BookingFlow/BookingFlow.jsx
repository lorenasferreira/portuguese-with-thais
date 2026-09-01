import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./BookingFlow.module.css";

const steps = [
  {
    number: "01",
    title: "Choose your time",
    text: "Select one of Thais's available lesson times. Unavailable days and existing commitments will not appear as booking options.",
  },
  {
    number: "02",
    title: "Complete your booking",
    text: "Enter your contact details and confirm the lesson time that works for you.",
  },
  {
    number: "03",
    title: "Complete payment",
    text: "The $25 trial payment will be completed securely through the booking flow.",
  },
  {
    number: "04",
    title: "Meet online",
    text: "Once confirmed, you will receive the lesson details and online meeting information by email.",
  },
];

function BookingFlow() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.header}>
          <span>How booking works</span>

          <h2>
            Simple from
            <span>start to lesson.</span>
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <article key={step.number}>
              <span className={styles.number}>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default BookingFlow;
