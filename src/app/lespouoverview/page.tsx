import type { Metadata } from "next";
import Image from "next/image";
import { LespouNavChrome } from "@/components/LespouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./lespouoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Les Poupees de Paris — Overview — nywf64.com",
  description:
    "Les Poupees de Paris overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Les Poupees de Paris overview — follows the **overview** prototype
 * (same stack as /lebanooverview / /lakcruoverview).
 * Wired with the shared **lespou menu**.
 * Route slug: `/lespouoverview`.
 * Name spelling matches hero graphic (no accents): Les Poupees de Paris.
 */
export default function LespouOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Les Poupees de Paris">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/lespouoverview/hero-banner.jpg"
            alt="Les Poupees de Paris at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LespouNavChrome />

      <section
        className={styles.overview}
        aria-label="Les Poupees de Paris overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A cast of 200 puppets plays among spectacular settings in a
              40-minute musical revue.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/lespouoverview/photo.jpg"
              alt="Les Poupees de Paris — pavilion and marquee"
              width={1584}
              height={1070}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/lespouoverview"
        overviewHref="/lespouoverview"
        nextHref="/lespou01"
      />
    </>
  );
}
