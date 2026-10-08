import type { Metadata } from "next";
import Image from "next/image";
import { SpainNavChrome } from "@/components/SpainNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./spainmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Spain — nywf64.com",
  description:
    "Locate the Spain Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain locate-it map page (`/spainmap`).
 * Stack: hero → SpainNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy spainmap.shtml (International Area map + spainmap.gif arrow).
 */
export default function SpainMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Spain Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/spainoverview/hero-banner.jpg"
            alt="Spain Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpainNavChrome />

      <article className={styles.article} aria-labelledby="spainmap-title">
        <LocateMapTitleBar titleId="spainmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/spainmap/locate-map.jpg"
              alt="Spain Pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Spain"
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
        previousHref="/spain01"
        explicitPrevious
        overviewHref="/spainoverview"
        nextHref="/spain02"
      />
    </>
  );
}
