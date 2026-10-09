import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { VenezeNavChrome } from "@/components/VenezeNavChrome";
import styles from "./venezemap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Venezuela — nywf64.com",
  description:
    "Locate the Venezuela pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Venezuela locate-it map page (`/venezemap`).
 * Stack: hero → VenezeNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy venezemap.shtml (International Area + venezemap.gif).
 */
export default function VenezeMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Venezuela">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/veneerview/hero-banner.jpg"
            alt="Venezuela pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VenezeNavChrome />

      <article className={styles.article} aria-labelledby="venezemap-title">
        <LocateMapTitleBar titleId="venezemap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/venezemap/locate-map.jpg"
              alt="Venezuela pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Venezuela"
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
        previousHref="/veneze01"
        explicitPrevious
        overviewHref="/veneerview"
        nextHref="/veneze02"
      />
    </>
  );
}
