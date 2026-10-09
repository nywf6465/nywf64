import type { Metadata } from "next";
import Image from "next/image";
import { MasonNavChrome } from "@/components/MasonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./masonoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Masonic Center — Overview — nywf64.com",
  description:
    "Masonic Center overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Masonic Center overview — follows the **overview** prototype
 * (same stack as /marylandoverview / /malaysiaoverview).
 * Wired with the shared **mason menu**.
 * Route slug: `/masonoverview`.
 */
export default function MasonOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Masonic Center">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/masonoverview/hero-banner.jpg"
            alt="Masonic Center at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MasonNavChrome />

      <section className={styles.overview} aria-label="Masonic Center overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Documents and other memorabilia illustrate the history of the
              Masonic brotherhood.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/masonoverview/photo.jpg"
              alt="Masonic Center pavilion"
              width={1584}
              height={985}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/masonoverview"
        overviewHref="/masonoverview"
        nextHref="/mason01"
      />
    </>
  );
}
