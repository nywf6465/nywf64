import type { Metadata } from "next";
import Image from "next/image";
import { EducardsHero } from "@/components/EducardsHero";
import { EducardsNavChrome } from "@/components/EducardsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./educards02.module.css";

export const metadata: Metadata = {
  title:
    "Official Souvenir Flash Card Set (2) — The “Edu-Cards” Set — nywf64.com",
  description:
    "ED-U-Cards Official Souvenir Flash Card Set (continued) — Ford through Johnson’s Wax — courtesy of the Al Soltesz and Steve Perley collections on nywf64.com.",
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
      src: "/images/educards02/ford.jpg",
      width: 300,
      height: 182,
      alt: "Ford Pavilion",
    },
    titleLines: ["The", "Ford", "Pavilion"],
    paragraphs: [
      "The entrance to the ultra-modern Pavilion is a glass-enclosed, rotunda-like structure 235 feet in diameter and 58 feet high, surrounded by 64 glittering pylons, 100 feet tall. Adjoining the rotunda, is a flared rectangular show and exhibit building more than 500 feet long and as high as a seven-story building. At night, the rotunda portion of the Pavilion becomes a waterfall of light. Each of its eight-foot-deep pylons is illuminated with incandescent lights.",
      "The principal attraction of the Ford Pavilion is an exciting automobile trip through a fantasyland of the past, present and future created by Walt Disney and his associates.",
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards02/gas.jpg",
      width: 300,
      height: 181,
      alt: "Gas Inc. Pavilion",
    },
    titleLines: ["The Festival", "of", "Gas Pavilion"],
    paragraphs: [
      'Visitors get their first view of the pavilion while riding on the world\'s largest Carousel, complete with giant prancing horses. Moving ramps carry people to the Carousel high above the main floor of the pavilion. Following the four-minute ride, visitors see the special attractions of the pavilion, at their own leisure. These include: the Fun House of the Future, a demonstration of life tomorrow; the Festival Puppet Show; a Magic Show, featuring the "everyday" magic of industry; a Garden of the Giants, where gas fired turbines and tiny fuel cells create most of the power, electricity, heating and cooling for the pavilion; a Theatre of Food, with performances by famous chefs from all over the world; and one of the famous restaurants at the Worlds\' Fair . . . the "Festival \'64."',
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards02/gm.jpg",
      width: 300,
      height: 185,
      alt: "G.M. Pavilion",
    },
    titleLines: ["The", "General Motors", "Futurama Building"],
    paragraphs: [
      "The nearly 230,000-square-foot General Motors Futurama building is a landmark for Fair visitors. Entrance to the huge white building is a ten-story-high canopy, constructed of 39 spars rising 110 feet along its face.",
      "Behind the canopy, the main portion of the 680-foot-long building houses the exciting 1,700-foot Futurama ride. The building terminates in a dramatic domed pavilion, in which current General Motors cars and other products will be displayed.",
      "On top of the pavilion, rising the equivalent of eight stories above the ground, is a 40-foot-wide sculptured indicator which revolves, flashing the time and temperature in large illuminated numerals.",
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards02/haledu.jpg",
      width: 300,
      height: 181,
      alt: "Hall of Education",
    },
    titleLines: ["The", "Hall of", "Education"],
    paragraphs: [
      'A three-story structure, the Hall of Education with 90,000 square feet of floor area, appears light and airy through a futuristic design featuring a sculptured, multi-colored, three dimensional screen, 100 feet in width and 25 feet high, which will suggest the wide range of subjects in the field of education. With a new symbol of education as a main floor attraction, the building will house a convention hall equipped for television broadcasting, and a number of other halls with moving walls for flexibility in showing instructional materials. A "School of Tomorrow" is located on the second floor.',
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards02/heli.jpg",
      width: 300,
      height: 181,
      alt: "Heliport",
    },
    titleLines: ["Port of New", "York Authority", "Heliport"],
    paragraphs: [
      "Centrally located in the Transportation Section of the New York 1964-1965 World's Fair, the Port of New York Authority Building provides landing space for express shuttle air (bus) serviced from Manhattan and other Authority airports to the building's Heliport, 120 feet above the ground. A restaurant immediately below the Heliport commands a spectacular view of the Fair grounds with space for 1,000 guests at a time. Restaurant and landing space are supported by four tapered columns which also will house the elevators.",
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards02/hgt.jpg",
      width: 300,
      height: 181,
      alt: "House of Good Taste",
    },
    titleLines: ["The House", "of", "Good Taste"],
    paragraphs: [
      'The gracious way of American life is portrayed at the New York 1964-1965 World\'s Fair through a two-acre exhibit, the "House of Good Taste," with three beautiful homes and gardens and featuring outstanding interiors, modern appliances and the finest in architecture. Sponsored by the American Instituted of Approval, a national, non-profit organization of women with Lady Malcolm Douglas-Hamilton as its director, the exhibit emphasizes outdoor living with specially designed swimming pools and landscaping. Each home, priced at from $25,000 to $40,000 also has a two-car garage.',
    ],
  },
  {
    photoAlign: "left",
    photo: {
      src: "/images/educards02/ibm.jpg",
      width: 300,
      height: 179,
      alt: "I.B.M. Pavilion",
    },
    titleLines: ["The", "IBM", "Pavilion"],
    paragraphs: [
      'The atmosphere of the IBM Pavilion at the New York World\'s Fair 1964-65 is that of a garden. Tall steel trees form a green translucent cover for a series of colorful exhibits that offer simple and entertaining explanations of computers and other modern information-handling devices. The main attraction is the "Information Machine", an ovoid theatre raised 90 feet above the ground. To reach the ovoid theater, a series of elevated walkways lead visitors to 12 tiers of moving seats, a "People Wall." Audiences of some 400 at a time are lifted on the Wall by hydraulic mechanism into the theater where they are shown how the methods used by computer systems are similar to those used to solve human problems in everyday life.',
    ],
  },
  {
    photoAlign: "right",
    photo: {
      src: "/images/educards02/jw.jpg",
      width: 300,
      height: 188,
      alt: "Johnson's Wax Pavilion",
    },
    titleLines: ["The Johnson's", "Wax Disk", "Theater"],
    paragraphs: [
      "Soaring 80-foot columns that arch over and suspend a giant disk 90 feet in diameter are the most dramatic features of the Johnson's Wax pavilion for the 1964-65 New York World's Fair. The huge disk, sheathed in gold anodized aluminum, contains a 600-seat theater featuring color films and children's entertainment. Access to the theater is via elevated walkways. A companion building contains educational exhibits. There is also a free shoe-shine center and home information center available to World's Fair visitors.",
    ],
  },
];

/**
 * The “Edu-Cards” Set — Page Two (legacy educards03.html → /educards02).
 * Shared EducardsHero (1905×826). Nav Page 3 (overview is Page 1).
 * PREVIOUS → /educards01; NEXT → /educards03.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Educards02Page() {
  return (
    <>
      <EducardsHero />

      <EducardsNavChrome />

      <article className={styles.article} aria-labelledby="educards02-title">
        <header className={styles.titleBar}>
          <h1 id="educards02-title" className={styles.titleBarMain}>
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
        previousHref="/educards01"
        explicitPrevious
        overviewHref="/educardsoverview"
        nextHref="/educards03"
      />
    </>
  );
}
