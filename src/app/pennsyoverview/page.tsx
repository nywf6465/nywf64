import type { Metadata } from "next";
import Image from "next/image";
import { PennsyNavChrome } from "@/components/PennsyNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./pennsyoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pennsylvania — Overview — nywf64.com",
  description:
    "Pennsylvania pavilion overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Pennsylvania overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /pavparoverview).
 */
export default function PennsyOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Pennsylvania">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/pennsyoverview/hero-banner.jpg"
            alt="Pennsylvania at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PennsyNavChrome />

      <section className={styles.overview} aria-label="Pennsylvania overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Pennsylvania exhibit features a full-sized replica of the
              Liberty Bell. The bell can be rung by visitors.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/pennsyoverview/photo.jpg"
              alt="Liberty Bell replica at the Pennsylvania pavilion"
              width={1254}
              height={1254}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/pennsyoverview"
        overviewHref="/pennsyoverview"
        nextHref="/pennsylvania01"
      />
    </>
  );
}
