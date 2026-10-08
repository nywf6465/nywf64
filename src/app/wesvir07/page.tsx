import type { Metadata } from "next";
import Image from "next/image";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wesvir07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";
import { WESVIR07_SCRIPT } from "./wesvir07Script";

export const metadata: Metadata = {
  title: "Window on the Universe — West Virginia — nywf64.com",
  description:
    "Window on the Universe — The Radio Astronomy Sky — West Virginia at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * West Virginia — Window on the Universe outline and script.
 * Body from legacy wesvir07.html.
 *
 * Stack: hero → WesvirNavChrome → navy title → article → Nav2Bar.
 */
export default function Wesvir07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="West Virginia">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wesviroverview/hero-banner.jpg"
            alt="West Virginia pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WesvirNavChrome />

      <article className={styles.article} aria-labelledby="wesvir07-title">
        <header className={styles.titleBar}>
          <h1 id="wesvir07-title" className={styles.titleBarMain}>
            <em>Window on the Universe</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.subtitle}>The Radio Astronomy Sky</h2>

          <figure className={styles.figure}>
            <Image
              src="/images/wesvir07/wesvir14.jpg"
              alt="Radio Telescope"
              width={313}
              height={209}
              className={styles.photoImg}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              This feature is designed as a modern scientific theme center for
              the West Virginia State Pavilion. As a self-contained educational
              and entertainment display, it will tell its own message of the
              unique part that the State is playing in Man&apos;s efforts to gain
              more knowledge about his place in space.
            </p>
            <p>
              WINDOW ON THE UNIVERSE has been planned as a continuously
              operating program, lasting six or seven minutes, and so structured
              that a visitor may enter or leave at any time without having to
              wait for the beginning of the program. This will greatly increase
              the visitor flow, and will minimize the accumulation of large
              groups in lines awaiting the commencement of each showing. No
              personnel will be required for the actual presentation, but one
              technician should be available at all times on a stand-by-basis,
              for servicing and maintenance. Any required number of attendants
              should man the doorway, direct visitors to the exit or police the
              room itself.
            </p>
            <p>
              The structure housing WINDOW ON THE UNIVERSE is planned as an
              integral part of the West Virginia Pavilion. The external part of
              the chamber should suggest the message that will be presented
              inside by having the alcoves feature jumbo enlargements of some of
              the most dramatic astronomical photographs from the world&apos;s
              greatest observatories. Such enlargements are readily available
              commercially at modest cost.
            </p>
            <p>
              WEST VIRGINIA should be prominently displayed in cut-out letters,
              strikingly illuminated, and WINDOW ON THE UNIVERSE should be
              permanently presented, or shown in moving lights directly beneath.
            </p>
            <p>
              Rapid turnover of audience, ability to present a unified story to a
              maximum number of visitors, dramatic effects in panoramic
              projection of colored lights, omni-directional sound effects and
              sustained interest, secondary only to scientific acceptability,
              have been kept in mind in the presentation here outlined.
            </p>
            <p>
              Since visitors will be entering and leaving at any time, and
              adequate light must be available for them without detracting from
              the effectiveness of the program, all effects are planned to be
              shown without the necessity of waiting for dark adaptation. since
              the time of the demonstration is deliberately short, it is not
              necessary to have seats, but rather rails on which visitors may
              lean, or to which they may hold. This will maintain an orderly
              line in the chamber, adequately spaced so that there will be ample
              room for visitors to enter or leave without discomfort or
              annoyance.
            </p>
            <p>
              Both film and sound will be designed for continuous operation
              without necessity of rewinding. The film will tell its story in
              animated color; the sound will be a combination of special sound
              effects, background music and narrative. The narrative will be in
              terms understandable to the non-scientific public, but acceptable
              to the scientist.
            </p>
            <p>
              The entire program will be divided into about twenty sequences,
              none of which, with the exception of the first and last, which
              will blend into each other, will last more than fifteen or twenty
              seconds.
            </p>
            <p>
              Soft musical background will be provided for the voice of the
              narrator. Where other sound effects are indicated, the music will
              be faded out so that full attention may be focused upon the effect
              and its meaning.
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/wesvir07/wesvir22.jpg"
              alt="Artist's Rendering of Sky Theater"
              width={283}
              height={178}
              className={styles.photoImg}
              unoptimized
            />
          </figure>

          <h3 className={styles.scriptHeading}>Script</h3>

          <table className={styles.scriptTable}>
            <thead>
              <tr>
                <th scope="col" aria-hidden="true" />
                <th scope="col">VISUAL</th>
                <th scope="col">SOUND</th>
              </tr>
            </thead>
            <tbody>
              {WESVIR07_SCRIPT.map((row) => (
                <tr key={row.letter}>
                  <td className={styles.scriptLetter}>{row.letter}</td>
                  <td className={styles.scriptVisual}>{row.visual}</td>
                  <td className={styles.scriptSound}>{row.sound}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className={styles.source}>
            SOURCE: Invitation to West Virginia Pavilion Packet, Preliminary
            Outline, <em>WINDOW ON THE UNIVERSE</em>, Armand N. Spitz
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/wesvir06"
        nextHref="/wesvir08"
      />
    </>
  );
}
