import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./buildingoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Building the Fair — Overview — nywf64.com",
  description:
    "Building the Fair overview — planning and construction of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Building the Fair overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /true_fairoverview).
 * Shared buildinghero is reused on later building pages.
 */
export default function BuildingOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Building the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/building/buildinghero.jpg"
            alt="Building the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BuildingNavChrome />

      <section
        className={styles.overview}
        aria-label="Building the Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              It was one of the greatest engineering marvels of the
              mid-twentieth century --{" "}
              <strong>Building the New York World&apos;s Fair.</strong> Where
              does one begin to tell the story of such an amazing feat? Join us
              in a look back at the planning and construction of New
              York&apos;s &quot;Billion Dollar Dream Fair.&quot;
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/buildingoverview/photo.jpg"
              alt="Unisphere under construction at the New York World’s Fair"
              width={1298}
              height={1212}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/information"
        explicitPrevious
        overviewHref="/buildingoverview"
        nextHref="/building01"
      />
    </>
  );
}
