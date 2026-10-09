import type { Metadata } from "next";
import Image from "next/image";
import { TwothoNavChrome } from "@/components/TwothoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./twothooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Two Thousand Tribes — Overview — nywf64.com",
  description:
    "Two Thousand Tribes overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * Two Thousand Tribes overview — follows the **overview** prototype
 * (same stack as /serscioverview / /rusortoverview).
 */
export default function TwothoOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Two Thousand Tribes">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/twothooverview/hero-banner.jpg"
            alt="Two Thousand Tribes at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TwothoNavChrome />

      <section
        className={styles.overview}
        aria-label="Two Thousand Tribes overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The ancient artifacts and modern progress of tribal groups around
              the world are shown in a large stylized aboriginal hut.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/twothooverview/photo.jpg"
              alt="Two Thousand Tribes pavilion — stylized aboriginal hut"
              width={958}
              height={609}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/twothooverview"
        overviewHref="/twothooverview"
        nextHref="/twotho01"
      />
    </>
  );
}
