import type { Metadata } from "next";
import Image from "next/image";
import { CengriNavChrome } from "@/components/CengriNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./cengrimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Century Grill — nywf64.com",
  description:
    "Locate Century Grill on the Transportation Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Century Grill locate-it map page (`/cengrimap`).
 * Stack: hero → CengriNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy cengrilmap.shtml (Transportation Area map + cengrilmap.gif arrow).
 * Linked from /cengri01 via locateHref.
 */
export default function CengrimapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Century Grill">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/cengrioverview/hero-banner.jpg"
            alt="Century Grill at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CengriNavChrome />

      <article className={styles.article} aria-labelledby="cengrimap-title">
        <LocateMapTitleBar titleId="cengrimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/cengrimap/locate-map.jpg"
              alt="Century Grill location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to Century Grill"
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
        previousHref="/cengri01"
        explicitPrevious
        overviewHref="/cengrioverview"
        nextHref="/cengri02"
      />
    </>
  );
}
