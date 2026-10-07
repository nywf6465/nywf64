import type { Metadata } from "next";
import Image from "next/image";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./floridamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Florida — nywf64.com",
  description:
    "Locate the Florida Pavilion on the Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida locate-it map page (`/floridamap`).
 * Stack: hero → FloridaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy floridamap.shtml (Amusement Area cream map + floridamap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 * Adobe Reader chrome omitted.
 */
export default function FloridaMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Florida">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/floridaoverview/hero-banner.jpg"
            alt="Florida Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FloridaNavChrome />

      <article className={styles.article} aria-labelledby="floridamap-title">
        <LocateMapTitleBar titleId="floridamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/floridamap/locate-map.jpg"
              alt="Florida Pavilion location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Florida"
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
        previousHref="/florida01"
        explicitPrevious
        overviewHref="/floridaoverview"
        nextHref="/florida02"
      />
    </>
  );
}
