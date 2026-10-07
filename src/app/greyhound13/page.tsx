import type { Metadata } from "next";
import Image from "next/image";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Meet Lady Greyhound — Greyhound — nywf64.com",
  description:
    "Meet Lady Greyhound, living symbol of The Greyhound Corporation at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound — Meet Lady Greyhound.
 * Body from legacy greyhound13.html (Meet Lady Greyhound pamphlet + Cotter photo).
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Pink display heads are original pamphlet color.
 */
export default function Greyhound13Page() {
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

      <article className={styles.article} aria-labelledby="greyhound13-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound13-title" className={styles.titleBarMain}>
            Meet Lady Greyhound
          </h1>
        </header>

        <div className={styles.articleInnerWide}>
          <div className={styles.twoCol}>
            <div>
              <p className={styles.ladyHead}>
                <span className={styles.ladyPink}>meet</span>
                <br />
                lady
                <br />
                greyhound
              </p>
            </div>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound13/greyhound52.jpg"
                alt="Lady Greyhound"
                width={290}
                height={435}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </div>

          <div className={styles.twoCol}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound13/greyhound53.jpg"
                alt="Lady Greyhound"
                width={290}
                height={335}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <div>
              <p className={styles.ladyIntro}>famous living symbol of</p>
              <p className={styles.ladyIntro}>the greyhound corporation</p>
              <p className={styles.ladyIntro}>who will appear at</p>
              <p className={styles.ladyIntro}>greyhound&apos;s transportation</p>
              <p className={styles.ladyIntro}>center during the</p>
              <p className={styles.ladyIntro}>new york world&apos;s fair</p>
              <p className={styles.ladyIntro}>in 1964 - 1965</p>
            </div>
          </div>

          <figure className={styles.figure}>
            <span className={styles.photoFramePlain}>
              <Image
                src="/images/greyhound13/greyhound50.jpg"
                alt="Publicity Photos of Lady Greyhound"
                width={600}
                height={393}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <p className={styles.ladyHead}>
            <span className={styles.ladyPink}>Once</span>
            <br />
            upon a time...
          </p>

          <div className={styles.storyGrid}>
            <div>
              <p>
                ... as all good stories start, the famous trade mark you&apos;ve
                seen on thousands of Greyhound buses <em>came to life</em>.
              </p>
              <p>
                At first she was kind of small, a little awkward ... playful and
                puppyish and not at all like the distinguished lady she would
                come to be. But, without a doubt, a <em>living symbol</em> had
                been born ... and we called her LADY GREYHOUND.
              </p>
              <p>
                Now, after several years of representing Greyhound, she&apos;s
                already been more places and done more things than most people do
                in a whole lifetime. She&apos;s even visited the White House.
              </p>
              <p>
                An important part of LADY GREYHOUND&apos;S work is helping with
                many worthy charity drives that take place around the
              </p>
            </div>
            <div>
              <p>
                country every year. For example, she has served as Pet Division
                Director for the Easter Seal Campaign and has helped the American
                Humane Society with their programs.
              </p>
              <p>
                She&apos;s been on television, too. Maybe you&apos;ve seen her
                with such stars as Jack Benny, Art Linkletter, Steve Allen, Garry
                Moore, and Ed Murrow.
              </p>
              <p>
                As you might guess, LADY GREYHOUND has a very busy schedule. But,
                no matter how tired she may be, she&apos;s always ready with a
                wag of the tail and a shake of the paw for any young admirer.
              </p>
              <p>
                Not only is she an important member of The Greyhound
                Corporation&apos;s family ...
              </p>
            </div>
            <div>
              <p>
                she has her own family as well. In private life she&apos;s
                married to a champion greyhound and is the mother of nine
                handsome puppies. Children in several lucky homes throughout the
                country are having fun right this minute with their very own LADY
                GREYHOUND pups.
              </p>
              <p>
                But even raising her own family hasn&apos;t interfered with LADY
                GREYHOUND&apos;S career. She&apos;ll be continuing her fine work
                as a faithful public servant so that the many deserving people
                she helps will be able to <em>live happily ever after</em>.
              </p>
              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/greyhound13/greyhound51.jpg"
                    alt="Lady Greyhound"
                    width={190}
                    height={59}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </figure>
            </div>
          </div>

          <div className={styles.twoCol}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound13/greyhound54.jpg"
                alt="Lady Greyhound"
                width={230}
                height={244}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <div />
          </div>

          <div className={styles.honorsGrid}>
            <div className={styles.honorsCol}>
              <p>
                <strong>
                  here are just a few of the many titles and honors she&apos;s
                  received:
                </strong>
              </p>
              <p>Queen of National Dog Week</p>
              <p>Queen of National Cat Week</p>
              <p>Mother dog of the Year for 1960</p>
              <p>Bachelor of Animal Letters Degree from Moravian College</p>
              <p>Symbol for World Animal Day</p>
              <p>Pet Food Institute&apos;s Outstanding Dog of 1961</p>
              <p>Lady-in-Waiting to Mrs. America</p>
              <p>American Humane Society Award</p>
            </div>
            <div className={styles.honorsCol}>
              <p>
                <strong>facts about lady greyhound</strong>
              </p>
              <p>Birthday: January 28</p>
              <p>Birthplace: Clay Center, Kansas</p>
              <p>Color: White with gold</p>
              <p>Weight: 58 pounds</p>
              <p>Eyes: Black</p>
              <p>
                LADY GREYHOUND is a purebred greyhound breed of dog. She is of
                coursing stock. Her dam: Little Shamrock. Her sire: Happy Yet.
                Registered with the National Coursing Association.
              </p>
            </div>
          </div>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound13/greyhound55.jpg"
                alt="Greyhound Trademark"
                width={290}
                height={74}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.source}>
              Source: Greyhound at the Fair Pamphlet:{" "}
              <em>Meet Lady Greyhound</em>
            </p>
          </figure>

          <hr className={styles.sectionRule} />

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound13/greyhound57.jpg"
                alt="Lady Greyhound - Opening Day 1965"
                width={450}
                height={303}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={`${styles.caption} ${styles.captionEm}`}>
              Lady Greyhound gets a Glide-a-Ride trip on Opening Day, 1965
            </figcaption>
            <p className={styles.source}>
              SOURCE: Presented courtesy Bill Cotter collection © 2010 Bill
              Cotter, All Rights Reserved. See more images from Bill&apos;s{" "}
              <u>fabulous</u> collection of World&apos;s Fair photographs at his
              website{" "}
              <a
                href="http://www.worldsfairphotos.com/"
                target="_blank"
                rel="noreferrer"
              >
                WorldsFairPhotos.com
              </a>
              .
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound12"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound14"
      />
    </>
  );
}
