import type { Metadata } from "next";
import Image from "next/image";
import { SwedenNavChrome } from "@/components/SwedenNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./swedenmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Sweden — nywf64.com",
  description:
    "Locate the Sweden pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sweden locate-it map page (`/swedenmap`).
 * Stack: hero → SwedenNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy swedenmap.shtml (International Area map + swedenmap.gif arrow).
 */
export default function SwedenMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sweden">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/swedenoverview/hero-banner.jpg"
            alt="Sweden pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwedenNavChrome />

      <article className={styles.article} aria-labelledby="swedenmap-title">
        <LocateMapTitleBar titleId="swedenmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/swedenmap/locate-map.jpg"
              alt="Sweden pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Sweden"
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
        previousHref="/sweden01"
        explicitPrevious
        overviewHref="/swedenoverview"
        nextHref="/sweden02"
      />
    </>
  );
}
