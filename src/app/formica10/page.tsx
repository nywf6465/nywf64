import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Dining Room — Formica — nywf64.com",
  description:
    "Dining Room at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Dining Room.
 * Body from legacy formica10.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica10Page() {
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

      <article className={styles.article} aria-labelledby="formica10-title">
        <header className={styles.titleBar}>
          <h1 id="formica10-title" className={styles.titleBarMain}>
            Dining Room
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"Dining Room"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica10/formica23.jpg"
              alt="Floorplan featuring Dining Room"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica10/formica24.jpg"
              alt="Dining Room"
              width={359}
              height={500}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"The beautiful brass and acrylic chandelier is supplemented by a circle of architectural lighting recessed in the ceiling. Here, as in all the rooms, dimmer controls make it possible to flood the area with radiance or reduce wattage to the subdued glimmer of candlelight. Behind the floor-to-ceiling draperies of Creslan are sliding doors opening on the patio. Surfaces of Formica laminate both protect and decorate the handsome furniture.\""}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 12"}</p>
            <p className={styles.caption}>{"If nothing else, the blue and green glass chandelier would date this picture to the mid 1960s. The dimmers, sliding glass doors and recessed spotlights are all good ideas that would see increased acceptance in the coming years, while ironically Formica tabletops like the one shown would become, for many, instantly recognizable symbols of the sixties."}</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica09"
        overviewHref="/formicaoverview"
        nextHref="/formica11"
      />
    </>
  );
}
