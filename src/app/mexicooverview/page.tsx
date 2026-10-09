import type { Metadata } from "next";
import Image from "next/image";
import { MexicoNavChrome } from "@/components/MexicoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./mexicooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Mexico — Overview — nywf64.com",
  description:
    "Mexico overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Mexico overview — follows the **overview** prototype
 * (same stack as /medphooverview / /maspizoverview).
 * Wired with the shared **mexico menu**.
 * Route slug: `/mexicooverview`.
 */
export default function MexicoOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Mexico">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/mexicooverview/hero-banner.jpg"
            alt="Mexico at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MexicoNavChrome />

      <section className={styles.overview} aria-label="Mexico overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Highlights include modern and pre-Columbian art, aerial acrobats,
              concerts, fashion shows, and a pleasant restaurant and bar.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/mexicooverview/photo.jpg"
              alt="Mexico pavilion"
              width={1584}
              height={1068}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/mexicooverview"
        overviewHref="/mexicooverview"
        nextHref="/mexico01"
      />
    </>
  );
}
