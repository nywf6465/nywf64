import type { Metadata } from "next";
import Image from "next/image";
import { BountyNavChrome } from "@/components/BountyNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bountyoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Bounty — Overview — nywf64.com",
  description:
    "Bounty overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bounty overview — follows the **overview** prototype
 * (same stack as /betlivoverview / /berlinoverview).
 */
export default function BountyOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Bounty">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/bountyoverview/hero-banner.jpg"
            alt="Bounty at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BountyNavChrome />

      <section className={styles.overview} aria-label="Bounty overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The famous British armed merchant-man as re-created in meticulous
              detail for the 1962 movie, &quot;Mutiny on the Bounty,&quot; is
              displayed at the Marina in Flushing Bay.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/bountyoverview/photo.jpg"
              alt='Bounty — re-creation for the 1962 movie "Mutiny on the Bounty"'
              width={958}
              height={674}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/bountyoverview"
        overviewHref="/bountyoverview"
        nextHref="/bounty01"
      />
    </>
  );
}
