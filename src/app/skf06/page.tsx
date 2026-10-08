import type { Metadata } from "next";
import Image from "next/image";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/skfEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Artist's Concept of the Pavilion — SKF — nywf64.com",
  description:
    "Artist's concept of the SKF pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF — Artist's Concept of the Pavilion.
 * Body from legacy skf06.html.
 */
export default function Skf06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="SKF">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/skfoverview/hero-banner.jpg"
            alt="SKF pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SkfNavChrome />

      <article className={styles.article} aria-labelledby="skf06-title">
        <header className={styles.titleBar}>
          <h1 id="skf06-title" className={styles.titleBarMain}>
            Artist&apos;s Concept of the Pavilion
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 450 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf06/skf01.jpg"
                alt="Artist's Concept of the Pavilion"
                width={450}
                height={583}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The full color reproduction on the front cover of the SKF World's Fair Newsletter is taken directly from an architects rendering of the proposed building and is in fact a fairly accurate visualization of the structure as it will appear upon completion</p>
            <p className={styles.source}>Source: SKF World's Fair Newsletter</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/skf05"
        explicitPrevious
        overviewHref="/skfoverview"
        nextHref="/skf07"
      />
    </>
  );
}
