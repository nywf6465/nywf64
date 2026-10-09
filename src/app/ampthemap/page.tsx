import type { Metadata } from "next";
import Image from "next/image";
import { AmptheNavChrome } from "@/components/AmptheNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ampthemap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Amphitheatre — nywf64.com",
  description:
    "Locate the Amphitheatre on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Amphitheatre locate-it map page (`/ampthemap`).
 * Stack: hero → AmptheNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy ampthemap.shtml (Amusement Area map + flowatskimap.gif arrow).
 * Linked from /ampthe01 via locateHref.
 */
export default function AmptheMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Amphitheatre">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amptheoverview/hero-banner.jpg"
            alt="Amphitheatre at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmptheNavChrome />

      <article className={styles.article} aria-labelledby="ampthemap-title">
        <LocateMapTitleBar titleId="ampthemap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/ampthemap/locate-map.jpg"
              alt="Amphitheatre location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Amphitheatre"
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
        previousHref="/ampthe01"
        explicitPrevious
        overviewHref="/ampthe01"
        nextHref="/ampthe02"
      />
    </>
  );
}
