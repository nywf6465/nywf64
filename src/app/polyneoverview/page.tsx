import type { Metadata } from "next";
import Image from "next/image";
import { PolyneNavChrome } from "@/components/PolyneNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./polyneoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Polynesia — Overview — nywf64.com",
  description:
    "Polynesia pavilion overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Polynesia overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /philipoverview).
 */
export default function PolyneOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Polynesia">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/polyneoverview/hero-banner.jpg"
            alt="Polynesia at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PolyneNavChrome />

      <section className={styles.overview} aria-label="Polynesia overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Life in a South Seas village is recreated by fire dancers and
              pearl divers amid thatch-roofed huts and a palm-shaded lagoon.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/polyneoverview/photo.jpg"
              alt="Polynesia pavilion at the 1964/1965 New York World’s Fair"
              width={1505}
              height={1045}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/polyneoverview"
        overviewHref="/polyneoverview"
        nextHref="/polynesia01"
      />
    </>
  );
}
