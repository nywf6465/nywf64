import type { Metadata } from "next";
import Image from "next/image";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/undrghomeLegacy.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Underground World Home — Bill Cotter — Underground World Home — nywf64.com",
  description:
    "Bill Cotter’s essay on the Underground World Home at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home — essay by Bill Cotter.
 * Body from legacy undrghome05.html.
 */
export default function Undrghome05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Underground World Home">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/undrghomeoverview/hero-banner.jpg"
            alt="Underground World Home at the 1964/1965 New York World’s Fair"
            width={2073}
            height={758}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UndrghomeNavChrome />

      <article className={styles.article} aria-labelledby="undrghome05-title">
        <header className={styles.titleBar}>
          <h1 id="undrghome05-title" className={styles.titleBarMain}>
            <em>The Underground World Home </em>
          </h1>
          <p className={styles.titleBarByline}>... an essay by Bill Cotter</p>
        </header>

        <div className={`${styles.articleInner} ${styles.bodyArial}`}>
          <p>
            In many ways, the 1964-65 New York World&apos;s Fair was a collection
            of architectural wonders. Everywhere you looked there was some
            strange new shape to attract the eyes — the immense size of the
            Unisphere, perhaps, or the arching wall at General Motors, the
            moonscape roof at Kodak or the cantilevered Bell System pavilion. Of
            all of the unusual structures at the Fair, however, maybe none was
            stranger than an exhibit marked by several bland little buildings.
            Located just across the Avenue of the United Nations from the United
            States Space Park and the Hall of Science, these buildings marked
            the entrance to an exhibit that was truly one of a kind.
          </p>

          <figure className={styles.figureCenter} style={{ maxWidth: "18.75rem" }}>
            <Image
              src="/images/undrghome05/uwh03.jpg"
              alt="Underground Home Fountain"
              width={300}
              height={289}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              A small garden and fountain upstairs gave no hint of what was
              hidden three feet below.
            </figcaption>
            <p className={styles.sourceNarrow}>
              SOURCE: All photographs, Courtesy Bill Cotter Collection unless
              otherwise noted
            </p>
          </figure>

          <p>
            This was the Underground World Home. As the name implies, it was
            truly underground, making it one of the least seen exhibits at the
            Fair. Not only couldn&apos;t you see it just by walking by, but there
            was an admission charge to tour the home and it couldn&apos;t handle
            large crowds. As a result, most Fair visitors just passed it by
            without a second thought. If they had taken the time to go
            downstairs for a look, they would have found a complete home,
            furnished and ready for occupants.
          </p>

          <p>
            How this house buried in the Earth came to be has its beginnings in
            the nervousness and paranoia of the Cold War. In the late 1950s, the
            city of Plainview, Texas asked for bids on a prototype bomb shelter,
            intending to develop an affordable way for its citizens to survive
            a nuclear blast. The contract was won by Jay Swayze, a local builder,
            who went on to construct an austere 6 foot x 8 foot bunker designed
            to house six inhabitants until it was safe to return to the surface.
          </p>

          <p>
            Swayze later said that he was intrigued by the possibilities
            afforded by subterranean housing, but that he was convinced people
            would only move underground if they could live in relative comfort
            and style. He tested his theory in grand style by building a new home
            for his family — one far larger than the 48 square foot bomb
            shelter. When completed, his new home, also in (or more accurately,
            under) Plainview, was 2,800 square feet in size. Swayze moved his
            wife and two daughters into the 10 room house, then set out with his
            brother Kenneth to convince the rest of the world that they wanted
            to live under three feet of dirt.
          </p>

          <p>
            As can be imagined, this was a tough sell and the hoped for flood of
            orders failed to materialize. The high cost of underground construction
            limited sales to wealthy individuals such as Jerry Henderson, the
            founder of Avon Cosmetics, who commissioned homes outside Boulder,
            Colorado and Las Vegas. Undaunted at the overall lack of success,
            Swayze theorized that if he could only show people the merits of his
            concept they would order enough houses to lower the overall
            construction costs.
          </p>

          <p>
            Like many other entrepreneurs, Swayze looked at the Fair as an
            opportunity to showcase his brainchild to the millions of expected
            visitors who would soon be flooding through Flushing Meadows. After
            securing the financing from Jerry Henderson, he successfully built
            his Underground World Home. While the living area in this version was
            smaller than his home back in Texas, the overall project was larger,
            for it had bigger underground &quot;gardens&quot; and a terrace. The
            Fair version also incorporated several design improvements, including
            pier and beam construction and wood floors. For fun, Swayze included
            an organ, an idea he freely noted he had borrowed from Carlsbad
            Caverns.
          </p>

          <p>
            The Underground World Home was built exactly like the homes Swayze was
            hoping to sell, with a concrete shell enclosing a 5,600 square foot
            area. The roof and floor was 10&quot; thick, with 13&quot; walls. A
            particular construction challenge was the marshy soil at the Flushing
            Meadow site, for it required additional waterproofing protection and
            bracing. In fact, the souvenir book available at the Fair described
            the site as &quot;a Long Island swamp!&quot;
          </p>

          <p>
            What did visitors to the Underground Home see? Before descending
            into the home itself there was a display about the construction
            techniques used and the benefits of living underground. Then it was
            downstairs, where tour guides took visitors for a tour of the
            three-bedroom home. After looking around at the house and terrace,
            visitors then climbed back upstairs where they could buy a booklet
            with more information on how they could arrange for their own
            subterranean chalet.
          </p>

          <figure className={styles.figureCenter} style={{ maxWidth: "18.75rem" }}>
            <Image
              src="/images/undrghome05/uwh04.jpg"
              alt="Underground Trees"
              width={300}
              height={288}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              A combination of fake and real plants helped create the illusion
              that you were still above ground.
            </figcaption>
          </figure>

          <p>
            Was the Fair successful in promoting Swayze&apos;s vision? It&apos;s
            hard to say, for stated attendance numbers are misleading. The 1965
            version of the booklet sold at the Fair states that 516,000 visitors
            toured the exhibit the prior year, yet after the Fair Swayze claimed
            that more than 1,600,000 people had visited the Underground Home. It
            certainly is unlikely that more than a million people toured the home
            in the second season. In any event, the downturn of fears about
            nuclear war led to less interest in the concept, and Swayze
            eventually sold his Plainview home and moved to Hereford, Texas.
            There he and his brother formed Geobuilding Systems, which was
            intended to revive awareness of underground homes. In 1980 Jay Swayze
            wrote a book extolling the virtues of buried housing, but he only
            mentioned the Fair in passing. Recent searches on the Internet
            failed to turn up further news of Swayze or Geobuilding Systems.
          </p>

          <figure className={styles.figureCenter} style={{ maxWidth: "18.75rem" }}>
            <Image
              src="/images/undrghome05/uwh02.jpg"
              alt="Language Panel"
              width={300}
              height={476}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              Tours of the Underground World Home were available in an astonishing
              15 different languages.
            </figcaption>
            <p className={styles.sourceNarrow}>
              SOURCE: Photo <em>United Airlines Presents Slide Show </em>
              courtesy Bradd Schiffman Collection
            </p>
          </figure>

          <p>
            Finally, what became of the Underground World Home when the Fair
            closed? Was it destroyed or just left in place, sitting silently
            awaiting for someone to unearth it again? So far, no definitive word
            has been found as to what happened after the end of the Fair.
            Considering the cost that would have been incurred to rip a structure
            of this size out of the ground, and the lack of any real motivation
            to do so, it&apos;s highly likely that the exhibitors simply pulled
            down the surface structures, emptied out the contents of the house
            and headed back home. If this was the case the building is probably
            flooded, but it could be a World&apos;s Fair legacy yet to be seen
            again.
          </p>

          <p>
            Swayze&apos;s book, by the way, is titled &quot;Underground Gardens
            and Homes: The Best of Two Worlds, Above and Below&quot;. It can be
            found in many large libraries and occasionally at used book stores.
          </p>

          <hr className={styles.essayDivider} />

          <figure className={styles.figureCenter} style={{ maxWidth: "23.75rem" }}>
            <Image
              src="/images/undrghome05/undgrho01.jpg"
              alt="Underground Home"
              width={380}
              height={204}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.essayClosingCaption}>
              <strong>What more</strong> could you ask for in this patio of the
              Underground Home -- real sunlight? Too hot! This year even the
              blooms on the ceiling are real. Home can be built for anyone. Plans
              are available.
            </figcaption>
            <p className={styles.sourceNarrowLeft}>
              Source News Colorfotos by Edmund Peters, Richard Lewis and Patrick
              Carrol, <em>New York Sunday News</em>, May 30, 1965
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/undrghome04"
        explicitPrevious
        overviewHref="/undrghomeoverview"
        nextHref="/undrghome06"
      />
    </>
  );
}
