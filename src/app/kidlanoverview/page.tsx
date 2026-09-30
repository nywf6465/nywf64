import type { Metadata } from "next";
import Image from "next/image";
import { KidlanNavChrome } from "@/components/KidlanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./kidlanoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Kiddyland — Overview — nywf64.com",
  description:
    "Kiddyland overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Kiddyland overview — follows the **overview** prototype
 * (same stack as /julfaroverview / /jordanoverview).
 * Wired with the shared **kidlan menu**.
 * Route slug: `/kidlanoverview`.
 */
export default function KidlanOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Kiddyland">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/kidlanoverview/hero-banner.jpg"
            alt="Kiddyland at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <KidlanNavChrome />

      <section className={styles.overview} aria-label="Kiddyland overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              As the name makes clear, this pavilion offers all kind of fun for
              the youngsters.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/kidlanoverview/photo.jpg"
              alt="Kiddyland — fun for the youngsters"
              width={1584}
              height={1230}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/kidlanoverview"
        overviewHref="/kidlanoverview"
        nextHref="/kidlan01"
      />
    </>
  );
}
