import type { Metadata } from "next";
import Image from "next/image";
import { FouconNavChrome } from "@/components/FouconNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fouconmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Fountain of the Continents — nywf64.com",
  description:
    "Locate the Fountain of the Continents on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of the Continents locate-it map page (`/fouconmap`).
 * Stack: hero → FouconNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy fouconmap.shtml (International Area cream map + fouconmap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function FouconMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountain of the Continents">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fouconoverview/hero-banner.jpg"
            alt="Fountain of the Continents at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FouconNavChrome />

      <article className={styles.article} aria-labelledby="fouconmap-title">
        <LocateMapTitleBar titleId="fouconmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/fouconmap/locate-map.jpg"
              alt="Fountain of the Continents location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the fountain"
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
        previousHref="/foucon01"
        explicitPrevious
        overviewHref="/fouconoverview"
        nextHref="/foucon02"
      />
    </>
  );
}
