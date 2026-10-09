import type { Metadata } from "next";
import Image from "next/image";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./spacpark10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Releases — Space Park — nywf64.com",
  description:
    "NASA press releases for the U.S. Space Park at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const RELEASES = [
  {
    image: { src: "ussppk09.jpg", width: 460, height: 366, alt: "Saturn, Gemini, Mercury" },
    caption: [
      "Saturn, Gemini and Mercury - Shown here at the U.S. Space Park, New York World's Fair, are (left to right) full scale models of:",
      "The propulsion section of the first, or S-IC stage, of the Saturn V which will launch the three man Apollo spacecraft toward the Moon.",
      "The taller Titan II launch vehicle, and atop it, the Gemini spacecraft in which two astronauts will orbit the Earth in long duration flights and later conduct rendezvous and docking operations (meeting and coupling with another spacecraft in orbit).",
      "And the somewhat shorter than Titan II Mercury-Atlas. This is the first time the famed man-carrying Mercury spacecraft (in which Astronauts Glenn, Carpenter, Schirra and Cooper separately made successful Earth orbital flights) has ever been mated atop the Atlas launch vehicle outside Cape Kennedy. Topping the spacecraft is the Mercury escape tower.",
    ],
  },
  {
    image: { src: "ussppk10.jpg", width: 400, height: 498, alt: "X-15 and Thor-Delta" },
    caption: [
      "U.S. Space Park, New York World's Fair -- Seen in the foreground is the forward section of the full-scale X-15 research aircraft. Jointly sponsored and built by the National Aeronautics and Space Administration, the Air Force, and Navy, the plane is operated under NASA management to explore ultrasonic flight problems.",
      "Immediately behind the X-15 is the Thor-Delta launch vehicle, also in full scale, which has successfully placed 22 spacecraft in Earth orbit. Among these are the Telstar, Relay, Echo and Syncom communications satellites, and the Tiros weather satellites, all on view at the Space Park.",
      "Behind it are seen first the Atlas-Mercury manned spaceflight launch vehicle and spacecraft (full-scale) and then the Titan II-Gemini launch vehicle and spacecraft (full-scale).",
    ],
  },
  {
    image: { src: "ussppk11.jpg", width: 460, height: 367, alt: "Gemini spacecraft" },
    caption: [
      "U.S. Space Park, New York World's Fair -- Shown here is a full-scale representation of the Gemini spacecraft, in which two astronauts will be placed in Earth orbit for as long as two weeks, as well as meeting and coupling up with another spacecraft.",
      "To the right may be seen the lower section of the Titan II launch vehicle, which will lift the Gemini spacecraft into orbit.",
    ],
  },
] as const;

export default function Spacpark10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Space Park">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/spacparkoverview/hero-banner.jpg"
            alt="Space Park at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpacparkNavChrome />

      <article className={styles.article} aria-labelledby="spacpark10-title">
        <header className={styles.titleBar}>
          <h1 id="spacpark10-title" className={styles.titleBarMain}>
            Press Releases
          </h1>
        </header>

        <div className={styles.articleInner}>
          {RELEASES.map((release) => (
            <section key={release.image.src} className={styles.release}>
              <figure className={`${styles.figure} ${styles.figureWide}`}>
                <Image
                  src={`/images/spacpark10/${release.image.src}`}
                  alt={release.image.alt}
                  width={release.image.width}
                  height={release.image.height}
                  unoptimized
                />
              </figure>
              {release.caption.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className={styles.caption}>
                  {paragraph}
                </p>
              ))}
              <p className={styles.source}>
                Source: <em>Undated NASA Press Release</em>
              </p>
            </section>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/spacpark09"
        explicitPrevious
        overviewHref="/spacparkoverview"
        nextHref="/spacpark11"
      />
    </>
  );
}
