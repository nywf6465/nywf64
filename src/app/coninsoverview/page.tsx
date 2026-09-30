import type { Metadata } from "next";
import Image from "next/image";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./coninsoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Continental Insurance — Overview — nywf64.com",
  description:
    "Continental Insurance overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance overview — follows the **overview** prototype
 * (same stack as /conciroverview / /cokeoverview).
 */
export default function ConinsOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Continental Insurance">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/coninsoverview/hero-banner.jpg"
            alt="Continental Insurance at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ConinsNavChrome />

      <section
        className={styles.overview}
        aria-label="Continental Insurance overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The American Revolution comes alive in a short musical cartoon,
              in dioramas and paintings, and in displays of arms and artifacts.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/coninsoverview/photo.jpg"
              alt="Continental Insurance — American Revolution exhibits"
              width={1198}
              height={1321}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/coninsoverview"
        overviewHref="/coninsoverview"
        nextHref="/conins01"
      />
    </>
  );
}
