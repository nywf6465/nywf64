import type { Metadata } from "next";
import Image from "next/image";
import { ParpenNavChrome } from "@/components/ParpenNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./parpenoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Parker Pen — Overview — nywf64.com",
  description:
    "Parker Pen pavilion overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Parker Pen overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /pakistoverview).
 */
export default function ParpenOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Parker Pen">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/parpenoverview/hero-banner.jpg"
            alt="Parker Pen at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ParpenNavChrome />

      <section className={styles.overview} aria-label="Parker Pen overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors to the pavilion are put in touch with &apos;pen
              friends&apos; of similar age and interests in many parts of the
              world.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/parpenoverview/photo.jpg"
              alt="Parker Pen pavilion at the 1964/1965 New York World’s Fair"
              width={1522}
              height={1033}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/parpenoverview"
        overviewHref="/parpenoverview"
        nextHref="/parpen01"
      />
    </>
  );
}
