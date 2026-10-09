import type { Metadata } from "next";
import Image from "next/image";
import { BerlinNavChrome } from "@/components/BerlinNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./berlinmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Berlin — nywf64.com",
  description:
    "Locate the Berlin pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Berlin locate-it map page (`/berlinmap`).
 * Stack: hero → BerlinNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy berlinmap.shtml (International Area map + berlinmap.gif arrow).
 */
export default function BerlinMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Berlin">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/berlinoverview/hero-banner.jpg"
            alt="Berlin at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BerlinNavChrome />

      <article className={styles.article} aria-labelledby="berlinmap-title">
        <LocateMapTitleBar titleId="berlinmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/berlinmap/locate-map.jpg"
              alt="Berlin pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/berlin01"
        explicitPrevious
        overviewHref="/berlin01"
        nextHref="/berlin02"
      />
    </>
  );
}
