import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BellNavChrome } from "@/components/BellNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bell01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Bell System — nywf64.com",
  description:
    "Bell System entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System guidebook page.
 * Body converted from legacy bell01.html (three columns: 1964 guide,
 * 1965 guide, souvenir-map location).
 * Stack: hero → bell nav → title bar → three columns → nav2.
 */
export default function Bell01Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Bell System Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/belloverview/hero-banner.jpg"
            alt="Bell System Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BellNavChrome />

      <article className={styles.article} aria-labelledby="bell01-title">
        <header className={styles.titleBar}>
          <h1 id="bell01-title" className={styles.titleBarMain}>
            1964 &amp; 1965 Official Guidebook &amp; Souvenir Map
          </h1>
        </header>

        <div className={styles.columns}>
          <section className={styles.col} aria-label="1964 Official Guide Book">
            <p className={styles.intro}>
              The description of this exhibit from the 1964 Official Guide Book
            </p>
            <Image
              src="/images/bell01/guide1964.jpg"
              alt="Cover — 1964 Guidebook"
              width={136}
              height={216}
              className={styles.cover}
              unoptimized
            />
            <Image
              src="/images/bell01/bell-logo-1964.gif"
              alt=""
              width={144}
              height={115}
              className={styles.logo}
              unoptimized
            />
            <p className={styles.pavilionName}>BELL SYSTEM</p>
            <p className={styles.copy}>
              Man&apos;s speediest communication was once by drumbeat and smoke
              signal. Now he sends messages around the world by bouncing them
              off satellites in space. The story of this breathtaking advance
              in communications is told visually in a 15-minute armchair ride
              in the giant &quot;floating wing&quot; that comprises the upper
              story of this pavilion. In a lower level, an exhibit hall is
              devoted to the technology of modern communications and its history
              of continuous development. The wing itself, 400 feet long, is
              covered with lightweight Fiberglas and rests on just four pylons.
              Next to it rises one of the tallest structures at the Fair, a
              140-foot microwave tower through which TV shows originating at
              the Fair are transmitted. Windows at the base of the tower look
              in on the control equipment and the engineers and monitors on
              duty.
            </p>
            <p className={styles.admission}>
              <strong className={styles.admissionStar}>* </strong>Admission: free.
            </p>
            <p className={styles.highlightsLabel}>Highlights</p>
            <p className={styles.highlight}>
              <strong>FROM DRUMBEAT TO TELSTAR. </strong>
              For the tour through communications history, the visitor, in a
              moving chair with earphones, is whisked through scenes showing
              the progress of man&apos;s efforts to communicate with others.
              Movies, stage sets and projected pictures tell the story with a
              three-dimensional effect, accompanied by music and narration.
            </p>
            <p className={styles.highlight}>
              <strong>TELEPHONES AND TIC-TAC-TOE. </strong>
              The technological exhibits in the lower level of the Bell
              pavilion are interspersed with games. Visitors may test their own
              musical pitch or they may play tic-tac-toe. The development of
              the telephone is illustrated, and guests may use actual
              &quot;picturephone&quot; instruments developed by Bell Telephone
              Laboratories (every 15 minutes the pavilion puts in a call to
              Disneyland in California). The Visible Speech exhibit transforms
              voices into visual symbols on a TV screen. The products of more
              than 80 years of research and development by the Bell System are
              on display. A large illuminated wall screen traces the various
              networks that tie together local, national and international
              calls.
            </p>
          </section>

          <section className={styles.col} aria-label="1965 Official Guide Book">
            <p className={styles.intro}>
              The description of this exhibit from the 1965 Official Guide Book
            </p>
            <Image
              src="/images/bell01/guide1965.jpg"
              alt="Cover — 1965 Guidebook"
              width={136}
              height={216}
              className={styles.cover}
              unoptimized
            />
            <Image
              src="/images/bell01/bell-logo-1965.gif"
              alt=""
              width={144}
              height={115}
              className={styles.logo}
              unoptimized
            />
            <p className={`${styles.pavilionName} ${styles.pavilionNameSans}`}>
              BELL SYSTEM
            </p>
            <p className={styles.summary}>
              The history of communications, from smoke signal to satellites,
              is shown in a 15-minute ride
            </p>
            <p className={styles.copy}>
              The upper story of the pavilion, which houses the ride, is a
              gigantic &quot;floating wing&quot; that rests on four pylons.
              Below is an exhibit hall devoted to the technology of
              communications. Nearby rises a 140-foot microwave tower which
              transmits TV shows originating at the Fair.
            </p>
            <p className={`${styles.highlight} ${styles.highlightSans}`}>
              <strong>FROM TOM-TOM TO TELSTAR. </strong>
              The visitor, sitting in a moving armchair fitted with stereo
              earphones, sees filmed and three-dimensional scenes that include
              primitive signaling by drums, the development of the alphabet,
              the advent of the telephone and a communications satellite
              orbiting in space
            </p>
            <p className={`${styles.highlight} ${styles.highlightSans}`}>
              <strong>PHONES AND FUN. </strong>
              In the exhibit hall, visitors can test their musical pitch or
              play tic-tac-toe. New &quot;see-as-you-talk&quot; picture-phones
              are demonstrated and children can listen to cartoon characters on
              special phones. In another exhibit, voices are transformed into
              visual symbols on a TV screen. The products of more than 80 years
              of research by the Bell System are also on display.
            </p>
            <p className={`${styles.highlight} ${styles.highlightSans}`}>
              <strong>PUBLIC TELEPHONES. </strong>
              Telephone directories from most major cities may be consulted,
              and attendants help place calls anywhere in the world.
            </p>
            <p className={styles.admission}>
              <strong>&para; </strong>Admission: free.
            </p>
          </section>

          <section
            className={styles.col}
            aria-label="1964 Official Souvenir Map"
          >
            <p className={styles.intro}>
              The location of this exhibit on the 1964 Official Souvenir Map
            </p>
            <div className={styles.mapRow}>
              <Image
                src="/images/bell01/souvenir-map.jpg"
                alt="Cover — 1964 Official Souvenir Map"
                width={110}
                height={216}
                className={styles.mapCover}
                unoptimized
              />
              <div className={styles.locate}>
                <Link href="http://nywf64.com/bellmap.shtml">
                  <Image
                    src="/images/bell01/industry-map.gif"
                    alt="Industrial area map"
                    width={60}
                    height={54}
                    className={styles.areaMap}
                    unoptimized
                  />
                </Link>
                <Link
                  href="http://nywf64.com/bellmap.shtml"
                  className={styles.locateLink}
                >
                  Locate It
                </Link>
              </div>
            </div>
            <p className={styles.revised}>Revised 2.24.07</p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/belloverview"
        explicitPrevious
        nextHref="/bellmanual"
      />
    </>
  );
}
