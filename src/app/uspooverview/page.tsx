import type { Metadata } from "next";
import Image from "next/image";
import { UspoNavChrome } from "@/components/UspoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./uspooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "U.S. Post Office — Overview — nywf64.com",
  description:
    "U.S. Post Office overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * U.S. Post Office overview — follows the **overview** prototype
 * (same stack as /africaoverview / /sierraoverview).
 */
export default function UspoOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="U.S. Post Office">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/uspooverview/hero-banner.jpg"
            alt="U.S. Post Office at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UspoNavChrome />

      <section className={styles.overview} aria-label="U.S. Post Office overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors climb a ramp to see one of America&apos;s most mechanized
              Post Offices in full operation.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/uspooverview/photo.jpg"
              alt="U.S. Post Office pavilion at the 1964/1965 New York World’s Fair"
              width={1526}
              height={1031}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/uspooverview"
        overviewHref="/uspooverview"
        nextHref="/uspo01"
      />
    </>
  );
}
