import type { Metadata } from "next";
import Image from "next/image";
import { PanamgNavChrome } from "@/components/PanamgNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./panamgoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Avis Pan American Highway Rides — Overview — nywf64.com",
  description:
    "Avis Pan American Highway Rides overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Avis Pan American Highway Rides overview — follows the **overview** prototype
 * (same stack as /avisoverview / /autthroverview).
 */
export default function PanamgOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Avis Pan American Highway Rides"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/panamgoverview/hero-banner.jpg"
            alt="Avis Pan American Highway Rides at the 1964/1965 New York World’s Fair"
            width={1912}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PanamgNavChrome />

      <section
        className={styles.overview}
        aria-label="Avis Pan American Highway Rides overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors drive miniature cars along a &quot;transcontinental&quot;
              road.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/panamgoverview/photo.jpg"
              alt="Avis Pan American Highway Rides"
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
        previousHref="/panamgoverview"
        overviewHref="/panamgoverview"
        nextHref="/panamg01"
      />
    </>
  );
}
