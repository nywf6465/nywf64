import type { Metadata } from "next";
import Image from "next/image";
import { KoreaNavChrome } from "@/components/KoreaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./koreaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Korea, Republic of — Overview — nywf64.com",
  description:
    "Korea, Republic of overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Korea, Republic of overview — follows the **overview** prototype
 * (same stack as /kidlanoverview / /jordanoverview).
 * Wired with the shared **Korea menu**.
 * Route slug: `/koreaoverview`.
 */
export default function KoreaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Korea, Republic of">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/koreaoverview/hero-banner.jpg"
            alt="Korea, Republic of pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <KoreaNavChrome />

      <section
        className={styles.overview}
        aria-label="Korea, Republic of overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A traditional teahouse and a modern pavilion are settings for
              exhibits that link the Korea of yesterday and today.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/koreaoverview/photo.jpg"
              alt="Korea, Republic of — traditional teahouse and modern pavilion"
              width={1584}
              height={894}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/korea04"
        explicitPrevious
        overviewHref="/koreaoverview"
        nextHref="/korea01"
      />
    </>
  );
}
