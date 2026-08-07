import { FaBriefcase, FaComments, FaUserGraduate } from "react-icons/fa";

import InfoCard from "../../../common/InfoCard/InfoCard";
import SectionContainer from "../../../common/SectionContainer/SectionContainer";
import SectionHeading from "../../../common/SectionHeading/SectionHeading";

import styles from "./LessonsPreview.module.css";

function LessonsPreview() {
  return (
    <section className={styles.section} id="lessons">
      <SectionContainer>
        <SectionHeading
          eyebrow="Lessons"
          title="Choose your learning journey."
          description="Every student learns differently. Explore lesson formats designed around your goals, pace and interests."
          maxWidth="720px"
        />

        <div className={styles.grid}>
          <InfoCard
            icon={<FaUserGraduate />}
            title="Private Lessons"
            description="One-on-one lessons designed around your pace, interests and personal goals."
            href="/lessons"
            buttonLabel="Explore"
          />

          <InfoCard
            icon={<FaComments />}
            title="Conversation Practice"
            description="Build confidence through meaningful conversations in authentic Brazilian Portuguese."
            href="/lessons"
            buttonLabel="Explore"
          />

          <InfoCard
            icon={<FaBriefcase />}
            title="Business Portuguese"
            description="Develop the language skills needed for meetings, work and professional environments."
            href="/lessons"
            buttonLabel="Explore"
          />
        </div>

        <div className={styles.footer}>
          <a href="/lessons" className={styles.allLessonsLink}>
            View all lesson formats
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}

export default LessonsPreview;
