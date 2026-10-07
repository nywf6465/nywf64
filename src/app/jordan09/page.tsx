import type { Metadata } from "next";
import Image from "next/image";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./jordan09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Mural of a Refugee — Jordan — nywf64.com",
  description:
    "Brochure: Mural of a Refugee — Pavilion of Jordan at the 1964/1965 New York World’s Fair on nywf64.com.",
};

type PoemLine = { text: string; gap?: boolean };

/** Poem lines from legacy jordan09.html; preserve typos (practioners) and ..... wraps. */
const poemLeft: PoemLine[] = [
  { text: "Before you go," },
  { text: "Have you a minute to spare," },
  { text: "To hear a word on Palestine" },
  { text: "And perhaps to help us right a wrong?" },
  { text: "Ever since the birth of Christ", gap: true },
  { text: "And later with the coming of Mohammed," },
  { text: "Christians, Jews and Moslems, believers" },
  { text: ".....in one God," },
  { text: "Lived there in peaceful harmony." },
  { text: "For centuries it was so,", gap: true },
  { text: "Until strangers from abroad," },
  { text: "Professing one thing, but underneath," },
  { text: ".....another," },
  { text: "Began buying up land and stirring up the" },
  { text: ".....people." },
  { text: "Neighbors became enemies", gap: true },
  { text: "And fought against each other," },
  { text: "The strangers, once thought terror's victims," },
  { text: "Became terror's fierce practioners." },
  { text: "Seeking peace at all costs, including the", gap: true },
  { text: ".....cost of justice," },
  { text: "The blinded world, in solemn council, split" },
  { text: ".....the land in two," },
];

const poemRight: PoemLine[] = [
  { text: "Tossing to one side" },
  { text: "The right of self-determination." },
  { text: "What followed then perhaps you know.", gap: true },
  { text: "Seeking to redress the wrong, our nearby" },
  { text: ".....neighbors" },
  { text: "Tried to help us in our cause," },
  { text: "And for reasons, not in their control, did not" },
  { text: ".....succeed." },
  { text: "Today, there are a million of us,", gap: true },
  { text: "Some like us, but many like my mother," },
  { text: "Wasting their lives in exiled misery" },
  { text: "Waiting to go home." },
  { text: "But even now, to protect their gains ill-got,", gap: true },
  { text: "As if the land was theirs and had the right," },
  { text: "They're threatening to disturb the Jordan's" },
  { text: ".....course" },
  { text: "And make the desert bloom with warriors." },
  { text: "And who's to stop them?", gap: true },
  { text: "The world seems not to care, or is blinded" },
  { text: ".....still." },
  { text: "That's why I'm glad you stopped" },
  { text: "And heard the story." },
];

/**
 * Jordan — Mural of a Refugee (italic title).
 * Body from legacy jordan09.html (brochure reprint in two bordered panels).
 *
 * Stack: hero → JordanNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Jordan09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Jordan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/jordanoverview/hero-banner.jpg"
            alt="Jordan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JordanNavChrome />

      <article className={styles.article} aria-labelledby="jordan09-title">
        <header className={styles.titleBar}>
          <h1 id="jordan09-title" className={styles.titleBarMain}>
            Mural of a Refugee
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={`${styles.panel} ${styles.topPanel}`}>
            <div className={styles.leftCol}>
              <p className={styles.muralTitle}>Mural</p>
              <p className={styles.muralTitle}>Of A</p>
              <p className={styles.muralTitle}>Refugee</p>
              <p className={styles.pavilionOf}>Pavilion of</p>
              <p className={styles.jordanSpaced}>Jordan</p>
              <p className={styles.holyLand}>The Holy Land</p>
              <Image
                src="/images/jordan09/jordan14.jpg"
                alt="Artist's Rendering - Jordan Pavilion"
                width={300}
                height={238}
                className={styles.panelPhoto}
                unoptimized
              />
            </div>

            <div className={styles.rightCol}>
              <Image
                src="/images/jordan09/jordan15.jpg"
                alt="Jordanian Clothing Display"
                width={300}
                height={230}
                className={styles.panelPhoto}
                unoptimized
              />
              <div className={styles.exhibitIntro}>
                <p>At the</p>
                <h2>Jordan Pavilion</h2>
                <p>You can visit:</p>
              </div>
              <div className={styles.exhibitList}>
                <h3>The Holy Land Exhibit</h3>
                <p>A photographic survey of the Holy Places in Jordan.</p>
                <h3>Cradle of Civilization Exhibit</h3>
                <p>
                  An exhibit of the archaeological findings in Jordan. Of interest
                  are the finds illustrating the evolution of lamps in history.
                </p>
                <h3>Modern Jordan</h3>
                <p>Educational, Industrial and Economic Progress.</p>
                <h3>The Dead Sea Scrolls Exhibit</h3>
                <p>
                  The Dead Sea Scrolls which were uncovered as a result of the
                  most sensational discovery of the century are at the Jordan
                  Pavilion in New York.
                </p>
                <h3>Theater</h3>
                <p>Films about different aspects of the country will be shown.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.panel} ${styles.muralPanel}`}>
            <Image
              src="/images/jordan09/jordan16.jpg"
              alt="Mural of a Refugee"
              width={600}
              height={386}
              className={styles.muralScan}
              unoptimized
            />
            <div className={styles.poemGrid}>
              <div className={styles.poemCol}>
                {poemLeft.map((line) => (
                  <p
                    key={`${line.text}-${line.gap ? "g" : "n"}`}
                    className={line.gap ? styles.stanzaGap : undefined}
                  >
                    {line.text}
                  </p>
                ))}
              </div>
              <div className={styles.poemCol}>
                {poemRight.map((line) => (
                  <p
                    key={`${line.text}-${line.gap ? "g" : "n"}`}
                    className={line.gap ? styles.stanzaGap : undefined}
                  >
                    {line.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <p className={styles.source}>
            SOURCE: Brochure: Mural of a Refugee - Pavilion of Jordan
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/jordan08"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordan10"
      />
    </>
  );
}
