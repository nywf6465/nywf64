import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Miracle in the Meadow I — Building the Fair — nywf64.com",
  description:
    "Miracle in the Meadow I — construction progress photos from Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — Miracle in the Meadow I.
 * Body from legacy building15.html (mapped to /building14 as Page 14 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building14Page() {
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

      <article className={styles.article} aria-labelledby="building14-title">
        <header className={styles.titleBar}>
          <h1 id="building14-title" className={styles.titleBarMain}>
            Miracle in the Meadow I
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.webmaster}>
            Follow the{" "}
            <Image
              src="/images/building14/hand_rg.gif"
              alt=""
              width={33}
              height={14}
              className={styles.hand}
              unoptimized
            />{" "}
            <strong>Webmaster&apos;s note...</strong> links to additional pages on{" "}
            <strong>
              <span className={styles.nywf}>nywf</span>
              <span className={styles.nywf64}>64</span>
            </strong>
            .com featuring design and construction photos and stories!
          </p>

          <section className={styles.section} aria-labelledby="sec-0">
            <h2 id="sec-0" className={styles.sectionLabel}>
              Pile Driving
            </h2>
            <p className={styles.body}>More than 1200 acres of swampland was covered with fill to create Flushing Meadow Park in the mid-1930s. Piles (huge wooden timbers) had to be driven into the soil to support millions of tons of steel and concrete used in the construction of the Fair's pavilions. The ground beneath the Fair could not support many of the structures without the aid of these piles. The soil conditions at Flushing Meadow were so poor in some places that the piles would simply disappear beneath the Meadow while being driven! The area around the Pool of Industry was one such area while, closer to the Theme Center, the ground was more solid. Some 400 piles were driven to support the Federal Pavilion alone, a structure that was intended to be a permanent construction. In the case of the New York State Pavilion, steel piles support the observation towers while wood piles support the Tent of Tomorrow and a concrete slab supports the Theaterama building. Why wood and not something more permanent? Since almost all of the structures were built to be temporary, including the New York State Pavilion, there was no need for the cost of installing permanent steel piles. Wood served the purpose nicely since it was relatively inexpensive and, over time, would simply rot away in the marshy soil.</p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building92.jpg"
                  alt=""
                  width={250}
                  height={243}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Oregon timbers for General Electric foundations before being driven.</em>
                </figcaption>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/nys06.jpg"
                  alt=""
                  width={300}
                  height={234}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Foundation work on the New York State Pavilion shows sunken piles.</em>
                </figcaption>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building91.jpg"
                  alt=""
                  width={250}
                  height={171}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Pile driving for Gas Incorporated foundations.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 6</em><br />
                September 12, 1962
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building90.jpg"
                  alt=""
                  width={250}
                  height={162}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Concrete supporting pads cap deep-sunk timbers to make the substructure for the Eastman Kodak exhibit.</em>
                </figcaption>
              </figure>
            </div>
            <h3 className={styles.subhead}>Pile Driving the Bell System Pavilion</h3>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building231.jpg"
                  alt=""
                  width={243}
                  height={196}
                  className={styles.photo}
                  unoptimized
                />
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building232.jpg"
                  alt=""
                  width={221}
                  height={277}
                  className={styles.photo}
                  unoptimized
                />
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building233.jpg"
                  alt=""
                  width={254}
                  height={201}
                  className={styles.photo}
                  unoptimized
                />
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building234.jpg"
                  alt=""
                  width={301}
                  height={227}
                  className={styles.photo}
                  unoptimized
                />
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building235.jpg"
                  alt=""
                  width={284}
                  height={225}
                  className={styles.photo}
                  unoptimized
                />
                <p className={styles.source}>
                SOURCE: Bell System Promotional
Film "<em>A Ballad for the Fair"</em><br />
                Presented Courtesy Mitch
Dakelman and Ray Dashner Collection
              </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-1">
            <h2 id="sec-1" className={styles.sectionLabel}>
              Pool of Industry
            </h2>
            <p className={styles.body}>One of the larger construction jobs at the Fair was the creation of the Pool of Industry. Until the 1964/1965 World&apos;s Fair, the Flushing River flowed through the park. The majority of it was diverted through buried conduits beneath the Meadow as a part of the construction of the 1964/1965 Fair. The "burying" of the Flushing River created nine more acres of exhibit space. Four wells, located near Meadow Lake, provided six million gallons of subterranean water augmenting the natural flow and maintaining clean water in the lake and the above-ground section of the Flushing River that still ran through the Fairgrounds.</p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building49.jpg"
                  alt=""
                  width={300}
                  height={201}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The basic shape of the pool is created from the oval pond that was the "Lagoon of Nations" for the 1939/1940 World&apos;s Fair.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 4</em><br />
                January 17, 1962
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building56.jpg"
                  alt=""
                  width={300}
                  height={202}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Preliminary work is completed and the Pool of Industry takes its final form. The remanents of the Flushing River can still be seen in this aerial view.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 5</em><br />
                May 17, 1962
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building129.jpg"
                  alt=""
                  width={283}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Construction of the Fair and the Pool of Industry near completion. The intricate piping, lighting and fountain works of the Fountains of the Planets has been installed in this aerial view from late 1963.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building186.jpg"
                  alt=""
                  width={400}
                  height={302}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Early construction scene of the Industrial Area surrounding the Pool of Industry. Circular foundation takes shape for the Travelers' Insurance Pavilion while work begins on the Bell System Pavilion. Van Wyck Expressway construction can be seen in the background.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR
NEWS</em><br />
                December 20,
1962
              </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-2">
            <h2 id="sec-2" className={styles.sectionLabel}>
              General Motors
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building63.jpg"
                  alt=""
                  width={300}
                  height={170}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Aerial view of General Motors foundation work; pile driver is at center.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 6</em><br />
                September 12, 1962
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building189.jpg"
                  alt=""
                  width={231}
                  height={242}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>First steel goes into place in the construction of GM's rotunda structure which would house the "Avenue of Progress" and the "Product Plaza" exhibits.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR
NEWS</em><br />
                December 20,
1962
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building105.jpg"
                  alt=""
                  width={300}
                  height={94}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Steel framework in place. The GM Pavilion was the largest construction job at the Fair.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building249.jpg"
                  alt=""
                  width={300}
                  height={168}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Construction Progresses.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE:<br />
                Screen Shot - NY World&apos;s Fair Publicity Film
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building125.jpg"
                  alt=""
                  width={300}
                  height={192}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The giant tail fin "canopy" of GM's pavilion is under construction while the rotunda is nearly completed. Note the "construction shack" to the left of the rotunda. It is so large it could be mistaken for a pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building14/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized /> 
              Webmaster&apos;s note... Click 
              <Link href="/gm20" className={styles.noteLink}>HERE</Link>
               to read about the design &amp; construction of the Futu
            </p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building50.jpg"
                  alt=""
                  width={300}
                  height={237}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Central section of World&apos;s Fair showing construction of utilities and roads at the site of Unisphere and along the Main Mall to the Pool of Industry.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 4</em><br />
                January 17, 1962
              </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-3">
            <h2 id="sec-3" className={styles.sectionLabel}>
              Bell System
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building100.jpg"
                  alt=""
                  width={251}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The first section of steel is erected for the "floating wing" of the Bell System Pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building250.jpg"
                  alt=""
                  width={300}
                  height={165}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The steel skeleton of the wing waits to be covered with fiberglass panels.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: Screen Shot - NY World&apos;s<br />
                Publicity Film
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building108.jpg"
                  alt=""
                  width={300}
                  height={197}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The steel skeleton of the wing waits to be covered with fiberglass panels. The steel "floating wing" was 400 feet long. Construction of the telecommunications tower is well underway.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building236.jpg"
                  alt=""
                  width={285}
                  height={224}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Welder at work on the Bell Pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: Bell
System Promotional Film "<em>A Ballad for the Fair"</em><br />
                Presented Courtesy
Mitch Dakelman and Ray Dashner Collection (unless otherwise noted)
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building237.jpg"
                  alt=""
                  width={236}
                  height={227}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Framed view of the Bell Floating Wing under construction.</em>
                </figcaption>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building238.jpg"
                  alt=""
                  width={289}
                  height={226}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Workers prepare to pour the concrete surface of the lower level of the Bell System pavilion.</em>
                </figcaption>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building14/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized /> 
              Webmaster&apos;s note... Click 
              <Link href="/bell06" className={styles.noteLink}>HERE</Link>
               to read more about the design &amp; construction of the Be
            </p>
          </section>

          <section className={styles.section} aria-labelledby="sec-4">
            <h2 id="sec-4" className={styles.sectionLabel}>
              Eastman Kodak
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building93.jpg"
                  alt=""
                  width={250}
                  height={198}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Wooden flooring makes up the "moondeck" of the Kodak Pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building94.jpg"
                  alt=""
                  width={233}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Steel framework of the pavilion which has not been covered with the wooden "skin." Kodak's Picture Tower rises in the background.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
              </p>
              </figure>
            </div>
            <p className={styles.body}>A close examination of the construction photographs of the Kodak Pavilion reveals that wood planking covered the steel framework of the pavilion. This provided the underlayment for the poured concrete decking. It is amazing to see how much wood was used in the construction of a pavilion that appears to be made of free-flowing concrete!</p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building241.jpg"
                  alt=""
                  width={316}
                  height={204}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Nearing completion - winter 1963-1964.</em>
                </figcaption>
                <p className={styles.source}>SOURCE: online
auction</p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building114.jpg"
                  alt=""
                  width={300}
                  height={235}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The Kodak Pavilion is nearly complete in this aerial view. Concrete covers the wooden flooring of the pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-5">
            <h2 id="sec-5" className={styles.sectionLabel}>
              General Electric
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building187.jpg"
                  alt=""
                  width={300}
                  height={150}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Construction of the lower exhibit area and mid-section that would house the "Carousel of Progress" ride.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR
NEWS</em><br />
                December 20,
1962
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building101.jpg"
                  alt=""
                  width={300}
                  height={172}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Steel skeleton has the familiar shape of GE's domed pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building185.jpg"
                  alt=""
                  width={300}
                  height={179}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Simple elegance of the GE Pavilion is seen in this aerial view of a nearly completed structure.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building14/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized /> 
              Webmaster&apos;s note... Click 
              <Link href="/genele06" className={styles.noteLink}>HERE</Link>
               to read about the design &amp; construction of the General Electric
            </p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building182.jpg"
                  alt=""
                  width={400}
                  height={184}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Construction Progress on the Industrial Area of the Fair. The Van Wyck Expressway extension construction winds past the Fair site.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-6">
            <h2 id="sec-6" className={styles.sectionLabel}>
              Travelers Insurance
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building102.jpg"
                  alt=""
                  width={300}
                  height={240}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Lower exhibit area will support the "umbrella" dome containing "The Triumph of Man" exhibit.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em><br />
                April 22, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building110.jpg"
                  alt=""
                  width={300}
                  height={177}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Steel framework is covered over to take the shape of Travelers' "Red Umbrella of Protection."</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building251.jpg"
                  alt=""
                  width={300}
                  height={164}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Aerial shot shows roof is nearly completed</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: Screen Shot - NY World&apos;s<br />
                Fair Publicity Film
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building252.jpg"
                  alt=""
                  width={300}
                  height={182}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Interesting close-up view of construction</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: Screen Shot - NY World&apos;s<br />
                Fair Publicity Film
              </p>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building14/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized /> 
              Webmaster&apos;s note... Click 
              <Link href="/travelers07" className={styles.noteLink}>HERE</Link>
               to read about the design &amp; construction of the Travelers Pavilion!&lt;
            </p>
          </section>

          <section className={styles.section} aria-labelledby="sec-7">
            <h2 id="sec-7" className={styles.sectionLabel}>
              Coca-Cola - Hall of Free Enterprise
              <br />
              - Chrysler
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building117.jpg"
                  alt=""
                  width={300}
                  height={177}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Coca-Cola pavilion under construction. Carillon tower is at center.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building183.jpg"
                  alt=""
                  width={300}
                  height={214}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>"Pillars of Economic Wisdom" under construction at the Hall of Free Enterprise</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building116.jpg"
                  alt=""
                  width={300}
                  height={194}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Chrysler's "Show-go-Round" theater gets a roof!</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-8">
            <h2 id="sec-8" className={styles.sectionLabel}>
              IBM
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building107.jpg"
                  alt=""
                  width={274}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>IBM's ovoid theater, the "Information Machine," rises over the slanted supports that will also bear the "People Wall."</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building253.jpg"
                  alt=""
                  width={300}
                  height={168}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>IBM's ovoid theater, encased in scaffolding</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: Screen Shot - NY World&apos;s<br />
                Publicity Film
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building230.jpg"
                  alt=""
                  width={300}
                  height={213}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>A garden of steel "trees" rises around the IBM site.</em>
                </figcaption>
                <p className={styles.source}>SOURCE: Courtesy
Fred Stern Collection</p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building128.jpg"
                  alt=""
                  width={300}
                  height={258}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The Fair's main entrance under construction. Shea Stadium rises in the background.</em>
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
              Greyhound - Thailand - RCA - NCR
            </h2>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building109.jpg"
                  alt=""
                  width={300}
                  height={171}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Construction of the Greyhound Pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building198.jpg"
                  alt=""
                  width={223}
                  height={156}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Intricate Temple structure of Thailand's pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: <em>FAIR
NEWS</em><br />
                January 22, 1964
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building119.jpg"
                  alt=""
                  width={300}
                  height={188}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The circular drums atop this construction make the RCA Pavilion unmistakable.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building113.jpg"
                  alt=""
                  width={300}
                  height={253}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>Steel support columns which will support the "space frame" roof and floors of the National Cash Register Pavilion.</em>
                </figcaption>
                <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em><br />
                September 26, 1963
              </p>
              </figure>
            </div>
            <p className={styles.note}>
              <Image src="/images/building14/hand_rg.gif" alt="" width={33} height={14} className={styles.hand} unoptimized /> 
              Webmaster&apos;s note... Click 
              <Link href="/ncr05" className={styles.noteLink}>HERE</Link>
               to read about the design of the NCR Pavilion!&lt;/
            </p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building14/building118.jpg"
                  alt=""
                  width={245}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>The small square platforms of the New Jersey Pavilion are nearly complete in this aerial view. The only fatalities to occur during the construction of the Fair took place when a number of the steel support booms that suspended the "pyramid tops" of the New Jersey pavilion collapsed killing three workmen.</em>
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
            <h3 className={styles.subhead}>DESIGNERS</h3>
            <p className={styles.body}>The Corporation has supplied a framework for the Fair ... the exhibit designers are supplying, above all else, variety -- from a Thai temple to a floating steel and concrete slab. Structures are being conceived as architecture, as stage sets and as corporate symbols.</p>
            <p className={styles.body}>The architect today has readily available material only hinted at in the Fair of 1939-1940. He has new methods of construction at his command. He has clients from all over the world, each intent upon telling his story in a dramatic way, not buried in an overall pattern of architectural monotony.</p>
            <p className={styles.body}>The architects and designers study the problems and prepare plans, renderings and models for presentation of clients. They ask and need the help of daring engineering, down-to-earth mechanical detailing and the planning of landscape architects. Their ideas eventually become working drawings, a sheet of glass shown as two thin lines on a blueprint.</p>
            <p className={styles.body}>Always in mind is the estimated cost of construction, in order to make as much structure as possible relatively maintenance free for two years. They must meet the Fair codes for safety and health. They must also always remember that the deathless works of art will go into a scrap heap after 1965. With luck they may go into the photographic records of the architectural historians of the future.</p>
            <p className={styles.body}>With drawings completed and contracts let, the designer&apos;s final task is day-by-day inspection of construction.</p>
            <h3 className={styles.subhead}>CONTRACTORS</h3>
            <p className={styles.body}>Many of the organizations that have been directing New York&apos;s multibillion dollar building boom of recent years are at work at the Fair.</p>
            <p className={styles.body}>The contractor&apos;s job is complicated. He analyzes the plans, prepares the bills-of-materials and coordinates deliveries. He stakes out the site, prepares foundations and sees to the proper erection of the superstructure, which may have a complicated free-form roof or a simple canvas cover.</p>
            <p className={styles.body}>The contractor supplies the major equipment required by the building trades. More powerful bulldozers, cranes and machinery along with specialized tools have increased efficiency of construction.</p>
            <p className={styles.body}>From the architect&apos;s plans the contractor prepares a schedule for the building trades required at each stage of construction. The estimates are discussed with the local labor representatives at the Fair site and plans are made to assure completion on time.</p>
            <p className={styles.source}>
              SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em> September
              26, 1963
            </p>
          </section>

        </div>
      </article>

      <Nav2Bar
        previousHref="/building13"
        explicitPrevious
        nextHref="/building15"
      />
    </>
  );
}
