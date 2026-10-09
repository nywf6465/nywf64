import type { Metadata } from "next";
import Image from "next/image";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./weshou07.module.css";
import shared from "../weshou/weshouArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Story Begins — Westinghouse — nywf64.com",
  description:
    "The story of the Westinghouse Time Capsules begins in 1938 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse — The Story Begins (weshou07).
 * Body from legacy weshou07.html.
 */
export default function Weshou07Page() {
  return (
    <>
      <section className={shared.hero} aria-label="Westinghouse">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/weshouoverview/hero-banner.jpg"
            alt="Westinghouse pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WeshouNavChrome />

      <article className={shared.article} aria-labelledby="weshou07-title">
        <header className={shared.titleBar}>
          <h1 id="weshou07-title" className={shared.titleBarMain}>
            The Story Begins
          </h1>
        </header>

        <div className={`${shared.articleInner} ${shared.lede}`}>
          <p>
            The real story of the Westinghouse Time Capsules is not found at
            the 1964/1965 New York World&apos;s Fair, for the Capsule buried
            then was simply an update to history. The real story begins in early
            1938 as Westinghouse prepared for their participation in the New
            York World&apos;s Fair of 1939. The theme of that Fair would be
            &quot;The World of Tomorrow&quot; and engineers and designers at the
            Westinghouse Electric &amp; Manufacturing Company were busy preparing
            a remarkable legacy for the future as their company&apos;s exhibit at
            the Fair: a record of today for the world of tomorrow -- 6939 AD --
            five thousand years hence. A Time Capsule into which would be placed
            a record of 20th Century civilization in word, film and artifacts.
          </p>
          <figure className={shared.figure}>
            <Image
              src="/images/weshou07/weshou03.jpg"
              alt="Westinghouse Pavilion 1939"
              width={234}
              height={293}
              className={shared.photoImg}
              unoptimized
            />
            <figcaption className={shared.caption}>
              <em>
                The Time Capsule under the 1939/1940 Westinghouse World&apos;s
                Fair Building. Latitude 40° 44&apos; 34&quot; .089 north of the
                Equator; Longitude 73° 50&apos; 43&quot; .842 west of Greenwich
              </em>
            </figcaption>
          </figure>
          <p>
            The span of time that the Capsule should lie undisturbed boggles the
            mind. Five thousand year old artifacts in modern museums pre-date
            the pyramids of ancient Egypt! In the span of 5,000 years, whole
            civilizations have come and gone. Whole languages have appeared and
            disappeared. Great cities died and were buried under the dust of
            time only to be discovered by accident after lost millenniums. Mindful
            of that, what would the people of the 70th Century want to know of us
            should all trace of our civilization vanish between now and then? How
            could the science of the 1930s preserve relics of our time for the
            scientists of the 6930s? How could the fact that the Capsule exists
            be passed from generation to generation for so many thousands of
            years so that someone, someday, would find it?
          </p>
          <p>
            The answers to those questions make up the real story of the
            Westinghouse Time Capsules -- a story that starts with the prosaic
            preface to <em>The Book of Record of the Time Capsule of Cupaloy</em>
            , a book which Westinghouse hopes will carry the message from
            generation to generation to a &quot;glorious future&quot; that a
            record of our civilization, a message from one age to another, lies
            buried in a spot that was once called Flushing Meadows.
          </p>
        </div>

        <figure className={styles.centeredPhoto}>
          <Image
            src="/images/weshou07/weshou04.jpg"
            alt="The Time Capsule of Cupaloy"
            width={246}
            height={400}
            className={`${shared.photoImg} ${shared.bordered}`}
            unoptimized
          />
        </figure>

        <div className={`${shared.articleInner} ${styles.prefaceWrap}`}>
          <div className={shared.prefaceBox}>
            <h2>THE TIME CAPSULE</h2>
            <h3>A SEGMENT OF OUR TIME PRESERVED FOR FUTURE GENERATIONS</h3>
            <p>
              <span className={styles.dropCap}>W</span>HEN WE SURVEY THE PAST
              and note how perishable are all human things, we are moved to
              attempt the preservation of some of the world&apos;s present
              material &amp; intellectual symbols, that knowledge of them may
              not disappear from the earth.
            </p>
            <p>
              For there is no way to read the future of the world: peoples,
              nations, and cultures move onward into inscrutable time. In our
              day it is difficult to conceive of a future less happy, less
              civilized than our own. Yet history teaches us that every culture
              passes through definite cycles of development, climax and decay.
              And so, we must recognize, ultimately may ours.
            </p>
            <p>
              By the same reasoning, there will rise again a civilization of
              even vaster promise standing upon our shoulders, as we have stood
              upon the shoulders of ancient Sumer, Egypt, Greece and Rome. The
              learned among that culture of the future may study with pleasure
              and profit things now in existence which are unique to our time,
              growing out of our circumstances, needs, and desires.
            </p>
            <p>
              Five thousand years ago, during a period of invention, development,
              and science rivaling that of our day, recorded history began. It
              would be pleasant to believe that we might leave records of our
              own day for five thousand years hence; to a day when the peoples
              of the world will think of us standing at history&apos;s midpoint.
            </p>
            <p>
              Whether we shall be able to transmit such a segment of our time
              into the future depends not only on our ingenuity at selection and
              preservation, on the excellence of engineering, metallurgy,
              chemistry and other intellectual disciplines, but also in large
              measure on those who come after us, and their willingness to
              cooperate in such an archaeological venture across the reaches of
              time.
            </p>
            <p>
              We pray you therefore, whoever reads this book, to cherish and
              preserve it through the ages, and translate it from time to time
              into new languages that may arise after us, in order that knowledge
              of the Time Capsule of Cupaloy may be handed down to those for
              whom it is intended. We likewise ask: let the Time Capsule rest in
              the earth until its time shall come; let none dig it up for
              curiosity or for any other reason. It is a message from one age to
              another, and none should touch it in the years that lie between.
            </p>
            <p className={styles.starRule}>* * *</p>
            <p>
              Each age considers itself the pinnacle &amp; final triumph above
              all eras that have gone before it. In our time many believe that
              the human race has reached the ultimate in material and social
              development; others that humanity shall march onward to achievements
              splendid beyond the imagination of this day, to new worlds of human
              wealth, power, life and happiness. We choose, with the latter, to
              believe that men will solve the problems of the world, that the
              human race will triumph over its limitations and its adversities,
              that the future will be glorious.
            </p>
            <h3 className={styles.legacyHeading}>
              TO THE PEOPLE OF THAT FUTURE WE LEAVE THIS LEGACY
            </h3>
          </div>

          <p className={shared.source}>
            SOURCE: <em>The Book of Record of THE TIME CAPSULE of Cupaloy,</em>{" "}
            © Copyright 1938
          </p>
          <p className={shared.source}>
            Westinghouse Electric &amp; Manufacturing Company New York
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/weshou06"
        overviewHref="/weshouoverview"
        nextHref="/weshou08"
      />
    </>
  );
}
