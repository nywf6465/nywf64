import type { Metadata } from "next";
import Image from "next/image";
import { AmerisrNavChrome } from "@/components/AmerisrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amerisroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "American-Israel Pavilion — Overview — nywf64.com",
  description:
    "American-Israel Pavilion overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * American-Israel Pavilion overview — follows the **overview** prototype
 * (same stack as /lightingoverview / /poorefoverview).
 */
export default function AmerisrOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="American-Israel Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/amerisroverview/hero-banner.jpg"
            alt="American-Israel Pavilion at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmerisrNavChrome />

      <section
        className={styles.overview}
        aria-label="American-Israel Pavilion overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              In this spiral-shaped building, the visitor walks through the
              sights and sounds of 4,000 years of Jewish history.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/amerisroverview/photo.jpg"
              alt="American-Israel Pavilion — spiral-shaped building"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/amerisroverview"
        overviewHref="/amerisroverview"
        nextHref="/amerisr01"
      />
    </>
  );
}
