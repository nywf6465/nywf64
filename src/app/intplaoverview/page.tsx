import type { Metadata } from "next";
import Image from "next/image";
import { IntplaNavChrome } from "@/components/IntplaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intplaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "International Plaza — Overview — nywf64.com",
  description:
    "International Plaza overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * International Plaza overview — follows the **overview** prototype
 * (same stack as /africaoverview / /indiaoverview).
 * Route slug: `/intplaoverview`.
 */
export default function IntplaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="International Plaza">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/intplaoverview/hero-banner.jpg"
            alt="International Plaza at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IntplaNavChrome />

      <section
        className={styles.overview}
        aria-label="International Plaza overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A host of small exhibits, food stands and shops lends a festive
              air to this bazaar of many lands.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/intplaoverview/photo.jpg"
              alt="International Plaza — bazaar of exhibits, food stands, and shops"
              width={1584}
              height={896}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/intpla04"
        overviewHref="/intplaoverview"
        nextHref="/intpla01"
      />
    </>
  );
}
