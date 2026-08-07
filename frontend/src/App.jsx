import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/home/Hero/Hero";
import IntroSection from "./components/sections/home/IntroSection/IntroSection";
import LessonsPreview from "./components/sections/home/LessonsPreview/LessonsPreview";
import BeyondClassroom from "./components/sections/home/BeyondClassroom/BeyondClassroom";
import TestimonialsPreview from "./components/sections/home/TestimonialsPreview/TestimonialsPreview";
import MethodPreview from "./components/sections/home/MethodPreview/MethodPreview";
import FinalCTA from "./components/sections/home/FinalCTA/FinalCTA";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <IntroSection />
        <LessonsPreview />
        <BeyondClassroom />
        <TestimonialsPreview />
        <MethodPreview />
        <FinalCTA />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
