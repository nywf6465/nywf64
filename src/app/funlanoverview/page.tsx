import type { Metadata } from "next";
import Image from "next/image";
import { FunlanNavChrome } from "@/components/FunlanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./funlanoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Funland — Overview — nywf64.com",
  description:
    "Funland overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Funland overview — follows the **overview** prototype
 * (same stack as /franceoverview / /formicaoverview).
 */
export default function FunlanOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Funland">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/funlanoverview/hero-banner.jpg"
            alt="Funland at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FunlanNavChrome />

      <section className={styles.overview} aria-label="Funland overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Three exciting rides are offered for children and grownups.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/funlanoverview/photo.jpg"
              alt="Funland — rides for children and grownups"
              width={1584}
              height={1318}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/funlanoverview"
        overviewHref="/funlanoverview"
        nextHref="/funlan01"
      />
    </>
  );
}
