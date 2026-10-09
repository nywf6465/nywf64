import type { Metadata } from "next";
import Image from "next/image";
import { UarNavChrome } from "@/components/UarNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./uaroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "United Arab Republic — Overview — nywf64.com",
  description:
    "United Arab Republic Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Arab Republic overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (uar menu) → overview body → nav2 → footer
 */
export default function UarOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="United Arab Republic">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/uaroverview/hero-banner.jpg"
            alt="United Arab Republic at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UarNavChrome />

      <section
        className={styles.overview}
        aria-label="United Arab Republic overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Models of the Aswan Dam and the Suez Canal are among many displays
              that emphasize progress in this ancient land.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/uaroverview/photo.jpg"
              alt="United Arab Republic Pavilion with arched entrance"
              width={1536}
              height={1024}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/uaroverview"
        overviewHref="/uaroverview"
        nextHref="/uar01"
      />
    </>
  );
}
