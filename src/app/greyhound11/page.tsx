import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Glide-a-Rides and Tours — Greyhound — nywf64.com",
  description:
    "Greyhound Glide-a-Ride local transit and area tours at the 1964/1965 New York World’s Fair on nywf64.com.",
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

const PAMPHLET_MAP_SOURCE = (
  <>
    SOURCE: Maps, Greyhound at the Fair Pamphlet,{" "}
    <em>How to See the New York World&apos;s Fair</em>
  </>
);

const BOARDING_COPY = (
  <>
    Passengers may board at any of the marked stops, pay the fare to the
    conductor, if they have not previously purchased tickets from uniformed
    Roving Salesmen, ride through the tour and depart at the same stop.
  </>
);

/**
 * Greyhound — Glide-a-Rides and Tours.
 * Body from legacy greyhound11.html.
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Greyhound11Page() {
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

      <article className={styles.article} aria-labelledby="greyhound11-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound11-title" className={styles.titleBarMain}>
            Glide-a-Rides and Tours
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Photo
            src="/images/greyhound11/greyhound19.jpg"
            alt="Glide-a-Ride"
            width={600}
            height={341}
            caption="A Greyhound Glide-a-Ride"
          />

          <p>
            Over 300 new vehicles of 4 different kinds, all especially and
            uniquely designed for this Fair, will be operated in a wide variety
            of services, as briefly summarized below.
          </p>

          <p>
            <span className={styles.areaTitle}>GLIDE-A-RIDE:</span>
          </p>
          <p>
            This is a sixty-passenger, three-coach, open-air tractor-train
            running on rubber tires. Gleaming white with comfortable golden
            contour seats, they may be entered and left at the seat rows which
            are separated by ample spacing and a center aisle. Here again, the
            Fair-goer is provided with a unique, modern conveyance especially
            created for this great Fair. It will be operated in several kinds of
            services designed for flexibility in mass transportation as listed
            here.
          </p>

          <p>
            <span className={styles.areaTitle}>
              Glide-a-ride Local Transit Service
            </span>
          </p>
          <p>
            This is a non-lectured transportation service over two main routes,
            (1) between the East and West extremities and, (2) between the North
            and South extremities of the grounds. Each main route, in turn,
            consists of a &quot;going&quot; and &quot;returning&quot; route over
            which clockwise and counter-clockwise schedules will be operated.
          </p>
          <p>
            The passenger may board at any of the several marked stops and leave
            at any other stop intermediate to the end of the line in the
            direction of travel.
          </p>
          <p>
            The fare is the same, 25c, for stop-to-stop or cross-grounds travel
            in one direction. A conductor on the vehicle collects the fares and
            announces the stops.
          </p>
          <p>
            White and green flags on the equipment distinguish these
            &quot;step-on, step-off&quot; vehicles from the Glide-a-rides used
            on the Area tours which travel over parts of the same routes.
          </p>

          <Photo
            src="/images/greyhound11/greyhound22.jpg"
            alt="Glide-a-Ride Interior Routes"
            width={600}
            height={827}
            bordered={false}
            source={PAMPHLET_MAP_SOURCE}
          />

          <Photo
            src="/images/greyhound11/greyhound20.jpg"
            alt="Glide-a-Ride"
            width={600}
            height={240}
            caption="Closer view of a Glide-a-Ride Tractor and Coach Car"
            source="SOURCE: Greyhound Corporation, New York World's Fair Marketing Information Letter No. 2, September 13, 1963"
          />

          <p>
            <span className={styles.areaTitle}>Glide-a-ride Area Tours</span>
          </p>
          <p>
            By design, the Fair divides into the Industrial Area, the
            International Area, the Federal-States Area, the Transportation
            Area, and the Lake Amusement Area, with the principal
            characteristics of exhibits or activities having determined their
            general locations. Glide-a-ride lectured tours have been created to
            traverse the streets of these respective areas or combinations of
            them as listed below.
          </p>

          <p>
            <span className={styles.areaTitle}>Area Tour &quot;A&quot;</span>
          </p>
          <p>
            This is a lectured tour that passes through the International Area,
            circles the Lake Amusement Area, and skirts the Industrial Area.
          </p>
          <p>
            It is about 45 minutes in duration, and the fare is $1.00 for adults
            and 50c for children over 2 and under 12.
          </p>
          <p>{BOARDING_COPY}</p>
          <p>
            Yellow flags on this equipment distinguish the Glide-a-rides used in
            this service from others that travel parts of the same route.
          </p>

          <Photo
            src="/images/greyhound11/greyhound25.jpg"
            alt={'Glide-a-Ride Tour "A"'}
            width={600}
            height={579}
            bordered={false}
            source={PAMPHLET_MAP_SOURCE}
          />

          <p>
            <span className={styles.areaTitle}>Area Tour &quot;B&quot;</span>
          </p>
          <p>
            Although primarily a lectured tour of the Industrial Area, it also
            passes through a part of the International Area.
          </p>
          <p>
            It is about 30 minutes in duration and the fare is 75c for adults
            and 50c for children over 2 and under 12.
          </p>
          <p>{BOARDING_COPY}</p>
          <p>
            Blue flags on this equipment distinguish the Glide-a-rides used in
            this service from others that travel parts of the same route.
          </p>

          <Photo
            src="/images/greyhound11/greyhound23.jpg"
            alt={'Glide-a-Ride Tour "B"'}
            width={413}
            height={537}
            bordered={false}
            source={PAMPHLET_MAP_SOURCE}
          />

          <p>
            <span className={styles.areaTitle}>Area Tour &quot;C&quot;</span>
          </p>
          <p>
            This is primarily a lectured tour of the Transportation Area but,
            also, passes through certain streets of the Federal-States Area.
          </p>
          <p>
            It is about 30 minutes in duration and the fare is 75c for adults
            and 50c for children over 2 and under 12.
          </p>
          <p>{BOARDING_COPY}</p>
          <p>
            Red flags on this equipment distinguish the Glide-a-rides used in
            this service from others that travel parts of the same route.
          </p>

          <Photo
            src="/images/greyhound11/greyhound24.jpg"
            alt={'Glide-a-Ride Tour "C"'}
            width={414}
            height={620}
            bordered={false}
            source={PAMPHLET_MAP_SOURCE}
          />

          <hr className={styles.sectionRule} />

          <Photo
            src="/images/greyhound11/greyhound28.jpg"
            alt="Glide-a-Ride Postcard"
            width={300}
            height={191}
            caption={
              <>
                <strong>GLIDE-A-RIDE</strong>
                <br />
                <strong>Trains with Rocket Thrower in Background</strong>
                <br />
                These tractor-powered &quot;Glide-a-ride&quot; trains offer
                service across the fairgrounds, either east and west or north
                and south. White (for north-and-south service) and green
                (east-west) flags distinguish these shuttles from similar trains
                serving sightseers. The sightseeing trips run from 30 to 45
                minutes duration. Each features a recorded lecture.
              </>
            }
            source="Source: Official Postcard by Dexter Press, West Nyack, NY"
          />

          <hr className={styles.sectionRule} />

          <Photo
            src="/images/greyhound11/greyhound32.jpg"
            alt="Glide-a-Ride Coupon"
            width={400}
            height={544}
          />

          <hr className={styles.sectionRule} />

          <p className={styles.collectibleHead}>
            One of the most famous (and pricey) collectibles of the Fair:
            <br />
            the Glide-A-Ride Friction Toy
          </p>

          <Photo
            src="/images/greyhound11/greyhound29.jpg"
            alt="Friction Toy box"
            width={250}
            height={110}
          />
          <Photo
            src="/images/greyhound11/greyhound30.jpg"
            alt="Friction Toy side view"
            width={250}
            height={103}
          />
          <Photo
            src="/images/greyhound11/greyhound31.jpg"
            alt="Friction Toy front view"
            width={250}
            height={140}
            source="Source: eBay Auction #421639431, ending September 1, 2000 17:39:03 PDT"
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound10"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound12"
      />
    </>
  );
}
