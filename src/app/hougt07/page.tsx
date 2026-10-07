import type { Metadata } from "next";
import Image from "next/image";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hougt07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Introduction to the House of Good Taste — nywf64.com",
  description:
    "Bradd Schiffman’s introduction to The House of Good Taste — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy hougt07.html. Legacy footnotes and typos preserved. */
export default function Hougt07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="House of Good Taste">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hougtoverview/hero-banner.jpg"
            alt="House of Good Taste at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HougtNavChrome />

      <article className={styles.article} aria-labelledby="hougt07-title">
        <header className={styles.titleBar}>
          <h1 id="hougt07-title" className={styles.titleBarMain}>
            Introduction to The House of Good Taste
          </h1>
        </header>

        <div className={`${styles.articleInner} ${styles.wideInner}`}>
          <figure className={styles.figure}>
            <Image
              src="/images/hougt07/hougt02.jpg"
              alt="Artist's Rendering"
              width={560}
              height={224}
              className={styles.figureArt}
              unoptimized
            />
            <figcaption className={styles.figureCaption}>
              <p className={styles.source}>
                SOURCE: Artist&apos;s Rendering, NY World&apos;s Fair{" "}
                <em>Progress Report #8</em>
              </p>
            </figcaption>
          </figure>

          <p className={styles.byline}>by Bradd Schiffman</p>

          <div className={styles.body}>
            <p>
              The idea<sup>1</sup> for &quot;The House of Good Taste&quot; is said
              to have originated with Lady Malcolm Douglas-Hamilton, a
              well-connected socialite, who mentioned it to Thomas Deegan when
              seated next to him at a dinner in Greenwich, Connecticut. She felt
              that a house should be exhibited that contained traditional
              furniture that could be bought anywhere in the country. Deegan
              (Moses&apos; public relations man) invited Lady Hamilton to be in
              charge of the design, and gave her a two acre tract just inside the
              main entrance to the Fair. He also is credited with coining the
              name, &quot;The House of Good Taste.&quot;
            </p>
            <p>
              Hamilton put together the &quot;American Institute of Approval,&quot;
              drawn from socially prominent advisors described as &quot;deeply
              interested in good taste.&quot; When financial backers and
              decorators lobbied for the inclusion of more than just a traditional
              house, Lady Hamilton balked, saying &quot;My whole concept had been
              a demonstration of middle-income, middle-of-the-road, traditional
              American good taste. Imitation modern can be pretentious, cheap
              looking, and in bad taste. The &apos;best&apos; modern, or even
              just good &apos;modern&apos;, is extremely expensive and only for
              the very rich.&quot; <sup>2</sup>
            </p>
            <p>
              She was right of course. But in the end, The House of Good Taste
              became &quot;a three-separate-home show case for products from
              construction materials to cars. Architecture will be traditional,
              transitional and modern. The homes will demonstrate that attractive
              home living is within reach of all Americans.&quot; <sup>3</sup>
            </p>
            <p>
              &quot;Within reach of all Americans&quot; appears to have been
              somewhat relative. Nevertheless, there was some stunning
              mid-20th century residential architecture and design on display
              here, in what the <em>Official Guide</em> describes as:
            </p>
            <blockquote className={styles.blockquote}>
              <p>
                <em>
                  Three houses - traditional, contemporary and modern - fully
                  furnished and provisioned down to liqueurs on the coffee table,
                  ... on exhibition in this homemaker&apos;s center. The
                  buildings are sponsored not by one exhibitor but by scores of
                  building, decorating and housewares companies. Their aim is to
                  provide visitors with a yardstick of home building and
                  decorating standards.<sup>4</sup>
                </em>
              </p>
            </blockquote>
            <p>
              It was perhaps just this type of &quot;multi-exhibitor&quot; pavilion
              that led some critics to argue that the Fair was nothing more than
              a giant trade show in disguise. Indeed, not only was The House of
              Good Taste privately billed in the October 29, 1963 issue of{" "}
              <em>Fair News</em> as designed &quot;to serve as showcase and
              marketing vehicle for new products in home equipment and
              accessories&quot; but (to add insult to injury) ended up charging
              50 cents admission. (Other &quot;multi-exhibitor&quot; buildings
              included Transportation and Travel, the Better Living Center, and
              the Pavilion of American Interiors.) Far from detracting from the
              Fair however, these installations can be seen as providing insight
              into just how significant the efforts behind the giant
              corporations&apos; pavilions really were.
            </p>
            <p>
              Leaving aside questions of appropriate versus inappropriate self
              promotion, what exactly distinguished &quot;traditional&quot;,
              &quot;contemporary&quot; and &quot;modern&quot; homes? The{" "}
              <em>Official Guide</em> described them as:
            </p>
            <blockquote className={styles.blockquote}>
              <p>
                <strong>
                  <em>Traditional House</em>
                </strong>
                <em>
                  . This house of white plastic clapboard, with terrace and
                  swimming pool, is an adaptation of a rambling New England
                  farmhouse. It has three bedrooms and displays such features as a
                  party room with indoor barbecue fireplace and kitchen with a
                  sewing nook.
                </em>
              </p>
              <p>
                <strong>
                  <em>Contemporary House</em>
                </strong>
                <em>
                  . Sliding-glass walls and a living room skylight make this a
                  house of light and space. Furnishings are both antique and
                  contemporary, there is a separate family room, and in the
                  garage are a Finnish steam bath and dressing room. Most of the
                  rooms open onto sundecks, and the grounds have no fewer than
                  three pools, as well as a summer house.
                </em>
              </p>
              <p>
                <strong>
                  <em>Modern House</em>
                </strong>
                <em>
                  . Edward Durell Stone&apos;s &quot;inward looking&quot; house
                  was designed for the suburban lot, with the house enclosing the
                  grounds to ensure privacy. A patio is in each corner, and a
                  garden is in the center under a glass dome. The 36-foot-long
                  living room is hung with modern American paintings on loan from
                  museums, galleries and artists.<sup>5</sup>
                </em>
              </p>
            </blockquote>
            <p>
              What, then, was the difference between modern and contemporary
              architecture?
            </p>
            <p>
              Historically, <strong>Modern </strong>architecture
            </p>
            <blockquote className={styles.blockquote}>
              <p>
                <em>
                  &quot;arose out of the rejection of revivals, classicism,
                  eclecticism, and indeed all adaptations of past styles to the
                  building types of industrializing late 19th- and 20th-century
                  society. It also arose out of efforts to create architectural
                  forms and styles that would utilize and reflect the newly
                  available building technologies of structural iron and steel,
                  reinforced concrete, and glass. Until the spread of
                  Postmodernism, modern architecture also implied the rejection
                  of the applied ornament and decoration characteristic of
                  premodern Western buildings. The thrust of modern architecture
                  has been a rigorous concentration on buildings whose rhythmical
                  arrangement of masses and shapes states a geometric theme in
                  light and shade.&quot;
                  <sup>6</sup>
                </em>
              </p>
            </blockquote>
            <p>
              <strong>Contemporary </strong>homes, on the other hand, were those
              recognizable
            </p>
            <blockquote className={styles.blockquote}>
              <p>
                <em>
                  &quot;by their odd-sized and often tall windows, their lack of
                  ornamentation, and their unusual mixtures of wall
                  materials--stone, brick, and wood, for instance. Architects
                  designed Contemporary-style homes (in the Modern family) between
                  1950 and 1970, and created two versions: the flat-roof and
                  gabled types. The latter is often characterized by exposed
                  beams. Both breeds tend to be one-story tall and were designed
                  to incorporate the surrounding landscape into their overall
                  look.&quot;
                  <sup>7</sup>
                </em>
              </p>
            </blockquote>
            <p>
              Each of the three Houses of Good Taste appeared to be an outstanding
              example of its style. Given the architects involved, it could hardly
              have turned out otherwise.
            </p>

            {[
              {
                src: "hougt63.jpg",
                w: 385,
                h: 140,
                alt: "Artist's Rendering - Modern",
                title: "MODERN HOUSE",
                by: "By Edward Durell Stone",
                blurb:
                  "This model home achieves complete privacy even when located in the most densely populated suburb. A family area with a unique 22' glass dome is the center of this design.",
              },
              {
                src: "hougt64.jpg",
                w: 385,
                h: 167,
                alt: "Artist's Rendering - Traditional",
                title: "TRADITIONAL HOUSE",
                by: "By Royal Barry Wills Assoc.",
                blurb:
                  "Offering a traditional Early American appearance, the house boasts an attractive floor plan with well designed rooms.",
              },
              {
                src: "hougt65.jpg",
                w: 385,
                h: 184,
                alt: "Artist's Rendering - Contemporary",
                title: "CONTEMPORARY HOUSE",
                by: "By Jack Pickens Coble",
                blurb:
                  "Here the indoors and outdoors are brought together for informal living. The unusual roof lines and grouping of living areas attract much attention.",
              },
            ].map((house) => (
              <figure key={house.src} className={styles.figure}>
                <Image
                  src={`/images/hougt07/${house.src}`}
                  alt={house.alt}
                  width={house.w}
                  height={house.h}
                  className={styles.figureArt}
                  unoptimized
                />
                <figcaption className={styles.figureCaption}>
                  <p>
                    <strong>{house.title}</strong>
                  </p>
                  <p>{house.by}</p>
                  <p className={styles.small}>{house.blurb}</p>
                  <p className={styles.source}>
                    SOURCE: Brochure,{" "}
                    <em>Black &amp; Decker Power Tools Shown at the HGT</em>
                  </p>
                </figcaption>
              </figure>
            ))}

            <dl className={styles.footnotes}>
              <dt>SOURCES (unless otherwise indicated):</dt>
              <dd>
                <sup>1</sup>
                <em>Remembering the Future</em>, chapter 4,&quot;The
                &apos;Laisez-Fair&apos;, Good Taste, and Money trees: Architecture
                at the Fair&quot;,by Rosemarie Haag Bletter, pp.128-29, Rizzoli
                International Publications Inc., New York, 1989.
              </dd>
              <dd>
                <sup>2</sup> Ibid, p.129.
              </dd>
              <dd>
                <sup>3</sup>NY World&apos;s Fair Progress Report Number 8, April
                22, 1963, p. 24.
              </dd>
              <dd>
                <sup>4</sup>
                <em>Official Guide New York World&apos;s Fair 1964/1965</em>, 1964
                edition, p.64, Time Incorporated, New York.
              </dd>
              <dd>
                <sup>5</sup>Ibid.
              </dd>
              <dd>
                <sup>6</sup> &quot;Modern Art.&quot; Encyclopædia Britannica.
                2004. Encyclopædia Britannica Premium Service. 2 Sept. 2004
                &lt;http://www.britannica.com/eb/article?eu=54471&gt;.
              </dd>
              <dd>
                <sup>7</sup> www.realtor.org
              </dd>
            </dl>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/hougt06"
        overviewHref="/hougtoverview"
        nextHref="/hougt08"
      />
    </>
  );
}
