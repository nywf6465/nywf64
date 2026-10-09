import type { Metadata } from "next";
import Image from "next/image";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bilgraoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Billy Graham — Overview — nywf64.com",
  description:
    "Billy Graham overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * Billy Graham overview — follows the **overview** prototype
 * (same stack as /amerisroverview / /lightingoverview).
 */
export default function BilgraOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Billy Graham">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/bilgraoverview/hero-banner.jpg"
            alt="Billy Graham at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BilgraNavChrome />

      <section className={styles.overview} aria-label="Billy Graham overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The famed evangelist&apos;s message is presented in a color film,
              and personal counseling is offered.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/bilgraoverview/photo.jpg"
              alt="Billy Graham pavilion"
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
        previousHref="/bilgraoverview"
        overviewHref="/bilgraoverview"
        nextHref="/bilgra01"
      />
    </>
  );
}
