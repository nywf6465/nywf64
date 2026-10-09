import type { Metadata } from "next";
import Image from "next/image";
import { OregonNavChrome } from "@/components/OregonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./oregonoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Oregon — Overview — nywf64.com",
  description:
    "Oregon pavilion overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Oregon overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /floridaoverview).
 */
export default function OregonOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Oregon">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/oregonoverview/hero-banner.jpg"
            alt="Oregon at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <OregonNavChrome />

      <section className={styles.overview} aria-label="Oregon overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A continuous carnival of the Northwest includes log-rolling, canoe
              tilting and a wrestling match between a man and a bear.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/oregonoverview/photo.jpg"
              alt="Logrolling at the Oregon pavilion at the 1964/1965 New York World’s Fair"
              width={1436}
              height={1096}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/oregonoverview"
        overviewHref="/oregonoverview"
        nextHref="/oregon01"
      />
    </>
  );
}
