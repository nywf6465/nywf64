import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Post House Restaurants — Greyhound — nywf64.com",
  description:
    "Greyhound Post House Restaurants at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function Photo({
  src,
  alt,
  width,
  height,
  caption,
  source,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: ReactNode;
  source?: string;
}) {
  return (
    <figure className={styles.figure}>
      <span className={styles.photoFrame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.photoImg}
          unoptimized
        />
      </span>
      <figcaption className={styles.caption}>{caption}</figcaption>
      {source ? <p className={styles.source}>{source}</p> : null}
    </figure>
  );
}

/**
 * Greyhound — Post House Restaurants.
 * Body from legacy greyhound08.html (Marketing Information Letter No. 5).
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Typos preserved: “Cape Code”; “renown specialties”; alt “Fedral”.
 */
export default function Greyhound08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Greyhound">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/greyhoundoverview/hero-banner.jpg"
            alt="Greyhound at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GreyhoundNavChrome />

      <article className={styles.article} aria-labelledby="greyhound08-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound08-title" className={styles.titleBarMain}>
            Post House Restaurants
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Photo
            src="/images/greyhound08/greyhound11.jpg"
            alt="Artist's Rendering of Nantucket Room"
            width={600}
            height={506}
            caption="Artist's rendering of The Nantucket Room - a Post House Restaurant at the Greyhound Pavilion"
          />

          <p>
            Greyhound Post Houses will play a dramatic and unique role at the
            New York World&apos;s Fair, offering distinctive restaurants in the
            Greyhound Transportation Center and several old-fashioned
            restaurants in the Liebmann Breweries&apos; (Rheingold Beer)
            exhibit, &quot;Little Old New York.&quot;
          </p>
          <p>
            In the Greyhound World&apos;s Fair Transportation Center, Post
            Houses will have three dining rooms joined by a street, &quot;Main
            Street, U.S.A.,&quot; and, also, feature a fast cafeteria, snack bar
            and a &quot;Food Service of Tomorrow.&quot;
          </p>
          <p>
            The multi-dining room Post House Restaurant in the Greyhound
            World&apos;s Fair Building -- which is across the street from the
            General Motors Building -- will seat more than 500 persons.
          </p>
          <p>
            Each dining room will have an individual, decorative motif, and a
            food specialty.
          </p>
          <p>
            <span className={styles.areaTitle}>The Nantucket Room</span> will
            specialize in foods traditional to New England -- crabs, clams, clam
            chowder and lobster. One glass wall provides a view of an outside
            pool, and seines, wharf piles, masts and riggings complement the
            Cape Code environment.
          </p>
          <p>
            <span className={styles.areaTitle}>The Federal Room</span> will
            specialize in Southern cooking at its best, served in a splendid,
            hospitable atmosphere. Such renown specialties as Maryland Fried
            Chicken, Baked Country Ham, Corn Bread, Plantation Shortcake and
            Pecan Pie are some of the menu items.
          </p>
          <p>
            <span className={styles.areaTitle}>The Western Room</span> --
            highlight BEEF! Hearty Western cookery, served amidst irons,
            lariats, guns and trophies of the West.
          </p>
          <p>
            <span className={styles.areaTitle}>Food Services of Tomorrow</span>{" "}
            will afford adventurous chefs the opportunity to prepare their own
            complete meal in mere seconds by microwave energy.
          </p>
          <p>
            Nor has Post House forgotten the most traditional of all American
            fare -- be it Golden Fried Chicken or Roast Round of Beef, featured
            at the <span className={styles.areaTitle}>Cafeteria</span> -- or the
            ever popular Hamburger or Hot Dog from the Snack Bar. Either will
            provide fast service for the hurried visitor.
          </p>
          <p>
            A Souvenir Gift Court completes this Post House exhibit in the
            Greyhound Pavilion.
          </p>
          <p>
            <span className={styles.areaTitle}>
              At the Liebmann Breweries&apos;
            </span>{" "}
            exhibit Post Houses will operate several old-fashioned restaurants
            in a &quot;Little Old New York&quot; turn-of-the-century setting.
            Cobblestone walks bordered with flowers, trees, park benches and a
            centrally located bandstand providing live entertainment are all
            attuned to the gay and carefree early 1900&apos;s. Fair-goers will
            find food kiosks, a Town House restaurant with a solarium facing the
            Fair&apos;s Pool of Industry, center of night time Fair activities,
            a sidewalk cafe, and an intimate tavern. Here Fair-goers will, also,
            find gaily costumed hawkers peddling their wares.
          </p>
          <p>
            Meal service is offered to groups of 100 or more at any time other
            than peak service periods in both facilities. During the meal
            period, groups of 30 to 60 can be served in the Western, Nantucket
            and Federal Rooms or in the solarium of the Town House.
          </p>
          <p>
            Greyhound Post Houses, as you can see, will be very much in evidence
            at the Fair, contributing significantly to the over-all Greyhound
            Corporation image.
          </p>
          <p>
            Plan to include Post House in your World&apos;s Fair planning and
            encourage our customers to not only leave the driving to us, but to,
            also, enjoy a memorable visit to one of the Greyhound Post House
            World&apos;s Fair restaurants.
          </p>

          <Photo
            src="/images/greyhound08/greyhound12.jpg"
            alt="Artist's Rendering of The Fedral Room"
            width={600}
            height={369}
            caption="Artist's rendering of The Federal Room - a Post House Restaurant at the Greyhound Pavilion"
            source="SOURCE: Greyhound Corporation, New York World's Fair Marketing Information Letter No. 5, January 20, 1964"
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound07"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound09"
      />
    </>
  );
}
