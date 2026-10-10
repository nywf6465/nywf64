import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building18.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Spoilers Lose the Day — Building the Fair — nywf64.com",
  description:
    "The Spoilers Lose the Day — Life magazine on Opening Day of the 1964/1965 New York World’s Fair, from Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — The Spoilers Lose the Day.
 * Body from legacy building19.html (mapped to /building18 as Page 18 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building18Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Building the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/building/buildinghero.jpg"
            alt="Building the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BuildingNavChrome />

      <article className={styles.article} aria-labelledby="building18-title">
        <header className={styles.titleBar}>
          <h1 id="building18-title" className={styles.titleBarMain}>
            The Spoilers Lose the Day
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.singleFigure} style={{ maxWidth: 314 }}>
            <Image
              src="/images/building18/building159.jpg"
              alt="LIFE Cover, May 1, 1964"
              width={314}
              height={400}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.coverCaption}>
              <strong>COVER</strong> Double-exposure taken at twilight
              superimposes the World&apos;s Fair&apos;s fountains in front of the
              exposition&apos;s symbol, the Unisphere.
            </figcaption>
          </figure>

          <h2 className={styles.articleTitle}>
            THE SHOW GOES ON,
            <br />
            THE SPOILERS LOSE THE DAY
          </h2>

          <div className={styles.essay}>
            <p>
              Isaiah Brunson, that angry young man, made his promise plain -- and
              everyone believed. &quot;We&apos;re going to block every street that
              can get you anywhere near the World&apos;s Fair -- and give New York
              the biggest traffic jam it&apos;s ever had.&quot; As that gaudy, gay
              affair in Flushing Meadow prepared to open, a gloomy sense of
              apprehension settled over the city. Civic leaders, the mayor, even
              the President of the United States took Brunson seriously.
            </p>
            <p>
              But when the time came, Brunson could not produce. He fell so short
              of producing that his effort was a little ludicrous and a little
              sad.
            </p>
            <p>
              The New York World&apos;s Fair opened almost without a hitch.
              Instead of the 2,000 stalled cars Brunson had promised, there were
              but a handful and they were quickly hauled out of the way. A brief
              try to jam the subways -- an auxiliary Brunson plan -- was broken
              in one sharp, early morning encounter with the police. That ended
              it. The Fair opened, the bands played, the dignitaries came and
              went ...
            </p>
            <p>
              Brunson is a restless, inarticulate bear of a man who is chairman
              of the Brooklyn CORE chapter. When the Fair neared completion, all
              candy-bright and gay in a world that is in fact harsh, some
              demonstration seemed natural -- even automatic -- to Brunson.
            </p>
            <p>
              So he hit upon and announced the traffic jam. And it might have
              connected. When Shea Stadium opened a week before the Fair, a
              simple ball game snarled traffic for hours on the expressways that
              lead to the Fair. Brunson expected that 2,000 cars would be
              available. But there was no coordination. It was up to each
              volunteer to pick the time and the place where he would stall - and
              to deal afterward with the police on his own. Even the people who
              were supposed to tie up the subway had not yet decided what they
              would do or where they would do it.
            </p>
            <p>
              The police, along with the rest of the city, confused the intensity
              of Brunson&apos;s cause, which is real, with the extent of his
              organization, which is ephemeral. As a result, the police were
              organized. They had been rehearsing techniques for dealing with
              Brunson. Long lines of wreckers waited beside the expressways. A
              helicopter, capable of lifting cars from the roadway, stood ready.
              Police on foot were posted at regular close intervals along the
              expressways, ready to pounce on anyone who paused.
            </p>
            <p>
              When trouble came -- and there were far fewer incidents than anyone
              had expected -- the police moved swiftly. When demonstrators tried
              to block a train at a subway station, a platoon of cops swept in
              and broke it up in a club-swinging encounter that left several
              demonstrators and one officer injured. An attempt to block the
              Triborough Bridge was stopped.
            </p>
            <p>
              And in their way, the people of New York were organized too. They
              simply stayed away, not only from the Fair (most of the visitors
              were tourists) but from the expressways that passed it. Traffic was
              25% of normal and only a tiny fraction of what might be expected on
              the day a world&apos;s fair opens.
            </p>
            <p>
              Everyone, in other words, was organized for the attack except the
              attackers. They -- the few who actually participated -- started out
              under the cold and drizzling skies and found the expressways nearly
              deserted. Those who stalled did so under the watchful eyes of a
              nearby cop. Only a handful bothered.
            </p>
            <p className={styles.byline}>by DAVID NEVIN</p>
            <p className={styles.source}>
              SOURCE: <em>Life</em> Magazine, Vol. 58 No. 18, May 1, 1964,
              excerpted
            </p>
          </div>

          <blockquote className={styles.quote}>
            &quot;In a blaze of color, and to the shiver of excitement that man
            always feels when he looks into his past and his future, the New York
            World&apos;s Fair last week opened its gates. It is a whopping show
            -- the biggest fair ever -- that transports the visitor forward to
            the pipe dream when man may somehow tame the deserts and live beneath
            the oceans. It is a look backward, awesome and nostalgic, at the
            distance he has traveled since he lived in caves, and at wondrous
            things he has done along the way. It is a potpourri of his artistic
            genius through all the years -- and it has a Dead Sea Scroll and the{" "}
            Pieta. A miniature Tutankhamen lies in a golden coffin just across
            the street from the latest Japanese motorcycle. It is a banquet
            table, stacked with delicacies from Korean kimchi to French cuisine
            to pizza. It is an intimate circus, a universal classroom and a
            cultural bazaar, where the pagodas and minarets of the ancient East
            stand side by side with the towers of the modern West. And, like all
            good fairs, it has a frosting of sky rides and hot dogs and
            music.&quot;
          </blockquote>
          <p className={styles.quoteAttribution}>
            <em>Life</em> Magazine, May 1, 1964
          </p>

          <div className={styles.closing}>
            <p>
              Only five years had passed since five men met at City Hall to
              discuss an idea that New York should host another World&apos;s
              Fair. Those years had been filled with triumphs and failures for
              the Fair. All of that was history now. The Fair opened, on time, as
              promised. <em>Life</em> Magazine, in its cover story of the
              Fair&apos;s opening, called it &quot;A Smasheroo of a World&apos;s
              Fair.&quot; It was that, and more.
            </p>
            <p>
              Opening Day, April 22, 1964, dawned grey, cold and rainy. A planned
              &quot;stall-in&quot; by civil rights demonstrators had the city on
              edge. People stayed home. Over the next two years, the Mighty Fair
              would struggle to triumph over failure: Poor attendance. Financial
              difficulties. Criticism over high prices, banal exhibits and gross
              mismanagement. The failures have too often been the story of the
              Fair.
            </p>
            <p>
              To the millions who would visit, the Fair would be an experience of
              a lifetime. The organizers, planners, managers, tradesmen,
              designers, architects, engineers, craftsmen and artisans who had
              brought about this &quot;Miracle in the Meadow&quot; are the true
              story of the Fair. This feature at{" "}
              <strong>
                <span className={styles.nywf}>nywf</span>
                <span className={styles.nywf64}>64</span>
              </strong>
              .com is dedicated to them.
            </p>
          </div>

          <figure className={styles.singleFigure} style={{ maxWidth: 307 }}>
            <figcaption className={styles.photoCaptionTop}>
              <strong>DAWN AT THE FAIR</strong>. Light from east falls upon
              illuminated outlines of Chrysler Pavilion, (<em>foreground</em>),
              U.S. Rubber&apos;s Ferris Wheel (<em>center</em>) and the Unisphere
              (<em>left rear</em>).
            </figcaption>
            <Image
              src="/images/building18/building156.jpg"
              alt="Dawn at the Fair"
              width={307}
              height={400}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.source}>
              SOURCE: <em>Life</em> Magazine, Vol. 58 No. 18, May 1, 1964
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building17"
        explicitPrevious
        nextHref="/building19"
      />
    </>
  );
}
