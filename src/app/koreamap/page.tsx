import type { Metadata } from "next";
import Image from "next/image";
import { KoreaNavChrome } from "@/components/KoreaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./koreamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Korea, Republic of — nywf64.com",
  description:
    "Locate the Korea, Republic of pavilion on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Korea locate-it map page (`/koreamap`).
 * Stack: hero → KoreaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy koreamap.shtml (International Area map + koreamap.gif arrow).
 */
export default function KoreamapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Korea, Republic of">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/koreaoverview/hero-banner.jpg"
            alt="Korea, Republic of pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <KoreaNavChrome />

      <article className={styles.article} aria-labelledby="koreamap-title">
        <LocateMapTitleBar titleId="koreamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/koreamap/locate-map.jpg"
              alt="Korea, Republic of pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Korea"
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
        previousHref="/korea01"
        explicitPrevious
        overviewHref="/koreaoverview"
        nextHref="/korea02"
      />
    </>
  );
}
