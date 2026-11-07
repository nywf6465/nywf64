import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "Northwest Orient Airlines — Airlines & The Fair — nywf64.com",
  description:
    "Northwest Orient Airlines timetable and Fair promotion from Bob Esler’s collection — on nywf64.com.",
};

/**
 * Airlines feature page 2 (legacy airlines03.html remapped to /airlines02).
 * Stack: hero → Airlines nav (Page 3) → navy title bar → article → nav2
 * PREVIOUS → /airlines01; NEXT → /airlines03
 */
export default function Airlines02Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines02-title">
        <header className={styles.titleBar}>
          <h1 id="airlines02-title" className={styles.titleBarMain}>
            Northwest Orient Airlines
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.carrierRow}>
            <Image
              src="/images/airlines02/airlines02.jpg"
              alt="Timetable Cover"
              width={213}
              height={480}
              className={styles.carrierCover}
              unoptimized
            />
            <div className={styles.carrierCopy}>
              <Image
                src="/images/airlines02/airlines03.jpg"
                alt="Northwest Route Map"
                width={255}
                height={136}
                className={styles.carrierMap}
                unoptimized
              />
              <p>
                In 1964, Northwest Airlines was far from the globe-girdling
                giant that it is today as this route map shows. Considered a
                trunk carrier, it was a major player in the New
                York/Midwest/Pacific Northwest/Far East market. Northwest hosted
                an exhibit at the Seattle World&apos;s Fair in 1962 but chose
                not to participate in the New York Fair. Nevertheless, they did
                promote the Fair as this handsome timetable from August of 1964
                shows. A typical one-way fare on Northwest from Milwaukee to New
                York would cost between $36 and $52, depending if one chose
                Coach or First Class <em>Regal Imperial Service</em>. Northwest
                featured <em>one</em> daily non-stop between JFK and Seattle.
                But most Fairgoers boarding in Seattle could experience as many
                as four stops before arriving in New York and some flights on
                the route still featured piston powered aircraft!
              </p>
            </div>
          </div>

          <p className={styles.note}>
            [NOTE: Throughout this{" "}
            <span className={styles.brandNy}>nywf</span>
            <span className={styles.brandWf}>64</span>
            <span className={styles.brandCom}>.com</span> Feature you&apos;ll
            see fares quoted in <em>1964</em> dollars. Multiply them by 5.7 and
            the result will be roughly today&apos;s equivalent adjusted for
            inflation. You&apos;ll soon see that travel today is a true bargain,
            especially on long-haul routes!]
          </p>

          <p className={styles.sourceCenter}>
            Source: <em>Northwest Orient Airlines</em> timetable, August, 1964,
            Bob Esler Collection
          </p>

          <div className={styles.adRow}>
            <Image
              src="/images/airlines02/airlines04.jpg"
              alt="Timetable Advertisement"
              width={247}
              height={480}
              className={styles.adPhoto}
              unoptimized
            />
            <div className={styles.adCopy}>
              <p className={styles.adHeadline}>
                Go by <u>air</u>
                <br />
                to the World&apos;s Fair
                <br />
                via Northwest
                <br />
                Orient Airlines
              </p>
              <div className={styles.adBody}>
                <p>
                  140 flights a week arriving in
                  <br />
                  New York/Newark.
                </p>
                <p>
                  Wide choice of service - including
                  <br />
                  Fan-Jets and Jet-Props.
                </p>
                <p>
                  Tailormade Fair tours - for two
                  <br />
                  people or large groups. You get
                  <br />
                  everything in one neat package . . .
                  <br />
                  air fare, hotel, tickets to the Fair,
                  <br />
                  plus such things as transportation to
                  <br />
                  and from the Fairgrounds, tickets to
                  <br />
                  a Broadway show, a boat cruise
                  <br />
                  around Manhattan - and much more!
                </p>
                <p>
                  See your travel agent or Northwest
                  <br />
                  for expert help in planning your trip
                  <br />
                  to the 1964 Worlds&apos; Fair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlines01"
        explicitPrevious
        nextHref="/airlines03"
      />
    </>
  );
}
