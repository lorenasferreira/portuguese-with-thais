import { useSyncExternalStore } from "react";

import styles from "./MobileCardRail.module.css";

const mobile = window.matchMedia("(max-width: 600px)");

function subscribe(onChange) {
  mobile.addEventListener("change", onChange);
  return () => mobile.removeEventListener("change", onChange);
}

function isMobile() {
  return mobile.matches;
}

function MobileCardRail({ children, className, label }) {
  const scrollable = useSyncExternalStore(subscribe, isMobile);

  return (
    <div
      className={`${className} ${styles.rail}`}
      role={scrollable ? "region" : undefined}
      aria-label={scrollable ? label : undefined}
      tabIndex={scrollable ? 0 : undefined}
    >
      {children}
    </div>
  );
}

export default MobileCardRail;
