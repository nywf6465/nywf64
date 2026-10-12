import type { Metadata } from "next";
import Image from "next/image";
import { ReportNavChrome } from "@/components/ReportNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./reportoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "World’s Fair Progress Reports — Overview — nywf64.com",
  description:
    "Progress Reports of the 1964-1965 New York World’s Fair — complete set courtesy of the Bradd Schiffman collection on nywf64.com.",
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

/**
 * World’s Fair Progress Reports overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /fairnewsoverview / /minimodsoverview).
 * Shared reporthero is reused on later report pages.
 */
export default function ReportOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="World’s Fair Progress Reports">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/report/reporthero.jpg"
            alt="World’s Fair Progress Reports — 1964/1965 New York World’s Fair"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ReportNavChrome />

      <section
        className={styles.overview}
        aria-label="World’s Fair Progress Reports overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <BrandMark /> is pleased to present the complete set of{" "}
              <span className={styles.progressMark}>Progress Reports</span> of
              the 1964-1965 New York World&apos;s Fair.
            </p>
            <p className={styles.body}>
              This set is presented courtesy of the Bradd Schiffman collection.{" "}
              <BrandMark /> extends its gratitude to Bradd for making the
              documents available to us.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/reportoverview/photo.jpg"
              alt="New York World’s Fair Progress Report newsletters — May, July, and November 1964"
              width={1918}
              height={820}
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
        overviewHref="/reportoverview"
        nextHref="/report01"
      />
    </>
  );
}
