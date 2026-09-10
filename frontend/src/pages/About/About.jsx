import AboutHero from "./sections/AboutHero/AboutHero";
import AboutStory from "./sections/AboutStory/AboutStory";
import AboutApproach from "./sections/AboutApproach/AboutApproach";
import AboutCulture from "./sections/AboutCulture/AboutCulture";
import AboutClosing from "./sections/AboutClosing/AboutClosing";

import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.page}>
      <AboutHero />
      <AboutStory />
      <AboutApproach />
      <AboutCulture />
      <AboutClosing />
    </main>
  );
}

export default About;
