import type { Metadata } from "next";
import Image from "next/image";
import { SolfountNavChrome } from "@/components/SolfountNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./solfountmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Solar Fountain — nywf64.com",
  description:
    "Locate the Solar Fountain on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Solar Fountain locate-it map page (`/solfountmap`).
 * Stack: hero → SolfountNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy solfountmap.shtml (Industrial Area map + solfountmap.gif arrow).
 */
export default function SolfountMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Solar Fountain">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/solfountoverview/hero-banner.jpg"
            alt="Solar Fountain at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SolfountNavChrome />

      <article className={styles.article} aria-labelledby="solfountmap-title">
        <LocateMapTitleBar titleId="solfountmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/solfountmap/locate-map.jpg"
              alt="Solar Fountain location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Solar Fountain"
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
        previousHref="/solfount01"
        explicitPrevious
        overviewHref="/solfountoverview"
        nextHref="/solfount02"
      />
    </>
  );
}
