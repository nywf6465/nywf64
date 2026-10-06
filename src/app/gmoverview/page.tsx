import type { Metadata } from "next";
import Image from "next/image";
import { GmNavChrome } from "@/components/GmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gmoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "General Motors — Overview — nywf64.com",
  description:
    "General Motors Pavilion overview at the 1964/1965 New York World’s Fair — The Futurama on nywf64.com.",
};

/**
 * General Motors overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (gm menu) → overview body → nav2 → footer
 */
export default function GmOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="General Motors Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/gmoverview/hero-banner.jpg"
            alt="General Motors Pavilion at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GmNavChrome />

      <section className={styles.overview} aria-label="General Motors overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              In the Futurama, Fairgoers are taken on visits to the moon, to a
              year-round commercial harbor in the Antarctic, to an underwater
              resort and to a city of tomorrow.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/gmoverview/photo.jpg"
              alt="The Futurama at the General Motors Pavilion — city of tomorrow"
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
        previousHref="/gm23"
        explicitPrevious
        overviewHref="/gmoverview"
        nextHref="/gm01"
      />
    </>
  );
}
