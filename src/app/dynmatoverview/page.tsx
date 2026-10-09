import type { Metadata } from "next";
import Image from "next/image";
import { DynmatNavChrome } from "@/components/DynmatNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./dynmatoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Dynamic Maturity — Overview — nywf64.com",
  description:
    "Dynamic Maturity overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dynamic Maturity overview — follows the **overview** prototype
 * (same stack as /denmarkoverview / /democroverview).
 */
export default function DynmatOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Dynamic Maturity">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/dynmatoverview/hero-banner.jpg"
            alt="Dynamic Maturity at the 1964/1965 New York World’s Fair"
            width={1906}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DynmatNavChrome />

      <section
        className={styles.overview}
        aria-label="Dynamic Maturity overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Older visitors are offered hospitality, a patio to relax in and
              help in planning their Fair tour.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/dynmatoverview/photo.jpg"
              alt="Dynamic Maturity pavilion — hospitality patio for older visitors"
              width={896}
              height={568}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/dynmatoverview"
        overviewHref="/dynmatoverview"
        nextHref="/dynmat01"
      />
    </>
  );
}
