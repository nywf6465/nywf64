import type { Metadata } from "next";
import Image from "next/image";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genfoo08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Booklet: Recipes from the Fair — General Foods Arches — nywf64.com",
  description:
    "PITA (Israeli Bread) recipe from Maxwell House’s Recipes from the World’s Fair booklet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches — Booklet: Recipes from the Fair.
 * Body from legacy genfoo08.html (custom recipe page).
 * Stack: hero → GenfooNavChrome → navy title → article → Nav2Bar.
 */
export default function Genfoo08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Foods Arches">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/genfoooverview/hero-banner.jpg"
            alt="General Foods Arches at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GenfooNavChrome />

      <article className={styles.article} aria-labelledby="genfoo08-title">
        <header className={styles.titleBar}>
          <h1 id="genfoo08-title" className={styles.titleBarMain}>
            Booklet: Recipes from the World&apos;s Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/genfoo08/gf09.jpg"
            alt="Recipe Book Cover"
            width={475}
            height={324}
            className={styles.cover}
            unoptimized
          />
          <p className={styles.credit}>
            General Foods Corporation, Institutitional Food Service Division,
            White Plains, N.Y.
          </p>
          <p className={styles.recipeTitle}>PITA (Israeli Bread)</p>
          <ul className={styles.ingredients}>
            <li>2 envelopes dry yeast</li>
            <li>
              1/4 cup warm water (110<sup>o</sup> - 115<sup>o</sup>)
            </li>
            <li>4 cups all-purpose flour</li>
            <li>1 teaspoon salt</li>
            <li>1 cup water</li>
          </ul>
          <p className={styles.body}>
            Dissolve yeast in warm water. Combine with flour, salt, and remaining
            water, mixing to form soft dough. Knead until smooth. Then make
            rolls.
          </p>
          <p className={styles.body}>
            <span className={styles.u}>To make rolls</span>: Divide dough into 4
            pieces. Knead each until smooth and round. Cover and let rise 30
            minutes. Flatten balls with rolling pin. Cover and let rise 30
            minutes longer. Place, bottom side up, on baking sheet. Bake at 500
            <sup>o</sup> for 10 minutes, or until well browned and puffed. Pitas
            will soften as they cool.
          </p>
          <p className={styles.body}>
            <span className={styles.u}>Yield</span>: 4 rolls.
          </p>
          <p className={styles.source}>
            Source: Maxwell House (a Division of GF) souvenir of the Fair
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genfoo07"
        overviewHref="/genfoooverview"
        nextHref="/genfoo09"
      />
    </>
  );
}
