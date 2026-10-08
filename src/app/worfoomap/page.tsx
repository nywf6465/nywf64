import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import styles from "./worfoomap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — World of Food — nywf64.com",
  description:
    "Locate the World of Food Pavilion site on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World of Food locate-it map page (`/worfoomap`).
 * Stack: hero → WorfooNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy worfoomap.shtml (Industrial Area map + worfoomap.gif arrow).
 */
export default function WorfooMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="World of Food">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/worfoooverview/hero-banner.jpg"
            alt="World of Food pavilion site at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WorfooNavChrome />

      <article className={styles.article} aria-labelledby="worfoomap-title">
        <LocateMapTitleBar titleId="worfoomap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/worfoomap/locate-map.jpg"
              alt="World of Food Pavilion site location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to World of Food"
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
        previousHref="/worfoo01"
        overviewHref="/worfoooverview"
        nextHref="/worfoo02"
      />
    </>
  );
}
