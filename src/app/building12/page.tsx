import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Changing Face of Flushing Meadow, Spring 1963 — Building the Fair — nywf64.com",
  description:
    "Aerial photographs of Flushing Meadow Park in Spring 1963 — Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — The Changing Face of Flushing Meadow, Spring 1963.
 * Body from legacy building13.html (mapped to /building12 as Page 12 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building12Page() {
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

      <article className={styles.article} aria-labelledby="building12-title">
        <header className={styles.titleBar}>
          <h1 id="building12-title" className={styles.titleBarMain}>
            The Changing Face of Flushing Meadow Park, Spring 1963
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.entry} aria-label="Industrial and International Areas">
            <p className={styles.caption}>
              Spring, 1963. With one year to go until the opening of the Fair,
              Flushing Meadow is a park no more. It has truly become a
              construction site. Many familiar pavilions are now beginning to
              rise from the Fairgrounds. Construction of the Bell System pavilion
              is now underway at the top of the Pool of Industry. Coca-Cola,
              DuPont, Johnson Wax, IBM and the Tower of Light can be seen taking
              shape. General Electric now has its famous dome. The Main Entrance
              to the Fair in the left-center of the picture is nearing
              completion.
            </p>
            <figure className={styles.figure}>
              <Image
                src="/images/building12/building72.jpg"
                alt="Industrial and International Areas"
                width={600}
                height={485}
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
              More work abounds in the State &amp; Federal and Transportation
              Areas. Construction for Unisphere has begun and foundation work is
              progress for the Federal Pavilion in the circular site in the upper
              left of the photo. The familiar shapes of the Ford and GM pavilions
              can be clearly seen. The Port Authority Heliport nears completion
              in the bottom-center of the photograph and work has begun on the
              oval-shaped lagoon of the Chrysler exhibit.
            </p>
            <figure className={styles.figure}>
              <Image
                src="/images/building12/building73.jpg"
                alt="State & Federal and Transportation Areas"
                width={600}
                height={364}
                className={styles.photo}
                unoptimized
              />
            </figure>
          </section>

          <section className={styles.pair} aria-label="Lake Area">
            <figure className={styles.pairPhoto}>
              <Image
                src="/images/building12/building74.jpg"
                alt="Lake Area"
                width={300}
                height={500}
                className={styles.photo}
                unoptimized
              />
              <p className={styles.source}>
                SOURCE: New York World&apos;s Fair Progress Report No. 8,
                <br />
                April 22, 1963
              </p>
            </figure>
            <p className={styles.pairCaption}>
              The New York State Amphitheater is still the most prominent
              structure in this view of the Lake Area. Work seems to have gotten
              underway for the Texas Pavilions and Music Hall in the area just
              above the Amphitheater..
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building11"
        explicitPrevious
        nextHref="/building13"
      />
    </>
  );
}
