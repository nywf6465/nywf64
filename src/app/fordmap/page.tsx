import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FordNavChrome } from "@/components/FordNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fordmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Ford — nywf64.com",
  description:
    "Locate the Ford Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford locate-it map page (`/fordmap`).
 * Stack matches other ford pages: hero → FordNavChrome → body → Nav2Bar.
 * Body content is left-justified (same standards as `/bellmap`).
 */
export default function FordMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Ford Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fordoverview/hero-banner.jpg"
            alt="Ford Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FordNavChrome />

      <article className={styles.article} aria-label="Locate it map">
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <p className={styles.introLead}>
              <strong>Locate it!</strong> The location of this pavilion or
              exhibit is indicated below.
            </p>
            <p className={styles.mapNote}>
              <Link href="/maps/1964-official-souvenir-map">
                See a <i>full-size</i> version of the 1964 Official Souvenir Map
                (<b>LARGE&nbsp;download</b>).
              </Link>
            </p>
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/fordmap/locate-map.jpg"
              alt="Ford Pavilion location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to Ford"
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
        previousHref="/ford01"
        overviewHref="/fordoverview"
        nextHref="/ford01"
      />
    </>
  );
}
