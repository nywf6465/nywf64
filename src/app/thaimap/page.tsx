import type { Metadata } from "next";
import Image from "next/image";
import { ThaiNavChrome } from "@/components/ThaiNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./thaimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Thailand — nywf64.com",
  description:
    "Locate the Thailand pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thailand locate-it map page (`/thaimap`).
 * Stack: hero → ThaiNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy thaimap.shtml (International Area map + thaimap.gif arrow).
 */
export default function ThaiMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Thailand">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/thaioverview/hero-banner.jpg"
            alt="Thailand pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ThaiNavChrome />

      <article className={styles.article} aria-labelledby="thaimap-title">
        <LocateMapTitleBar titleId="thaimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/thaimap/locate-map.jpg"
              alt="Thailand pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Thailand"
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
        previousHref="/thai01"
        explicitPrevious
        overviewHref="/thaioverview"
        nextHref="/thai02"
      />
    </>
  );
}
