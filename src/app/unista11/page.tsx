import type { Metadata } from "next";
import Image from "next/image";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unista11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Article: The Many Images of the United States — United States — nywf64.com",
  description:
    "Business Screen Magazine on the United States Pavilion films and Cinerama ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United States Pavilion — The Many Images of the United States.
 * Body from legacy unista11.html (magazine reprint — pattern /berlin06).
 */
export default function Unista11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="United States Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unistaoverview/hero-banner.jpg"
            alt="United States Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnistaNavChrome />

      <article className={styles.article} aria-labelledby="unista11-title">
        <header className={styles.titleBar}>
          <h1 id="unista11-title" className={styles.titleBarMain}>
            Article: The Many Images of the United States
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.headline}>THE MANY IMAGES OF THE UNITED STATES</h2>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/unista11/us61.jpg"
                alt="US Pavilion"
                width={600}
                height={359}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={`${styles.caption} ${styles.captionCenter}`}>
              <em>A </em>330<em>-foot facade of multi-colored glass draws the visitor&apos;s eye to the beauty of
              the United States Pavilion.</em>
            </figcaption>
          </figure>

          <div className={styles.spread}>
            <div className={styles.spreadLeft}>
              <p className={styles.sideLabel}>
                the big show is a Cinerama &quot;ride&quot; through 400 years of American
                History
              </p>
              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/unista11/us62.jpg"
                    alt='Entrance to "Challenge to Greatness"'
                    width={420}
                    height={371}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>
                  <em>The late John F. Kennedy endorsed &quot;Challenge to Greatness&quot; theme of the United States Pavilion. This is
                  the entrance to the Cinerama &quot;ride&quot; which takes groups of Fair visitors on &quot;The American Journey.&quot;</em>
                </figcaption>
              </figure>
            </div>
            <div>
              <p className={styles.bodyText}>
                <span className={styles.dropCap}>F</span>EATURE SHOW on the top floor
                of the huge United States Pavilion is a &quot;ride&quot; with film that takes the visitor through 400 years of the history
                of this nation.
              </p>
              <p className={styles.bodyText}>
                <em>The American Journey</em>, produced by Cinerama, Inc., requires a dozen 55-seat vehicles which move along a 1,200-foot journey
                which passes 110 screens of every shape and size. 159 projectors
                (both movie and still) are used to fill the screens with scenes
                ranging from the depths of the sea to the outer reaches of space. Individual
                headsets built into each chair carry the narration ... <em>&quot;here
                is our past, look at it!&quot;</em>
              </p>
            </div>
          </div>

          <p className={styles.subhead}>An &quot;Environmental&quot; Film</p>
          <p className={styles.bodyText}>
            The experience is called an &quot;environmental&quot; film
            program, designed to encourage audiences to feel &quot;in&quot;
            the events as they happen, to psychologically <em>participate</em>
            in the nation&apos;s history as it unfolds. The <em>Journey</em> begins
            with early scenes of America before the explorers arrived, rolls
            on though pictorial highlights on the past, leading up to the
            challenges of today&apos;s jet age.
          </p>

          <div className={styles.splitRow}>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/unista11/us64.jpg"
                  alt='Waiting for "Voyage to America"'
                  width={350}
                  height={236}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                <em>The &quot;Voyage to America&quot; picture is shown in this 500-seat theater; Graphic Films collaborated with
                John Houseman for this production..</em>
              </figcaption>
            </figure>
            <div>
              <p className={styles.bodyText}>
                There are 19-35mm motion picture, 14-16mm motion picture and
                126 Eastman Carousel slide projectors along the ride. Narration
                for The American Journey was written by Ray Bradbury; Jeremy
                Lepard directed for Cinerama. The musical score is all &quot;Americana&quot;
                with sounds of railroad whistles, old tunes, harmonicas and the
                like.
              </p>
            </div>
          </div>

          <p className={styles.subhead}>Film &quot;Voyage to America&quot;</p>
          <p className={styles.bodyText}>
            Before reaching the Cinerama show, visitors are first received
            in a 500-seat theater for a showing of <em>Voyage to America</em>.
            This introductory film was produced by Graphic Films Corporation
            in collaboration with John Houseman. Its black &amp; white images
            utilize both live action and animation to move through America&apos;s
            Colonial period, to the phase of American Immigration and the
            period of Expansion (from 1820 to 1920.)
          </p>
          <p className={styles.bodyText}>
            An original music score by Virgil Thomson, direction by Ben
            Jackson, and editing by Pieter Van Deusen of Graphic Films make
            this a notable film. It was narrated by Alexander Scourby and
            designed to create an understanding and mood of excitement and
            confidence in the American way of life -- past, present and future.
          </p>
          <p className={styles.bodyText}>
            This nine-minute black &amp; white film should be made available
            to the nation&apos;s schools when the Fair closes.
          </p>

          <div className={styles.footerRow}>
            <div>
              <p className={styles.bodyText}>
                The Pavilion&apos;s theme &quot;Challenge to Greatness&quot; was endorsed
                by the late John F. Kennedy. It is exemplified in a Pavilion
                area of &quot;Challenge&quot; through which visitors walk on
                their way to the <em>Journey</em> film. Here several hundred other
                displays include continuous films shown at the bottom of a &quot;well&quot;
                set in the floor of the United States Pavilion.
              </p>
              <p className={styles.source}>
                Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon Collection
              </p>
            </div>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/unista11/us63.jpg"
                  alt="Viewing Films in the US Pavilion"
                  width={300}
                  height={203}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                <em>Films are also projected in several &quot;wells&quot; in the U.S. Pavilion; here they are shown on side walls by overhead
                repeater projectors.</em>
              </figcaption>
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/unista10"
        explicitPrevious
        overviewHref="/unistaoverview"
        nextHref="/unista12"
      />
    </>
  );
}
