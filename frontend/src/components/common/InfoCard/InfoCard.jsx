import styles from "./InfoCard.module.css";

function InfoCard({
  icon,
  title,
  description,
  href,
  buttonLabel = "View Details",
}) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.icon}>{icon}</div>
      </header>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      {href && (
        <footer className={styles.footer}>
          <a href={href} className={styles.link}>
            {buttonLabel}
          </a>
        </footer>
      )}
    </article>
  );
}

export default InfoCard;
