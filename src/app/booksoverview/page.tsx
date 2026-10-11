import type { Metadata } from "next";
import Image from "next/image";
import { BooksNavChrome } from "@/components/BooksNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./booksoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Our Books on the Fair — Overview — nywf64.com",
  description:
    "nywf64.com presents Arcadia Publishing’s Images of America book series on the 1964/1965 New York World’s Fair by Bill Cotter and Bill Young.",
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
 * Our Books on the Fair overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /fair_airoverview).
 * Shared bookshero is reused on later books pages.
 */
export default function BooksOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Our Books on the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/books/bookshero.jpg"
            alt="Our Books on the Fair — Images of America series on the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BooksNavChrome />

      <section
        className={styles.overview}
        aria-label="Our Books on the Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <BrandMark /> presents Arcadia Publishing&apos;s &quot;Images of
              America&quot; book series on the New York World&apos;s Fair.
              Authored by Bill Cotter and Bill Young, these books present a
              visual retrospective of the Fair
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/booksoverview/photo.jpg"
              alt="Images of America book series on the 1964/1965 New York World’s Fair by Bill Cotter and Bill Young"
              width={1806}
              height={871}
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
        overviewHref="/booksoverview"
        nextHref="/books01"
      />
    </>
  );
}
