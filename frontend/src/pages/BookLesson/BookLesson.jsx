import BookingHero from "./sections/BookingHero/BookingHero";
import TrialDetails from "./sections/TrialDetails/TrialDetails";
import BookingFlow from "./sections/BookingFlow/BookingFlow";
import BookingEmbed from "./sections/BookingEmbed/BookingEmbed";

import styles from "./BookLesson.module.css";

function BookLesson() {
  return (
    <main className={styles.page}>
      <BookingHero />
      <TrialDetails />
      <BookingFlow />
      <BookingEmbed />
    </main>
  );
}

export default BookLesson;
