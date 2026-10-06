import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/easkodArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion Model for Kodak Dealers — Eastman Kodak — nywf64.com",
  description:
    "Architectural model of the Eastman Kodak Pavilion made for Kodak dealers — 1964/1965 New York World’s Fair on nywf64.com.",
};

const MODEL_PHOTOS = [
  { src: "kod30.jpg", width: 480, height: 197, alt: "Kodak Pavilion model" },
  { src: "kodak64.jpg", width: 480, height: 218, alt: "Kodak Pavilion model" },
  { src: "kodak65.jpg", width: 480, height: 284, alt: "Kodak Pavilion model" },
  { src: "kodak69.jpg", width: 480, height: 281, alt: "Kodak Pavilion model" },
  { src: "kodak70.jpg", width: 480, height: 274, alt: "Kodak Pavilion model" },
  { src: "kodak68.jpg", width: 480, height: 335, alt: "Kodak Pavilion model" },
  { src: "kodak67.jpg", width: 480, height: 277, alt: "Kodak Pavilion model" },
  { src: "kodak66.jpg", width: 480, height: 286, alt: "Kodak Pavilion model" },
  { src: "kodak71.jpg", width: 480, height: 345, alt: "Kodak Pavilion model" },
] as const;

/**
 * Eastman Kodak dealer pavilion model page.
 * Body from legacy easkod20.html.
 */
export default function Easkod20Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <article className={styles.article} aria-labelledby="easkod20-title">
        <header className={styles.titleBar}>
          <h1 id="easkod20-title" className={styles.titleBarMain}>
            Pavilion Model for Kodak Dealers
          </h1>
        </header>
        <div className={styles.articleInner}>
          <p className={styles.headline}>
            Kodak Model Proof of Fair&apos;s Continued Popularity
          </p>
          {MODEL_PHOTOS.map((photo, index) => (
            <figure key={photo.src} className={styles.figure}>
              <Image
                src={`/images/easkod20/${photo.src}`}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={styles.figureImg}
                unoptimized
              />
              {index === 0 ? (
                <p className={styles.caption}>
                  This 23 1/2 <em>inches</em> long, 13 1/2 <em>inches</em>{" "}
                  wide, 6 <em>inch</em> high architectural model of the Kodak
                  Pavilion sold at auction (eBay/Butterfields Live Auctions) on
                  May 19, 2002 for $2750.00! It was estimated to go for between
                  $900 and $1200! Collectibles from the Fair, especially unusual
                  items such as this Kodak model, regularly fetch high prices
                  proving the continued popularity of the Fair. It has been
                  speculated that this small model was one of a number of models
                  Kodak advertised as being available for display at
                  high-visibility Kodak dealers during the run of the Fair.
                </p>
              ) : null}
            </figure>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/easkod19"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkod21"
      />
    </>
  );
}
