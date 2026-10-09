import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/switzFeature.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Watch Exhibit | Time Center | Clock Towers — Switzerland — nywf64.com",
  description:
    "Swiss Watch Exhibit, Time Center, and Clock Towers at the Switzerland Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Switzerland — Watch Exhibit / Time Center / Clock Towers.
 * Body from legacy switz06.html (three navy section bars matching legacy).
 */
export default function Switz06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Switzerland">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/switzoverview/hero-banner.jpg"
            alt="Switzerland pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwitzNavChrome />

      <article className={styles.article} aria-labelledby="switz06-title">
        <header className={styles.titleBar}>
          <h1 id="switz06-title" className={styles.titleBarMain}>
            Watch Exhibit
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionTitle}>
            <Image
              src="/images/switz06/swissbw11.jpg"
              alt=""
              width={37}
              height={65}
              className={styles.logo}
              unoptimized
            />
            The Swiss Watch Exhibit
          </h2>

          <figure className={styles.figure}>
            <Image
              src="/images/switz06/swissbw5.jpg"
              alt="Entrance to Swiss Watch Pavilion"
              width={480}
              height={207}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Entrance to the Watch Pavilion in the Swiss Section
          </p>
          <p className={styles.copyBlack}>
            Watchmaking is obviously the highspot of Switzerland&apos;s
            participation in the New York World&apos;s Fair. The watch pavilion
            presents the biggest and most valuable display of watches ever to be
            seen in the United States. In fact, the exhibits displayed by the
            sixteen firms taking part are valued at over two million dollars, so
            that a large number of guards are kept permanently on duty.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/switz06/swissbw6.jpg"
              alt="Exhibit cases"
              width={369}
              height={219}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>Showcases in the Swiss Watch Pavilion</p>
          <p className={styles.copyBlack}>
            In the pavilion the Swiss Watch Federation has an information desk
            with special Swiss staff capable of answering all questions
            concerning the Swiss watch industry in general and the display in New
            York in particular.
          </p>
          <p className={styles.copyBlack}>
            The showcases of the different exhibitors contain not only the latest
            and most marvellous achievements of modern technique but also a
            number of watches of historical interest loaned for the occasion by
            museums or private collectors, including, for example, a watch that
            belonged to Queen Victoria and another taken by Admiral Byrd on his
            expeditions to the Antarctic.
          </p>
          <p className={styles.source}>
            Source: advertising brochure: THE SWISS WATCH INDUSTRY AT THE NEW
            YORK WORLD&apos;S FAIR 1964-1965
          </p>
        </div>

        <header className={`${styles.titleBar} ${styles.sectionSpacer}`}>
          <h2 className={styles.titleBarMain}>Time Center</h2>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionTitle}>
            <Image
              src="/images/switz06/swissbw11.jpg"
              alt=""
              width={37}
              height={65}
              className={styles.logo}
              unoptimized
            />
            The Swiss Time Center
          </h2>

          <figure className={styles.figure}>
            <Image
              src="/images/switz06/swissbw7.jpg"
              alt="Swiss Time Center"
              width={375}
              height={220}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Swiss Time Center controls Fair&apos;s clocks
          </p>
          <p className={styles.copyBlack}>
            The official World&apos;s Fair Time Center is a masterpiece of
            complex horological machinery. It provides visitors with the time
            that&apos;s triple-checked for accuracy -- via radio signal from three
            famous observatories; Neuchatel in Switzerland, Greenwich in England
            and the U. S. Naval Observatory in Washington, D. C.
          </p>
          <p className={styles.copyBlack}>
            The Center, located in front of the Swiss Watch Pavilion, controls
            the 10 tall Swiss Clock Towers dotting the Fairgrounds. Its dramatic
            display of timing devices draws a regular stream of window-gazers
            from the crowds strolling along the Avenue of the United Nations
            South.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/switz06/swissbw10.jpg"
              alt="Closer view of Time Center"
              width={315}
              height={146}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Closer view of timekeeping equipment
          </p>
          <p className={styles.copyBlack}>
            The Center&apos;s large digital clock shows hour, minute, second and
            tenth of a second. An electronic distributor relays impulses from the
            digital clock to the Swiss clock network throughout the Fair. The
            digial unit is monitored by an electrically driven master clock.
          </p>
          <p className={styles.copyBlack}>
            This master clock is, in turn, monitored by a quartz clock,
            so-called because its extraoridnary precision is derived from the
            vibrations of a quartz crystal suspended in a near-vacuum. Ultimate
            checking of the three instruments -- and subsequently of the tower
            clocks on the Fair site -- is by the radio signal from the
            obsrvatories.
          </p>
          <p className={styles.copyBlack}>
            Sidereal (star), solar and mean time are registred on other Time
            Center instruments. A giant plexiblas map shows time throughout the
            world.
          </p>
          <p className={styles.copyBlack}>
            The three Swiss firms that supplied Time Center equipment are:
            Ebauches, S.A.; Favag, S.A.; and Patek Philippe &amp; Cie, S.A.
          </p>
        </div>

        <header className={`${styles.titleBar} ${styles.sectionSpacer}`}>
          <h2 className={styles.titleBarMain}>Clock Towers</h2>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionTitle}>
            <Image
              src="/images/switz06/swissbw11.jpg"
              alt=""
              width={37}
              height={65}
              className={styles.logo}
              unoptimized
            />
            The Swiss Clock Towers
          </h2>

          <figure className={styles.figure}>
            <Image
              src="/images/switz06/swissbw8.jpg"
              alt="Swiss Clock Tower No. 10"
              width={239}
              height={220}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Ten Swiss Clock Towers dot the Fairgrounds
          </p>
          <p className={styles.copyBlack}>
            The Swiss Time Center provides time signals for a network of ten
            15-foot high Swiss clock towers located throughout the Fair, thus
            giving the official time of the Fair. In addition, it also provides
            the timing impulses for the Fair&apos;s tallest clock, the{" "}
            <Link href="/sevup01" className={styles.link}>
              7-up Tower Clock
            </Link>
            , which soars 107 feet.
          </p>
          <p className={styles.copyBlack}>
            The sphere containing two clock movements is designed to represent
            the Unisphere. since the Swiss Watchmakers are &quot;Time-Keepers to
            the World&quot; there is a direct relationship between this phrase
            and the design of the sphere as a globe.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/switz06/swissbw9.jpg"
              alt="Close up of Clock Tower face"
              width={233}
              height={233}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Closer view of Clock Face on Swiss Clock Towers
          </p>
          <p className={styles.copyBlack}>
            Only on impulses at 60-second intervals do the hands of each clock
            move, all advancing by exactly one minute at the same precise
            instant.
          </p>
          <p className={styles.copyBlack}>
            The position of clock No. 10 shown in this picture is directly in
            front of the{" "}
            <Link href="/gm01" className={styles.link}>
              General Motors
            </Link>{" "}
            exhibit, one of the most popular exhibits in the New York Fair.
          </p>
          <p className={styles.source}>
            Source: advertising brochure: THE SWISS WATCH INDUSTRY AT THE NEW
            YORK WORLD&apos;S FAIR 1964-1965
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/switz05"
        explicitPrevious
        overviewHref="/switzoverview"
        nextHref="/switz07"
      />
    </>
  );
}
