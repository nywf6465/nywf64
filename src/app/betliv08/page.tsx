import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./betliv08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Essay: The Story of the Better Living Center — Better Living Center — nywf64.com",
  description:
    "Eric Paddon’s essay on the Better Living Center at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center — The Story of the Better Living Center.
 * Body from legacy betliv08.html (custom essay — no shared brochure standard).
 *
 * Stack: hero → BetlivNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Betliv08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betliv08-title">
        <header className={styles.titleBar}>
          <h1 id="betliv08-title" className={styles.titleBarMain}>
            Essay: <em>The Story of the Better Living Center</em>
          </h1>
          <p className={styles.titleBarByline}>... by Eric Paddon</p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              An historic Civil War locomotive! ... The world&apos;s largest
              model train exhibit! ... Daily shows featuring the latest fashions
              from America&apos;s leading designers! ... A dream house display
              of home furnishings! ... Exotic animals living naturally among
              home furnishings! ... A flowing water faucet seemingly suspended
              in mid-air! ... Priceless works of American art! ... Tasty samples
              of chocolate and cookies! ... A musical revue puppet show
              featuring one of the most famous commercial symbols of American
              industry!
            </p>
            <p>
              Does that sound like the kind of diversity that best epitomizes
              the things to be found in the vast 600 acres and 150 plus pavilions
              of the 1964-1965 New York World&apos;s Fair? Actually, all of this
              could be found in one building alone: The Better Living Center,
              situated in the Industrial Area and flanked on either side by two
              of Walt Disney&apos;s major attractions, the General Electric and
              Pepsi Cola pavilions. This four story structure was both the
              tallest and largest in the entire Industrial Area and was meant to
              provide, not just a diversity of exhibits, but an outlet for
              exhibitors who wanted to be involved with the Fair yet were unable
              or unwilling to spend the money necessary to build their own
              pavilion. In addition, those exhibitors who might have at first
              glance been more at home in a more specialized building like the
              Pavilion of American Interiors or the (never-constructed) World Of
              Food conceivably saw the Better Living Center, with it&apos;s
              &quot;potpourri&quot; approach of a variety of exhibits dedicated
              to the theme of better living, as an ideal place to call attention
              to themselves in a smaller setting.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 475 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/betliv08/ground-level.jpg"
                alt="Ground Level View of the Better Living Center"
                width={475}
                height={381}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Ground Level view of the Better Living Center
            </figcaption>
            <p className={styles.source}>
              SOURCE: New York World&apos;s Fair Publicity Photograph presented
              courtesy Craig Bavaro collection
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              The 1964-1965 New York World&apos;s Fair&apos;s own
              &quot;potpourri&quot; approach of soliciting sponsors for
              multi-exhibitor pavilions, whether done consciously or not,
              hearkened back to the first significant World&apos;s Fair in
              London in 1851. For that Fair all of the industrial exhibits,
              scientific demonstrations and international displays were housed
              inside one facility, the massive glass and iron &quot;Crystal
              Palace. &quot; The success of the &quot;Great Exhibition&quot; of
              1851 insured that the legacy of the Crystal Palace would never be
              forgotten. The Better Living Center, World of Food, Pavilion of
              American Interiors, Hall of Education and the Transportation &amp;
              Travel Pavilion were all privately sponsored, multi-exhibitor
              buildings and among the largest structures at the at the
              1964-1965 Fair. By their nature they were the Fair&apos;s own
              Crystal Palaces -- yet not constructed or financially supported by
              the Fair itself. Interestingly, a history-minded organizer of the
              Better Living Center was no doubt thinking back to 1851 when it
              was decided that one of the major exhibits planned for the
              building, a daily fashion show, would be called &quot;The Crystal
              Palace of Fashion.&quot;
            </p>
            <p>
              Promotional advertising for the Better Living Center suggested
              that it might be a pavilion geared more toward women. That
              certainly seemed true with such planned exhibits as The Crystal
              Palace of Fashion and the presence of a &quot;Women&apos;s
              Hospitality Center.&quot; But there were plenty of other exhibits
              that cut across gender lines, as well as others that were aimed at
              children. With an observation deck offering one of the best views
              of the entire Fair next to that of the New York State Pavilion&apos;s
              observation towers, <em>and</em> a rooftop restaurant, the Better
              Living Center should surely have been able to draw in large crowds
              of Fairgoers of all ages. Such was not to be the case. While the
              Better Living Center ultimately didn&apos;t do as poorly to the
              degree that true disasters like the Pavilion of American Interiors
              or the Hall Of Education did, it was one of the Fair&apos;s more
              conspicuous failures. Even its prime location next to some of the
              Fair&apos;s biggest successes did not help it.
            </p>
            <p>
              The Better Living Center had to overcome a rocky beginning. It
              failed to open smoothly in April, 1964 with the rest of the Fair.
              A number of top exhibits, especially those on the third floor,
              were not ready on Opening Day and weren&apos;t fully in place for
              as much as a full month after. As Better Living Center President
              Richard Burge explained in a May 26, 1964 letter to Fair officials
              discussing the state of the pavilion, &quot;There are very great
              problems inherent in effectively coordinating and installing in
              excess of 125 exhibitors in a building of the nature and size of
              ours.&quot; Construction delays in getting new exhibit space
              finished after the Fair opened grew so bad that the pavilion
              operated during its first month without a formal Operating permit
              (third floor exhibitor Canada Dry regarded the building conditions
              as &quot;deplorable&quot;). This led the Fair&apos;s Director of
              Safety, W.J. Hyland, to make a subtle threat that unless problems
              were immediately dealt with he might have the pavilion closed.
              Burge then employed work crews around-the-clock to make sure
              Hyland&apos;s objections were addressed.
            </p>
            <p>
              The major problem with the Better Living Center was that it forced
              Fairgoers to take only one proscribed route through the pavilion
              to visit the exhibits. All visitors were <em>required</em> to
              start their tour from the top floor by taking the
              Lifesavers-sponsored glass elevator to the rooftop restaurant or
              an escalator that went from the Lobby to the first floor
              mezzanine, then a second escalator leading to the third floor
              exhibit area where they would begin to wind their way down through{" "}
              <em>every</em> exhibit in the building. The{" "}
              <em>New York World-Telegram</em>, in what was for the most part a
              favorable profile of the pavilion, likened the whole design to
              that of a mousetrap aimed at trapping Fairgoers into seeing every
              part of the building (and forcing them to follow yellow-painted
              footprints on the floor as they made their way down). For someone
              who was only interested in seeing one or two specific things in
              the pavilion, there might have been a disinclination to enter the
              building and allow oneself to be &quot;trapped&quot; for however
              long it might take to make one&apos;s way back down -- having to
              enjoy (or endure) every exhibit along the way. By designing the
              building this way the pavilion&apos;s sponsor, Edward H. Burdick
              Associates., Inc., could assure exhibitors that they would get
              their money&apos;s worth out of exhibiting in the Better Living
              Center. Once inside, the Fairgoer had <u>no</u> <u>choice</u> but
              to see their exhibit. It was a classic example of an &quot;idea
              that looked good on paper.&quot; Ultimately, this concept kept
              more people away than it enticed to venture in.
            </p>
            <p>
              Despite its ultimate failure the Better Living Center&apos;s mere
              existence, and a closer look at some of what it had to offer, can
              provide a genuine insight into the nature of what Robert Moses
              called &quot;Something for Everyone&quot; and the vast scope of
              what the 1964-1965 New York World&apos;s Fair was all about.
            </p>
            <p>
              So ... taking the proscribed route of <em>top floor down</em>,
              let&apos;s visit the Better Living Center!
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 475 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/betliv08/aerial.jpg"
                alt="Aerial view of the Better Living Center"
                width={475}
                height={379}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Aerial view of the Better Living Center
            </figcaption>
            <p className={styles.linkNote}>
              (View a{" "}
              <a
                href="http://www.nywf64.com/fair_air04.html"
                target="_blank"
                rel="noreferrer"
              >
                Larger Version
              </a>{" "}
              of this Photograph)
            </p>
            <p className={styles.source}>
              SOURCE: New York World&apos;s Fair Publicity Photograph presented
              courtesy Craig Bavaro collection
            </p>
          </figure>

          <p className={styles.divider}>* * *</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv07"
        explicitPrevious
        overviewHref="/betliv01"
        nextHref="/betliv09"
      />
    </>
  );
}
