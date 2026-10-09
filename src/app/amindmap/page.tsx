import type { Metadata } from "next";
import Image from "next/image";
import { AmindNavChrome } from "@/components/AmindNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amindmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — American Indian Exposition — nywf64.com",
  description:
    "Locate the American Indian Exposition on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Indian Exposition locate-it map page (`/amindmap`).
 * Stack: hero → AmindNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy amindmap.shtml (Amusement Area map + amindmap.gif arrow).
 */
export default function AmindMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="American Indian Exposition">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amindoverview/hero-banner.jpg"
            alt="American Indian Exposition at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmindNavChrome />

      <article className={styles.article} aria-labelledby="amindmap-title">
        <LocateMapTitleBar titleId="amindmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/amindmap/locate-map.jpg"
              alt="American Indian Exposition location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to American Indian"
              width={930}
              height={655}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/amind01"
        explicitPrevious
        overviewHref="/amindoverview"
        nextHref="/amind02"
      />
    </>
  );
}
