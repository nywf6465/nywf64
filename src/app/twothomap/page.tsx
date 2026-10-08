import type { Metadata } from "next";
import Image from "next/image";
import { TwothoNavChrome } from "@/components/TwothoNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./twothomap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Two Thousand Tribes — nywf64.com",
  description:
    "Locate the Two Thousand Tribes pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Two Thousand Tribes locate-it map page (`/twothomap`).
 * Stack: hero → TwothoNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body pattern from legacy twothomap.shtml; layout matches /africamap.
 */
export default function TwothoMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Two Thousand Tribes">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/twothooverview/hero-banner.jpg"
            alt="Two Thousand Tribes pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TwothoNavChrome />

      <article className={styles.article} aria-labelledby="twothomap-title">
        <LocateMapTitleBar titleId="twothomap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/twothomap/locate-map.jpg"
              alt="Two Thousand Tribes pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/twotho01"
        explicitPrevious
        overviewHref="/twothooverview"
        nextHref="/twotho02"
      />
    </>
  );
}
