import type { Metadata } from "next";
import Image from "next/image";
import { BoustrNavChrome } from "@/components/BoustrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./boustroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Bourbon Street — Overview — nywf64.com",
  description:
    "Bourbon Street overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bourbon Street overview — follows the **overview** prototype
 * (same stack as /bountyoverview / /betlivoverview).
 */
export default function BoustrOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Bourbon Street">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/boustroverview/hero-banner.jpg"
            alt="Bourbon Street at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BoustrNavChrome />

      <section
        className={styles.overview}
        aria-label="Bourbon Street overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A reconstruction of New Orleans&apos; famous street of fun features
              well-known jazz musicians, Creole food and sidewalk shops.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/boustroverview/photo.jpg"
              alt="Bourbon Street — New Orleans reconstruction"
              width={751}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/boustroverview"
        overviewHref="/boustroverview"
        nextHref="/boustr01"
      />
    </>
  );
}
