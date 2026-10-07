import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica15.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Girl's Room & Children's Bath — Formica — nywf64.com",
  description:
    "Girl's Room & Children's Bath at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Girl's Room & Children's Bath.
 * Body from legacy formica15.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica15Page() {
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

      <article className={styles.article} aria-labelledby="formica15-title">
        <header className={styles.titleBar}>
          <h1 id="formica15-title" className={styles.titleBarMain}>
            Girl&apos;s Room &amp; Children&apos;s Bath
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"Girl's Room"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica15/formica45.jpg"
              alt="Floorplan featuring Girl's Room"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica15/formica46.jpg"
              alt="Girl's Room"
              width={500}
              height={470}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"Girl's own room above accommodates an overnight guest on slide-out bed beneath ruffled four-poster...Pink wall paneling is washable laminate with raspberry red splines covering seams, to match colors of youthfully patterned curtains. Compact ready-made units under windows convert to supports for sewing machine, typewriter, small ironing board.\""}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 18"}</p>
            <p className={styles.caption}>{"The poor girl didn't even get a real bed, but at least she's got her own room while her brothers are doubled up next door."}</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica15/formica47.jpg"
              alt="Sewing Machine Hide-a-way"
              width={500}
              height={443}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"Here's the right-hand compact ready-made unit swung out and ready for action. Presumably it's a Singer. Note the pink pushbutton Princess phone under the paper/fabric light shade. The sewing chair looks like it could have come out of Frank Lloyd Wright's furniture design for his Johnson Wax building in Racine Wisconsin."}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 24"}</p>
          </figure>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"\"The vanity dresser is the principal innovation of this room. Swung open on double hinges, it lights automatically to reveal an array of primping accouterments guaranteed to delight feminine hearts of any age, including a wardrobe mirror and swing-away shelves impervious to cosmetics. Whether this room is being used for work, study, or telephoning, it can return to a delightful private retreat in that split second between hair combing and catching the school bus.\" -Leo Jiranek, designer"}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 45"}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica15/formica48.jpg"
                alt="Wardrobe"
                width={200}
                height={273}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <p className={styles.sectionHead}>{"Children's Bathroom"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica15/formica49.jpg"
              alt="Floorplan featuring Children's Bathroom"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"\"Children's bath at right adjoins both their rooms. As in the master bath, mirror-covered corner shelves flank twin basins set in spacious countertop. Visible in mirror: paneled tub-shower.\""}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 18"}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica15/formica50.jpg"
                alt="Children's Bathroom"
                width={304}
                height={327}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica14"
        overviewHref="/formicaoverview"
        nextHref="/formica16"
      />
    </>
  );
}
