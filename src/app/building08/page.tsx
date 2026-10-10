import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Phantoms Gallery — Building the Fair — nywf64.com",
  description:
    "Phantoms Gallery — renderings and models of pavilions that never were at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function BrandMark() {
  return (
    <>
      <span className={styles.brandNy}>nywf</span>
      <span className={styles.brandWf}>64</span>
      <span className={styles.brandCom}>.com</span>
    </>
  );
}

function Source({ children }: { children: ReactNode }) {
  return <p className={styles.source}>{children}</p>;
}

type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  plain?: boolean;
  tall?: boolean;
  sketch?: boolean;
  source?: ReactNode;
  caption?: string;
};

function GalleryEntry({
  title,
  photos,
  children,
}: {
  title: string;
  photos: GalleryPhoto[];
  children: ReactNode;
}) {
  return (
    <section className={styles.entry} aria-label={title}>
      <h2 className={styles.sectionLabel}>{title}</h2>
      <div className={styles.row}>
        <div className={styles.media}>
          {photos.map((photo, index) => (
            <div key={`${photo.src}-${index}`}>
              <Image
                src={`/images/building08/${photo.src}`}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={[
                  photo.plain ? styles.photoPlain : styles.photo,
                  photo.tall ? styles.photoTall : "",
                  photo.sketch ? styles.photoSketch : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                unoptimized
              />
              {photo.caption ? (
                <p className={styles.caption}>{photo.caption}</p>
              ) : null}
              {photo.source ? <Source>{photo.source}</Source> : null}
              {index < photos.length - 1 && photos.length > 1 ? (
                <hr className={styles.rule} />
              ) : null}
            </div>
          ))}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}

/**
 * Building the Fair — Phantoms Gallery.
 * Body from legacy building09.html (mapped to /building08 as Page 8 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building08Page() {
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

      <article className={styles.article} aria-labelledby="building08-title">
        <header className={styles.titleBar}>
          <h1 id="building08-title" className={styles.titleBarMain}>
            Phantoms Gallery
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.entry} aria-label="Long Island Pavilion">
            <h2 className={styles.sectionLabel}>Long Island Pavilion</h2>
            <p className={styles.clipHeadline}>Plan Pavilion to Show</p>
            <p className={styles.clipHeadline}>L.I.&apos;s World at the Fair</p>
            <p className={styles.clipByline}>By GROVER RYDER</p>
            <div className={styles.clipCols}>
              <div className={styles.body}>
                <p>
                  An ambitious plan for Long Island participation in the 1964 New
                  York World&apos;s Fair was outlined yesterday by the Long Island
                  Association.
                </p>
                <p>
                  Included in the master plan is a Long Island Exhibits Pavilion of
                  futuristic design which would be built at the Flushing Meadow
                  fairground &quot;to serve as a spectacular showcase for commerce,
                  industry, recreational and education facilities in the Long
                  Island area.&quot;
                </p>
                <div className={styles.media}>
                  <Image
                    src="/images/building08/building38.jpg"
                    alt="Long Island Pavilion"
                    width={250}
                    height={333}
                    className={`${styles.photo} ${styles.photoSketch}`}
                    unoptimized
                  />
                  <p className={styles.caption}>
                    Artist&apos;s sketch shows proposed Long Island exhibits
                    pavilion for World&apos;s Fair. It is topped by an observation
                    deck and a map motif of Long Island runs down its side.
                  </p>
                  <Source>
                    SOURCE: <em>New York Daily News</em>, August 22, 1960
                  </Source>
                </div>
              </div>
              <div className={styles.body}>
                <p>
                  The streamlined structure, designed to meet the requirements of
                  all Long Island participants, would be 150 by 488 feet. It would
                  enclose on two floors a total of 100,000 square feet of exhibit,
                  theatre and special events space.
                </p>
                <p className={styles.subLabel}>Plan Monorail Lift</p>
                <p>
                  The pavilion would be dominated by an observation deck and
                  restaurant, accommodating several hundred people. It would be
                  reached by a monorail lift which would also provide a view of the
                  fair.
                </p>
                <p>
                  The proposed plans also call for a rolling sidewalk that would
                  move the audience the length of the building, providing a view of
                  the exhibits and special features below.
                </p>
                <p>
                  A preliminary sketch of the pavilion and an outline of the
                  LIA&apos;s program for the fair have been approved by Stuart
                  Constable, vice president in charge of operations for the
                  World&apos;s Fair Committee.
                </p>
                <p>
                  The LIA is presently one of the prime backers of the Long Island
                  Fair to be held this fall in Roosevelt Raceway.
                </p>
                <p className={styles.subLabel}>Linked With L.I. Fair</p>
                <p>
                  LIA President Morris Rochman declared that it was significant that
                  all companies under-writing Long Island&apos;s preliminary planning
                  for the World&apos;s Fair also are closely identified with the
                  improved and expanded Long Island Fair.
                </p>
                <p>
                  &quot;This relationship,&quot; he added, &quot;is not accidental,
                  but part of the long range planning of the LIA. It included the
                  intention to construct our World&apos;s Fair facilities so that
                  they may be claimed at the close of the 1964-65 exposition and
                  made part of the continuing Long Island Fair.&quot;
                </p>
              </div>
            </div>
          </section>

          <GalleryEntry
            title="Arnold Bakeries"
            photos={[
              {
                src: "building21.jpg",
                alt: "Arnold Bakeries",
                width: 300,
                height: 159,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 2,
                    <br />
                    May 8, 1961
                  </>
                ),
              },
            ]}
          >
            <p>
              Model of the proposed Arnold Bakeries Pavilion. The baker was among
              the first firms to express an interest in the Fair.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Camp Cayuga at the Fair"
            photos={[
              {
                src: "building22.jpg",
                alt: "Camp Cayuga at the Fair",
                width: 300,
                height: 196,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 2,
                    <br />
                    May 8, 1961
                  </>
                ),
              },
            ]}
          >
            <p>
              Camp Cayuga at the Fair was planned as a 40,000 sq. foot day camp for
              children.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="United Nations Agencies Pavilion"
            photos={[
              {
                src: "building26.jpg",
                alt: "United Nations Agencies",
                width: 300,
                height: 146,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 4,
                    <br />
                    January 17, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              The World&apos;s Fair Corporation worked hard to get the United
              Nations to sign on with the Fair. The pavilion would have occupied a
              site near the Vatican Pavilion beside the Long Island Expressway. The
              UN choose to sponsor a pavilion at Montreal&apos;s Expo67 instead. In
              1965, the United Nations did participate in the Fair and assumed
              occupancy of the vacated Sierra Leone Pavilion.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Pavilion of Argentina"
            photos={[
              {
                src: "building41.jpg",
                alt: "Pavilion of Argentina",
                width: 300,
                height: 78,
                plain: true,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair{" "}
                    <em>
                      Groundbreaking Brochure for the Pavilion of Argentina,
                    </em>{" "}
                    September 11, 1963
                  </>
                ),
              },
            ]}
          >
            <p>
              The strange case of the Pavilion of Argentina... This pavilion was
              actually constructed by a private Argentine group to host the exhibit
              of Argentina. The pavilion was completed but the sponsors of the
              pavilion could not secure the financing to provide exhibits or
              staffing. So the pavilion was completed without a tenant!
            </p>
            <p>
              The World&apos;s Fair Corporation assumed control of the structure. In
              1964, the building housed an exhibit of contemporary art. In 1965, the
              building housed the Bargreen Buffet!
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Senegal Pavilion"
            photos={[
              {
                src: "building27.jpg",
                alt: "Senegal Pavilion",
                width: 300,
                height: 168,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 4,
                    <br />
                    January 17, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              Many emerging African nations wished to participate in the Fair,
              Senegal among them. Senegal had selected a site along the Avenue of
              African Nations in an area that eventually hosted the Garden of
              Meditation.
            </p>
          </GalleryEntry>

          <section className={styles.entry} aria-label="Heartland States Exhibit">
            <h2 className={styles.sectionLabel}>Heartland States Exhibit</h2>
            <div className={styles.row}>
              <div className={styles.media}>
                <Image
                  src="/images/building08/building29.jpg"
                  alt="Heartland States clipping"
                  width={258}
                  height={300}
                  className={`${styles.photo} ${styles.photoTall}`}
                  unoptimized
                />
                <Source>
                  SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 4,
                  <br />
                  January 17, 1962
                </Source>
              </div>
              <div className={styles.body}>
                <Image
                  src="/images/building08/building28.jpg"
                  alt="Heartland States Pavilion model"
                  width={300}
                  height={169}
                  className={styles.photo}
                  unoptimized
                />
                <p style={{ marginTop: "0.75rem" }}>
                  This 44,000 sq. foot pavilion would have held the exhibits of the
                  states of America&apos;s &quot;heartland&quot; ... North and South
                  Dakota, Nebraska and Kansas. Neighboring states had been invited
                  to join in the pavilion. Commissioners were appointed from each of
                  the four states and the exhibit was to feature a film with a new
                  type of projection system. The site of the pavilion, across from
                  the Federal Pavilion and adjacent to the New Mexico exhibit,
                  remained vacant during the Fair.
                </p>
              </div>
            </div>
          </section>

          <GalleryEntry
            title="Agriculture Pavilion"
            photos={[
              {
                src: "building216.jpg",
                alt: "Agriculture Pavilion",
                width: 300,
                height: 191,
                source: <>SOURCE: Unknown, contribution of John Loughead</>,
              },
            ]}
          >
            <p>
              The Agriculture Pavilion would have evoked traditional American farm
              structures in its form and use of wood and shingles. The project
              consisted of a large, barn like building housing the main displays, a
              tower reminiscent of a silo, and smaller pavilions for livestock and
              produce displays similar in feeling to a county fair. The pavilion
              would have occupied a site on the Pool of Industry, between that of
              the Equitable Demograph and the Hall of Education. The site remained
              vacant during the Fair.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Graphic Arts Pavilion"
            photos={[
              {
                src: "building31.jpg",
                alt: "Graphic Arts Pavilion",
                width: 300,
                height: 184,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 5,
                    <br />
                    May 17, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              The proposed Graphic Arts Pavilion would have been a multi-exhibitor
              pavilion located on a site in the Industrial Area that eventually was
              occupied by the Pavilion of American Interiors. Not much is known
              about this pavilion and the potential exhibitors that they solicited.
              However, the pavilion remained on the Fair&apos;s Site Map until at
              least April of 1963 before it quietly disappeared.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="American Art Pavilion"
            photos={[
              {
                src: "building217.jpg",
                alt: "American Art Pavilion auxiliary structure",
                width: 300,
                height: 214,
                source: <>SOURCE: Unknown, contribution of John Loughead</>,
              },
            ]}
          >
            <p>
              In a garden of flowers, pools and fountains, an arrangement of four
              kite-like structures and a central dome would have housed over 1,200
              pieces of contemporary art. An exhibition devoted to the history of
              art in America and live demonstrations of the techniques of various
              media would occupy the &quot;theme building,&quot; the central dome.
            </p>
            <p>
              The dome would have used an entirely new structural system of
              prefabricated pieces of perforated aluminum with transparent plastic
              fillers. Similar auxiliary structures (shown at left) were used in an
              exhibition in Israel in 1962.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="The World of Food"
            photos={[
              {
                src: "building32.jpg",
                alt: "The World of Food Pavilion",
                width: 300,
                height: 236,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 5,
                    <br />
                    May 17, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              The fascinating story of The World of Food has been explored in its
              own{" "}
              <Link href="/worfoo01" className={styles.featureLink}>
                Feature
              </Link>{" "}
              at <BrandMark /> and you are invited to visit it.
            </p>
            <p>
              Briefly, this multi-exhibitor pavilion occupied a site directly across
              from the main entrance to the Fair. Ground was broken and the steel
              skeleton was erected. Financial difficulties for the organizers
              resulted in major delays in construction. In April, 1964, just weeks
              before the opening of the Fair, the Fair Corporation ordered the steel
              dismantled and the site seeded over so that the eyesore would not
              greet visitors at the Fair&apos;s main entrance. Exhibitors who had
              contracted for space were offered exhibit space in the Better Living
              Building.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Pavilion of Israel"
            photos={[
              {
                src: "building39.jpg",
                alt: "Israel Pavilion - Rendering 1",
                width: 300,
                height: 112,
                plain: true,
              },
              {
                src: "building40.jpg",
                alt: "Israel Pavilion - Rendering 2",
                width: 300,
                height: 111,
                plain: true,
                source: (
                  <>
                    SOURCE: Presented courtesy of The Genia Schreiber University Art
                    Gallery, from the exhibition catalogue &quot;David Reznik: A
                    Retrospective,&quot; Curator: Sophia Dekel Caspi, Gallery
                    Curator: Prof. Mordechai Omer
                  </>
                ),
              },
            ]}
          >
            <p>
              Israel had originally planned to officially participate at the Fair.
              The Israeli Cabinet had approved funding and architect David Reznik
              had won the national architectural competition for the design of
              Israel&apos;s pavilion.
            </p>
            <p>
              According to the Exhibition Catalogue,{" "}
              <em>&quot;David Reznik: A Retrospective,&quot;</em>{" "}
              <em>
                &quot;The pavilion was designed as a truncated fortress, with only
                a few narrow, horizontal openings; it was three levels high, the
                movement between levels flowing on a sloping spiral ramp. The
                corners were rounded to create an elegant silhouette, softening its
                heavy appearance, and the surface was covered with rough
                plaster.&quot;
              </em>
            </p>
            <p>
              The pavilion would have occupied the site that was eventually assumed
              by the African Pavilion. Israel withdrew from the Fair for budget
              reasons and decided to concentrate their efforts on an exhibit at
              Montreal&apos;s Expo67. This designed served as the basis of their
              exhibit for that Fair.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Marine Center Exhibit"
            photos={[
              {
                src: "building33.jpg",
                alt: "Marine Center Exhibit",
                width: 300,
                height: 149,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 5,
                    <br />
                    May 17, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              The Marine Center signed on early with the Fair and remained on the
              Site Map until 1963. It would have occupied the 130,000 sq. foot site
              that was assumed by the Hall of Science in the Transportation Area of
              the Fair. It included a curved pavilion bordering on an artificial
              lake with below-water lower level where visitors would see underwater
              exhibits through a glass wall. The upper levels would display boats
              and related marine products.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Motoring Safety Center"
            photos={[
              {
                src: "building219.jpg",
                alt: "Motoring Safety Center",
                width: 300,
                height: 139,
                source: <>SOURCE: Unknown, contribution of John Loughead</>,
              },
            ]}
          >
            <p>
              The Motoring Safety Center would have featured driver-operated
              miniature cars speeding along a miniature highway network over a
              miniature countryside. An observation platform for Fair visitors would
              be constructed above. The exhibit would have included a driver
              education theater and testing rooms to determine driver aptitudes and
              skills.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="State of Georgia"
            photos={[
              {
                src: "building34.jpg",
                alt: "Georgia Pavilion",
                width: 300,
                height: 162,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 5,
                    <br />
                    May 17, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              By mid-1962, the State of Georgia exhibit was being developed by the
              state&apos;s Department of Commerce. Funds had been allocated and an
              architect selected. The pavilion would have occupied the 69,584 sq.
              foot site that eventually hosted the Hollywood Pavilion.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Arch of the Americas"
            photos={[
              {
                src: "building35.jpg",
                alt: "Arch of the Americas",
                width: 274,
                height: 300,
                tall: true,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 6,
                    <br />
                    September 12, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              The huge arch, sponsored by the Organization of the American States
              (O.A.S. - North, Central and South American <em>nations</em>, that is)
              would have spanned the Avenue of the Americas near the Fair&apos;s
              main entrance.
            </p>
            <p>
              The Fair Corporation was quite excited about this feature of the Fair.
              It is shown prominently in many of the Fair&apos;s official
              publications and it also appears on many licensed souvenir products.
            </p>
            <p>
              The O.A.S. withdrew their participation and, along with them, went the
              Arch of the Americas.
            </p>
            <p>
              Owens Corning was also interested in constructing and hosting the
              arch, hoping for the same sort of arrangement with the Fair
              Corporation that US Steel enjoyed with their sponsorship of Unisphere.
              This association never came to pass and the Arch went unconstructed.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="Pavilion of France"
            photos={[
              {
                src: "building36.jpg",
                alt: "Pavilion of France",
                width: 300,
                height: 219,
                source: (
                  <>
                    SOURCE: NY World&apos;s Fair <em>Progress Report</em> No. 6,
                    <br />
                    September 12, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              The Pavilion of France would have been one of the largest national
              pavilions at the Fair. Consisting of three geometric forms, it would
              have occupied a site behind the Pavilion of Spain, across from the
              Lunar Fountain.
            </p>
            <p>
              Ground was broken for the pavilion on February 5, 1963. This was a
              privately sponsored exhibit since France could not officially
              participate in the Fair.
            </p>
            <p>
              No doubt, having a French Pavilion at the Fair was a matter of real
              pride to a World&apos;s Fair being snubbed by the Paris-based Bureau
              of International Expositions. However, construction of the pavilion
              never took place past the groundbreaking. There eventually was a
              &quot;French Pavilion&quot; at the Fair. It was closed by the Fair
              Corporation for not being &quot;French enough!&quot;
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="American Indian Exposition"
            photos={[
              {
                src: "building218.jpg",
                alt: "American Indian Pavilion",
                width: 300,
                height: 129,
                source: <>SOURCE: Unknown, contribution of John Loughead</>,
              },
              {
                src: "building42.jpg",
                alt: "American Indian Village",
                width: 300,
                height: 139,
                plain: true,
                source: (
                  <>
                    SOURCE: <em>Fair News</em>,
                    <br />
                    December 20, 1962
                  </>
                ),
              },
            ]}
          >
            <p>
              The American Indian Exposition has been explored in its own{" "}
              <Link href="/amind01" className={styles.featureLink}>
                Feature
              </Link>{" "}
              at <BrandMark /> and you are invited to visit it.
            </p>
            <p>
              The American Indian Exposition would have occupied a 33,000 sq. foot
              site in the Lake Area of the Fair and would have been an integrated
              display of the history, lore, crafts and tribal rites of the American
              Indians.
            </p>
            <p>
              The ambitious original design (top) would have featured a ground-floor
              exhibition area, a terrace platform for outdoor exhibits and
              refreshments and a theater supported on four immense piers that would
              have housed steps and mechanical services.
            </p>
            <p>
              The much scaled-back final design (bottom) would have featured a
              Native American village. The exhibit was never constructed.
            </p>
          </GalleryEntry>

          <GalleryEntry
            title="World's Fair Model Pavilion"
            photos={[
              {
                src: "building220.jpg",
                alt: "World's Fair Model Pavilion",
                width: 300,
                height: 161,
                source: <>SOURCE: Unknown, contribution of Gary Holmes</>,
              },
            ]}
          >
            <p>
              This Edward Durell Stone design for a proposed pavilion at the
              1964/1965 New York World&apos;s Fair would have been constructed to
              house and display the Fair&apos;s Official Scale Model. The
              World&apos;s Fair Corporation tried unsuccessfully to find a sponsor
              for the pavilion. It was never constructed and the American Express
              pavilion eventually played host to the Fair&apos;s model.
            </p>
          </GalleryEntry>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building07"
        explicitPrevious
        nextHref="/building09"
      />
    </>
  );
}
