import type { Metadata } from "next";
import Image from "next/image";
import { PhilipNavChrome } from "@/components/PhilipNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./philipoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Philippines — Overview — nywf64.com",
  description:
    "Philippines pavilion overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Philippines overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /pennsyoverview).
 */
export default function PhilipOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Philippines">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/philipoverview/hero-banner.jpg"
            alt="Philippines at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PhilipNavChrome />

      <section className={styles.overview} aria-label="Philippines overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Folk dance, music and wood carvings illustrate the history and
              culture of this island republic
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/philipoverview/photo.jpg"
              alt="Republic of the Philippines pavilion at the 1964/1965 New York World’s Fair"
              width={1604}
              height={981}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/philipoverview"
        overviewHref="/philipoverview"
        nextHref="/philip01"
      />
    </>
  );
}
