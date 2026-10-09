import type { Metadata } from "next";
import Image from "next/image";
import { BraraiNavChrome } from "@/components/BraraiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./braraioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brass Rail — Overview — nywf64.com",
  description:
    "Brass Rail overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Brass Rail overview — follows the **overview** prototype
 * (same stack as /boyscooverview / /boustroverview).
 */
export default function BraraiOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Brass Rail">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/braraioverview/hero-banner.jpg"
            alt="Brass Rail at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BraraiNavChrome />

      <section className={styles.overview} aria-label="Brass Rail overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Twenty-five refreshment and souvenir stands operated by the Brass
              Rail Food Services organization are located throughout the
              Fairgrounds.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/braraioverview/photo.jpg"
              alt="Brass Rail — refreshment and souvenir stands"
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
        previousHref="/braraioverview"
        overviewHref="/braraioverview"
        nextHref="/brarai01"
      />
    </>
  );
}
