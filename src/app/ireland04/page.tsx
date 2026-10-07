import type { Metadata } from "next";
import Image from "next/image";
import { IrelandNavChrome } from "@/components/IrelandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ireland04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: Concrete at the Fair — Ireland — nywf64.com",
  description:
    "Ireland pavilion excerpt from the Portland Cement Association booklet Concrete at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ireland — Brochure: Concrete at the Fair.
 * Body from legacy ireland04.html (custom booklet excerpt — no PDF download).
 * Adobe / scrap-book chrome omitted.
 *
 * Stack: hero → IrelandNavChrome → navy title → bordered excerpt → Nav2Bar.
 * Last Ireland topic — NEXT returns to overview.
 */
export default function Ireland04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Ireland">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/irelandoverview/hero-banner.jpg"
            alt="Ireland pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IrelandNavChrome />

      <article className={styles.article} aria-labelledby="ireland04-title">
        <header className={styles.titleBar}>
          <h1 id="ireland04-title" className={styles.titleBarMain}>
            Brochure: Concrete at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.panel}>
            <p className={styles.source}>
              SOURCE: Portland Cement Association Booklet:{" "}
              <em>Concrete at the Fair</em>
            </p>

            <div className={styles.renderWrap}>
              <Image
                src="/images/ireland04/ireland01.jpg"
                alt="Architectural rendering of the Irish Pavilion"
                width={600}
                height={344}
                className={styles.render}
                unoptimized
              />
            </div>
            <span className={styles.rule} aria-hidden="true" />

            <div className={styles.copyBlock}>
              <span className={styles.accent} aria-hidden="true" />
              <h2 className={styles.heading}>Irish Pavilion</h2>
              <div className={styles.creditRow}>
                <p className={styles.creditLabel}>ARCHITECT:</p>
                <p className={styles.creditValue}>
                  ANDREW DEVANE, GEORGE NELSON
                  <br />
                  &amp; CO.
                </p>
              </div>
              <div className={styles.creditRow}>
                <p className={styles.creditLabel}>ENGINEER:</p>
                <p className={styles.creditValue}>BRUCE TOWNSEND</p>
              </div>
              <div className={styles.creditRow}>
                <p className={styles.creditLabel}>CONTRACTOR:</p>
                <p className={styles.creditValue}>JAMES KING AND SON</p>
              </div>
              <p className={styles.body}>
                A double wall of precast concrete wall panels having a surface of
                large random pieces of gray Irish stone completely encloses the
                Irish pavilion. The interior court yard floor is attractively
                surfaced with precast panels. The second story is encased in
                portland cement plaster, giving the structure the appearance of
                an Irish Castle.
              </p>
              <Image
                src="/images/ireland04/ireland02.jpg"
                alt="CONCRETE AT THE FAIR"
                width={300}
                height={76}
                className={styles.footerMark}
                unoptimized
              />
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ireland03"
        explicitPrevious
        overviewHref="/irelandoverview"
        nextHref="/irelandoverview"
      />
    </>
  );
}
