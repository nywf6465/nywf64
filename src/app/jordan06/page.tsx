import type { Metadata } from "next";
import Image from "next/image";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { JORDAN06_TRANSCRIPTION } from "./jordan06Transcription";
import styles from "./jordan06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Jordan — nywf64.com",
  description:
    "Groundbreaking pamphlet scans — Jordan Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Jordan06Page() {
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

      <article className={styles.article} aria-labelledby="jordan06-title">
        <header className={styles.titleBar}>
          <h1 id="jordan06-title" className={styles.titleBarMain}>
            Pamphlet: Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/jordan06/jordan03.jpg"
            alt="Groundbreaking pamphlet"
            width={600}
            height={392}
            className={styles.scan}
            unoptimized
          />

          <p className={styles.architectNote}>
            The Pavilion of The Hashemite Kingdom of Jordan will be a one-story
            structure with a concrete roof covered with gold mosaic. The gently
            rolling roof will depict Jordan as a land of sun, blue skies, sand,
            hills, mosques and churches, catacombs and tents. The exterior walls
            will portray the fourteen Stations of the Cross, and the interior will
            include bazaar-type exhibits specializing in products indigenous to
            the region. Mr. Victor Bisharat of Pasadena, California is the
            architect.
          </p>

          <Image
            src="/images/jordan06/jordan04.jpg"
            alt="Groundbreaking pamphlet"
            width={600}
            height={230}
            className={styles.scan}
            unoptimized
          />

          <div className={styles.scanGrid}>
            {[
              { src: "jordan05.jpg", w: 300, h: 237 },
              { src: "jordan06.jpg", w: 300, h: 261 },
              { src: "jordan07.jpg", w: 300, h: 348 },
            ].map((item) => (
              <figure key={item.src} className={styles.scanGridItem}>
                <Image
                  src={`/images/jordan06/${item.src}`}
                  alt="Groundbreaking pamphlet"
                  width={item.w}
                  height={item.h}
                  className={styles.scanSmall}
                  unoptimized
                />
              </figure>
            ))}
          </div>

          <Image
            src="/images/jordan06/jordan08.jpg"
            alt="Groundbreaking pamphlet"
            width={600}
            height={409}
            className={styles.scan}
            unoptimized
          />

          {JORDAN06_TRANSCRIPTION.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className={styles.transcript}>
              {paragraph}
            </p>
          ))}

          <p className={styles.source}>
            SOURCE: Groundbreaking Brochure, The Pavilion of The Hashemite
            Kingdom of Jordan
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/jordan05"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordan07"
      />
    </>
  );
}
