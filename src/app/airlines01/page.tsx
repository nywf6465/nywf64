import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "To the FAir — Airlines & The Fair — nywf64.com",
  description:
    "Bill Young’s essay To the FAir — airline timetables and the 1964/1965 New York World’s Fair, on nywf64.com.",
};

/**
 * Airlines feature page 1 (legacy airlines02.html remapped to /airlines01).
 * Stack: hero → Airlines nav (Page 2) → navy title bar → essay → nav2
 * PREVIOUS → /airlinesoverview; NEXT → /airlines02
 */
export default function Airlines01Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines01-title">
        <header className={styles.titleBar}>
          <h1 id="airlines01-title" className={styles.titleBarMain}>
            <em>To the FAir</em>
          </h1>
          <p className={styles.titleBarByline}>
            ... an essay by Bill Young
          </p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <figure className={styles.leadFigure}>
              <Image
                src="/images/airlines01/airlines39.jpg"
                alt="Pan Am over Unisphere"
                width={332}
                height={165}
                className={styles.leadPhoto}
                unoptimized
              />
            </figure>

            <p>
              I missed one of the greatest events in American cultural history.
              My parents had no desire to experience the traffic of New York, a
              city that was surely the most dangerous place to drive on the face
              of the earth! We spent our summer vacations the years of the Fair
              far from the terrors of Queens taxi drivers and the World&apos;s
              Fair arterial highway system. Fly to the Fair and avoid the
              traffic? Heavens no! That was much too expensive for our
              Midwestern family of four in &apos;64.
            </p>

            <p>
              But even though I missed out on the Fair, something happened in
              1964 that was even <em>better</em> than the Fair in my book
              because that was the year my cousin, Richie, took a job with Ozark
              Airlines at O&apos;Hare Field in Chicago. And that was the year
              airplanes came into my life! It wasn&apos;t long before Dad took a
              deep breath, said &quot;Youse kids shut up in the backseat so I
              can drive&quot; and braved the Illinois Tollway for a visit to
              cousin Rich who had promised to give us an insider tour of
              &quot;The World&apos;s Busiest Airport.&quot;
            </p>

            <p>
              Far from the glorified bus stations they are today, a modern
              airport in 1964 was a true Space Age marvel and Chicago&apos;s
              O&apos;Hare Field was no exception. Rich escorted us through
              corridor after corridor of polished tiled floors and huge
              smoked-glass windows set between steel columns. Outside the
              windows sat incredible four-engined jetliners, gleaming Boeing
              707s and DC-8s, boarding people destined for far-off places like
              Los Angeles, New York, Dallas and Miami, with insignia that said{" "}
              <em>TWA</em> and <em>Eastern</em> and{" "}
              <em>Braniff International Airways</em>. It was a bustling place
              but far from crowded. Air travel, especially jet air travel, was
              still a Space Age wonder in 1964. It was exciting! To this
              eight-year-old-small-town-kid who&apos;d never been closer to an
              airliner than 30,000 feet below one, that day must have been like
              going to the World&apos;s Fair. From then on I was hooked on
              airports and airplanes.
            </p>

            <figure className={styles.centerFigure}>
              <Image
                src="/images/airlines01/eastern-jet-1964.jpg"
                alt="Eastern Jet c. 1964"
                width={430}
                height={213}
                className={styles.centerPhoto}
                unoptimized
              />
            </figure>

            <p>
              Being a little collector even then I wanted something that I could
              take home from my visit to O&apos;Hare. A quick pass along the
              ticket counters at the front of the airport provided me with a
              treasure trove of memorabilia in the form of{" "}
              <em>airline timetables</em>. Every airline published timetables
              periodically during the year and these paper pamphlets represented
              the airline to the traveling public listing every flight by city
              of origin and destination, showing stops in between.
            </p>

            <p>
              Returning home, armed with my American Bricks and tin-litho
              airliner models, I was soon building my own miniature airports and
              flying my own planes to the exotic destinations of the schedules
              in my souvenir timetables. On the cover of the one I&apos;d picked
              up from an airline called Delta was a picture of a happy family of
              four standing behind a round white suitcase with a strap handle
              and a big ol&apos; Delta &quot;widget&quot; logo plastered on the
              front. Behind them, in the background, stood the Unisphere. The
              caption above read &quot;Fly Delta Jets to the New York
              World&apos;s Fair.&quot; &quot;Wow!&quot; I&apos;d think,
              &quot;Wouldn&apos;t it be something to be able to <em>fly</em> to
              the New York World&apos;s Fair?&quot;
            </p>

            <div className={styles.timetableRow}>
              <Image
                src="/images/airlines01/airlines30.jpg"
                alt="Delta Timetable Cover - 4/25/65"
                width={140}
                height={321}
                className={styles.timetablePhoto}
                unoptimized
              />
              <div className={styles.timetableCopy}>
                <p>
                  <strong>This is the Delta Air Lines timetable</strong>{" "}
                  featuring the Fair! Thanks to Perry Sloan, webhost of the{" "}
                  <a
                    href="http://www.airtimes.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.airtimes.com
                  </a>{" "}
                  website, I was able to find my long-lost memory of the Fair.
                  Although it&apos;s not exactly as I remember it, it is
                  undoubtedly the same timetable that I picked up as a
                  9-year-old back in the mid-sixties at O&apos;Hare Airport.
                </p>
                <p>
                  <em>airtimes</em> features thousands of timetable images on
                  line. It&apos;s a fascinating and colorful look back at some
                  remarkable history.
                </p>
              </div>
            </div>

            <p>
              Jump ahead a <em>few</em> decades and meet Bob Esler. Bob has been
              collecting those wonderful airline timetables for many years. I
              met Bob after a friend pointed out an on-line auction he was
              hosting for a United Air Lines timetable featuring the Unisphere.
              He also pointed out that Bob and I live in the same town (and only
              a few blocks apart as it turns out!) Remembering that old Delta
              timetable that I had gotten on my visit to O&apos;Hare all those
              years ago, I asked Bob if he had any other timetables in his
              collection that featured the 1964/1965 New York World&apos;s Fair.
              What he presents for you here is a colorful and interesting piece
              of World&apos;s Fair history and I&apos;d like to thank him for
              this wonderful contribution.
            </p>

            <p>
              Expecting to draw some 70 million visitors, the 1964/1965 New York
              World&apos;s Fair was seen as a business bonanza by America&apos;s
              airlines and they promoted the Fair heavily. In an era of
              regulated air fares flying was relatively expensive and a means of
              travel mainly for the well-to-do and well-heeled businessman. The
              Fair presented the airlines with a golden opportunity to expand
              their business in the leisure market with the millions who would
              be coming to New York for the Fair. With the advent of the Boeing
              727 in 1964 pure jet travel was becoming available in more and
              more American cities and the Fair was a great reason to try one of
              these brand new jets and fly to New York for a combined air/Fair
              adventure.
            </p>

            <figure className={styles.centerFigure}>
              <Image
                src="/images/airlines01/eastern04.jpg"
                alt="Eastern 1964 advertisement"
                width={221}
                height={140}
                className={styles.centerPhoto}
                unoptimized
              />
            </figure>

            <p>
              Out at Flushing Meadows, TWA, Pan American, and United Air Lines
              hosted exhibits in the Transportation &amp; Travel Pavilion.
              Eastern Air Lines had their own on-site waiting lounge with bus
              transportation to and from the Fair and LaGuardia and Kennedy
              Airports. For a real Space Age treat, TWA offered frequent
              helicopter service from the Port Authority Heliport at the Fair to
              their brand new Eero Saarinen designed <em>Flight Center</em> at
              JFK. International airlines KLM (Dutch) and SAS (Scandinavian)
              hosted exhibits at the Fair as well.
            </p>

            <p>
              These and other airlines poured hundreds of thousands of dollars
              into promoting the Fair with counter displays, in-flight magazine
              stories, newspaper and television ads, <em>and</em> those good old
              timetables. On the following pages you&apos;ll see some examples
              of how America&apos;s airlines said &quot;Come to the Fair!&quot;
            </p>

            <div className={styles.timetableRow}>
              <Image
                src="/images/airlines01/airlines31.jpg"
                alt="Mohawk Timetable"
                width={172}
                height={394}
                className={styles.timetablePhoto}
                unoptimized
              />
              <div className={styles.timetableCopy}>
                <p>
                  <strong>Mohawk Airlines</strong>, an East Coast regional
                  carrier of the era, placed Unisphere of the cover of their May
                  1, 1964 Timetable!
                </p>
                <p className={styles.source}>Source: online auction</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlinesoverview"
        explicitPrevious
        nextHref="/airlines02"
      />
    </>
  );
}
