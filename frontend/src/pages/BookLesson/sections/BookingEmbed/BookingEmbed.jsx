import { useEffect, useRef } from "react";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./BookingEmbed.module.css";

const CAL_LINK = "portuguesewiththais/portuguese-private-lesson-50min";

function BookingEmbed() {
  const calendarRef = useRef(null);

  useEffect(() => {
    const namespace = "private-lesson";

    (function (C, A, L) {
      const p = (a, ar) => {
        a.q.push(ar);
      };

      const d = C.document;

      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;

          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];

            const script = d.createElement("script");
            script.src = A;
            d.head.appendChild(script);

            cal.loaded = true;
          }

          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };

            const namespace = ar[1];

            api.q = api.q || [];

            if (typeof namespace === "string") {
              cal.ns[namespace] = api;
              p(api, ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }

            return;
          }

          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", namespace, {
      origin: "https://cal.com",
    });

    window.Cal.ns[namespace]("inline", {
      elementOrSelector: calendarRef.current,
      calLink: CAL_LINK,
      config: {
        layout: "month_view",
      },
    });

    window.Cal.ns[namespace]("ui", {
      theme: "light",
      layout: "month_view",
    });
  }, []);

  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.bookingArea}>
          <div className={styles.intro}>
            <span>Choose your lesson time</span>

            <h2>
              Find a time
              <span>that works for you.</span>
            </h2>

            <p>
              Choose an available time for your private Brazilian Portuguese
              lesson. Your booking will automatically adjust to your timezone.
            </p>

            <div className={styles.lessonDetails}>
              <span>Private lesson</span>
              <strong>50 minutes · €40</strong>
              <p>Online via Google Meet. Secure payment during booking.</p>
            </div>
          </div>

          <div className={styles.integration}>
            <div ref={calendarRef} className={styles.calendar} />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BookingEmbed;
