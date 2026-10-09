import type { Metadata } from "next";
import Image from "next/image";
import { CitservNavChrome } from "@/components/CitservNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./citservoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Cities Service World's Fair Band of America — Overview — nywf64.com",
  description:
    "Cities Service World's Fair Band of America overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Cities Service Band overview — follows the **overview** prototype
 * (same stack as /chucenoverview / /chucanoverview).
 */
export default function CitservOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Cities Service World's Fair Band of America"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/citservoverview/hero-banner.jpg"
            alt="Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CitservNavChrome />

      <section
        className={styles.overview}
        aria-label="Cities Service Band overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Paul Lavalle directs the Cities Service World&apos;s Fair Band of
              America. Six concerts a day throughout the Fairgrounds on a
              custom-built moveable bandstand.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/citservoverview/photo.jpg"
              alt="Cities Service World's Fair Band of America — Paul Lavalle and moveable bandstand"
              width={1599}
              height={990}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/citservoverview"
        overviewHref="/citservoverview"
        nextHref="/citserv01"
      />
    </>
  );
}
