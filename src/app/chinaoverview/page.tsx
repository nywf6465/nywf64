import type { Metadata } from "next";
import Image from "next/image";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chinaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "China — Overview — nywf64.com",
  description:
    "China overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * China overview — follows the **overview** prototype
 * (same stack as /cengrioverview / /cenameriverview).
 */
export default function ChinaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="China">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/chinaoverview/hero-banner.jpg"
            alt="China at the 1964/1965 New York World’s Fair"
            width={1906}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChinaNavChrome />

      <section className={styles.overview} aria-label="China overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Ancient bronzes, porcelain and ivory carvings are among the rare
              art objects shown in the replica of an emperor&apos;s palace.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/chinaoverview/photo.jpg"
              alt="China — emperor's palace replica with art objects"
              width={1531}
              height={1027}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/chinaoverview"
        overviewHref="/chinaoverview"
        nextHref="/china01"
      />
    </>
  );
}
