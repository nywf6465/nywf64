import type { Metadata } from "next";
import Image from "next/image";
import { SheastaNavChrome } from "@/components/SheastaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sheasta06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Construction — Shea Stadium — nywf64.com",
  description:
    "Construction of Shea Stadium and Flushing Meadow Park Municipal Stadium — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Shea Stadium — Construction.
 * Body from legacy sheasta06.html (custom construction / progress-report page).
 *
 * Stack: hero → SheastaNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Sheasta06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Shea Stadium">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sheastaoverview/hero-banner.jpg"
            alt="Shea Stadium at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SheastaNavChrome />

      <article className={styles.article} aria-labelledby="sheasta06-title">
        <header className={styles.titleBar}>
          <h1 id="sheasta06-title" className={styles.titleBarMain}>
            Construction
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionHeading}>
            THE OLYMPICS OF 1964, THE WORLD&apos;S FAIR AND THE FLUSHING MEADOW
            PARK MUNICIPAL STADIUM
          </h2>

          <div className={styles.body}>
            <p>
              On December 4, 1961 the City and the Fair &quot;cordially invited
              the Olympic Games Tryouts of 1964 to join with us in our own
              Olympics of Progress at the New York World&apos;s Fair in 1964 to
              emphasize and reinforce our parallel purposes of Peace through
              Understanding.&quot;
            </p>
            <p>
              The City of New York&apos;s many practical advantages will be
              greatly enhanced by the completion in 1963 of the new Municipal
              Stadium.
            </p>
            <p>
              The United States Olympic Committee has the City&apos;s invitation
              under study. A favorable answer is hoped for.
            </p>
            <p>
              The Department of Parks is now supervising construction of the
              Stadium which will seat 55,000 for baseball and 60,000 for
              football. It can be enlarged by 25,000 more seats in the future
              without disturbing the initial construction; and a roof can be
              added. Ground was broken for the Stadium on October 28, 1961 with
              appropriate ceremonies.
            </p>
            <p>
              The Stadium embraces a new concept of design with seats that rotate
              to face any part of the field. There will be no columns in the
              spectator&apos;s view. Every consideration has been given to the
              safety, convenience, comfort and pleasure of visitors. Many
              entrances and exits with ramps, escalators and elevators will
              permit easy access to seats regardless of the size of crowds.
            </p>
            <p>
              The Stadium is in the center of a parking field for over 5,000
              cars. Immediately adjacent is the Willets Point Boulevard station
              of the Flushing IRT subway line. A short distance further is the
              Long Island Rail Road. The new $110,000,000 parkway and expressway
              program under construction will provide easy access by automobile.
            </p>
            <p>
              The new National League New York baseball team the &quot;Mets&quot;
              and the American Football League team the &quot;Titans of New
              York&quot; will call the Stadium their home. Many other large
              scale activities can be scheduled for open time.
            </p>
            <p>
              The New York World&apos;s Fair is preparing programs for the
              Stadium during 1964-1965. There will be many events at the Stadium
              supplementing the educational exhibits and excitement of the Fair.
            </p>
            <p className={styles.source}>
              SOURCE: NY World&apos;s Fair Corporation{" "}
              <em>Progress Report #4</em>, January 17, 1962
            </p>
          </div>

          <hr className={styles.rule} />

          <h2 className={styles.sectionHeading}>
            A STADIUM RISES AT FLUSHING MEADOWS
          </h2>

          <figure className={styles.figure} style={{ maxWidth: 420 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sheasta06/shea03.jpg"
                alt="Driving the piles for Shea"
                width={420}
                height={251}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Flushing Meadow Park Municipal Stadium under construction. Top is
              Flushing Bay, below IRT Flushing subway line.
            </figcaption>
            <p className={styles.source}>
              SOURCE: NY World&apos;s Fair Corporation{" "}
              <em>Progress Report #5</em>, May 17, 1962
            </p>
          </figure>

          <figure className={styles.figure} style={{ maxWidth: 420 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sheasta06/shea04.jpg"
                alt="Shea steelwork"
                width={420}
                height={347}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Steelwork for Flushing Meadow Park Municipal Stadium.
            </figcaption>
            <p className={styles.source}>
              SOURCE: (above &amp; below) NY World&apos;s Fair Corporation{" "}
              <em>Progress Report #6</em>, September 12, 1962
            </p>
          </figure>

          <figure className={styles.figure} style={{ maxWidth: 261 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sheasta06/shea05.jpg"
                alt="Steelwork detail"
                width={261}
                height={223}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Detail of steelwork for stadium
            </figcaption>
          </figure>

          <figure className={styles.figure} style={{ maxWidth: 481 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sheasta06/shea06.jpg"
                alt="A Skeleton of Shea"
                width={481}
                height={190}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Flushing Meadow Park Municipal Stadium now renamed the William A.
              Shea Stadium.
            </figcaption>
            <p className={styles.source}>
              SOURCE: (above &amp; below) NY World&apos;s Fair Corporation{" "}
              <em>Progress Report #8</em>, April 22, 1963
            </p>
          </figure>

          <figure className={styles.figure} style={{ maxWidth: 481 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sheasta06/shea07.jpg"
                alt="Fair and Shea construction scene"
                width={481}
                height={181}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Shea Stadium nears completion in the upper left corner of this
              photo while construction of the Fair is in full swing.
            </figcaption>
          </figure>

          <figure className={styles.figure} style={{ maxWidth: 320 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sheasta06/shea14.jpg"
                alt="Shea under construction"
                width={320}
                height={219}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Shea nears completion.
            </figcaption>
            <p className={styles.source}>SOURCE: Unknown</p>
          </figure>

          <hr className={styles.rule} />

          <h2 className={styles.sectionHeading}>
            Board of Directors Meeting at William A. Shea Stadium
          </h2>

          <figure className={styles.figure} style={{ maxWidth: 360 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sheasta06/shea08.jpg"
                alt="Shea nears completion"
                width={360}
                height={323}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <div className={styles.meetingNote}>
            <p>
              The administration of the New York World&apos;s Fair is very
              pleased to welcome the Board of Directors and friends to this
              meeting at the William A. Shea Stadium on September 26, 1963.
            </p>
            <p>
              It is appropriate that this future home of sports, so near to the
              greatest Fair of history, should be our meeting place. Side by
              side, the two projects went through years of planning; the Stadium
              even longer than the Fair.
            </p>
            <p>
              Flushing Meadow Park, conceived and created through long range
              vision, was the home of the Fair of 1939-1940, and will be the
              ultimate Central Park of Queens. At the geographic and population
              center of the City, the park is the natural site of a great
              municipal stadium, the home of the baseball Mets, the football
              Jets and of many outdoor spectacular productions.
            </p>
            <p>
              During the two Fair years the Stadium will be the scene of special
              Fair presentations.
            </p>
            <p>
              Shea Stadium, being built by the City Department of Parks, will
              have a seating capacity for 55,000 and can be expanded in the
              future to 80,00 without disturbance to the present structure. A
              movable roof for all-weather use can be added. Parking areas for
              over 5,000 cars surround the Stadium. Immediately adjacent are the
              IRT subway and Long Island Rail Road.
            </p>
            <p>
              The New York World&apos;s Fair takes this occasion to wish its
              neighbor a long and happy career.
            </p>
            <p className={styles.source}>
              SOURCE: NY World&apos;s Fair Corporation{" "}
              <em>Progress Report #9</em>, September 26, 1963
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sheasta05"
        explicitPrevious
        overviewHref="/sheastaoverview"
        nextHref="/sheasta07"
      />
    </>
  );
}
