import type { Metadata } from "next";
import Image from "next/image";
import { SocmobilNavChrome } from "@/components/SocmobilNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./socmobilmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Socony Mobil — nywf64.com",
  description:
    "Locate the Socony Mobil pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Socony Mobil locate-it map page (`/socmobilmap`).
 * Stack: hero → SocmobilNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy socmobilmap.shtml (Transportation Area map + socmobilmap.gif arrow).
 */
export default function SocmobilMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Socony Mobil">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/socmobiloverview/hero-banner.jpg"
            alt="Socony Mobil pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SocmobilNavChrome />

      <article className={styles.article} aria-labelledby="socmobilmap-title">
        <LocateMapTitleBar titleId="socmobilmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/socmobilmap/locate-map.jpg"
              alt="Socony Mobil pavilion location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to Socony Mobil"
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
        previousHref="/socmobil01"
        explicitPrevious
        overviewHref="/socmobiloverview"
        nextHref="/socmobil02"
      />
    </>
  );
}
