import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stamps06.module.css";

export const metadata: Metadata = {
  title: "Sierra Leone – Togo — Postage Stamps of the Fair — nywf64.com",
  description:
    "Sierra Leone, Spain, Sudan, and Togo postage stamps of the 1964/1965 New York World’s Fair — nywf64.com.",
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
  rows?: StampImage[][];
  ruleAfter?: boolean;
};

const ISSUES: StampIssue[] = [
  {
    country: "SIERRA LEONE",
    meta: "(#257-263 Released February 10, 1964 - current value $4.00)",
    body: '- Seven stamps from the "Land of Iron and Diamonds." These stamps are unique in that they are the world\'s first self-adhesive stamps. They are also die-cut so they match the geographical shape of the country of Sierra Leone. These are the earliest issued stamps, released over two months before the New York World\'s Fair officially opened! The regular issues have green backing paper. The symbol at the center of the stamp is a Griffin.',
    rows: [
      [
        {
          src: "/images/stamps06/stamp_Sierra_stamp01.jpg",
          width: 120,
          height: 123,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stamp06.jpg",
          width: 120,
          height: 123,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stamp05.jpg",
          width: 120,
          height: 123,
          alt: "Sierra Leone",
        },
      ],
      [
        {
          src: "/images/stamps06/stamp_Sierra_stamp07.jpg",
          width: 120,
          height: 123,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stamp04.jpg",
          width: 120,
          height: 123,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stamp03.jpg",
          width: 120,
          height: 123,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stamp02.jpg",
          width: 120,
          height: 123,
          alt: "Sierra Leone",
        },
      ],
    ],
  },
  {
    meta: "(#C14-C20 Released February 10, 1964 - current value $4.00)",
    body: "- At the same time as the regular Sierra Leone stamps were released, seven airmail versions of the New York World's Fair stamps were issued. These self-adhesive airmail stamps have yellow backing paper and the image has changed slightly. The Unisphere replaced the Griffin at the center of the stamp.",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_Sierra_stampC01.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stampC03.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stampC02.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
      ],
      [
        {
          src: "/images/stamps06/stamp_Sierra_stampC04.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stampC07.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stampC06.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_Sierra_stampC05.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
      ],
    ],
  },
  {
    meta: "(#288, 297, and C33 Released April 1965 - current value $3.55)",
    body: "- Reprinted New York World's Fair versions (1964 numbers 265, 263, and C15 respectfully) containing new values and surcharges. Surcharges for values are #288 (2c), #297 (60c), and #C33 (7c).",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_Sc288.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_Sc297.jpg",
          width: 120,
          height: 122,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_ScC33.jpg",
          width: 120,
          height: 114,
          alt: "Sierra Leone",
        },
      ],
    ],
  },
  {
    meta: "(#260, 262 Re-released April 1965 - current value $8.00)",
    body: "- Overprinted values with the large 1c marking were reissued on stamps #260 and stamp #262. Why these and the airmail series directly below do not have new Scott Catalog numbers assigned is a mystery to me.",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_Sc260_1ovr.jpg",
          width: 120,
          height: 122,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_Sc262_1ovr.jpg",
          width: 120,
          height: 120,
          alt: "Sierra Leone",
        },
      ],
    ],
  },
  {
    meta: "(#C14, C16, C17, C18, C19 Re-released November 9, 1965 - current value $20.00)",
    body: "- Overprinted values on these reissued stamps are #C14 (3c), #C16 (2c), #C17 (5c), #C18 (5c), and #C19 (5c).",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_ScC14.jpg",
          width: 120,
          height: 121,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_ScC16.jpg",
          width: 120,
          height: 118,
          alt: "Sierra Leone",
        },
      ],
      [
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_ScC17.jpg",
          width: 120,
          height: 121,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_ScC18.jpg",
          width: 120,
          height: 115,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/stamp_SierraLeone_1965_ScC19.jpg",
          width: 120,
          height: 119,
          alt: "Sierra Leone",
        },
      ],
    ],
  },
  {
    meta: "(#335 Released December 2, 1967 - current value $10.00)",
    body: "- Finally, 1964 stamp number #263 (and subsequent 1965 #288) was recycled for the second time in 1967 as new number 335 with three values upon the face. An 18-1/2c marking covering the 1965 60c marking were printed over the original value of 5 Shillings (5').",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_SierraLeone_1967_Sc335.jpg",
          width: 120,
          height: 118,
          alt: "Sierra Leone",
        },
      ],
    ],
  },
  {
    meta: "(#264-270, C21-C27 Released May 11, 1964 - current value $7.00)",
    body: "- The country of Sierra Leone was a great champion of stamp recycling, as the same map-base blank was also used for a John F. Kennedy memorial issue that same year. Here is one of each of the regular issue (green backing, #264), and airmail (yellow backing, #298) stamps. The airmail stamp illustrates a surcharge overprint. Since the stamps do not reference the New York World's Fair, they are not included in the total New York World's Fair stamp count..",
    rows: [
      [
        {
          src: "/images/stamps06/sierraleone_Kennedy_regular.jpg",
          width: 120,
          height: 115,
          alt: "Sierra Leone",
        },
        {
          src: "/images/stamps06/sierraleone_Kennedy_Airmail.jpg",
          width: 120,
          height: 128,
          alt: "Sierra Leone",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "SPAIN",
    meta: "(#1239-1243 Released April 23, 1964 - current value $3.00)",
    body: "- Spain furnished five different value stamps to honor the New York World's Fair in 1964. One prominently displayed the Spanish Pavilion, now located in downtown St. Louis, Missouri. The other four heralded Spanish culture (Bullfighting, Dancing, Jai Alai) and a landmark (13th century Castle La Mota at Medina de Campo). All had the Unisphere icon at the upper right corner.",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_Spain_1964_Sc1239.jpg",
          width: 160,
          height: 99,
          alt: "Spain",
        },
        {
          src: "/images/stamps06/stamp_Spain_1964_Sc1240.jpg",
          width: 79,
          height: 140,
          alt: "Spain",
        },
        {
          src: "/images/stamps06/stamp_Spain_1964_Sc1241.jpg",
          width: 80,
          height: 140,
          alt: "Spain",
        },
        {
          src: "/images/stamps06/stamp_Spain_1964_Sc1242.jpg",
          width: 78,
          height: 140,
          alt: "Spain",
        },
        {
          src: "/images/stamps06/stamp_Spain_1964_Sc1243.jpg",
          width: 79,
          height: 140,
          alt: "Spain",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "SUDAN",
    meta: "(#167-169 Released April 22, 1964 - current value $1.00)",
    body: "- A trio of colorful stamps. The first celebrating the new concrete dam at Khashm el Girba on the Atbara River, the second displaying the Sudanese Pavilion at the New York World's Fair. The third featured a map of Sudan with icons symbolizing the various provinces. This marks the second appearance of the Sudan pavilion which was illustrated on the country of Panama stamp #C324!",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_Sudan_1964_Sc168.jpg",
          width: 120,
          height: 102,
          alt: "Sudan",
        },
        {
          src: "/images/stamps06/stamp_Sudan_1964_Sc167.jpg",
          width: 120,
          height: 104,
          alt: "Sudan",
        },
        {
          src: "/images/stamps06/stamp_Sudan_1964_Sc169.jpg",
          width: 101,
          height: 120,
          alt: "Sudan",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "TOGO",
    meta: "(#533-537 Released September 10, 1964 - current value $3.00)",
    body: "- Five stamps featuring local natives, the Unisphere, and the Pieta. Perforate and imperforate versions were printed.",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_Togo_1964_01.jpg",
          width: 160,
          height: 160,
          alt: "Togo",
        },
        {
          src: "/images/stamps06/stamp_Togo_1964_05.jpg",
          width: 160,
          height: 160,
          alt: "Togo",
        },
        {
          src: "/images/stamps06/stamp_Togo_1964_03.jpg",
          width: 160,
          height: 160,
          alt: "Togo",
        },
      ],
      [
        {
          src: "/images/stamps06/stamp_Togo_1964_02.jpg",
          width: 160,
          height: 160,
          alt: "Togo",
        },
        {
          src: "/images/stamps06/stamp_Togo_1964_04.jpg",
          width: 160,
          height: 160,
          alt: "Togo",
        },
      ],
    ],
  },
  {
    meta: "(#537a Released September 10, 1964 - current value $3.00)",
    body: "- A souvenir sheet incorporating the two highest stamp values, with simulated perforations.",
    rows: [
      [
        {
          src: "/images/stamps06/stamp_Togo_1965_537ai.jpg",
          width: 320,
          height: 218,
          alt: "Togo",
        },
      ],
    ],
  },
];

/**
 * Postage Stamps of the Fair — Sierra Leone–Togo (legacy stamps07.html → /stamps06).
 * Shared StampsHero (1905×826). Nav Page 7.
 * PREVIOUS → /stamps05; NEXT → /stamps07.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Stamps06Page() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <article className={styles.article} aria-labelledby="stamps06-title">
        <header className={styles.titleBar}>
          <h1 id="stamps06-title" className={styles.titleBarMain}>
            Sierra Leone&nbsp;&nbsp;-&nbsp;&nbsp;Togo
          </h1>
        </header>

        <div className={styles.articleInner}>
          {ISSUES.map((issue, issueIndex) => {
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
        previousHref="/stamps05"
        explicitPrevious
        overviewHref="/stampsoverview"
        nextHref="/stamps07"
      />
    </>
  );
}
