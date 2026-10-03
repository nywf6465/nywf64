import type { Metadata } from "next";
import Image from "next/image";
import { WfpavNavChrome } from "@/components/WfpavNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wfpavoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "World's Fair Pavilion — Overview — nywf64.com",
  description:
    "World's Fair Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Pavilion overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (wfpav menu) → overview body → nav2 → footer
 */
export default function WfpavOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="World's Fair Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/wfpavoverview/hero-banner.jpg"
            alt="World's Fair Pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WfpavNavChrome />

      <section
        className={styles.overview}
        aria-label="World's Fair Pavilion overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              This is the Fair&apos;s major indoor assembly hall. The light
              latticework structure is a geodesic dome composed of 1,250
              interconnected pieces of aluminum tubing.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/wfpavoverview/photo.jpg"
              alt="World's Fair Pavilion geodesic dome"
              width={1586}
              height={992}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/wfpavoverview"
        overviewHref="/wfpavoverview"
        nextHref="/wfpav01"
      />
    </>
  );
}
