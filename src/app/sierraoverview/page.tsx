import type { Metadata } from "next";
import Image from "next/image";
import { SierraNavChrome } from "@/components/SierraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sierraoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sierra Leone — Overview — nywf64.com",
  description:
    "Sierra Leone overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Sierra Leone overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /africaoverview).
 */
export default function SierraOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sierra Leone">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/sierraoverview/hero-banner.jpg"
            alt="Sierra Leone at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SierraNavChrome />

      <section className={styles.overview} aria-label="Sierra Leone overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Two troupes perform intricate dances, and acrobats entertain with
              feats of skill and precision.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/sierraoverview/photo.jpg"
              alt="Sierra Leone pavilion at the 1964/1965 New York World’s Fair"
              width={1562}
              height={1007}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/sierraoverview"
        overviewHref="/sierraoverview"
        nextHref="/sierra01"
      />
    </>
  );
}
