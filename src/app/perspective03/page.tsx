import type { Metadata } from "next";
import Image from "next/image";
import { PerspectiveHero } from "@/components/PerspectiveHero";
import { PerspectiveNavChrome } from "@/components/PerspectiveNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../perspectiveEssay.module.css";

export const metadata: Metadata = {
  title: "City of Tomorrow — Perisphere’s Perspective — nywf64.com",
  description:
    "David Oats’s essay City of Tomorrow and Bill Young on the prospect of a new New York World’s Fair — on nywf64.com.",
};

/**
 * Perspective essay page 3 (legacy perspective04.html remapped to /perspective03).
 * Stack: hero → Perspective nav (Page 4) → navy title bar → essay → nav2
 * PREVIOUS → /perspective02; no NEXT (end of series).
 */
export default function Perspective03Page() {
  return (
    <>
      <PerspectiveHero />

      <PerspectiveNavChrome />

      <article className={styles.article} aria-labelledby="perspective03-title">
        <header className={styles.titleBar}>
          <h1 id="perspective03-title" className={styles.titleBarMain}>
            City of Tomorrow
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <figure className={styles.bannerFigure}>
              <Image
                src="/images/perspective03/doats01.gif"
                alt=""
                width={300}
                height={150}
                className={styles.bannerPhoto}
                unoptimized
              />
            </figure>

            <p className={styles.essayHeading}>City of Tomorrow</p>
            <p className={styles.essayByline}>by David Oats, April 22, 2006</p>

            <p className={styles.verse}>
              {`"Sorceress beyond compare,
City of glory and despair
So terraced on the Western air,
Your music pour
Over and round me evermore,
Symphony fatal and divine
City of mine."`}
            </p>
            <p className={styles.epigraphAttr}>
              -Poet Christopher Morley
              <br />
              (written for the original proposal for the New York World&apos;s
              Fair of 1939)
            </p>
            <hr className={styles.essayRule} />

            <p>
              It is almost poetic that this week - between the twin junctures of
              the anniversaries of the openings of the two New York World&apos;s
              Fairs (April 22nd of the 1964-65 exposition and April 30th of the
              1939-40 Fair) that a new door has opened for the possibility of
              another New York World&apos;s Fair.
            </p>

            <p>
              It is by no means a probability. But it just might be a possibility
              for a world greatly in need of new possibilities. The original
              planners - visionaries - of the &apos;39 Fair stated very clearly
              their mission at the start. They stated ..&quot;we intend to create
              a fair along new lines...or none at all.&quot;
            </p>

            <p>
              That is our mission today. The open door given by the Bureau of
              International Expositions in Paris for the possibility of another
              New York fair is exciting and enticing. But also exacting -
              because the nature of what a venture such as this should even be
              worth the effort is of paramount concern. History will be the final
              judge - but the door is open and it&apos;s worth the walk.
            </p>

            <p>
              In the past month, my vice-president of the Flushing
              Meadows-Corona Park World&apos;s Fair Association - Greg Godfrey,
              an urban planning and international transportation expert, traveled
              to Paris and had an extensive meeting with the Secretary General of
              the Bureau of International Expositions and his staff. The talks
              were encouraging and cordial and a good working relationship was
              established.
            </p>

            <p>
              In short, this could be the beginning of an historic opportunity -
              one that should be shared with the World&apos;s Fair community that
              Bill Young has established with this nywf64.com website and which
              keeps the vision of the 1964 fair alive.
            </p>

            <p>
              I want to close with the words of President Lyndon B. Johnson
              delivered at the opening of the World&apos;s Fair on April
              22,1964:
            </p>

            <p className={styles.lbjQuote}>
              &quot;The last time New York had a World&apos;s Fair we also tried
              to predict the future. A daring exhibit proclaimed that in the
              1960&apos;s it would really be possible to cross the country in
              less than 24 hours, flying as high as 10,000 feet, an astounding 38
              million cars would cross our highways. There was no mention of
              outer space or atomic power or wonder drugs.
            </p>

            <p className={styles.lbjQuote}>
              These were bold prophesies back there in 1939. But again, the
              reality has far outstripped our vision. There were other
              predictions that weren&apos;t made at that fair. No one prophesied
              that half the world would be devastated by war or that millions of
              helpless would be slaughtered. No one foresaw power that was
              capable of destroying man or a cold war that could bring conflict
              to every continent.
            </p>

            <p className={styles.lbjQuote}>
              Our pride in accomplishment must not ignore the fact that our
              progress has had two faces - its final direction - abundance or
              annihilation? Development or desolation? This fair represents the
              most promising of our hopes. But unless we can achieve the theme of
              this Fair - Peace Through Understanding - unless we can use our
              skills and our wisdom to conquer conflict as we have conquered
              science, then our hopes of today will go under in the devastation
              of tomorrow.
            </p>

            <p className={styles.lbjQuote}>
              If we can, then at the next New York World&apos;s Fair, people will
              see an America as different from today as we are different from
              1939. They will see an America in which no man must be poor, or
              handicapped by the color of his skin or the nature of his beliefs,
              or discriminated against because of the church he attends or the
              country of his ancestors. They will see an America that will solve
              the problems of growing cities, inadequate education, depleting
              natural resources and decreasing natural beauty.
            </p>

            <p className={styles.lbjQuote}>
              All of these dreams and these hopes and expectations depend upon a
              world that is free from the threat of war. If we can achieve this,
              then I am sure that speakers at the next World&apos;s Fair will
              look back with amusement at how greatly I underestimated the
              capacity and the genius of mankind.
            </p>

            <p className={styles.lbjQuote}>
              And so I take my leave from what poet Ogden Nash has called the
              &apos;Promised Land of Mr. Moses&apos; .... hoping and trusting
              that in the future it will not take anyone forty years to reach
              it.&quot;
            </p>

            <div className={styles.letterFrame}>
              <p className={styles.letterFrameTitle}>
                Letter from the BIE (Bureau of International Expositions)
                Secretariat
              </p>
              <p className={styles.letterFrameTitle}>to David Oats</p>
              <div className={styles.letterFrameBody}>
                <p>Paris, 20th April 2006</p>
                <p>Dear Mr. Oats:</p>
                <p>
                  The efforts of the Flushing Meadows Corona Park World&apos;s
                  Fair Association to spearhead the organization of a World Fair
                  in New York City have come to the attention of the
                  International Exhibitions Bureau (BIE). I would personally like
                  to thank and applaud your Association&apos;s commitment to
                  World&apos;s Fairs.
                </p>
                <p>
                  As my staff explained to you in previous discussions, this year
                  the BIE will receive the bids for two World&apos;s Fairs, the
                  2012 Recognized Exhibition and the 2015 Registered Exhibition.
                  The BIE would more than welcome a bid from the United States of
                  America for either World&apos;s Fair and will help guide and
                  support the submission all along the bidding process.
                </p>
                <p>
                  As you are aware, the United States government withdrew from
                  the BIE in June 2001. However, the BIE regulations do not
                  preclude the application of a non member Country to host a
                  World&apos;s Fair. The process will include higher application
                  fees than for member Countries and the approval of two thirds
                  of the General Assembly. Furthermore, the BIE will ensure that
                  any potential US bid will be judged in a fair and consistent
                  manner based on the regulations for non member countries.
                  However, as you can imagine, all of these conditions reduce the
                  chances to almost nil.
                </p>
                <p>
                  Since the withdrawal of the US in 2001, the BIE has been
                  approached by several groups of US citizens, who, like you,
                  asked us if their city could host a World&apos;s Fair under the
                  auspices of the BIE. Their requests, along with a fairly
                  dynamic World&apos;s Fair community in the US, highlight that
                  citizens realize and would welcome the strong impact a
                  World&apos;s Fair can have on their city, state and country.
                  Whether they attended the World&apos;s Fairs in San Francisco,
                  Chicago or New York, in Knoxville, Seattle or New Orleans in
                  the 1980s, many Americans have discovered that a visit to an
                  International Expo is a memorable experience. It would be
                  wonderful to, once again, attend an Exhibition in the United
                  States.
                </p>
                <p>
                  I sincerely hope that your organization&apos;s efforts will
                  successfully persuade the US to join the BIE again and lead New
                  York City to bid for a 2012 or 2015 Expo. Please rest assured
                  that you can count on the BIE&apos;s support in your endeavors
                  and we would be more than delighted to answer any additional
                  questions you may have.
                </p>
                <p className={styles.letterSignBlock}>
                  Yours Sincerely,
                  <br />
                  THE SECRETARY GENERAL
                  <br />
                  OF THE INTERNATIONAL EXHIBITIONS BUREAU
                </p>
              </div>
            </div>

            <div className={styles.secondEssay}>
              <p className={styles.essayHeading}>
                The NEW New York World&apos;s Fair
              </p>
              <p className={styles.essayByline}>
                Is <em>another</em> Fair on New York&apos;s Horizon?
              </p>
              <p className={styles.essayByline}>
                by Bill Young, April 22, 2006
              </p>

              <p>
                Could it be true? On this, the 42nd anniversary of the opening of
                the 1964/1965 New York World&apos;s Fair, word comes of renewed
                efforts to hold a World&apos;s Fair in the city of New York.
                Several years ago a group of Princeton University students
                organized an on-line petition drive to bring a fourth World&apos;s
                Fair to the city. The Fair was envisioned as a celebration of
                America&apos;s resolve following the events of September 11, 2001.
                Unfortunately their efforts lagged and New York pursued a bid for
                the Summer Olympic Games of 2012 in lieu of a Universal
                Exposition.
              </p>

              <p>
                Recently, however, the Bureau of International Expositions (the
                Paris-based organization that sanctions World&apos;s Fairs) became
                aware of the New York Expo plan and began to make inquiries
                regarding the Princeton group&apos;s efforts. The BIE&apos;s
                inquiries eventually landed on the desk of Queens activist David
                Oats who had previously lead an effort to bring a World&apos;s
                Fair to New York in 1989. Mr. Oats heads the Flushing
                Meadows-Corona Park World&apos;s Fair Association, a civic group
                formed in 1967 to preserve the unique history of the Park as host
                to two World&apos;s Fairs. Most recently he created and presided
                over the Queens Olympic Committee. That organization successfully
                waged a three-year battle to defeat a plan to construct the 2012
                Olympic Stadium on the West Side of Manhattan. Their efforts were
                instrumental in the city&apos;s eventual decision to locate the
                proposed stadium in Willet&apos;s Point, adjacent to Flushing
                Meadows-Corona Park.
              </p>

              <p>
                The award of the 2012 Olympic bid to London last year has put New
                York&apos;s Olympic plans on hold. With the BIE&apos;s expressed
                interest and encouragement, Mr. Oats has turned his group&apos;s
                efforts toward the possibility of New York hosting an
                International Exposition in 2015.
              </p>

              <p>
                Last month Queens Olympic Committee vice-president Greg Godfrey
                traveled to Paris to meet with Vincente Gonzalez Loscertales,
                Secretary General of the Bureau of International Expositions. The
                March meeting was the first small step toward making a 2015 New
                York World&apos;s Fair a reality. Mr. Loscertales and Mr. Godfrey
                discussed the considerable hurdles to be overcome for the city to
                host a World&apos;s Fair. At their meeting, and in subsequent
                communications, the BIE pledged to work closely with Mr.
                Oats&apos; group to develop a World&apos;s Fair proposal and to
                work toward reinstating the United States as a member of the BIE.
                The US withdrew their membership from the organization in 2001
                and no US city has hosted a World&apos;s Fair since 1984.
              </p>

              <p>
                Mr. Oats states that it may be a bit premature to start making
                plans for a trip to the Fair in 2015. The odds that a Fair will
                become a reality are, as he says, &quot;a long shot at best.&quot;
                Even the BIE has cautioned that the existing conditions
                &quot;reduce the chances to almost nil.&quot; But as Joseph
                Shagden and Robert Koppel know, impossible dreams can come true.
                Although their names take a back-seat in history to those of
                Grover Whalen and Robert Moses, Shagden and Koppel are credited
                as the men who conceived the idea for New York&apos;s World&apos;s
                Fairs of 1939 and 1964. That spark of a dream inspired others to
                take up the cause and the dream became a reality. Let us hope
                that David Oats will find the champions to make this World&apos;s
                Fair a reality as well! As he says, &quot; the door is open and
                it&apos;s worth the walk.&quot;
              </p>

              <p className={styles.copyright}>
                (Copyright 2006 David G. Oats and nywf64.com)
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar previousHref="/perspective02" explicitPrevious hideNext />
    </>
  );
}
