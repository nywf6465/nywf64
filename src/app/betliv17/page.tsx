import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/betlivTopic.module.css";
import paper from "./betliv17.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "SPECTRACKULAR — Better Living Center — nywf64.com",
  description:
    "SPECTRACKULAR model railroad display at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center — SPECTRACKULAR.
 * Body from legacy betliv17.html (newspaper-style promotional page).
 * Legacy wording preserved: spectrackular (London caption), Specktrackular,
 * world-in -miniature, It's many trains, Belter Living, plywood and and,
 * The the train, SPECTRACULAR! (SOURCE line).
 *
 * Stack: hero → BetlivNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Betliv17Page() {
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

      <article className={styles.article} aria-labelledby="betliv17-title">
        <header className={styles.titleBar}>
          <h1 id="betliv17-title" className={styles.titleBarMain}>
            SPECTRACKULAR
          </h1>
        </header>

        <div
          className={`${styles.articleInner} ${styles.wideInner} ${paper.inner}`}
        >
          <h2 className={paper.headline}>MODEL RAILROAD IS FAIR&apos;S BIG HIT</h2>
          <Image
            src="/images/betliv17/banner.gif"
            alt="Banner"
            width={600}
            height={142}
            className={paper.banner}
            unoptimized
          />
          <hr className={paper.bannerRule} />

          <div className={paper.spread}>
            <div className={paper.col}>
              <figure className={paper.promoFigure}>
                <Image
                  src="/images/betliv17/london-terminal.jpg"
                  alt="London Terminal"
                  width={350}
                  height={286}
                  className={styles.photoImg}
                  unoptimized
                />
                <figcaption className={paper.promoCaption}>
                  LONDON TERMINAL - The main starting-point of the innumerable
                  trains of the World&apos;s Largest Model Railroad spectrackular
                  is seen above. Passengers and porters go about their business
                  on the platforms, while trains arrive and depart. Shunting
                  engines on side tracks marshal new trains into position. From
                  here leave the main trunk lines which run around the entire
                  3000-square-foot area of the Spectrackular. This is the corner
                  of the layout directly in front of the control panel.
                </figcaption>
              </figure>

              <figure className={paper.promoFigure}>
                <Image
                  src="/images/betliv17/mars-launcher.jpg"
                  alt="Mars Launcher"
                  width={350}
                  height={297}
                  className={styles.photoImg}
                  unoptimized
                />
                <figcaption className={paper.promoCaption}>
                  BERTRAM OTTO, builder of the Spectrackular, explains his
                  display to a group of children during a &quot;preview&quot;
                  visit. In the center may be seen the passenger rocket of the
                  future, circling in its cradle, to find its proper orbital
                  angle for blastoff. Passenger and freight trains run around
                  the perimeter of the layout. This corner is diagonally across
                  from the control panel.
                </figcaption>
              </figure>

              <div className={paper.box}>
                <h2>HOW TO GET TO THE SPECTRACKULAR</h2>
                <p>
                  The World&apos;s Largest Model Railroad Spectrackular is
                  located on the ground floor of the Better Living Center at the
                  Rodman Street entrance of the New York World&apos;s Fair. This
                  is designated as gate 7 on maps of the Fair area and is Stop
                  #7 of the Greyhound Rapid Transit line which carries
                  passengers through the Fair.
                </p>
                <p>
                  The Spectrackular can be seen at the end of your visit to the
                  Better Living Center as all ramps lead down to it. It can also
                  be seen first by swinging around to your left from the front
                  entrance of the Better Living Center, to the side entrance
                  facing Rodman Street.
                </p>
              </div>

              <div className={paper.body}>
                <h2 className={paper.sectionHead}>
                  &quot;CITY OF THE FUTURE&quot; SHOWS SHAPE OF THINGS TO COME
                </h2>
                <div className={paper.citySplit}>
                  <div>
                    <p>
                      Scientists and those interested in space developments and
                      other problems of modern science will find The World&apos;s
                      Greatest Spectrackular&apos;s &quot;City of the Future&quot;
                      of special excitement to them.
                    </p>
                    <p>
                      Mr. Bertram Otto has incorporated into it many new ideas
                      of his own. These include revolving silver spheres, with
                      antennae projecting from them, which are intended to absorb
                      radiation, fallout, germs and dust, and thus make the City
                      of the Future almost aseptically clean.
                    </p>
                    <p>
                      There are also various levels of transportation, for
                      freight, for passenger cars, for pedestrians, and for
                      public transportation, making life as simple as possible
                      for the people of the future.
                    </p>
                  </div>
                  <div>
                    <p>
                      In addition, each section of the City of the Future has
                      its own color, so as to facilitate postal delivery -
                      better, Mr. Otto feels, than any system of zone number or
                      zip-codes. The colors of the various sections also serve
                      as guides for the landing of helicopters, which will in
                      his future conception normally come in to land on the roofs
                      of large office and apartment buildings.
                    </p>
                    <p>
                      In five years that the City of the Future has been part of
                      the Spectrackular, Mr. Otto has had to change and update
                      it several times - for many of the ideas he introduced as
                      dreams of the future have now become reality. It is safe
                      to assume that what he is showing us now is at least as
                      good likeness of the &quot;shape of things to come.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${paper.col} ${paper.body}`}>
              <h2 className={paper.sectionHead}>
                SPECTRACKULAR PRESENTS WHOLE WORLD IN MINIATURE DISPLAY
              </h2>
              <p>
                The result of some eight years&apos; work, and a cumulative
                investment of almost $200,000, the Spectrackular is the
                scale-model hobbyist&apos;s dream come true. As presented on the
                ground floor of the Better Living Center at the World&apos;s
                Fair, it is the largest model railroad display ever assembled
                anywhere.
              </p>
              <p>
                It has over 8,000 little people in its miniature world, engaged
                in every business, pastime and activity conceivable.
              </p>
              <p>
                It&apos;s many trains, the mainstay of the exhibit, number over
                1,000 pieces of rolling stock. These include more than 400
                locomotives, from a wide variety of countries: England, America,
                France, Germany, Italy, Holland, Denmark, Switzerland, Japan,
                and even Russia.
              </p>
              <p className={paper.subhead}>Huge Area</p>
              <p>
                The area of the Spectrackular is approximately 3,000 square
                feet, and there are more than two and three-quarter miles of
                track laid on the baseboards and the superstructures such as
                mountains, viaducts, bridges, trestles, and so on.
              </p>
              <p>
                The scaled-to-life settings include 24 churches, 148 country
                cottages and farm buildings, 400 shops and stores of all
                descriptions, 200 schools, fire stations and other public
                buildings, 150 factories and administrative buildings, 100
                skyscrapers, supermarkets and multiple-business structures, and
                over 500 railroad stations and siding sheds.
              </p>
              <p>
                Throwing geography to the winds, Mr. Bertram Otto, president of
                the Thames Ditton Model Railway Society, Surrey, England, who
                built the Spectrackular, has included within its boundaries such
                diverse locations as London Terminal, New York, and a
                &quot;preview&quot; idea of its World&apos;s Fair, Rome, Paris,
                Switzerland with its Alps, Germany, a City of the Future, and
                even rockets taking off for Mars.
              </p>
              <p className={paper.subhead}>All HO Scale</p>
              <p>
                The entire Spectrackular is scaled to HO size, the most
                widely-used of railroad modelers&apos; scales (3.5 mm. to the
                foot, or 1/87th of actual size approximately). Needless to say,
                &quot;modeler&apos;s license&quot; has been exercised in a few
                cases. On the scale, if London and New York were actually
                separated by the scaled distances, the Spectrackular would be
                some 35 miles long.
              </p>
              <p className={paper.subhead}>Tells Story</p>
              <p>
                The careful observer will note that every unit of activity and
                every group of people in the layout has its own justification
                and story. While the modeler leaves it to the viewer to
                interpret these in his own fashion, the narration presented from
                time to time at the display explains many of the individual
                aspects of the different sections.
              </p>
              <p>
                It will be seen that, as the viewer goes around the
                Spectrackular, passing from section to section, the trains in
                each area are those of the country represented, the signs on the
                stations and buildings, the costumes of the people, the local
                cars and street transportation, and so on, are all in character
                for the given country.
              </p>
              <hr className={styles.rule} />
              <div className={paper.logoWrap}>
                <Image
                  src="/images/betliv17/blc-logo.gif"
                  alt="BLC Logo"
                  width={250}
                  height={263}
                  className={`${paper.logo} ${styles.photoPlain}`}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <hr className={styles.rule} />

          <div className={paper.spread}>
            <div className={`${paper.col} ${paper.body}`}>
              <h2 className={paper.sectionHead}>DO IT YOURSELF!</h2>
              <p>
                Visitors to the Spectrackular will get six chances to
                participate in actually running the world&apos;s largest scale
                model railroad display.
              </p>
              <p>
                At various points around the layout, there are buttons inside
                the barrier which spectators may press. As marked, these buttons
                will operate the Monorail, make the Churchbell ring, run the
                little yellow Trolley, activate the Cablecar, send
                Stephenson&apos;s Rocket whizzing on its way -- and the last
                one, marked Mystery Button, will bring about a surprised on the
                layout, which it is left up to the viewer to locate.
              </p>
              <div className={paper.logoWrap}>
                <Image
                  src="/images/betliv17/building.gif"
                  alt="B&W Better Living Building"
                  width={250}
                  height={150}
                  className={`${paper.logo} ${styles.photoPlain}`}
                  unoptimized
                />
              </div>
              <h2 className={paper.sectionHead}>HOBBY MAKES NEW CAREER FOR OTTO</h2>
              <p>
                Bertram Otto is one man who can be said to have turned his
                boyhood hobby into a life&apos;s occupation - and a
                highly-successful one. All his life a model-railroad enthusiast,
                Otto seven years ago put together his first public display, for
                exhibit at the British resort of Eastbourne. He has built it up
                and added to it year by year, until today it is unique, the most
                fantastic world-in-miniature ever constructed. It is, of course
                seen in the Better Living Center of the World&apos;s Fair as The
                World&apos;s Greatest Spectrackular. When not displaying the
                Spectrackular, Otto continues to make his living as a theatrical
                entertainer, magician and illusionist.
              </p>
              <div className={paper.box}>
                <h2>&quot;GOLDEN SPIKE&quot; ANNIVERSARY</h2>
                <p>
                  Railroaders and model railroaders throughout the U.S. observe
                  the date of May 10, as the 95th anniversary of the driving of
                  the Golden Spike at Promontory, Utah. This famous event in
                  1869 signalized the completion of the first transcontinental
                  rail route in the United States.
                </p>
                <p>
                  Rolling stock of the period can be seen in the Spectrackular,
                  World&apos;s Largest Model Railroad, in the Better Living
                  Center at the World&apos;s Fair.
                </p>
              </div>
            </div>

            <div className={`${paper.col} ${paper.body}`}>
              <h2 className={paper.sectionHead}>
                FAIR &quot;PREVIEW&quot; IS FEATURED
              </h2>
              <p>
                When Bertram Otto&apos;s record-size &quot;world-in
                -miniature&quot; and model railroad exhibit was on display last
                year at the British resort of Eastbourne, one of its key
                features was a fanciful &quot;preview&quot; of the 1964
                World&apos;s Fair in New York. Now, his own prediction coming
                true, Otto is starring with his display, The World&apos;s
                Greatest Specktrackular, in the Better Living Center at our
                Fair. But he hasn&apos;t changed his &quot;preview&quot; version
                of it. Americans may get a chuckle from the trans-Atlantic
                vision of the Fair.
              </p>
              <h2 className={paper.sectionHeadSm}>
                MILLIONS ENJOY SCALE-MODEL HOBBY
              </h2>
              <p>
                It is estimated that there are over 2,000,000 scale-model
                railroad hobbyists in the United States. A majority of them are
                grouped in some 200 hobby clubs.
              </p>
              <p>
                About 84% of these hobbyists build their models in HO gauge, the
                scale of the Spectrackular. The balance are split just about
                evenly between the larger O gauge, and the smaller S and TT
                gauges.
              </p>
              <p>
                Most of the clubs are affiliated with the National Model
                Railroad Association, which has its headquarters in Canton,
                Ohio.
              </p>
              <p>
                Those interested in forming clubs or joining the national
                association may write to Bob Bast, Office Manager, National
                Model Railroad Association, P.O. Box 1238-K, Station C, Canton,
                8, Ohio.
              </p>
              <p>
                The principal magazines of interest to scale-model hobbyists
                published in the United States are:
              </p>
              <p>
                <em>Model Railroader</em>, published monthly by the Kalmbach
                Publishing Co., 1027 No. 7th St., Milwaukee 7, Wis.; and
              </p>
              <p>
                <em>Railroad Model Craftsman</em>, published monthly by Model
                Craftsman Publishing Corp., P.O. Box 469, Ramsey, N.J.
              </p>
              <h2 className={paper.sectionHeadSm}>
                SPECTRACKULAR GAVE SHIPPERS A SCARE!
              </h2>
              <p>
                When the U.S. Lines cargo-liner, S.S. American Courier,
                transported The World&apos;s Greatest Spectrackular from England
                to New York, the bill of lading caused quite some shock to the
                shipping officials. It read &quot;400 locomotives, 6700
                assorted railway cars&quot; and various other such huge
                consignments -- an insuperable problem, until they realized that
                these were scale-models in HO gauge (3.5 mm.-to-the-foot scale).
                The shipment arrived safely and is now being seen in the Belter
                Living Center at the World&apos;s Fair. The only casualty was a
                few gray hairs for the steamship officials.
              </p>
            </div>
          </div>

          <hr className={styles.rule} />

          <figure className={`${styles.figure} ${paper.nypl}`}>
            <Image
              src="/images/betliv17/spectrackular.jpg"
              alt="SPECTRACKULAR!"
              width={500}
              height={402}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <em>SPECTRACKULAR!</em> Model Railroad Display - 1st Floor Better
              Living Center
            </figcaption>
            <p className={paper.nyplSourceHead}>
              SOURCE: SPECTRACULAR! Publicity Photo -
            </p>
            <p className={paper.nyplStack}>
              New York World&apos;s Fair 1964-1965 Corporation Records,
              <br />
              Manuscripts and Archives Division,{" "}
              <em>The New York Public Library</em>,
              <br />
              Astor, Lenox and Tilden Foundations
              <br />
              Reproduced here courtesy of <em>The New York Public Library</em>,
              with permission
              <br />
              May <u>not</u> be reproduced without written consent of{" "}
              <em>The New York Public Library</em>
            </p>
          </figure>

          <hr className={styles.rule} />

          <div className={paper.reprint}>
            <h2 className={paper.reprintTitle}>
              Spectrackular in World All Its Own
            </h2>
            <div className={paper.reprintGrid}>
              <div>
                <p>
                  Every father who has ever bought a model railroad for his son
                  so he could play with it himself, and every son who lets him
                  help play with that railroad, should high-ball it over to the
                  World&apos;s Fair.
                </p>
                <p>
                  For there, in the Better Living Pavilion, they will find two
                  equally fascinating attractions under one roof: the
                  Spectrackular, which is the largest model railroad in the
                  world, and its bouncy, bubbly creator, Bertram Otto.
                </p>
                <p>
                  Otto is a short, heavy-set pixie of a man with a British
                  accent and a quick eye for even the most minute of details. He
                  has built, in the past seven years, an exhibit which defies
                  all imaginations except his own.
                </p>
                <p className={paper.stars}>* * *</p>
                <p>
                  <span className={paper.kicker}>OTTO WAVES</span> a hand over
                  the 3,000-square-foot exhibit with its nearly three miles of
                  track, its more than 1,000 pieces of rolling stock and 400
                  locomotives and he says simply: &quot;It&apos;s all a bit
                  easy, you know.&quot;
                </p>
                <p>
                  Otto explains the electronic intricacies of his railroad with
                  the same ease he explains life itself.
                </p>
                <p>
                  &quot;Take life and break it down into little cubes and
                  it&apos;s all not so complicated,&quot; he says. &quot;A field
                  of daffodils overwhelms you. But one daffodil by itself, is
                  easy to understand.&quot;
                </p>
                <p>
                  Otto applied this same theory to the construction of his model
                  railroad. And bit by bit, scale model by scale model, he put
                  it together.
                </p>
                <p>
                  His obsession with detail is everywhere in this vast, moving
                  exhibit which encompasses much of the world.
                </p>
                <p>
                  You can see much more than the trains moving back and forth in
                  every direction, busily loading and unloading, switching and
                  turning, stopping and going.
                </p>
                <p className={paper.stars}>* * *</p>
                <p>
                  <span className={paper.kicker}>ONE TRAIN</span> pulls up to a
                  chute at a uranium mine. It stops. The open car is filled with
                  ore. The the train moves on to a conveyor belt and empties the
                  ore onto it. The conveyor belt takes the ore up to a special
                  machine which crushes it and empties it into another car for
                  shipment someplace else.
                </p>
              </div>
              <div>
                <p>
                  Ships move back and forth in the many lakes and rivers. A
                  bride and groom walk out of a church after their wedding.
                  They&apos;re &quot;married&quot; thousands of times each day.
                  A church bell rings off and on. And with the regularity of Old
                  Faithful, a volcano erupts complete with fire.
                </p>
                <p>
                  But it is not only in the hundreds of moving parts that Otto
                  has displayed his great love for detail. It is in the tiny
                  corners and crevices of the display which the average person
                  would never see.
                </p>
                <p>
                  He points to a tiny nest on top of a building and says:
                  &quot;See that. It&apos;s a nest of storks. Cost me $12. Spent
                  I don&apos;t know how long getting it just right. Lovely,
                  what?&quot;
                </p>
                <p>
                  You walk with Otto around this exhibit and as you do you pass
                  from one country to another. One minute you&apos;re at
                  Waterloo Station in England, the next you&apos;re in a station
                  in Germany. Then you&apos;re high above the Alps, riding in a
                  cable car similar to those at the fair. Soon, you&apos;re at
                  Grand Central Station in Manhattan.
                </p>
                <p className={paper.stars}>* * *</p>
                <p>
                  <span className={paper.kicker}>BUT IT IS</span> Otto&apos;s
                  City of the Future which makes him beam with pride. He claims
                  this city, complete with its monorail, is already being
                  studied by planners for real-life cities of the future.
                </p>
                <p>
                  &quot;In one corner there,&quot; he says, squinting for
                  it&apos;s hard to see from where you stand, &quot;in one
                  corner of my city I have a museum. You can&apos;t see it from
                  here but it&apos;s there. I have a museum with all the things
                  obsolete in that era. There&apos;s a modern-day telly and a
                  traffic light and so many other things which science has
                  replaced.&quot;
                </p>
                <p>
                  Otto is a television entertainer and businessman in England.
                  And it&apos;s the ham in him which makes him build such things
                  as the model railroad.
                </p>
                <p>
                  &quot;It&apos;s a way of performing you know,&quot; he says.
                  &quot;I&apos;m a bit of a big head, I am. I think if nobody
                  listened to me, I&apos;d just get up somewhere and start
                  shouting my head off.&quot;
                </p>
                <p>
                  His railroad was born about seven years ago when a theater
                  became empty in a town in
                </p>
              </div>
              <div>
                <p>England where he was performing.</p>
                <p>
                  &quot;I couldn&apos;t afford to have someone else in that
                  theater because maybe they would be competition for me,&quot;
                  he says. &quot;So, I&apos;d always wanted to build a model
                  railroad. I figured this was as good a place as any to start
                  it.&quot;
                </p>
                <p>
                  Otto started building and the more he built, the more
                  fascinated he became. He scoured Europe for things to add to
                  his display, but much of the HO models were built by hand.
                </p>
                <p className={paper.stars}>* * *</p>
                <p>
                  <span className={paper.kicker}>BY THE TIME</span> the exhibit
                  had toured England and most of Europe and was shipped to the
                  fair, it had grown to many times its original size.
                </p>
                <p>
                  In his world, which he says is &quot;like the world but not
                  exactly like it,&quot; there are 24 churches, 148 cottages and
                  farm buildings, 400 shops, 200 schools, 200 city houses, fire
                  stations and dozens of other public buildings. And thousands
                  of people and even a polar bear who plays tennis.
                </p>
                <p>
                  The entire railroad is mounted on plywood and and breaks up
                  into sections which fold and fit into packing crates. It takes
                  about five days for a crew of nine men to assemble and just
                  about as much time to pack up.
                </p>
                <p>
                  Behind the scenes is Otto&apos;s engineer -- his
                  mother-in-law. Wearing a fireman&apos;s uniform and cap, she
                  efficiently switches the switches and dials the dials to keep
                  the hundreds of yards running smoothly.
                </p>
                <p>
                  Otto&apos;s wife keeps a sharp eye on the yards for possible
                  breakdowns.
                </p>
                <p>
                  And Otto runs around the exhibit, excited as a boy with a new
                  toy, pointing here and there and beaming proudly when someone
                  comes over to tell him how much they enjoyed his
                  &quot;Spectrackular.&quot;
                </p>
                <p className={paper.stars}>* * *</p>
              </div>
            </div>
          </div>
          <p className={`${styles.source} ${paper.reprintSource}`}>
            SOURCE: <em>Long Island Sunday Press, </em>May 3, 1964
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv16"
        explicitPrevious
        overviewHref="/betliv01"
        nextHref="/betliv18"
      />
    </>
  );
}
