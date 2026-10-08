import type { Metadata } from "next";
import Image from "next/image";
import { UspoNavChrome } from "@/components/UspoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./uspo04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Postal Bulletin - World's Fair Commemorative Stamp — U.S. Post Office — nywf64.com",
  description:
    "Postal Bulletin — World's Fair Commemorative Stamp scans — U.S. Post Office at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SCANS = [
  { src: "/images/uspo04/uspo08.01.jpg", width: 300, height: 296 },
  { src: "/images/uspo04/uspo08.02.jpg", width: 301, height: 296 },
  { src: "/images/uspo04/uspo08.03.jpg", width: 300, height: 296 },
  { src: "/images/uspo04/uspo08.04.jpg", width: 300, height: 296 },
  { src: "/images/uspo04/uspo08.05.jpg", width: 301, height: 296 },
  { src: "/images/uspo04/uspo08.06.jpg", width: 300, height: 296 },
  { src: "/images/uspo04/uspo08.07.jpg", width: 300, height: 296 },
  { src: "/images/uspo04/uspo08.08.jpg", width: 301, height: 296 },
  { src: "/images/uspo04/uspo08.09.jpg", width: 300, height: 296 },
  { src: "/images/uspo04/uspo08.10.jpg", width: 300, height: 296 },
  { src: "/images/uspo04/uspo08.11.jpg", width: 301, height: 296 },
  { src: "/images/uspo04/uspo08.12.jpg", width: 300, height: 296 },
] as const;

/**
 * U.S. Post Office — Postal Bulletin commemorative stamp scan grid.
 * Body from legacy uspo04.html (3×4 scan grid).
 */
export default function Uspo04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="U.S. Post Office">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/uspooverview/hero-banner.jpg"
            alt="U.S. Post Office at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UspoNavChrome />

      <article className={styles.article} aria-labelledby="uspo04-title">
        <header className={styles.titleBar}>
          <h1 id="uspo04-title" className={styles.titleBarMain}>
            Postal Bulletin - World&apos;s Fair Commemorative Stamp
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.grid}>
            {SCANS.map((scan, index) => (
              <figure key={scan.src} className={styles.cell}>
                <Image
                  src={scan.src}
                  alt={`Postal Bulletin commemorative stamp scan ${index + 1}`}
                  width={scan.width}
                  height={scan.height}
                  className={styles.scan}
                  unoptimized
                />
              </figure>
            ))}
          </div>
          <p className={styles.source}>
            SOURCE: U.S. Post Office Bulletin - Commemorative Stamp for the
            1964-1964 New York World&apos;s Fair
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/uspo03"
        explicitPrevious
        overviewHref="/uspooverview"
        nextHref="/uspooverview"
      />
    </>
  );
}
