import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "Allegheny Airlines — Airlines & The Fair — nywf64.com",
  description:
    "Allegheny Airlines timetable and ticket jacket promoting the 1964 New York World’s Fair — on nywf64.com.",
};

/**
 * Airlines feature page 4 (legacy airlines05.html remapped to /airlines04).
 * Stack: hero → Airlines nav (Page 5) → navy title bar → article → nav2
 * PREVIOUS → /airlines03; NEXT → /airlines05
 */
export default function Airlines04Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines04-title">
        <header className={styles.titleBar}>
          <h1 id="airlines04-title" className={styles.titleBarMain}>
            Allegheny Airlines
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.carrierRow}>
            <div>
              <Image
                src="/images/airlines04/airlines09.jpg"
                alt="Timetable Cover"
                width={215}
                height={480}
                className={styles.carrierCover}
                unoptimized
              />
              <p className={styles.source}>
                SOURCE: <em>Allegheny</em> timetable, March, 1964, Bob Esler
                Collection
              </p>
            </div>
            <div className={styles.twaCopy}>
              <p>
                Today&apos;s giant US Airways had humble origins in Allegheny
                Airlines. The majority of Fair visitors would come from East
                Coast cities, the market Allegheny primarily served. This
                regional carrier, known fondly to its customers as &quot;Agony
                Air,&quot; promoted the Fair just like the national carriers.
              </p>
              <p>
                This timetable from March of 1964 prominently features the
                Unisphere and the Fair. Page 8 of the timetable contains
                Allegheny&apos;s schedules into and out of New York and is
                captioned:
              </p>
              <p className={styles.alleghenyQuote}>
                The New York World&apos;s Fair opens on April 22, 1964. Spend
                more time at the Fair ... not just getting there. Fly Allegheny,
                your Flight Gate to New York.
              </p>
            </div>
          </div>

          <div className={styles.twaCopy}>
            <p>
              New York fares aren&apos;t shown, but a ticket from Philly to
              Pittsburgh would set you back about 20 1964 bucks.
            </p>
          </div>
          <p className={styles.alleghenyQuote}>
            Get your friends together and fly to the World&apos;s Fair. Ten or
            more can save up to 33 1/3% on the round trip fare.
          </p>
          <p className={styles.alleghenyQuote}>
            Fly to the World&apos;s Fair on either Saturday or Sunday, return
            the same day, and save 37 1/2%. All you need is a round trip
            reservation.
          </p>

          <div className={styles.jacketPair}>
            <Image
              src="/images/airlines04/airlines40.jpg"
              alt="Ticket Jacket Front"
              width={250}
              height={556}
              className={styles.jacketPhoto}
              unoptimized
            />
            <Image
              src="/images/airlines04/airlines41.jpg"
              alt="Ticket Jacket Back"
              width={250}
              height={573}
              className={styles.jacketPhoto}
              unoptimized
            />
          </div>
          <p className={styles.jacketCaption}>
            Allegheny Airlines Ticket Jacket (Front &amp; Back)
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlines03"
        explicitPrevious
        nextHref="/airlines05"
      />
    </>
  );
}
