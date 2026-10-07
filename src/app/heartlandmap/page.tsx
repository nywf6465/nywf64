import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartlandmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Heartland States U.S.A. — nywf64.com",
  description:
    "Locate the proposed Heartland States U.S.A. / Midwestern States site on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Heartland States locate-it map page (`/heartlandmap`).
 * Stack: hero → HeartlandNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy heartlandmap.shtml (Federal & State Area map + heartlandmap.gif).
 * Linked from /heartland01 via locateHref.
 */
export default function HeartlandMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Heartland States U.S.A.">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/heartlandoverview/hero-banner.jpg"
            alt="Heartland States U.S.A. at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HeartlandNavChrome />

      <article className={styles.article} aria-labelledby="heartlandmap-title">
        <LocateMapTitleBar titleId="heartlandmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/heartlandmap/locate-map.jpg"
              alt="Proposed Heartland States U.S.A. location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to the site"
              width={1076}
              height={1233}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland01"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland02"
      />
    </>
  );
}
