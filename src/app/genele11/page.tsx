import type { Metadata } from "next";
import Image from "next/image";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genele11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Ride the Carousel of Progress \u2014 General Electric \u2014 nywf64.com",
  description:
    "Ride the Carousel of Progress \u2014 General Electric Progressland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Electric — Ride the Carousel of Progress.
 * Body from legacy genele11.html (custom topic page).
 * Stack: hero → GeneleNavChrome → navy title → article → Nav2Bar.
 */
export default function Genele11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Electric Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/geneleoverview/hero-banner.jpg"
            alt="General Electric Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GeneleNavChrome />

      <article className={styles.article} aria-labelledby="genele11-title">
        <header className={styles.titleBar}>
          <h1 id="genele11-title" className={styles.titleBarMain}>
            Ride the Carousel of Progress
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.banner}>
            General Electric&apos;s Carousel of Progress
            <br />
            Electrical living from the &apos;good old days&apos; to the present
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/genele11/ge50.gif"
              alt="Carousel of Progress"
              width={481}
              height={63}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <div className={styles.body}>
            <p>You ride a moving ramp to the second level; its an outside ramp that affords one of the best views of the Fair.</p>
            <p>Then, at the top, you enter the Carousel of Progress.</p>
            <p>Instantly, you sense the magic of Walt Disney. You are in a large auditorium, that holds 250 people. Colored lights play on the stage in synchronization with the music. And you find a comfortable seat facing the stage.</p>
            <p>But in the Carousel of Progress, the stage does not move, the audience does! Progressland&apos;s second floor has 6 auditoriums, 6 audiences circling progressively from stage to stage. People outside the building can see the entire second level rotate periodically.</p>
            <p>The play begins as you stop at the first stage, and continues through each successive stop. You see the inspiring, often humorous story of an American family -- first, in the &apos;good old days&apos; of the 1880&apos;s -- before electricity in the home . . . then during the time when electricity and electrically-run appliances brought marvelous advances in the 1920&apos;s . . . and the 1940&apos;s . . . up to the present day. Each Carousel act has the warm, whimsical, winning quality you always associate with Walt Disney.</p>
            <p>The &apos;players&apos;, too, are remarkable. They move and talk and seem almost to breathe. Yet they are electronically-controlled figures, specially designed by Walt Disney and used here for the first time.</p>
            <p>In short, the Carousel of Progress is top entertainment -- with a message. The message is this: too often we take the wonders of electricity for granted. Electricity has introduced undreamed-of convenience, comfort and enrichment into our family living. And even today, most of us are not really availing ourselves of all the opportunities electricity has to offer.</p>
            <p>As the show ends, you move up the Time Tube to the third floor. There has been tremendous progress in the past half-century. Now what is being done about the future?</p>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/genele11/ge52.jpg"
              alt="Artwork depicting Act I and II"
              width={481}
              height={266}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.source}>
              Source: Progressland Commemorative Brochure © The Walt Disney
              Company
            </p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele11/ge53.jpg"
              alt="Artwork depicting Act III and IV"
              width={481}
              height={268}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <div className={styles.cta}>
            <p>
              <strong>Ride General Electric&apos;s Carousel of Progress</strong>
            </p>
            <p>Waiting Time: 0 Mins.</p>
            <p>Our next show is about about to begin and you&apos;re in luck - there&apos;s no wait to get inside! So take a seat in our air-conditioned Carousel Theater and get ready to see how General Electric is making dreams come true for you and me through the magic of Walt Disney!</p>
            <figure className={styles.figure}>
              <Image
                src="/images/genele11/ge51.gif"
                alt="Pavilion layout - Carousel"
                width={250}
                height={191}
                className={styles.photo}
                unoptimized
              />
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genele10"
        explicitPrevious
        overviewHref="/geneleoverview"
        nextHref="/genele12"
      />
    </>
  );
}
