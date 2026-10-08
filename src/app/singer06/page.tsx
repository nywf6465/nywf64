import type { Metadata } from "next";
import Image from "next/image";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/singerEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Singer Bowl is Born — Singer Bowl — nywf64.com",
  description:
    "Interview on the birth of the Singer Bowl — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl — The Singer Bowl is Born.
 * Body from legacy singer06.html.
 */
export default function Singer06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Singer Bowl">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/singeroverview/hero-banner.jpg"
            alt="Singer Bowl at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SingerNavChrome />

      <article className={styles.article} aria-labelledby="singer06-title">
        <header className={styles.titleBar}>
          <h1 id="singer06-title" className={styles.titleBarMain}>
            <em>The Singer Bowl</em> is Born
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer06/sinbow07.jpg"
                alt="The Singer Bowl is Born"
                width={400}
                height={277}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The Singer Bowl at the World's Fair</p>
            <p>In April, 2002, nywf64.com conducted an interview with the late Greg Dawson, Director of Public Relations for the New York World's Fair 1964/1965 Corporation. In a follow-up Q&amp;A Session conducted at <em>The World's Fair Community</em> Discussion Forum (www.worldsfaircommunity.org). Mr. Dawson explained how The Singer Bowl got it's name</p>
            <p>At some point in '63 Mr. Moses decided that the Fair should have a stadium, a place for the official opening of the Fair and also a place where certain major events and shows could be put on, preferably free, to the public so that people coming to the Fair wouldn't think that everything inside the Fair cost money. He was also thinking about what types of things could be left after the Fair as a kind of legacy for Flushing Meadow Park which was much dearer to his heart than the very temporary Fair.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 150 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer06/dawson-dawson01.jpg"
                alt="Singer Bowl"
                width={150}
                height={183}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>But he wanted someone else to pay for it. So he agreed to call it after any company that would pay the money to build it. That was not as common a practice as it is today, naming a quasi-public structure after a corporation, and there was some controversy over the concept. Shea stadium was named after Bill Shea, a New York lawyer who was instrumental in getting the city to build it, but not a corporation. And Yankee Stadium was named after the team that played there. Stadiums were normally named after human beings or after teams, with the notable exception of Wrigley Field in Chicago.</p>
            <p>Ted Royal was the account executive at J. Walter Thompson, the ad agency on the Fair account (and later became my partner in my public relations firm after the Fair). He had a few other accounts, including the Singer Company. So one day Ted said to me , "Greg, you and I are going to sell Singer on paying for that stadium." which surprised me a bit. But it sounded interesting so I agreed. And we did. We met with the head people from Singer one afternoon in the Thompson offices and we were really terrific, I say modestly. We sold them on the idea and they did pay for it and it became Singer Bowl. That was the name that stayed with it for a few years after the Fair. But when the US Tennis Association took over, out went Singer. As a matter of fact, Singer no longer exists either, in name or otherwise. I guess they had their 15 minutes of fame.</p>
            <p>The Bowl was a very useful facility during the Fair and of course it was the place where the official opening ceremonies took place complete with LBJ and complete with the Congress Of Racial Equality picketing outside. And it rained. Quite a day.</p>
            <p>- Greg Dawson, April, 2002</p>
            <p>Greg Dawson, Director of Public Relations for the New York World's Fair 1964/1965 Corporation</p>
            <p>Be sure to read the complete interview with Greg Dawson</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/singer05"
        explicitPrevious
        overviewHref="/singeroverview"
        nextHref="/singer07"
      />
    </>
  );
}
