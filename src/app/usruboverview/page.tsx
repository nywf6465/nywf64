import type { Metadata } from "next";
import Image from "next/image";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./usruboverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "U.S. Rubber — Overview — nywf64.com",
  description:
    "U.S. Rubber overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * U.S. Rubber overview — follows the **overview** prototype
 * (same stack as /africaoverview / /uspooverview).
 */
export default function UsrubOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="U.S. Rubber">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/usruboverview/hero-banner.jpg"
            alt="U.S. Rubber at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UsrubNavChrome />

      <section className={styles.overview} aria-label="U.S. Rubber overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors soar 80 feet in the air around a giant auto tire for a
              spectacular view of the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/usruboverview/photo.jpg"
              alt="U.S. Rubber giant tire at the 1964/1965 New York World’s Fair"
              width={1584}
              height={993}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/usruboverview"
        overviewHref="/usruboverview"
        nextHref="/usrub01"
      />
    </>
  );
}
