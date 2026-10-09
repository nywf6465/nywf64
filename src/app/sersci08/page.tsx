import type { Metadata } from "next";
import Image from "next/image";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sersci08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Magazine: Power for Living — Sermons from Science — nywf64.com",
  description:
    "Power for Living magazine article on Sermons from Science — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sermons from Science — Magazine: Power for Living.
 * Body from legacy sersci08.html.
 *
 * Stack: hero → SersciNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * Last Sersci topic: NEXT returns to /serscioverview.
 */
export default function Sersci08Page() {
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

      <article className={styles.article} aria-labelledby="sersci08-title">
        <header className={styles.titleBar}>
          <h1 id="sersci08-title" className={styles.titleBarMain}>
            Magazine: <em>Power for Living</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.coverFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sersci08/sersci06.jpg"
                alt="Power for Living - Cover"
                width={600}
                height={832}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <hr className={styles.divider} />

          <div className={styles.body}>
            <p>
              Clamping one hand around a pine board, the other on his wrist, the
              man raised his arms above the level of his shoulders and gave his
              second command, &quot;Lights!&quot; The room was plunged into
              darkness. Fear grabbed every heart. Then out of the darkness came
              the sharp cry, &quot;On!&quot;
            </p>
            <p>
              Crack! You could see it hit. One million volts of high frequency
              electricity charged through the man&apos;s body and onto the
              board. Amazed, the people eyed the spitting sparks licking their
              way up the wood. A flame flickered yellow as the board ignited,
              briefly lighting the man&apos;s face. On and on it crackled. Then
              it stopped, and the lights went on again.
            </p>
            <p>
              The man was Dr. George E. Speake, member of the staff of Moody
              Institute of Science, the Los Angeles branch of the Moody Bible
              Institute of Chicago. Strangely enough, he was giving a sermon
              illustration in the Sermons From Science Pavilion at the New York
              World&apos;s Fair. For the past two years he and Jim Moon, another
              member of the MIS staff, have been on loan to the Christian Life
              Convention to present the &quot;Sermons.&quot;
            </p>
            <p>
              If you have traveled to the Fair, you may have heard Dr. Speake
              say that the human body is &quot;in tune&quot; with 60-cycle
              current, and if that frequency is stepped up to 65,000 cycles per
              second, as in the demonstration, enough power to set the board on
              fire can safely pass through his body. In other words, his life
              depends upon his obeying certain natural laws. He points out how
              foolish it would be for him to disregard such laws, concluding
              that there are also spiritual laws which every human must obey and
              believe, or suffer the consequences.
            </p>
            <p>
              To show what he means by &quot;believe,&quot; Speaks asks the
              audience if they would believe him if he told them he could stand
              on the coil and do the experiment again. Having just seen him do
              it, they indicate that they would. &quot;If you really believe me
              the way God means &apos;believe,&apos; you would be willing to
              stand on the coil yourself!&quot; he exclaims. Groans throughout
              the audience show that some, at least, understand that faith is
              more than mere knowledge of fact.
            </p>
            <p>
              Speake hopes that those who see the Moody demonstrations and films
              will be more than entertained. He wants them to put their trust in
              Jesus Christ. To help them, he invites them into the conference
              room for a seven-minute talk. Thousands have stayed to hear about
              &quot;Four Spiritual Laws,&quot; resulting in hundreds of
              decisions for Christ.
            </p>
          </div>

          <p className={styles.source}>
            SOURCE: <em>Power for Living</em>, Vol. 23, No. 3, July-Aug-Sept
            1965
          </p>

          <figure className={styles.photoPair}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sersci08/sersci07.jpg"
                alt="Pavilion & Scientific Instruments"
                width={600}
                height={248}
                className={styles.photoImgPlain}
                unoptimized
              />
            </span>
            <div className={styles.captionRow}>
              <figcaption className={styles.caption}>
                Over 560,000 visited the pavilion the first year
              </figcaption>
              <figcaption className={styles.caption}>
                Electronic devices dominate the sermon demonstrations
              </figcaption>
            </div>
          </figure>

          <div className={styles.webmaster}>
            <p>
              <strong>Webmaster&apos;s note...</strong> Many thanks, once again,
              to historian Eric Paddon for his contribution to this on-line
              history of the Fair. Eric personally researched the Sermons From
              Science feature at the archives of the Moody Bible Institute in
              Chicago. His efforts serve history well! Thank you, Eric!
            </p>
            <p className={styles.webmasterSign}>Bill Young</p>
            <p className={styles.webmasterSign}>April 21, 2004</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sersci07"
        explicitPrevious
        overviewHref="/serscioverview"
        nextHref="/serscioverview"
      />
    </>
  );
}
