import type { Metadata } from "next";
import Image from "next/image";
import { CarnivNavChrome } from "@/components/CarnivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./carnivoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Carnival — Overview — nywf64.com",
  description:
    "Carnival overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carnival overview — follows the **overview** prototype
 * (same stack as /caribboverview / /brilionoverview).
 */
export default function CarnivOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Carnival">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/carnivoverview/hero-banner.jpg"
            alt="Carnival at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CarnivNavChrome />

      <section className={styles.overview} aria-label="Carnival overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Fairground rides for all ages are combined with an aquarium and
              with restaurants that offer entertainment.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/carnivoverview/photo.jpg"
              alt="Carnival — fairground rides and aquarium"
              width={958}
              height={741}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/carnivoverview"
        overviewHref="/carnivoverview"
        nextHref="/carniv01"
      />
    </>
  );
}
