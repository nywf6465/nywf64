import type { Metadata } from "next";
import Image from "next/image";
import { BrilionNavChrome } from "@/components/BrilionNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./brilionmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — British Lion Pub — nywf64.com",
  description:
    "Locate British Lion Pub on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * British Lion Pub locate-it map page (`/brilionmap`).
 * Stack: hero → BrilionNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy brilionmap.shtml (International Area map + brilionmap.gif arrow).
 */
export default function BrilionmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="British Lion Pub">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/brilionoverview/hero-banner.jpg"
            alt="British Lion Pub at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BrilionNavChrome />

      <article className={styles.article} aria-labelledby="brilionmap-title">
        <LocateMapTitleBar titleId="brilionmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/brilionmap/locate-map.jpg"
              alt="British Lion Pub location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the British Lion Pub"
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
        previousHref="/brilion01"
        explicitPrevious
        overviewHref="/brilionoverview"
        nextHref="/brilion02"
      />
    </>
  );
}
