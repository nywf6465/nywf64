import type { Metadata } from "next";
import Image from "next/image";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bilgra11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Summary of Religious Participation at the Fair — Billy Graham — nywf64.com",
  description:
    "After the Fair: Converts and Red Ink — a Christianity Today summary of religious participation at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham — Summary of Religious Participation at the Fair.
 * Body from legacy bilgra11.html (custom article reprint — not a postcard
 * gallery; legacy content is the Christianity Today piece).
 *
 * Stack: hero → BilgraNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Legacy wording (Bronkbank, $250,000. mostly) is preserved.
 */
export default function Bilgra11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Billy Graham">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/bilgraoverview/hero-banner.jpg"
            alt="Billy Graham Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BilgraNavChrome />

      <article className={styles.article} aria-labelledby="bilgra11-title">
        <header className={styles.titleBar}>
          <h1 id="bilgra11-title" className={styles.titleBarMain}>
            Summary of Religious Participation at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.headline}>After the Fair:</h2>
          <h2 className={styles.headline}>Converts and Red Ink</h2>

          <div className={styles.body}>
            <p>
              It was the costliest, most attended fair in history. Some predict
              it will be the last great fair where industrial giants invest
              untold millions for elusive publicity gains.
            </p>
            <p>
              The 51 million who visited the New York World&apos;s Fair were 19
              million short of expectations. The general disillusionment and
              charges of mismanagement dulled the glitter of Flushing Meadows
              as surely as did wide-spread pilfering by visitors the last
              weekend.
            </p>
            <p>
              On closing day, one group of exhibitors were content with their
              lot: the religious at this most religious of world&apos;s fairs.
            </p>
            <p>
              Cardinal Spellman was reluctant to get involved at first, but the
              Roman Catholic Church scored a smashing box office coup. It
              offered, for free, a priceless show: Michelangelo&apos;s
              world-traveling &quot;Pieta&quot; and other art treasures. The
              Vatican Pavilion drew half the people who came to the fair. It
              was second only to General Motors in attendance.
            </p>
            <p>
              GM&apos;s pavilion cost it $2 per visitor. Although the Vatican
              had the most expensive religious pavilion, it spent only nineteen
              cents per head. The posh Christian Science effort cost $1.56 per
              visitor. The religious pavilions as a whole spent over $13
              million to draw 42 1/4 million people. In Madison Avenue terms,
              they notched a cost per thousand of $315.
            </p>
          </div>

          <div className={styles.chartWrap}>
            <Image
              src="/images/bilgra11/bilgra16.jpg"
              alt="Chart of Attendance and Expense"
              width={360}
              height={418}
              className={styles.chartImg}
              unoptimized
            />
            <div className={styles.legendWrap}>
              <Image
                src="/images/bilgra11/bilgra17.jpg"
                alt="Chart Legend"
                width={151}
                height={87}
                className={styles.legendImg}
                unoptimized
              />
              <p className={styles.legendSource}>
                Source: Estimates from Exhibitors
              </p>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              The two cults with pavilions at Flushing Meadow, Christian
              Science and Mormonism, report their experiment in pavilion
              evangelism paid off in thousands of converts. More modest results
              were claimed by two Christian evangelistic efforts, Billy
              Graham&apos;s pavilion and &quot;Sermons from Science.&quot;
            </p>
            <p>
              The low-budget, low key Wycliffe Bible Translators presentation
              gave the fair its foreign missions element. Wycliffe squeezed
              into the fair after the deadline and despite some financial
              strain won unusual notice on TV networks, in the press, and from
              iconoclastic radio essayist, Jean Shepherd.
            </p>
            <p>
              The four pavilions not backed by a single church depended on
              donations to break even. Only Billy Graham managed to do it.
            </p>
            <p>
              The biggest debt was at the Protestant and Orthodox Center, which
              is behind $250,000. mostly because churches failed to meet
              pledges.
            </p>
            <p>
              It is counting on its controversial drawing card, the{" "}
              <em>Parable</em> film, to make up the difference at $35 per
              showing. Sponsors report more than 5,000 rental requests have
              come in, nearly half of them from Catholics.
            </p>
            <p>
              At the fair, the film drew only half a million customers at fifty
              cents a seat -- this despite pre-fair publicity in damnation from
              fair czar Robert Moses and continued notoriety through a
              diatribe at the nearby Singer Bowl from youth evangelist Jack
              Wyrtzen. The free Graham film, twice as long, attracted twice as
              many customers.
            </p>
            <p>
              Free shows helped to draw the masses. Location was another key
              factor. On this score, the Mormon, Protestant-Orthodox and Billy
              Graham pavilions had choice sites near the main subway-railroad
              gate.
            </p>
            <p>
              Here are the religious results of the fair reported by pavilion
              managers:
            </p>
            <p>
              BILLY GRAHAM -- (Dan Piatt): More than a million saw the film,
              which called for commitment to Christ. About 5 per cent of the
              viewers sought counseling, a higher percentage than at most
              crusades.
            </p>
            <p>
              Those responding came from fifty five nations and follow-up work
              was often difficult. The usual procedure is to refer the person
              to a near-by church, but in some cases it was hundreds of miles
              away. An impressed Catholic priest from Belgium told Piatt he
              would try to persuade his colleagues to invite Graham for another
              European crusade.
            </p>
          </div>

          <div className={styles.split}>
            <div className={styles.splitPhoto}>
              <Image
                src="/images/bilgra11/bilgra18.jpg"
                alt="2,000 Tribes Demolition"
                width={200}
                height={738}
                className={styles.splitPhotoImg}
                unoptimized
              />
              <p className={styles.photoCaption}>
                Dismantling the Wycliffe &quot;2,000 Tribes&quot; pavilion
                (Photo by Sam Tamashiro)
              </p>
            </div>
            <div className={styles.splitBody}>
              <p>
                CHRISTIAN SCIENCE -- (Admiral Richard C. Renfro): &quot;The
                pavilion was one of the finest things the movement has done in
                many a year. Its efforts have been widespread and
                indeterminable.&quot; The pavilion aimed to explain Christian
                Science to the outsider, but also succeeded in producing new
                members (how many, like all membership data, is a state
                secret).
              </p>
              <p>
                With the self-assurance typical of his church, Renfro said the
                pavilion was the &quot;only one which dared mention God and
                explain who he is, what he is, and what we believe him to
                be.&quot; The church recently recruited the Protestant
                Pavilion&apos;s Dr. G. B. Rich to praise the beauty of the
                Christian Science effort in a publicity film.
              </p>
              <p>
                MORMON -- (Bernard P. Brockbank): The pavilion is credited with
                reaping thousands of converts, more than 1,000 in the New York
                area alone. The full results can&apos;t be known for years,
                because it will take that long for Mormon missionaries to
                contact the backlog of 750,000 persons Bronkbank says asked for
                counseling.
              </p>
              <p>
                &quot;It changed the attitude toward the church in many parts
                of the country, especially the eastern seaboard. They are more
                tolerant toward the Latter-Day Saints, more ready to make an
                inquiry about us.&quot;
              </p>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              PROTESTANT-ORTHODOX CENTER -- (Leonard Moreland): The impact was
              &quot;excellent,&quot; the attendance higher than expected.
            </p>
            <p>
              Moreland thought that <em>Parable</em> was provocative but that
              its symbolism went over the heads of many viewers. One
              professional fairgoer claims to have seen it 101 times and to
              have gotten something different out of it each time.
            </p>
            <p>
              Polls showed Catholics liked the film better than Protestants and
              Jews liked it more than Catholics. Aside from the film, Moreland
              questions whether the twenty-two variegated booths at the
              pavilion did anything more than reinforce the constituencies of
              their sponsors.
            </p>
            <p>
              SERMONS FROM SCIENCE -- (W. Scott Nyborg): &quot;We are thrilled
              . . . the acceptance by non-Christians was amazing.&quot;
            </p>
            <p>
              Among the 125,000 who entered the counseling room after the Moody
              Institute of Science shows, 3,300 indicated decisions for Christ.
              While most pavilions, and the fair as a whole, drew smaller
              crowds the second year, &quot;Sermons&quot; audiences were up 35
              per cent.
            </p>
            <p>
              A large corps has contacted decision-makers, in some cases to
              find Mormons had already dropped by. Many nuns, intrigued by the
              four-step salvation process borrowed from Campus Crusade, asked
              for copies to present to their Catholic school classes.
            </p>
            <p>
              VATICAN -- (Monsignor John J. Gorman): &quot;It was with some
              apprehension that the powers-that-be accepted the invitation to
              the fair. But I&apos;m sure there are no regrets now. We had an
              opportunity to present the Church, and good reception from the
              Protestant, the Jew, and the atheist . . .&quot;
            </p>
            <p>
              WYCLIFFE 2,000 TRIBES -- (Francis B. Dawson): &quot;It was
              definitely worthwhile. We expect it to pay off for ten years or
              more. We had a chance to meet young folks and counsel them about
              our missions. Many people hadn&apos;t heard about Wycliffe
              before.&quot; There were some heated discussions with people
              hostile toward missions, but many left with a different view,
              Dawson said.
            </p>
            <p>
              Wycliffe, like most, ended up spending more than it expected, and
              the gap between cost and gifts for the pavilion is $155,000. All
              bills have been paid, by shifting funds; but it is the first
              financial bind of this size Wycliffe has ever been in and there
              has been some controversy about it within the organization. The
              key problem: Wycliffe had planned to charge admission but soon
              found that if it did this, nobody would come.
            </p>
          </div>

          <p className={styles.source}>
            Source: <em>Christianity Today</em>, November 5, 1965
          </p>

          <div className={styles.webmaster}>
            <p>
              <strong>Webmaster&apos;s note...</strong> It&apos;s difficult to
              find the words to thank Eric enough for all of the work he put
              into this Feature. His research into the Billy Graham Evangelistic
              Association archives at Wheaton College presents a unique insight
              into how the Billy Graham Pavilion came to be at the Fair and
              reminds us of the importance of religion even as the Space Age
              was in full swing. Without his efforts, the Graham Pavilion
              Feature would not have been nearly so interesting and thorough.
            </p>
            <p>Thank you, Eric!</p>
            <p className={styles.webmasterSign}>Bill Young</p>
            <p className={styles.webmasterSign}>September 30, 2002</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/bilgra10"
        explicitPrevious
        overviewHref="/bilgraoverview"
        nextHref="/bilgraoverview"
      />
    </>
  );
}
