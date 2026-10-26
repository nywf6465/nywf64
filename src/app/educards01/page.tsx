import type { Metadata } from "next";
import Image from "next/image";
import { EducardsHero } from "@/components/EducardsHero";
import { EducardsNavChrome } from "@/components/EducardsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./educards01.module.css";

export const metadata: Metadata = {
  title:
    "Official Souvenir Flash Card Set — The “Edu-Cards” Set — nywf64.com",
  description:
    "ED-U-Cards Official Souvenir Flash Card Set of the 1964/1965 New York World’s Fair — courtesy of the Al Soltesz and Steve Perley collections on nywf64.com.",
};

type FlashCardEntry = {
  photo: { src: string; width: number; height: number; alt: string };
  titleLines: string[];
  paragraphs: string[];
  /** Legacy ALIGN for the photo block within the tan tray. */
  photoAlign: "left" | "right";
};

const ENTRIES: FlashCardEntry[] = [
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards01/7up.jpg",
      width: 300,
      height: 179,
      alt: "7-Up Gardens",
    },
    titleLines: ["7-Up International", "Sandwich", "Gardens"],
    paragraphs: [
      "This oasis at the heart of the Fair is identified from afar by its graceful 107-foot clock tower. As visitors approach, the truly international nature of these unique gardens is revealed. Soil transported from the 57 foreign lands where 7-Up is bottled, supports shrubs, flowers and trees landscaping the pavilion. Sandwiches created by the Brass Rail from a world-wide collection of authentic recipes are served.",
      "Sitting in the shade of the airy shells, guests are charmed as one after another of the four sparkling fountains are transformed into stages-in-the-round featuring international performers! These performers are engaged by John Krimsky, manager-producer of the Strollers Theater-Club, New York.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards01/amerisra.jpg",
      width: 300,
      height: 180,
      alt: "American-Israel Pavilion",
    },
    titleLines: ["American-", "Israel", "Pavilion"],
    paragraphs: [
      "The American-Israel Pavilion, rising like a spiral to a height of 45 feet, with a facade of African redwood mahogany, an entrance with stones and boulders from Jerusalem and King Solomon's Mines and a wall with the symbols of the Twelve Tribes of Israel, embodies the culture and history of the land in its natural surroundings.",
      'Its exhibits will depict the history and culture of the Jewish people in relation to the Holy Land, the era of the Old Testament and the Old Testament itself. The main exhibit will take you through 4,000 years of history. You will get the feeling of "being there", starting with a walk through the streets of Biblical City and seeing the rich and varied past of the Holy Land.',
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards01/amf.jpg",
      width: 300,
      height: 153,
      alt: "A.M.F. Monorail",
    },
    titleLines: ["The", "World's Fair", "Monorail"],
    paragraphs: [
      "The AMF Monorail ride at the New York World's Fair provides Fair-goers with an exciting new experience in modern transportation. While riding in silent, air-conditioned comfort three stories above the ground, passengers are able to see many of the colorful exhibits during the eight minute trip. Seven two-car trains continually and automatically pick up and discharge some 50,000 passengers each day at the spectacular eighty-foot high station.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards01/astral.jpg",
      width: 300,
      height: 181,
      alt: "Astral Fountain",
    },
    titleLines: ["The", "Astral", "Fountain"],
    paragraphs: [
      "The overall beauty of the New York 1964-1965 World's fair is enhanced with the cascading beauty of several fountains placed at strategic points on the 646 acres of the Fair. The Astral Fountain spouts a 70-foot column of water enclosed in an open-work cylinder, studded with stars and rotating within a framework of jetted water spouts.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards01/bell.jpg",
      width: 300,
      height: 181,
      alt: "Bell Telephone Pavilion",
    },
    titleLines: ["The Bell", "System", "Exhibit"],
    paragraphs: [
      "The Bell System exhibit is located on a 2 1/2 acre site on the Pool of Industry opposite the Unisphere. Its gleaming white upper section -- a 400-foot-long floating wing that stands 24 feet above the ground -- houses an exciting ride, which tells the story of human communications. Moving chairs -- equipped with loudspeakers -- take fair-goers through a series of theaters that combine three-dimensional settings, motion pictures and still projections. During the 12-minute trip, the passengers see communications expand from primitive drum signaling to the operation of global and space networks.",
      "Animated displays, demonstrations and visitor-participation exhibits in the lower section of the Pavilion explain the evolution of communications systems, and the science and technology on which they depend.",
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards01/chrsci.jpg",
      width: 300,
      height: 181,
      alt: "Christian Science Pavilion",
    },
    titleLines: ["The Christian", "Science", "Pavilion"],
    paragraphs: [
      "The Christian Science Pavilion offers a colorful presentation of the teachings of this denomination. The exhibits make use of photographs, films, and contemporary stained glass and design elements to highlight the discussion of the meaning of God in the modern world, the possibilities of man, and the practicality of healing by spiritual means.",
      "Designed by Edward Durrell Stone, the main exhibit building and adjacent Reading Room occupy a 40,000 square foot site in the International Section of the Fairgrounds. The translucent skydome atop the building is illuminated at night. Adjoining the building is a French park with grouping of individual chairs in shaded areas.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards01/coke.jpg",
      width: 300,
      height: 180,
      alt: "Coca-Cola Pavilion",
    },
    titleLines: ["The", "Coca-Cola", "Exhibit"],
    paragraphs: [
      "In the dramatic elliptical pavilion of the Coca-Cola Company, the visitor enjoys a free Global Holiday as he steps into re-creations of exotic foreign locales. By utilizing the senses of touch, hearing, smell and sight, the designers have added anew dimension to realism. The visitor has the sensation he is actually there . . . he feels the humidity of the jungle, the dry heat and desert sand beneath his feet, and other fascinating impressions at such renowned spots as Cambodia's temple of Angkor Wat and Rio's Copacabana Beach.",
      'These unique "experience areas" encircle a 120-foot Tower of Music which features music from the worlds\' largest and finest electronic carillon. Programs range from full symphony to rock-and-roll and music of countries round the world.',
    ],
  },
];

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * The “Edu-Cards” Set — Page One (legacy educards02.html → /educards01).
 * Shared EducardsHero (1905×826). Nav Page 2 (overview is Page 1).
 * PREVIOUS → /educardsoverview; NEXT → /educards02.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Educards01Page() {
  return (
    <>
      <EducardsHero />

      <EducardsNavChrome />

      <article className={styles.article} aria-labelledby="educards01-title">
        <header className={styles.titleBar}>
          <h1 id="educards01-title" className={styles.titleBarMain}>
            The Official Souvenir Flash Card Set
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            Billed as &quot;The Official Souvenir Flash Card Set&quot; of the
            Fair, ED-U-Cards&apos; heavy-stock cards are a popular collectible
            and often mistaken for post cards. With text in English, French and
            Spanish, the cards are chock-full of facts and figures on the
            pavilions and exhibits they feature. ED-U-Cards were produced in the
            50s and 60s with children&apos;s topics and themes. The ED-U-Card
            Manufacturing Corporation is often remembered as the producer of
            arithmetic flash cards to aid in the memorization of multiplication
            tables and other math functions. (Ahh! So that&apos;s the reason why
            so many of the descriptions of the exhibits contain references to
            height, length and square footage?) By licensing these designs to
            ED-U-Cards for use on this merchandise, the Fair Corporation was
            able to recoup some of the investment that went into producing
            renderings and models for publicity purposes. The cards are
            presented for you at <BrandMark /> courtesy of the collections of Al
            Soltesz and Steve Perley.
          </p>

          <p className={styles.quizNote}>
            Study them carefully -- there&apos;ll be a quiz at the end!
          </p>

          <hr className={styles.rule} />

          <div className={styles.entries}>
            {ENTRIES.map((entry) => (
              <section
                key={entry.photo.src}
                className={`${styles.entry} ${
                  entry.photoAlign === "right"
                    ? styles.entryPhotoRight
                    : styles.entryPhotoLeft
                }`}
                aria-label={entry.titleLines.join(" ")}
              >
                <div className={styles.photoFrame}>
                  <Image
                    src={entry.photo.src}
                    alt={entry.photo.alt}
                    width={entry.photo.width}
                    height={entry.photo.height}
                    className={styles.photo}
                    unoptimized
                  />
                </div>
                <div className={styles.textFrame}>
                  <div className={styles.cardHead}>
                    <Image
                      src="/images/educards/wflogo.jpg"
                      alt=""
                      width={70}
                      height={81}
                      className={styles.logo}
                      unoptimized
                    />
                    <h2 className={styles.cardTitle}>
                      {entry.titleLines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h2>
                  </div>
                  {entry.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className={styles.cardBody}>
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/educardsoverview"
        explicitPrevious
        overviewHref="/educardsoverview"
        nextHref="/educards02"
      />
    </>
  );
}
