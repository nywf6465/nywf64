import type { Metadata } from "next";
import Image from "next/image";
import { FordNavChrome } from "@/components/FordNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fordoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Ford — Overview — nywf64.com",
  description:
    "Ford Pavilion overview at the 1964/1965 New York World’s Fair — Magic Skyway on nywf64.com.",
};

/**
 * Ford overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (ford menu) → overview body → nav2 → footer
 */
export default function FordOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Ford Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/fordoverview/hero-banner.jpg"
            alt="Ford Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FordNavChrome />

      <section className={styles.overview} aria-label="Ford overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Animated displays and scale models depict man&apos;s progress from
              prehistoric times to the Space Age. Viewers ride past some of the
              exhibits in new Ford cars.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fordoverview/photo.jpg"
              alt="Animated displays and scale models at the Ford Pavilion Magic Skyway"
              width={958}
              height={706}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/fordoverview"
        overviewHref="/fordoverview"
        nextHref="/ford01"
      />
    </>
  );
}
