import type { Metadata } from "next";
import Image from "next/image";
import { MarylandNavChrome } from "@/components/MarylandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./marylandoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Maryland — Overview — nywf64.com",
  description:
    "Maryland overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Maryland overview — follows the **overview** prototype
 * (same stack as /malaysiaoverview / /mainmalloverview).
 * Wired with the shared **maryland menu**.
 * Route slug: `/marylandoverview`.
 */
export default function MarylandOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Maryland">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/marylandoverview/hero-banner.jpg"
            alt="Maryland at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MarylandNavChrome />

      <section className={styles.overview} aria-label="Maryland overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              On a fisherman&apos;s wharf a stand serves seafood; in the pavilion
              a film recreates the birth of &quot;The Star-spangled Banner.&quot;
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/marylandoverview/photo.jpg"
              alt="Maryland pavilion"
              width={1584}
              height={1034}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/marylandoverview"
        overviewHref="/marylandoverview"
        nextHref="/maryland01"
      />
    </>
  );
}
