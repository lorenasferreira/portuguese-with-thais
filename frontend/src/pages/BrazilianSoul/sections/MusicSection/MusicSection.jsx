import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import { artists } from "../../cultureData";

import styles from "./MusicSection.module.css";

function MusicSection() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.header}>
          <span>01 — Listen</span>

          <h2>
            Start with
            <span>the sound.</span>
          </h2>

          <p>
            Music is one of the richest ways to notice pronunciation, rhythm,
            vocabulary and emotion in Brazilian Portuguese.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.image}>
            <img
              src="/images/method/pandeiro-salvador.png"
              alt="Pandeiro being played in Salvador"
            />
          </div>

          <div className={styles.artists}>
            {artists.map((artist) => (
              <article key={artist.name}>
                <div className={styles.artistTop}>
                  <h3>{artist.name}</h3>
                  <span>{artist.suggestion}</span>
                </div>

                <p>{artist.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.playlist}>
          <div className={styles.playlistIntro}>
            <span>Thais&apos; Brazilian Playlist</span>

            <h3>
              Keep listening
              <span>beyond the lesson.</span>
            </h3>

            <p>
              A selection of Brazilian music to explore pronunciation, rhythm,
              vocabulary and culture through the songs Thais recommends.
            </p>
          </div>

          <div className={styles.spotify}>
            <iframe
              src="https://open.spotify.com/embed/playlist/6yYlhZC2IguO7nJYgJGotf"
              title="Thais' Brazilian playlist"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default MusicSection;
