import type { Metadata } from "next";
import Image from "next/image";
import { JulfarNavChrome } from "@/components/JulfarNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./julfaroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Julimar Farm — Overview — nywf64.com",
  description:
    "Julimar Farm overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Julimar Farm overview — follows the **overview** prototype
 * (same stack as /jordanoverview / /japanoverview).
 * Wired with the shared **julfar menu**.
 * Route slug: `/julfaroverview`.
 */
export default function JulfarOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Julimar Farm">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/julfaroverview/hero-banner.jpg"
            alt="Julimar Farm at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JulfarNavChrome />

      <section className={styles.overview} aria-label="Julimar Farm overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Gardens from many lands are featured at this pavilion.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/julfaroverview/photo.jpg"
              alt="Julimar Farm — gardens from many lands"
              width={1584}
              height={955}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/julfar04"
        overviewHref="/julfaroverview"
        nextHref="/julfar01"
      />
    </>
  );
}
