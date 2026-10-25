import type { Metadata } from "next";
import Image from "next/image";
import { ViewMastersHero } from "@/components/ViewMastersHero";
import { ViewMastersNavChrome } from "@/components/ViewMastersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./vmoverview.module.css";

export const metadata: Metadata = {
  title: "The View-Masters Reels — Overview — nywf64.com",
  description:
    "The View-Masters Reels — Sawyer’s six three-reel packets of the 1964/1965 New York World’s Fair, on nywf64.com.",
};

/**
 * The View-Masters Reels overview — follows the overview prototype
 * (same stack as /matchbooksoverview / /scrapbookoverview).
 * Hero canvas matches ibm01 (1905×826) via ViewMastersHero.
 * Nav bar shows Page 1 (`vmoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /artifacts; NEXT hidden until the first gallery page exists.
 */
export default function VmOverviewPage() {
  return (
    <>
      <ViewMastersHero />

      <ViewMastersNavChrome />

      <section
        className={styles.overview}
        aria-label="The View-Masters Reels overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <strong>
                <em>View-Masters!</em>
              </strong>{" "}
              Always famous for bringing the world to your living room,
              Sawyer&apos;s six, three-reel packets celebrated the World&apos;s
              Fair in photos by Photo Lab, Inc. Now{" "}
              <strong>a complete set</strong> of these sought-after collectibles
              can be viewed on-line through the courtesy of collectors Bradd
              Schiffman and Rick Flannery.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/vmoverview/photo.jpg"
              alt="View-Master General Tour packet — New York World’s Fair 1964-1965"
              width={1246}
              height={1263}
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
        overviewHref="/vmoverview"
        hideNext
      />
    </>
  );
}
