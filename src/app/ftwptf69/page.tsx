import type { Metadata } from "next";
import Image from "next/image";
import { FtwptfNavChrome } from "@/components/FtwptfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ftwptf69.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Great Moments at the Fair — For Those Who Produced the Fair — nywf64.com",
  description:
    "Great Moments at the Fair from For Those Who Produced the New York World’s Fair 1964-1965 — nywf64.com.",
};

/**
 * For Those Who Produced the Fair — Great Moments at the Fair.
 * Body from legacy ftwptfgreatmoments.html (12-tile photo stitched into one image).
 * Nav bar shows Page 69 (route number).
 *
 * Stack: ftwptfhero → FtwptfNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Ftwptf69Page() {
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

      <article className={styles.article} aria-labelledby="ftwptf69-title">
        <header className={styles.titleBar}>
          <h1 id="ftwptf69-title" className={styles.titleBarMain}>
            Great Moments at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/ftwptf69/greatmoments.jpg"
              alt="Great Moments at the Fair — For Those Who Produced the New York World’s Fair 1964-1965"
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
        previousHref="/ftwptf68"
        explicitPrevious
        overviewHref="/ftwptfoverview"
        nextHref="/ftwptf70"
      />
    </>
  );
}
