import type { Metadata } from "next";
import Image from "next/image";
import { IrelandNavChrome } from "@/components/IrelandNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./irelandmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Ireland — nywf64.com",
  description:
    "Locate the Ireland pavilion on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ireland locate-it map page (`/irelandmap`).
 * Stack: hero → IrelandNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy irelandmap.shtml (International Area map + irelandmap.gif arrow).
 */
export default function IrelandmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Ireland">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/irelandoverview/hero-banner.jpg"
            alt="Ireland pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IrelandNavChrome />

      <article className={styles.article} aria-labelledby="irelandmap-title">
        <LocateMapTitleBar titleId="irelandmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/irelandmap/locate-map.jpg"
              alt="Ireland pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Ireland"
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
        previousHref="/ireland01"
        explicitPrevious
        overviewHref="/irelandoverview"
        nextHref="/ireland02"
      />
    </>
  );
}
