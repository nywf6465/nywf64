import type { Metadata } from "next";
import Image from "next/image";
import { FairEraNavChrome } from "@/components/FairEraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fair_era01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Events of 1964 — 1964/1965 The Era of the Fair — nywf64.com",
  description:
    "Events of 1964 — news, movies, television, music, and farewells during the first season of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * 1964/1965 The Era of the Fair — Events of 1964.
 * Body from legacy fair_era02.html (mapped to /fair_era01 as Page 1 after overview).
 *
 * Stack: erahero → FairEraNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairEra01Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="1964/1965 The Era of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fair_era/erahero.jpg"
            alt="1964/1965 The Era of the Fair — New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairEraNavChrome />

      <article className={styles.article} aria-labelledby="fair-era01-title">
        <header className={styles.titleBar}>
          <h1 id="fair-era01-title" className={styles.titleBarMain}>
            Events of 1964
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.magBlock}>
            <Image
              src="/images/fair_era01/magcov.jpg"
              alt="Magazine Covers"
              width={481}
              height={197}
              className={styles.magArt}
              unoptimized
            />
            <p className={styles.magCaption}>
              The 1964/1965 New York World&apos;s Fair made big headlines in
              1964. Magazines and newspapers devoted front page and cover space
              to the Fair.
            </p>
          </div>

          <h2 className={styles.yearHeading}>The year was 1964</h2>

          <section className={styles.section} aria-label="A look at the news">
            <p className={styles.sectionTitle}>A look at the news ...</p>
            <p className={styles.body}>
              the Eiffel Tower celebrates its 75th Birthday ... Britain
              celebrates the birth of Queen Elizabeth&apos;s fourth child,
              Prince Edward, and the 400th anniversary of the birth of William
              Shakespeare ... the Pan Am building is completed in Manhattan ...
              the Reverend Dr. Martin Luther King wins the{" "}
              <em>Nobel Peace Prize ... </em>the Baby Boom reaches its peak with
              4,027,000 births ...{" "}
              <span className={styles.month}>in January</span>, the IX Winter
              Olympic Games open in Innsbruck, Austria; Pope Paul VI visits the
              Holy Land ... ...{" "}
              <span className={styles.month}>in February</span>,{" "}
              <em>The Beatles</em> make their US debut on the{" "}
              <em>Ed Sullivan Show</em>; an Eastern Air Lines DC-8 crashes into
              Lake Pontchartrain near New Orleans with a loss of 58 lives;
              Cassius Clay beats Sonny Liston to win the world&apos;s
              heavyweight boxing title ...{" "}
              <span className={styles.month}>in March</span>,{" "}
              <Image
                src="/images/fair_era01/196401.jpg"
                alt="Alaska Earthquake"
                width={136}
                height={101}
                className={`${styles.floatLeft} ${styles.inlineArt}`}
                unoptimized
              />
              a Good Friday earthquake and several Tidal Waves hit Alaska
              causing massive damage and more than 100 deaths; Jack Ruby is
              found guilty and sentenced to death for the murder of Lee Harvey
              Oswald ... <span className={styles.month}>in April</span>, the
              Ford <em>Mustang</em> is introduced at the New York World&apos;s
              Fair ... <span className={styles.month}>in May</span>,{" "}
              <em>Luther </em>and <em>Hello Dolly! </em>win the{" "}
              <em>Tony Award </em>for Best Play and Best Musical ...{" "}
              <span className={styles.month}>in June</span>,{" "}
              <Image
                src="/images/fair_era01/196402.jpg"
                alt="Slain Civil Rights Workers"
                width={148}
                height={96}
                className={`${styles.floatRight} ${styles.inlineArt}`}
                unoptimized
              />
              three Civil Rights workers are slain in Mississippi ...{" "}
              <span className={styles.month}>in July</span>, Ranger 7 returns
              the first close-up pictures of the Moon&apos;s surface; Senator
              Edward Kennedy suffers a broken back after his plane crashes en
              route to the Massachusetts State Democratic Convention; President
              Johnson signs the Civil Rights Act of 1964 ...{" "}
              <span className={styles.month}>in August</span>, an unprovoked
              North Vietnamese attack on a US Destroyer in the Gulf of Tonkin
              brings a US bombing retaliation in what will become the start of
              major US involvement in Vietnam ...{" "}
              <span className={styles.month}>in September</span>, the Warren
              Commission issues their report stating that Lee Harvey Oswald
              acted alone in his assassination of President Kennedy...{" "}
              <span className={styles.month}>in October</span>,
            </p>
            <Image
              src="/images/fair_era01/196403.jpg"
              alt="Tokyo Olympics Logo"
              width={460}
              height={108}
              className={styles.centeredArt}
              unoptimized
            />
            <p className={styles.body}>
              the XVIII Olympiad opens in Tokyo, Japan; Aleksi Kosygen &amp;
              Leonid Brezhnev replace Nikita Khrushchev as Soviet Premier and
              Party Chief; Communist China explodes their first atomic bomb;
              three Soviet Cosmonauts orbit the earth in the world&apos;s first
              multi-man space flight; the <em>Star of India</em>, world&apos;s
              largest sapphire, is stolen from New York&apos;s Museum of Natural
              History ... <span className={styles.month}>in November</span>,
              Lyndon B. Johnson defeats Barry Goldwater to become 36th President
              of the United States ...{" "}
              <span className={styles.month}>in December</span>, Cuban Minister
              of Industry, Ernesto Che Guevara addresses the UN General
              Assembly.
            </p>
          </section>

          <section
            className={styles.section}
            aria-label="What we saw at the movies"
          >
            <p className={styles.sectionTitle}>What we saw at the movies ...</p>
            <p className={`${styles.body} ${styles.italics}`}>
              Goldfinger ... My Fair Lady ... Becket ... The Unsinkable Molly
              Brown ... Mary Poppins ... Dr. Strangeglove or: How I Learned to
              Stop Worrying and Love the Bomb ... Night of the Iguana ... Topkapi
              ... The Carpetbaggers ... A Hard Days Night ... Seven Days in May
              ... Fate is the Hunter ... Fail Safe ... The Chalk Garden
            </p>
          </section>

          <section
            className={styles.section}
            aria-label="What we watched on television"
          >
            <p className={styles.sectionTitle}>
              What we watched on television ...
            </p>
            <p className={`${styles.body} ${styles.italics}`}>
              Bewitched ... My Living Doll ... The Munsters ... The Addams Family
              ... Slattery&apos;s People ... Flipper ... Peyton Place
            </p>
          </section>

          <section
            className={styles.section}
            aria-label="What we listened to on our transistor radios"
          >
            <p className={styles.sectionTitle}>
              What we listened to on our transistor radios ...
            </p>
            <p className={styles.body}>
              <Image
                src="/images/fair_era01/196404.jpg"
                alt="The Beatles"
                width={400}
                height={189}
                className={`${styles.floatLeft} ${styles.inlineArt}`}
                unoptimized
              />
              <em>There! I&apos;ve Said it Again - </em>Bobby Vinton<em> ...
              I Want to Hold Your Hand - </em>
              The Beatles<em> ... She Loves You - </em>The Beatles<em> ... Hello
              Dolly - </em>
              Louis Armstrong<em> ... My Guy - </em>Mary Wells<em> ... Chapel of
              Love - </em>
              Dixie Cups<em> ... A World Without Love - </em>Peter &amp; Gordon
              <em> ... I Get Around - </em>Beach Boys<em> ... Rag Doll - </em>
              Four Seasons<em> ... Everybody Loves Somebody - </em>Dean Martin
              <em> ... Where Did Our Love Go? - </em>Supremes<em> ... House of
              the Rising Sun - </em>
              Animals<em> ... Oh, Pretty</em> Woman - Roy Orbison ...{" "}
              <em>Do Wah Diddy Diddy</em> - Manfred Mann<em> ... Baby Love -
              </em>
              Supremes<em> ... Leader of the Pack - </em>Shangi-Las<em> ...
              Ringo - </em>
              Lorne Greene<em> ... Mr. Lonely - </em>Bobby Vinton
            </p>
          </section>

          <section className={styles.section} aria-label="We said Good Bye to">
            <p className={styles.sectionTitle}>We said Good Bye to ... </p>
            <p className={styles.body}>
              Radio &amp; TV star Gracie Allen, 58, August 27 ... Tennessee
              Congressman Howard H. Baker, 61, January 7 ... Movie &amp; TV actor
              Eddie Cantor, 72, October 10 ... <em>Silent Spring </em>author
              Rachel Carson, 56, April 14 ... British author Ian Flemming, 56,
              August 12 ... Dancer-comedienne Carol Haney, 39, May 10 ...
              Thirty-first President of the United States Herbert Hoover, 90,
              October 20 ... Actor Alan Ladd, 50, January 29 ... Actor Peter
              Lorre, 59, March 23 ... Actor Harpo Marx, 70, September 28 ...
              General Douglas MacArthur, 84, April 5 ...
              <Image
                src="/images/fair_era01/196405.jpg"
                alt="Jawaharlal Nehru"
                width={188}
                height={266}
                className={`${styles.floatLeft} ${styles.inlineArt}`}
                unoptimized
              />{" "}
              India&apos;s first Prime Minister Jawaharlal Nehru, 74, May 27,
              Songwriter Cole Porter, 71, October 15 ... Physicist Leo Szilard,
              66, May 30
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/fair_eraoverview"
        explicitPrevious
        nextHref="/fair_era02"
      />
    </>
  );
}
