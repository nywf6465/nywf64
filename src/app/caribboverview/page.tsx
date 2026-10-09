import type { Metadata } from "next";
import Image from "next/image";
import { CaribbNavChrome } from "@/components/CaribbNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./caribboverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Caribbean — Overview — nywf64.com",
  description:
    "Caribbean overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Caribbean overview — follows the **overview** prototype
 * (same stack as /brilionoverview / /braraioverview).
 */
export default function CaribbOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Caribbean">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/caribboverview/hero-banner.jpg"
            alt="Caribbean at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CaribbNavChrome />

      <section className={styles.overview} aria-label="Caribbean overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A steel band plays in a terrace cafe; shops sell souvenirs.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/caribboverview/photo.jpg"
              alt="Caribbean — steel band and shops"
              width={958}
              height={647}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/caribboverview"
        overviewHref="/caribboverview"
        nextHref="/caribb01"
      />
    </>
  );
}
