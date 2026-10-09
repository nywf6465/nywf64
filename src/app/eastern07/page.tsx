import type { Metadata } from "next";
import Image from "next/image";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/stitchedScanGallery.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Booklet: Come Have Fun at the Fair — Eastern Air Lines — nywf64.com",
  description:
    "Eastern Air Lines Come Have Fun at the Fair booklet — 1964/1965 New York World’s Fair on nywf64.com.",
};

const SCANS = [
  {
    src: "/images/eastern07/eastern22.jpg",
    width: 900,
    height: 900,
    alt: "Come Have Fun at the Fair booklet — page",
  },
  {
    src: "/images/eastern07/eastern23.jpg",
    width: 902,
    height: 900,
    alt: "Come Have Fun at the Fair booklet — page",
  },
  {
    src: "/images/eastern07/eastern24.jpg",
    width: 900,
    height: 900,
    alt: "Come Have Fun at the Fair booklet — page",
  },
  {
    src: "/images/eastern07/eastern53.jpg",
    width: 901,
    height: 901,
    alt: "Come Have Fun at the Fair booklet — page",
  },
] as const;

/**
 * Eastern Air Lines booklet page — Come Have Fun at the Fair.
 * Body from legacy eastern07.html. Sliced 3×3 tiles are stitched into full scans.
 * The legacy “Click the Hand” subpage (eastern07.1) is omitted.
 */
export default function Eastern07Page() {
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

      <article className={styles.article} aria-labelledby="eastern07-title">
        <header className={styles.titleBar}>
          <h1 id="eastern07-title" className={styles.titleBarMain}>
            Booklet: Come Have Fun at the Fair
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
              </figure>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/eastern06"
        explicitPrevious
        overviewHref="/easternoverview"
        nextHref="/easternoverview"
      />
    </>
  );
}
