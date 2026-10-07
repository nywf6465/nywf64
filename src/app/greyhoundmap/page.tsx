import type { Metadata } from "next";
import Image from "next/image";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./greyhoundmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Greyhound — nywf64.com",
  description:
    "Locate the Greyhound pavilion on the Transportation Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound locate-it map page (`/greyhoundmap`).
 * Stack: hero → GreyhoundNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy greyhoundmap.shtml (Transportation Area cream map + greyhoundmap.gif).
 */
export default function GreyhoundmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Greyhound">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/greyhoundoverview/hero-banner.jpg"
            alt="Greyhound at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GreyhoundNavChrome />

      <article className={styles.article} aria-labelledby="greyhoundmap-title">
        <LocateMapTitleBar titleId="greyhoundmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/greyhoundmap/locate-map.jpg"
              alt="Greyhound pavilion location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
              width={807}
              height={1165}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound01"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound02"
      />
    </>
  );
}
