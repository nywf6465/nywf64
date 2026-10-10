import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building21.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Last of the Big World's Fairs — Building the Fair — nywf64.com",
  description:
    "The Last of the Big World's Fairs — Neal Ashby in Parade Magazine, from Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — The Last of the Big World's Fairs.
 * Body from legacy building22.html (mapped to /building21 as Page 21 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building21Page() {
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

      <article className={styles.article} aria-labelledby="building21-title">
        <header className={styles.titleBar}>
          <h1
            id="building21-title"
            className={`${styles.titleBarMain} ${styles.titleItalic}`}
          >
            The Last of the Big World&apos;s Fairs
          </h1>
        </header>

        <div className={styles.articleInner}>
          <header className={styles.masthead}>
            <p className={styles.mastheadTitle}>
              &quot;THE LAST OF THE BIG WORLD&apos;S FAIRS&quot;
            </p>
            <p className={styles.mastheadAuthor}>NEAL&nbsp;ASHBY</p>
            <p className={styles.mastheadFrom}>
              from: <em>Parade</em> Magazine, February 23, 1964
            </p>
          </header>

          <div className={styles.closing}>
            <p>
              <span className={styles.dropCap} aria-hidden="true">
                I
              </span>
              f you&apos;re among the 70 million Americans who will attend the
              1964-5 World&apos;s Fair, take a good look around. Its global wares
              and wonders go on view at New York City&apos;s Flushing Meadow Park
              next&nbsp;April 22. There will be an implausible array of
              futuristic structures sheltering exhibitions of the earth&apos;s
              most dynamic skills, thrilling talents and irreplaceable treasures
              of painting and sculpture.
            </p>
            <p>And the like of it may never be seen again.</p>
            <p>
              The photos on this page depict the pre-opening fair scenes. Spikes,
              slabs, discs, bars, cones and a hundred other shapes that form parts
              of exhibit pavilions poke skyward. Twelve thousand workers scurry
              to finish nearly 150 buildings and fill them with stunning displays
              or service facilities. Some 60 countries, 24 states and scores of
              industrial firms will strive to see that the world long remembers
              what they do here. In nearly every case, these figures surpass those
              of any previous exposition.
            </p>
            <p>
              Officials are calling it history&apos;s first $1 billion fair. And
              few of them can envision its being duplicated in the foreseeable
              future because:
            </p>
            <ul className={styles.list}>
              <li>
                It is unlikely that such an immense total investment could be
                attracted a second time. City, state and federal governments alone
                are spending nearly $175 million for various purposes. Exhibitors
                will add half a billion. Fair&nbsp;Controller Erwin Witt says the
                total expenditures is more than twice that of any previous world
                show.
              </li>
              <li>
                It&apos;s hard to imagine a fair of such magnitude anywhere but
                New York City, with its concentrations of population, wealth and
                transportation links. And the fair&apos;s big convenient site
                won&apos;t be available after 1965. Profits will be used for full
                development of Flushing Meadow&nbsp;Park.
              </li>
              <li>
                Only a man like Fair President Robert Moses, master builder of
                bridges, expressways, power dams and parks, could cause such a
                spectacle to rise from bare ground. And only a Moses could attract
                such a brilliant cabinet of generals, diplomats, engineers,
                admnistrators and salesmen, each knowing his job will evaporate
                after 1965.
              </li>
              <li>
                The immensity of this fair and the persuasiveness of its key
                representatives alone lured priceless cultural and historical
                possessions from the Vatican, famous museums and national
                archives.
              </li>
            </ul>

            <h2 className={styles.essayHead}>TROUBLE AHEAD FOR 1967</h2>
            <p>
              An effort to organize a world&apos;s fair for opening in 1967 at
              Montreal already has encountered serious difficulties in such major
              areas as site location and top management.
            </p>
            <p>
              &quot;It will never be done again,&quot; in the unequivocal opinion
              of doughty William E. Potter, the fair&apos;s executive
              vice-president and construction expediter, a retired major general
              of the Army Engineers.
            </p>

            <figure className={styles.singleFigure} style={{ maxWidth: 300 }}>
              <Image
                src="/images/building21/building247.jpg"
                alt=""
                width={300}
                height={283}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.coverCaption}>
                <span className={styles.captionDrop}>I</span>
                ngenuity of fair exhibits is expemplified by these dinosaurs,
                authentically reproduced for Sinclair and already in their places.
              </figcaption>
            </figure>

            <p>
              &quot;Money-wise,&nbsp;I&apos;ve done bigger things,&quot; declares
              Potter, who&apos;s a brisk 58. &quot;But I&apos;ve never had a
              project of this great size on such a small piece of land, and with
              no delay permitted except for one caused by an act of God.&quot;
            </p>
            <p>
              To make it truly a world event and draw in the new high of 60
              nations (the earlier New York event drew 50 in 1939, fewer in its
              second year), Charles Poletti, one-time New York governor who&apos;s
              the fair vice-president in charge of International Affairs and
              Exhibits, has had awesome obstacles to surmount.
            </p>
            <p>
              &quot;Let&apos;s not forget we are asking countries to come here, to
              pay rent for land and put up their own buidlings,&quot; Poletti
              exhorts. &quot;What international fairs have ever done this?
            </p>
            <p>
              &quot;With many of the foreign exhibitors,&quot;&nbsp;Poletti
              relates, &quot;it&apos;s been push and push. We had to fight to get
              the original Mozart manuscripts from Vienna, the Dead Sea Scrolls
              from Jordan, great paintings from the Prado.&quot;
            </p>

            <h2 className={styles.essayHead}>WORLD TRAVELER</h2>
            <p>
              To sign up some 60 nations to exhibit in 45 pavilions, Poletti made
              several trips around the world.
            </p>
            <p>
              GM, Ford, Chrysler and other industrial giants are striving to outdo
              not only one another but all previous world&apos;s fair exhibits.
              Walt Disney-created rides, visual presentations of the past and
              future, scientific demonstrations, films and many more uncommon
              attractions are being readied.
            </p>
            <p>
              The block-square,&nbsp;$17 million United States Pavilion will be
              the most expensive this nation has sponsored at any fair. For
              Commissioner Norman K. Winston, who has represented the U.S. at
              world&apos;s and world trade fairs at Poznan, Zagreb, Vienna, Paris,
              Brussels and Moscow, &quot;this is my greatest challenge.&quot;
            </p>

            <figure className={styles.singleFigure} style={{ maxWidth: 300 }}>
              <Image
                src="/images/building21/building248.jpg"
                alt=""
                width={300}
                height={354}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.coverCaption}>
                <span className={styles.captionDrop}>V</span>
                ast expance of the exposition is seen in tis aerial view. Bell
                System pavilion is under construction in the foreground.
              </figcaption>
            </figure>

            <p>
              From the shores of the park&apos;s Meadow Lake, a whole commnity of
              entertainment spectacles will emit a melodious shock wave. In the
              11,000-seat amphitheater, a cast of 250 will perform in{" "}
              <em>Wonderworld</em>. There&apos;ll be musical comedy in Texas&apos;
              Music Hall, John Ringling North will stage a circus. In another fair
              sector, skating star Dick Button will produce a million-dolar ice
              show.
            </p>
            <p>
              Greyhound will provide surface transportation in 300 specially
              designed vehicles. Thirty thousand employees will serve fair
              visitors, far more than at any earlier exposition. Many will staff
              the 75 eating places, ranging from prettified hot dog stands to
              gourmet restaurants.
            </p>
            <p>
              Can such a cataclysmic combination of brains, wealth, resources,
              ispiration, will and international co-operation ever fuse again?
            </p>
            <p>Prime mover Moses, now 75, ventures an answer:</p>
            <p>
              &quot;Oh, there&apos;ll be other world&apos;s fairs,&quot; he says,
              swinging his chair around to survey the rising structures outside
              his window. &quot;But it&apos;s going to be difficult to do anything
              like this again.&quot;
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building20"
        explicitPrevious
        nextHref="/building22"
      />
    </>
  );
}
