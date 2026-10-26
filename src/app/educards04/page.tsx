import type { Metadata } from "next";
import Image from "next/image";
import { EducardsHero } from "@/components/EducardsHero";
import { EducardsNavChrome } from "@/components/EducardsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./educards04.module.css";

export const metadata: Metadata = {
  title:
    "Official Souvenir Flash Card Set (4) — The “Edu-Cards” Set — nywf64.com",
  description:
    "ED-U-Cards Official Souvenir Flash Card Set (continued) — Schaefer through Vatican — courtesy of the Al Soltesz and Steve Perley collections on nywf64.com.",
};

type FlashCardEntry = {
  photo: { src: string; width: number; height: number; alt: string };
  titleLines: string[];
  paragraphs: string[];
  /** Italic lead line(s) before body (e.g. Travelers “The Triumph of Man”). */
  italicLead?: string;
  /** Legacy ALIGN for the photo block within the tan tray. */
  photoAlign: "left" | "right";
};

const ENTRIES_BEFORE_NOTE: FlashCardEntry[] = [
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards04/schaefer.jpg",
      width: 300,
      height: 183,
      alt: "Schaefer Pavilion",
    },
    titleLines: ["The", "Schaefer", "Center"],
    paragraphs: [
      'Schaefer Center, home of America\'s oldest lager beer, combines unique architectural construction with a relaxing and pleasant atomosphere. The Center houses a Restaurant of Tomorrow and an exhibiton area under its two air-filled "floating" roofs.',
      "The larger structure is the Restaurant of Tomorrow, featuring circular tables among arrangements of flowering trees.",
      "Under the smaller dome, an exhibit traces the founding of The F. & M. Schaefer Brewing Co. in 1842 to the present day.",
      "On the grounds surrounding Schaefer Center are beautifully landscaped gardens and an old-fashioned beer garden.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards04/sudan.jpg",
      width: 300,
      height: 182,
      alt: "Sudan Pavilion",
    },
    titleLines: ["The", "Sudan", "Pavilion"],
    paragraphs: [
      "The Pavilion of Sudan occupies a site of 14,000 square feet in the International Area of the New York World's Fair. The building is a striking contemporary mosque of reinforced concrete, one of the features being the enclosure of the second floor in a teak lattice of Islamic design. It also features cinema programs and native entertainment, and contains huts housing craftsmen making native products.",
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards04/thai.jpg",
      width: 300,
      height: 184,
      alt: "Thailand Pavilion",
    },
    titleLines: ["The", "Thailand", "Pavilion"],
    paragraphs: [
      "The Marble Wat of Bangkok fame has been reconstructed in the Thailand Pavilion at the New York World's Fair. The original Wat is dedicated to the Buddhist religion and culture and is a landmark seen by thousands of visitors to Thailand's Capital. The Pavilion also contains cultrual exhibits -- and a fine restaurant featuring famous native dishes.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards04/tol.jpg",
      width: 180,
      height: 300,
      alt: "Tower of Light",
    },
    titleLines: ["The", "Tower", "of Light"],
    paragraphs: [
      "The spectacular Tower of Light, The Electric Power and Light Companies' pavilion, features a 12 billion candle power welcome light that can be seen for miles in every direction. It is the greatest concentration of exposition lighting in the world -- brighter than 50 illuminated Yankee Stadiums or 340,000 automobile headlights.",
      "At night, the hundreds of aluminum panels are bathed in ever-chainging colored lights, while during the day, the building reflects the sun's rays with a magic irridescence.",
      'Inside, visitors ride a revolving "magic carpet" through "The Brightest Show On Earth," a light-hearted musical using three dimensional animated figures, dramatic lighting effects, music, dialogue and motion pictures to tell the story of the (investor-owned) electric utility industry.',
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards04/travelers.jpg",
      width: 300,
      height: 183,
      alt: "Travelers Ins. Pavilion",
    },
    titleLines: ["The", "Travelers", "Exhibit"],
    italicLead: '"The Triumph of Man"',
    paragraphs: [
      "The Travelers Exhibit is housed in a unique building -- one that is patterned after its familiar symbol of insurance protection . . . the red umbrella.",
      "Within this structure is a dioramatic portrayal of man's struggle and growth against untold odds to reach his stature of today. It begins in prehistoric times -- more than two billion years ago and shows his progress through centuries upon centuries to the present.",
      "You have the feeling of being there -- a part of each episode -- living it yourself in all its color, splendor and grimness. You hear the sounds of the day, the noises of battles, the cries of man's agonies, the glories of achievement. You hear and see it all . . . just as it once was.",
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards04/usa.jpg",
      width: 300,
      height: 180,
      alt: "United States Pavillion",
    },
    titleLines: ["The", "United States", "Pavilion"],
    paragraphs: [
      "The Federal Exhibition is a declaration of faith in the spiritual greatness of the American people. It includes five separate units, each using a different exhibit technique but integrating to express and depict a total story. An escalator takes the visitor to the upper level where he finds that our journey becomes literal in that he gets into a moving grandstand carrying 60 people that will move through a series of motion picture experiences throughout the entire upper level. At the conclusion of the ride the visitor returns to the lower level where children and adults will receive supplementary reference guidance on every subject in the entire exhibition. The U. S. Pavilion will also sponsor an extensive musical program of performers and groups from throughout the U. S. and possessions.",
    ],
  },
];

