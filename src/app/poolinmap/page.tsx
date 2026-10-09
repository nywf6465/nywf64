import type { Metadata } from "next";
import Image from "next/image";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./poolinmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Pool of Industry — nywf64.com",
  description:
    "Locate the Pool of Industry on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pool of Industry locate-it map page (`/poolinmap`).
 * Stack: hero → PoolinNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy poolinmap.shtml (Industrial Area cream map + poolinmap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function PoolinMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Pool of Industry">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/poolinoverview/hero-banner.jpg"
            alt="Pool of Industry at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PoolinNavChrome />

      <article className={styles.article} aria-labelledby="poolinmap-title">
        <LocateMapTitleBar titleId="poolinmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/poolinmap/locate-map.jpg"
              alt="Pool of Industry location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pool"
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
        previousHref="/poolin01"
        explicitPrevious
        overviewHref="/poolinoverview"
        nextHref="/poolin02"
      />
    </>
  );
}
