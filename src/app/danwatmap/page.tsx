import type { Metadata } from "next";
import Image from "next/image";
import { DanwatNavChrome } from "@/components/DanwatNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./danwatmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Dancing Waters — nywf64.com",
  description:
    "Locate Dancing Waters on the Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dancing Waters locate-it map page (`/danwatmap`).
 * Stack: hero → DanwatNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy danwatmap.shtml (Amusement Area map + danwatmap.gif arrow).
 */
export default function DanwatmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Dancing Waters">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/danwatoverview/hero-banner.jpg"
            alt="Dancing Waters at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DanwatNavChrome />

      <article className={styles.article} aria-labelledby="danwatmap-title">
        <LocateMapTitleBar titleId="danwatmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/danwatmap/locate-map.jpg"
              alt="Dancing Waters location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Dancing Waters"
              width={930}
              height={655}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/danwat01"
        explicitPrevious
        overviewHref="/danwatoverview"
        nextHref="/danwat02"
      />
    </>
  );
}
