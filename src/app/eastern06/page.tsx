import type { Metadata } from "next";
import Image from "next/image";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/stitchedScanGallery.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Happy Holidays — Eastern Air Lines — nywf64.com",
  description:
    "Eastern Air Lines Happy Holidays pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

const SCANS = [
  {
    src: "/images/eastern06/eastern18.jpg",
    width: 300,
    height: 700,
    alt: "Happy Holidays pamphlet — cover",
  },
  {
    src: "/images/eastern06/eastern19.jpg",
    width: 900,
    height: 700,
    alt: "Happy Holidays pamphlet — inside spread",
  },
  {
    src: "/images/eastern06/eastern20.jpg",
    width: 300,
    height: 700,
    alt: "Happy Holidays pamphlet — inside page",
  },
  {
    src: "/images/eastern06/eastern21.jpg",
    width: 300,
    height: 701,
    alt: "Happy Holidays pamphlet — back cover",
    source: (
      <>
        SOURCE: Pamphlet: <em>Happy Holidays</em>
      </>
    ),
  },
] as const;

/**
 * Eastern Air Lines pamphlet page — Happy Holidays.
 * Body from legacy eastern06.html. Sliced tiles are stitched into full scans.
 * No PDF on the legacy page, so this is a scan gallery (not BrochurePage).
 */
export default function Eastern06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastern Air Lines">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easternoverview/hero-banner.jpg"
            alt="Eastern Air Lines at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EasternNavChrome />

      <article className={styles.article} aria-labelledby="eastern06-title">
        <header className={styles.titleBar}>
          <h1 id="eastern06-title" className={styles.titleBarMain}>
            Pamphlet: Happy Holidays
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.gallery}>
            {SCANS.map((scan) => (
              <figure key={scan.src} className={styles.figure}>
                <span className={styles.frame}>
                  <Image
                    src={scan.src}
                    alt={scan.alt}
                    width={scan.width}
                    height={scan.height}
                    className={styles.img}
                    unoptimized
                  />
                </span>
                {"source" in scan && scan.source ? (
                  <figcaption className={styles.source}>{scan.source}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/eastern05"
        explicitPrevious
        overviewHref="/easternoverview"
        nextHref="/eastern07"
      />
    </>
  );
}
