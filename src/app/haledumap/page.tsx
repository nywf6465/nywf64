import type { Metadata } from "next";
import Image from "next/image";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./haledumap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Hall of Education — nywf64.com",
  description:
    "Locate the Hall of Education on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Education locate-it map page (`/haledumap`).
 * Stack: hero → HaleduNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy haledumap.shtml (Industrial Area cream map + democrmap.gif).
 */
export default function HaledumapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Education">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/haleduoverview/hero-banner.jpg"
            alt="Hall of Education at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HaleduNavChrome />

      <article className={styles.article} aria-labelledby="haledumap-title">
        <LocateMapTitleBar titleId="haledumap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/haledumap/locate-map.jpg"
              alt="Hall of Education location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/haledu01"
        explicitPrevious
        overviewHref="/haleduoverview"
        nextHref="/haledu02"
      />
    </>
  );
}
