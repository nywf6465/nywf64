import type { Metadata } from "next";
import Image from "next/image";
import { GuineaNavChrome } from "@/components/GuineaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./guineaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Guinea — Overview — nywf64.com",
  description:
    "Guinea overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Guinea overview — follows the **overview** prototype
 * (same stack as /greyhoundoverview / /greeceoverview).
 */
export default function GuineaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Guinea">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/guineaoverview/hero-banner.jpg"
            alt="Guinea at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GuineaNavChrome />

      <section className={styles.overview} aria-label="Guinea overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Three African huts house industrial displays, souvenirs and a
              theater-restaurant.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/guineaoverview/photo.jpg"
              alt="Guinea — industrial displays, souvenirs, and theater-restaurant"
              width={1584}
              height={1080}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/guineaoverview"
        overviewHref="/guineaoverview"
        nextHref="/guinea01"
      />
    </>
  );
}
