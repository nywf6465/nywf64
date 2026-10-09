import type { Metadata } from "next";
import Image from "next/image";
import { NewyorcitNavChrome } from "@/components/NewyorcitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./newyorcitoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "New York City — Overview — nywf64.com",
  description:
    "New York City overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * New York City overview — follows the **overview** prototype
 * (same stack as /newmexoverview / /newengoverview).
 * Wired with the shared **newyorcit menu**.
 * Route slug: `/newyorcitoverview`.
 */
export default function NewyorcitOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="New York City">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/newyorcitoverview/hero-banner.jpg"
            alt="New York City at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NewyorcitNavChrome />

      <section className={styles.overview} aria-label="New York City overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fair&apos;s host city presents a simulated helicopter ride over
              a huge scale model of the Greater New York area.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/newyorcitoverview/photo.jpg"
              alt="New York City pavilion"
              width={1584}
              height={1040}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/newyorcitoverview"
        overviewHref="/newyorcitoverview"
        nextHref="/newyorcit01"
      />
    </>
  );
}
