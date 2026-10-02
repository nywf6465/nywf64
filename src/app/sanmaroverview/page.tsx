import type { Metadata } from "next";
import Image from "next/image";
import { SanmarNavChrome } from "@/components/SanmarNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sanmaroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Santa Maria — Overview — nywf64.com",
  description:
    "Santa Maria overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Santa Maria overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SanmarOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Santa Maria">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/sanmaroverview/hero-banner.jpg"
            alt="Santa Maria at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SanmarNavChrome />

      <section className={styles.overview} aria-label="Santa Maria overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A full-sized replica of Columbus&apos; flagship is moored at the
              end of a 15th Century Spanish wharf.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/sanmaroverview/photo.jpg"
              alt="Santa Maria replica ship at the 1964/1965 New York World’s Fair"
              width={1229}
              height={1280}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/sanmaroverview"
        overviewHref="/sanmaroverview"
        nextHref="/sanmar01"
      />
    </>
  );
}
