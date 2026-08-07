import Header from "../../components/layout/Header/Header";
import Hero from "../../components/sections/home/Hero/Hero";
import IntroSection from "../../components/sections/home/IntroSection/IntroSection";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
      </main>
    </>
  );
}

export default Home;
