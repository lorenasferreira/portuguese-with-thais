import styles from "./SectionDivider.module.css";

function SectionDivider({ label, tone = "dark", className = "" }) {
  return (
    <div
      className={`${styles.divider} ${styles[tone]} ${className}`}
      aria-hidden={!label}
    >
      <span className={styles.line} />

      {label && <span className={styles.label}>{label}</span>}

      <span className={styles.line} />
    </div>
  );
}

export default SectionDivider;
