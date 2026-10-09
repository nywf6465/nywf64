import type { Metadata } from "next";
import Image from "next/image";
import { AmindNavChrome } from "@/components/AmindNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amindoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "American Indian Exposition — Overview — nywf64.com",
  description:
    "American Indian Exposition overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * American Indian Exposition overview — follows the **overview** prototype
 * (same stack as /amexoverview / /allstaoverview / /alaskaoverview).
 */
export default function AmindOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="American Indian Exposition"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/amindoverview/hero-banner.jpg"
            alt="American Indian Exposition at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmindNavChrome />

      <section
        className={styles.overview}
        aria-label="American Indian Exposition overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              This authentic American Indian Exposition depicts the historical
              significance of Indian life and its contribution to the heritage
              of America. It was never built.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/amindoverview/photo.jpg"
              alt="American Indian Exposition"
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
        previousHref="/amindoverview"
        overviewHref="/amindoverview"
        nextHref="/amind01"
      />
    </>
  );
}
