import type { Metadata } from "next";
import Image from "next/image";
import { LegaciesNavChrome } from "@/components/LegaciesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./legacies05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Glide-a-Rides — The Fair that Survived — nywf64.com",
  description:
    "Greyhound Glide-a-Ride trains from the 1964/1965 New York World’s Fair at the Erie County Fairgrounds, plus Expo 67 trains and the Glide-A-Ride friction toy — on nywf64.com.",
};

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const ERIE_PHOTOS: Photo[] = [
  {
    src: "/images/legacies05/legacy31.jpg",
    width: 300,
    height: 202,
    alt: "Greyhound Glide-A-Ride train at Erie County Fairgrounds",
  },
  {
    src: "/images/legacies05/legacy32.jpg",
    width: 200,
    height: 300,
    alt: "Greyhound Glide-A-Ride train at Erie County Fairgrounds",
  },
  {
    src: "/images/legacies05/legacy33.jpg",
    width: 197,
    height: 300,
    alt: "Greyhound Glide-A-Ride train at Erie County Fairgrounds",
  },
  {
    src: "/images/legacies05/legacy34.jpg",
    width: 198,
    height: 300,
    alt: "Greyhound Glide-A-Ride train at Erie County Fairgrounds",
  },
  {
    src: "/images/legacies05/legacy35.jpg",
    width: 300,
    height: 203,
    alt: "Greyhound Glide-A-Ride train at Erie County Fairgrounds",
  },
  {
    src: "/images/legacies05/legacy36.jpg",
    width: 300,
    height: 205,
    alt: "Greyhound Glide-A-Ride train at Erie County Fairgrounds",
  },
  {
    src: "/images/legacies05/legacy37.jpg",
    width: 300,
    height: 202,
    alt: "Greyhound Glide-A-Ride train at Erie County Fairgrounds",
  },
];

const TOY_PHOTOS: Photo[] = [
  {
    src: "/images/legacies05/greyhound29.jpg",
    width: 250,
    height: 110,
    alt: "Glide-A-Ride friction toy",
  },
  {
    src: "/images/legacies05/greyhound30.jpg",
    width: 250,
    height: 103,
    alt: "Glide-A-Ride friction toy packaging",
  },
  {
    src: "/images/legacies05/greyhound31.jpg",
    width: 250,
    height: 140,
    alt: "Glide-A-Ride friction toy",
  },
];

const EXPO_PHOTOS: Photo[] = [
  {
    src: "/images/legacies05/legacy38.jpg",
    width: 300,
    height: 201,
    alt: "Expo 67 Glide-a-Ride train",
  },
  {
    src: "/images/legacies05/legacy39.jpg",
    width: 300,
    height: 198,
    alt: "Expo 67 Glide-a-Ride train",
  },
];

/**
 * The Fair that Survived — Glide-a-Rides.
 * Body from legacy legacies06.html (Page 5 after overview).
 *
 * Stack: legacieshero → LegaciesNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Legacies05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="The Fair that Survived">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/legacies/legacieshero.jpg"
            alt="The Fair that Survived — legacies of the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LegaciesNavChrome />

      <article className={styles.article} aria-labelledby="legacies05-title">
        <header className={styles.titleBar}>
          <h1 id="legacies05-title" className={styles.titleBarMain}>
            Glide-a-Rides
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.placeHead}>
            at the Erie County Fairgrounds, Hamburg, NY
          </p>
          <p className={styles.dateLine}>August 22, 2000</p>

          <p className={styles.body}>
            [Here are] seven pictures of the Greyhound Glide-A-Ride trains
            currently resting at the Erie County Fairgrounds in Hamburg, New
            York outside of Buffalo. I have also included two pictures of a
            train set used during Expo67 in Montreal.
          </p>
          <p className={styles.body}>
            I am looking into the history of the ride after it arrived in
            Buffalo. I have heard that for a few years after 1965, it still used
            the glide-A-Ride logo and name.
          </p>
          <p className={styles.body}>
            As mentioned before, these unique relics are in their final days of
            being used by the fair and will most likely meet an un-ceremonial
            demise. I hope that one of the New York World&apos;s Fair collectors
            can work on saving this set for future use. It would be great to see
            a restored Glide-A-Ride traversing Flushing Meadows and conducting
            retro tours of the site.
          </p>
          <p className={styles.signoff}>
            Martin Biniasz
            <br />
            August 22, 2000
          </p>

          {ERIE_PHOTOS.map((photo) => (
            <figure key={photo.src} className={styles.figure}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={styles.photo}
                unoptimized
              />
            </figure>
          ))}
          <p className={styles.source}>
            SOURCE: All photographs courtesy Martin Biniasz, © Copyright 2000,
            All Rights Reserved
          </p>

          <p className={styles.sectionLabel}>GLIDE-A-RIDE</p>
          <p className={styles.sectionSub}>
            Trains with Rocket Thrower in Background
          </p>
          <p className={styles.body}>
            These tractor-powered &quot;Glide-a-ride&quot; trains offer service
            across the fairgrounds, either east and west or north and south.
            White (for north-and-south service) and green (east-west) flags
            distinguish these shuttles from similar trains serving sightseers.
            The sightseeing trips run from 30 to 45 minutes duration. Each
            features a recorded lecture.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies05/greyhound28.jpg"
              alt="Official postcard of Glide-a-Ride trains with Rocket Thrower"
              width={300}
              height={191}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.source}>
              SOURCE: Official Postcard by Dexter Press, West Nyack, NY
            </p>
          </figure>

          <p className={styles.toyLead}>
            One of the most famous (and pricey) collectibles of the Fair:
            <br />
            the Glide-A-Ride Friction Toy
          </p>
          {TOY_PHOTOS.map((photo) => (
            <figure key={photo.src} className={styles.figure}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={styles.photo}
                unoptimized
              />
            </figure>
          ))}
          <p className={styles.source}>
            SOURCE: eBay Auction #421639431, ending September 1, 2000 17:39:03
            PDT
          </p>

          {EXPO_PHOTOS.map((photo) => (
            <figure key={photo.src} className={styles.figure}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={styles.photo}
                unoptimized
              />
            </figure>
          ))}
          <p className={styles.caption}>
            Glide-a-Rides from that &quot;other&quot; Fair: Expo67
          </p>
          <p className={styles.source}>
            SOURCE: All photographs courtesy Martin Biniasz, © Copyright 2000,
            All Rights Reserved
          </p>

          <p className={styles.webmaster}>
            webmaster&apos;s note: Thanks to Marty Biniasz for taking and
            submitting the photos of the Glide-a-Rides to nywf64.com!
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/legacies04"
        explicitPrevious
        overviewHref="/legaciesoverview"
        nextHref="/legaciesoverview"
      />
    </>
  );
}
