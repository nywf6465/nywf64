import type { Metadata } from "next";
import Image from "next/image";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genfoostamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — General Foods Arches — nywf64.com",
  description:
    "Locate General Foods Arches on the Federal and State Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches locate-it map page (`/genfoostamap`).
 * Stack: hero → GenfooNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy genfoostamap.shtml (Federal and State Area map + genfoostamap.gif arrow on cream base).
 */
export default function GenfoostamapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="General Foods Arches">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/genfoooverview/hero-banner.jpg"
            alt="General Foods Arches at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GenfooNavChrome />

      <article className={styles.article} aria-labelledby="genfoostamap-title">
        <LocateMapTitleBar titleId="genfoostamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/genfoostamap/locate-map.jpg"
              alt="General Foods Arches location on the Federal and State Area of the 1964 Official Souvenir Map, with red arrows pointing to the arches"
              width={1076}
              height={1233}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genfoo01"
        explicitPrevious
        overviewHref="/genfoooverview"
        nextHref="/genfoo02"
      />
    </>
  );
}
