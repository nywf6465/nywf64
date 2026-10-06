import type { Metadata } from "next";
import Image from "next/image";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./haledu07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: Concrete at the Fair — Hall of Education — nywf64.com",
  description:
    "Hall of Education excerpt from the Portland Cement Association booklet Concrete at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Education — Brochure: Concrete at the Fair.
 * Body from legacy haledu07.html (custom booklet excerpt — no PDF download).
 * Legacy wording (“Worlds' Fair”, “FREDERIC P. WIEDERSUM”) preserved.
 * Adobe / scrap-book chrome omitted.
 *
 * Stack: hero → HaleduNavChrome → navy title → bordered excerpt → Nav2Bar.
 * Last Hall of Education topic — NEXT returns to overview.
 */
export default function Haledu07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Education">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/haleduoverview/hero-banner.jpg"
            alt="Hall of Education at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HaleduNavChrome />

      <article className={styles.article} aria-labelledby="haledu07-title">
        <header className={styles.titleBar}>
          <h1 id="haledu07-title" className={styles.titleBarMain}>
            Brochure: Concrete at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.panel}>
            <p className={styles.source}>
              SOURCE: Portland Cement Association Booklet:{" "}
              <em>Concrete at the Fair</em>
            </p>

            <div className={styles.logoWrap}>
              <Image
                src="/images/haledu07/japan20.jpg"
                alt=""
                width={289}
                height={79}
                className={styles.logo}
                unoptimized
              />
            </div>

            <div className={styles.renderWrap}>
              <Image
                src="/images/haledu07/democr01.jpg"
                alt="Architectural rendering of the Hall of Education"
                width={600}
                height={310}
                className={styles.render}
                unoptimized
              />
            </div>
            <span className={styles.rule} aria-hidden="true" />

            <div className={styles.copyBlock}>
              <span className={styles.accent} aria-hidden="true" />
              <h2 className={styles.heading}>The Hall of Education</h2>
              <div className={styles.creditRow}>
                <p className={styles.creditLabel}>ARCHITECT AND ENGINEER</p>
                <p className={styles.creditValue}>
                  FREDERIC P. WIEDERSUM ASSOCIATES
                </p>
              </div>
              <p className={styles.body}>
                The Hall of Education for the New York Worlds&apos; Fair tells
                the story of American education -- past, present, and future.
                The handsome 90,000-sq. ft. pavilion is flanked by magnificent
                two-story concrete pylons. It is dedicated to the romance of
                learning in all forms and to the applied principles of universal
                education in a democratic society. Attention is given to new
                developments in educational processes; to public and private
                institutions of learning; to professional scientists and
                commercial educational firms; and to the media of communication
                through which knowledge is transmitted to the public.
              </p>
              <p className={styles.body}>
                The Hall of Education houses the Portland Cement
                Association&apos;s architectural exhibit on the school of the
                future.
              </p>
              <Image
                src="/images/haledu07/democr02.jpg"
                alt="CONCRETE AT THE FAIR"
                width={600}
                height={244}
                className={styles.footerMark}
                unoptimized
              />
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/haledu06"
        explicitPrevious
        overviewHref="/haleduoverview"
        nextHref="/haleduoverview"
      />
    </>
  );
}
