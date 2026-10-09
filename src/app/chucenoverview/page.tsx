import type { Metadata } from "next";
import Image from "next/image";
import { ChucenNavChrome } from "@/components/ChucenNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chucenoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Churchill Center — Overview — nywf64.com",
  description:
    "Churchill Center overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Churchill Center overview — follows the **overview** prototype
 * (same stack as /chucanoverview / /cengrioverview).
 */
export default function ChucenOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Churchill Center">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/chucenoverview/hero-banner.jpg"
            alt="Churchill Center at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChucenNavChrome />

      <section className={styles.overview} aria-label="Churchill Center overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The life and times of Sir Winston Churchill are re-created in
              photographs, models, paintings and personal effects.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/chucenoverview/photo.jpg"
              alt="Churchill Center — photographs, models, paintings and personal effects"
              width={1073}
              height={664}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/chucenoverview"
        overviewHref="/chucenoverview"
        nextHref="/chucen01"
      />
    </>
  );
}