const VATICAN_ENTRY: FlashCardEntry = {
  photoAlign: "right",
  photo: {
    src: "/images/educards04/vatican.jpg",
    width: 300,
    height: 184,
    alt: "Vatican Pavilion",
  },
  titleLines: ["The", "Vatican", "Pavilion"],
  paragraphs: [
    'The Vatican Pavilion at the New York World\'s Fair is constructed on an oval-shaped plot of land measuring 50,000 square feet and costs approximately $2,000,000. Surmounted by a lantern and cross, it will rise to a total height of 100 feet and measure 208 feet in length and 135 feet in width. A chapel with a capacity of 350 persons will be located on the mezzanine of the pavilion, and will exhibit the statue of "The Good Shepherd".',
    'The exhibit features the "Pieta" by Michelangelo, also a gallery of Michelangelo\'s works as an artist. There is also an exhibit of one-quarter life size color transparencies of the Sistine Chapel, and a collection of Vatican coins.',
  ],
};

function FlashCard({ entry }: { entry: FlashCardEntry }) {
  return (
    <section
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
        {entry.italicLead ? (
          <p className={styles.cardBodyItalic}>{entry.italicLead}</p>
        ) : null}
        {entry.paragraphs.map((p) => (
          <p key={p.slice(0, 48)} className={styles.cardBody}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

/**
 * The “Edu-Cards” Set — Page Four (legacy educards05.html → /educards04).
 * Shared EducardsHero (1905×826). Nav Page 5 (overview is Page 1).
 * PREVIOUS → /educards03; NEXT hidden until the next gallery page ships.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Educards04Page() {
  return (
    <>
      <EducardsHero />

      <EducardsNavChrome />

      <article className={styles.article} aria-labelledby="educards04-title">
        <header className={styles.titleBar}>
          <h1 id="educards04-title" className={styles.titleBarMain}>
            The Official Souvenir Flash Card Set
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.entries}>
            {ENTRIES_BEFORE_NOTE.map((entry) => (
              <FlashCard key={entry.photo.src} entry={entry} />
            ))}
          </div>

          <p className={styles.webmasterNote}>
            <span className={styles.webmasterNoteLead}>
              Webmaster&apos;s note...
            </span>{" "}
            Many thanks to Steve Perley and Al Soltesz for scanning and
            submitting their collections of ED-U-Cards.
          </p>

          <div className={styles.entries}>
            <FlashCard entry={VATICAN_ENTRY} />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/educards03"
        explicitPrevious
        overviewHref="/educardsoverview"
        hideNext
      />
    </>
  );
}
