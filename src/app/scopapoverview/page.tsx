import type { Metadata } from "next";
import Image from "next/image";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./scopapoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Scott Paper — Overview — nywf64.com",
  description:
    "Scott Paper overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Scott Paper overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function ScopapOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Scott Paper">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/scopapoverview/hero-banner.jpg"
            alt="Scott Paper at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ScopapNavChrome />

      <section className={styles.overview} aria-label="Scott Paper overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A tour through an &quot;Enchanted Forest&quot; tells the story of
              paper from woodland to home.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/scopapoverview/photo.jpg"
              alt="Scott Paper pavilion at the 1964/1965 New York World’s Fair"
              width={1316}
              height={1195}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/scopapoverview"
        overviewHref="/scopapoverview"
        nextHref="/scopap01"
      />
    </>
  );
}
