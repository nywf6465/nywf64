import type { Metadata } from "next";
import Image from "next/image";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./easternmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Eastern Air Lines — nywf64.com",
  description:
    "Locate Eastern Air Lines on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastern Air Lines locate-it map page (`/easternmap`).
 * Stack: hero → EasternNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy easternmap.shtml (Transportation Area map + easternmap.gif arrow).
 * Cream Transportation base + GIF overlay — no yellowed scan.
 */
export default function EasternMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastern Air Lines">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easternoverview/hero-banner.jpg"
            alt="Eastern Air Lines at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EasternNavChrome />

      <article className={styles.article} aria-labelledby="easternmap-title">
        <LocateMapTitleBar titleId="easternmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/easternmap/locate-map.jpg"
              alt="Eastern Air Lines location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to Eastern Air Lines"
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
        previousHref="/eastern01"
        explicitPrevious
        overviewHref="/easternoverview"
        nextHref="/eastern02"
      />
    </>
  );
}
