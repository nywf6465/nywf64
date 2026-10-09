import type { Metadata } from "next";
import Image from "next/image";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./cokeoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Coca-Cola — Overview — nywf64.com",
  description:
    "Coca-Cola overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola overview — follows the **overview** prototype
 * (same stack as /clairoverview / /citservoverview).
 */
export default function CokeOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Coca-Cola">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/cokeoverview/hero-banner.jpg"
            alt="Coca-Cola at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CokeNavChrome />

      <section className={styles.overview} aria-label="Coca-Cola overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors stroll through re-creations of an Oriental street, an
              Alpine peak, a tropical forest -- complete with sights and
              sounds.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/cokeoverview/photo.jpg"
              alt="Coca-Cola — pavilion with carillon tower and Global Holiday entrance"
              width={1581}
              height={1001}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/cokeoverview"
        overviewHref="/cokeoverview"
        nextHref="/coke01"
      />
    </>
  );
}
