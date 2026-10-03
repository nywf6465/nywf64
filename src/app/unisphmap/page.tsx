import type { Metadata } from "next";
import Image from "next/image";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unisphmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Unisphere — nywf64.com",
  description:
    "Locate the Unisphere on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere locate-it map page (`/unisphmap`).
 * Stack: hero → UnisphNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy unisphmap.shtml (Federal/State area map + unisphmap.gif arrow).
 */
export default function UnisphMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Unisphere">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unisphoverview/hero-banner.jpg"
            alt="Unisphere at the 1964/1965 New York World’s Fair"
            width={1914}
            height={822}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnisphNavChrome />

      <article className={styles.article} aria-labelledby="unisphmap-title">
        <LocateMapTitleBar titleId="unisphmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/unisphmap/locate-map.jpg"
              alt="Unisphere location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Unisphere"
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
        previousHref="/unisph01"
        explicitPrevious
        overviewHref="/unisphoverview"
        nextHref="/unisph02"
      />
    </>
  );
}
