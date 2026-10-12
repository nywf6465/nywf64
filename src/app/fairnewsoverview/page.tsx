import type { Metadata } from "next";
import Image from "next/image";
import { FairNewsNavChrome } from "@/components/FairNewsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fairnewsoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fair News Newsletters — Overview — nywf64.com",
  description:
    "FAIR NEWS, the Official Bulletin of the 1964-1965 New York World’s Fair — complete set courtesy of the Bradd Schiffman collection on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

function FairNewsMark() {
  return (
    <span className={styles.fairMark}>
      <span className={styles.fairWord}>FAIR</span>{" "}
      <span className={styles.newsWord}>NEWS</span>
    </span>
  );
}

/**
 * Fair News Newsletters overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /minimodsoverview / /legaciesoverview).
 * Shared newshero is reused on later fairnews pages.
 */
export default function FairNewsOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fair News Newsletters">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fairnews/newshero.jpg"
            alt="FAIR NEWS Newsletters — Official Bulletin of the New York World’s Fair 1964-1965"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairNewsNavChrome />

      <section
        className={styles.overview}
        aria-label="Fair News Newsletters overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <BrandMark /> is pleased to present the complete set of{" "}
              <FairNewsMark />, the Official Bulletin of the 1964-1965 New York
              World&apos;s Fair.
            </p>
            <p className={styles.body}>
              This set is presented courtesy of the Bradd Schiffman collection.{" "}
              <BrandMark /> extends its gratitude to Bradd for making the
              documents available to us.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fairnewsoverview/photo.jpg"
              alt="FAIR NEWS — Official Bulletin of the New York World’s Fair 1964-1965"
              width={2170}
              height={725}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/fairnewsoverview"
        nextHref="/fairnews01"
      />
    </>
  );
}
