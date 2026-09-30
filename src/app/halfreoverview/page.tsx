import type { Metadata } from "next";
import Image from "next/image";
import { HalfreNavChrome } from "@/components/HalfreNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./halfreoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Hall of Free Enterprise — Overview — nywf64.com",
  description:
    "Hall of Free Enterprise overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Free Enterprise overview — follows the **overview** prototype
 * (same stack as /haleduoverview / /guineaoverview).
 */
export default function HalfreOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Free Enterprise">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/halfreoverview/hero-banner.jpg"
            alt="Hall of Free Enterprise at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HalfreNavChrome />

      <section
        className={styles.overview}
        aria-label="Hall of Free Enterprise overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The benefits of free competition are explained in a pavilion
              sponsored by the American Economic Foundation.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/halfreoverview/photo.jpg"
              alt="Hall of Free Enterprise — benefits of free competition"
              width={1584}
              height={1007}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/halfreoverview"
        overviewHref="/halfreoverview"
        nextHref="/halfre01"
      />
    </>
  );
}
