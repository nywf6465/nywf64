import type { Metadata } from "next";
import Image from "next/image";
import { AfricaNavChrome } from "@/components/AfricaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./africaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Africa — Overview — nywf64.com",
  description:
    "Africa pavilion overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Africa overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /morchuoverview / /proortoverview).
 */
export default function AfricaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Africa">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/africaoverview/hero-banner.jpg"
            alt="Africa at the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AfricaNavChrome />

      <section className={styles.overview} aria-label="Africa overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A hut-village on stilts, representing 26 African nations, offers
              wild animals, tribal dancers and a tree-house restaurant.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/africaoverview/photo.jpg"
              alt="Africa pavilion"
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
        previousHref="/africaoverview"
        overviewHref="/africaoverview"
        nextHref="/africa01"
      />
    </>
  );
}
