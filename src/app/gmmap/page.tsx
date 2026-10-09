import type { Metadata } from "next";
import Image from "next/image";
import { GmNavChrome } from "@/components/GmNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gmmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — General Motors — nywf64.com",
  description:
    "Locate the General Motors Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Motors locate-it map page (`/gmmap`).
 * From legacy gmmap.shtml (mapslocateit05 Transportation tiles + Image/gm/gmmap.gif).
 *
 * Stack: hero → GmNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * locate-map.jpg: neutral cream Transportation Area (807×1165) + gmmap.gif arrow.
 */
export default function GmMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="General Motors Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/gmoverview/hero-banner.jpg"
            alt="General Motors Pavilion at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GmNavChrome />

      <article className={styles.article} aria-labelledby="gmmap-title">
        <LocateMapTitleBar titleId="gmmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/gmmap/locate-map.jpg"
              alt="General Motors Pavilion location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to General Motors"
              width={807}
              height={1165}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/gm01"
        explicitPrevious
        overviewHref="/gmoverview"
        nextHref="/gm02"
      />
    </>
  );
}
