import type { Metadata } from "next";
import Image from "next/image";
import { HertzNavChrome } from "@/components/HertzNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hertzoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Hertz Travel Center — Overview — nywf64.com",
  description:
    "Hertz Travel Center overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hertz Travel Center overview — follows the **overview** prototype
 * (same stack as /heartlandoverview / /hawaiioverview).
 */
export default function HertzOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hertz Travel Center">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/hertzoverview/hero-banner.jpg"
            alt="Hertz Travel Center at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HertzNavChrome />

      <section
        className={styles.overview}
        aria-label="Hertz Travel Center overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Multilingual attendants offer travel information and local maps.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/hertzoverview/photo.jpg"
              alt="Hertz Travel Center — multilingual attendants and travel information"
              width={1584}
              height={851}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/hertzoverview"
        overviewHref="/hertzoverview"
        nextHref="/hertz01"
      />
    </>
  );
}
