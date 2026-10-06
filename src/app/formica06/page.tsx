import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The House Takes Shape — Formica — nywf64.com",
  description:
    "The House Takes Shape at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — The House Takes Shape.
 * Body from legacy formica06.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica06Page() {
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

      <article className={styles.article} aria-labelledby="formica06-title">
        <header className={styles.titleBar}>
          <h1 id="formica06-title" className={styles.titleBarMain}>
            The House Takes Shape
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/formica06/formica06.jpg"
              alt="Construction"
              width={516}
              height={245}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"It may not look like much now, but just wait! The Formica World's Fair House begins to rise atop its artificial hill. The circular structure taking shape in front of the house will become a fountain. Note the Jane Parker sign in the background atop their Queens bread factory. Robert Moses would soon enter into a famous dispute with them over this sign."}</figcaption>
            <p className={styles.source}>{"Source: NY World's Fair Progress Report Number 9, September 26, 1963, p. 17"}</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica06/formica07.jpg"
              alt="World's Fair House photograph"
              width={500}
              height={316}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"What a difference a few months make! The Formica World's Fair House in a photograph taken from nearly the same spot as the construction photo. The exterior sheathing and interior walls, as well as everything else they could think of, are all made with Formica. The sign at lower left reads \"American Cyanamid Company Welcomes You to the World's Fair House.\" In 1957, American Cyanamid bought the Formica Company and made it a wholly owned subsidiary."}</figcaption>
            <p className={styles.source}>{"Source: Presented Courtesy Mike Kraus Collection © Copyright 2005, Mike Kraus, all rights reserved"}</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica06/formica08.jpg"
              alt="World's Fair House photograph"
              width={366}
              height={300}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"This view reveals the rest of the Jane Parker Baked Foods sign peeking out from behind the corner of the house. Entrance to the house was evidently not through the front door."}</figcaption>
            <p className={styles.source}>{"Source: Presented Courtesy Bill Cotter Collection © Copyright 2005, Bill Cotter, all rights reserved"}</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica06/formica09.jpg"
              alt="World's Fair House photograph"
              width={348}
              height={300}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"An oblique angle view of the front of the house, showing the giant branded sign. This was most likely along the exit pathway after touring the house."}</figcaption>
            <p className={styles.source}>{"Source: Presented Courtesy Bill Cotter Collection © Copyright 2005, Bill Cotter, all rights reserved"}</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica05"
        overviewHref="/formicaoverview"
        nextHref="/formica07"
      />
    </>
  );
}
