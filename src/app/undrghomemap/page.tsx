import type { Metadata } from "next";
import Image from "next/image";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./undrghomemap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Underground World Home — nywf64.com",
  description:
    "Locate the Underground World Home on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home locate-it map page (`/undrghomemap`).
 * Stack: hero → UndrghomeNavChrome → navy title bar → left-justified body → Nav2Bar.
 */
export default function UndrghomeMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Underground World Home">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/undrghomeoverview/hero-banner.jpg"
            alt="Underground World Home at the 1964/1965 New York World’s Fair"
            width={2073}
            height={758}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UndrghomeNavChrome />

      <article className={styles.article} aria-labelledby="undrghomemap-title">
        <LocateMapTitleBar titleId="undrghomemap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/undrghomemap/locate-map.jpg"
              alt="Underground World Home location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to Underground World Home"
              width={987}
              height={1165}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/undrghome01"
        explicitPrevious
        overviewHref="/undrghomeoverview"
        nextHref="/undrghome02"
      />
    </>
  );
}
