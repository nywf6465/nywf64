import type { Metadata } from "next";
import Image from "next/image";
import { MalaysiaNavChrome } from "@/components/MalaysiaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./malaysiaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Malaysia — Overview — nywf64.com",
  description:
    "Malaysia overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Malaysia overview — follows the **overview** prototype
 * (same stack as /mainmalloverview / /lakcruoverview).
 * Wired with the shared **malaysia menu**.
 * Route slug: `/malaysiaoverview`.
 */
export default function MalaysiaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Malaysia">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/malaysiaoverview/hero-banner.jpg"
            alt="Malaysia at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MalaysiaNavChrome />

      <section className={styles.overview} aria-label="Malaysia overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A new country uses handicraft demonstrations and conducted tours
              to acquaint visitors with its people, government, industry and
              arts.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/malaysiaoverview/photo.jpg"
              alt="Malaysia pavilion"
              width={1584}
              height={1023}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/malaysiaoverview"
        overviewHref="/malaysiaoverview"
        nextHref="/malaysia01"
      />
    </>
  );
}
