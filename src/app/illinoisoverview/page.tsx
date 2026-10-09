import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisNavChrome } from "@/components/IllinoisNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./illinoisoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Illinois — Overview — nywf64.com",
  description:
    "Illinois Pavilion overview at the 1964/1965 New York World’s Fair — Great Moments with Mr. Lincoln on nywf64.com.",
};

/**
 * Illinois overview page stack:
 * site header → hero banner → nav bar (illinois menu) → overview section → nav2 bar → site footer
 */
export default function IllinoisOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Illinois Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/illinoisoverview/hero-banner.jpg"
            alt="Illinois Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IllinoisNavChrome />

      <section className={styles.overview} aria-label="Illinois overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The highlight of a collection of Lincolniana and state lore is Walt
              Disney&apos;s moving, talking figure of Abe Lincoln himself.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/illinoisoverview/lincoln-photo.jpg"
              alt="Walt Disney’s moving, talking figure of Abraham Lincoln at the Illinois Pavilion"
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
        previousHref="/illinoisoverview"
        overviewHref="/illinoisoverview"
        nextHref="/illinois01"
      />
    </>
  );
}
