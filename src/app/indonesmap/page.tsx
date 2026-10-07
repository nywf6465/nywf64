import type { Metadata } from "next";
import Image from "next/image";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./indonesmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Indonesia — nywf64.com",
  description:
    "Locate the Indonesia pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Indonesia locate-it map page (`/indonesmap`).
 * Body from legacy indonesmap.shtml (International Area cream map + indonesmap.gif arrow).
 */
export default function IndonesMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Indonesia">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/indonesoverview/hero-banner.jpg"
            alt="Indonesia at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IndonesNavChrome />

      <article className={styles.article} aria-labelledby="indonesmap-title">
        <LocateMapTitleBar titleId="indonesmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/indonesmap/locate-map.jpg"
              alt="Indonesia pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Indonesia"
              width={910}
              height={1158}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/indones01"
        explicitPrevious
        overviewHref="/indonesoverview"
        nextHref="/indones02"
      />
    </>
  );
}
