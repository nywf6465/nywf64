import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Evolution — Building the Fair — nywf64.com",
  description:
    "Evolution — Unisphere, logos, and pavilion designs from Building the Fair on nywf64.com.",
};

type DesignSide = {
  src: string;
  alt: string;
  width: number;
  height: number;
  source: ReactNode;
  tall?: boolean;
};

type PavilionPair = {
  title: string;
  proposed: DesignSide;
  final: DesignSide;
  note?: ReactNode;
  noteOn?: "proposed" | "final";
};

const PAVILION_PAIRS: PavilionPair[] = [
  {
    title: "Panama - Panama and Central America",
    proposed: {
      src: "building51.jpg",
      alt: "Panama Concept",
      width: 300,
      height: 181,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 4</em>
          <br />
          January 17, 1962
        </>
      ),
    },
    final: {
      src: "building84.jpg",
      alt: "Panama Final",
      width: 300,
      height: 150,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em>
          <br />
          September 26, 1963
        </>
      ),
    },
  },
  {
    title: "Federal Pavilion",
    noteOn: "proposed",
    note: (
      <>
        The New York World&apos;s Fair Corporation had hoped that the Federal
        Government would construct a major science pavilion for the Fair. To be
        called the{" "}
        <em>
          <Link href="/unista03" className={styles.featureLink}>
            Franklin National Center of Science and Education
          </Link>
        </em>
        , the huge circular domed building would have occupied all of Kennedy
        Circle. The eventual design was called the &quot;square doughnut.&quot;
      </>
    ),
    proposed: {
      src: "building87.jpg",
      alt: "Federal Concept",
      width: 300,
      height: 107,
      source: <>Source: US World&apos;s Fair Commission Report, December 1960</>,
    },
    final: {
      src: "building71.jpg",
      alt: "Federal Final",
      width: 300,
      height: 185,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 7</em>
          <br />
          January 24, 1963
        </>
      ),
    },
  },
  {
    title: "Eastman Kodak",
    proposed: {
      src: "building58.jpg",
      alt: "Kodak Concept",
      width: 300,
      height: 126,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 5</em>
          <br />
          May 17, 1962
        </>
      ),
    },
    final: {
      src: "building68.jpg",
      alt: "Kodak Final",
      width: 300,
      height: 117,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 7</em>
          <br />
          January 24, 1963
        </>
      ),
    },
  },
  {
    title: "Thailand",
    proposed: {
      src: "building62.jpg",
      alt: "Thailand Concept",
      width: 300,
      height: 160,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 6</em>
          <br />
          September 12, 1962
        </>
      ),
    },
    final: {
      src: "building67.jpg",
      alt: "Thailand Final",
      width: 300,
      height: 225,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 7</em>
          <br />
          January 24, 1963
        </>
      ),
    },
  },
  {
    title: "Minnesota",
    proposed: {
      src: "building215.jpg",
      alt: "Minnesota Concept",
      width: 300,
      height: 252,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em>
          <br />
          April 22, 1963
        </>
      ),
    },
    final: {
      src: "building214.jpg",
      alt: "Minnesota Final",
      width: 300,
      height: 105,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Operations Manual</em>
        </>
      ),
    },
  },
  {
    title: "Transportation and Travel",
    proposed: {
      src: "building88.jpg",
      alt: "T&T Concept",
      width: 300,
      height: 198,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 4</em>
          <br />
          January 17, 1962
        </>
      ),
    },
    final: {
      src: "building76.jpg",
      alt: "T&T Final",
      width: 300,
      height: 147,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 7</em>
          <br />
          April 22, 1963
        </>
      ),
    },
  },
  {
    title: "Coca-Cola",
    proposed: {
      src: "building45.jpg",
      alt: "Coca-Cola Concept",
      width: 300,
      height: 135,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 2</em>
          <br />
          May 8, 1961
        </>
      ),
    },
    final: {
      src: "building77.jpg",
      alt: "Coca-Cola Final",
      width: 300,
      height: 220,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em>
          <br />
          September 26, 1963
        </>
      ),
    },
  },
  {
    title: "Simmons Beautyrest Pavilion",
    proposed: {
      src: "building52.jpg",
      alt: "Simmons Concept",
      width: 300,
      height: 190,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 4</em>
          <br />
          January 17, 1962
        </>
      ),
    },
    final: {
      src: "building69.jpg",
      alt: "Simmons Final",
      width: 300,
      height: 198,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 7</em>
          <br />
          April 22, 1963
        </>
      ),
    },
  },
  {
    title: 'Electric Companies - "Tower of Light"',
    proposed: {
      src: "building47.jpg",
      alt: "Tower of Light Concept",
      width: 192,
      height: 300,
      tall: true,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 4</em>
          <br />
          September 14, 1961
        </>
      ),
    },
    final: {
      src: "building57.jpg",
      alt: "Tower of Light Final",
      width: 300,
      height: 322,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 5</em>
          <br />
          May 17, 1962
        </>
      ),
    },
  },
  {
    title: "Wisconsin",
    proposed: {
      src: "building83.jpg",
      alt: "Wisconsin Concept",
      width: 300,
      height: 125,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em>
          <br />
          September 26, 1963
        </>
      ),
    },
    final: {
      src: "building59.jpg",
      alt: "Wisconsin Final",
      width: 300,
      height: 159,
      source: <>Source: PRUDEN PRODUCTS CO., Evansville, Wisconsin, advertising copy</>,
    },
  },
  {
    title: "Pakistan",
    proposed: {
      src: "building37.jpg",
      alt: "Pakistan Concept",
      width: 300,
      height: 171,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 7</em>
          <br />
          April 22, 1963
        </>
      ),
    },
    final: {
      src: "building85.jpg",
      alt: "Pakistan Final",
      width: 300,
      height: 178,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em>
          <br />
          September 26, 1963
        </>
      ),
    },
  },
  {
    title: "DuPont",
    proposed: {
      src: "building53.jpg",
      alt: "DuPont Concept",
      width: 300,
      height: 190,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 4</em>
          <br />
          September 14, 1961
        </>
      ),
    },
    final: {
      src: "building86.jpg",
      alt: "DuPont Final",
      width: 300,
      height: 175,
      source: (
        <>
          Source <em>DuPont Magazine</em>, March-April, 1964,
          <br />
          Volume 58, No. 2
        </>
      ),
    },
  },
  {
    title: "Florida",
    proposed: {
      src: "building54.jpg",
      alt: "Florida Concept",
      width: 300,
      height: 161,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 5</em>
          <br />
          May 17, 1962
        </>
      ),
    },
    final: {
      src: "building82.jpg",
      alt: "Florida Final",
      width: 300,
      height: 107,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em>
          <br />
          September 26, 1963
        </>
      ),
    },
  },
  {
    title: "World's Fair Assembly Pavilion",
    proposed: {
      src: "building70.jpg",
      alt: "World's Fair Pavilion Concept",
      width: 300,
      height: 135,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 7</em>
          <br />
          April 22, 1963
        </>
      ),
    },
    final: {
      src: "building78.jpg",
      alt: "World's Fair Pavilion Final",
      width: 300,
      height: 151,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em>
          <br />
          September 26, 1963
        </>
      ),
    },
  },
  {
    title: "Gas Companies",
    noteOn: "proposed",
    note: (
      <>
        The original design of the Gas Companies Pavilion called for glass
        curtains to extend from the top of the parasol to the second level.
        Economics predicated that this be changed to air curtains.
      </>
    ),
    proposed: {
      src: "building60.jpg",
      alt: "Gas Companies Concept",
      width: 300,
      height: 111,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em>
          <br />
          April 22, 1963
        </>
      ),
    },
    final: {
      src: "fesgas01.jpg",
      alt: "Gas Companies Final",
      width: 300,
      height: 202,
      source: (
        <>
          Source: Commercial Transparency by Photo Lab, Inc.,
          <br />
          Washington, DC
        </>
      ),
    },
  },
  {
    title: "Liebmann Breweries - Rheingold Beer",
    noteOn: "proposed",
    note: (
      <>
        The original design of the Rheingold Pavilion, by architects Kahn and
        Jacobs, featured a 60-foot-high beer garden atop concrete stilts and
        platforms supported by cantilevered aluminum trusses. A glass-walled
        elevator took visitors from the ground level to the platforms of the $2
        million structure. They &quot;Gay-nineties&quot; street scene that was
        constructed was, perhaps, a bit more inviting.
      </>
    ),
    proposed: {
      src: "building44.jpg",
      alt: "Rheingold Concept",
      width: 300,
      height: 149,
      source: <>SOURCE: Unknown, contribution of John Loughead</>,
    },
    final: {
      src: "building75.jpg",
      alt: "Rheingold Final",
      width: 300,
      height: 157,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em>
          <br />
          April 22, 1963
        </>
      ),
    },
  },
  {
    title: "Westinghouse",
    noteOn: "proposed",
    note: (
      <>
        <p>
          Corporate design pioneer Eliot Noyes championed the integration of
          architecture, branding, and graphic design. Beginning in 1960, he was
          retained by Westinghouse to remake their corporate identity, and this
          model shows the first iteration of the company&apos;s pavilion for the
          1964 New York World&apos;s Fair.
        </p>
        <p>
          The building is designed to contain eight major exhibits, each
          contained in a globe forty-five feet in diameter. The eight spheres
          surround a central lobby, and moving sidewalks carry the viewer from
          one exhibit to another. For reasons of economy, this scheme was not
          built.
        </p>
      </>
    ),
    proposed: {
      src: "building243.jpg",
      alt: "Eliot Noyes Westinghous Design",
      width: 300,
      height: 224,
      source: <>SOURCE: © Eliot Noyes Industrial Design</>,
    },
    final: {
      src: "building244.jpg",
      alt: "Final Westinghouse Design",
      width: 286,
      height: 300,
      source: (
        <>
          SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em>
          <br />
          April 22, 1963
        </>
      ),
    },
  },
];

