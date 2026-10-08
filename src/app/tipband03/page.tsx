import type { Metadata } from "next";
import Image from "next/image";
import { TipbandNavChrome } from "@/components/TipbandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./tipband03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure — Tiparillo Band Pavilion — nywf64.com",
  description:
    "Tiparillo Band Pavilion promotional brochure from General Cigar — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tiparillo Band Pavilion brochure — custom two-panel promotional spread.
 * Body from legacy tipband03.html (no PDF). Stack: hero → TipbandNavChrome →
 * navy title bar → brochure → Nav2Bar.
 */
export default function Tipband03Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Tiparillo Band Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/tipbandoverview/hero-banner.jpg"
            alt="Tiparillo Band Pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TipbandNavChrome />

      <article className={styles.article} aria-labelledby="tipband03-title">
        <div className={styles.titleBar} id="tipband03-title">
          Brochure
        </div>
        <div className={styles.body}>
          <div className={styles.brochure}>
            <div className={styles.headerRow}>
              <div className={styles.headerLeft}>
                <p className={styles.headerLeftLine}>All the best brands</p>
                <p className={styles.headerLeftLine}>in the land...</p>
              </div>
              <div className={styles.headerRight}>
                <p className={styles.atFair}>AT THE WORLD&apos;S FAIR...</p>
                <p className={styles.generalCigar}>General Cigar</p>
                <p className={styles.presents}>PRESENTS A</p>
                <hr className={styles.rule} />
                <p className={styles.extravaganzaWord}>FABULOUS</p>
                <hr className={styles.rule} />
                <p className={styles.extravaganzaWord}>FUN-FILLED</p>
                <hr className={styles.rule} />
                <p className={styles.extravaganzaWord}>EXTRAVAGANZA</p>
              </div>
            </div>
            <div className={styles.panels}>
              <div className={styles.panelWide}>
                <Image
                  src="/images/tipband03/gencig20.jpg"
                  alt="Guy Lombardo Panel"
                  width={400}
                  height={583}
                  className={styles.panelImg}
                  sizes="(max-width: 720px) 100vw, 400px"
                  unoptimized
                />
              </div>
              <div className={styles.panelNarrow}>
                <Image
                  src="/images/tipband03/gencig21.jpg"
                  alt="Smoke Rings Panel"
                  width={200}
                  height={583}
                  className={styles.panelImg}
                  sizes="(max-width: 720px) 100vw, 200px"
                  unoptimized
                />
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: General Cigar Pavilion Promotional Brochure
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/tipband02"
        explicitPrevious
        overviewHref="/tipbandoverview"
        nextHref="/tipbandoverview"
      />
    </>
  );
}
