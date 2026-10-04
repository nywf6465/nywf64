import type { Metadata } from "next";
import Image from "next/image";
import { BarbufNavChrome } from "@/components/BarbufNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./barbufmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Bargreen Buffet — nywf64.com",
  description:
    "Locate the Bargreen Buffet on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bargreen Buffet locate-it map page (`/barbufmap`).
 * Stack: hero → BarbufNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy barbufmap.shtml (International Area map + arrow overlay).
 */
export default function BarbufMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Bar, Buffet and Cafeteria">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/barbufoverview/hero-banner.jpg"
            alt="Bar, Buffet and Cafeteria at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BarbufNavChrome />

      <article className={styles.article} aria-labelledby="barbufmap-title">
        <LocateMapTitleBar titleId="barbufmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/barbufmap/locate-map.jpg"
              alt="Bargreen Buffet location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/barbuf01"
        explicitPrevious
        overviewHref="/barbufoverview"
        nextHref="/barbuf02"
      />
    </>
  );
}
