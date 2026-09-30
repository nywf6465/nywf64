import type { Metadata } from "next";
import Image from "next/image";
import { MorchuNavChrome } from "@/components/MorchuNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./morchuoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Mormon Church — Overview — nywf64.com",
  description:
    "Mormon Church overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * Mormon Church overview — follows the **overview** prototype
 * (same stack as /litwaycrooverview / /chrscioverview).
 */
export default function MorchuOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Mormon Church">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/morchuoverview/hero-banner.jpg"
            alt="Mormon Church at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MorchuNavChrome />

      <section className={styles.overview} aria-label="Mormon Church overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A film, dioramas and art works depict the Church&apos;s efforts to
              help man achieve happiness through harmony with God&apos;s law.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/morchuoverview/photo.jpg"
              alt="Mormon Church pavilion"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/morchuoverview"
        overviewHref="/morchuoverview"
        nextHref="/morchu01"
      />
    </>
  );
}
