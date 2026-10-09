import type { Metadata } from "next";
import Image from "next/image";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./geneleoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "General Electric — Overview — nywf64.com",
  description:
    "General Electric Pavilion overview at the 1964/1965 New York World’s Fair — Progressland / Carousel of Progress on nywf64.com.",
};

/**
 * General Electric overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (genele menu) → overview body → nav2 → footer
 */
export default function GeneleOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="General Electric Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/geneleoverview/hero-banner.jpg"
            alt="General Electric Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GeneleNavChrome />

      <section className={styles.overview} aria-label="General Electric overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              In a one-hour show, the changes electricity has brought in American
              living are dramatized by life-sized animated figures created by Walt
              Disney.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/geneleoverview/photo.jpg"
              alt="Life-sized animated figures in the General Electric Pavilion show created by Walt Disney"
              width={1526}
              height={1030}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/geneleoverview"
        overviewHref="/geneleoverview"
        nextHref="/genele01"
      />
    </>
  );
}
