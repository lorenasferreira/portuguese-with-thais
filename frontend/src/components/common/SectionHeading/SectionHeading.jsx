import styles from "./SectionHeading.module.css";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  maxWidth,
}) {
  return (
    <header
      className={`${styles.heading} ${styles[align]}`}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

      <h2 className={styles.title}>{title}</h2>

      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}

export default SectionHeading;
