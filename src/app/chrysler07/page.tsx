import type { Metadata } from "next";
import Image from "next/image";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chrysler07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Release — Chrysler — nywf64.com",
  description:
    "Chrysler Corporation January 1964 press release on the autofare Islands — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler — Press Release.
 * Body from legacy chrysler07.html (custom press-release page).
 * Legacy wording (visitors lowercase, Corporations, would occupied) preserved.
 *
 * Stack: hero → ChryslerNavChrome → navy title → article → Nav2Bar.
 */
export default function Chrysler07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Chrysler">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chrysleroverview/hero-banner.jpg"
            alt="Chrysler at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChryslerNavChrome />

      <article className={styles.article} aria-labelledby="chrysler07-title">
        <header className={styles.titleBar}>
          <h1 id="chrysler07-title" className={styles.titleBarMain}>
            Press Release
          </h1>
        </header>

        <div className={styles.articleInner}>
          <header className={styles.letterhead}>
            <p className={styles.letterheadOrg}>CHRYSLER CORPORATION</p>
            <p className={styles.letterheadDept}>Press Information Services</p>
            <p className={styles.letterheadContact}>
              Detroit 31, Michigan
              <br />
              883-4500 (Area Code 313)
            </p>
          </header>

          <p className={styles.dateline}>
            For Use In Newspapers Of
            <br />
            Sunday, January 19, 1964
          </p>

          <div className={styles.body}>
            <p>
              DETROIT, January 19 -- Five bridge-connected islands in a large,
              artificial lake covering a unique oval-shaped site will highlight
              Chrysler Corporation&apos;s 1964-1965 New York World&apos;s Fair
              exhibition.
            </p>
            <p>
              First official details of Chrysler&apos;s World Fair plans were
              announced today by John D. Leary, Chrysler Corporation vice
              president - administration.
            </p>
            <p>
              Chrysler&apos;s exhibits, Leary said, will cover six acres -- more
              than 250,000 square feet, and will be located in the Transportation
              Section of the Fair.
            </p>
            <p>
              Each of the five islands will be symbolic of a major facet of the
              company&apos;s activities. visitors will have easy access to the
              islands and exhibits by means of causeways and bridges.
            </p>
            <p>
              &quot;Our exhibition,&quot; Leary said, &quot;will provide an
              exciting setting for entertainment and information -- a dual
              objective synonymous with any successful world&apos;s fair
              exhibition.&quot;
            </p>
            <p>
              &quot;Millions of visitors will have an opportunity to better
              understand what Chrysler Corporation is doing in the automotive
              world, the aerospace field, and other industrial areas. The
              exhibition has been planned to interest members of the entire family
              -- from youngster to grandparent,&quot; Leary said.
            </p>
          </div>

          <p className={styles.moreMark}>(more)</p>
          <p className={styles.pageMark}>-2-</p>

          <div className={styles.body}>
            <p>
              Chrysler Corporation&apos;s exhibition will be a departure from
              traditional one-building world&apos;s fair formats. The displays
              will be spread out over a number of indoor and outdoor facilities.
              Leary said fair visitors will be able to walk through and around the
              exhibits, thus selecting their own route and pace. Displays will be
              self-explanatory and visual.
            </p>
            <p>
              In reviewing some of the highlights of Chrysler&apos;s World&apos;s
              Fair project, Leary pointed out that the company&apos;s corporate
              symbol -- the Pentastar -- has been architecturally integrated into
              one of the area&apos;s most unusual buildings. The building consists
              of four connected structures each shaped like a pentagon and will
              have a seating capacity of 2,500 individuals and will feature a huge
              70-foot revolving stage. Facilities will permit up to 45,000
              visitors each day to view the continuous musical presentation which
              will be given during regular fair hours.
            </p>
            <p>
              &quot;Some of the company&apos;s major facets, such as engineering,
              production, and styling, will be uniquely portrayed on the
              islands,&quot; Leary said.
            </p>
            <p>
              &quot;Engineering, for example, will be symbolized by a huge,
              walk-through &apos;engine&apos;; production will be dramatized by a
              simulated assembly line; styling by an enormous building shaped like
              an automobile. Interspersed with these will be dramatic
              interpretations of other company activities, such as its
              international operations, diversified products, space and missile
              work -- all typifying the many activities of the company throughout
              the world,&quot; he added.
            </p>
            <p>
              Richard E. Forbes, corporate advertising manager, reported that work
              on Chrysler&apos;s New York World&apos;s Fair project was begun more
              than two years ago, and that progress at the site is rapidly
              approaching completion.
            </p>
            <p>
              &quot;Our World&apos;s Fair staff in Detroit has been working with a
              number of firms for many months in planning, designing, and
              constructing our exhibition,&quot; Forbes said.
            </p>
          </div>

          <p className={styles.moreMark}>(more)</p>
          <p className={styles.pressSource}>
            Source: Chrysler January 1964 Press Release
          </p>
          <p className={styles.pageMark}>-3-</p>

          <div className={styles.body}>
            <p>
              &quot;We have been working directly with the George Nelson Company,
              New York, on design and construction; James King and Son, New York,
              site construction; George P. Johnson Company, Detroit, exhibits and
              fabrications; Max Liebman, Inc., New York, show producer; and
              Francisco &amp; Jacobus, New York, project coordination.
              Subcontracted under these organizations are more than 35 other firms
              which are contributing their visual specialties toward the success
              of the undertaking.
            </p>
            <p>
              &quot;We are confident that the enthusiasm evidenced by all who are
              associated with our project will be shared by millions of fair
              visitors in 1964-1965.
            </p>
            <p>
              &quot;We want to re-emphasize that the entire Chrysler Corporations
              exhibition has been planned to provide purposeful entertainment
              along with information -- and that means fun for every member of the
              family,&quot; Forbes said.
            </p>
          </div>

          <p className={styles.pageMark}>-0-</p>

          <figure className={styles.mapFigure}>
            <Image
              src="/images/chrysler07/press-header.jpg"
              alt="Location map of the Chrysler autofare Islands"
              width={580}
              height={217}
              className={styles.mapImg}
              unoptimized
            />
            <figcaption className={styles.mapCaption}>
              The Chrysler <em>autofare</em> Islands would occupied most of the
              central section of the Fair&apos;s Transportation Area
            </figcaption>
            <p className={styles.mapSource}>
              SOURCE: NY World&apos;s Fair <em>Operations Drawings Manual</em>
              <br />
              Presented Courtesy Kevin Carsh Collection
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/chrysler06"
        explicitPrevious
        overviewHref="/chrysleroverview"
        nextHref="/chrysler08"
      />
    </>
  );
}
