import type { Metadata } from "next";
import Image from "next/image";
import { SierraNavChrome } from "@/components/SierraNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sierramap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Sierra Leone — nywf64.com",
  description:
    "Locate the Sierra Leone pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sierra Leone locate-it map page (`/sierramap`).
 * Stack: hero → SierraNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy sierramap.shtml (International Area map + sierramap.gif arrow).
 */
export default function SierraMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sierra Leone">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sierraoverview/hero-banner.jpg"
            alt="Sierra Leone pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SierraNavChrome />

      <article className={styles.article} aria-labelledby="sierramap-title">
        <LocateMapTitleBar titleId="sierramap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/sierramap/locate-map.jpg"
              alt="Sierra Leone pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Sierra Leone"
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
        previousHref="/sierra01"
        explicitPrevious
        overviewHref="/sierraoverview"
        nextHref="/sierra02"
      />
    </>
  );
}
