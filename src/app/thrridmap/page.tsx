import type { Metadata } from "next";
import Image from "next/image";
import { ThrridNavChrome } from "@/components/ThrridNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./thrridmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Thrill Rides — nywf64.com",
  description:
    "Locate Thrill Rides on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thrill Rides locate-it map page (`/thrridmap`).
 * Stack: hero → ThrridNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy thrridmap.shtml (Amusement Area map + thrridmap.gif arrow).
 */
export default function ThrridMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Thrill Rides">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/thrridoverview/hero-banner.jpg"
            alt="Thrill Rides at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ThrridNavChrome />

      <article className={styles.article} aria-labelledby="thrridmap-title">
        <LocateMapTitleBar titleId="thrridmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/thrridmap/locate-map.jpg"
              alt="Thrill Rides location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Thrill Rides"
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
        previousHref="/thrrid01"
        explicitPrevious
        overviewHref="/thrridoverview"
        nextHref="/thrridoverview"
      />
    </>
  );
}
