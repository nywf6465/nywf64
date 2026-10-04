import type { Metadata } from "next";
import Image from "next/image";
import { UnNavChrome } from "@/components/UnNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "United Nations — Overview — nywf64.com",
  description:
    "United Nations Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Nations overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (un menu) → overview body → nav2 → footer
 */
export default function UnOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="United Nations">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/unoverview/hero-banner.jpg"
            alt="United Nations at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnNavChrome />

      <section className={styles.overview} aria-label="United Nations overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The United Nations exhibit features materials from the UN
              Secretariat and a display of stamps from the UN Postal
              Administration is shown.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/unoverview/photo.jpg"
              alt="United Nations Pavilion — blue conical tent structure"
              width={1574}
              height={999}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/unoverview"
        overviewHref="/unoverview"
        nextHref="/un01"
      />
    </>
  );
}
