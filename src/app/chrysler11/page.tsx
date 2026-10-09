import type { Metadata } from "next";
import Image from "next/image";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chrysler11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Article: The Chrysler Show-Go-Around — Chrysler — nywf64.com",
  description:
    "Business Screen Magazine article on the Chrysler Show-Go-Round — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler — Article: The Chrysler Show-Go-Around.
 * Body from legacy chrysler11.html (custom magazine reprint).
 *
 * Stack: hero → ChryslerNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Chrysler11Page() {
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

      <article className={styles.article} aria-labelledby="chrysler11-title">
        <header className={styles.titleBar}>
          <h1 id="chrysler11-title" className={styles.titleBarMain}>
            Article: The Chrysler Show-Go-Around
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.storyTitle}>THE CHRYSLER SHOW-GO-AROUND</h2>
          <p className={styles.deck}>
            . . . films, marionettes and a marvelous car take turns on revolving
            stage
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/chrysler11/chry27.jpg"
              alt='MC Introduces "Carby"'
              width={420}
              height={272}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Introducing scene for Chrysler&apos;s Show-Go-Round as m.c.
              introduces one of &quot;stars,&quot; a &quot;carburetor&quot;
              puppet.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              The Six-Acre Chrysler Corporation exhibit area on Flushing Meadow is
              dominated by a giant engine model which typifies this
              &quot;Autofare&quot; with its landscaped islands of displays and
              mockups. But the focal center is the &quot;Pentastar-roofed&quot;
              theater in which a Max Liebman Show-Go-Round production is presented
              on a 70-foot revolving stage serving four pentagon-shaped
              auditoriums housing some 2,500 persons in their comfortable
              bucket-shaped seats.
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/chrysler11/chry26.jpg"
              alt="Show-go-Round Layout"
              width={330}
              height={477}
              className={`${styles.photoImg} ${styles.photoImgWide}`}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Sketch shows 70-foot revolving stage which serves four
              pentagon-shaped theaters for the Chrysler Show-Go-Round.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              Through this unique design, a four-phased performance is in
              continuous action offering a 24-minute interlude of music and
              whimsey, featuring a film story (introduced on the screen by Bob
              Hope); the Bil Baird marionettes and a finale in which a Chrysler
              experimental car (designed by the puppets) closes the entertainment.
            </p>
            <p>
              In the introductory, first phase of the show, the
              master-of-ceremonies talks to puppet hero &quot;Bob Bolt&quot;
              against a backdrop of automotive parts. As the stage revolves to a
              big-screen rear-projection setup, Hope (on film) introduces the rest
              of the little film play about an eager auto designer which starts
              out on the screen. This Group Productions&apos; film is followed by
              Phase Three.
            </p>
            <p>
              In this phase, the marionette creations of Bil and Cora Baird take
              over the action. Singing and dancing gaskets, dancing spark plugs,
              animated carburetors and jiving seat belts perform under the
              skillful hands of four rotating crews of five puppeteers each. The
              villain, &quot;Monkey Wrench,&quot; gives way to a dancing line of
              15 girl motor blocks as the stage turns to Phase Four, the big
              finale . . .
            </p>
          </div>

          <p className={styles.source}>
            Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon
            Collection
          </p>

          <div className={styles.body}>
            <p>
              Before the final curtain falls, a completely-assembled puppet-built
              &quot;experimental car&quot; appears on stage, designed by the young
              genius with the help of his friends.
            </p>
            <p>
              Max Liebman&apos;s talent, the genius of the Bairds, air-conditioned
              comfort and the attention-holding film and &quot;live&quot; segments
              on the revolving stage add up to full houses for these Show-Go-Round
              performances. In this show, film is the time-compressing link which
              sets the stage and story line.
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/chrysler11/chry28.jpg"
              alt="Audience"
              width={307}
              height={271}
              className={`${styles.photoImg} ${styles.photoImgAudience}`}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Typical audience gathers for the introductory scene. Then stage will
              revolve to film show, marionettes and the &quot;live&quot; car
              finale.
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/chrysler10"
        explicitPrevious
        overviewHref="/chrysleroverview"
        nextHref="/chrysler12"
      />
    </>
  );
}
