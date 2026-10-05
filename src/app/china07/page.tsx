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

const trioA = ["china31.01", "china31.02", "china31.03"] as const;
const trioB = ["china32.01", "china32.02", "china32.03"] as const;
const wide = ["china30.01", "china30.02", "china30.03"] as const;
const trioC = ["china33.01", "china33.02", "china33.03"] as const;

/**
 * China brochure gallery — Welcome to the China Pavilion (1964).
 * Body from legacy china07.html (page scans, not a PDF BrochurePage).
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
          <div className={styles.panel}>
            <div className={styles.row}>
              {trioA.map((name) => (
                <Image
                  key={name}
                  src={`/images/china07/${name}.jpg`}
                  alt=""
                  width={300}
                  height={433}
                  className={styles.pageImg}
                  unoptimized
                />
              ))}
            </div>
            <div className={styles.row}>
              {trioB.map((name) => (
                <Image
                  key={name}
                  src={`/images/china07/${name}.jpg`}
                  alt=""
                  width={300}
                  height={433}
                  className={styles.pageImg}
                  unoptimized
                />
              ))}
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.wideRow}>
              {wide.map((name) => (
                <Image
                  key={name}
                  src={`/images/china07/${name}.jpg`}
                  alt=""
                  width={900}
                  height={406}
                  className={styles.pageImg}
                  unoptimized
                />
              ))}
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.row}>
              {trioC.map((name) => (
                <Image
                  key={name}
                  src={`/images/china07/${name}.jpg`}
                  alt=""
                  width={300}
                  height={431}
                  className={styles.pageImg}
                  unoptimized
                />
              ))}
            </div>
            <p className={styles.source}>SOURCE: 1964 Pavilion Guide</p>
          </div>
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
