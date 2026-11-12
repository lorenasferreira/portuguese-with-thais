import { useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { bookingPlans } from "../../bookingPlans";
import useNearViewport from "../../../../hooks/useNearViewport";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./BookingEmbed.module.css";

function BookingEmbed() {
  const calendarRef = useRef(null);
  const sectionRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedPlan = searchParams.get("plan");
  const selectedId = Object.hasOwn(bookingPlans, requestedPlan)
    ? requestedPlan
    : "trial";
  const { hash } = useLocation();
  const loadCalendar = useNearViewport(calendarRef, Boolean(requestedPlan) || hash === "#booking");
  const plan = bookingPlans[selectedId];
  const calLink = `portuguesewiththais/${plan.event}`;

  useEffect(() => {
    if (!requestedPlan) return;
    const frame = requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [requestedPlan]);

  useEffect(() => {
    if (!loadCalendar) return;
    const namespace = "trial-lesson";

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

    // A separate mount target keeps delayed Cal commands away from later mounts.
    const host = document.createElement("div");
    calendarRef.current.appendChild(host);

    // Defer setup so StrictMode's first setup/cleanup never queues an embed.
    const setup = window.setTimeout(() => {
      if (!window.Cal.ns?.[namespace]) {
        window.Cal("init", namespace, { origin: "https://cal.com" });
      }

      window.Cal.ns[namespace]("inline", {
        elementOrSelector: host,
        calLink,
        config: {
          layout: "month_view",
          iframeAttrs: { title: "Book a Portuguese lesson" },
        },
      });
      window.Cal.ns[namespace]("ui", {
        theme: "light",
        layout: "month_view",
      });
    }, 0);

    return () => {
      window.clearTimeout(setup);
      host.remove();
    };
  }, [calLink, loadCalendar]);

  return (
    <section className={styles.section} id="booking" ref={sectionRef}>
      <SectionContainer>
        <div className={styles.bookingArea}>
          <div className={styles.intro}>
            <span>Choose your lesson time</span>

            <h2>
              Find the time and plan{" "}
              <span>that work for you.</span>
            </h2>

            <p>
              {selectedId === "trial"
                ? "Choose an available time for your trial Brazilian Portuguese lesson. Your booking will automatically adjust to your timezone."
                : "Choose an available time for your Brazilian Portuguese lesson. Your booking will automatically adjust to your timezone."}
            </p>

            <div className={styles.lessonDetails}>
              <label htmlFor="booking-plan">Choose your lesson or package</label>
              <select id="booking-plan" value={selectedId}
                aria-describedby={plan.lessons > 1 ? "package-disclosure" : undefined}
                onChange={(event) => {
                  const next = new URLSearchParams(searchParams);
                  next.set("plan", event.target.value);
                  setSearchParams(next);
                }}>
                {Object.entries(bookingPlans).map(([id, option]) => (
                  <option key={id} value={id}>{option.name} — {option.price}{option.lessons > 1 ? ` / ${option.lessons} lessons` : " / 50 minutes"}</option>
                ))}
              </select>
              <strong>{plan.name} · {plan.price}</strong>
              <p>{plan.lessons > 1 ? `${plan.lessons} lessons · 50 minutes each` : "50 minutes"}. Online via Google Meet. Secure payment during booking.</p>
            </div>
          </div>

          <div className={styles.integration}>
            {plan.lessons > 1 && (
              <div className={styles.disclosure} id="package-disclosure" role="status">
                <strong>Before you book</strong>
                <p>
                  Pay {plan.price} upfront for all {plan.lessons} lessons. Book your
                  first lesson through Cal.com and arrange the remaining sessions
                  directly with Thais during your first meeting. You may agree on a
                  consistent weekly schedule. To renew, purchase another package
                  through the website.
                </p>
              </div>
            )}
            <p className={styles.calendarLinks}><a href={`https://cal.com/${calLink}`} target="_blank" rel="noopener noreferrer">Open {plan.name} booking in a new tab ↗</a></p>
            <p className={styles.calendarLinks}><a href="https://wa.me/33766516346" target="_blank" rel="noopener noreferrer">Questions? Contact Thais on WhatsApp ↗</a></p>
            <p className={styles.calendarLinks}>
              Rescheduling requires at least 24 hours’ notice to Thais. With less
              notice, the lesson is considered used.
            </p>
            <div ref={calendarRef} className={styles.calendar} />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BookingEmbed;
