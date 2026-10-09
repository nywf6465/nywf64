import type { Metadata } from "next";
import Image from "next/image";
import { AllstaNavChrome } from "@/components/AllstaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./allstamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — All-State Properties & Macy's — nywf64.com",
  description:
    "Locate All-State Properties & Macy's on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * All-State Properties locate-it map page (`/allstamap`).
 * Stack: hero → AllstaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy allstamap.shtml (Industrial Area map + allstamap.gif arrow).
 */
export default function AllstaMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="All-State Properties & Macy's">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/allstaoverview/hero-banner.jpg"
            alt="All-State Properties & Macy's at the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AllstaNavChrome />

      <article className={styles.article} aria-labelledby="allstamap-title">
        <LocateMapTitleBar titleId="allstamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/allstamap/locate-map.jpg"
              alt="All-State Properties & Macy's location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to All-State Properties"
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
        previousHref="/allsta01"
        explicitPrevious
        overviewHref="/allsta01"
        nextHref="/allsta02"
      />
    </>
  );
}
