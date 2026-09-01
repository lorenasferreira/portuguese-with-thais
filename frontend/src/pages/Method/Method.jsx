import MethodHero from "./sections/MethodHero/MethodHero";
import MethodManifesto from "./sections/MethodManifesto/MethodManifesto";
import MethodPrinciples from "./sections/MethodPrinciples/MethodPrinciples";
import CultureInPractice from "./sections/CultureInPractice/CultureInPractice";
import MethodCTA from "./sections/MethodCTA/MethodCTA";

import styles from "./Method.module.css";

function Method() {
  return (
    <main className={styles.page}>
      <MethodHero />
      <MethodManifesto />
      <MethodPrinciples />
      <CultureInPractice />
      <MethodCTA />
    </main>
  );
}

export default Method;
