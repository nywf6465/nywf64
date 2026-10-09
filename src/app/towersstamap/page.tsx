import type { Metadata } from "next";
import Image from "next/image";
import { TowersNavChrome } from "@/components/TowersNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./towersstamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Entrance Towers — nywf64.com",
  description:
    "Locate the Entrance Towers on the Federal and State Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Towers locate-it map page (`/towersstamap`).
 * Stack: hero → TowersNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy towersstamap.shtml (Federal and State Area cream map + towersstamap.gif arrow).
 */
export default function TowersMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Entrance Towers">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/towersoverview/hero-banner.jpg"
            alt="Entrance Towers at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TowersNavChrome />

      <article className={styles.article} aria-labelledby="towersstamap-title">
        <LocateMapTitleBar titleId="towersstamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/towersstamap/locate-map.jpg"
              alt="Entrance Towers location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to an Entrance Tower"
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
        previousHref="/towers01"
        explicitPrevious
        overviewHref="/towersoverview"
        nextHref="/towers02"
      />
    </>
  );
}
