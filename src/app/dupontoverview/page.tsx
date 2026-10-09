import type { Metadata } from "next";
import Image from "next/image";
import { DupontNavChrome } from "@/components/DupontNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./dupontoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "DuPont — Overview — nywf64.com",
  description:
    "DuPont Pavilion overview at the 1964/1965 New York World’s Fair — Wonderful World of Chemistry on nywf64.com.",
};

/**
 * DuPont overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (DuPont menu) → overview body → nav2 → footer
 */
export default function DupontOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="DuPont Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/dupontoverview/hero-banner.jpg"
            alt="DuPont Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DupontNavChrome />

      <section className={styles.overview} aria-label="DuPont overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A lively musical revue, new fashions and some startling
              demonstrations are devoted to progress in chemistry today.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/dupontoverview/photo.jpg"
              alt="DuPont Pavilion — Wonderful World of Chemistry"
              width={1542}
              height={1020}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/dupontoverview"
        overviewHref="/dupontoverview"
        nextHref="/dupont01"
      />
    </>
  );
}
