import type { Metadata } from "next";
import Image from "next/image";
import { NewengNavChrome } from "@/components/NewengNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./newengoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "New England — Overview — nywf64.com",
  description:
    "New England overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * New England overview — follows the **overview** prototype
 * (same stack as /natmarparoverview / /ncroverview).
 * Wired with the shared **neweng menu**.
 * Route slug: `/newengoverview`.
 */
export default function NewengOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="New England">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/newengoverview/hero-banner.jpg"
            alt="New England at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NewengNavChrome />

      <section className={styles.overview} aria-label="New England overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              {
                'A series of hexagonal buildngs around a "village green" includes a country store, a restaurant and exhibits of individual states.'
              }
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/newengoverview/photo.jpg"
              alt="New England pavilion"
              width={1584}
              height={1032}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/newengoverview"
        overviewHref="/newengoverview"
        nextHref="/neweng01"
      />
    </>
  );
}
