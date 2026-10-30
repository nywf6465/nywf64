import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PerspectiveHero } from "@/components/PerspectiveHero";
import { PerspectiveNavChrome } from "@/components/PerspectiveNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../perspectiveEssay.module.css";

export const metadata: Metadata = {
  title: "A Moment in Time — Perisphere’s Perspective — nywf64.com",
  description:
    "David Oats’s essay A Moment in Time — the Westinghouse Time Capsules at Flushing Meadows, on nywf64.com.",
};

/**
 * Perspective essay page 1 (legacy perspective02.html remapped to /perspective01).
 * Stack: hero → Perspective nav (Page 2) → navy title bar → essay → nav2
 * PREVIOUS → /perspectiveoverview; NEXT → /perspective02
 */
export default function Perspective01Page() {
  return (
    <>
      <PerspectiveHero />

      <PerspectiveNavChrome />

      <article className={styles.article} aria-labelledby="perspective01-title">
        <header className={styles.titleBar}>
          <h1 id="perspective01-title" className={styles.titleBarMain}>
            A Moment in Time
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <figure className={styles.bannerFigure}>
              <Image
                src="/images/perspective01/doats01.gif"
                alt=""
                width={300}
                height={150}
                className={styles.bannerPhoto}
                unoptimized
              />
              <figcaption className={styles.source}>
                Source: This essay originally appeared at{" "}
                <a
                  href="http://www.peacethroughunderstanding.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.peacethroughunderstanding.org
                </a>{" "}
                on September 23, 2003
              </figcaption>
            </figure>

            <p className={styles.essayHeading}>A Moment in Time</p>
            <p className={styles.essayByline}>
              by David Oats, October 16, 2003
            </p>
            <hr className={styles.essayRule} />

            <p className={styles.lead}>Stop for a moment.</p>

            <p>
              Today marks a special moment in time. The dawn brought the
              autumnal equinox - the moment the earth passes from summer to
              fall. But to anyone interested in the World&apos;s Fairs and their
              home in Flushing Meadows, it also marks a day of significance and
              reverence.
            </p>

            <p>
              65 years ago today, September 23,1938, at the exact moment of the
              autumnal equinox of that year, an ancient Chinese gong tolled
              solemnly as a group gathered around a spot of earth at Flushing
              Meadows, Queens, New York - precise location: Latitude 40 degrees
              44&apos; 34&apos;&apos; .089 north of the Equator, Longitude 73
              degrees 50&apos; 43&quot; .842 west of Greenwhich. They placed a
              long torpedo-like cylinder in the ground. Around the world,
              records of that location were sent to point the way to that exact
              location to whatever beings will inhabit this planet 5,000 years
              in the future.
            </p>

            <p>
              Buried 50 feet below that site is a &quot;note in a bottle&quot; -
              a message to the future. It, and its companion buried a quarter
              century later, are a message to the future, intended to rest below
              Flushing Meadows until the year 6939 A.D. They are the Time
              Capsules.
            </p>

            <p>
              So it is important to stop - a minute - and reflect on this, the
              ultimate World&apos;s Fair legacy, souvenir, &quot;landfill&quot;,
              monument - &quot;ghost&quot; - to a world five millennia from now.
            </p>

            <p>
              The whole fascinating story of the{" "}
              <Link href="/weshou08">Time Capsules</Link>, the first serious
              attempts at preserving the history of our civilization, are
              available on the nywf64.com website (and a{" "}
              <Link href="/weshou15">feature story</Link> on Time Capsules called
              &quot;New York&apos;s Sacred Meadow&quot; by Knute Berger.)
            </p>

            <p>
              Briefly, the first capsule buried 65 years ago today, was placed
              in the ground a few months before the opening of the great 1939-40
              New York World&apos;s Fair by the Westinghouse Electric
              Corporation. At their pavilion during the Fair, visitors could
              peer down into the &quot;immortal well&quot; and view the capsule
              before it was sealed at the end of the fair. One of the millions
              of visitors to look down that well was a five year old kid from
              Brooklyn, named Carl Sagan. &quot;It was a day that would
              influence my life forever&quot;, Sagan would say decades later
              when he became one of the world&apos;s most renowned and
              influential astronomers and &apos;exo-biologists&apos;,
              popularizing the science of space with TV series such as
              &quot;Cosmos&quot; and working with NASA to construct the Voyager
              Message from Earth aboard the spacecraft that is traveling to the
              ends of the universe with a kind of interstellar &quot;message in
              a bottle.&quot; The Time Capsules of Flushing Meadows helped
              launch the imagination for that interstellar note to the cosmos -
              the gleaming terrestrial capsules from the two World&apos;s Fairs
              preserve our message in the Earth.
            </p>

            <p>
              The key to finding these capsules is a rare and ingenious
              &quot;Book of Record&quot; that pinpoints its location and
              position within an inch. Each book tells when to open the capsules
              using the Gregorian, Jewish, Muslim, Chinese and Shinto calendars
              and (should none be in use 5,000 years hence) astronomical
              reckoning. Westinghouse sent copies of the books to the world&apos;s
              great libraries, museums, convents and monasteries. Many have
              wound up in the hands of lucky fair collectors who, it is hoped,
              will be as diligent in preserving its memory as the monks in Tibet.
            </p>

            <p>
              There is even an ingenious key to decipher both the book and the
              capsule&apos;s contents (which are listed on this website) by the
              head the Bureau of Ethnology at Washington&apos;s Smithsonian
              Institution,Dr. John P. Harrington. He begins his section of The
              Book of Record with a short verse:
            </p>

            <p className={styles.verse}>
              {`"Our years are like the shadows
That o'er the meadows fall,
Are like the fragile wildflower
That withers by the wall --
A dream, a song, a story,
By others quickly told,
An unremaining glory
Of years that soon get old."`}
            </p>

            <p>
              In the back of the Book of Record are some messages written for
              the capsule by some noted men of 1938. One of them is Dr. Albert
              Einstein, who looking into the future from that pivotal moment of
              time notes that &quot;....people living in different countries
              kill each other at irregular time intervals, so for this reason
              any one who thinks about the future must live in fear and
              terror.&quot; While he marvels at the state of modern mid-twentieth
              century technology, he cautions &quot;the production and
              distribution of commodities is entirely unorganized so that
              everybody must live in fear of being eliminated from the economic
              cycle, in this way suffering for the want of everything.&quot; But
              he concludes his message on this note: &quot;I trust that
              posterity will read these statements with a feeling of proud and
              justified superiority.&quot;
            </p>

            <p>
              At the second fair in 1964-65, Westinghouse wisely decided to bury
              a second capsule alongside the original to show the incredible
              changes in the 25-year period between the two New York World&apos;s
              Fairs. (At the fair&apos;s opening, President Lyndon Johnson noted,
              &quot; I understand at the close of this Fair, a Time Capsule will
              be buried in the ground. Every precaution has been taken to ensure
              their survival for 5,000 years. But they have neglected one thing:
              They do not have an advance commitment from Robert Moses, that
              when the time comes, he will let them dig it up.&quot;) The objects
              inside the capsule alone told the story of a changed - and changing
              world: a piece of a space capsule; a part of a nuclear reactor;
              birth control pills; a bikini bathing suit; a credit card - a
              Beatles record.
            </p>

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective01/doats05.jpg"
                alt="Koch and Time Capsule replica"
                width={420}
                height={300}
                className={styles.singlePhoto}
                unoptimized
              />
              <figcaption className={styles.caption}>
                N.Y. City Mayor Ed Koch viewing a full scale replica (with
                cutout window to view contents) of the 1965 Westinghouse Time
                Capsule with David Oats, co-curator of{" "}
                <em>The Mighty Fair</em>, a retrospective exhibition on the
                1964-65 New York World&apos;s Fair held at The Flushing Gallery,
                June-October 1985.
              </figcaption>
            </figure>

            <p>
              This time the second capsule was suspended in mid-air high above
              the Westinghouse pavilion.Visitors at the Fair could sign a book
              and place their names in the capsule, receiving a badge that said
              &quot;My name is in the Westinghouse Time Capsule for 5,000
              years.&quot;
            </p>

            <p>
              Saturday, October 16,1965, the day before the Fair&apos;s closing
              day, the fall air was crisp and clear. The park&apos;s new trees
              were already turning autumn gold. I had won an essay contest
              conducted by the Board of Education, Westinghouse and the Fair for
              a high school student&apos;s perspective on the meaning of the
              capsule. At 15, just beginning to emerge from my &quot;gee-whiz
              geekdom&quot; phase, I was slowly coming to grips with the
              Vietnam, Civil Rights, environmental issues that were changing
              everyone&apos;s world ,just as the great fair was about to fade
              into history. I got to speak at the Time Capsule II lowering
              ceremony that day at the Westinghouse Pavilion.
            </p>

            <p>
              It was suddenly an awesome, but oddly quiet moment. I shudder at
              some of the stuff I may have thought was good in my short talk,
              but my last sentence still seems to hold up; &quot;I think, maybe,
              today we are seeing a gleaming vessel going underground, but
              waiting to someday blast off into an unimaginable future. But
              unless the theme of this World&apos;s Fair is realized -
              &quot;Peace Through Understanding&quot; - we are only burying this
              gleaming capsule into the grave of a fallen planet.&quot;
            </p>

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective01/doats08.jpg"
                alt="Oats at Capsule lowering"
                width={450}
                height={211}
                className={styles.singlePhoto}
                unoptimized
              />
              <figcaption className={styles.caption}>
                David Oats, age 15, of Flushing, speaking at the ceremonies for
                the lowering of Time Capsule II at the Westinghouse Pavilion at
                the New York World&apos;s Fair on October 16, 1965. General
                Motors Futurama II in the background. (United Press
                International photo).
              </figcaption>
            </figure>

            <p>
              That bittersweet feeling at the Fair&apos;s end was palpable - the
              Fair was indeed, like it&apos;s 1939-40 predecessor, on the edge
              of a new world. Today, a low granite marker sits quiet and still
              at Flushing Meadows, marking the site where the time capsules are
              buried. Below the earth, they rest, having waited about 1/100th of
              their appointed time. The Time Capsules are the simplest of
              devices: no moving parts, no maintenance, no cost after
              installation.
            </p>

            <p>
              And if we forget them from time to time it is because the Time
              Capsules of Flushing Meadows are working as they should; surviving
              beyond memory, waiting beyond our dreams.
            </p>

            <figure className={styles.pairFigure}>
              <div className={styles.pairRow}>
                <Image
                  src="/images/perspective01/doats06.jpg"
                  alt="Signing the Millennium Time Capsule book"
                  width={220}
                  height={326}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/perspective01/doats07.jpg"
                  alt="Closing the Millennium Time Capsule manhole"
                  width={220}
                  height={155}
                  className={styles.pairPhoto}
                  unoptimized
                />
              </div>
              <figcaption className={styles.caption}>
                <em>(left)</em> Officials of the New York Hall of Science, Con
                Edison, the City and Queens Borough President Claire Schulman
                (2nd left), Flushing Meadows Park Administrator Estelle Cooper
                (2nd right) and David Oats at the first signing of a message to
                the future book to be placed in the 2001 Flushing Meadow Time
                Capsule. Hundreds signed the book with their own messages which
                were included with other objects and buried for 100 years below
                a shaft covered with a specially designed Millennium manhole
                cover at the entrance to the New York Hall of Science , not far
                from the original Westinghouse Time Capsules in the park.{" "}
                <em>(right)</em> The scene at the closing of the special manhole
                cover over the Millennium Time Capsule, January 2001 at the
                entrance to the Hall of Science. The theme of the Capsule was
                &quot;Preserving The World For Tomorrow&quot;.
              </figcaption>
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/perspectiveoverview"
        explicitPrevious
        nextHref="/perspective02"
      />
    </>
  );
}
