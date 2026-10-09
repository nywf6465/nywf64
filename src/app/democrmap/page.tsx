import type { Metadata } from "next";
import Image from "next/image";
import { DemocrNavChrome } from "@/components/DemocrNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./democrmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Demonstration Center — nywf64.com",
  description:
    "Locate the Demonstration Center on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Demonstration Center locate-it map page (`/democrmap`).
 * Stack: hero → DemocrNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy democrmap.shtml (Industrial Area map + democrmap.gif arrow).
 */
export default function DemocrmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Demonstration Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/democroverview/hero-banner.jpg"
            alt="Demonstration Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DemocrNavChrome />

      <article className={styles.article} aria-labelledby="democrmap-title">
        <LocateMapTitleBar titleId="democrmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/democrmap/locate-map.jpg"
              alt="Demonstration Center location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Demonstration Center"
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
        previousHref="/democr01"
        explicitPrevious
        overviewHref="/democroverview"
        nextHref="/democr02"
      />
    </>
  );
}
