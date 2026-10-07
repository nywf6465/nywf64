import type { Metadata } from "next";
import Image from "next/image";
import { JaycopNavChrome } from "@/components/JaycopNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./jaycop04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: Jaycopter — Jaycopter Ride — nywf64.com",
  description:
    "Jaycopter brochure page scans — 1964/1965 New York World’s Fair on nywf64.com.",
};

type Scan = { src: string; width: number; height: number };

const GROUPS: { prefix: string; pages: Scan[] }[] = [
  {
    prefix: "jaycop02",
    pages: [
      { src: "/images/jaycop04/jaycop02.01.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop02.02.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop02.03.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop02.04.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop02.05.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop02.06.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop02.07.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop02.08.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop02.09.jpg", width: 300, height: 393 },
    ],
  },
  {
    prefix: "jaycop03",
    pages: [
      { src: "/images/jaycop04/jaycop03.01.jpg", width: 301, height: 394 },
      { src: "/images/jaycop04/jaycop03.02.jpg", width: 301, height: 394 },
      { src: "/images/jaycop04/jaycop03.03.jpg", width: 300, height: 394 },
      { src: "/images/jaycop04/jaycop03.04.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop03.05.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop03.06.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop03.07.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop03.08.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop03.09.jpg", width: 300, height: 393 },
    ],
  },
  {
    prefix: "jaycop04",
    pages: [
      { src: "/images/jaycop04/jaycop04.01.jpg", width: 301, height: 394 },
      { src: "/images/jaycop04/jaycop04.02.jpg", width: 301, height: 394 },
      { src: "/images/jaycop04/jaycop04.03.jpg", width: 300, height: 394 },
      { src: "/images/jaycop04/jaycop04.04.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop04.05.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop04.06.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop04.07.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop04.08.jpg", width: 301, height: 393 },
      { src: "/images/jaycop04/jaycop04.09.jpg", width: 300, height: 393 },
    ],
  },
  {
    prefix: "jaycop05",
    pages: [
      { src: "/images/jaycop04/jaycop05.01.jpg", width: 300, height: 394 },
      { src: "/images/jaycop04/jaycop05.02.jpg", width: 300, height: 394 },
      { src: "/images/jaycop04/jaycop05.03.jpg", width: 300, height: 394 },
      { src: "/images/jaycop04/jaycop05.04.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop05.05.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop05.06.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop05.07.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop05.08.jpg", width: 300, height: 393 },
      { src: "/images/jaycop04/jaycop05.09.jpg", width: 300, height: 393 },
    ],
  },
];

/**
 * Jaycopter brochure — scanned page spreads from legacy jaycop04.html.
 * Three-across rows match the legacy brochure layout; no PDF download.
 */
export default function Jaycop04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Jaycopter Ride">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/jaycopoverview/hero-banner.jpg"
            alt="Jaycopter Ride at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JaycopNavChrome />

      <article className={styles.article} aria-labelledby="jaycop04-title">
        <header className={styles.titleBar}>
          <h1 id="jaycop04-title" className={styles.titleBarMain}>
            Brochure: Jaycopter
          </h1>
        </header>

        <div className={styles.articleInner}>
          {GROUPS.map((group) => (
            <div key={group.prefix} className={styles.group}>
              {[0, 3, 6].map((start) => (
                <div key={`${group.prefix}-${start}`} className={styles.row}>
                  {group.pages.slice(start, start + 3).map((page) => (
                    <figure key={page.src} className={styles.figure}>
                      <Image
                        src={page.src}
                        alt=""
                        width={page.width}
                        height={page.height}
                        className={styles.figureArt}
                        unoptimized
                      />
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}

          <p className={styles.source}>SOURCE: Brochure: Jaycopter</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/jaycop03"
        explicitPrevious
        overviewHref="/jaycopoverview"
        nextHref="/jaycopoverview"
      />
    </>
  );
}
