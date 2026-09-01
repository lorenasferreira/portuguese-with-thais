import BrazilianSoulHero from "./sections/BrazilianSoulHero/BrazilianSoulHero";
import MusicSection from "./sections/MusicSection/MusicSection";
import LiteratureSection from "./sections/LiteratureSection/LiteratureSection";
import CinemaSection from "./sections/CinemaSection/CinemaSection";
import EverydayPortuguese from "./sections/EverydayPortuguese/EverydayPortuguese";
import BrazilianSoulCTA from "./sections/BrazilianSoulCTA/BrazilianSoulCTA";

import styles from "./BrazilianSoul.module.css";

function BrazilianSoul() {
  return (
    <main className={styles.page}>
      <BrazilianSoulHero />
      <MusicSection />
      <LiteratureSection />
      <CinemaSection />
      <EverydayPortuguese />
      <BrazilianSoulCTA />
    </main>
  );
}

export default BrazilianSoul;
