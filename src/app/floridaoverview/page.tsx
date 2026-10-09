import type { Metadata } from "next";
import Image from "next/image";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./floridaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Florida — Overview — nywf64.com",
  description:
    "Florida Pavilion overview at the 1964/1965 New York World’s Fair — The Porpoise Show on nywf64.com.",
};

/**
 * Florida overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (Florida menu) → overview body → nav2 → footer
 */
export default function FloridaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Florida Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/floridaoverview/hero-banner.jpg"
            alt="Florida Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FloridaNavChrome />

      <section className={styles.overview} aria-label="Florida overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A giant orange on a tower tops displays of sunshine living, space
              tests at Cape Kennedy and a free, live-porpoise show.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/floridaoverview/photo.jpg"
              alt="Florida Pavilion — giant orange tower and porpoise show"
              width={958}
              height={706}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/floridaoverview"
        overviewHref="/floridaoverview"
        nextHref="/florida01"
      />
    </>
  );
}
