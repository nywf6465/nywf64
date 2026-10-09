import type { Metadata } from "next";
import Image from "next/image";
import { NcrNavChrome } from "@/components/NcrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ncroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "NCR (National Cash Register) — Overview — nywf64.com",
  description:
    "NCR (National Cash Register) overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * NCR overview — follows the **overview** prototype
 * (same stack as /morocooverview / /montanaoverview).
 * Wired with the shared **ncr menu**.
 * Route slug: `/ncroverview`.
 */
export default function NcrOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="NCR">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/ncroverview/hero-banner.jpg"
            alt="NCR (National Cash Register) at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NcrNavChrome />

      <section className={styles.overview} aria-label="NCR overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Among the displays are a giant children&apos;s abacus, a
              microscopic Bible and a computer that answers a variety of
              questions.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/ncroverview/photo.jpg"
              alt="NCR pavilion"
              width={1584}
              height={971}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/ncroverview"
        overviewHref="/ncroverview"
        nextHref="/ncr01"
      />
    </>
  );
}
