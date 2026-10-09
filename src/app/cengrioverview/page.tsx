import type { Metadata } from "next";
import Image from "next/image";
import { CengriNavChrome } from "@/components/CengriNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./cengrioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Century Grill — Overview — nywf64.com",
  description:
    "Century Grill overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Century Grill overview — follows the **overview** prototype
 * (same stack as /cenameriverview / /carparoverview).
 */
export default function CengriOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Century Grill">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/cengrioverview/hero-banner.jpg"
            alt="Century Grill at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CengriNavChrome />

      <section className={styles.overview} aria-label="Century Grill overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              This restaurant serves hamburgers prepared with savory sauces,
              along with side dishes from every nation represented at the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/cengrioverview/photo.jpg"
              alt="Century Grill — hamburgers and international side dishes"
              width={958}
              height={643}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/cengrioverview"
        overviewHref="/cengrioverview"
        nextHref="/cengri01"
      />
    </>
  );
}
