import type { Metadata } from "next";
import Image from "next/image";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./china08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: Welcome to the China Pavilion (1965) — China — nywf64.com",
  description:
    "1965 Welcome to the China Pavilion brochure pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

const set34 = [
  ["china34.01", "china34.02", "china34.03"],
  ["china34.04", "china34.05", "china34.06"],
  ["china34.07", "china34.08", "china34.09"],
] as const;

const set35 = [
  ["china35.01", "china35.02", "china35.03"],
  ["china35.04", "china35.05", "china35.06"],
  ["china35.07", "china35.08", "china35.09"],
] as const;

/**
 * China brochure gallery — Welcome to the China Pavilion (1965).
 * Body from legacy china08.html (page scans, not a PDF BrochurePage).
 * Stack: hero → ChinaNavChrome → navy title → image gallery → Nav2Bar.
 */
export default function China08Page() {
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

      <article className={styles.article} aria-labelledby="china08-title">
        <header className={styles.titleBar}>
          <h1 id="china08-title" className={styles.titleBarMain}>
            Brochure: Welcome to the China Pavilion (1965)
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.panel}>
            {set34.map((row) => (
              <div key={row[0]} className={styles.row}>
                {row.map((name) => (
                  <Image
                    key={name}
                    src={`/images/china08/${name}.jpg`}
                    alt=""
                    width={300}
                    height={400}
                    className={styles.pageImg}
                    unoptimized
                  />
                ))}
              </div>
            ))}
          </div>

          <div className={styles.panel}>
            {set35.map((row) => (
              <div key={row[0]} className={styles.row}>
                {row.map((name) => (
                  <Image
                    key={name}
                    src={`/images/china08/${name}.jpg`}
                    alt=""
                    width={300}
                    height={408}
                    className={styles.pageImg}
                    unoptimized
                  />
                ))}
              </div>
            ))}
            <p className={styles.source}>SOURCE: 1965 Pavilion Guide</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/china07"
        explicitPrevious
        overviewHref="/chinaoverview"
        nextHref="/china09"
      />
    </>
  );
}
