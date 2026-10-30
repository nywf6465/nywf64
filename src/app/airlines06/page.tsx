import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "Eastern Air Lines — Airlines & The Fair — nywf64.com",
  description:
    "Eastern Air Lines pavilion, April 1964 timetable ad, and Fair promotional ruler — on nywf64.com.",
};

/**
 * Airlines feature page 6 (legacy airlines07.html remapped to /airlines06).
 * Stack: hero → Airlines nav (Page 7) → navy title bar → article → nav2
 * PREVIOUS → /airlines05; NEXT → /airlines07
 */
export default function Airlines06Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines06-title">
        <header className={styles.titleBar}>
          <h1 id="airlines06-title" className={styles.titleBarMain}>
            Eastern Air Lines
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.carrierRow}>
            <Image
              src="/images/airlines06/airlines15.jpg"
              alt="Timetable Cover"
              width={210}
              height={480}
              className={styles.carrierCover}
              unoptimized
            />
            <div className={styles.easternCopy}>
              <p>
                The only airline to actually construct their own pavilion at the
                Fair -- a customer waiting lounge and Hospitality Center -- was
                Eastern Air Lines. Passengers could catch busses to and from
                Eastern&apos;s terminals at LaGuardia and JFK and their
                World&apos;s Fair Center.
              </p>
              <p>
                The Fair in 1965 gave Eastern the opportunity to launch a whole
                &quot;new look.&quot; 1964 would be the last year they would use
                the &quot;Golden Falcon&quot; as their corporate symbol. This was
                the Space Age afterall and it was time to retire that old bird!
                Soon aqua and deep purple ribbons would adorn the tails of their
                aircraft and a stylized figure representing &quot;The Wings of
                Man&quot; would become the symbol of Eastern for the rest of its
                life. In just a few years, a genuine astronaut, Frank Borman,
                would head the company.
              </p>
              <p>
                This timetable from April 1964 opens to a full page
                advertisement for the Fair and Eastern&apos;s pavilion.
              </p>
            </div>
          </div>

          <div className={styles.easternAdBlock}>
            <p className={styles.easternAdTitle}>Come have fun at the Fair</p>
            <p className={styles.easternAdBody}>
              Start your tour of the Fair at the Eastern Air Lines Terminal
              Building - one of the 9 official entrances to the grounds.
              You&apos;ll get there by Eastern&apos;s special bus - direct from
              the airport.* And once there, Eastern&apos;s facilities will make
              everything easier. You&apos;ll find lockers for baggage ... rest
              rooms ... lounges for relaxation ... information on the Fair ...
              and informtion to travel to any place in the world. This is your
              year for fun at the Fair - and elsewhere. Call your Travel Agent
              or Eastern Air Lines.
            </p>
            <p className={styles.easternAdNote}>
              *Kennedy International and LaGuardia Airports
            </p>
            <Image
              src="/images/airlines06/airlines16.jpg"
              alt="Timetable Advertisement"
              width={480}
              height={305}
              className={styles.easternAdPhoto}
              unoptimized
            />
          </div>
          <p className={styles.sourceLeft}>
            SOURCE: <em>Eastern</em> timetable, April, 1964, Bob Esler
            Collection
          </p>

          <p className={styles.rulerCaption}>
            This <em>Eastern</em> ruler is a promotional give-away advertising
            the Fair.
          </p>
          <figure className={styles.rulerFigure}>
            <Image
              src="/images/airlines06/airlines17.jpg"
              alt="Ruler"
              width={480}
              height={66}
              className={styles.rulerPhoto}
              unoptimized
            />
          </figure>

          <div className={styles.easternCopy}>
            <p>
              Eastern proudly billed themselves as &quot;THE WORLD&apos;S F
              <strong>AIR LINE</strong>
              .&quot; Typical one-way fares in 1964 between Atlanta and New York
              on Eastern were $62 for First Class{" "}
              <em>Golden Falcon Service</em> and $49 Coach. The Eastern Miami to
              New York route sold for $96 First Class and $73 Coach.
            </p>
          </div>

          <hr className={styles.rule} />

          <div className={styles.pavilionRow}>
            <Image
              src="/images/airlines06/eastern02.jpg"
              alt="Eastern Pavilion"
              width={150}
              height={100}
              className={styles.pavilionThumb}
              unoptimized
            />
            <p className={styles.pavilionCopy}>
              If you&apos;d like to find out more about Eastern&apos;s
              participation in the Fair, please see our Feature on the{" "}
              <Link href="/easternoverview">Eastern Air Lines Pavilion</Link>.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlines05"
        explicitPrevious
        nextHref="/airlines07"
      />
    </>
  );
}
