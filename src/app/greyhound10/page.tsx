import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Buses and Tours — Greyhound — nywf64.com",
  description:
    "Greyhound Rapid Transit and sightseeing bus tours at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function Photo({
  src,
  alt,
  width,
  height,
  caption,
  source,
  bordered = true,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  source?: ReactNode;
  bordered?: boolean;
}) {
  return (
    <figure className={styles.figure}>
      <span className={bordered ? styles.photoFrame : styles.photoFramePlain}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.photoImg}
          unoptimized
        />
      </span>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
      {source ? <p className={styles.source}>{source}</p> : null}
    </figure>
  );
}

/**
 * Greyhound — Buses and Tours.
 * Body from legacy greyhound10.html. Navy title uses “Buses and Tours”
 * (menu label is “Buses & Tours”).
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Greyhound10Page() {
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

      <article className={styles.article} aria-labelledby="greyhound10-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound10-title" className={styles.titleBarMain}>
            Buses and Tours
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Photo
            src="/images/greyhound10/greyhound15.jpg"
            alt="Perimeter Bus"
            width={600}
            height={268}
            bordered={false}
            caption="Rapid Transit Perimeter Bus"
          />

          <p>
            Over 300 new vehicles of 4 different kinds, all especially and
            uniquely designed for this Fair, will be operated in a wide variety
            of services, as briefly summarized below.
          </p>

          <p>
            <span className={styles.areaTitle}>RAPID TRANSIT BUS SERVICE:</span>
          </p>
          <p>
            This service, operated with new air-conditioned transit buses having
            air suspension and picture windows, will provide a quick method of
            moving between widely separated areas of the Fair.
          </p>
          <p>
            The route is over the perimeter roadway that passes all of the 8
            public admission gates to the grounds. Service is clockwise and
            counter clockwise, affording time-saving movement between the 35
            stations at the gates and intermediate points.
          </p>
          <p>
            These sheltered stations are equipped with directional data, maps of
            the grounds and money changing devices.
          </p>
          <p>
            Service will be as frequent in both directions as traffic demands
            and the fare will be 25c with the passenger boarding at any station
            and alighting at any other on a continuous ride not to exceed the
            circumference of the grounds.
          </p>
          <p>
            This is not a sightseeing service so no lecture is provided. About
            one half hour is required to circle the grounds on this service.
          </p>

          <Photo
            src="/images/greyhound10/greyhound16.jpg"
            alt="Perimeter Route - Transit Bus"
            width={600}
            height={617}
            bordered={false}
            source={
              <>
                SOURCE: Maps, Greyhound at the Fair Pamphlet,{" "}
                <em>How to See the New York World&apos;s Fair</em>
              </>
            }
          />

          <Photo
            src="/images/greyhound10/greyhound14.jpg"
            alt="Artist's Rendering of Sheltered Station"
            width={600}
            height={354}
            caption="Artist's rendering of Rapid Transit Sheltered Station Located at Each of the 8 Admission Gates"
          />

          <p>
            <span className={styles.areaTitle}>SIGHTSEEING BUS SERVICE:</span>
          </p>
          <p>
            This is the Grand Tour of the grounds and truly a deluxe service,
            recommended as the Fair-goers&apos; most logical introduction to this
            fantastic world event.
          </p>
          <p>
            The finest and newest buses built, air-conditioned, glass roofed and
            equipped with rest room and upholstered reclining seats, will take
            the sightseer on a complete tour of the grounds. It is about one and
            a half hours in length and passes all of the major exhibits located
            on the 8 miles of roadway available to these buses. This is a
            lectured tour with a coordinated description of the sights to be
            seen and the highlights of exhibit content.
          </p>
          <p>
            Fair-goers may board at stations adjacent to any one of the 8
            entrance gates, enjoy the tour and depart upon return to the same
            station. Tickets may be purchased from roving salesmen at all points
            at a cost of $3.00 for adults and $1.50 for children under 12.
          </p>
          <p>
            Every passenger is assured of a comfortable seat as no standing or
            crowding will be permitted. Departures will be as frequent from each
            station as the traffic demands.
          </p>

          <Photo
            src="/images/greyhound10/greyhound18.jpg"
            alt="Sightseeing Tour"
            width={600}
            height={681}
            bordered={false}
            source={
              <>
                SOURCE: Maps, Greyhound at the Fair Pamphlet,{" "}
                <em>How to See the New York World&apos;s Fair</em>
              </>
            }
          />

          <Photo
            src="/images/greyhound10/greyhound13.jpg"
            alt="Sightseeing Bus"
            width={600}
            height={262}
            bordered={false}
            caption="Sightseeing Bus"
            source="SOURCE: Greyhound Corporation, New York World's Fair Marketing Information Letter No. 2, September 13, 1963"
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound09"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound11"
      />
    </>
  );
}
