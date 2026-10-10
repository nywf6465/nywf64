import type { Metadata } from "next";
import Image from "next/image";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar01.module.css";

export const metadata: Metadata = {
  title:
    "Introduction — The Hunt for International Exhibitors — nywf64.com",
  description:
    "Introduction to Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

/**
 * The Hunt for International Exhibitors — Introduction.
 * Body from legacy intpar01.html (Page 1).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar01Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar01-title">
        <header className={styles.titleBar}>
          <h1 id="intpar01-title" className={styles.titleBarMain}>
            Introduction
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.introHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <div className={styles.introRow}>
            <Image
              src="/images/intpar01/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.introLogo}
              unoptimized
            />
            <div>
              <p className={styles.introCopy}>
                <span className={styles.nywf}>nywf</span>
                <span className={styles.nywf64}>64</span>
                <span className={styles.nywfCom}>.com</span> is proud to present
                Sharyn Elise Jackson&apos;s research on{" "}
                <strong>
                  International Participation in the New York World&apos;s Fair
                  1964-1965
                </strong>
                . Ms. Jackson&apos;s fascinating thesis offers new insight into
                the story of this Exposition.
              </p>
              <p className={styles.introDate}>2.25.05</p>
            </div>
          </div>

          <div className={styles.noteBox}>
            <p>
              <span className={styles.noteLead}>webmaster&apos;s note... </span>
              <em>
                &quot;International Participation in the New York World&apos;s
                Fair 1964-1965&quot;
              </em>{" "}
              was completed by Sharyn in April, 2004, as an honors thesis for the
              Undergraduate History Department, College of Arts and Sciences of
              New York University. Her fascinating and meticulously researched
              paper brings together vital pieces of history ... politics,
              personalities, conflicts and fates ... that made the 1964-1965 New
              York World&apos;s Fair what it was. I believe this material is
              vital for anyone who has an interest in the Fair, it&apos;s place
              in history and how history acted upon it. The essay is easy to
              read and understand and is thoroughly enjoyable.
            </p>
            <p>
              I can&apos;t begin to say how grateful and proud I am that Sharyn
              allowed her thesis to be presented in its entirety at{" "}
              <span className={styles.nywf}>nywf</span>
              <span className={styles.nywf64}>64</span>
              <span className={styles.nywfCom}>.com</span>. Her written research
              is an invaluable addition to a website dedicated to preserving the
              history and memories of the Fair. Thank you, Sharyn, for this gift.
              My thanks also go to Bradd Schiffman for providing many of the
              images used to illustrate Sharyn&apos;s Thesis.
            </p>
            <p>
              And now,{" "}
              <em>
                &quot;
                <strong>International Participation</strong> in the{" "}
                <strong>New York World&apos;s Fair 1964-1965</strong>&quot; ...
              </em>
            </p>
            <p className={styles.noteSign}>Bill Young</p>
            <p className={styles.noteDate}>February 25, 2005</p>
          </div>

          <div className={styles.thesisCover}>
            <Image
              src="/images/intpar01/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.coverLogo}
              unoptimized
            />
            <p className={styles.coverLine1}>
              International Participation{" "}
              <span className={styles.coverInThe}>in the</span>
            </p>
            <p className={styles.coverLine2}>
              New York World&apos;s Fair 1964-1965
            </p>
            <p className={styles.coverBy}>by</p>
            <p className={styles.coverAuthor}>Sharyn Elise Jackson</p>

            <div className={styles.aboutBlock}>
              <p className={styles.aboutHeading}>About the Author...</p>
              <p className={styles.aboutBody}>
                Sharyn Elise Jackson graduated magna cum laude from New York
                University in May 2004 with a BA in History. She received honors
                for her thesis on international participation in the New York
                World&apos;s Fair 1964-1965 and is a member of Phi Alpha Theta,
                the national history honor society. Sharyn is currently living in
                Germany, working as the education coordinator at a Holocaust
                memorial site and researching the fates of the former Jewish
                citizens of the town of Breisach am Rhein. She hopes to return to
                the states to continue her studies, once she becomes fluent in
                German. This might take decades.
              </p>
              <p className={styles.aboutContact}>
                You may{" "}
                <a href="mailto:sharyn@nyu.edu?subject=Thesis%20on%20nywf64.com">
                  contact Sharyn
                </a>{" "}
                with comments on her Thesis.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/information"
        explicitPrevious
        nextHref="/intpar02"
        hideOverview
      />
    </>
  );
}
