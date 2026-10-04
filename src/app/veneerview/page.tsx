import type { Metadata } from "next";
import Image from "next/image";
import { VenezeNavChrome } from "@/components/VenezeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./veneerview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Venezuela — Overview — nywf64.com",
  description:
    "Venezuela Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Venezuela overview (`/veneerview`) — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (veneze menu) → overview body → nav2 → footer
 */
export default function VeneerviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Venezuela">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/veneerview/hero-banner.jpg"
            alt="Venezuela at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VenezeNavChrome />

      <section className={styles.overview} aria-label="Venezuela overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Among the pavilion&apos;s features are guitar and dance recitles,
              memorabilia of Simon Bolivar and early and modern Venezuelan art.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/veneerview/photo.jpg"
              alt="Venezuela Pavilion with wood-slat facade and national flag"
              width={1537}
              height={1023}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/veneerview"
        overviewHref="/veneerview"
        nextHref="/veneze01"
      />
    </>
  );
}
