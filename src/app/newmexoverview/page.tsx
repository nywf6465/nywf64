import type { Metadata } from "next";
import Image from "next/image";
import { NewmexNavChrome } from "@/components/NewmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./newmexoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "New Mexico — Overview — nywf64.com",
  description:
    "New Mexico overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * New Mexico overview — follows the **overview** prototype
 * (same stack as /newjeroverview / /newengoverview).
 * Wired with the shared **newmex menu**.
 * Route slug: `/newmexoverview`.
 */
export default function NewmexOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="New Mexico">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/newmexoverview/hero-banner.jpg"
            alt="New Mexico at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NewmexNavChrome />

      <section className={styles.overview} aria-label="New Mexico overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A pueblo of five buildings recreates the adobe construction, the
              spicy foods and the Indian handicrafts of the state.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/newmexoverview/photo.jpg"
              alt="New Mexico pavilion"
              width={1584}
              height={1179}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/newmexoverview"
        overviewHref="/newmexoverview"
        nextHref="/newmex01"
      />
    </>
  );
}
