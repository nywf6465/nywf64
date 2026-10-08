import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./vatican07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion Guide — Vatican — nywf64.com",
  description:
    "Official Pavilion Guide — Vatican Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

type GuideItem = {
  num: string;
  text: ReactNode;
};

type GuideSection = {
  title: string;
  intro?: string;
  items?: GuideItem[];
};

const GUIDE_SECTIONS: GuideSection[] = [
  {
    title: "A\nTHE EXTERIOR OF THE PAVILION",
    intro:
      "The exterior walls of the Pavilion are decorated with eleven large bas-reliefs from the studio of Jonynas & Shepherd.",
    items: [
      {
        num: "1.",
        text: (
          <>
            <em>The Communion of the Saints, </em>largest bas-relief
          </>
        ),
      },
      {
        num: "2.",
        text: (
          <>
            <em>The Church - Promise and Fulfillment</em>
          </>
        ),
      },
      {
        num: "3.",
        text: (
          <>
            <em>God - The Holy Trinity</em>
          </>
        ),
      },
      {
        num: "4.",
        text: (
          <>
            <em>The prophecy of the Three Kings</em>
          </>
        ),
      },
      {
        num: "5.",
        text: (
          <>
            <em>The Blessed Mother (Root of Jesus)</em>
          </>
        ),
      },
      {
        num: "6.",
        text: (
          <>
            <em>The Adoration of God</em>
          </>
        ),
      },
      {
        num: "7.",
        text: (
          <>
            <em>The Holiness of Marriage</em>
          </>
        ),
      },
      {
        num: "8.",
        text: (
          <>
            <em>The dignity of Man</em>
          </>
        ),
      },
      {
        num: "9.",
        text: (
          <>
            <em>The Holy Orders</em>
          </>
        ),
      },
      {
        num: "10.",
        text: (
          <>
            <em>The Sacrament of Baptism</em>
          </>
        ),
      },
      {
        num: "11.",
        text: (
          <>
            <em>The Holy Mass</em>
          </>
        ),
      },
      {
        num: ".",
        text: (
          <>
            <em>The Pavilion Cross, </em>The gold-domed Vatican Pavilion is
            topped by a cross of golden-anodized aluminum. It is 42&apos; high
            and three dimensional so that it is equally recognizable as a cross
            from all sides. Thin metal needles used to catch the play of light
            lend it luminosity. Its rays are of stainlees steel.
          </>
        ),
      },
    ],
  },
  {
    title: "B\nTHE LONG GALLERY",
    items: [
      {
        num: "1.",
        text: (
          <>
            <em>The Hand of God, </em>replica of a 12th century Spanish fresco.
          </>
        ),
      },
      {
        num: "2.",
        text: (
          <>
            <em>The Prophecies, </em>sculpture by Stanley Bleifeld.
          </>
        ),
      },
      {
        num: "3.",
        text: (
          <>
            <em>The Creation, </em>multi-lingual text excerpt by Emil Antonucci.
          </>
        ),
      },
      {
        num: "4.",
        text: (
          <>
            <em>The Tree of Jesse, </em>genealogy from Adam to Jesse, father of
            David, to Christ
          </>
        ),
      },
      {
        num: "5.",
        text: (
          <>
            <em>The Annunciation </em>by Doris Caeser.
          </>
        ),
      },
      {
        num: "6.",
        text: (
          <>
            <em>The Annunciation, </em>full color illumination of the renowned
            painting by Fra. Angelica.
          </>
        ),
      },
      {
        num: "7.",
        text: (
          <>
            <em>The Incarnation, </em>eleven illuminations of famous paintings
            of this subject selected and arranged by Norman La Liberte against
            the background of an old German wood-cut.
          </>
        ),
      },
      {
        num: "8.",
        text: (
          <>
            <em>The Nativity. </em>A display of creches from various parts of
            the world and other Christmas regalia such as toys, candles, angels,
            etc.
          </>
        ),
      },
      {
        num: "9.",
        text: (
          <>
            <em>John the Baptist, </em>sculpture by Kasuba.
          </>
        ),
      },
      {
        num: "10.",
        text: (
          <>
            <em>Stained Glass Triptych </em>by Duval. Used as a divider, the
            triptych resembles an entrance to a medieval Church.
          </>
        ),
      },
      {
        num: "11.",
        text: (
          <>
            <em>The Parables, </em>a representation by La Liberte.
          </>
        ),
      },
      {
        num: "12.",
        text: (
          <>
            <em>The Beatitudes, </em>a contemporary seriograph of the eight
            beatitudes by Sister Mary Corita, I.H.M.
          </>
        ),
      },
      {
        num: "13.",
        text: (
          <>
            <em>The Miracles, </em>wood -cuts in black and white and calligraphy
            by Donald Bolognase.
          </>
        ),
      },
      {
        num: "14.",
        text: (
          <>
            <em>The Crucifixion, </em>illumination of the triptych by Perugino.
          </>
        ),
      },
      {
        num: "15",
        text: (
          <>
            <em>St. John the Evangelist, </em>wood-cut, text from St. John, XIX,
            38-40.
          </>
        ),
      },
    ],
  },
  {
    title: "C\nTHE PIETA",
    items: [
      {
        num: "1.",
        text: (
          <>
            <em>Michelangelo&apos;s Pieta </em>-- Sorrowful Mother holding the
            Body of Christ at the Foot of the Cross in a setting by Jo
            Mielziner.
          </>
        ),
      },
      {
        num: "2.",
        text: (
          <>
            <em>The Moving Speed-Walks, </em>three in number at various heights
            permitting an unobstructed view.
          </>
        ),
      },
      {
        num: "3.",
        text: (
          <>
            <em>The Stationary Walk. </em>The rear or fourth and highest viewing
            walk is stationary enabling those who desire to do so to linger a
            little longer.
          </>
        ),
      },
    ],
  },
  {
    title: "D\nTHE CHURCH LOVING",
    items: [
      {
        num: "1.",
        text: (
          <>
            <em>Multiple Projection Screens. </em>Ten screens showing
            repetitively one minute full color slide films reflecting various
            aspects of Christ&apos;s love and the Church as an instrument
            thereof.
          </>
        ),
      },
      {
        num: "2.",
        text: (
          <>
            <em>The Children&apos;s Exhibit. </em>The part of the Pavilion
            Exhibit emphasizing Christ&apos;s love for children.
          </>
        ),
      },
      {
        num: "3.",
        text: (
          <>
            <em>The Wall of Information. </em>Presenting historical facts and
            statistics relating to the work of the Church.
          </>
        ),
      },
    ],
  },
  {
    title: "E\nTHE CHURCH SANCTIFYING",
    items: [
      {
        num: "1.",
        text: (
          <>
            Stairway leading to the rotunda of the Pavilion containing the lovely
            Chapel of the Good Shepherd. Tp the left front of the Chapel as one
            faces the altar is the niche which contains the 3rd Century statue
            of Christ, the Good Shepherd.
          </>
        ),
      },
      {
        num: "2.",
        text: (
          <>
            <em>The Liturgical Banners. </em>Forty-four two-sided banners
            portraying the Dominical and Temporal Cycles of the liturgical year.
          </>
        ),
      },
      {
        num: "3.",
        text: (
          <>
            <em>St. Patrick&apos;s Cathedral. </em>The Church of the Fair in
            bas-relief and text from St. Patrick.
          </>
        ),
      },
      {
        num: "4.",
        text: (
          <>
            <em>St. Peter&apos;s Basilica. </em>The Mother Church of Christendom
            in bas-relief with text from St. Peter.
          </>
        ),
      },
      {
        num: "5.",
        text: (
          <>
            <em>The Shrine of the Immaculate Conception. </em>Bas-relief of
            America&apos;s national Shrine Church in Washington.
          </>
        ),
      },
      {
        num: "6.",
        text: (
          <>
            <em>Catholic Information Center. </em>Portable kiosk manned daily to
            answer questions about the Catholic faith.
          </>
        ),
      },
    ],
  },
  {
    title: "F\nTHE CHURCH TEACHING",
    items: [
      {
        num: "1.",
        text: (
          <>
            <em>The Replica of the Tomb of St. Peter, </em>constructed in Rome
            under the supervision of the appropriate Vatican authorities.
          </>
        ),
      },
      {
        num: "2.",
        text: (
          <>
            <em>Doctors of the Church. </em>Thirty of the Doctors of the Church
            and quotations from their teachings are shown on four panels.
          </>
        ),
      },
      {
        num: "3.",
        text: (
          <>
            <em>The Second Ecumenical Council. </em>Full color photomural of the
            Council in Session with a planisphere in front showing the number
            of Bishops in attendance and by polar projection, the areas from
            which they come.
          </>
        ),
      },
      {
        num: "4.",
        text: (
          <>
            <em>Mosaic-like wall Medallions </em>of Pope John XXIII and Paul VI
            with an accompanying quotation from the teachings of each Pope.
          </>
        ),
      },
      {
        num: "5.",
        text: (
          <>
            <em>The Capitals of the Centuries. </em>Twenty pillars rim the center
            area each surmounted by an example of the architectural style of a
            century of Christianity.
          </>
        ),
      },
      {
        num: "6.",
        text: (
          <>
            <em>Biblical Writings and Sacred Scriptures. </em>An interesting and
            informative collection of same.
          </>
        ),
      },
      {
        num: "7.",
        text: (
          <>
            <em>Quotations from Encyclicals of Pope John XXIII. </em>Apostle of
            Peace and Unity.
          </>
        ),
      },
      {
        num: "8.",
        text: (
          <>
            <em>Christ Teaching the Apostles, </em>a plaster bas-relief taken from
            the 4th Century sarcophagus in the Church of St. Ambrose in Milan.
          </>
        ),
      },
    ],
  },
  {
    title: "G\nTHE SISTINE AREA",
    items: [
      {
        num: "1.",
        text: (
          <>
            <em>Illumination of Michelangelo&apos;s &quot;Last Judgment&quot; </em>
            and the magnificent <em>Sistine Chapel Ceiling </em>loaned to the
            Exhibit by Time and Life.
          </>
        ),
      },
      {
        num: "2.",
        text: (
          <>
            <em>Coins and Medals. </em>Vatican coins and medals and a collection
            of medals of the Presidents of the United States.
          </>
        ),
      },
      {
        num: "3.",
        text: (
          <>
            <em>Vatican Stamp Display </em>including a collection of postage
            stamps commemorating the religions of the world.
          </>
        ),
      },
      {
        num: "4.",
        text: (
          <>
            <em>Living Newspaper. </em>A weekly presentation of Catholic news.
          </>
        ),
      },
      {
        num: "5.",
        text: (
          <>
            <em>The Living Church. </em>Spirituality in the modern world.
          </>
        ),
      },
      {
        num: "6.",
        text: (
          <>
            <em>The Carousels. </em>Seven illuminated slide carousels depicting
            pertinent subjects relating to the Church and the Catholic religion.
          </>
        ),
      },
      {
        num: "7.",
        text: (
          <>
            <em>Selected Film Presentations. </em>&quot;The Theme of the
            Vatican Pavilion,&quot; and other pre-programmed film presentations
            on the work of the Church.
          </>
        ),
      },
      {
        num: "8.",
        text: (
          <>
            <em>
              Objects of Art from St. John&apos;s Abbey, Collegeville,
              Minnesota and from other sources.
            </em>
          </>
        ),
      },
    ],
  },
  { title: "H\nThe Pavilion Shop" },
  { title: "J\nRest Rooms" },
  { title: "K\nRefreshment Areas" },
];

