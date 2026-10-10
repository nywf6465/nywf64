import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Documenting the Progress — Building the Fair — nywf64.com",
  description:
    "Documenting the Progress — Fair News, Progress Reports, and groundbreaking brochures from Building the Fair on nywf64.com.",
};

const FAIR_NEWS_COVERS = [
  { src: "fairnews01.jpg", width: 191, height: 250 },
  { src: "fairnews04.jpg", width: 190, height: 250 },
  { src: "fairnews03.jpg", width: 190, height: 250 },
] as const;

const PROGRESS_ROW1 = [
  { src: "ProgRepOne01.jpg", width: 125, height: 162, alt: "PROGRESS REPORT #1" },
  { src: "ProgRepOne02.jpg", width: 125, height: 163, alt: "PROGRESS REPORT #2" },
  { src: "ProgRepOne03.jpg", width: 125, height: 161, alt: "PROGRESS REPORT #3" },
  { src: "ProgRepTwo04.jpg", width: 125, height: 162, alt: "PROGRESS REPORT #4" },
] as const;

const PROGRESS_ROW2 = [
  { src: "ProgRepTwo05.jpg", width: 125, height: 161, alt: "PROGRESS REPORT #5" },
  { src: "ProgRepTwo06.jpg", width: 125, height: 163, alt: "PROGRESS REPORT #6" },
  { src: "ProgRepThree07.jpg", width: 125, height: 162, alt: "PROGRESS REPORT #7" },
  { src: "ProgRepThree08.jpg", width: 125, height: 162, alt: "PROGRESS REPORT #8" },
] as const;

