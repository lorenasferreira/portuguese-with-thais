import Hero from "../../components/sections/home/Hero/Hero";
import IntroSection from "../../components/sections/home/IntroSection/IntroSection";
import LessonsPreview from "../../components/sections/home/LessonsPreview/LessonsPreview";
import BeyondClassroom from "../../components/sections/home/BeyondClassroom/BeyondClassroom";
import TestimonialsPreview from "../../components/sections/home/TestimonialsPreview/TestimonialsPreview";
import MethodPreview from "../../components/sections/home/MethodPreview/MethodPreview";
import PricingPreview from "../../components/sections/home/PricingPreview/PricingPreview";
import FinalCTA from "../../components/sections/home/FinalCTA/FinalCTA";

function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <LessonsPreview />
      <BeyondClassroom />
      <TestimonialsPreview />
      <MethodPreview />
      <PricingPreview />
      <FinalCTA />
    </main>
  );
}

export default Home;
