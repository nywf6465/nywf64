import type { Metadata } from "next";
import Image from "next/image";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/stitchedScanGallery.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: World's Fair Handbook — Eastern Air Lines — nywf64.com",
  description:
    "Eastern Air Lines World's Fair Handbook pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

const SCANS = [
  {
    src: "/images/eastern05/eastern11.jpg",
    width: 350,
    height: 800,
    alt: "World's Fair Handbook by Eastern — cover",
  },
  {
    src: "/images/eastern05/eastern12.jpg",
    width: 701,
    height: 801,
    alt: "World's Fair Handbook by Eastern — inside spread",
  },
  {
    src: "/images/eastern05/eastern13.jpg",
    width: 700,
    height: 800,
    alt: "World's Fair Handbook by Eastern — inside spread",
  },
  {
    src: "/images/eastern05/eastern14.jpg",
    width: 701,
    height: 802,
    alt: "World's Fair Handbook by Eastern — inside spread",
  },
  {
    src: "/images/eastern05/eastern15.jpg",
    width: 700,
    height: 800,
    alt: "World's Fair Handbook by Eastern — inside spread",
  },
  {
    src: "/images/eastern05/eastern16.jpg",
    width: 700,
    height: 800,
    alt: "World's Fair Handbook by Eastern — inside spread",
  },
  {
    src: "/images/eastern05/eastern17.jpg",
    width: 350,
    height: 801,
    alt: "World's Fair Handbook by Eastern — back cover",
    source: (
      <>
        SOURCE: Pamphlet: <em>World&apos;s Fair Handbook by Eastern</em>
      </>
    ),
  },
] as const;

/**
 * Eastern Air Lines pamphlet page — World's Fair Handbook.
 * Body from legacy eastern05.html. Sliced tiles are stitched into full scans.
 * No PDF on the legacy page, so this is a scan gallery (not BrochurePage).
 */
export default function Eastern05Page() {
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

      <article className={styles.article} aria-labelledby="eastern05-title">
        <header className={styles.titleBar}>
          <h1 id="eastern05-title" className={styles.titleBarMain}>
            Pamphlet: World&apos;s Fair Handbook
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
        previousHref="/eastern04"
        explicitPrevious
        overviewHref="/easternoverview"
        nextHref="/eastern06"
      />
    </>
  );
}
