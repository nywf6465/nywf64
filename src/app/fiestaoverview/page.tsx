import type { Metadata } from "next";
import Image from "next/image";
import { FiestaNavChrome } from "@/components/FiestaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fiestaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fiesta — Overview — nywf64.com",
  description:
    "Fiesta overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fiesta overview — follows the **overview** prototype
 * (same stack as /fesgasoverview / /towersoverview).
 */
export default function FiestaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fiesta">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/fiestaoverview/hero-banner.jpg"
            alt="Fiesta at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FiestaNavChrome />

      <section className={styles.overview} aria-label="Fiesta overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Africa, Asia, Europe, as well as the Americas, are represented in
              a &quot;village&quot; of kiosks which display and sell a variety
              of folk art. Admission is charged; proceeds go to a center for
              world understanding.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fiestaoverview/photo.jpg"
              alt="Fiesta — village of kiosks displaying and selling folk art"
              width={1584}
              height={1301}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/fiestaoverview"
        overviewHref="/fiestaoverview"
        nextHref="/fiesta01"
      />
    </>
  );
}
