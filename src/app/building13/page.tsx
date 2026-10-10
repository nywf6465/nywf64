import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Changing Face of Flushing Meadow, Autumn 1963 — Building the Fair — nywf64.com",
  description:
    "Aerial photographs of Flushing Meadow Park in Autumn 1963 — Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — The Changing Face of Flushing Meadow, Autumn 1963.
 * Body from legacy building14.html (mapped to /building13 as Page 13 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building13Page() {
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

      <article className={styles.article} aria-labelledby="building13-title">
        <header className={styles.titleBar}>
          <h1 id="building13-title" className={styles.titleBarMain}>
            The Changing Face of Flushing Meadow Park, Autumn 1963
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.entry} aria-label="Industrial and International Areas">
            <p className={styles.caption}>
              Autumn, 1963. Nearly all pavilions have broken ground and the final
              push is on to complete the Fair for Opening Day in just six short
              months. Pipes and fixtures for the Fountains of the Planets can now
              be seen in the Pool of Industry. Work continues to progress on the
              Van Wyck snaking around the Fairgrounds. More and more pavilions in
              the Industrial Area are enclosed. Numerous International Pavilions
              begin to take shape.
            </p>
            <figure className={styles.figure}>
              <Image
                src="/images/building13/building79.jpg"
                alt="Industrial and International Areas"
                width={600}
                height={404}
                className={styles.photo}
                unoptimized
              />
            </figure>
          </section>

          <section
            className={styles.entry}
            aria-label="State and Federal and Transportation Areas"
          >
            <p className={styles.caption}>
              Unisphere nears completion. The &quot;square doughnut&quot; steel
              work of the Federal Pavilion can clearly be seen. The New York State
              Theaterama building begins to rise. The oval outline of the Vatican
              Pavilion is now visible and the Singer Bowl arena takes shape in
              the upper left corner of this photo. Work is in full swing in the
              Transportation Area of the Fair. Chrysler&apos;s Show-go-Round
              Theater is getting its roof. The triangular shaped Time and
              Temperature indicator atop the GM Pavilion&apos;s rotunda can be
              seen and construction is underway for the Hall of Science.
            </p>
            <figure className={styles.figure}>
              <Image
                src="/images/building13/building80.jpg"
                alt="State & Federal and Transportation Areas"
                width={600}
                height={384}
                className={styles.photo}
                unoptimized
              />
            </figure>
          </section>

          <section className={styles.pair} aria-label="Lake Area">
            <figure className={styles.pairPhoto}>
              <Image
                src="/images/building13/building81.jpg"
                alt="Lake Area"
                width={300}
                height={387}
                className={styles.photo}
                unoptimized
              />
            </figure>
            <p className={styles.pairCaption}>
              The Lake Area finally shows signs of major construction. The Music
              Hall and Hawaii Pavilions begin to take shape. Outlines of the
              foundation work for the Florida Pavilion are also noted. Across the
              Long Island Expressway from the Lake Area, the Kodak Pavilion&apos;s
              Picture Tower is in place (upper left-hand corner). Beneath Kodak,
              the star-shaped Christian Science pavilion is under construction.
            </p>
          </section>

          <p className={styles.source}>
            SOURCE: New York World&apos;s Fair Progress Report No. 9, September
            26, 1963
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building12"
        explicitPrevious
        nextHref="/building14"
      />
    </>
  );
}
