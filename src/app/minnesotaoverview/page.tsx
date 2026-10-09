import type { Metadata } from "next";
import Image from "next/image";
import { MinnesotaNavChrome } from "@/components/MinnesotaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./minnesotaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Minnesota — Overview — nywf64.com",
  description:
    "Minnesota overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Minnesota overview — follows the **overview** prototype
 * (same stack as /midwestoverview / /mexicooverview).
 * Wired with the shared **minnesota menu**.
 * Route slug: `/minnesotaoverview`.
 */
export default function MinnesotaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Minnesota">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/minnesotaoverview/hero-banner.jpg"
            alt="Minnesota at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MinnesotaNavChrome />

      <section className={styles.overview} aria-label="Minnesota overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Highlight of this pavilion is the Kensington Runestone, believed
              to be a relic of Viking exploration in Minnesota in the year 1362.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/minnesotaoverview/photo.jpg"
              alt="Minnesota pavilion"
              width={1584}
              height={1005}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/minnesotaoverview"
        overviewHref="/minnesotaoverview"
        nextHref="/minnesota01"
      />
    </>
  );
}
