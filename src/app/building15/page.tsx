import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building15.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Miracle in the Meadow II — Building the Fair — nywf64.com",
  description:
    "Miracle in the Meadow II — construction progress photos from Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — Miracle in the Meadow II.
 * Body from legacy building16.html (mapped to /building15 as Page 15 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building15Page() {
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

      <article className={styles.article} aria-labelledby="building15-title">
        <header className={styles.titleBar}>
          <h1 id="building15-title" className={styles.titleBarMain}>
            Miracle in the Meadow II
          </h1>
        </header>

        <div className={styles.articleInner}>

          <section className={styles.section} aria-labelledby="sec-0">
            <h2 id="sec-0" className={styles.sectionLabel}>
              Building the Fair
            </h2>
            <p className={styles.body}>Would the Fair be ready to open on time?</p>
            <p className={styles.body}>A recap of construction progress on Labor Day, 1963, showed pavilions in varying states of completion:</p>
            <p className={styles.body}>Austria -- structure being prefabricated in Austria.</p>
            <p className={styles.body}>Hall of Science -- driving piles.</p>
            <p className={styles.body}>Sinclair -- 30% completed, expected to be finished by October.</p>
            <p className={styles.body}>Unisphere -- all continents &amp; orbital rings in place, completion expected in September.</p>
            <p className={styles.body}>Federal Pavilion -- foundations complete, steel frame topped off August 22nd.</p>
            <p className={styles.body}>India -- Pile driving completed.</p>
            <p className={styles.body}>World of Food -- Piles completed, working on foundations, structural steel work to start September 2nd.</p>
            <p className={styles.body}>The utility system for the Fair involved 14 miles of water mains, 130 miles of high voltage electrical cables, 22 miles of storm and sanitary piping and 10 gas mains.</p>
            <p className={styles.body}>The huge scale model in the New York City Pavilion took over two years to build and cost $600,000.</p>
            <p className={styles.body}>No labor disagreements adversely affected progress toward the opening day goal.</p>
            <p className={styles.body}>Exhibitors and concessionaires put $550 million into construction and exhibits.</p>
            <p className={styles.body}>During July, 1963, 6,665 men worked at the Fair site and 2,332 worked on related arterial [highway] improvements.</p>
            <p className={styles.body}>The final steel beam was put in place on the Travelers&apos; "umbrella" dome on May 16, 1963.</p>
            <p className={styles.body}>The Simmons Beautyrest Pavilion was the first pavilion completed in the Industrial Area.</p>
            <p className={styles.body}>5,000 tons of steel went into the construction of the Federal Pavilion. About 250,000 tons of steel went into the construction of various exhibit buildings.</p>
            <p className={styles.body}>Before Formica could build its "House on the Hill," it had to build the hill; it used dirt excavated for other buildings that were constructed on the flat Fairgrounds.</p>
            <p className={styles.body}>The official "lighting up" of the General Electric Progressland dome, a display of multi-colored swirling lights, occurred on January 29, 1964. That date also marked the arrival of Disney&apos;s "Carousel of Progress" attraction at the pavilion.</p>
            <p className={styles.body}>By Labor Day, 1963, man-hours worked on the Fair totaled 12,936,660 with a payroll of $65,000,000.</p>
            <p className={styles.body}>Fair pavilions were constructed to withstand an Atlantic seaboard winter and exhibitors saved little in construction costs.</p>
            <p className={styles.body}>Of the thousands of trees growing in Flushing Meadow before the Fair, 200, ranging up to 50-feet tall, had to be transplanted because of construction.</p>
            <p className={styles.body}>No contractor hired a "night shift" for pavilion construction.</p>
            <p className={styles.body}>The Port Authority Heliport was completed and officially opened to the public on October 16, 1963.</p>
            <p className={styles.body}>The World&apos;s Fair Marina was made by the dredging of some two million cubic yards of silt from Flushing Bay.</p>
            <p className={styles.body}>Two years of planning, plus specially made cobblestones, went into the construction of Rheingold&apos;s "Little Old New York."</p>
            <p className={styles.body}>By the end of the summer of 1963, an additional 15,000 workers were thought needed in order to finish the Fair on time. Work was hastened in the last quarter of 1963 and the additional manpower was not needed.</p>
            <p className={styles.body}>The Gas Companies Pavilion was the first to start building. Groundbreaking was in April, 1962, twenty-four months before opening day.</p>
            <p className={styles.body}>The largest pavilions constructed for the Fair were General Motors&apos; and Ford&apos;s with 320,000 and 227,360 sq. feet of floor area.</p>
            <p className={styles.body}>More than 3,500 bench units were placed in street malls and park areas throughout the Fairgrounds as construction neared an end.</p>
            <p className={styles.body}>Besides Simmons, eleven other pavilions were complete inside and out by January, 1964 - Century Grill, Dynamic Maturity, Eastman Kodak, First National City Bank, Formica, the Heliport, Hall of Free Enterprise, International Plaza, the Post Office, Sinclair and Mobil.</p>
            <p className={styles.body}>The Fountains of the Planets, installed in the Pool of Industry, were completed by December 7, 1963 when they were activated in a preview show to test the water patterns, color, sound and fireworks displays.</p>
            <p className={styles.body}>Most pavilion foundations and roofs had an estimated "natural life" of five years.</p>
          </section>

          <section className={styles.section} aria-labelledby="sec-1">
            <h2 id="sec-1" className={styles.sectionLabel}>
              Port Authority Heliport
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building254.jpg"
                  alt=""
                  width={300}
                  height={165}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Aerial view shows construction</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE:<br />
                Screen Shot - NY World&apos;s Fair Publicity Film
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building190.jpg"
                  alt=""
                  width={234}
                  height={190}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The last steel girder for the Port Authority Exhibit building rose into place on January 31, 1962.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                February 19, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building103.jpg"
                  alt=""
                  width={292}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Steel Framework of the Heliport makes for an incredible sight.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building130.jpg"
                  alt=""
                  width={300}
                  height={254}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Heliport was the first building completed for the Fair and opened to the public on October 16, 1963.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building131.jpg"
                  alt=""
                  width={400}
                  height={335}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Passing motorists on the Grand Central Parkway watched in wonder as the Fair rose from the Meadow day by day.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-2">
            <h2 id="sec-2" className={styles.sectionLabel}>
              Ford Motor Company
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building104.jpg"
                  alt=""
                  width={300}
                  height={156}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The huge form of the Ford Motor Company pavilion takes shape.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building192.jpg"
                  alt=""
                  width={184}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>A two-ton top section of a 100-foot pylon is swung into place over the Rotunda entrance to the Ford Pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                April 16, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building112.jpg"
                  alt=""
                  width={300}
                  height={213}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The Exterior of the Ford pavilion nearly complete. The Hall of Science is under construction in the foreground.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building191.jpg"
                  alt=""
                  width={226}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Early construction of Unisphere shows a skeleton of latitudes and longitudes.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                July 22, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building239.jpg"
                  alt=""
                  width={296}
                  height={225}
                  className={styles.photo}
                  unoptimized
                />
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building240.jpg"
                  alt=""
                  width={285}
                  height={222}
                  className={styles.photo}
                  unoptimized
                />
                <p className={styles.source}>
                SOURCE: Bell System Promotional Film "<em>A Ballad for the Fair"</em><br />
                Presented Courtesy Mitch Dakelman and Ray Dashner Collection (unless otherwise noted)
                </p>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building15/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized />{" "}
              Webmaster&apos;s note... Click{" "}
              <Link href="/unisph08" className={styles.noteLink}>HERE</Link>
              {" "}to read more about the design &amp; construction of Unisphere!
            </p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building245.jpg"
                  alt=""
                  width={400}
                  height={292}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Fair nears completion - late Spring 1964</em>
                </figcaption>
                <p className={styles.source}>SOURCE: Online auction</p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building246.jpg"
                  alt=""
                  width={400}
                  height={316}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Fair nears completion</em>
                </figcaption>
                <p className={styles.source}>SOURCE: Online auction</p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-3">
            <h2 id="sec-3" className={styles.sectionLabel}>
              New York State Pavilion
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building188.jpg"
                  alt=""
                  width={186}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building111.jpg"
                  alt=""
                  width={300}
                  height={231}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>By Labor Day, 1963, foundations were complete and work was progressing on the exterior wall of the theater, on tower concrete and steel compression ring was being assembled on the ground within the tent&apos;s columns.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building242.jpg"
                  alt=""
                  width={314}
                  height={241}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Nearing completion in the spring of 1964.</em>
                </figcaption>
                <p className={styles.source}>SOURCE: online auction</p>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building15/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized />{" "}
              Webmaster&apos;s note... Click{" "}
              <Link href="/newyor04" className={styles.noteLink}>HERE</Link>
              {" "}to read more about the design &amp; construction of the New York
              State Pavilion!
            </p>
          </section>

          <section className={styles.section} aria-labelledby="sec-4">
            <h2 id="sec-4" className={styles.sectionLabel}>
              Federal Pavilion
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building122.jpg"
                  alt=""
                  width={300}
                  height={209}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Massive steel framework of the Federal Pavilion. The structure was built to be a permanent part of Flushing Meadow and more than 400 piles were driven to support the building.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building196.jpg"
                  alt=""
                  width={201}
                  height={134}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Federal Pavilion nears completion in the spring of 1964</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                January 22, 1964
                </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-5">
            <h2 id="sec-5" className={styles.sectionLabel}>
              Gas Companies
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building115.jpg"
                  alt=""
                  width={300}
                  height={151}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Construction scaffolding makes lacy curtains for the Gas Companies Pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building200.jpg"
                  alt=""
                  width={201}
                  height={153}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Gas, Inc. nears completion in the autumn of 1963.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                January 22, 1964
                </p>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building15/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized />{" "}
              Webmaster&apos;s note... Click{" "}
              <Link href="/fesgas06" className={styles.noteLink}>HERE</Link>
              {" "}to read about the design &amp; construction of the Gas Companies
              Pavilion!
            </p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building106.jpg"
                  alt=""
                  width={600}
                  height={283}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Early aerial view of construction progress on the Industrial Area of the Fair..</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
                </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-6">
            <h2 id="sec-6" className={styles.sectionLabel}>
              House of Good Taste - AMF Monorail
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building120.jpg"
                  alt=""
                  width={300}
                  height={189}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Traditional Home under construction at the House of Good Taste exhibit.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building194.jpg"
                  alt=""
                  width={197}
                  height={165}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Open steel framework of the AMF Monorail station shows tracks passing through the upper section of the structure.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                January 22, 1964
                </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-7">
            <h2 id="sec-7" className={styles.sectionLabel}>
              Austria - Vatican - Tower of Light
              <br />
              - Astral Fountain
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building197.jpg"
                  alt=""
                  width={199}
                  height={158}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Austrian Pavilion was prefabricated in Austria and shipped to the Fair.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                January 22, 1964
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building199.jpg"
                  alt=""
                  width={193}
                  height={151}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Vatican Pavilion under construction in late 1963</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                January 22, 1964
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building121.jpg"
                  alt=""
                  width={300}
                  height={220}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>One of the more unusual construction sites -- building the Tower of Light, 1963.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building127.jpg"
                  alt=""
                  width={289}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Scaffold surrounds the steel laticework of the Astral Fountain.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building15/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized />{" "}
              Webmaster&apos;s note... Click{" "}
              <Link href="/twrlit06" className={styles.noteLink}>HERE</Link>
              {" "}to read about the construction of the Tower of Light!
            </p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building201.jpg"
                  alt=""
                  width={235}
                  height={190}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Crews working on day and night shifts pave the huge complex of avenues. Most of the paving was done at night when traffic on the grounds was at a minimum. All curbing was laid in advance making the paving operation simple and fast.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                March 22, 1964
                </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-8">
            <h2 id="sec-8" className={styles.sectionLabel}>
              American Interiors - Mormon Church - Malaya
              <br />
              Johnson Wax
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building123.jpg"
                  alt=""
                  width={300}
                  height={229}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The unusual steel framework of the Tower of the Pavilion of American Interiors is evident in this photo.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building193.jpg"
                  alt=""
                  width={204}
                  height={158}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Mormon Pavilion nears completion late in 1963.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                January 22, 1964
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building195.jpg"
                  alt=""
                  width={201}
                  height={153}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The prefabricated structure of the Malay Pavilion was en-route to the Fair by September, 1963 so assembly was quick.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR NEWS</em><br />
                January 22, 1964
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building124.jpg"
                  alt=""
                  width={300}
                  height={194}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Johnson Wax "Golden Rondelle" rises between its petal supports.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-9">
            <h2 id="sec-9" className={styles.sectionLabel}>
              Rheingold - Pakistan
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building126.jpg"
                  alt=""
                  width={300}
                  height={177}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Construction of Rheingold&apos;s "Little Old New York"</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/building184.jpg"
                  alt=""
                  width={300}
                  height={215}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Pakistan&apos;s pavilion was enclosed by September, 1963.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
                </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-10">
            <h2 id="sec-10" className={styles.sectionLabel}>
              Builders of the Fair
            </h2>
            <h3 className={styles.subhead}>LABOR</h3>
            <p className={styles.body}>An army of almost 9,000 building and construction tradesmen are racing against time to assure that the Fair and the approaches will open on April 22, 1964. They play the final part in the long task of creating reality from an idea. The finished product, clean and polished, is labor&apos;s contribution to a great Fair. Unnoticed, but of equal importance, is the work on buried utilities and foundations, the hidden structural frames and mechanical equipment that make an exhibit possible.</p>
            <p className={styles.body}>More than 200 exhibits, buildings and other structures are under way at the Fair. It is an outstanding tribute to the building trades unions that no labor disagreement has adversely affected progress toward the opening day goal. The pledge of labor peace has been kept. By June 30, 1963, when collective bargaining agreements of fifteen of the construction trades were due to expire, most contracts had been successfully renegotiated. The other trades continued work without interruption until contracts were signed.</p>
            <p className={styles.body}>Early in the fair history, the Building and Construction Industry, both management and labor, established machinery to which all disputes, actual or potential, could be referred. Peter J. Brennan, president of the Building and Construction Trades Council; Peter W. Eller and Walter M. Colleran, chairman and secretary respectively, of the Building and Construction Industry Advisory Committee, and leaders from each union have cooperated to make it function effectively.</p>
            <p className={styles.body}>During July 1963, 6,665 men worked at the Fair site and 2,332 worked on related arterial improvements -- a total of 8,997. Since the start of the Fair complex and as of July 31, 1963, man hours of work totaled 12,936,660 with a total payroll of over $65,000,000.</p>
            <p className={styles.body}>With a little over six months to go, there is every indication that labor relations, with one of the greatest armies of workers ever assembled in a square mile site, will continue to be excellent and that labor&apos;s previous record of outstanding performance will be more than equaled.</p>
            <p className={styles.body}>More than 30,000 will be employed by the exhibitors and concessionaires at the Fair in maintenance, service and entertainment. The same care and forethought is being given to the problems of this even greater army. Means are being set up for ready adjustments of disputes. Results will, no doubt, come up to the record made during the construction period.</p>
            <p className={styles.source}>
              SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em> September
              26, 1963
            </p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building15/us18.jpg"
                  alt=""
                  width={300}
                  height={383}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Winter - early 1964. Would the Fair be ready to open on time?</em>
                </figcaption>
              </figure>
            </div>
          </section>

        </div>
      </article>

      <Nav2Bar
        previousHref="/building14"
        explicitPrevious
        nextHref="/building16"
      />
    </>
  );
}
