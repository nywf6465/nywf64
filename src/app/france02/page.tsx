import type { Metadata } from "next";
import Image from "next/image";
import { FranceNavChrome } from "@/components/FranceNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./france02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Groundbreaking — France — nywf64.com",
  description:
    "Groundbreaking ceremonies for the Pavilion of France at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * France — Groundbreaking.
 * Body from legacy france02.html (custom groundbreaking transcription).
 *
 * Stack: hero → FranceNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Legacy wording (Maruice, Chavalier) is preserved.
 */
export default function France02Page() {
  return (
    <>
      <section className={styles.hero} aria-label="France">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/franceoverview/hero-banner.jpg"
            alt="France at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FranceNavChrome />

      <article className={styles.article} aria-labelledby="france02-title">
        <header className={styles.titleBar}>
          <h1 id="france02-title" className={styles.titleBarMain}>
            Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.coverFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france02/france02.jpg"
                alt="Groundbreaking Cover"
                width={600}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.coverCaption}>
              The French Pavilion at the New York World&apos;s Fair will consist
              of three buildings of pure geometric design. A rectangular
              structure will house industrial exhibits, Maxim&apos;s famous Paris
              restaurant and a Moulin Rouge dining terrace. The second building,
              a pure white ellipse, will contain a 1500-seat theater where the
              original &quot;Folies Bergere&quot; will be presented. A towering
              pyramid will contain the Treasures of Versailles, an enormous
              collection of French paintings and art objects. The pavilion will
              feature a million dollar miniature reproduction of the City of
              Paris; specialty restaurants, and over 200 exhibits dealing with
              the life and products of France. The pavilion has been designed by
              Sidney L. Katz of Katz Waisman Weber Strauss-Blumenkranz.
              Contractor: Rand Construction Company. Cole Fischer and Rogow will
              serve as advertising and public relations representatives, and Bill
              Doll and Company will handle the national and international
              publicity campaign.
            </figcaption>
            <p className={styles.source}>
              SOURCE: Groundbreaking Brochure, The Pavilion of France
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              Following is a transcription of remarks made by French and
              World&apos;s Fair officials at the French Pavilion groundbreaking
              ceremonies, New York World&apos;s Fair, Tuesday, February 5, 1963.
            </p>

            <p>
              AMBASSADOR RICHARD C. PATTERSON, JR. [Chief of Protocol]:
              Distinguished guests and ladies and gentlemen. Today we are
              witnessing the groundbreaking for the French Pavilion, as you know
              -- the Pavilion of the Spirit of France. The first speaker is Mr.
              Allen Beach, director of our International Exhibits of the
              World&apos;s Fair 1964-1965 Corporation. Mr. Beach.
            </p>

            <p>
              ALLEN BEACH: Thank you, Mr. Ambassador, M. Chevalier, Mr. Moses,
              Mr. Golff, Mr. Pierre, Miss Suzanne Bernard, who is Queen of the
              French Pavilion, distinguished guests, ladies and gentlemen.
              Governor Poletti, who is the vice president for International
              Affairs and Exhibits, is missing this ceremony by but one day. He
              returns late tomorrow from Italy where he has finalized the Italian
              participation in the Fair. I talked to him yesterday and he asked
              me to say this for him. &quot;Please convey to Mr. Golff, president
              of the International Expositions, Inc. and his associates; and to
              Mrs. Mary Lasker and her fine advisory committee to the French
              Pavilion; and to M. Chevalier; my sincerest congratulations on
              their groundbreaking ceremony, as well as my personal thanks to all
              those who have made the French Pavilion possible at the Fair. You
              can all be assured of our fullest cooperation, and I am confident
              of your success.&quot;
            </p>

            <p>
              To this I would like to add my own personal congratulations. We all
              know the problems that have been overcome in the tremendous effort
              that Mr. Golff and his advisors and associates have put into this
              project to bring it to this point. It was just four-and-a-half
              months ago that Mr. Golff came to our office and heard about our
              long efforts to secure French participation in the Fair. He came
              back with a plan. And we liked the plan, but we wanted to know more
              about Mr. Golff. So, a few days later we received letters from
              officials of several countries for whom Mr. Golff had organized
              exhibitions; also letters from officials from our own Department of
              Commerce, Department of State, from leading exhibition firms and
              other firms throughout the United States; all praising his work,
              talent and ability, and we were convinced.
            </p>

            <p>
              Mr. Golff and his associates have taken on a challenging project.
              What they have accomplished in a few months is tremendous. They may
              be assured that they have the fullest support from all of us.
              Private industry and cultural organization of France are fortunate
              that a group like Mr. Golff and his team was available. Otherwise,
              France might not have been represented in this great international
              event in 1964 and 1965. Thank you.
            </p>

            <p>
              AMBASSADOR PATTERSON.: Thank you, Mr. Beach. May I now introduce to
              you Mr. Leo J. M. Pierre, the World&apos;s Fair representative for
              the Chase Manhattan Bank. He is also a member of the Advisory
              Committee for the French Pavilion. Mr. Pierre.
            </p>

            <p>
              LEO J. M. PIERRE: Thank you, sir. It is indeed a great pleasure to
              be here, and on such a glorious day, which shows that Mr. Moses
              knows how to arrange things. Unfortunately, thinking of France
              today, there are black clouds on the horizon, politically speaking,
              as we all know, but I hope, I trust -- I am quite sure that these
              clouds will disappear very quickly; the sky will be blue and sunny
              again, and French-American friendship will be as safe and secure as
              it has been through the centuries.
            </p>

            <div className={styles.speechRow}>
              <figure className={styles.speechFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/france02/france03.jpg"
                    alt="Chavalier, Golff, Moses, Beach"
                    width={300}
                    height={247}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption>
                  Displaying the World&apos;s Fair official medallion presented
                  to them at French Pavilion groundbreaking ceremonies are honor
                  guest Maurice Chevalier and French Pavilion Director Anthony B.
                  Golff. For the Fair: President Robert Moses and Director of
                  International Exhibits Allen Beach.
                </figcaption>
              </figure>
              <div className={styles.speechText}>
                <p>
                  I regret the absence of Mrs. Lasker, who happens to be the
                  chairman of the Advisory Committee for the French Pavilion at
                  the Fair, and I believe I&apos;m probably the only member of
                  this committee present today. The Advisory Committee is
                  comprised of a perfectly beautiful list of names, and we all
                  feel that just because there have been certain difficulties in
                  setting up this beautiful project, it will be very necessary
                  not to make it just a list of distinguished names, but to
                  create a real spirit of help and dedication and in the name of
                  the Advisory Committee. For myself, I should like to say that
                  we intend to be a working committee and that we pledge our
                  support to Mr. Moses, to Mr. Golff, and to all the dedicated
                  people who are trying to have the French flag flying at the
                  World&apos;s Fair.
                </p>
              </div>
            </div>

            <p>
              We all feel that it would have been absolutely impossible to
              conceive of such a large and important manifestation in New York
              without France being present. We shall do our best -- knowing that
              the 1939-1940 World&apos;s Fair saw a perfectly magnificent French
              Pavilion -- to have an even better one in 1964 and 1965.
            </p>

            <p>
              Standing here at my right is a gentleman whom all of you know. Who
              couldn&apos;t? I have the great privilege of being a personal friend
              of M. Chevalier. He has become a part of the American entertainment
              world, and many of you may remember such magnificent movies as
              &quot;The Love Parade&quot; with M. Chevalier and Jeanette
              MacDonald, and &quot;Gigi,&quot; and many others. In &quot;The Love
              Parade&quot; he was a dashing young man, and now, many years later,
              he is still very dashing in &quot;Gigi.&quot;
            </p>

            <p>
              In Paris, and throughout France in general, he&apos;s not Monsieur
              Chavalier, but simply Maurice. May I introduce Maurice Chevalier.
            </p>

            <p>
              MAURICE CHEVALIER: I have not a speech ready to make in such an
              important circumstance. I only mean to say that I&apos;m very proud
              that I&apos;ve been asked to be here at the birth of the French
              Pavilion. I am sure that it will become something beautiful, as it
              has to be beautiful to be in harmony with what is going to be done
              all around this French Pavilion. All I can say is that I hope it
              will be as beautiful and as deep as the love and as the gratitude
              that I have for America, and I am sure that it will be so because
              it has to be so and it should be so definitely. Thank you very
              much.
            </p>

            <p>
              AMBASSADOR PATTERSON: Thank you, our guest of honor. I should like
              now to present Mr. Anthony B. Golff, who holds a brilliant post in
              our coming World&apos;s Fair, as the director of the French
              Pavilion. Mr. Golff.
            </p>

            <div className={`${styles.speechRow} ${styles.speechRowReverse}`}>
              <figure className={styles.speechFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/france02/france04.jpg"
                    alt="Champagne Launch"
                    width={300}
                    height={320}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption>
                  Suzanne Bernard swings ribbon-bedecked bottle of champagne to
                  break it on a bull-dozer during groundbreaking ceremonies for
                  the French Pavilion. Watching Suzanne, who is Miss French
                  Pavilion, are Anthony B. Golff, president of International
                  Exposition Corp., Allen Beach, director of International
                  Exhibits, Robert Moses and Maurice Chavalier.
                </figcaption>
              </figure>
              <div className={styles.speechText}>
                <p>
                  ANTHONY B. GOLFF: Thank you, Mr. Ambassador, Maurice Chevalier,
                  Mr. Moses. In the words of the &quot;Marseillaise,&quot; the
                  day of glory has arrived. We hope to build here one of the
                  finest pavilions that has ever been built in any fair anywhere,
                  as a tribute to France, as a demonstration of our gratitude to
                  that great nation, and by way of presenting to the world the
                  cultures, the products, and all of the fine things which
                  emanate from France.
                </p>
                <p>
                  We invite you to join us in our efforts and we take this
                  opportunity to invite all of French industry and commerce to
                  participate in this great work. Thank you very much.
                </p>
                <p>
                  AMBASSADOR PATTERSON: Thank you, Mr. Golff. The next
                  distinguished American whom I shall present, like Maurice
                  Chevalier, needs no introduction. I give you the distinguished
                  president of the New York World&apos;s Fair, the Honorable
                  Robert Moses.
                </p>
              </div>
            </div>

            <p>
              ROBERT MOSES: Dick Patterson, M. Chevalier, and friends. Allow me
              to express briefly the great pleasure of the officers of the Fair
              that this French Pavilion is to have an honored place in our
              demonstration of world progress. We rejoice that the French people
              will not be among the few conspicuous absentees but will join New
              York City, our American states and industries and the greater part
              of the globe in promoting peace through understanding.
            </p>

            <p>
              The common market we offer at the Fair is one based on the old
              Olympic ideal of healthy rivalry far removed from all ideologies,
              the meeting of strong men regardless of border, breed and birth.
            </p>

            <p>
              I shall sound no discordant notes here. As to the B.I.E. we are
              not, and never could have been, members. The New York Fair is not
              governmental, and our country could not join with the B.I.E.
              otherwise than by treaty approved by the Senate. Ours is a two, not
              a one-year Fair; it operates under a charter, rules and regulations
              entirely out of the B.I.E. jurisdiction. These facts have been
              certified and publicized over and over again. And the subject no
              longer constitutes news.
            </p>

            <div className={styles.speechRow}>
              <figure className={styles.speechFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/france02/france05.jpg"
                    alt="Site Map"
                    width={300}
                    height={317}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </figure>
              <div className={styles.speechText}>
                <p>
                  One look about you at the multifarious activities at Flushing
                  Meadow will tell you that we deal here with realities and the
                  future -- not with cliches, old, unhappy far-off things or
                  battles long ago. We recognize past glories and memories, but
                  our faces are to the future.
                </p>
                <p>
                  We raise our voices at my Alma Mater, Yale University, to the
                  Spirit of Youth, alive, unchanging, under whose feet the years
                  are cast. Who but Maruice Chevalier, master of song and story,
                  put over not with a leer, but with economy of gesture, charm
                  and a glance of the eye, so perfectly illustrates, symbolizes
                  and personifies this Spirit? He has that rare and precious
                  combination of nostalgia and <em>elan vital</em> which is the
                  quintessence of France.
                </p>
                <p>
                  Again, welcome to the greatest show of our times, and thanks
                  again for coming to the groundbreaking.
                </p>
              </div>
            </div>
          </div>

          <hr className={styles.rule} />

          <div className={styles.adBlock}>
            <p className={styles.adHeading}>A Little Bit of Advertising</p>
            <p className={styles.adLead}>
              A box of matches advertises the Pavilion of France
            </p>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france02/france06.jpg"
                alt="Advertising Matches"
                width={400}
                height={258}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.source}>Source: eBay Auction</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/france01"
        explicitPrevious
        overviewHref="/franceoverview"
        nextHref="/france03"
      />
    </>
  );
}