/**
 * Building the Fair — Documenting the Progress.
 * Body from legacy building07.html (mapped to /building06 as Page 6 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building06Page() {
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

      <article className={styles.article} aria-labelledby="building06-title">
        <header className={styles.titleBar}>
          <h1 id="building06-title" className={styles.titleBarMain}>
            Documenting the Progress
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.section} aria-labelledby="fair-news-label">
            <h2 id="fair-news-label" className={styles.sectionLabel}>
              FAIR NEWS
            </h2>
            <div className={styles.coverRow}>
              {FAIR_NEWS_COVERS.map((cover) => (
                <Image
                  key={cover.src}
                  src={`/images/building06/${cover.src}`}
                  alt="FAIR NEWS Cover"
                  width={cover.width}
                  height={cover.height}
                  className={styles.coverPlain}
                  unoptimized
                />
              ))}
            </div>
            <div className={styles.fairnewsSplit}>
              <div className={styles.fairnewsStack}>
                <Image
                  src="/images/building06/fairnews05.jpg"
                  alt="FAIR NEWS Inside"
                  width={193}
                  height={250}
                  className={styles.coverPlain}
                  unoptimized
                />
                <Image
                  src="/images/building06/fairnews06.jpg"
                  alt="FAIR NEWS Inside"
                  width={194}
                  height={250}
                  className={styles.coverPlain}
                  unoptimized
                />
              </div>
              <div className={styles.body}>
                <p>
                  From June, 1962 through March,1964 the Communications and Public
                  Relations Department of the 1964/1965 New York World&apos;s Fair
                  Corporation published <em>FAIR NEWS</em>, a newsletter to keep
                  exhibitors and interested parties informed of the progress of
                  the Fair.
                </p>
                <p>
                  Numbering twenty-one issues in all, the newsletters provided a
                  wealth of information about on the progress of construction of
                  the 1964/1965 New York World&apos;s Fair, reporting on new
                  exhibits and exhibitors to the Fair (including many that never
                  materialized), Walt Disney&apos;s involvement in the Fair,
                  visits by important dignitaries and other red-letter events.
                  Other topics included licensing programs, advance ticket sales
                  progress and labor activities.
                </p>
              </div>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="progress-reports-label"
          >
            <h2 id="progress-reports-label" className={styles.sectionLabel}>
              PROGRESS REPORTS
            </h2>
            <div className={styles.progressGrid}>
              {PROGRESS_ROW1.map((cover) => (
                <Image
                  key={cover.src}
                  src={`/images/building06/${cover.src}`}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  className={styles.coverBordered}
                  unoptimized
                />
              ))}
              {PROGRESS_ROW2.map((cover) => (
                <Image
                  key={cover.src}
                  src={`/images/building06/${cover.src}`}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  className={styles.coverBordered}
                  unoptimized
                />
              ))}
            </div>
            <div className={styles.progressTail}>
              <div className={styles.progressCovers}>
                <Image
                  src="/images/building06/ProgRepThree09.jpg"
                  alt="PROGRESS REPORT #9"
                  width={125}
                  height={162}
                  className={styles.coverBordered}
                  unoptimized
                />
                <Image
                  src="/images/building06/building228.jpg"
                  alt='"The Fair in 1965"'
                  width={125}
                  height={162}
                  className={styles.coverBordered}
                  unoptimized
                />
              </div>
              <div className={styles.body}>
                <p>
                  From January, 1961 through September,1963 the Communications and
                  Public Relations Department of the 1964/1965 New York
                  World&apos;s Fair Corporation published a series of nine detailed
                  reports to keep interested parties abreast of developments at the
                  Fair.
                </p>
                <p>
                  These reports documented the work of the Fair Corporation
                  including construction of the Administration Building,
                  &quot;World&apos;s Fair Preview Day,&quot; selection of Unisphere
                  as the Theme Symbol of the Fair, efforts to attract exhibitors,
                  artist&apos;s renderings and photos of models of pavilions never
                  constructed and introduction of the Fair&apos;s logo. The reports
                  issued in 1963 documented some of the Fair&apos;s greatest
                  triumphs such as General Motors&apos; participation with it&apos;s{" "}
                  <em>Futurama</em> ride and the beginning of construction of major
                  industrial and transportation exhibits. They present
                  artist&apos;s conceptual drawings for international and state
                  exhibits and show how the Fair defended itself against a growing
                  chorus of critics amidst the controversy surrounding the lack of
                  the Bureau of International Expositions endorsement of the Fair.
                  The reports of 1964 documented the actual construction of the
                  Fair. A tenth and final report, &quot;The Fair in 1965,&quot; was
                  published during the interim period between the 1964 and 1965
                  operting seasons and focused on plans for the second season of
                  the Fair.
                </p>
              </div>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="groundbreaking-label"
          >
            <h2 id="groundbreaking-label" className={styles.sectionLabel}>
              GROUNDBREAKING BROCHURES
            </h2>
            <div className={styles.brochureSplit}>
              <div className={styles.brochureStack}>
                <Image
                  src="/images/building06/building18.jpg"
                  alt="Cover - Argentina Groundbreaking Brochure"
                  width={250}
                  height={165}
                  className={styles.coverBorderedWide}
                  unoptimized
                />
                <Image
                  src="/images/building06/building19.jpg"
                  alt="Cover - India Groundbreaking Brochure"
                  width={250}
                  height={158}
                  className={styles.coverBorderedWide}
                  unoptimized
                />
                <Image
                  src="/images/building06/building20.jpg"
                  alt="Cover - T&T Groundbreaking Brochure"
                  width={250}
                  height={190}
                  className={styles.coverBorderedWide}
                  unoptimized
                />
              </div>
              <div className={styles.body}>
                <p>
                  From time to time the New York World&apos;s Fair Corporation
                  issued two-tone brochures to commemorate groundbreaking
                  ceremonies and other celebrations signaling the start of
                  construction of pavilions. Not every exhibit was commemorated.
                  Some eighty such pamphlets in all were issued. In the case of
                  the 7-Up pavilion, a brochure commemorating their &quot;ground
                  uniting&quot; ceremony was issued. Dirt from every country in the
                  world that 7-Up had operations was sent to Flushing Meadows to be
                  sprinkled over the site where their pavilion would stand! One
                  brochure commemorated the visit of General Douglas MacArthur to
                  the Fair.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building05"
        explicitPrevious
        nextHref="/building07"
      />
    </>
  );
}
