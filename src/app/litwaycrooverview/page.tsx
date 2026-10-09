import type { Metadata } from "next";
import Image from "next/image";
import { LitwaycroNavChrome } from "@/components/LitwaycroNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./litwaycrooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Lithuanian Wayside Cross — Overview — nywf64.com",
  description:
    "Lithuanian Wayside Cross overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * Lithuanian Wayside Cross overview — follows the **overview** prototype
 * (same stack as /chrscioverview / /bilgraoverview).
 */
export default function LitwaycroOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Lithuanian Wayside Cross">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/litwaycrooverview/hero-banner.jpg"
            alt="Lithuanian Wayside Cross at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LitwaycroNavChrome />

      <section
        className={styles.overview}
        aria-label="Lithuanian Wayside Cross overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A carved wooden cross memorializes those who have given their
              lives in defense of Lithuanian freedom.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/litwaycrooverview/photo.jpg"
              alt="Lithuanian Wayside Cross"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/litwaycrooverview"
        overviewHref="/litwaycrooverview"
        nextHref="/litwaycro01"
      />
    </>
  );
}
