import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import styles from "./MusicSection.module.css";

const featuredArtists = [
  {
    name: "Gilberto Gil",
    image: "/images/brazilian-soul/gilberto-gil.jpg",
  },
  {
    name: "Caetano Veloso",
    image: "/images/brazilian-soul/caetano-veloso.jpg",
  },
  {
    name: "Djavan",
    image: "/images/brazilian-soul/djavan.jpg",
  },
  {
    name: "Maria Bethânia",
    image: "/images/brazilian-soul/maria-bethania.jpg",
  },
  {
    name: "Elis Regina",
    image: "/images/brazilian-soul/elis-regina.jpg",
  },
];

function MusicSection() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.header}>
          <span>01 — Listen</span>

          <h2>
            Dive into
            <span>Brazilian music.</span>
          </h2>

          <p>
            You can&apos;t truly understand Brazil without exploring its music,
            a rich, diverse universe and one of the most important in the world.
            With icons like Gilberto Gil, Caetano Veloso, Djavan, Maria Bethânia
            and Elis Regina, Brazilian music is a key to the country&apos;s
            soul.
          </p>

          <p>
            To help you dive deeper, I&apos;ve created a Spotify playlist for my
            students. Listen, study and discover more about Brazil through its
            music.
          </p>
        </div>

        <div className={styles.artistGallery}>
          {featuredArtists.map((artist) => (
            <figure key={artist.name} className={styles.artist}>
              <img src={artist.image} alt={artist.name} />
              <figcaption>{artist.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.playlist}>
          <div className={styles.playlistIntro}>
            <span>Thais&apos; Brazilian Playlist</span>

            <h3>
              Keep listening
              <span>beyond the lesson.</span>
            </h3>
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
