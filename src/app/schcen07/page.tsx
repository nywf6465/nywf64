import type { Metadata } from "next";
import Image from "next/image";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./schcen07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Plastics Solve Design Problems — Schaefer — nywf64.com",
  description:
    "Milton Immermann on plastics at Schaefer Center — excerpt from Plastics World, July 1964 — on nywf64.com.",
};

/**
 * Schaefer Center — Plastics Solve Design Problems.
 * Body from legacy schcen07.html (magazine article reprint).
 *
 * Stack: hero → SchcenNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Schcen07Page() {
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

      <article className={styles.article} aria-labelledby="schcen07-title">
        <header className={styles.titleBar}>
          <h1 id="schcen07-title" className={styles.titleBarMain}>
            <em>Plastics Solve Design Problems</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.headline}>
            HOW PLASTICS WERE USED TO SOLVE DESIGN PROBLEMS AT THE WORLD&apos;S
            FAIR
          </h2>
          <p className={styles.byline}>By Milton Immermann</p>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/schcen07/schcen08.jpg"
                alt="Schaefer Center"
                width={600}
                height={392}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.source}>
              SOURCE: Excerpted from <em>Plastics World</em>, July 1964
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              <span className={styles.dropCap}>I</span>N THE DECADES between the
              two New York World&apos;s Fairs, plastics have become seriously
              competitive with natural materials in just about every area
              imaginable. In addition, because of superior cost, speed of
              fabrication and weight characteristics, they have resulted in the
              development of a host of new products and industries.
            </p>
            <p>
              Every Fair, despite an overall diversity, in retrospect leaves some
              distinct impression. The last one held in New York unveiled
              commercial television and the first nylon stockings.
            </p>
            <p>
              This Fair, I believe, demonstrates effectively the present and
              believable future of the fabulous world of plastics, a world that
              has grown up in the years between &quot;Building the World of
              Tomorrow&quot; and &quot;Peace Through Understanding.&quot;
            </p>
            <p>
              Despite its humanistic theme, this Fair will be presenting its
              statements in practical terms. In any review of today&apos;s
              environmental requirements, plastics play an enormously significant
              part.
            </p>
            <p>
              Among the exhibits designed by Walter Dorwin Teague Associates (the
              American Machine &amp; Foundry Monorail for AMF, the Festival of Gas
              Pavilion for the gas industries, and Schaefer Center for the F.
              &amp; M. Schaefer Brewing Company), plastics are used to perform an
              amazing number of jobs that would have been assigned to a wide
              variety of natural materials twenty-five years ago. In fact, they
              achieved results and effects that would have been impossible then.
              More importantly, they have not been used simply as substitutes for
              glass and steel and wood, but rather for their own new, unique
              product characteristics and performance. In each case, interestingly
              enough, the plastics used offered a solution to a specific problem
              which could not have been solved with any other material.
            </p>

            <p className={styles.sectionLabel}>
              Sparkling Acrylic Bubble Walls
            </p>
            <p>
              For the Schaefer Center, designed by us in conjunction with
              architects Eggers &amp; Higgins, the requirement was for a
              semi-permanent, light weight, inexpensive building. Again, plastics
              solved several problems in ways that no other materials could.
            </p>

            <figure className={styles.inlineFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/schcen07/schcen09.jpg"
                  alt="Translucent Fountain"
                  width={300}
                  height={481}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.inlineCaption}>
                Translucent acrylic fountain rests easily atop glass fiber
                reinforced plastics base in Schaefer Pavilion.
              </figcaption>
            </figure>

            <p>
              For the walls, restaurant and exhibit areas, the architects wanted
              a transparent, sparkling effect to enclose the two circles, one
              90&apos; in diameter to house the restaurant, the other 50&apos;
              wide. The decision was for specially designed bubble patterned rigid
              walls, made of heat-formed 1/2&quot; thick cast sheets of Rohm
              &amp; Haas acrylic. In addition to providing a pattern that is
              reminiscent of a glass of good beer, the &quot;bubbles&quot;
              contribute to the rigidity and strength of the walls. Their surface
              is made up of a series of vacuum formed dome shapes, from
              18&quot; to 24&quot; in diameter. These were formed, according to
              the molder, Just Plastics, Inc., by a new cost-saving technique.
              The logistics of time, cost, shipping and installation pointed to
              plastic-acrylic, which is lighter in weight and less prone to
              breakage than glass.
            </p>

            <p className={styles.sectionLabel}>Inflated Ceilings</p>
            <p>
              Above each area are circular ceilings comprised of two thin,
              vinyl-coated fabric skins, air inflated, held by compression rings
              attached to columns. Fabricated by Birdan Structures of Buffalo,
              they are made of a vinyl-coated glass fiber yarn, woven into fabric
              and vinyl-coated again by J. P. Stevens Company. Like other inflated
              roofs in use at the Fair, this one offers superior savings in cost.
              The fabric roof alone weighs only six ounces per square foot. The
              entire structure, in fact, weighs only one-sixth as much as it
              would if constructed of conventional materials. Interestingly, the
              steel columns and rings, are used to anchor the roof to the earth,
              rather than to provide support.
            </p>

            <figure
              className={`${styles.inlineFigure} ${styles.inlineFigureWide}`}
            >
              <span className={styles.photoFrame}>
                <Image
                  src="/images/schcen07/schcen10.jpg"
                  alt="Restaurant Interior"
                  width={400}
                  height={254}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.inlineCaption}>
                Generous use of plastics at the Fair is typified at Schaefer
                Pavilion by plastics chairs, tables, counters, trees and leaves,
                walls, and the vinyl covered inflated ceiling.
              </figcaption>
            </figure>

            <p>
              Plastics are widely used in the restaurant as non-functional
              decorative elements. A sparkling translucent fountain, fabricated by
              Decew &amp; Decew of acrylic, forms the focal point of the room. A
              decorative screen, of acrylic sandwich panels, stands behind the
              buffet food bar. The screen is companioned by matching screens placed
              at the entrance to the restaurant. In addition to their decorative
              function, they serve to define space and control traffic.
            </p>
            <p>
              As costs are reduced and technologies advanced, plastics will be
              used more frequently in solving new problems, serving as casual
              agents for new industries and activities. The continued thoughtful
              and realistic application of plastics to requirements where their
              suitability and performance are superior to other materials will
              accelerate their success and the industry&apos;s astonishing pattern
              of growth.
            </p>
            <p>
              The present World&apos;s Fair has provided us with the unique and
              timely opportunity to bring plastics materials more sharply into
              focus as materials for construction -- here today and ready for
              tomorrow.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/schcen06"
        explicitPrevious
        overviewHref="/schcenoverview"
        nextHref="/schcen08"
      />
    </>
  );
}
