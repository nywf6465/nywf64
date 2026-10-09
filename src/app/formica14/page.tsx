import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Boy's Room — Formica — nywf64.com",
  description:
    "Boy's Room at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Boy's Room.
 * Body from legacy formica14.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica14Page() {
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

      <article className={styles.article} aria-labelledby="formica14-title">
        <header className={styles.titleBar}>
          <h1 id="formica14-title" className={styles.titleBarMain}>
            Boy&apos;s Room
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"Boy's Room"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica14/formica41.jpg"
              alt="Floorplan featuring Boy's Room"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"\"The bunk beds are a unique rendition of an American classic. Oak X-frames support formed trays, bent from plywood and veneered with Formica woodgrain laminate...The storage compartment is closed with miniature brass spears, a bit of intrigue which begins by inspiring pride of ownership in the little fellows, and keeps right on functioning later. Storage for blankets in trays under the bunks...\" -Leo Jiranek, designer"}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 43"}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica14/formica42.jpg"
                alt="Boy's Room Bunks"
                width={250}
                height={318}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/formica14/formica43.jpg"
              alt="Boy's Room Desk"
              width={470}
              height={467}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"The desk is generous, ample in work surface, ample in storage. Today in the Space Age we are rediscovering the stern necessity for homework, returning, it seems to me, to the realities of study that formed minds like those of Ford, Edison and Bell. Now it's nuclear physics and space navigation...This desk, well-lighted, is our Native American contribution: roll tops from the bygone age of slate and copybooks, with room for the typewriter of today.\" -Leo Jiranek, designer"}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 43"}</p>
          </figure>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica14/formica44.jpg"
                alt="Boy's Room Entertainment Center"
                width={200}
                height={301}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"The wardrobe, chest and desk feature a print of Formica laminate of my own design drawn from the Navajo and originally inspired by diamondback rattlers.\" -Leo Jiranek, designer"}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 43"}</p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica13"
        overviewHref="/formicaoverview"
        nextHref="/formica15"
      />
    </>
  );
}
