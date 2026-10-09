import type { Metadata } from "next";
import Image from "next/image";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./schcen06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Schaefer — nywf64.com",
  description:
    "Groundbreaking ceremony remarks for Schaefer Center at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center — Pamphlet: Groundbreaking.
 * Body from legacy schcen06.html.
 *
 * Stack: hero → SchcenNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Schcen06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Schaefer Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/schcenoverview/hero-banner.jpg"
            alt="Schaefer Center at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SchcenNavChrome />

      <article className={styles.article} aria-labelledby="schcen06-title">
        <header className={styles.titleBar}>
          <h1 id="schcen06-title" className={styles.titleBarMain}>
            Pamphlet: Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/schcen06/schcen05.jpg"
                alt="Cover"
                width={600}
                height={386}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.photoCaption}>
              Schaefer Center at the New York World&apos;s Fair will consist of
              two domed buildings, housing a restaurant and an exhibition hall,
              and an old-fashioned beer garden. Architects are Eggers and
              Higgins and Walter Dorwin Teague Associates are the designers.
            </figcaption>
            <p className={styles.source}>
              SOURCE: Groundbreaking Brochure, The Schaefer Center
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              Excerpts from transcription of remarks made by Schaefer and
              World&apos;s Fair officials at the groundbreaking ceremonies for
              Schaefer Center, New York World&apos;s Fair, Thursday, April 25,
              1963.
            </p>
            <p>
              WILLIAM BERNS [Vice President, Communications and Public
              Relations]: Members of the press, this is a happy occasion for us.
              Almost from the very outset we knew there was going to be fun at
              the Fair because Schaefer announced its participation early. Just
              the mention of the name is enough to indicate fun, because it is a
              familiar name. With the name goes a great deal of tradition: the
              300th anniversary of the City of New York and the 122nd anniversary
              of the Schaefer Brewing Company. All of us at the Press Building
              know that there&apos;s going to be a great deal of activity
              connected with the fun in this building. We are delighted that
              Eggers and Higgins, an enthusiastic group, are architects and
              designers of the building. Incidentally, Eggers and Higgins also
              were architects for this Press Building. Designers for the
              interior of the Schaefer Center are Walter Dorwin Teague
              Associates, and George A. Fuller Company is in charge of
              construction.
            </p>
            <p>
              I think most of us are familiar with the head of the Schaefer
              Company. He is known, among other things, for his great interest
              in sports activities, and consequently we feel that his interest
              will also be evident when the sporting events are held in
              connection with the U.S. Olympic Trials in New York City next year.
              We are delighted to present the chairman and president of The F.
              &amp; M. Schaefer Brewing Company, Mr. Rudie Schaefer.
            </p>

            <div className={styles.split}>
              <figure className={styles.splitFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/schcen06/schcen06.jpg"
                    alt="Groundbreaking Then and Now"
                    width={300}
                    height={227}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.photoCaption}>
                  THEN AND NOW - R.J. Schaefer, president of The F. &amp; M.
                  Schaefer Brewing Co. watches as Robert Moses (seated),
                  president of the 1964-1965 New York World&apos;s Fair, breaks
                  ground for the Schaefer Center (photo right). Twenty-four
                  years ago (left), R. J. Schaefer (standing), and 1939-1940
                  World&apos;s Fair President Grover Whalen, performed the same
                  ceremony.
                </figcaption>
              </figure>
              <div className={styles.splitText}>
                <p>
                  MR. RUDIE SCHAEFER: Thank you. Mr. Moses, distinguished guests
                  and friends. I am pleased to welcome all of you who have taken
                  time to join us in the brief groundbreaking ceremony for the
                  Schaefer Center, II. I say the second, because I can recall
                  quite vividly a moment very similar to this in 1938, when I
                  had the pleasure of breaking ground for the first Center, with
                  the help of the late Grover Whalen, president of the
                  World&apos;s Fair at that time.
                </p>
                <p>
                  While faces and themes change with the passing of twenty-four
                  years, the enthusiasm and expectations that accompany such a
                  time and occasion are very much the same. As I look around
                  today, I see the same panorama of activity, hear the same
                  sounds of construction, and sense the same excitement of things
                  to come. The equipment is modern and a little different, but it
                  is still manned and operated by the same able and wonderful men
                  who have always taken such great pride in their accomplishments.
                </p>
              </div>
            </div>

            <p>
              I said at our site twenty-four years ago that I was thrilled by the
              anticipation of what lay ahead, and extremely proud of our
              participation. Today, my anticipation and my pride are even more
              abundant, more so because I know now what lies ahead: the
              magnificent structures that will soon blossom up all around us, the
              thrill of opening day, the millions of visitors from all over the
              world parading through the streets and exhibits, the spectacular
              displays and the education, the entertainment, the excellent food
              and, of course, the good beer.
            </p>
            <p>
              Standing here, I can also recall the many predictions that so many
              of us made concerning the great prospects for the 1939-1940
              World&apos;s Fair. As optimistic as I was at that time, I
              don&apos;t think anyone could ever have evaluated the success of
              that Fair beforehand, a success that was not necessarily measured
              by the number of people who passed through the gates, or even by
              the number of glasses of beer that were consumed. A success that
              was measured intangibly -- measured by the efforts of the masses of
              people who presented exciting ideas, and measured by the
              considerable amount of good will that was created.
            </p>
            <p>
              Observing and hearing about the wonderful project now under way, I
              sincerely believe that the World&apos;s Fair of 1964-1965 will
              present to its millions of visitors some of the most memorable
              moments of their lives. We at Schaefer hope, intend and plan to be
              a part of this memory, just as we were back in 1939.
            </p>
            <p>
              Even today, old friends of mine still recall our big 122-foot bar,
              and our Court of Fame, where many of the well-known personalities
              of the stage left their imprints in cement. For 1964, we plan to
              blend some of this atmosphere of the past with new concepts in
              structure and design. We will use plastic and Fiberglas combined
              with steel, wood, aluminum and glass. The unusual feature of
              floating roofs and the modern techniques of lighting will be among
              the more notable new concepts. These will be combined with a
              Restaurant of Tomorrow, featuring the finest in food and drink, an
              old-fashioned outdoor beer garden, and displays which will trace
              the 122-year-old history and growth in this country of
              America&apos;s oldest lager beer.
            </p>
            <p>
              I am quite naturally excited about our plans, and consequently a
              little eager to get things rolling. One final thought though, about
              the role Schaefer will play in this Fair: we feel that we have a
              significant contribution to make to the theme of Peace through
              Understanding, and we intend to do so by providing the Fair guests
              with the real spark of friendship -- a glass of wonderful beer. I
              thank you, and I join you in all of the basic hopes and prayers for
              the future of mankind in which this Fair can play such a very
              important part. Thank you.
            </p>

            <div className={styles.split}>
              <div className={styles.splitText}>
                <p>
                  ROBERT MOSES: Mr. Berns, Mr. Schaefer and friends. I was
                  delighted with the picture that Rudie showed me of Grover
                  Whalen at the Schaefer groundbreaking for the 1939 Fair.
                </p>
                <p>
                  When we were starting work here at the Fair, I was talking to
                  one of our friends about the theme -- the symbol, and we got
                  down to what it really is that unites the world -- the cement,
                  the thing that holds the world together, the thing that brings
                  people into brotherhood and friendly relations. We concluded
                  that probably it was beer; that was the one thing that brought
                  all people together. I really mean that. I think there&apos;s
                  a lot in it and I hope the frothing rivers of beer will flow
                  as the result of this exhibit.
                </p>
                <p>
                  Real talent, enthusiasm, skill and ingenuity have gone into
                  this design. I like the idea of fun; I like the idea of the
                  Beer Garden; I like the idea of entertainment. And I think
                  these will carry a better message than if you just had a
                  bottling plant and nothing else.
                </p>
              </div>
              <figure className={styles.splitFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/schcen06/schcen07.jpg"
                    alt="Moses presents Medal"
                    width={300}
                    height={320}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.photoCaption}>
                  Robert Moses, Fair president, presents the World&apos;s Fair
                  medal to R. J. Schaefer, president of the F. &amp; M. Schaefer
                  Brewing Co. Beside them is a model of the Schaefer Center.
                </figcaption>
              </figure>
            </div>

            <p>
              We are delighted to have this company here, and to have Rudie back
              again.
            </p>
            <p>
              The difference in cost between a show and exhibit for the 1939
              Fair and one for this Fair is not the only thing that you have to
              think about. The fact of the matter is, these shows that we are
              getting here -- these pavilions and exhibits -- are on a totally
              different scale. They represent much more ingenuity than those of
              the 1939 Fair.
            </p>
            <p>
              The difference between the General Motors Futurama in 1939 and the
              Futurama of General Motors today is not measured by the difference
              between eight million dollars and the forty-plus million dollars
              which they&apos;ve gone into. It&apos;s on a much more impressive
              basis, and it&apos;s designed for many more people to see.
            </p>
            <p>
              Well again, thank you, and Rudie, we&apos;ll be here to take the
              froth off the first glass of beer.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/schcen05"
        explicitPrevious
        overviewHref="/schcenoverview"
        nextHref="/schcen07"
      />
    </>
  );
}
