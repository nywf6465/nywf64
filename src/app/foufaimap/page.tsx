import type { Metadata } from "next";
import Image from "next/image";
import { FoucaultNavChrome } from "@/components/FoucaultNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./foufaimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Fountains of the Fairs — nywf64.com",
  description:
    "Locate the Fountains of the Fairs on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountains of the Fairs locate-it map page (`/foufaimap`).
 * Stack: hero → FoucaultNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy foufaimap.shtml (International Area cream map + foufaimap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function FoufaiMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountains of the Fairs">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/foufaioverview/hero-banner.jpg"
            alt="Fountains of the Fairs at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FoucaultNavChrome />

      <article className={styles.article} aria-labelledby="foufaimap-title">
        <LocateMapTitleBar titleId="foufaimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/foufaimap/locate-map.jpg"
              alt="Fountains of the Fairs location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the fountains"
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
        previousHref="/foufai01"
        explicitPrevious
        overviewHref="/foufaioverview"
        nextHref="/foufai02"
      />
    </>
  );
}
