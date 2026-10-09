import type { Metadata } from "next";
import Image from "next/image";
import { GreeceNavChrome } from "@/components/GreeceNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./greecemap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Greece — nywf64.com",
  description:
    "Locate the Greece pavilion on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greece locate-it map page (`/greecemap`).
 * Stack: hero → GreeceNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy greecemap.shtml (International Area cream map + greecemap.gif).
 */
export default function GreecemapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Greece">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/greeceoverview/hero-banner.jpg"
            alt="Greece at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GreeceNavChrome />

      <article className={styles.article} aria-labelledby="greecemap-title">
        <LocateMapTitleBar titleId="greecemap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/greecemap/locate-map.jpg"
              alt="Greece pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/greece01"
        explicitPrevious
        overviewHref="/greeceoverview"
        nextHref="/greece02"
      />
    </>
  );
}
