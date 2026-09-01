import { FaArrowRight, FaCheck } from "react-icons/fa";

import SectionContainer from "../../../common/SectionContainer/SectionContainer";

import styles from "./PricingPreview.module.css";

const plans = [
  {
    name: "Single Session",
    frequency: "Pay as you go",
    price: "$40",
    description:
      "A flexible option for focused feedback, occasional practice or a single class when you need it.",
    details: ["1 class", "50-minute lesson"],
  },
  {
    name: "Explorer",
    frequency: "4 classes / month",
    price: "$150",
    description:
      "Build consistency while keeping a comfortable and flexible learning rhythm.",
    details: ["1 class / week", "4 classes / month"],
  },
  {
    name: "Momentum",
    frequency: "8 classes / month",
    price: "$305",
    description:
      "Build fluency and confidence through a more consistent learning routine.",
    details: ["2 classes / week", "8 classes / month"],
    featured: true,
  },
  {
    name: "Immersion",
    frequency: "12 classes / month",
    price: "$460",
    description:
      "A more immersive rhythm for learners looking for faster and deeper progress.",
    details: ["3 classes / week", "12 classes / month"],
  },
];

function PricingPreview() {
  return (
    <section className={styles.section} id="pricing">
      <SectionContainer>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span>Plans & Pricing</span>
            <span className={styles.labelLine} />
          </div>

          <div className={styles.intro}>
            <h2>
              Choose a rhythm that
              <span>works for you.</span>
            </h2>

            <p>
              Whether you want to start with one lesson or build a consistent
              routine, choose the format that fits your goals and availability.
            </p>
          </div>
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

              <div className={styles.planTop}>
                <span className={styles.frequency}>{plan.frequency}</span>

                <h3>{plan.name}</h3>

                <p>{plan.description}</p>
              </div>

              <ul className={styles.details}>
                {plan.details.map((detail) => (
                  <li key={detail}>
                    <FaCheck aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.price}>
                <strong>{plan.price}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="/lessons">
            Explore lesson options
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}

export default PricingPreview;
