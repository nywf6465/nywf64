import type { Metadata } from "next";
import Image from "next/image";
import { WfmarNavChrome } from "@/components/WfmarNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wfmaroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "World's Fair Marina — Overview — nywf64.com",
  description:
    "World's Fair Marina overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Marina overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (wfmar menu) → overview body → nav2 → footer
 */
export default function WfmarOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="World's Fair Marina">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/wfmaroverview/hero-banner.jpg"
            alt="World's Fair Marina at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WfmarNavChrome />

      <section
        className={styles.overview}
        aria-label="World's Fair Marina overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Fairgoers can watch yachtsmen and small-boat buffs at work, and
              tour a Coast Guard exhibit.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/wfmaroverview/photo.jpg"
              alt="World's Fair Marina aerial rendering"
              width={1556}
              height={1011}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/wfmaroverview"
        overviewHref="/wfmaroverview"
        nextHref="/wfmar01"
      />
    </>
  );
}
