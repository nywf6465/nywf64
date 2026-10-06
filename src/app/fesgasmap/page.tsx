import type { Metadata } from "next";
import Image from "next/image";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fesgasmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Festival of Gas — nywf64.com",
  description:
    "Locate the Festival of Gas pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas locate-it map page (`/fesgasmap`).
 * Stack: hero → FesgasNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy fesgasmap.shtml.
 */
export default function FesgasMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Festival of Gas">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fesgasoverview/hero-banner.jpg"
            alt="Festival of Gas at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FesgasNavChrome />

      <article className={styles.article} aria-labelledby="fesgasmap-title">
        <LocateMapTitleBar titleId="fesgasmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/fesgasmap/locate-map.jpg"
              alt="Festival of Gas location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Festival of Gas"
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
        previousHref="/fesgas01"
        explicitPrevious
        overviewHref="/fesgasoverview"
        nextHref="/fesgas02"
      />
    </>
  );
}
