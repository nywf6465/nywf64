import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./betlivoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Better Living Center — Overview — nywf64.com",
  description:
    "Better Living Center overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center overview — follows the **overview** prototype
 * (same stack as /berlinoverview / /belviloverview).
 */
export default function BetlivOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <section
        className={styles.overview}
        aria-label="Better Living Center overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Foods, fashions, furnishings, three restaurants and a play-school
              are among the varied offerings of some 175 exhibitors.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/betlivoverview/photo.jpg"
              alt="Better Living Center pavilion"
              width={769}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/betlivoverview"
        overviewHref="/betlivoverview"
        nextHref="/betliv01"
      />
    </>
  );
}
