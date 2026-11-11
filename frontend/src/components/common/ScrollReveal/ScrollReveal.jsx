import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./ScrollReveal.module.css";

function ScrollReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let teardown = () => {};

    function configure() {
      teardown();
      if (preference.matches || !("IntersectionObserver" in window)) return;

      // Content is visible by default; animate only after it enters the viewport.
      const elements = [...document.querySelectorAll("main h1, main h2, main p, main article")]
        .filter((element) => !element.closest("#level-test") &&
          (!element.closest("article") || element.matches("article")));
      const animations = new Set();
      const distance = innerWidth <= 768 ? 8 : 12;
      const reveal = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          if (element.animate) {
            const animation = element.animate([
              { opacity: 0, transform: `translateY(${distance}px)` },
              { opacity: 1, transform: "translateY(0)" },
            ], {
              duration: 550,
              delay: element.matches("article") ? (elements.indexOf(element) % 3) * 60 : 0,
              easing: "cubic-bezier(0.2, 0.65, 0.3, 1)",
              fill: "backwards",
            });
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          }
          reveal.unobserve(element);
        });
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
      elements.forEach((element) => reveal.observe(element));

      const frames = [...document.querySelectorAll("[data-scroll-image]")];
      const active = new Set();
      let frame = 0;
      function update() {
        frame = 0;
        // Batch geometry reads before style writes.
        const positions = [...active].map((element) => {
          const rect = element.getBoundingClientRect();
          return [element, Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight + rect.height)))];
        });
        positions.forEach(([element, progress]) => {
          element.style.setProperty("--image-y", `${(progress - 0.5) * 12}px`);
          element.style.setProperty("--image-scale", String(1.025 + progress * 0.035));
        });
      }
      function schedule() {
        if (!frame) frame = requestAnimationFrame(update);
      }
      const images = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) active.add(target);
          else active.delete(target);
        });
        schedule();
      });
      frames.forEach((element) => {
        element.classList.add(styles.imageFrame);
        images.observe(element);
      });
      if (frames.length) {
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
      }
      function onFocus() { animations.forEach((animation) => animation.cancel()); }
      document.addEventListener("focusin", onFocus);
      teardown = () => {
        reveal.disconnect();
        images.disconnect();
        animations.forEach((animation) => animation.cancel());
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        document.removeEventListener("focusin", onFocus);
        frames.forEach((element) => {
          element.classList.remove(styles.imageFrame);
          element.style.removeProperty("--image-y");
          element.style.removeProperty("--image-scale");
        });
      };
    }
    configure();
    preference.addEventListener("change", configure);
    return () => {
      teardown();
      preference.removeEventListener("change", configure);
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;
