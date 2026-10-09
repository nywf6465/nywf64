import type { Metadata } from "next";
import Image from "next/image";
import { PavparNavChrome } from "@/components/PavparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./pavparoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion of Paris — Overview — nywf64.com",
  description:
    "Pavilion of Paris overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Pavilion of Paris overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /pavamioverview).
 */
export default function PavparOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Pavilion of Paris">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/pavparoverview/hero-banner.jpg"
            alt="Pavilion of Paris at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PavparNavChrome />

      <section className={styles.overview} aria-label="Pavilion of Paris overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A sidewalk cafe, a well-stocked wine cellar and charming shops
              help recreate the lighthearted atmosphere of Paris.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/pavparoverview/photo.jpg"
              alt="Pavilion of Paris at the 1964/1965 New York World’s Fair"
              width={1518}
              height={1036}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/pavparoverview"
        overviewHref="/pavparoverview"
        nextHref="/pavpar01"
      />
    </>
  );
}
