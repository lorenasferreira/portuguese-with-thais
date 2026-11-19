import { useEffect, useState } from "react";

// Load an embed once it is close enough to be useful, then retain it while mounted.
export default function useNearViewport(ref, immediate = false) {
  const [isNear, setIsNear] = useState(false);
  const canObserve = "IntersectionObserver" in window;

  useEffect(() => {
    if (immediate || isNear || !canObserve) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setIsNear(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, immediate, isNear, canObserve]);

  return immediate || isNear || !canObserve;
}
