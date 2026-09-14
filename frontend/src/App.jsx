import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import RouteScrollTop from "./components/common/RouteScrollTop/RouteScrollTop";
import ScrollReveal from "./components/common/ScrollReveal/ScrollReveal";
import ScrollToTopButton from "./components/common/ScrollToTopButton/ScrollToTopButton";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Lessons from "./pages/Lessons/Lessons";
import Method from "./pages/Method/Method";
import BrazilianSoul from "./pages/BrazilianSoul/BrazilianSoul";
import BookLesson from "./pages/BookLesson/BookLesson";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollTop />
      <ScrollReveal />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/method" element={<Method />} />
        <Route path="/the-brazilian-soul" element={<BrazilianSoul />} />
        <Route path="/book-a-lesson" element={<BookLesson />} />
      </Routes>

      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
