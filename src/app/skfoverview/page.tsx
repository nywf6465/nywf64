import type { Metadata } from "next";
import Image from "next/image";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./skfoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "SKF — Overview — nywf64.com",
  description:
    "SKF overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * SKF overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SkfOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="SKF">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/skfoverview/hero-banner.jpg"
            alt="SKF at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SkfNavChrome />

      <section className={styles.overview} aria-label="SKF overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A mechanical man introduces a film showing man&apos;s progress in
              locomotion; a wide range of equipment using ball and roller
              bearings is displayed.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/skfoverview/photo.jpg"
              alt="SKF pavilion at the 1964/1965 New York World’s Fair"
              width={1029}
              height={1528}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/skfoverview"
        overviewHref="/skfoverview"
        nextHref="/skf01"
      />
    </>
  );
}
