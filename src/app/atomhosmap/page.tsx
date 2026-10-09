import type { Metadata } from "next";
import Image from "next/image";
import { AtomhosNavChrome } from "@/components/AtomhosNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./atomhosmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Atomedic Hospital — nywf64.com",
  description:
    "Locate the Atomedic Hospital on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Atomedic Hospital locate-it map page (`/atomhosmap`).
 * Stack: hero → AtomhosNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy atomhosmap.shtml (Industrial Area map + atomhosmap.gif arrow),
 * matching the /argentmap locate-map pattern.
 */
export default function AtomhosMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Atomedic Hospital">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/atomhosoverview/hero-banner.jpg"
            alt="Atomedic Hospital at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AtomhosNavChrome />

      <article className={styles.article} aria-labelledby="atomhosmap-title">
        <LocateMapTitleBar titleId="atomhosmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/atomhosmap/locate-map.jpg"
              alt="Atomedic Hospital location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Atomedic Hospital"
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
        previousHref="/atomhos01"
        explicitPrevious
        overviewHref="/atomhos01"
        nextHref="/atomhos02"
      />
    </>
  );
}
