import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Changing Face of Flushing Meadow, Winter 1963 — Building the Fair — nywf64.com",
  description:
    "Aerial photographs of Flushing Meadow Park in Winter 1963 — Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — The Changing Face of Flushing Meadow, Winter 1963.
 * Body from legacy building12.html (mapped to /building11 as Page 11 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building11Page() {
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

      <article className={styles.article} aria-labelledby="building11-title">
        <header className={styles.titleBar}>
          <h1 id="building11-title" className={styles.titleBarMain}>
            The Changing Face of Flushing Meadow Park, Winter 1963
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.entry} aria-label="Industrial and International Areas">
            <p className={styles.caption}>
              Autumn, 1962. The Industrial and International Areas of the
              Fairgrounds. Construction continues on the circular shaped General
              Electric Pavilion. On the other side of the Pool of Industry, work
              is underway on the Traveler&apos;s Insurance Pavilion as well. The
              reflecting pools for the Lunar and Solar fountains are now in place
              and work is progressing on the Kodak Pavilion in the lower
              right-hand corner of the photo. The Van Wyck Expressway extension
              construction curves along the top of the photograph. At the center
              left, an outbound airliner from LaGuardia Airport departs over the
              Fairgrounds.
            </p>
            <figure className={styles.figure}>
              <Image
                src="/images/building11/building64.jpg"
                alt="Industrial and International Areas"
                width={600}
                height={490}
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
              The massive columns of the New York State Pavilion cast visible
              shadows on the ground in the upper right-hand corner of this view
              of the State &amp; Federal and Transportation Areas of the Fair.
              Work is in full swing on the Ford and General Motors Pavilions. The
              white-roofed &quot;L&quot; shaped building in the lower left of the
              photo, is the Fair&apos;s Press Building.
            </p>
            <figure className={styles.figure}>
              <Image
                src="/images/building11/building65.jpg"
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
                src="/images/building11/building66.jpg"
                alt="Lake Area"
                width={300}
                height={494}
                className={styles.photo}
                unoptimized
              />
              <p className={styles.source}>
                SOURCE: New York World&apos;s Fair Progress Report No. 7, January
                24, 1963
              </p>
            </figure>
            <p className={styles.pairCaption}>
              The New York State Amphitheater is the most prominent structure in
              this view of the Lake Area. The Van Wyck Expressway extension
              crosses the top of the photo.
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building10"
        explicitPrevious
        nextHref="/building12"
      />
    </>
  );
}
