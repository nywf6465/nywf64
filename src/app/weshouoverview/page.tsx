import type { Metadata } from "next";
import Image from "next/image";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./weshouoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Westinghouse — Overview — nywf64.com",
  description:
    "Westinghouse Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (weshou menu) → overview body → nav2 → footer
 */
export default function WeshouOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Westinghouse">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/weshouoverview/hero-banner.jpg"
            alt="Westinghouse at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WeshouNavChrome />

      <section className={styles.overview} aria-label="Westinghouse overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The heart of the exhibit is a torpedo-shaped Time Capsule,
              suspended over a reflecting pool.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/weshouoverview/photo.jpg"
              alt="Westinghouse Time Capsule pavilion at the Fair"
              width={1506}
              height={1045}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/weshouoverview"
        overviewHref="/weshouoverview"
        nextHref="/weshou01"
      />
    </>
  );
}
