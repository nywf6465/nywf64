import type { Metadata } from "next";
import Image from "next/image";
import { GuineaNavChrome } from "@/components/GuineaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./guineamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Guinea — nywf64.com",
  description:
    "Locate the Guinea pavilion on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Guinea locate-it map page (`/guineamap`).
 * Stack: hero → GuineaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy guineamap.shtml (International Area cream map + guineamap.gif).
 */
export default function GuineamapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Guinea">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/guineaoverview/hero-banner.jpg"
            alt="Guinea at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GuineaNavChrome />

      <article className={styles.article} aria-labelledby="guineamap-title">
        <LocateMapTitleBar titleId="guineamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/guineamap/locate-map.jpg"
              alt="Guinea pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/guinea01"
        explicitPrevious
        overviewHref="/guineaoverview"
        nextHref="/guinea02"
      />
    </>
  );
}
