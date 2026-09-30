import type { Metadata } from "next";
import Image from "next/image";
import { MissouriNavChrome } from "@/components/MissouriNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./missourioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Missouri — Overview — nywf64.com",
  description:
    "Missouri overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Missouri overview — follows the **overview** prototype
 * (same stack as /minnesotaoverview / /midwestoverview).
 * Wired with the shared **missouri menu**.
 * Route slug: `/missourioverview`.
 */
export default function MissouriOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Missouri">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/missourioverview/hero-banner.jpg"
            alt="Missouri at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MissouriNavChrome />

      <section className={styles.overview} aria-label="Missouri overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              {
                'The chief displays are an exact replica of Lindbergh\'s plane, "The Spirit of St. Louis," and the Mercury space capsule, "Friendship 7."'
              }
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/missourioverview/photo.jpg"
              alt="Missouri pavilion"
              width={1584}
              height={1071}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/missourioverview"
        overviewHref="/missourioverview"
        nextHref="/missouri01"
      />
    </>
  );
}
