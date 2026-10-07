import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A World's Fair Phantom — Heartland States U.S.A. — nywf64.com",
  description:
    "Essay on the never-built Heartland States U.S.A. / Midwestern States pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Heartland States — A World's Fair Phantom.
 * Body from legacy heartland02.html (custom essay — no shared standard).
 * Legacy wording (“Some l egislatures”, “nywf 64 .com”, “ourtesy”) preserved.
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Heartland02Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Heartland States U.S.A.">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/heartlandoverview/hero-banner.jpg"
            alt="Heartland States U.S.A. at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HeartlandNavChrome />

      <article className={styles.article} aria-labelledby="heartland02-title">
        <header className={styles.titleBar}>
          <h1 id="heartland02-title" className={styles.titleBarMain}>
            A World&apos;s Fair Phantom
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland02/21.jpg"
                alt="Artist's Rendering"
                width={900}
                height={366}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.source}>
              Source: Artist&apos;s Rendering, courtesy Bill Cotter Collection
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland02/6.jpg"
                alt="A World's Fair Phantom"
                width={600}
                height={207}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <p>
            What&apos;s a World&apos;s Fair Phantom? Merriam Webster says a
            phantom is something that exists in appearance only ... a
            representation of something abstract. In World&apos;s Fair parlance,
            a phantom is a pavilion or exhibit that was conceptualized, possibly
            even planned for and construction begun, but never came to
            fruition.
          </p>
          <p>
            The Heartland States U.S.A. pavilion is a true World&apos;s Fair
            Phantom -- a concept pavilion and exhibit developed for the
            Heartland New York World&apos;s Fair Exhibit Commission for the
            states of North and South Dakota, Nebraska and Kansas, by the IVEL
            Construction Company. Later in the planning stages, the states of
            Montana, Wyoming, Colorado, Minnesota, Iowa and Missouri were
            included in the concept and the pavilion became known as the
            Midwestern States Exhibit. It never advanced beyond the planning
            phase and only Minnesota and Missouri were eventually represented at
            the 1964/1965 New York World&apos;s Fair with pavilions of their
            own.
          </p>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland02/12.jpg"
                alt="Proposed Heartland States Pavilion"
                width={600}
                height={366}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.source}>
              Source: New York World&apos;s Fair 1964-1965 Corporation, Progress
              Report 4, January 17, 1962
            </figcaption>
          </figure>

          <p>
            Everyone wanted to be a part of the fabulous World&apos;s Fair that
            was to be held in New York in 1964 and 1965. The American states
            were no exception and the New York World&apos;s Fair 1964-1965
            Corporation actively pursued the states as exhibitors. But
            exhibiting at the Fair was a difficult sell for most states.
            Legislative approval had to be gained and appropriations made from
            tax revenue to host a pavilion at the Fair. Some l egislatures met
            for only a few months out of the year and lacked time to enact
            legislation. Many had to budget for participation and sell the idea
            of being a part of the Fair to constituents. If official state
            government sponsorship couldn&apos;t be gained, perhaps a trade or
            commerce organization within the state would sponsor a state&apos;s
            pavilion. Or perhaps not. By the time the Fair opened, roughly a
            quarter of the 50 states were represented at the Fair in pavilions
            and only six, Maine, Vermont, New Hampshire, Rhode Island,
            Connecticut and Massachusetts, combined successfully to host a
            multi-state pavilion known as the New England States exhibit.
          </p>

          <figure className={styles.figureNarrow}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland02/14.jpg"
                alt=""
                width={300}
                height={56}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <figure className={styles.figureNarrow}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland02/13.jpg"
                alt="News Clipping"
                width={300}
                height={343}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.source}>
              Source: New York World&apos;s Fair 1964-1965 Corporation, Progress
              Report 4, January 17, 1962
            </figcaption>
          </figure>

          <p>
            The proposal developed by the IVEL Construction Company for the
            Heartland States U.S.A. pavilion was very detailed -- from
            envisioning a theme for the exhibit right down to estimates for
            attendance and revenue to be gained by charging admission to the
            featured attraction in the pavilion (a PANAVISION film of the
            Heartland States) and to traffic patterns, budgets and timelines.
            The presentation of this information serves as a useful study into
            the planning for an exhibit at a major World Exposition and is
            worth a read for that reason alone.
          </p>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland02/23.jpg"
                alt="WF Corporation Transparency"
                width={600}
                height={403}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.source}>
              Source: New York World&apos;s Fair 1964-1965 Corporation
              Transparency , courtesy Bill Cotter Collection
            </figcaption>
          </figure>

          <p>
            To be sure, the Heartland States U.S.A. pavilion is not the only
            example of a New York World&apos;s Fair Phantom. In fact, nywf 64
            .com has a whole section on them that you might want to visit.
            Perhaps the most famous of the Phantoms were the American Indian
            Exhibition and the World of Food . Both pavilions advanced well
            beyond the concept and planning stages. In the case of the World of
            Food, structural steel was even erected for the pavilion but, on
            opening day of the Fair, neither were to be found on the
            Fairgrounds.
          </p>
          <p>
            Settle back and enjoy this featured presentation on a true
            World&apos;s Fair Phantom and read all about what wonders the states
            of North and South Dakota, Kansas and Nebraska might have shown you
            at the 1964/1965 New York World&apos;s Fair. It promised to be quite
            an experience for the World&apos;s Fair visitor ... if only ...
          </p>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland02/22.jpg"
                alt="Concept Art"
                width={600}
                height={398}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.source}>
              Source: Concept Artwork, Unknown Artist, ourtesy Bill Cotter
              Collection
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland01"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland03"
      />
    </>
  );
}
