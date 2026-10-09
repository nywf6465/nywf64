import type { Metadata } from "next";
import Image from "next/image";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./schcen09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Don't Miss It! — Schaefer — nywf64.com",
  description:
    "Schaefer Center promotional brochure highlights at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center — Don't Miss It!
 * Body from legacy schcen09.html.
 */
export default function Schcen09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Schaefer Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/schcenoverview/hero-banner.jpg"
            alt="Schaefer Center at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SchcenNavChrome />

      <article className={styles.article} aria-labelledby="schcen09-title">
        <header className={styles.titleBar}>
          <h1 id="schcen09-title" className={styles.titleBarMain}>
            <em>Don&apos;t Miss It!</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/schcen09/schcen21.jpg"
              alt="Artist's Rendering - Pavilion"
              width={600}
              height={260}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.photoCaption}>
              <strong>Schaefer Center</strong>, where you and your family can
              have a world of fun and excitement - or just sit back and relax in
              beautiful, tree-shaded gardens. Don&apos;t miss it!
            </figcaption>
          </figure>

          <div className={styles.trioRow}>
            <figure className={styles.trioFigure}>
              <Image
                src="/images/schcen09/schcen27.jpg"
                alt="Schaefer Center Restaurant"
                width={219}
                height={154}
                className={styles.photoImg}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>
                <strong>Schaefer Center Restaurant</strong>, where you will enjoy
                delicious food and tall, refreshing drinks served in
                breath-taking surroundings. Don&apos;t miss it!
              </figcaption>
            </figure>
            <figure className={styles.trioCenter}>
              <Image
                src="/images/schcen09/schcen26.jpg"
                alt="Don't Miss It"
                width={130}
                height={174}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <figure className={styles.trioRight}>
              <Image
                src="/images/schcen09/schcen25.jpg"
                alt="Beer Glass & Logo"
                width={150}
                height={174}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/schcen09/schcen22.jpg"
              alt="100-foot-long Bar"
              width={600}
              height={87}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.photoCaption}>
              <strong>The 100-foot Outdoor Bar</strong> (one of the world&apos;s
              longest) with adjoining beer gardens, where you&apos;ll enjoy the
              most rewarding glass of beer you&apos;ve ever tasted. Don&apos;t
              miss it!
            </figcaption>
          </figure>

          <div className={styles.pairRow}>
            <figure className={styles.pairFigure}>
              <Image
                src="/images/schcen09/schcen23.jpg"
                alt="Circle of Sports Gallery"
                width={279}
                height={87}
                className={styles.photoImg}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>
                <strong>The Schaefer Circle of Sports Gallery</strong>, where
                you&apos;ll meet the Sports Celebrity Host of the Week and see
                dramatic portrayals of some of sport&apos;s most memorable
                moments. Don&apos;t miss it!
              </figcaption>
            </figure>
            <figure className={`${styles.pairFigure} ${styles.pairRight}`}>
              <Image
                src="/images/schcen09/schcen24.jpg"
                alt="Schaefer Rotunda"
                width={210}
                height={87}
                className={styles.photoImg}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>
                <strong>Schaefer Rotunda</strong>, where you&apos;ll see some
                colorful and unusual exhibits from Schaefer beer&apos;s 122-year
                history. Don&apos;t miss it!
              </figcaption>
            </figure>
          </div>

          <hr className={styles.sectionRule} />

          <p className={styles.source}>
            SOURCE: Schaefer Center Promotional Brochure
          </p>

          <div className={styles.highlights}>
            <p>
              <strong>HIGHLIGHTS OF SCHAEFER CENTER</strong> Schaefer Center at
              the 1964-65 New York World&apos;s Fair is an almost entirely
              plastic and fiberglass structure designed with the comfort of its
              guests in mind. The roofs of Schaefer Center are air-filled plastic
              discs which appear to float over the two circular pavilions. The
              walls are made of transparent plexiglass formed into special
              sections in an overall bubble pattern. This construction is unusual
              because the perimeter boomerang shaped steel columns anchor the
              light-weight structure to the ground rather than supports it. The
              two structures are entirely air conditioned.
            </p>
            <p>
              <strong>SCHAEFER CENTER RESTAURANT</strong> With a seating capacity
              of 340, Schaefer Center Restaurant circles an elegant 10-foot high
              water fountain made of plexiglass. White ornamental trees with
              foliage of bright gold and silver foil are dispersed among the
              tables. The trees, which are real, are sprayed white, mounted in
              large teakwood tubs and are illuminated by 300 &quot;firefly&quot;
              lights per tree. Clustered around each tree, which functionally
              serves as a service station, will be circular white Formica tables.
              Alternating red and gold vinyl upholstered arm chairs will seat
              diners comfortably.
            </p>
            <p>
              <strong>SCHAEFER CENTER ROTUNDA</strong> In this area visitors will
              see a diorama of the original Schaefer brewery in 1842. It
              colorfully depicts gnomes performing typical operations involved in
              making Schaefer beer at that time. Visitors will also see a
              three-foot square transparency of the Wetzlar Inn, &quot;Zum
              Reichsapfel&quot; owned by the Schaefer family 200 years ago in
              Germany. There will be reproductions of the cooperage shop, bags
              of hops, a malt crusher, mash tun, furnace and kettles of the old
              brewery. A section of the exterior of the old brewery is also shown,
              with an old-fashioned horse-drawn brewery wagon making its
              deliveries. Every detail is planned to reproduce the era
              authentically.
            </p>
            <p>
              On the opposite wall visitors will view five revolving drums, of
              three sides each, which move simultaneously in phases that last
              about 10 seconds each. The first phase shows the three present-day
              Schaefer breweries at Brooklyn, Baltimore and Albany and the malting
              plant in Buffalo. The second phase shows interiors of these plants.
              The third shows typical scenes of people enjoying a cold glass of
              Schaefer beer.
            </p>
            <p>
              <strong>&quot;SCHAEFER CIRCLE OF SPORTS&quot; GALLERY</strong> Here
              large photomurals depict many of the greatest moments in sports
              during the past 25 years as selected by the East&apos;s leading
              sports editors. Highlighting these great moments in sports are: Bobby
              Thompson&apos;s dramatic home run in the 1951 playoffs between the
              New York Giants and the Brooklyn Dodgers; Baltimore Colt&apos;s full
              back Alan Ameche scoring the winning touchdown against the football
              Giants in an overtime period in 1958; Roger Bannister running the
              first four-minute mile in Oxford, England, in 1954; and Rocky
              Marciano&apos;s knock out of Jersey Joe Walcott in the 13th round
              to win the heavyweight championship in 1952.
            </p>
            <p>
              <strong>SCHAEFER CENTER BEER GARDEN</strong> Schaefer Center&apos;s
              Beer Garden is designed to be a place for relaxation. The area is
              furnished with white wrought iron Molla furniture in a lacy, yet
              contemporary design, beneath red, white and gold striped umbrellas.
              The tables are surrounded by brilliant foliage.
            </p>
            <p>
              <strong>LONGEST BAR AT FAIR</strong> A 100-foot-long bar, which
              connects the two structures making up Schaefer Center, will serve a
              complete selection of beverages. The bar is faced with red, white and
              gold mosaic ceramic tiles. Schaefer beer barrels are tapped in full
              view of visitors.
            </p>
            <p>
              <strong>SCHAEFER CENTER SPORTS HOSTS</strong> Each weekend at
              Schaefer Center, throughout the two year run of the Fair,
              outstanding sports celebrities will meet and greet visitors. Among
              these sports stars will be Johnny Unitas, Rocky Marciano, Rocky
              Graziano, Bill Russell, Sam Huff, Bobby Thompson and Ralph Branca.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/schcen08"
        explicitPrevious
        overviewHref="/schcenoverview"
        nextHref="/schcenoverview"
      />
    </>
  );
}
