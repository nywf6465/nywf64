import type { Metadata } from "next";
import Image from "next/image";
import { PorautNavChrome } from "@/components/PorautNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./porautoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Port Authority Heliport — Overview — nywf64.com",
  description:
    "Port Authority Heliport overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Port Authority Heliport overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /polyneoverview).
 */
export default function PorautOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Port Authority Heliport">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/porautoverview/hero-banner.jpg"
            alt="Port Authority Heliport at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PorautNavChrome />

      <section
        className={styles.overview}
        aria-label="Port Authority Heliport overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Rising 120 feet on four mammoth tapered columns, this structure is
              the aerial gateway to the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/porautoverview/photo.jpg"
              alt="Port Authority Heliport at the 1964/1965 New York World’s Fair"
              width={1289}
              height={1221}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/porautoverview"
        overviewHref="/porautoverview"
        nextHref="/poraut01"
      />
    </>
  );
}
