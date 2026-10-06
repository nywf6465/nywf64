import type { Metadata } from "next";
import Image from "next/image";
import { FiestaNavChrome } from "@/components/FiestaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fiestamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Fiesta — nywf64.com",
  description:
    "Locate Fiesta on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fiesta locate-it map page (`/fiestamap`).
 * Stack: hero → FiestaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy fiestamap.shtml (Industrial Area cream map + fiestamap.gif).
 * Adobe Reader chrome omitted.
 */
export default function FiestaMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fiesta">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fiestaoverview/hero-banner.jpg"
            alt="Fiesta at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FiestaNavChrome />

      <article className={styles.article} aria-labelledby="fiestamap-title">
        <LocateMapTitleBar titleId="fiestamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/fiestamap/locate-map.jpg"
              alt="Fiesta location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Fiesta"
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
        previousHref="/fiesta01"
        explicitPrevious
        overviewHref="/fiestaoverview"
        nextHref="/fiesta02"
      />
    </>
  );
}
