import type { Metadata } from "next";
import Image from "next/image";
import { AlaskaNavChrome } from "@/components/AlaskaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./alaskamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Alaska — nywf64.com",
  description:
    "Locate the Alaska Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Alaska locate-it map page (`/alaskamap`).
 * Stack: hero → AlaskaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy alaskamap.shtml (Federal & State Area map + alaskamap.gif arrow).
 */
export default function AlaskaMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Alaska">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/alaskaoverview/hero-banner.jpg"
            alt="Alaska pavilion at the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AlaskaNavChrome />

      <article className={styles.article} aria-labelledby="alaskamap-title">
        <LocateMapTitleBar titleId="alaskamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/alaskamap/locate-map.jpg"
              alt="Alaska Pavilion location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to Alaska"
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
        previousHref="/alaska01"
        explicitPrevious
        overviewHref="/alaska01"
        nextHref="/alaska02"
      />
    </>
  );
}
