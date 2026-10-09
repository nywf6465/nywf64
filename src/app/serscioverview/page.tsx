import type { Metadata } from "next";
import Image from "next/image";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./serscioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sermons from Science — Overview — nywf64.com",
  description:
    "Sermons from Science overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * Sermons from Science overview — follows the **overview** prototype
 * (same stack as /rusortoverview / /bilgraoverview / /morchuoverview).
 */
export default function SersciOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sermons from Science">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/serscioverview/hero-banner.jpg"
            alt="Sermons from Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SersciNavChrome />

      <section
        className={styles.overview}
        aria-label="Sermons from Science overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Demonstrations of scientific marvels and color films on nature
              illustrate the compatibility of faith with modern-day science.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/serscioverview/photo.jpg"
              alt="Sermons from Science pavilion"
              width={957}
              height={595}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/serscioverview"
        overviewHref="/serscioverview"
        nextHref="/sersci01"
      />
    </>
  );
}
