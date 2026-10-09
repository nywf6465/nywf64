import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Bar & Laundry Room — Formica — nywf64.com",
  description:
    "Bar & Laundry Room at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Bar & Laundry Room.
 * Body from legacy formica13.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Formica">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/formicaoverview/hero-banner.jpg"
            alt="Formica at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FormicaNavChrome />

      <article className={styles.article} aria-labelledby="formica13-title">
        <header className={styles.titleBar}>
          <h1 id="formica13-title" className={styles.titleBarMain}>
            Bar &amp; Laundry Room
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"Bar Area"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica13/formica37.jpg"
              alt="Floorplan featuring Bar Area"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica13/formica38.jpg"
              alt="Bar Area"
              width={329}
              height={402}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"The bar ... is tucked between family room and kitchen, concealed by sliding doors. An ice-maker in lower cupboard adds convenience.\""}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 25"}</p>
            <p className={styles.caption}>{"This was essentially a clever use of a tiny area just to the right as you came in the side entrance. Notice the second entry way to the family room at right."}</p>
          </figure>
          <p className={styles.sectionHead}>{"Laundry Room"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica13/formica39.jpg"
              alt="Floorplan featuring Laundry Room"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"\"Even the laundry room at right is handsomely paneled in laminate and enclosed by acrylic sliding doors that resemble pretty screens. A sunny area at the front of this space makes sorting, folding and ironing a pleasure rather than a chore.\""}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 25 Yes, that looks like Harvest Gold on that washer and dryer. I'm not sure how well the folding doors would hold up in this kind of a high use area. The sink next to the washer indicates there are still things that have to be soaked or washed by hand in 1964. In the future, enzyme based stain removers will come in squeeze bottles, washing machines will have hand-washable/extra-delicate settings, and there won't be much demand for an ironing area no matter how sunny or pleasant."}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica13/formica40.jpg"
                alt="Laundry Room"
                width={322}
                height={483}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica12"
        overviewHref="/formicaoverview"
        nextHref="/formica14"
      />
    </>
  );
}
