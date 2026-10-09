import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { UnNavChrome } from "@/components/UnNavChrome";
import styles from "./unmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — United Nations — nywf64.com",
  description:
    "Locate the United Nations exhibit on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Nations locate-it map page (`/unmap`).
 * Stack: hero → UnNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy unmap.shtml (International Area map + sierramap.gif arrow;
 * UN occupied the former Sierra Leone pavilion site in 1965).
 */
export default function UnMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="United Nations">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unoverview/hero-banner.jpg"
            alt="United Nations exhibit at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnNavChrome />

      <article className={styles.article} aria-labelledby="unmap-title">
        <LocateMapTitleBar titleId="unmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/unmap/locate-map.jpg"
              alt="United Nations exhibit location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the United Nations"
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
        previousHref="/un01"
        explicitPrevious
        overviewHref="/unoverview"
        nextHref="/un02"
      />
    </>
  );
}
