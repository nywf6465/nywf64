import type { Metadata } from "next";
import Image from "next/image";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./usrubmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — U.S. Rubber — nywf64.com",
  description:
    "Locate U.S. Rubber on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Rubber locate-it map page (`/usrubmap`).
 * Stack: hero → UsrubNavChrome → navy title bar → left-justified body → Nav2Bar.
 */
export default function UsrubMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="U.S. Rubber">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/usruboverview/hero-banner.jpg"
            alt="U.S. Rubber at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UsrubNavChrome />

      <article className={styles.article} aria-labelledby="usrubmap-title">
        <LocateMapTitleBar titleId="usrubmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/usrubmap/locate-map.jpg"
              alt="U.S. Rubber location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to the U.S. Rubber giant tire"
              width={987}
              height={1165}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/usrub01"
        explicitPrevious
        overviewHref="/usruboverview"
        nextHref="/usrub02"
      />
    </>
  );
}
