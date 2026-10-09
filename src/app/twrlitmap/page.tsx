import type { Metadata } from "next";
import Image from "next/image";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./twrlitmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Tower of Light — nywf64.com",
  description:
    "Locate the Tower of Light on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light locate-it map page (`/twrlitmap`).
 * Stack: hero → TwrlitNavChrome → navy title bar → left-justified body → Nav2Bar.
 */
export default function TwrlitMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Tower of Light">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/twrlitoverview/hero-banner.jpg"
            alt="Tower of Light at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TwrlitNavChrome />

      <article className={styles.article} aria-labelledby="twrlitmap-title">
        <LocateMapTitleBar titleId="twrlitmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/twrlitmap/locate-map.jpg"
              alt="Tower of Light location on the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/twrlit01"
        explicitPrevious
        overviewHref="/twrlitoverview"
        nextHref="/twrlit02"
      />
    </>
  );
}
