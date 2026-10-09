import type { Metadata } from "next";
import Image from "next/image";
import { TipbandNavChrome } from "@/components/TipbandNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./tipbandmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Tiparillo Band Pavilion — nywf64.com",
  description:
    "Locate the Tiparillo Band Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tiparillo Band Pavilion locate-it map page (`/tipbandmap`).
 * Stack: hero → TipbandNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy tipbandmap.shtml (Industrial Area map + tipbandmap.gif arrow).
 */
export default function TipbandMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Tiparillo Band Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/tipbandoverview/hero-banner.jpg"
            alt="Tiparillo Band Pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TipbandNavChrome />

      <article className={styles.article} aria-labelledby="tipbandmap-title">
        <LocateMapTitleBar titleId="tipbandmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/tipbandmap/locate-map.jpg"
              alt="Tiparillo Band Pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/tipband01"
        explicitPrevious
        overviewHref="/tipbandoverview"
        nextHref="/tipband02"
      />
    </>
  );
}
