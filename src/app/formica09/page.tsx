import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Living Room — Formica — nywf64.com",
  description:
    "Living Room at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Living Room.
 * Body from legacy formica09.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica09Page() {
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

      <article className={styles.article} aria-labelledby="formica09-title">
        <header className={styles.titleBar}>
          <h1 id="formica09-title" className={styles.titleBarMain}>
            Living Room
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"Living Room"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica09/formica19.jpg"
              alt="Floorplan featuring Living Room"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica09/formica20.jpg"
              alt="Living Room"
              width={500}
              height={492}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"The somewhat formal living room typifies the practical elegance newly achieved by man-made plastics and fibers. Wall paneling is Formica laminate forever-fresh in soft white, accented with gold. Carpet, drapery, and upholstery are of Creslan acrylic fiber soil- and wrinkle-resistant fabrics. The specially designed Native American furniture and all accessories and art objects...are creations of American artists and craftsmen derived from our own native traditions.\""}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, pp. 11-12"}</p>
          </figure>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"The \"Native American\" furniture mentioned above did NOT refer to actual Native American designs, but rather, in the words of Leo Jiranek, its creator, to \"a unique cultural heritage, drawing inspiration from such contrasting elements as the old Indian frontier and the sleek sophistication of our great cities.\""}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, pp. 38-39 The comfortable armchair at right seems to owe much to the Craftsman movement of the late 19th and early 20th centuries, but the pattern on the attached table does indeed appear Navajo inspired."}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica09/formica21.jpg"
                alt="Sofa Table & Chair"
                width={300}
                height={447}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica09/formica22.jpg"
                alt="Coffee Table"
                width={250}
                height={232}
                className={styles.photoImgPlain}
                unoptimized
              />
            </figure>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"\"For a cocktail table, I found that the structural efficiency of a three-point pier - the same kind of pier that supports the Unisphere at the World's Fair - had appropriate dignity. A Formica screen-printed pattern in electric blue (it could also have been burnt orange or a vivid green in other color schemes) adds a strong, clear stroke to this room's subtle restraint.\" -Leo Jiranek, Designer"}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 40"}</p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica08"
        overviewHref="/formicaoverview"
        nextHref="/formica10"
      />
    </>
  );
}
