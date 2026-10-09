import type { Metadata } from "next";
import Image from "next/image";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sersci07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fund Raising Brochure — Sermons from Science — nywf64.com",
  description:
    "Sermons from Science fund raising brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

const DEMOS = [
  "The cry that can shatter glass",
  "A frozen shadow",
  "A flashlight that talks",
  "The stammering machine",
  "Metal rings floating in air",
  "1,000,000 volts of man-made lightning",
  "Liquid lights from cold chemicals",
  "Invisible energy sets steel aflame",
  "Eyes that see in total darkness",
  "Electron magic with a ribbon of rust",
] as const;

const FILMS_LEFT = [
  "City of the Bees",
  "Time and Eternity",
  "Window of the Soul",
  "Red River of Life",
  "God of the Atom",
  "God of Creation",
] as const;

const FILMS_RIGHT = [
  "The Prior Claim",
  "Hidden Treasures",
  "Voice of the Deep",
  "Mystery of the 3 Clocks",
  "Facts of Faith",
  "Dust or Destiny",
] as const;

/**
 * Sermons from Science — Fund Raising Brochure.
 * Body from legacy sersci07.html.
 *
 * Stack: hero → SersciNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Sersci07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Sermons from Science">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/serscioverview/hero-banner.jpg"
            alt="Sermons from Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SersciNavChrome />

      <article className={styles.article} aria-labelledby="sersci07-title">
        <header className={styles.titleBar}>
          <h1 id="sersci07-title" className={styles.titleBarMain}>
            Fund Raising Brochure
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.sketchWrap}>
            <p className={styles.sketchLabel}>SERMONS FROM SCIENCE</p>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sersci07/sersci05.gif"
                alt="Black & White Sketch"
                width={580}
                height={371}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </div>

          <section className={styles.section} aria-labelledby="sersci07-program">
            <h2 id="sersci07-program" className={styles.sectionTitle}>
              Program
            </h2>
            <p>
              The purpose of this brochure is to inform you about the Sermons
              From Science Pavilion at the New York World&apos;s Fair , 1964-65.
            </p>
            <p>
              We hope you will join us in this project in whatever way you
              can., recognizing the truth in our motto:{" "}
              <em>
                &quot;An Unparalleled Opportunity and Inescapable
                Responsibility.&quot;
              </em>{" "}
              Your prayerful and careful consideration of this project is
              appreciated with love and thankfulness.
            </p>
          </section>

          <section
            className={styles.section}
            aria-labelledby="sersci07-background"
          >
            <h2 id="sersci07-background" className={styles.sectionTitle}>
              Background History
            </h2>
            <p>
              In 1962, pastors and laymen who are council members of the
              Christian Life Convention in the New York City area, recognized
              the New York World&apos;s Fair 1964-65 as a unique opportunity for
              witness to Jesus Christ.
            </p>
            <p>
              As a result, they initiated the Sermons From Science Committee.
              This brochure has been prepared by and relates to the activities
              of this Committee.
            </p>
          </section>

          <section
            className={styles.section}
            aria-labelledby="sersci07-committee"
          >
            <h2 id="sersci07-committee" className={styles.sectionTitle}>
              Sermons from Science Committee
            </h2>
            <p>
              This Committee recognizes the fact that the New York World&apos;s
              Fair will require a <em>unique</em> presentation of the Gospel.
            </p>
            <p>
              The 70 million people who are coming to the Fair will be in a
              holiday mood, living in a carnival atmosphere, not particularly
              interested in God, the Gospel or church. We believe it is actually
              possible to utilize this &quot;Fair attitude&quot; to present the
              claims of Christ.
            </p>
            <p>
              To meet this unparalleled opportunity we are presenting Sermons
              From Science in a 500-seat pavilion. Here&apos;s why:
            </p>
            <p>
              1. Sermons From Science was created precisely for situations like
              the New York World&apos;s Fair. It was designed to attract the
              non-churched, non-religious person.
            </p>
            <p>
              2. Through years of experience in cities and military bases all
              over the United States, Sermons From Science has developed a
              presentation of the Gospel that is unique and appeals to the mood
              of our generation.
            </p>
            <p>
              3. Sermons From Science has proven effectiveness through
              six-months&apos; exposure and experience at the Seattle
              World&apos;s Fair in 1962, where it was one of the most heavily
              attended and respected exhibits at the Fair. But most important,
              many people received Christ through this ministry.
            </p>
            <p>
              The Sermons From Science Committee is composed entirely of
              businessmen in the New York City area. Its offices are located at
              123 West 57th Street, Room 508, New York 19, New York
            </p>
          </section>

          <section className={styles.section} aria-labelledby="sersci07-purpose">
            <h2 id="sersci07-purpose" className={styles.sectionTitle}>
              Purpose
            </h2>
            <p>
              A different program will be presented at regular intervals from
              10:00 a.m. to 9:00 p.m. every day the Fair is in operation. There
              will be at least twelve presentations each day.
            </p>
            <p>
              Each person will see these programs in his own comfortable
              &quot;theatre-type&quot; seat in an air-conditioned auditorium.
            </p>
            <p>
              Special sound equipment will be installed to present the programs
              in five different languages via ear phones, so that many of the
              two million foreign visitors will hear the Gospel in their native
              tongue (French, Spanish, Portuguese, German and Japanese)
            </p>
            <p>
              The programs will consist of live demonstrations by Dr. George
              Speake and James Moon of the Moody Institute of Science and films.
              With special laboratory equipment, Dr. Speake will translate the
              wonders of science in terms of spiritual reality. Visitors will
              see in action:
            </p>
            <ul className={styles.demoList}>
              {DEMOS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Some of the films to be shown cover such fascinating topics as:
            </p>
            <ul className={styles.filmGrid}>
              {FILMS_LEFT.flatMap((item, index) => [
                <li key={item}>{item}</li>,
                <li key={FILMS_RIGHT[index]}>{FILMS_RIGHT[index]}</li>,
              ])}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="sersci07-people">
            <h2 id="sersci07-people" className={styles.sectionTitle}>
              People
            </h2>
            <p>
              At least 12 programs are scheduled for each day in the auditorium
              designed to hold 500 persons. This makes it possible for us to
              reach 6,000 people every day of the Fair. This is our unparalleled
              opportunity to evangelize to about two million people who will be
              attending the Fair in 1964 and 1965.
            </p>
            <p>
              To meet the holiday attitude and satisfy the curiosity of people
              at the Fair, Sermons From Science is:
            </p>
            <ol className={styles.qualities}>
              <li>
                <em>Accurate</em> from a scientific point of view.
              </li>
              <li>
                <em>Exciting</em> from an entertainment point of view.
              </li>
              <li>
                <em>Stimulating</em> from an intellectual point of view.
              </li>
              <li>
                <em>Faithful</em> from a Biblical point of view.
              </li>
            </ol>
          </section>

          <section className={styles.section} aria-labelledby="sersci07-budget">
            <h2 id="sersci07-budget" className={styles.sectionTitle}>
              Budget -- 1963 - 1964 - 1965
            </h2>
            <p>
              The Committee desires to present Sermons From Science in the most
              attractive an efficient way possible -- all to the glory of God.
              The cost of the Pavilion, including auditorium, counseling
              facilities, lounge and office space, plus all landscaping is
              estimated at $200,000. This figure has surprised professionals in
              the building field, since original estimates were twice this
              amount. Since the building is both functional in design and
              strikingly attractive, it is the considered opinion that we are
              getting top value for the money invested.
            </p>
            <p>
              The budget has been constructed in order to accomplish this
              objective and has been forecast in monthly requirements to meet
              all expenses as they occur.
            </p>
            <p>
              In meeting financial obligations, it is the prayerful expectancy
              of the Committee that all bills be paid on time, so that Sermons
              From Science is never in debt.
            </p>
            <p>
              Also, the Committee is dependent on God to supply the necessary
              funds through His people as needs are made known to persons
              everywhere.
            </p>
          </section>

          <p className={styles.source}>
            SOURCE: Sermons From Science Fund Raising Brochure, excerpted
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sersci06"
        explicitPrevious
        overviewHref="/serscioverview"
        nextHref="/sersci08"
      />
    </>
  );
}
