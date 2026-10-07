import type { Metadata } from "next";
import Image from "next/image";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./indones08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Indonesia Controversy at the Fair — Indonesia — nywf64.com",
  description:
    "The Indonesia Controversy at the Fair — essay by Sharyn Elise Jackson on international participation and the Indonesia Pavilion — nywf64.com.",
};

function Fn({ n }: { n: number }) {
  return (
    <sup className={styles.fn} aria-label={`Footnote ${n}`}>
      {n}
    </sup>
  );
}

/**
 * Custom essay page — body from legacy indones08.html.
 * Footnote numbers preserved (legacy linked to intpar08.shtml).
 */
export default function Indones08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Indonesia">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/indonesoverview/hero-banner.jpg"
            alt="Indonesia at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IndonesNavChrome />

      <article className={styles.article} aria-labelledby="indones08-title">
        <header className={styles.titleBar}>
          <h1 id="indones08-title" className={styles.titleBarMain}>
            The Indonesia Controversy at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.introBox}>
            <Image
              src="/images/indones08/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.introLogo}
              unoptimized
            />
            <p className={styles.introTitleBlue}>The Indonesia Controversy</p>
            <p className={styles.introTitleBlack}>at the</p>
            <p className={styles.introTitleRed}>
              New York World&apos;s Fair 1964-1965
            </p>
            <p className={styles.introBy}>by</p>
            <p className={styles.introAuthor}>Sharyn Elise Jackson</p>
            <div className={styles.introAbout}>
              <p>About the Essay...</p>
              <p>
                &quot;The Indonesia Controversy&quot; is excerpted from
                &quot;International Participation in the New York World&apos;s Fair
                1964-1965&quot; by Sharyn Elise Jackson. &quot;International
                Participation...&quot; is a fascinating and meticulously researched
                paper that brings together vital pieces of history ... politics,
                personalities, conflicts and fates ... that made the 1964-1965 New
                York World&apos;s Fair what it was.
              </p>
              <p>About the Author...</p>
              <p>
                Sharyn Elise Jackson graduated magna cum laude from New York
                University in May 2004 with a BA in History. She received honors
                for her thesis on international participation in the New York
                World&apos;s Fair 1964-1965 and is a member of Phi Alpha Theta,
                the national history honor society.
              </p>
              <p>
                And now,{" "}
                <em>
                  <span style={{ color: "#ff3300" }}>
                    &quot;The Indonesia Controversy{" "}
                  </span>
                  at the{" "}
                  <span style={{ color: "#0066cc" }}>
                    New York World&apos;s Fair 1964-1965&quot; ...
                  </span>
                </em>
              </p>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              The first Asian country to sign up for the Fair was Indonesia,
              responding only four days after receiving the invitation. According
              to the Announcement of the Information Minister, &quot;The
              participation of Indonesia…is in the course of the realization of the
              ideals of the Indonesian Revolution in the international field with
              the purpose for concluding good friendships between the Republic of
              Indonesia and all world nations….&quot;
              <Fn n={77} /> President Sukarno requested that his pavilion be
              &quot;dramatically placed&quot; between those of the United States
              and the Soviet Union, to represent Indonesia&apos;s neutrality in the
              Cold War.
              <Fn n={78} /> For six months, Indonesia rejected site offers for
              their failure to be equidistant enough to suit his neutral
              sentiments.
              <Fn n={79} /> Finally Sukarno, who came to the US to meet with
              President Kennedy on behalf of the Belgrade conference of
              non-aligned nations, visited the Fairgrounds to select the location
              of the pavilion. Sukarno chose a 40,000 square foot plot, and
              Indonesia became the first nation to formally conclude leasing
              arrangements with the Fair.
              <Fn n={80} />
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/indones08/intpar06.jpg"
                alt="Architectural rendering of Indonesia Pavilion"
                width={350}
                height={184}
                className={styles.figureImg}
                unoptimized
              />
              <figcaption className={styles.figureCaption}>
                Architectural rendering of the Pavilion of Indonesia*
              </figcaption>
            </figure>

            <p>
              Indonesia&apos;s Pavilion had a political focus, reflecting a
              &quot;desire for creating a synthesis between Western and Eastern
              ideologies.&quot; It sought to give one an &quot;impression of what
              Indonesia regards as its active and independent foreign policy.&quot;
              <Fn n={81} /> Sukarno hand-selected the female guides for the
              Indonesian Pavilion, advising them not to &quot;wiggle&quot; like
              French or American girls, but to &quot;be Indonesian girls in every
              one of [their] actions.&quot;
              <Fn n={82} /> For Sukarno, the Indonesia Pavilion&apos;s purpose was
              to function as an expression of post-colonial independence of nation,
              ideology and spirit.
            </p>

            <p>
              Besides choosing the Indonesian girls for the Pavilion, Sukarno
              devoted considerable time to planning the Pavilion itself. He was a
              painter, an art enthusiast and a jewel collector, and he put together
              displays of his personal items for the Fair. Sukarno was also an
              engineer, and actually helped plan the design of the building. His
              aides recalled that many times they would approach him with a matter
              of importance &quot;and find him so intent on his blueprints for the
              Fair pavilion that they could scarcely get his attention.&quot;
              <Fn n={83} /> Unfortunately, Sukarno would never see the final
              product in person.
            </p>

            <p>
              Outside of the Fair, the cordiality of relations between the United
              States and Indonesia began to deteriorate. The [Fair&apos;s
              International Affairs and Exhibits division] designated May 16, 1964
              as &quot;Indonesia Day.&quot; Sukarno had been invited to attend the
              festivities, but Washington advised him that American sentiments
              towards him were hostile after Indonesia had made attacks on American
              foreign policy. Sukarno announced he would not be attending the
              Fair, giving as his reason the &quot;Current Malaysia-Indonesia
              Dispute.&quot; He sent a deputy in his place.
              <Fn n={84} />
            </p>

            <p>
              Although Indonesia withdrew from the United Nations in January of
              1965, Sukarno indicated that Indonesia would continue to exhibit at
              the Fair for the second season. By February of that year, however,
              the prospect was looking slim. Several offenses to the United States
              in Indonesia, including attacks on US Information Agency libraries,
              the boycotting of American ships, and a slew of &quot;anti-American
              Communist outrages&quot; prompted the Johnson Administration to
              threaten action against Indonesia. One penalty Johnson considered was
              shutting down Indonesia&apos;s Fair pavilion, to demonstrate
              &quot;that the US won&apos;t be pushed around.&quot;
              <Fn n={85} />
            </p>

            <p>
              On March 11, Sukarno made an official announcement of withdrawal
              from the Fair for the 1965 season. His action was a protest against
              American support of the &quot;neo-colonialist project of
              Malaysia.&quot; The United States had given a $4 million credit to
              Malaysia for weapons, an action that, Sukarno said, mocked the theme
              of the Fair.
              <Fn n={86} /> The Fair seized the Pavilion and barred any Indonesian
              officials from entering the Fairgrounds. The manager of the
              Indonesian exhibit, S. Haditirto, was disturbed by the sudden cold
              shoulder from the Fair Corporation. &quot;I do not understand,&quot;
              he said. &quot;It seems that an iron curtain has suddenly descended
              between us and the Fair Corporation.&quot;
              <Fn n={87} /> For the entire second season of the Fair, the Indonesia
              Pavilion stood barricaded and vacant.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/indones08/intpar11.jpg"
                alt="Indonesia Pavilion entrance"
                width={225}
                height={308}
                className={styles.figureImg}
                unoptimized
              />
              <figcaption className={styles.figureCaption}>
                This photograph of the Indonesia Pavilion appeared in the 1965
                Official Souvenir Book of the Fair. However, the pavilion remained
                closed; the entrance guarded and padlocked during the 1965 Season.*
              </figcaption>
            </figure>

            <p>
              Exactly one year after Sukarno pulled his country out of the Fair, he
              lost his presidency to a US-backed anti-Communist military general.
              Sukarno spent the rest of his life in house arrest. Indonesia, the
              first country to join the Fair, descended into a thirty-year period
              marked by censorship, genocide and corruption under the new President
              Suharto.
              <Fn n={88} /> The neutrality that had been so important in the
              initial negotiations between Indonesia and the Fair was all but lost.
            </p>

            <p className={styles.copyright}>
              © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
            </p>
          </div>

          <div className={styles.noteBox}>
            <p>
              <strong>Webmaster&apos;s note... </strong>
              My thanks to those who contributed materials to the Indonesia Pavilion
              Feature. To Mike Kraus, Bill Cotter and Craig Bavaro for their{" "}
              <u>generous</u> donation of photographs. And, very much THANKS to
              Sharon Jackson for her research, and for allowing me to reprint her
              excellent essay on International Participation at the Fair here at{" "}
              <strong>
                <span style={{ color: "#0066cc" }}>nywf</span>
                <span style={{ color: "#ff3300" }}>64</span>
              </strong>
              <span style={{ color: "#0066cc", fontSize: "11px" }}>.com</span>!
            </p>
            <p className={styles.noteSig}>Bill Young</p>
            <p className={styles.noteSig}>March, 2010</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/indones07"
        explicitPrevious
        overviewHref="/indonesoverview"
        nextHref="/indonesoverview"
      />
    </>
  );
}
