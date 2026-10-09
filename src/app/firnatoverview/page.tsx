import type { Metadata } from "next";
import Image from "next/image";
import { FirnatNavChrome } from "@/components/FirnatNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./firnatoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "First National City Bank — Overview — nywf64.com",
  description:
    "First National City Bank overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * First National City Bank overview — follows the **overview** prototype
 * (same stack as /finartoverview / /fiestaoverview).
 */
export default function FirnatOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="First National City Bank">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/firnatoverview/hero-banner.jpg"
            alt="First National City Bank at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FirnatNavChrome />

      <section
        className={styles.overview}
        aria-label="First National City Bank overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fair&apos;s bank has a multilingual staff and specializes in
              foreign currency transactions.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/firnatoverview/photo.jpg"
              alt="First National City Bank — pavilion with international flags and globe"
              width={1584}
              height={1456}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/firnatoverview"
        overviewHref="/firnatoverview"
        nextHref="/firnat01"
      />
    </>
  );
}
