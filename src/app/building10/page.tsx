import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Changing Face of Flushing Meadow, 1961-1962 — Building the Fair — nywf64.com",
  description:
    "Aerial photographs of Flushing Meadow Park transforming into Fairgrounds, 1961-1962 — Building the Fair on nywf64.com.",
};

const AERIALS = [
  {
    date: "January 16, 1961",
    src: "building89.jpg",
    alt: "Aerial, January 16, 1961",
    width: 600,
    height: 541,
    caption:
      'Flushing Meadow is still very much a park in this photograph taken in late summer, 1960. The partially completed ("H" shaped) Administration Building in the lower left-hand corner of the picture is the only visible sign that a World\'s Fair is about to overtake the park.',
  },
  {
    date: "May 8, 1961",
    src: "building43.jpg",
    alt: "Aerial, May 8, 1961",
    width: 600,
    height: 539,
    caption:
      "Early spring, 1961. The Administration Building now seems to be completed. No other visible signs of progress can be seen as yet.",
  },
  {
    date: "September 14, 1961",
    src: "building46.jpg",
    alt: "Aerial, September 14, 1961",
    width: 600,
    height: 531,
    caption:
      'Summer, 1961. The first signs of construction have begun to appear. Although the Flushing River still runs completely through the park, roadways which will outline the massive "Pool of Industry" are beginning to appear. One of the first projects undertaken by the Fair Corporation was to "bury" the Flushing River in underground conduits in order to gain additional acerage of exhibit space in the Industrial Area of the Fair (see page six). In the process, the oval-shaped "Lagoon of Nations" of the 1939/1940 World\'s Fair would become the 670-foot diameter "Pool of Industry."',
  },
  {
    date: "January 17, 1962",
    src: "building48.jpg",
    alt: "Aerial, January 17, 1962",
    width: 600,
    height: 538,
    caption:
      'This photograph, taken in late autumn of 1961 shows continuing work on the "Pool of Industry." The circular shape of the pool is now fully outlined. The park itself is beginning to show the scars of construction as multiple dirt paths begin to criss-cross the site.',
  },
  {
    date: "May 17, 1962",
    src: "building55.jpg",
    alt: "Aerial, May 17, 1962",
    width: 600,
    height: 504,
    caption:
      "This photograph appears to have been taken in late winter or very early spring, 1962. The circular area that would become the site of the Federal Pavilion, Kennedy Circle, is beginning to take shape to the left and across the tracks from the Administration Building.",
  },
  {
    date: "September 12, 1962",
    src: "building61.jpg",
    alt: "Aerial, September 12, 1962",
    width: 600,
    height: 540,
    caption:
      'By the summer of 1962 construction of the Fair was fully underway. Many temporary paths cross the former park. This photograph shows the beginning of pavilion construction. The circular foundation of the General Electric Pavilion can now be seen rising at the lower right of the "Pool of Industry." To the left of the pool can be seen the foundation work for the Gas Companies Pavilion. Across the Grand Central Parkway, in the lower portion of the photograph, foundation work is underway for the General Motors Pavilion and the site of the Ford Pavilion is being cleared. Above and to the right of the Grand Central Parkway, site work is underway for the New York State Pavilion as well.',
    source: (
      <>
        SOURCE: New York World&apos;s Fair <em>Progress Reports No. 1 - 6</em>,
        1961 and 1962
      </>
    ),
  },
] as const;

/**
 * Building the Fair — The Changing Face of Flushing Meadow, 1961-1962.
 * Body from legacy building11.html (mapped to /building10 as Page 10 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Building the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/building/buildinghero.jpg"
            alt="Building the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BuildingNavChrome />

      <article className={styles.article} aria-labelledby="building10-title">
        <header className={styles.titleBar}>
          <h1 id="building10-title" className={styles.titleBarMain}>
            The Changing Face of Flushing Meadow Park, 1961-1962
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            A series of aerial photographs published in the New York World&apos;s
            Fair Corporations&apos; <em>Progress Reports</em>, show the changes in
            Flushing Meadow Park between 1961 and 1963 as it was transformed into
            Fairgrounds.
          </p>

          {AERIALS.map((entry) => (
            <section
              key={entry.date}
              className={styles.entry}
              aria-labelledby={`date-${entry.src}`}
            >
              <h2 id={`date-${entry.src}`} className={styles.dateLabel}>
                {entry.date}
              </h2>
              <figure className={styles.figure}>
                <Image
                  src={`/images/building10/${entry.src}`}
                  alt={entry.alt}
                  width={entry.width}
                  height={entry.height}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>{entry.caption}</figcaption>
              </figure>
              {"source" in entry && entry.source ? (
                <p className={styles.source}>{entry.source}</p>
              ) : null}
            </section>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/building09"
        explicitPrevious
        nextHref="/building11"
      />
    </>
  );
}
