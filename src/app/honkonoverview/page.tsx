import type { Metadata } from "next";
import Image from "next/image";
import { HonkonNavChrome } from "@/components/HonkonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./honkonoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Hong Kong — Overview — nywf64.com",
  description:
    "Hong Kong overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hong Kong overview — follows the **overview** prototype
 * (same stack as /hertzoverview / /hawaiioverview / /hollywoodlywoodoverview).
 */
export default function HonkonOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hong Kong">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/honkonoverview/hero-banner.jpg"
            alt="Hong Kong at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HonkonNavChrome />

      <section className={styles.overview} aria-label="Hong Kong overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The bustling East-meets-West air of the British crown colony is
              recreated in restaurants and shops.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/honkonoverview/photo.jpg"
              alt="Hong Kong — restaurants and shops recreating the British crown colony"
              width={1584}
              height={1067}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/honkonoverview"
        overviewHref="/honkonoverview"
        nextHref="/honkon01"
      />
    </>
  );
}
