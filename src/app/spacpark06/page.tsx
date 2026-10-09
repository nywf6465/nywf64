import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./spacpark06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Space Age for Real! — Space Park — nywf64.com",
  description:
    "The Space Age for Real! — essay feature on the U.S. Space Park at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Space Park — The Space Age for Real! (legacy spacpark06).
 * Stack: hero → SpacparkNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spacpark06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Space Park">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/spacparkoverview/hero-banner.jpg"
            alt="Space Park at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpacparkNavChrome />

      <article className={styles.article} aria-labelledby="spacpark06-title">
        <header className={styles.titleBar}>
          <h1 id="spacpark06-title" className={styles.titleBarMain}>
            <em>The Space Age</em> for Real!
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <Image
              src="/images/spacpark06/ussppk44.jpg"
              alt="Artist&apos;s Rendering"
              width={452}
              height={207}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Artist&apos;s rendering of the New York Hall of Science and the U.S.
            Space Park at the 1964/1965 New York World&apos;s Fair
          </p>
          <p className={styles.source}>
            Source: <em>Rod Smith Collection, unknown source</em>
          </p>

          <blockquote className={styles.pullQuote}>
            <p>
              &quot;Like most Americans in 1964, we were fascinated with space.
              We had grown up with Sputnik and watched, in breathless amazement
              on a classroom TV as Alan Shepard took his fifteen-minute Mercury
              flight in 1961. Our vocabularies were filled with words like
              Telstar and splashdown, and NASA was becoming as familiar as The
              Ed Sullivan Show. We drank Tang, wondered how astronauts went to
              the bathroom, and tried to imagine life at zero gravity. The
              world&apos;s fair was a spectacular showcase of this new era, a
              cornucopia of command modules and booster rockets, space stations
              and moon domes - and it gave us our first ever opportunity to see
              it all up close.&quot;
            </p>
            <p className={styles.attribution}>
              <strong>Katherine Khalife</strong>
              <br />
              <Link href="/stories/memories">
                &quot;Memories of the 1964 World&apos;s Fair&quot;
              </Link>
            </p>
          </blockquote>

          <div className={styles.webmasterNote}>
            <p className={styles.webmasterLead}>Webmaster&apos;s note...</p>
            <div className={styles.body}>
              <p>
                For all those reading this who were grade-schoolers in 1964 and
                1965, the words of Katherine Khalife&apos;s wonderful essay ring
                oh-so-true and evoke vivid memories of how we followed every
                launch with excitement and amazement. For this truly was the
                Space Age and <em>we were living it</em>. How lucky we are to
                have experienced that remarkable history of every mission that
                ended with a successful spashdown and Aircraft Carrier recovery.
              </p>
              <p>
                I usually save my Thank-yous to those who have contributed
                Feature materials for the <em>end</em> of the Feature. But this
                time I&apos;d like to extend a warm Thank You to Bradd Schiffman{" "}
                <em>up front</em> for his wonderful look back at what I feel is
                one of the most important yet overlooked exhibits of the
                1964/1965 New York World&apos;s Fair: The U.S. Space Park.
                Tucked away in a corner of the Fair, far away from the must-see
                futuristic exhibits of the industrial giants, next to a building
                -- The Hall of Science -- that wouldn&apos;t even open until
                September of the Fair&apos;s first season, was The Space Age
                that wasn&apos;t merely a dream on a designer&apos;s drawing
                board. It was The Space Age <em>for real</em>.
              </p>
              <p>
                Here millions of Americans could see for the first time,
                up-close, how we were going to put a man on the Moon before the
                decade was over; the goal that President Kennedy had committed us
                to in 1961. Now, in 1964, the first phase of that program had
                already come to a close: Project Mercury. America would be
                embarking on a new program in 1965 with the advent of Project
                Gemini. It would be the next step of our great experiment in
                space exploration that would ultimately lead to Project Apollo and
                footsteps on the Moon. At the U.S. Space Park, the Fairgoer
                could see and feel every craft that would play a role in our
                Moonshot program. What a remarkable display and teaching tool
                NASA, the Defense Department and the Fair provided for America
                through the Fair.
              </p>
              <p>
                On the following pages you&apos;ll find a number of photos of the
                U.S. Space Park from Bradd&apos;s collection showing the
                rockets, spacecraft and satellites exhibited there. After an
                overview of the Park you&apos;ll find a reprint of the second
                chapter of a World&apos;s Fair Publication called &quot;Science
                at the Fair&quot; which talks about the Park and the U.S. space
                program. In his preface to that book, World&apos;s Fair President
                Robert Moses states &quot;It won&apos;t take you long to read
                this piece. It won&apos;t require great effort. It will be most
                rewarding.&quot; I couldn&apos;t have said it better. As you read
                it, keep in mind that these were <em>plans for what was to come</em>
                . It is a credit to those who made it all happen when we realize
                how successful those plans turned out to be. I guarantee that
                you&apos;ll feel a tug of nostalgia as terms you haven&apos;t used
                in years come at you off those pages. It is the story of The
                Space Age come true for us who have grown now to adults.
              </p>
              <p>Enjoy! Thanks for giving this important exhibit its due, Bradd.</p>
              <p>Bill Young, June 2002</p>
            </div>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/spacpark06/ussppk33.jpg"
              alt="Artist&apos;s concept of the Space Park"
              width={350}
              height={279}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Artist&apos;s concept of the Space Park
          </p>
          <p className={styles.source}>
            Source: <em>Robert J Yowell Collection, courtesy of NASA</em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/spacpark05"
        explicitPrevious
        overviewHref="/spacparkoverview"
        nextHref="/spacpark07"
      />
    </>
  );
}
