import type { Metadata } from "next";
import Image from "next/image";
import { EducardsHero } from "@/components/EducardsHero";
import { EducardsNavChrome } from "@/components/EducardsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./educards03.module.css";

export const metadata: Metadata = {
  title:
    "Official Souvenir Flash Card Set (3) — The “Edu-Cards” Set — nywf64.com",
  description:
    "ED-U-Cards Official Souvenir Flash Card Set (continued) — Kodak through RCA — courtesy of the Al Soltesz and Steve Perley collections on nywf64.com.",
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
      src: "/images/educards03/kodak.jpg",
      width: 300,
      height: 183,
      alt: "Kodak Pavilion",
    },
    titleLines: ["The Eastman", "Kodak", "Pavilion"],
    paragraphs: [
      "In the design of the Kodak Pavilion, Will Burtin has succeeded in creating a building that is an unescapable focal point of the Fair grounds.",
      "The pavilion tower, surmounted by five of the world's largest color prints, is bathed by 1,200,000 watts of illumination day and night, and rises more than 80 feet above the fairgrounds.",
      "The 69,000 square feet of the site is largely protected from the weather but invitingly open, with its display of pictures from every corner of the world . . . the result of more than a million miles of travel by Kodak's picturetaking crews. There are rest spots, and garden spots, a children's area, and two theaters where visitors will enjoy unusual film presentations.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards03/mormon.jpg",
      width: 300,
      height: 182,
      alt: "Mormon Pavilion",
    },
    titleLines: ["The", "Mormon", "Pavilion"],
    paragraphs: [
      "Focal point of the New York World's Fair Pavilion of The Church of Jesus Christ of Latter-day Saints is a replica of the east spires of the famed Salt Lake City Temple. The main spire, towering 127 feet, is crowned by a gold colored statue of the Angel Moroni.",
      'Two theaters alternately present "Man\'s Search for Happiness", a 15 minute movie.',
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards03/ncr.jpg",
      width: 300,
      height: 182,
      alt: "N.C.R. Pavilion",
    },
    titleLines: ["The National", "Cash Register", "Pavilion"],
    paragraphs: [
      "The Pavilion of the National Cash Register Company dramatically depicts the role of business machines in today's world. Visitors also received an insight into the fascinating world of research and the products of tomorrow.",
      'The colorful ground floor of the Pavilion features the International aspects of life in 1964 as typified by NCR\'s operations in more than 120 countries. Included is a "machine game room" in which visitors, including youngsters, are able to operate business equipment and participate in related games. The second floor of the Pavilion exhibits a wide variety of office automation equipment, including an NCR 315 computer system programmed to supply visitors -- at the touch of a button -- with world famous recipes, suggested vacation routes and other information, depending upon their personal interests. Also included are demonstrations of recent research development which will affect the lives of people in the world of tomorrow.',
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards03/ny.jpg",
      width: 182,
      height: 300,
      alt: "N.Y. State Pavilion",
    },
    titleLines: ["The", "New York", "State Exhibit"],
    paragraphs: [
      'Geared to the theme "State Fair of the Future", the New York State Exhibit provides a fascinating display of permanent exhibits and an ever changing daily panorama of performance and contests in the huge Tent of Tomorrow. Visitors ride to the Astro-View of the Fair in the high-speed capsules scaling the exterior of huge towers alongside the Tent. Finally, they may view a 360 degree motion picture, projected on the walls of the Theaterama, which completes the exhibit.',
      "THE TENT OF TOMORROW is the heart of the State exhibit. An elliptical shaped, 350 ft. by 250 ft. structure whose outer support is sixteen white concrete columns, 100 ft. tall, the Tent features the world's largest suspension roof.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards03/amerint.jpg",
      width: 300,
      height: 179,
      alt: "Pavilion of American Interiors",
    },
    titleLines: ["The Pavilion", "of American", "Interiors"],
    paragraphs: [
      "The pavilion of American Interiors, the showcase of American home furnishings at the New York World's Fair, is a dramatic four-story building consisting of three circular, linked structures. Located in the Industrial Area of the Fair, the Pavilion houses outstanding examples of furniture, floor coverings, lamps, draperies, and accessories.",
      "Leading manufacturer-exhibitors have created actual room settings which were designed and decorated by the top interior designers in the country.",
      "Various chapters of the American Institute of Interior Designers are sponsoring an extensive display on the second floor in which rooms are decorated indigenous to their areas.",
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards03/astro.jpg",
      width: 300,
      height: 180,
      alt: "Plaza of the Astronauts",
    },
    titleLines: ["The Plaza", "of the", "Astronauts"],
    paragraphs: [
      'The Unisphere is the theme symbol of the Fair. Its top is 140 feet above ground level and the globe is 120 feet in diameter with an open grid of latitudes and longitudes supporting the land masses. The reflecting pool beneath is 310 feet in diameter. It dramatizes the interrelation of the peoples of the world and their yearning for "Peace through Understanding."',
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards03/rca.jpg",
      width: 300,
      height: 182,
      alt: "R.C.A. Pavilion",
    },
    titleLines: ["The", "RCA", "Pavilion"],
    paragraphs: [
      "The Radio Corporation of America's activities at the 1964-65 New York World's Fair feature a full equipped color television communications center and a closed-circuit color television network, both of which are operated as a public service and programmed to make the Fair more enjoyable and exciting. Designed as the Official World's Fair Color Television Communications Center, the RCA pavilion is located just inside the main gate and quietly highlights the circular theme of the Fair. Within the structure, visitors are able to see themselves on color television, enjoy a backstage view of a color TV studio in operation, and listen to stereophonic music in two lounge areas.",
    ],
  },
];

/**
 * The “Edu-Cards” Set — Page Three (legacy educards04.html → /educards03).
 * Shared EducardsHero (1905×826). Nav Page 4 (overview is Page 1).
 * PREVIOUS → /educards02; NEXT hidden until the next gallery page ships.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Educards03Page() {
  return (
    <>
      <EducardsHero />

      <EducardsNavChrome />

      <article className={styles.article} aria-labelledby="educards03-title">
        <header className={styles.titleBar}>
          <h1 id="educards03-title" className={styles.titleBarMain}>
            The Official Souvenir Flash Card Set
          </h1>
        </header>

        <div className={styles.articleInner}>
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
                    <p key={p.slice(0, 48)} className={styles.cardBody}>
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
        previousHref="/educards02"
        explicitPrevious
        overviewHref="/educardsoverview"
        hideNext
      />
    </>
  );
}
