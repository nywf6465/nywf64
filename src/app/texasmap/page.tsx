import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./texasmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Locate Texas Pavilions & Music Hall on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall locate-it map page (`/texasmap`).
 * Stack: hero → TexasNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy texasmap.shtml (Amusement Area map + texasmap.gif arrow).
 */
export default function TexasMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Texas Pavilions & Music Hall">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/texasoverview/hero-banner.jpg"
            alt="Texas Pavilions & Music Hall at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TexasNavChrome />

      <article className={styles.article} aria-labelledby="texasmap-title">
        <LocateMapTitleBar titleId="texasmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/texasmap/locate-map.jpg"
              alt="Texas Pavilions & Music Hall location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Texas Pavilions & Music Hall"
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
        previousHref="/texas01"
        explicitPrevious
        overviewHref="/texasoverview"
        nextHref="/texas02"
      />
    </>
  );
}
