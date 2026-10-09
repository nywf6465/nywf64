import type { Metadata } from "next";
import Image from "next/image";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hougt11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Pavilion Guide — House of Good Taste — nywf64.com",
  description:
    "The House of Good Taste pavilion guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

const GUIDE_PAGES: {
  src: string;
  width: number;
  height: number;
  alt: string;
}[] = [
  { src: "/images/hougt11/hougt49.jpg", width: 350, height: 169, alt: "Logo" },
  {
    src: "/images/hougt11/hougt50.jpg",
    width: 400,
    height: 205,
    alt: "Artist's Rendering",
  },
  { src: "/images/hougt11/hougt51.gif", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt52.jpg", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt53.gif", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt54.jpg", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt55.gif", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt56.jpg", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt57.gif", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt58.jpg", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt59.jpg", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt60.jpg", width: 400, height: 200, alt: "Guide spread" },
  { src: "/images/hougt11/hougt61.jpg", width: 122, height: 59, alt: "Logo" },
  {
    src: "/images/hougt11/hougt62.jpg",
    width: 400,
    height: 244,
    alt: "Artist's Rendering - Hidden Assets Bldg.",
  },
];

/**
 * Body from legacy hougt11.html — pavilion guide spreads (SOURCE: Pavilion Guide,
 * The House of Good Taste). Legacy table layout is represented as stacked figures.
 */
export default function Hougt11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="House of Good Taste">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hougtoverview/hero-banner.jpg"
            alt="House of Good Taste at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HougtNavChrome />

      <article className={styles.article} aria-labelledby="hougt11-title">
        <header className={styles.titleBar}>
          <h1 id="hougt11-title" className={styles.titleBarMain}>
            The Pavilion Guide
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.source}>
            SOURCE: Pavilion Guide, The House of Good Taste
          </p>

          <div className={styles.guideStack}>
            {GUIDE_PAGES.map((page) => (
              <figure key={page.src} className={styles.guideFigure}>
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={page.width}
                  height={page.height}
                  className={styles.guideArt}
                  unoptimized
                />
              </figure>
            ))}
          </div>

          <aside className={styles.webmasterNote} aria-label="Webmaster note">
            <p>
              <strong>webmaster&apos;s note...</strong> Were it not for Bradd
              Schiffman, <strong>nywf64.com</strong> would have half the features
              on-line that it currently has! Bradd&apos;s tireless efforts have
              produced many an excellent presentation on the exhibits of the
              Fair. His detailing of The House of Good Taste exhibit is
              wonderful. Thank You, Bradd, for a great job and for bringing an
              important yet little known exhibit into the limelight!
            </p>
            <p>Bill Young</p>
            <p>February 18, 2005</p>
          </aside>
        </div>
      </article>

      <Nav2Bar
        previousHref="/hougt10"
        overviewHref="/hougtoverview"
        nextHref="/hougtoverview"
      />
    </>
  );
}
