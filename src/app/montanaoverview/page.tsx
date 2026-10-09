import type { Metadata } from "next";
import Image from "next/image";
import { MontanaNavChrome } from "@/components/MontanaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./montanaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Montana — Overview — nywf64.com",
  description:
    "Montana overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Montana overview — follows the **overview** prototype
 * (same stack as /amfoverview / /missourioverview).
 * Wired with the shared **montana menu**.
 * Route slug: `/montanaoverview`.
 */
export default function MontanaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Montana">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/montanaoverview/hero-banner.jpg"
            alt="Montana at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MontanaNavChrome />

      <section className={styles.overview} aria-label="Montana overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Seven gaily painted railroad cars contain a Western museum, a
              store and other exhibits from the Big Sky country.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/montanaoverview/photo.jpg"
              alt="Montana pavilion"
              width={1584}
              height={1056}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/montanaoverview"
        overviewHref="/montanaoverview"
        nextHref="/montana01"
      />
    </>
  );
}
