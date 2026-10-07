import type { Metadata } from "next";
import Image from "next/image";
import { FunlanNavChrome } from "@/components/FunlanNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./funlanmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Funland — nywf64.com",
  description:
    "Locate Funland on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Funland locate-it map page (`/funlanmap`).
 * Stack: hero → FunlanNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy funlanmap.shtml (Amusement Area cream map + funlanmap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function FunlanMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Funland">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/funlanoverview/hero-banner.jpg"
            alt="Funland at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FunlanNavChrome />

      <article className={styles.article} aria-labelledby="funlanmap-title">
        <LocateMapTitleBar titleId="funlanmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/funlanmap/locate-map.jpg"
              alt="Funland location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to the attraction"
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
        previousHref="/funlan01"
        explicitPrevious
        overviewHref="/funlanoverview"
        nextHref="/funlan01"
      />
    </>
  );
}
