import type { Metadata } from "next";
import Image from "next/image";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./china09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Saved from the China Pavilion — China — nywf64.com",
  description:
    "Ceiling tile salvaged from the Pavilion of the Republic of China — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * China — Saved from the China Pavilion.
 * Body from legacy china09.html (custom feature page — no shared brochure
 * /manual/photographs standard).
 *
 * Stack: hero → ChinaNavChrome → navy title → article → Nav2Bar.
 * Last China topic: NEXT returns to /chinaoverview.
 */
export default function China09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="China">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chinaoverview/hero-banner.jpg"
            alt="China at the 1964/1965 New York World’s Fair"
            width={1906}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChinaNavChrome />

      <article className={styles.article} aria-labelledby="china09-title">
        <header className={styles.titleBar}>
          <h1 id="china09-title" className={styles.titleBarMain}>
            Saved from the China Pavilion
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.tileFigure}>
            <Image
              src="/images/china09/ceiling-tile.jpg"
              alt="China Pavilion ceiling tile"
              width={228}
              height={228}
              className={styles.tileImg}
              unoptimized
            />
            <figcaption className={styles.tileCaption}>
              <p>Intricately painted ceiling tile</p>
              <p>salvaged from the</p>
              <p>Pavilion of the Republic of China</p>
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              A piece of the China Pavilion survives today as an unusual
              collectible. This is one of the decorative ceiling panels salvaged
              from the pavilion by the wreckers. It measures 16 3/4 inches
              square. The panel is hand-painted light-weight wood. The image of
              the bird and dragon are &quot;raised&quot; on the tile as is the
              edging and the circle surrounding the central image.
            </p>
            <p>
              The engraved plaque reads: &quot;CHINA PAVILION . NEW YORK
              WORLD&apos;S FAIR . WRECKING CORPORATION OF AMERICA&quot;
            </p>
            <p>
              These tiles can be seen below in the post card view of the ceiling
              of the Pavilion Balcony. A section of the ceiling has been
              enlarged that shows the ceiling tiles similar to the salvaged
              tile.
            </p>
            <p>
              The pavilions of the Fair were built to be temporary and this is a
              great example of what that means. The panel is inexpensive
              light-weight wood painted to look rich. Truly &quot;faux&quot; art
              intended to be destroyed with the pavilion at the end of the Fair.
              From a distance (or in pictures) it would appear to be a fine
              painted ceramic!
            </p>
            <p>
              Imagine what the wreckers must have thought coming into this
              Pavilion to demolish it at the close of the Fair. It must have been
              heartbreaking. Perhaps that is why this piece survives today.
            </p>
          </div>

          <figure className={styles.detailFigure}>
            <Image
              src="/images/china09/postcard-ceiling.jpg"
              alt="Postcard view of the Pavilion Balcony ceiling"
              width={563}
              height={253}
              className={styles.postcardImg}
              unoptimized
            />
            <Image
              src="/images/china09/ceiling-detail.jpg"
              alt="Enlarged section of ceiling tiles"
              width={450}
              height={281}
              className={styles.detailImg}
              unoptimized
            />
            <figcaption className={styles.source}>
              SOURCE: Personal collection of Bill Young
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/china08"
        explicitPrevious
        overviewHref="/chinaoverview"
        nextHref="/chinaoverview"
      />
    </>
  );
}
