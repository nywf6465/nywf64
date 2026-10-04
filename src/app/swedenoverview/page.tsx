import type { Metadata } from "next";
import Image from "next/image";
import { SwedenNavChrome } from "@/components/SwedenNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./swedenoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sweden — Overview — nywf64.com",
  description:
    "Sweden overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sweden overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /spainoverview).
 */
export default function SwedenOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sweden">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/swedenoverview/hero-banner.jpg"
            alt="Sweden at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwedenNavChrome />

      <section className={styles.overview} aria-label="Sweden overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              In unusual exhibits, a creative country displays its many skills
              in technology, design and cuisine.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/swedenoverview/photo.jpg"
              alt="Sweden Pavilion — blue facade with crown motifs and plaza"
              width={1598}
              height={984}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/swedenoverview"
        overviewHref="/swedenoverview"
        nextHref="/sweden01"
      />
    </>
  );
}
