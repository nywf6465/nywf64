import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Escorters — Greyhound — nywf64.com",
  description:
    "Greyhound Escorter private sightseeing cars at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function Photo({
  src,
  alt,
  width,
  height,
  caption,
  source,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  source?: ReactNode;
}) {
  return (
    <figure className={styles.figure}>
      <span className={styles.photoFrame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.photoImg}
          unoptimized
        />
      </span>
      {caption ? (
        <figcaption className={styles.caption}>{caption}</figcaption>
      ) : null}
      {source ? <p className={styles.source}>{source}</p> : null}
    </figure>
  );
}

const COTTER_SOURCE = (
  <>
    SOURCE: Both photos: Presented courtesy Bill Cotter collection © 2010 Bill
    Cotter, All Rights Reserved. See more images from Bill&apos;s{" "}
    <u>fabulous</u> collection of World&apos;s Fair photographs at his website{" "}
    <a
      href="http://www.worldsfairphotos.com/"
      target="_blank"
      rel="noreferrer"
    >
      WorldsFairPhotos.com
    </a>
    .
  </>
);

/**
 * Greyhound — Escorters.
 * Body from legacy greyhound12.html (Marketing Letter No. 2 + Bill Cotter photos).
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Greyhound12Page() {
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

      <article className={styles.article} aria-labelledby="greyhound12-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound12-title" className={styles.titleBarMain}>
            Escorters
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Photo
            src="/images/greyhound12/greyhound21.jpg"
            alt="Greyhound Escorter"
            width={600}
            height={416}
            caption="A Greyhound World's Fair Escorter for the Discriminating Fair-goer!"
            source="SOURCE: Greyhound Corporation, New York World's Fair Marketing Information Letter No. 2, September 13, 1963"
          />

          <p>
            Over 300 new vehicles of 4 different kinds, all especially and
            uniquely designed for this Fair, will be operated in a wide variety
            of services, as briefly summarized below.
          </p>

          <p>
            <span className={styles.areaTitle}>ESCORTER SERVICE:</span>
          </p>
          <p>
            For the more discriminating Fair-goer who wants privacy and
            personalized service, the open-air and freedom from fixed-route
            travel, the Escorter is the complete answer to his demands.
          </p>
          <p>
            New as tomorrow&apos;s newspaper, this vehicle was especially
            designed for this World&apos;s Fair! It seats up to four sight-seers
            comfortably placed right up front where no obstruction can ever
            interfere with the view. Behind them sits the smartly uniformed,
            highly trained and informed driver-guide, who tells his guests what
            they are seeing. They can dictate their own route, let the driver
            suggest it, or choose one of several available pre-planned tours.
            Roadways and walkways not available to the other vehicles may be
            used by the Escorter.
          </p>
          <p>
            The vehicle may be engaged as a taxi on a meter basis, or by the
            hour or day, and its cost will be $9.00 per hour for two passengers,
            with a surcharge of $1.00 for each additional passenger up to four
            (surcharge applies on the first hour only). The Escorter may be used
            for 20 minutes at a minimum charge of $3.00 for 2 passengers. For
            eight (8) consecutive hours a special rate of $70.00 for the vehicle
            and driver-guide will apply. Long term leases for a month, one
            season, or both seasons are available by special arrangements.
          </p>

          <hr className={styles.sectionRule} />

          <Photo
            src="/images/greyhound12/greyhound26.jpg"
            alt="Escorter with Guide"
            width={400}
            height={266}
            caption={
              <span className={styles.captionEm}>
                (Top) Smartly attired guide awaits an Escorter fare at the Fair.
                (Bottom) Lucky group of Fairgoers tour the grounds in a Greyhound
                Escorter.
              </span>
            }
          />
          <Photo
            src="/images/greyhound12/greyhound27.jpg"
            alt="Escorter with Group"
            width={400}
            height={274}
            source={COTTER_SOURCE}
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound11"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound13"
      />
    </>
  );
}
