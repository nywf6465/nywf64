import type { Metadata } from "next";
import Image from "next/image";
import { FtwptfNavChrome } from "@/components/FtwptfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ftwptf01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Introduction — For Those Who Produced the Fair — nywf64.com",
  description:
    "Introduction from For Those Who Produced the New York World’s Fair 1964-1965 — the leather-bound remembrance book on nywf64.com.",
};

/**
 * For Those Who Produced the Fair — Introduction.
 * Body from legacy ftwptfcover.html: top overview text + cover collage removed;
 * bottom introduction image replaced with the supplied letter page.
 *
 * Stack: ftwptfhero → FtwptfNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Ftwptf01Page() {
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

      <article className={styles.article} aria-labelledby="ftwptf01-title">
        <header className={styles.titleBar}>
          <h1 id="ftwptf01-title" className={styles.titleBarMain}>
            Introduction
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/ftwptf01/introduction.jpg"
              alt="Introduction letter from the President — For Those Who Produced the New York World’s Fair 1964-1965"
              width={1040}
              height={1512}
              className={styles.image}
              sizes="(max-width: 720px) 100vw, 42rem"
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ftwptfoverview"
        explicitPrevious
        overviewHref="/ftwptfoverview"
        nextHref="/ftwptfunisphere"
      />
    </>
  );
}
