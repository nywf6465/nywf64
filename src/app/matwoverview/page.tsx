import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matwoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The “Men at Work” Book — Overview — nywf64.com",
  description:
    "Men at Work — the 1964-1965 New York World’s Fair Official Art Book by Luciano Guarnieri, presented on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * The “Men at Work” Book overview — follows the **overview** prototype
 * (same stack as /booksoverview / /ftwptfoverview / /ibmoverview).
 * Shared matwhero is reused on later matw pages; display size matches
 * the ibm01 / ibmoverview letter-height hero.
 */
export default function MatwOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Men at Work Book"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/matw/matwhero.jpg"
            alt='The “Men at Work” Book — Official Art Book of the 1964/1965 New York World’s Fair'
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MatwNavChrome />

      <section
        className={styles.overview}
        aria-label="The Men at Work Book overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <span className={styles.bookTitle}>Men at Work</span> is the
              title of the 1964-1965 New York World&apos;s Fair{" "}
              <span className={styles.officialArtBook}>Official Art Book</span>
              . It is a collection of wonderful sketches showing the
              construction of the Fair by artist Luciano Guarnieri.{" "}
              <BrandMark /> is pleased to present for you online this beautiful
              collectible of the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/matwoverview/photo.jpg"
              alt="Men at Work — Luciano Guarnieri sketch of workers constructing the Fair"
              width={1427}
              height={1102}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matw01"
      />
    </>
  );
}
