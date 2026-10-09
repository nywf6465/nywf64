import type { Metadata } from "next";
import Image from "next/image";
import { PanamgNavChrome } from "@/components/PanamgNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./panamgmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Pan American Highway Gardens — nywf64.com",
  description:
    "Locate the Pan American Highway Gardens / Avis Pan American Highway Rides on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pan American Highway Gardens locate-it map page (`/panamgmap`).
 * Stack: hero → PanamgNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy panamgmap.shtml (Industrial Area map + panamgmap.gif arrow).
 */
export default function PanamgMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Pan American Highway Gardens">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/panamgoverview/hero-banner.jpg"
            alt="Pan American Highway Gardens at the 1964/1965 New York World’s Fair"
            width={2164}
            height={727}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PanamgNavChrome />

      <article className={styles.article} aria-labelledby="panamgmap-title">
        <LocateMapTitleBar titleId="panamgmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/panamgmap/locate-map.jpg"
              alt="Pan American Highway Gardens location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the gardens"
              width={1359}
              height={1213}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/panamg01"
        explicitPrevious
        overviewHref="/panamg01"
        nextHref="/panamg02"
      />
    </>
  );
}
