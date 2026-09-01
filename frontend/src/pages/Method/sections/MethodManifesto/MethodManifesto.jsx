import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./MethodManifesto.module.css";

function MethodManifesto() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.content}>
          <span className={styles.label}>A different way to learn</span>

          <p>
            A language is not a collection of rules waiting to be memorized. It
            is something people use to laugh, argue, tell stories, make friends
            and understand the world around them.
          </p>

          <strong>That is where learning begins.</strong>
        </div>
      </SectionContainer>
    </section>
  );
}

export default MethodManifesto;
