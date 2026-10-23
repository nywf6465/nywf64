import type { Metadata } from "next";
import Image from "next/image";
import { MatchbooksHero } from "@/components/MatchbooksHero";
import { MatchbooksNavChrome } from "@/components/MatchbooksNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matchbooksoverview.module.css";

export const metadata: Metadata = {
  title: "World’s Fair Matchbook Collection — Overview — nywf64.com",
  description:
    "World’s Fair Matchbook Collection — colorful matchbook souvenirs dispensed at the 1964/1965 New York World’s Fair, on nywf64.com.",
};

/**
 * World’s Fair Matchbook Collection overview — follows the overview prototype
 * (same stack as /photolaboverview / /archoverview).
 * Hero canvas matches ibm01 (1905×826) via MatchbooksHero.
 * No Page notation (`matchbooksoverview` is not a numbered route).
 * PREVIOUS → /artifacts; NEXT hidden until the first gallery page ships.
 */
export default function MatchbooksOverviewPage() {
  return (
    <>
      <MatchbooksHero />

      <MatchbooksNavChrome />

      <section
        className={styles.overview}
        aria-label="World’s Fair Matchbook Collection overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Back in the day before disposable lighters were common, nearly
              everyone carried a book of matches in their pocket or purse.{" "}
              <strong>Matchbooks</strong> were dispensed freely to Fairgoers by
              the Fair&apos;s many restaurants and exhibits. We invite you to
              view our presentation of these colorful souvenirs of the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/matchbooksoverview/photo.jpg"
              alt="Caribbean Pavilion matchbook — New York World’s Fair 1964-65"
              width={836}
              height={1882}
              sizes="(max-width: 720px) 70vw, 22rem"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/matchbooksoverview"
        hideNext
      />
    </>
  );
}
