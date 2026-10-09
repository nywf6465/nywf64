import type { Metadata } from "next";
import Image from "next/image";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./belviloverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Belgian Village — Overview — nywf64.com",
  description:
    "Belgian Village overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Belgian Village overview — follows the **overview** prototype
 * (same stack as /barbufoverview / /twothooverview).
 */
export default function BelvilOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Belgian Village">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/belviloverview/hero-banner.jpg"
            alt="Belgian Village at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BelvilNavChrome />

      <section
        className={styles.overview}
        aria-label="Belgian Village overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              More than 100 buildings -- among them a church, a carousel and a
              rathskeller -- comprise a charming Flemish town of the year 1700.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/belviloverview/photo.jpg"
              alt="Belgian Village — Flemish town of the year 1700"
              width={958}
              height={598}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/belviloverview"
        overviewHref="/belviloverview"
        nextHref="/belvil01"
      />
    </>
  );
}
