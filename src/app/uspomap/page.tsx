import type { Metadata } from "next";
import Image from "next/image";
import { UspoNavChrome } from "@/components/UspoNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./uspomap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — U.S. Post Office — nywf64.com",
  description:
    "Locate the U.S. Post Office on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Post Office locate-it map page (`/uspomap`).
 * Stack: hero → UspoNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy uspomap.shtml (Industrial Area map + uspomap.gif arrow).
 */
export default function UspoMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="U.S. Post Office">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/uspooverview/hero-banner.jpg"
            alt="U.S. Post Office at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UspoNavChrome />

      <article className={styles.article} aria-labelledby="uspomap-title">
        <LocateMapTitleBar titleId="uspomap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/uspomap/locate-map.jpg"
              alt="U.S. Post Office location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
              width={1359}
              height={1213}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/uspo01"
        explicitPrevious
        overviewHref="/uspooverview"
        nextHref="/uspo02"
      />
    </>
  );
}
