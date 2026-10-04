import type { Metadata } from "next";
import Image from "next/image";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./autthrmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Auto Thrill Show — nywf64.com",
  description:
    "Locate the Auto Thrill Show on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Auto Thrill Show locate-it map page (`/autthrmap`).
 * Stack: hero → AutthrNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy autthrmap.shtml (Transportation Area map + autthrmap.gif arrow).
 */
export default function AutthrMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Auto Thrill Show">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/autthroverview/hero-banner.jpg"
            alt="Auto Thrill Show at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AutthrNavChrome />

      <article className={styles.article} aria-labelledby="autthrmap-title">
        <LocateMapTitleBar titleId="autthrmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/autthrmap/locate-map.jpg"
              alt="Auto Thrill Show location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Auto Thrill Show"
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
        previousHref="/autthr01"
        explicitPrevious
        overviewHref="/autthroverview"
        nextHref="/autthr02"
      />
    </>
  );
}
