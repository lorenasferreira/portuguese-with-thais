import { Link } from "react-router-dom";

import SectionContainer from "../../components/common/SectionContainer/SectionContainer";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <SectionContainer as="main" className={styles.page}>
      <span className={styles.label}>404</span>
      <h1>Page not found.</h1>
      <p>The page you’re looking for may have moved. Head back home to keep exploring.</p>
      <Link to="/" className={styles.homeLink}>Back to Home</Link>
    </SectionContainer>
  );
}

export default NotFound;