function DesignCard({
  side,
  label,
}: {
  side: DesignSide;
  label: string;
}) {
  return (
    <div className={styles.media}>
      <Image
        src={`/images/building09/${side.src}`}
        alt={side.alt}
        width={side.width}
        height={side.height}
        className={side.tall ? `${styles.photo} ${styles.photoTall}` : styles.photo}
        unoptimized
      />
      <p className={styles.designLabel}>{label}</p>
      <p className={styles.source}>{side.source}</p>
    </div>
  );
}

function PavilionComparison({ pair }: { pair: PavilionPair }) {
  return (
    <section className={styles.section} aria-label={pair.title}>
      <h3 className={styles.pavilionLabel}>{pair.title}</h3>
      <div className={styles.row}>
        <div>
          {pair.note && pair.noteOn === "proposed" ? (
            <div className={styles.note}>{pair.note}</div>
          ) : null}
          <DesignCard side={pair.proposed} label="Proposed Design" />
        </div>
        <div>
          {pair.note && pair.noteOn === "final" ? (
            <div className={styles.note}>{pair.note}</div>
          ) : null}
          <DesignCard side={pair.final} label="Final Design" />
        </div>
      </div>
    </section>
  );
}

/**
 * Building the Fair — Evolution.
 * Body from legacy building10.html (mapped to /building09 as Page 9 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Building the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/building/buildinghero.jpg"
            alt="Building the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BuildingNavChrome />

      <article className={styles.article} aria-labelledby="building09-title">
        <header className={styles.titleBar}>
          <h1 id="building09-title" className={styles.titleBarMain}>
            Evolution
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section
            className={styles.section}
            aria-labelledby="unisphere-evolution"
          >
            <h2 id="unisphere-evolution" className={styles.sectionLabel}>
              Evolution of Unisphere as Theme Center
            </h2>
            <div className={styles.row}>
              <div className={styles.media}>
                <Image
                  src="/images/building09/building25.jpg"
                  alt="Original Unisphere Conception"
                  width={200}
                  height={179}
                  className={`${styles.photo} ${styles.photoNarrow}`}
                  unoptimized
                />
                <p className={styles.caption}>Inception, 1960</p>
              </div>
              <div className={styles.body}>
                <p>
                  The concept had called for Unisphere to <em>rotate</em> on its
                  base but that scheme was deemed impractical. By the time the
                  Fair&apos;s symbol was announced, water jets obscured the base so
                  that Unisphere would <em>appear</em> to &quot;float&quot; above
                  its reflecting pool. The Equator and Tropic rings were obviously
                  larger than the other latitudes. Lights whirled about the
                  orbitals.
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.media}>
                <Image
                  src="/images/building09/building24.jpg"
                  alt="Refined Unisphere Conception"
                  width={300}
                  height={166}
                  className={styles.photo}
                  unoptimized
                />
                <p className={styles.caption}>Refined, 1961</p>
              </div>
              <div className={styles.body}>
                <p>
                  By 1961 the design had been modified to one much closer to the
                  armillary sphere that was eventually constructed. A tripod base
                  supports the structure in a large, circular pool and fountains
                  placed away from the base rise and fall in a circular pattern
                  suggesting movement. Special lighting effects also suggest
                  movement.
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.media}>
                <Image
                  src="/images/building09/building30.jpg"
                  alt="Clarke & Rapuano's Concept"
                  width={300}
                  height={188}
                  className={styles.photo}
                  unoptimized
                />
                <p className={styles.caption}>
                  Clarke &amp; Rapuano&apos;s concept of the Main Mall
                </p>
              </div>
              <div className={styles.body}>
                <p>
                  <em>Clarke and Rapuano&apos;s</em> gorgeous concept artwork
                  appeared in 1962. Looking up the Fair&apos;s Main Mall from the
                  Court of the Astronauts to Unisphere, this artwork is the closest
                  concept of what the Main Mall and Unisphere would eventually look
                  like when the Fair opened in 1964. The{" "}
                  <em>Clarke and Rapuano </em>
                  artwork served as the basis for the Postal Department&apos;s
                  commemorative stamp issue for the Fair.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="logo-evolution">
            <h2 id="logo-evolution" className={styles.sectionLabel}>
              Evolution of the Fair&apos;s Logo
            </h2>
            <div className={styles.body}>
              <p>
                The New York World&apos;s Fair logo changed as the design of
                Unisphere was refined. Prior to Unisphere being selected as the
                Theme Center, the Fair utilized an orbiting earth and &quot;Big
                Dipper&quot; logo to represent &quot;Man&apos;s Achievements in an
                Expanding Universe,&quot; one of the oft-repeated themes of the
                Fair. After Unisphere was announced as Theme Center the logo, used
                between 1961 and late 1962, reflected the design of the symbol as
                conceived; Unisphere appears with no base and actual satellites
                orbit it. The final logo depicted a stylized Unisphere as it would
                appear at the Fair, complete with a base and simple orbit rings.
              </p>
            </div>
            <div className={styles.logoRow}>
              <div className={styles.media}>
                <Image
                  src="/images/building09/building11.jpg"
                  alt="Logo, 1960"
                  width={200}
                  height={134}
                  className={styles.photoPlain}
                  unoptimized
                />
                <p className={styles.caption}>Logo, c. 1960</p>
              </div>
              <div className={styles.media}>
                <Image
                  src="/images/building09/logoearly.jpg"
                  alt="Logo 1961-1962"
                  width={150}
                  height={197}
                  className={styles.photoPlain}
                  unoptimized
                />
                <p className={styles.caption}>Logo, c. 1961-1962</p>
              </div>
              <div className={styles.media}>
                <Image
                  src="/images/building09/building23.jpg"
                  alt="Logo 1962-1972"
                  width={150}
                  height={176}
                  className={styles.photoPlain}
                  unoptimized
                />
                <p className={styles.caption}>Logo, c. 1963-1972</p>
              </div>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="pavilion-evolution"
          >
            <h2 id="pavilion-evolution" className={styles.sectionLabel}>
              Evolution of Pavilion Designs
            </h2>
            <div className={styles.body}>
              <p>
                More than 160 fabulous structures rose from the grounds of Flushing
                Meadow Park between 1962 and 1964. The pavilions that hosted
                millions of visitors at the Fair were often not the same structures
                that had been originally conceived. Budget cutbacks,
                impracticalities and relocation to other sites on the Fairgrounds
                resulted in numerous changes. Some pavilions were{" "}
                <em>dramatically</em> different from the architect&apos;s original
                conception.
              </p>
            </div>
            {PAVILION_PAIRS.map((pair) => (
              <PavilionComparison key={pair.title} pair={pair} />
            ))}
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building08"
        explicitPrevious
        nextHref="/building10"
      />
    </>
  );
}
