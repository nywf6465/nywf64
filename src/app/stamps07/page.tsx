import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stamps07.module.css";

export const metadata: Metadata = {
  title: "United Nations – Yemen — Postage Stamps of the Fair — nywf64.com",
  description:
    "United Nations, United States, Vatican City, Venezuela, Yemen Arab Republic, and Yemen Kingdom postage stamps of the 1964/1965 New York World’s Fair — nywf64.com.",
};

type StampImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type StampIssue = {
  country?: string;
  meta?: string;
  body?: string;
  paragraphs?: string[];
  rows?: StampImage[][];
  ruleAfter?: boolean;
};

const ISSUES: StampIssue[] = [
  {
    country: "UNITED NATIONS",
    meta: "(#69-70 Released March 30, 1959 - current value $.0.20)",
    body: '- Although the United Nations did not release any stamps commemorating the 1964-65 New York World\'s Fair, they did issue two related stamps in 1959. These stamps pictured the UN\'s first home in the United States, which was located in Flushing Meadow from 1946 until 1950. The General Assembly was housed in the 1939-40 and 1964-65 New York World\'s Fair "New York City Building." The building is prominently featured in a three-quarters view on the stamp. These two issues are not included in the World\'s Fair stamp totals.',
    rows: [
      [
        {
          src: "/images/stamps07/stamp_UN_1959_Sc69.jpg",
          width: 160,
          height: 108,
          alt: "United Nations",
        },
        {
          src: "/images/stamps07/stamp_UN_1959_Sc70.jpg",
          width: 160,
          height: 105,
          alt: "United Nations",
        },
      ],
    ],
  },
  {
    body: "Remarkably, the only World's Fair ever used as a topic for a United Nations stamp was Expo '67 in Montreal, Canada. That series of five stamps (#170-174) was issued in Canadian currency and was to be used expressly for outgoing postage at that fair's UN Pavilion. The United Nations has honored no fairs before or since that time during the organization's 57 years of existence!",
    paragraphs: [
      "The UN did sell a mailable, souvenir folder at the 1964-65 New York World's Fair containing a small selection of United Nations commemorative stamp issues.",
    ],
    rows: [
      [
        {
          src: "/images/stamps07/stamp_UN_1964_card.jpg",
          width: 179,
          height: 308,
          alt: "United Nations",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "UNITED STATES",
    meta: "(#1244, U546 Released April 22, 1964 - current value $3.00)",
    body: '- The United States had two postal issues. The first was an individual stamp in teal green showing the "Rocket Thrower", Unisphere, and the Court Of The Astronauts. The second offering was an embossed 6-1/2 inch by 3-3/4 inch envelope with a stylized Unisphere.',
    rows: [
      [
        {
          src: "/images/stamps07/stamp_USA_1964_Sc1244.jpg",
          width: 160,
          height: 99,
          alt: "United States",
        },
        {
          src: "/images/stamps07/stamp_USA_1964_ScU546.jpg",
          width: 160,
          height: 98,
          alt: "United States",
        },
      ],
    ],
  },
  {
    meta: "(#1258 Released November 21,1964 - current value $.35)",
    body: "- A distantly related US stamp is #1258 which celebrates the opening of the Verrazano-Narrows Bridge, one of Robert Moses highway infrastructure achievements timed to coincide with the opening of the New York World's Fair in 1964. At the time of issue, the suspended 4260-foot (1.3-Kilometer) center span was the longest in the world. This stamp is not included in the world's fair stamp totals.",
    rows: [
      [
        {
          src: "/images/stamps07/stamp_USA_1964_Sc1258.jpg",
          width: 98,
          height: 160,
          alt: "United States",
        },
      ],
    ],
  },
  {
    meta: "(#1355 Released September 11, 1968 - current value $.60)",
    body: '- Another somewhat related issue, this time honoring the man whose company provided FOUR attraced to the New York World\'s Fair, Ford Motor Company\'s "Magic Skyway", Illinois\' "Meet Mr. Lincoln", General Electric\'s "Carousel of Progress", and Pepsi-Cola\'s "It\'s A Small World."',
    paragraphs: [
      'On this stamp Walt Disney is surrounded by characters reminiscent of the Pepsi-Cola / UNICEF hit attraction, "It\'s A Small World." Walt Disney had passed away on December 15, 1966, but the stamp was issued less than two years after his death, contrary to USPS regulations. A special exception was made for the Walt Disney stamp that waived the 10-year rule. The only other American so honored was President John F. Kennedy. This stamp was not printed by the U.S Government\'s Bureau Of Engraving And Printing, but rather a private firm, the Achrovure Division of Union Camp, Inc. Though not included in the world\'s fair stamp totals, this was a positive "9/11" occasion I would like to think!',
    ],
    rows: [
      [
        {
          src: "/images/stamps07/stamp_USA_1968_Sc1355.jpg",
          width: 93,
          height: 160,
          alt: "United States",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "VATICAN CITY",
    meta: "(#383-386 Released April 22, 1964 - current value $3.00)",
    body: "- Four issues. Two of these display Pope Paul VI, and the other two commemorate the loan of the Pieta to the New York World's Fair.",
    rows: [
      [
        {
          src: "/images/stamps07/stamp_Vatican_1964_Sc383.jpg",
          width: 120,
          height: 166,
          alt: "Vatican City",
        },
        {
          src: "/images/stamps07/stamp_Vatican_1964_Sc385.jpg",
          width: 120,
          height: 170,
          alt: "Vatican City",
        },
        {
          src: "/images/stamps07/stamp_Vatican_1964_Sc384.jpg",
          width: 120,
          height: 163,
          alt: "Vatican City",
        },
        {
          src: "/images/stamps07/stamp_Vatican_1964_Sc386.jpg",
          width: 120,
          height: 168,
          alt: "Vatican City",
        },
      ],
    ],
  },
  {
    body: 'Though not official postal items, the Vatican sold a series of three souvenir cards printed with past Vatican-issued stamps honoring religious events, famous figures, works of art, and people. These cards are serial numbered on the reverse; "A 3321", B 3321", and C 3321", respectfully. If someone knows how many total sets were issued, please drop me message; Thanks!',
    rows: [
      [
        {
          src: "/images/stamps07/200_Vatican_carda.jpg",
          width: 220,
          height: 172,
          alt: "Vatican City",
        },
        {
          src: "/images/stamps07/200_Vatican_cardb.jpg",
          width: 220,
          height: 170,
          alt: "Vatican City",
        },
      ],
      [
        {
          src: "/images/stamps07/200_Vatican_cardc.jpg",
          width: 220,
          height: 174,
          alt: "Vatican City",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "VENEZUELA",
    meta: "(#C903 Released August 31, 1965 - current value $1.00)",
    body: "- A single, very colorful airmail issue with an image of the Venezuelan Pavilion set against the Unisphere.",
    rows: [
      [
        {
          src: "/images/stamps07/stamp_Venezuela_1964_ScC903.jpg",
          width: 160,
          height: 119,
          alt: "Venezuela",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "YEMEN ARAB REPUBLIC",
    meta: "(#6410-6416 Released May 5, 1964 - current value $3.00)",
    body: "- A series of seven stamps each displaying a scene from New York City at the left, and a scene from Yemen on the right. The first five are domestic use values, and the last two are for airmail postage.",
    rows: [
      [
        {
          src: "/images/stamps07/stamp_Yemen_1964_Sc6410.jpg",
          width: 160,
          height: 78,
          alt: "Yemen Arab Republic",
        },
        {
          src: "/images/stamps07/stamp_Yemen_1964_Sc6411.jpg",
          width: 160,
          height: 77,
          alt: "Yemen Arab Republic",
        },
      ],
      [
        {
          src: "/images/stamps07/stamp_Yemen_1964_Sc6412.jpg",
          width: 160,
          height: 77,
          alt: "Yemen Arab Republic",
        },
        {
          src: "/images/stamps07/stamp_Yemen_1964_Sc6413.jpg",
          width: 160,
          height: 78,
          alt: "Yemen Arab Republic",
        },
        {
          src: "/images/stamps07/stamp_Yemen_1964_Sc6414.jpg",
          width: 160,
          height: 75,
          alt: "Yemen Arab Republic",
        },
      ],
      [
        {
          src: "/images/stamps07/stamp_Yemen_1964_Sc6415.jpg",
          width: 160,
          height: 79,
          alt: "Yemen Arab Republic",
        },
        {
          src: "/images/stamps07/stamp_Yemen_1964_Sc6416.jpg",
          width: 160,
          height: 76,
          alt: "Yemen Arab Republic",
        },
      ],
    ],
  },
  {
    meta: "(#6417 Released May 5, 1964 - current value $3.00)",
    body: "- A souvenir sheet incorporating the highest valued airmail stamp.",
    rows: [
      [
        {
          src: "/images/stamps07/stamp_Yemen_1964_Sc6417.jpg",
          width: 220,
          height: 154,
          alt: "Yemen Arab Republic",
        },
      ],
    ],
  },
  {
    meta: "(#6667-6674 Released October, 1966 - current value $3.00)",
    body: "- The YAR recycled these issues to commemorate the opening of the SANA'A airport in 1966. Stamp #6668 and souvenir sheet #6674 are illustrated below showing the overprint on the stamp image (#6668) and along the borders of #6674. Compare these with items #6411 and #6417, above.",
    rows: [
      [
        {
          src: "/images/stamps07/stamp_Yemen_1966_Sc6668.jpg",
          width: 160,
          height: 73,
          alt: "Yemen Arab Republic",
        },
      ],
      [
        {
          src: "/images/stamps07/stamp_Yemen_1966_Sc6674.jpg",
          width: 220,
          height: 152,
          alt: "Yemen Arab Republic",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "YEMEN KINGDOM",
    meta: '(Michel #188b-190b Released October 4, 1965 - current value $12.00)',
    body: '- These stamps were created to celebrate both the New York World\'s Fair and the Pope Paul VI visit to New York City in October of 1965. Imperforate tete-beche (French for "head to tail." Two or more unsevered stamps, one of which is inverted in relation to the other) were issued in addition to the perforated stamps. These Yemen Kingdom stamps are not officially recognized by the Scott\'s Standard Stamp Catalog, but are listed in both the German "Michel", and British "Stanley Gibbons" catalogs.',
    rows: [
      [
        {
          src: "/images/stamps07/stamp_YemenKingdom_1965_01.jpg",
          width: 160,
          height: 81,
          alt: "Yemen Kingdom",
        },
        {
          src: "/images/stamps07/stamp_YemenKingdom_1965_02.jpg",
          width: 160,
          height: 81,
          alt: "Yemen Kingdom",
        },
        {
          src: "/images/stamps07/stamp_YemenKingdom_1965_03.jpg",
          width: 160,
          height: 81,
          alt: "Yemen Kingdom",
        },
      ],
    ],
  },
  {
    meta: "(Michel Bloc26 October 4, 1965 - current value $21.00)",
    body: "- This detailed souvenir sheet was also issued to honor the Pope's visit to the United States, the United Nations, and the New York World's Fair. The background depicts the skyline of New York City at left with a map of the Kingdom of Yemen on the right. The three small panes at the upper left illustrate the United Nations Building in New York City, Pope Paul VI, and the Vatican Pavilion at the World's Fair.",
    rows: [
      [
        {
          src: "/images/stamps07/stamp_YemenKingdom_1965_MiBloc26.jpg",
          width: 220,
          height: 157,
          alt: "Yemen Kingdom",
        },
      ],
    ],
  },
];

/**
 * Postage Stamps of the Fair — United Nations–Yemen (legacy stamps08.html → /stamps07).
 * Shared StampsHero (1905×826). Nav Page 8.
 * PREVIOUS → /stamps06; NEXT hidden until the next stamps page ships.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Stamps07Page() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <article className={styles.article} aria-labelledby="stamps07-title">
        <header className={styles.titleBar}>
          <h1 id="stamps07-title" className={styles.titleBarMain}>
            United Nations&nbsp;&nbsp;-&nbsp;&nbsp;Yemen
          </h1>
        </header>

        <div className={styles.articleInner}>
          {ISSUES.map((issue, issueIndex) => {
            const paragraphs = issue.paragraphs ?? [];
            const key =
              issue.country ??
              issue.meta ??
              issue.body?.slice(0, 40) ??
              `issue-${issueIndex}`;

            return (
              <div key={key}>
                <section className={styles.issue}>
                  {(issue.country || issue.meta || issue.body) && (
                    <p className={styles.lead}>
                      {issue.country ? (
                        <strong className={styles.country}>
                          {issue.country}{" "}
                        </strong>
                      ) : null}
                      {issue.meta ? (
                        <em className={styles.meta}>{issue.meta} </em>
                      ) : null}
                      {issue.body ? (
                        <span className={styles.desc}>{issue.body}</span>
                      ) : null}
                    </p>
                  )}

                  {paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${key}-p-${paragraphIndex}`}
                      className={styles.paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {issue.rows ? (
                    <div className={styles.stampRows}>
                      {issue.rows.map((row, rowIndex) => (
                        <div
                          key={`${key}-row-${rowIndex}`}
                          className={styles.stampRow}
                        >
                          {row.map((stamp) => (
                            <Image
                              key={stamp.src}
                              src={stamp.src}
                              alt={stamp.alt}
                              width={stamp.width}
                              height={stamp.height}
                              className={styles.stamp}
                              unoptimized
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
                {issue.ruleAfter ? <hr className={styles.rule} /> : null}
              </div>
            );
          })}
        </div>
      </article>

      <Nav2Bar
        previousHref="/stamps06"
        explicitPrevious
        overviewHref="/stampsoverview"
        hideNext
      />
    </>
  );
}
