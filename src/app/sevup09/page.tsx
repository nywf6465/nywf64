import type { Metadata } from "next";
import Image from "next/image";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sevup09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Out Like a Lion — Seven-Up — nywf64.com",
  description:
    "Out Like a Lion — the 7up Leader wrap-up on the Seven-Up Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up — Out Like a Lion.
 * Body from legacy sevup09.html (custom navy-title article).
 *
 * Stack: hero → SevupNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Sevup09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Seven-Up">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sevupoverview/hero-banner.jpg"
            alt="Seven-Up at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SevupNavChrome />

      <article className={styles.article} aria-labelledby="sevup09-title">
        <header className={styles.titleBar}>
          <h1 id="sevup09-title" className={styles.titleBarMain}>
            Out Like a Lion
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.kicker}>&quot;7-Up At The Fair&quot;</p>
          <h2 className={styles.headline}>FAIR GOES OUT LIKE A LION</h2>

          <figure className={styles.figure} style={{ maxWidth: 446 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup09/sevup30.jpg"
                alt="7-Up International Sandwich Gardens"
                width={446}
                height={294}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <div className={styles.body}>
            <p>
              A lot of 7-Up has gone over the counter at the 7-Up International
              Sandwich Gardens since the World&apos;s Fair opened in April of 1964
              -- some five million 9-ounce cups, to be exact!
            </p>
            <p>
              . . . Not including some 100,000 7-Up &quot;Floats,&quot; sold mainly
              during 1965!
            </p>
            <p>
              Plus, of course, more than five and a half million cups sold through
              World&apos;s Fair restaurants, bars, venders and concession stands!
            </p>
            <p>
              Total figures? We&apos;re too tired to count. No matter how you
              slice your statistics, you will still come up with one big fact . .
              .
            </p>
            <p>
              Seven-Up was up front . . . up big . . . at the 1964-65 New York
              World&apos;s Fair!
            </p>
            <p>
              Production and delivery would have kept a good-size 7-Up bottling
              plant busy for the 12-month run of the Fair. In fact, it required
              the facilities of one of the biggest ones -- the 7-Up Bottling
              Company of Brooklyn, who produced the 7-Up for the Seven-Up
              World&apos;s Fair Associates. The six New York Metropolitan Area
              7-Up Developers in Brooklyn, N.Y., Norwalk, Conn., Hackensack,
              Plainfield, Newark and Washington, N.J., joined with The Seven-Up
              Company in forming the Seven-Up World&apos;s Fair Associates, which
              was designed to operate the 7-Up International Sandwich Gardens.
            </p>
            <p>
              All these facts are very fine -- and we don&apos;t want to minimize
              them. But -- the sale of 7-Up at the World&apos;s Fair was actually
              a secondary purpose for 7-Up participation.
            </p>
            <p>We wanted . . .</p>
            <ul>
              <li>
                To establish 7-Up, both domestically and internationally, as a{" "}
                <em>major industrial force</em> -- The 7-Up Company, its Canadian
                and Export subsidiaries, and especially 7-Up Developers.
              </li>
              <li>
                To demonstrate the <em>affinity of 7-Up for food</em> . . .
                through the medium of the unique trays of &quot;International
                Sandwiches.&quot;
              </li>
              <li>
                To <em>sample potential 7-Up customers</em> who would be retuning
                to Developer territories all over the world.
              </li>
              <li>
                And to make all of us <em>even prouder</em> to be associated with
                7-Up.
              </li>
            </ul>
            <p>Were we successful?</p>
            <p>
              Or perhaps first -- since we depended on the Fair itself for our
              visitors -- was the New York World&apos;s Fair a success?
            </p>
            <p>
              It has been a very popular and convenient ploy for the press to
              suggest that it was not. Yet more than 50 million people attended in
              12 months -- more people than have ever paid admission to gather in
              one place over a similar period of time in the history of the world.
            </p>
            <p>
              We believe it was a great success -- but we&apos;ll let the
              World&apos;s Fair stand on its record.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup09/sevup31.jpg"
                alt="Ben Wells placing the 7-Up model on the Fair model"
                width={600}
                height={203}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Ben Wells plays a Bunyanesque role as he places a scale model of the
              newly designed 7-Up International Sandwich Gardens structure in its
              proper location on the large model of the New York World&apos;s Fair
              in early 1963. Observing the symbolic event are (from the left)
              John Furnas, then general manager of the 7-Up International Sandwich
              Gardens, Martin Stone, Fair executive in charge of industrial
              exhibits, and Seven-Up Company vice president D.J. O&apos;Connell.
            </figcaption>
          </figure>

          <div className={styles.sectionHeading}>
            <Image
              src="/images/sevup09/sevup03.jpg"
              alt=""
              width={65}
              height={156}
              className={styles.decor}
              unoptimized
            />
            <h2 className={styles.sectionTitle}>
              7-Up A Major Industrial Force, Domestically and Internationally . .
              .
            </h2>
          </div>
          <div className={styles.body}>
            <p>
              We doubt if one of the 50 million people attending the World&apos;s
              Fair missed seeing the International Sandwich Gardens. Spread over
              45,000 square feet of ground at the center of the Fair, with its
              clock tower rising 107 feet into the sky, the 7-Up Sandwich Gardens
              was a World&apos;s Fair landmark.
            </p>
            <p>
              From the international sandwiches through the entertainment, to the
              costumes of the waitresses, the international idea was emphasized at
              every turn.
            </p>
            <p>
              The very fact that 7-Up was there as a major participant --
              alongside giants of industry and commerce -- spoke eloquently for
              7-Up and its stature in the business community.
            </p>
            <p>
              According to the best estimates available, five million people
              actually visited the Sandwich Gardens during the two seasons of the
              Fair -- about 10% of the total Fair attendance. All this against
              competition from 136 other exhibitors and 236 restaurant or
              concession stand operations!
            </p>
          </div>

          <div className={styles.sectionHeading}>
            <Image
              src="/images/sevup09/sevup03.jpg"
              alt=""
              width={65}
              height={156}
              className={styles.decor}
              unoptimized
            />
            <h2 className={styles.sectionTitle}>
              The Affinity of 7-Up For Food . . .
            </h2>
          </div>
          <div className={styles.body}>
            <p>
              Our main exhibit at the World&apos;s Fair was <em>food</em> . . .
              served dramatically in the form of the international sandwiches . .
              . and enhanced with cups of chilled 7-Up.
            </p>
            <p>
              The 7-Up international sandwiches were, without question, the most
              talked-about food item at the Fair. The budget prices helped -- four
              sandwiches, plus garnishes and dessert, plus a chance to sit in
              shaded comfort and be entertained by live musicians, all for $1.50
              plus tax!
            </p>
            <p>
              But 7-Up and international sandwiches were not talked about only by
              budget-minded families. Radio and TV stations, food editors,
              columnists and food trade writers were captivated by the originality
              and popularity of the international sandwiches. And they told their
              listeners and readers about them.
            </p>
            <p>
              Through one trade magazine spread on the Gardens, a luxury motel
              owner was so captivated that he decided to open an &quot;International
              Sandwich Room&quot; in his establishment -- with 7-Up and
              international sandwiches featured prominently on the menu.
            </p>
            <p>
              Seven-Up with food? It happened a million times at the 7-Up
              International Sandwich Gardens.
            </p>
          </div>

          <div className={styles.sectionHeading}>
            <Image
              src="/images/sevup09/sevup03.jpg"
              alt=""
              width={65}
              height={156}
              className={styles.decor}
              unoptimized
            />
            <h2 className={styles.sectionTitle}>
              Sample Potential Customers . . .
            </h2>
          </div>
          <div className={styles.body}>
            <p>
              Almost everyone attending the Fair had heard of 7-Up. And nearly
              everyone had tasted it. But <em>not</em> everyone was a regular user
              of 7-Up. &quot;Seven-Up at the Fair&quot; certainly did its part in
              stamping out this evil!
            </p>
            <p>
              More than 10 million 9-ounce cups of 7-Up were served at the Gardens
              or at the Fair -- with each cup being consumed within sight of the
              towering 7-Up Clock and the 7-Up International Sandwich Gardens . .
              . 7-Up at its best.
            </p>
          </div>

          <div className={styles.sectionHeading}>
            <Image
              src="/images/sevup09/sevup03.jpg"
              alt=""
              width={65}
              height={156}
              className={styles.decor}
              unoptimized
            />
            <h2 className={styles.sectionTitle}>
              Even Prouder to be Associated With 7-Up . . .
            </h2>
          </div>
          <div className={styles.body}>
            <p>
              We are . . . and every 7-Up Developer who attended the World&apos;s
              Fair is.
            </p>
            <p>
              The 14,604 VIP guests of The Seven-Up Company and 7-Up Developers at
              the 7-Up International Lounge were the best investment we have ever
              made -- and the most vocal! Sophisticated businessmen, politicians
              and foreign travelers went out of their way to praise the
              hospitality they received at the International Lounge. It was a true
              oasis from the summer heat and the press of surging crowds, and was
              appreciated far beyond the actual investment the 7-Up hosts made in
              time, effort or money. How many relationships with key local,
              regional and national chain store accounts were cemented through a
              visit to the 7-Up Lounge would be difficult to measure -- but any
              estimated would probably prove to be low.
            </p>
            <p>
              On October 17, 1965, the 7-Up International Sandwich Gardens and the
              New York World&apos;s Fair closed their doors. We have posted our
              banns before the world. Seven-Up is an international business leader
              -- one of the world&apos;s most widely distributed and best known
              products. We cannot back out of this contract.
            </p>
            <p>
              Where the momentum of the World&apos;s Fair will carry us lies with
              the future. But the image of 7-Up will be bigger and brighter
              because of it.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 453 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup09/sevup32.jpg"
                alt="Robert Moses visiting the 7-Up Gardens"
                width={453}
                height={462}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              World&apos;s Fair impresario Robert Moses makes an inspection visit
              to the Gardens early in the 1965 season. With him are John Furnas
              (not shown) and the 1965 acting general manager, Dave Harding, who
              took over day-to-day responsibilities after Furnas was assigned as
              Seven-Up Company regional sales manager for the Metropolitan New
              York 7-Up Developers. Moses viewed many new design innovations to
              accommodate ever-increasing traffic flow to the 7-Up International
              Sandwich Gardens.
            </figcaption>
          </figure>

          <p className={styles.source}>
            SOURCE: <em>the 7up Leader</em>, Volume VI No. 6, November/December
            1965
          </p>

          <div className={styles.floatBox}>
            <p className={styles.floatTitle}>
              &quot;Float&quot; Phenomenal at Fair!
            </p>
            <p>
              The venerable 7-Up &quot;Float,&quot; no longer featured in
              nationally coordinated Seven-Up Company promotions, should certainly
              not be written off the books by 7-Up Developers -- and certianly not
              written off the accounting books!
            </p>
            <p>
              Added to the Gardens&apos; fare in late 1964, 7-Up &quot;Floats&quot;
              came into their own during 1965, with the majority of the 256,250
              &quot;Floats&quot; being sold at 35c for a 16-oz. cup.
            </p>
            <p>
              Despite the popularity of 7-Up &quot;Floats,&quot; they were outsold
              by LIKE &quot;Floats&quot; -- by some 100,000 cups!
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sevup08"
        explicitPrevious
        overviewHref="/sevupoverview"
        nextHref="/sevup10"
      />
    </>
  );
}
