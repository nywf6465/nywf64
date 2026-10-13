import type { Metadata } from "next";
import Image from "next/image";
import { FtwptfNavChrome } from "@/components/FtwptfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ftwptf55.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Pavilions & Attractions — For Those Who Produced the Fair — nywf64.com",
  description:
    "Pavilions & Attractions (Pages 01–64) from For Those Who Produced the New York World’s Fair 1964-1965 — nywf64.com.",
};

/**
 * For Those Who Produced the Fair — Pavilions & Attractions (legacy ftwptf52.html).
 * Book section Pages 01–64. Nav bar shows Page 55 (route number).
 * No hand-icon bars (omitted per request).
 *
 * Stack: ftwptfhero → FtwptfNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Ftwptf55Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="For Those Who Produced the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/ftwptf/ftwptfhero.jpg"
            alt="For Those Who Produced the Fair — 1964/1965 New York World’s Fair"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FtwptfNavChrome />

      <article className={styles.article} aria-labelledby="ftwptf55-title">
        <header className={styles.titleBar}>
          <h1 id="ftwptf55-title" className={styles.titleBarMain}>
            Pavilions &amp; Attractions
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/ftwptf55/page52.jpg"
              alt="Pavilions & Attractions — Page 52 from For Those Who Produced the New York World’s Fair 1964-1965"
              width={900}
              height={1125}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ftwptf54"
        explicitPrevious
        overviewHref="/ftwptfoverview"
        nextHref="/ftwptf56"
      />
    </>
  );
}
