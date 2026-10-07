import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica16.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The 1965 Season — Formica — nywf64.com",
  description:
    "The 1965 Season at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — The 1965 Season.
 * Body from legacy formica16.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica16Page() {
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

      <article className={styles.article} aria-labelledby="formica16-title">
        <header className={styles.titleBar}>
          <h1 id="formica16-title" className={styles.titleBarMain}>
            The 1965 Season
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"The World's Fair House in 1965"}</p>
          <div className={styles.quoteBox}>{"In 1965, the World's Fair House will be won by some lucky family who participates in a national consumer sweepstakes. Grand Prize in the sweepstakes will be a $50,000 World's Fair House, plus lot, anywhere in the country. 2,500 additional prizes worth more than $100,000 will include automobiles, appliances, rooms of furniture, furnishings and accessories for the home. Home builders across the country will participate by building their versions of the World's Fair House and visitors to these local model homes will be eligible for the national sweepstakes. In addition, visitors to the World's Fair House on the Fair site will be eligible for weekly sweepstakes prizes drawn at the House itself. The national sweepstakes program is designed not only to stimulate fresh traffic at the Fair itself, but to capitalize on the highly successful 1964 World's Fair House Builder Program in which 166 Fair homes were built in over 150 cities across the United States."}</div>
          <p className={styles.source}>{"SOURCE: Official Fair Document The Fair in 1965"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica16/formica54.jpg"
              alt="Photograph - World's Fair House in '65"
              width={500}
              height={316}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"It's September 1965. The lawn is parched and the fountain is off as an East Coast drought takes its toll on the World's Fair House."}</figcaption>
            <p className={styles.source}>{"SOURCE: Presented Courtesy Mike Kraus Collection © Copyright 2005, Mike Kraus, all rights reserved"}</p>
          </figure>
          <p className={styles.caption} style={{ fontStyle: "italic" }}>{"This advertisement ran in the May, 1964 issue of Good Housekeeping Magazine and shows six versions of the World's Fair House. It also lists some of the builder's models open for visiting in parts of New England or the Mid Atlantic states. Presumably the issues of GH that were distributed in other parts of the country had different lists."}</p>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica16/formica55a.jpg"
                alt="World's Fair House Advertisement"
                width={500}
                height={441}
                className={styles.photoImgPlain}
                unoptimized
              />
            </figure>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica16/formica55b.jpg"
                alt="This advertisement ran in the May, 1964 issue of Good Housekeeping Magazine and shows six versions of the World's Fair House. It also lists some of the builder's models open for visiting in parts of New England or the Mid Atlantic states. Presumably the issues of GH that were distributed in other parts of the country had different lists."
                width={500}
                height={274}
                className={styles.photoImgPlain}
                unoptimized
              />
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica15"
        overviewHref="/formicaoverview"
        nextHref="/formica17"
      />
    </>
  );
}
