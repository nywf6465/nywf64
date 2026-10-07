import type { Metadata } from "next";
import Image from "next/image";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./japan07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: Concrete at the Fair — Japan — nywf64.com",
  description:
    "Japan pavilion excerpt from the Portland Cement Association booklet Concrete at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy japan07.html — booklet excerpt, no PDF. */
export default function Japan07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Japan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/japanoverview/hero-banner.jpg"
            alt="Japan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JapanNavChrome />

      <article className={styles.article} aria-labelledby="japan07-title">
        <header className={styles.titleBar}>
          <h1 id="japan07-title" className={styles.titleBarMain}>
            Brochure: Concrete at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.panel}>
            <p className={styles.source}>
              SOURCE: Portland Cement Association Brochure,{" "}
              <em>Concrete at the Fair</em>
            </p>

            <div className={styles.topMarkWrap}>
              <Image
                src="/images/japan07/japan20.jpg"
                alt=""
                width={289}
                height={79}
                className={styles.topMark}
                unoptimized
              />
            </div>

            <p className={styles.body}>
              A massive battered concrete wall enclosing one wing of this
              pavilion is faced with Japanese lava rock, set in place by
              Japanese stone setters. Other features of the structure include
              exposed concrete walls, both interior and exterior, adding to the
              feeling of solidity and strength the building conveys.
            </p>

            <div className={styles.creditRow}>
              <p className={styles.creditLabel}>ARCHITECTS:</p>
              <p className={styles.creditValue}>
                KUNIO MAYEKAWA; OPPENHEIMER, BRADY AND LEHRECKE
              </p>
            </div>
            <div className={styles.creditRow}>
              <p className={styles.creditLabel}>ENGINEERS:</p>
              <p className={styles.creditValue}>CRINNION AND CRINNION</p>
            </div>
            <div className={styles.creditRow}>
              <p className={styles.creditLabel}>CONTRACTORS:</p>
              <p className={styles.creditValue}>
                WILLIAM L. CROW CONSTRUCTION COMPANY
              </p>
            </div>

            <div className={styles.midMarkWrap}>
              <Image
                src="/images/japan07/japan21.jpg"
                alt="Pavilion of Japan"
                width={300}
                height={63}
                className={styles.midMark}
                unoptimized
              />
            </div>

            <span className={styles.rule} aria-hidden="true" />

            <div className={styles.renderWrap}>
              <Image
                src="/images/japan07/japan22.jpg"
                alt="Japan Pavilion"
                width={600}
                height={272}
                className={styles.render}
                unoptimized
              />
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/japan06"
        explicitPrevious
        overviewHref="/japanoverview"
        nextHref="/japan08"
      />
    </>
  );
}
