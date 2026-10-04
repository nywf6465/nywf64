import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./betliv12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Four Centuries of American Masterpieces — Better Living Center — nywf64.com",
  description:
    "Four Centuries of American Masterpieces at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center — Four Centuries of American Masterpieces.
 * Body from legacy betliv12.html (custom art essay — no shared standard).
 * Legacy wording (“what what”, “ends without a portrait”) is preserved.
 *
 * Stack: hero → BetlivNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Betliv12Page() {
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

      <article className={styles.article} aria-labelledby="betliv12-title">
        <header className={styles.titleBar}>
          <h1 id="betliv12-title" className={styles.titleBarMain}>
            Four Centuries of American Masterpieces
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.lede}>
            <p>
              Easily the Better Living Center&apos;s signature exhibit of
              &quot;high culture,&quot; this third floor exhibition featured
              forty-one paintings and five works of sculpture by some of
              America&apos;s most famous artists from the 17th century to the
              present. Sponsored by Maine&apos;s Skowhegan School of Painting
              and Sculpture it represented an attempt, as the exhibit&apos;s
              guidebook noted, to show how &quot;the aspects of a changing
              America are recorded by artists whose accents and manners vary,
              but whose vision of the truth is steady.&quot; This unifying
              structure, the exhibitors argued, could be seen in works as
              diverse as an 18th century Gilbert Stuart portrait and a 20th
              century Jackson Pollock &quot;action painting.&quot;
            </p>
            <p>
              The exhibition was one of the few art exhibits and displays at
              the Fair to earn praise from the New York Times&apos; art critic,
              John Canaday. He described &quot;Four Centuries of American
              Masterpieces&quot; as &quot;closer to being a summary than you
              would think so small a show could be,&quot; and that the works
              had been &quot;selected with such discernment that this minor
              exhibition becomes a major pleasure.&quot; Canaday&apos;s lone
              complaint? The fact that in order to see the exhibition, one had
              to follow the proscribed path of seeing the &quot;entire&quot;
              Better Living Center. But even if the route hadn&apos;t been
              forced upon visitors, it still offended Canaday&apos;s sense of
              esthetics to see such an exhibit in close proximity to displays
              from Hershey Chocolate, Borden, Sunshine Biscuits and a
              nine-hole miniature golf course. &quot;They are worth seeing, but
              to get there, and out again, without suffering spiritual and
              esthetic offense on the way, is impossible.&quot; Because of the
              Fair&apos;s general surroundings, Canaday was of the opinion that
              art exhibitions in general, even good ones like &quot;Four
              Centuries,&quot; amounted to a waste of time because the proper
              way to appreciate good art would not be there.
            </p>
            <p>
              Perhaps it was out of the ordinary to see such an impressive
              display of American art in close proximity to a musical revue
              show about a cow. But in the end, that only served to demonstrate
              the very nature of what the Better Living Center was all about. A
              pavilion that represented diversity in its truest sense.
            </p>
          </div>

          <hr className={styles.rule} />

          <div className={styles.body}>
            <h2 className={styles.sectionHeading}>History in Portraits</h2>
            <p>
              Gilbert Stuart tartly maintained that &quot;no one would paint
              history who could do a portrait,&quot; but as the chief depicter
              of George Washington, he showed that to paint portraits is often
              to paint great history. Over the centuries, on a less exalted
              plane, an amazing amount of homely personal history also stuck to
              the brushes of the portrait painters, but the daguerreotype and
              the photograph in the end reduced this broad popular stream of
              American art to a trickle. The rise and decline of portraiture is
              the most striking theme of a World&apos;s Fair exhibit called
              &quot;Four Centuries of American Masterpieces&quot; and housed in
              the Better Living Center.
            </p>
            <p>
              More Doll Than Boy. The first New World painters called
              themselves artisans and drew picture signs for taverns, or coated
              fire buckets, depending on the state of business. In that stern
              and frugal age, a commission for a portrait was a plum.
              &quot;Limning&quot; a portrait meant producing a flat
              two-dimensional likeness, and what what gives tang to these works
              now is the period flavor and not any sureness of craft or
              conviction of life. Primitive, untutored and serene, the
              anonymous 1670 Portrait of Henry Gibbs is a charming example of
              the limner&apos;s style.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 327 }}>
            <span className={styles.matte} style={{ background: "#000" }}>
              <Image
                src="/images/betliv12/henry-gibbs.jpg"
                alt="Portrait of Henry Gibbs"
                width={327}
                height={417}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.artCaption}>
              <em>Portrait Of Henry Gibbs</em> (1670)
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              The floor is in perspective; little Henry is not. More girl than
              boy, more doll than either, the child seems to be floating
              through the picture, not rooted in it. Yet the boy&apos;s and the
              painting&apos;s mood of grave, graceful self-possession is
              undiminished after nearly three centuries. In time, the limners
              became the itinerant painters who criss-crossed the continent by
              foot, horseback and wagon well into the 19th century, painting
              family portraits in return for food and temporary lodging.
            </p>
            <p>
              Artists of loftier vocation expatriated themselves to study in
              England and to absorb the classic mastery of Renaissance
              portraiture. John Singleton Copley was one such, but before he
              left U.S. shores, he had already put together a masterly portrait
              gallery of some of his fellow Bostonians. His Portrait of
              Nathaniel Hard, a famed silversmith and engraver, stares back at
              the observer with a keen, curious, probing intensity that is
              uncannily lifelike. As John Adams said of Copley&apos;s
              portraits: &quot;You can scarcely help discoursing with them,
              asking questions and receiving answers.&quot;
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 278 }}>
            <span className={styles.matte} style={{ background: "#993300" }}>
              <Image
                src="/images/betliv12/nathaniel-hard.jpg"
                alt="Portrait of Nathaniel Hard"
                width={278}
                height={347}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.artCaption}>
              <em>Portrait Of Nathaniel Hard</em> (c. 1765-1770)
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              Bravado &amp; Bravery. The idea that portraits were history came
              naturally to Western Painter George Catlin. In the 1830s he
              resolved to assemble a pictorial record of the last golden years
              of the Indians freely living their own lives. He rode across
              hundreds of miles of unmapped prairie, visited 48 tribes and
              painted 600 pictures. His Indian Boy is a triumph of photographic
              realism blended with psychological insight. There is a trace of
              bravado in the boy&apos;s stance, backed by ultimate bravery in
              the clenched right fist. Around the eyes and mouth is the faint
              hint of sadness of a boy fated never to roam and rule the land of
              his father.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 277 }}>
            <span className={styles.matte} style={{ background: "#ffffcc" }}>
              <Image
                src="/images/betliv12/indian-boy.jpg"
                alt="Indian Boy"
                width={277}
                height={350}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.artCaption}>
              <em>Indian Boy</em> (1835)
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              The mask of anguish in Marsden Hartley&apos;s The Lost Felice
              hides a different sort of grief. It is a symbol of womanhood
              mourning her drowned sons. The 20th century&apos;s passion for
              abstraction makes any representational figure seem accessibly
              human, but the grieving mother in Hartley&apos;s picture
              resembles a woman only in the way that an eerie echo resembles a
              voice. The intentional distortions of the 1939 picture ironically
              complete the cycle begun with the unintentional distortions of
              the 1670 picture. Perhaps fittingly, the decline of portraiture
              ends without a portrait
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 253 }}>
            <span className={styles.matte} style={{ background: "#000" }}>
              <Image
                src="/images/betliv12/lost-felice.jpg"
                alt="Lost Felice"
                width={253}
                height={346}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.artCaption}>
              <em>Lost Felice</em> (1939)
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <span className={styles.matte} style={{ background: "#666" }}>
              <Image
                src="/images/betliv12/arabesque.jpg"
                alt="Arabesque"
                width={600}
                height={195}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.pollockCaption}>
              Jackson Pollock (1912-1956)
              <br />
              <br />
              <em>Arabesque, 1948</em>
              <br />
              Oil on canvas, 37 x 117
              <br />
              Coll. Richard Brown Baker
            </figcaption>
          </figure>

          <p className={styles.source}>
            SOURCE: Souvenir Guidebook,{" "}
            <em>Four Centuries of American Masterpieces</em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv11"
        explicitPrevious
        overviewHref="/betlivoverview"
        nextHref="/betliv13"
      />
    </>
  );
}
