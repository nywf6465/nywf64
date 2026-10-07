import type { Metadata } from "next";
import Image from "next/image";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./japanmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Japan — nywf64.com",
  description:
    "Locate the Japan pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Locate-it map — precomposed International cream + japanmap.gif (`/images/japanmap/locate-map.jpg`). */
export default function JapanMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Japan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/japanoverview/hero-banner.jpg"
            alt="Japan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JapanNavChrome />

      <article className={styles.article} aria-labelledby="japanmap-title">
        <LocateMapTitleBar titleId="japanmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/japanmap/locate-map.jpg"
              alt="Japan pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Japan"
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
        previousHref="/japan01"
        explicitPrevious
        overviewHref="/japanoverview"
        nextHref="/japan02"
      />
    </>
  );
}
