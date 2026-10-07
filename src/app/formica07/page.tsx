import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Entrance & Main Hallway — Formica — nywf64.com",
  description:
    "Entrance & Main Hallway at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Entrance & Main Hallway.
 * Body from legacy formica07.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica07Page() {
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

      <article className={styles.article} aria-labelledby="formica07-title">
        <header className={styles.titleBar}>
          <h1 id="formica07-title" className={styles.titleBarMain}>
            Entrance &amp; Main Hallway
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"A Souvenir and an Invitation"}</p>
          <div className={styles.quoteBox}>{"This souvenir book of the World's Fair House is a treasury of ideas for that most personal of arts: the art of beautifying one's home. It grew out of a need to visualize new dimensions in decoration made possible by man-made materials already famous for their utility. Modern living demands beauty and grace in everyday surroundings, but rejects the slavery of fussy care. Today, thanks to miracles of industrial science coupled with creative design, both aims may be served at once and in every room. Here is American contemporary styling, a blend of native arts and crafts, tradition and the present, color and durability. Here are furnishings for family life as it is lived, at home anywhere in America today. And yet for most people they are a discovery in taste. A world's fair is a cultural milepost; and at this one the Formica World's Fair House invites twentieth century America to experience fresh new ideas in home decorating which this book now explores in depth."}</div>
          <p className={styles.source}>{"Source: The World's Fair House Decorating Book - Souvenir Book of the Formica Exhibit, 1964, Formica Corporation."}</p>
          <p className={styles.introNote}>{"The photographs below and on the following pages are found in The World's Fair House Decorating Book , a souvenir of the Formica exhibit. They were taken at the Gold Medallion House designed for the Formica Corporation by Emil Schmidlin, A.I.A., and Ellis Leigh, and built in Monmouth County, New Jersey by R.V.M. Lefferts of Oak Hill Builders. Another, virtually identical model, was built in Flushing Meadows; the major difference being a widened center hallway with half-walls instead of full walls in order to facilitate viewing. Some of the interior photos may have been taken at the actual World's Fair House in Flushing Meadows, although it is not clear which ones."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica07/formica10.jpg"
              alt="Floorplan"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
            <figcaption className={styles.caption}>{"Floorplan of the New Jersey World's Fair House"}</figcaption>
            <p className={styles.source}>{"Source: Good Housekeeping Magazine, May 1964"}</p>
          </figure>
          <p className={styles.sectionHead}>{"Entrance and Main Hallway"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica07/formica11.jpg"
              alt="Floorplan featuring Main Hallway"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"This is the main entrance just inside the front door, taken from the living room. \"Restful Green\" will be the leitmotif throughout the house."}</p>
              <p className={styles.source}>{"SOURCE: Photo SOURCE: Souvenir Book, p. 8"}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica07/formica12.jpg"
                alt="Foyer"
                width={358}
                height={500}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica07/formica13.jpg"
                alt="Hallway"
                width={200}
                height={500}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"\"Indoor gardening is easier when spills are no problem, as in entry of World's Fair House. Skydomes are self-cleaning, too, washed by the rains.\""}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 93 Those of us who have owned homes with skylights found that they were anything but self-cleaning, although it would be natural to think that they would be. It also seems curious that such a large amount of space would be given over to a rarely used entryway in a house with such a small footprint."}</p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica06"
        overviewHref="/formicaoverview"
        nextHref="/formica08"
      />
    </>
  );
}
