import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./ScrollReveal.module.css";

function ScrollReveal() {
  const location = useLocation();

  useLayoutEffect(() => {
    const elements = document.querySelectorAll("main section");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.classList.add(styles.visible);
      });

      return;
    }

    elements.forEach((element) => {
      element.classList.add(styles.reveal);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    const fallbackTimeout = window.setTimeout(() => {
      elements.forEach((element) => {
        element.classList.add(styles.visible);
      });
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimeout);

      elements.forEach((element) => {
        element.classList.remove(styles.reveal, styles.visible);
      });
    };
  }, [location.pathname]);

  return null;
}

export default ScrollReveal;
