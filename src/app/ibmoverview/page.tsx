import type { Metadata } from "next";
import Image from "next/image";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ibmoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "IBM — Overview — nywf64.com",
  description:
    "IBM Pavilion overview at the 1964/1965 New York World’s Fair — The People Wall on nywf64.com.",
};

/**
 * IBM overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (ibm menu) → overview body → nav2 → footer
 */
export default function IbmOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="IBM Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/ibmoverview/hero-banner.jpg"
            alt="IBM Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IbmNavChrome />

      <section className={styles.overview} aria-label="IBM overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A moving 500-seat &quot;People Wall&quot; lifts visitors into an
              egg-shaped theater for a captivating multi-screen show.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/ibmoverview/photo.jpg"
              alt="IBM Pavilion — People Wall and egg-shaped theater"
              width={1477}
              height={1065}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/ibmoverview"
        overviewHref="/ibmoverview"
        nextHref="/ibm01"
      />
    </>
  );
}
