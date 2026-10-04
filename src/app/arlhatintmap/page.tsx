import type { Metadata } from "next";
import Image from "next/image";
import { ArlhatNavChrome } from "@/components/ArlhatNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./arlhatintmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Arlington Hat — nywf64.com",
  description:
    "Locate Arlington Hat on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Arlington Hat locate-it map page (`/arlhatintmap`).
 * Stack: hero → ArlhatNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy arlhatintmap.shtml (International Area map + arlhatintmap.gif arrow).
 */
export default function ArlhatIntMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Arlington Hat">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/arlhatoverview/hero-banner.jpg"
            alt="Arlington Hat at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArlhatNavChrome />

      <article className={styles.article} aria-labelledby="arlhatintmap-title">
        <LocateMapTitleBar titleId="arlhatintmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/arlhatintmap/locate-map.jpg"
              alt="Arlington Hat location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Arlington Hat"
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
        previousHref="/arlhat01"
        explicitPrevious
        overviewHref="/arlhatoverview"
        nextHref="/arlhat02"
      />
    </>
  );
}
