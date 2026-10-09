import type { Metadata } from "next";
import Image from "next/image";
import { CaribbNavChrome } from "@/components/CaribbNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./caribbmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Caribbean — nywf64.com",
  description:
    "Locate the Caribbean Pavilion on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Caribbean Pavilion locate-it map page (`/caribbmap`).
 * Stack: hero → CaribbNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy caribbmap.shtml (International Area map + caribbmap.gif arrow).
 */
export default function CaribbmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Caribbean">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/caribboverview/hero-banner.jpg"
            alt="Caribbean Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CaribbNavChrome />

      <article className={styles.article} aria-labelledby="caribbmap-title">
        <LocateMapTitleBar titleId="caribbmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/caribbmap/locate-map.jpg"
              alt="Caribbean Pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/caribb01"
        explicitPrevious
        overviewHref="/caribboverview"
        nextHref="/caribb02"
      />
    </>
  );
}
