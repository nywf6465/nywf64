import type { Metadata } from "next";
import Image from "next/image";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unistaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "United States — Overview — nywf64.com",
  description:
    "United States Pavilion overview at the 1964/1965 New York World’s Fair — Challenge to Greatness on nywf64.com.",
};

/**
 * United States overview (`/unistaoverview`) — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (unista menu) → overview body → nav2 → footer
 */
export default function UnistaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="United States Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/unistaoverview/hero-banner.jpg"
            alt="United States Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnistaNavChrome />

      <section className={styles.overview} aria-label="United States overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The nation&apos;s past and its progress toward President
              Johnson&apos;s &quot;Great Society&quot; are outlined in many
              dramatic exhibits and a spectacular 15-minute film-ride.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/unistaoverview/photo.jpg"
              alt="United States Pavilion — Challenge to Greatness"
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
        previousHref="/unistaoverview"
        overviewHref="/unistaoverview"
        nextHref="/unista01"
      />
    </>
  );
}
