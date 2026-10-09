import type { Metadata } from "next";
import Image from "next/image";
import { SanmarNavChrome } from "@/components/SanmarNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sanmarmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Santa Maria — nywf64.com",
  description:
    "Locate the Santa Maria pavilion on the Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Santa Maria locate-it map page (`/sanmarmap`).
 * Stack: hero → SanmarNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy sanmarmap.shtml (Amusement Area map + sanmarmap.gif arrow).
 */
export default function SanmarMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Santa Maria">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sanmaroverview/hero-banner.jpg"
            alt="Santa Maria at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SanmarNavChrome />

      <article className={styles.article} aria-labelledby="sanmarmap-title">
        <LocateMapTitleBar titleId="sanmarmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/sanmarmap/locate-map.jpg"
              alt="Santa Maria location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Santa Maria pavilion"
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
        previousHref="/sanmar01"
        explicitPrevious
        overviewHref="/sanmaroverview"
        nextHref="/sanmar02"
      />
    </>
  );
}
