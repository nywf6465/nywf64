import type { Metadata } from "next";
import Image from "next/image";
import { IrelandNavChrome } from "@/components/IrelandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./irelandoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Ireland — Overview — nywf64.com",
  description:
    "Ireland overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ireland overview — follows the **overview** prototype
 * (same stack as /indiaoverview / /intplaoverview).
 * Wired with the shared **ireland menu**.
 * Route slug: `/irelandoverview`.
 */
export default function IrelandOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Ireland">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/irelandoverview/hero-banner.jpg"
            alt="Ireland pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IrelandNavChrome />

      <section className={styles.overview} aria-label="Ireland overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The nation&apos;s arts and way of life are shown in displays of
              fine products, poetry recordings and a scenic aerial film.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/irelandoverview/photo.jpg"
              alt="Ireland pavilion — arts, products, and scenic film exhibits"
              width={1584}
              height={829}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/ireland04"
        overviewHref="/irelandoverview"
        nextHref="/ireland01"
      />
    </>
  );
}