function GuideSectionBlock({ section }: { section: GuideSection }) {
  const titleLines = section.title.split("\n");
  return (
    <section className={styles.guideSection}>
      <h2 className={styles.sectionTitle}>
        {titleLines[0]}
        {titleLines[1] ? (
          <>
            <br />
            {titleLines[1]}
          </>
        ) : null}
      </h2>
      {section.intro ? <p>{section.intro}</p> : null}
      {section.items ? (
        <ul className={styles.guideList}>
          {section.items.map((item) => (
            <li key={`${section.title}-${item.num}`}>
              <span className={styles.guideNum}>{item.num}</span>
              <span className={styles.guideText}>{item.text}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default function Vatican07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Vatican Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/vaticanoverview/hero-banner.jpg"
            alt="Vatican Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VaticanNavChrome />

      <article className={styles.article} aria-labelledby="vatican07-title">
        <header className={styles.titleBar}>
          <h1 id="vatican07-title" className={styles.titleBarMain}>
            Pavilion Guide
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.floorPlan}>
            <Image
              src="/images/vatican07/vat25.jpg"
              alt="Floorplan"
              width={580}
              height={308}
              unoptimized
            />
          </figure>

          {GUIDE_SECTIONS.map((section) => (
            <GuideSectionBlock key={section.title} section={section} />
          ))}

          <hr className={styles.rule} />

          <div className={styles.basReliefTray}>
            <p className={styles.basReliefCaption}>
              <em>Exterior Bas-relief sculptures </em>
              <span style={{ fontSize: "0.75rem" }}>(A1 - A11 as listed above)</span>
            </p>
            <Image
              src="/images/vatican07/vat26.jpg"
              alt="Bas-relief"
              width={180}
              height={221}
              unoptimized
            />
            <Image
              src="/images/vatican07/vat27.jpg"
              alt="Bas-relief"
              width={580}
              height={119}
              unoptimized
            />
          </div>

          <figure className={styles.crossFigure}>
            <Image
              src="/images/vatican07/vat28.jpg"
              alt="Golden Cross atop Pavilion"
              width={191}
              height={400}
              unoptimized
            />
            <figcaption className={styles.crossCaption}>
              The golden-anodized aluminum Cross which tops the dome of the
              Pavilion
            </figcaption>
          </figure>

          <p className={styles.source}>
            Source: <em>Official Guide Book VATICAN PAVILION</em> New York
            World&apos;s Fair 1964-1965
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/vatican06"
        overviewHref="/vaticanoverview"
        nextHref="/vatican08"
      />
    </>
  );
}
