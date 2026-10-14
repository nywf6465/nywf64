import type { Metadata } from "next";
import Image from "next/image";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./periodicalsoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Magazine Articles of the Fair — Overview — nywf64.com",
  description:
    "Periodicals of the Fair — magazine articles covering the 1964/1965 New York World’s Fair, presented on nywf64.com.",
};

/**
 * Magazine Articles / Periodicals of the Fair overview — follows the
 * **overview** prototype (same stack as /booksoverview / /matwoverview /
 * /ibmoverview). Shared periodicalshero is reused on later periodicals
 * pages; display size matches the ibm01 / ibmoverview letter-height hero.
 */
export default function PeriodicalsOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Magazine Articles of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/periodicals/periodicalshero.jpg"
            alt='The “Magazine Articles on the Fair” — periodicals covering the 1964/1965 New York World’s Fair'
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PeriodicalsNavChrome />

      <section
        className={styles.overview}
        aria-label="Magazine Articles of the Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fair made headlines in 1964 and 1965 and was covered
              extensively by many publications. Discover the{" "}
              <span className={styles.emphasis}>Periodicals of the Fair</span>.
              Use the Navigate Menu to access the articles.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/periodicalsoverview/photo.jpg"
              alt="Magazine covers of Business Week, Time, Science Digest, and Newsweek from the Fair era"
              width={1763}
              height={892}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/periodicalsoverview"
      />
    </>
  );
}
