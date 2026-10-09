import type { Metadata } from "next";
import Image from "next/image";
import { ThaiNavChrome } from "@/components/ThaiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./thai05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Thailand Travel Talk — Thailand — nywf64.com",
  description:
    "Thailand Travel Talk brochure scans from the Thailand pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAGES = [
  { src: "05.01.jpg", width: 301, height: 390 },
  { src: "05.02.jpg", width: 301, height: 390 },
  { src: "05.03.jpg", width: 300, height: 390 },
  { src: "05.04.jpg", width: 301, height: 389 },
  { src: "05.05.jpg", width: 301, height: 389 },
  { src: "05.06.jpg", width: 300, height: 389 },
  { src: "05.07.jpg", width: 301, height: 389 },
  { src: "05.08.jpg", width: 301, height: 389 },
  { src: "05.09.jpg", width: 300, height: 389 },
] as const;

/**
 * Thailand Travel Talk — custom 3×3 brochure scan grid from legacy thai05.html.
 * Stack: hero → ThaiNavChrome → navy title bar → grid → Nav2Bar.
 */
export default function Thai05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Thailand">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/thaioverview/hero-banner.jpg"
            alt="Thailand pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ThaiNavChrome />

      <article className={styles.article} aria-labelledby="thai05-title">
        <div className={styles.titleBar} id="thai05-title">
          Thailand Travel Talk
        </div>
        <div className={styles.body}>
          <div className={styles.grid} role="list">
            {PAGES.map((page, index) => (
              <div key={page.src} className={styles.cell} role="listitem">
                <Image
                  src={`/images/thai05/${page.src}`}
                  alt={`Thailand Travel Talk page ${index + 1}`}
                  width={page.width}
                  height={page.height}
                  className={styles.cellImg}
                  sizes="(max-width: 720px) 100vw, 300px"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/thai04"
        explicitPrevious
        overviewHref="/thaioverview"
        nextHref="/thaioverview"
      />
    </>
  );
}
