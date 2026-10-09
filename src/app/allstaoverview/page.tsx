import type { Metadata } from "next";
import Image from "next/image";
import { AllstaNavChrome } from "@/components/AllstaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./allstaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "All-State Properties & Macy's — Overview — nywf64.com",
  description:
    "All-State Properties & Macy's overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * All-State Properties & Macy's overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /africaoverview / /aertowoverview).
 */
export default function AllstaOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="All-State Properties & Macy's"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/allstaoverview/hero-banner.jpg"
            alt="All-State Properties & Macy's at the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AllstaNavChrome />

      <section
        className={styles.overview}
        aria-label="All-State Properties & Macy's overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Two ingenious houses, low-cost and compact, are displayed exactly
              as they will be constructed, ready for immediate occupancy.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/allstaoverview/photo.jpg"
              alt="All-State Properties & Macy's"
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
        previousHref="/allstaoverview"
        overviewHref="/allstaoverview"
        nextHref="/allsta01"
      />
    </>
  );
}
