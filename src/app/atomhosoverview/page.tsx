import type { Metadata } from "next";
import Image from "next/image";
import { AtomhosNavChrome } from "@/components/AtomhosNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./atomhosoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Atomedic Hospital — Overview — nywf64.com",
  description:
    "Atomedic Hospital overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Atomedic Hospital overview — follows the **overview** prototype
 * (same stack as /arlhatoverview / /archameroverview).
 */
export default function AtomhosOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Atomedic Hospital">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/atomhosoverview/hero-banner.jpg"
            alt="Atomedic Hospital at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AtomhosNavChrome />

      <section
        className={styles.overview}
        aria-label="Atomedic Hospital overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Atomedic Hospital is the functioning emergency hospital of the
              Fair. It is staffed by 20 professional nurses.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/atomhosoverview/photo.jpg"
              alt="Atomedic Hospital"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/atomhosoverview"
        overviewHref="/atomhosoverview"
        nextHref="/atomhos01"
      />
    </>
  );
}
