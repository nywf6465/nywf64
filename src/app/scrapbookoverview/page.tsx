import type { Metadata } from "next";
import Image from "next/image";
import { ScrapbookHero } from "@/components/ScrapbookHero";
import { ScrapbookNavChrome } from "@/components/ScrapbookNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./scrapbookoverview.module.css";

export const metadata: Metadata = {
  title: "World’s Fair Scrapbook — Overview — nywf64.com",
  description:
    "World’s Fair Scrapbook — New York Sunday News weekly photograph series from the 1964/1965 New York World’s Fair, on nywf64.com.",
};

/**
 * World’s Fair Scrapbook overview — follows the overview prototype
 * (same stack as /matchbooksoverview / /photolaboverview).
 * Hero canvas matches ibm01 (1905×826) via ScrapbookHero.
 * Nav bar shows Page 1 (`scrapbookoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /artifacts. NEXT hidden until the first gallery page ships.
 */
export default function ScrapbookOverviewPage() {
  return (
    <>
      <ScrapbookHero />

      <ScrapbookNavChrome />

      <section
        className={styles.overview}
        aria-label="World’s Fair Scrapbook overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The New York Sunday News published a weekly series titled{" "}
              <strong>World&apos;s Fair Scrapbook</strong> that looked at the
              Fair through the camera&apos;s lens. We&apos;re delighted to
              present a large selection of photographs from the series for your
              enjoyment.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/scrapbookoverview/photo.jpg"
              alt="World’s Fair Photo Scrap Book cover — New York World’s Fair 1964-65"
              width={1326}
              height={1186}
              sizes="(max-width: 720px) 90vw, 28rem"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/scrapbookoverview"
        hideNext
      />
    </>
  );
}
