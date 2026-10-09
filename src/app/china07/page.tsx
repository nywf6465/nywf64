import type { Metadata } from "next";
import Image from "next/image";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./china07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: Welcome to the China Pavilion (1964) — China — nywf64.com",
  description:
    "1964 Welcome to the China Pavilion brochure pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

const spreads = [
  {
    src: "/images/china07/china31-32.jpg",
    alt: "Welcome to the China Pavilion 1964 brochure cover and introduction",
    width: 900,
    height: 866,
  },
  {
    src: "/images/china07/china30.jpg",
    alt: "Welcome to the China Pavilion 1964 brochure interior pages on Chinese culture and exhibits",
    width: 900,
    height: 1214,
  },
  {
    src: "/images/china07/china33.jpg",
    alt: "Welcome to the China Pavilion 1964 brochure phoenix screen",
    width: 900,
    height: 431,
  },
] as const;

/**
 * China brochure gallery — Welcome to the China Pavilion (1964).
 * Body from legacy china07.html (page scans, not a PDF BrochurePage).
 * Legacy sliced tiles are stitched into single composites (unisph12 pattern)
 * so the brochure never reflows into a broken stack.
 * Stack: hero → ChinaNavChrome → navy title → image gallery → Nav2Bar.
 */
export default function China07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="China">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chinaoverview/hero-banner.jpg"
            alt="China at the 1964/1965 New York World’s Fair"
            width={1906}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChinaNavChrome />

      <article className={styles.article} aria-labelledby="china07-title">
        <header className={styles.titleBar}>
          <h1 id="china07-title" className={styles.titleBarMain}>
            Brochure: Welcome to the China Pavilion (1964)
          </h1>
        </header>

        <div className={styles.articleInner}>
          {spreads.map((spread, index) => (
            <div key={spread.src} className={styles.panel}>
              <Image
                src={spread.src}
                alt={spread.alt}
                width={spread.width}
                height={spread.height}
                className={styles.pageImg}
                unoptimized
              />
              {index === spreads.length - 1 ? (
                <p className={styles.source}>SOURCE: 1964 Pavilion Guide</p>
              ) : null}
            </div>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/china06"
        explicitPrevious
        overviewHref="/chinaoverview"
        nextHref="/china08"
      />
    </>
  );
}
