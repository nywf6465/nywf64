import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/betlivTopic.module.css";
import local from "./betliv16.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Crystal Palace of Fashion — Better Living Center — nywf64.com",
  description:
    "Crystal Palace of Fashion and Tetley Good Taste Fashion Show at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

const tetleyRepeat = {
  src: "/images/betliv16/tetley-repeat.jpg",
  alt: "Tetley ... Tetley ... Tetley ... Tetley",
  width: 300,
  height: 37,
};

/**
 * Better Living Center — Crystal Palace of Fashion.
 * Body from legacy betliv16.html.
 * Legacy wording (SCASSI, Fourth of July Tabke, Scene I1 / II1 / V1,
 * Monte-Sanno / Monte-Sano, Fogerty, sued jackets, Straropoulus,
 * Betty Carol of Mam'selle) is preserved.
 *
 * Stack: hero → BetlivNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Betliv16Page() {
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

      <article className={styles.article} aria-labelledby="betliv16-title">
        <header className={styles.titleBar}>
          <h1 id="betliv16-title" className={styles.titleBarMain}>
            Crystal Palace of Fashion
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.lede}>
            <p>
              Showing off the latest displays in women&apos;s fashion through
              daily fashion shows, the Crystal Palace of Fashion was undoubtedly
              ranked as the most important section of the Better Living
              Center&apos;s second floor. The work of top designers like Bill
              Blass, Anne Klein and Christian Dior were among many modeled in
              several shows each day. In 1965, the fashion shows were sponsored
              by Tetley Tea and the programs officially renamed the &quot;Tetley
              Good Taste Fashion Show&quot; (derived from Tetley&apos;s
              advertising slogan that stressed{" "}
              <em>The Good Taste of Tetley Tea</em>).
            </p>
            <p>
              In addition to several daily fashion shows, exhibit space was set
              aside for various companies to exhibit their fashions.
            </p>
          </div>

          <figure
            className={`${styles.figure} ${local.photoStack}`}
            style={{ maxWidth: 500 }}
          >
            <Image
              src="/images/betliv16/fashion-show.jpg"
              alt="Tetley Good Taste of Fashion Show"
              width={500}
              height={399}
              className={styles.photoImg}
              unoptimized
            />
            <Image
              src="/images/betliv16/fashion-exhibits.jpg"
              alt="Fashion Show Exhibits"
              width={500}
              height={402}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <em>Tetley Good Taste of Fashion Show</em> and Exhibits in the
              Crystal Palace of Fashion
            </figcaption>
            <p className={styles.source}>
              SOURCE: Tetley Tea Publicity Photos
            </p>
            <p className={styles.source} style={{ textAlign: "center" }}>
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

          <div className={styles.news}>
            <h2>Dress Rehearsals</h2>
            <h3>By Louise Sweeney</h3>
            <div className={styles.newsGrid}>
              <div>
                <p>
                  The audience helps decide whether a model should wear pink
                  beads, black boots or beige, during this week&apos;s fashion
                  shows at the World&apos;s Fair.
                </p>
                <p>
                  The daily fashion shows directed by Eleanor Lambert at the
                  Better Living building are dress rehearsals until May 1,
                  according to Miss Lambert. The audience, which camps on the
                  orange carpeted steps of the display area, is helping to
                  select costumes which will be part of the permanent fashion
                  show.
                </p>
                <p>
                  &quot;Should we show this as a wedding dress or an evening
                  dress?&quot; asks commentator Lambert. A model glides out in
                  a white gown paved with appliqued flowers, three-dimensional
                  in effect. The gown is cut as simply as a medieval robe. She
                  models it first as a wedding gown, with a matching veil, then
                  solo as an evening gown.
                </p>
                <p>
                  &quot;It would have to be a wedding gown,&quot; pipes up a
                  woman in the audience, &quot;if she wore it in the evening
                  she&apos;d feel like the Queen of May.&quot;
                </p>
                <p>
                  Miss Lambert, in her role as commentator and fashion
                  coordinator, is just as frank. Pointing to a model wrapped in
                  a kit fox coat, she said, &quot;That hat.&quot; The model
                  touched a poufy lilac snood. &quot;Let it bump out in back
                  like a covered wagon.&quot; The model gave it that Conestoga
                  touch, and everyone in the audience murmured approval.
                </p>
                <p>
                  The audience could pick up helpful fashion tips from Miss
                  Lambert&apos;s running commentary, too.
                </p>
                <p>
                  &quot;Lighter stockings, whiter stockings,&quot; she kept
                  telling the models. &quot;Bright beads on that white dress --
                  no pearls,&quot; she scolded.
                </p>
              </div>
              <div>
                <p>
                  &quot;No satin shoes with a cotton dress,&quot; sent a model
                  scurrying back off stage. To a suit she said, &quot;You need
                  low-heeled spectators, not those shiny white, high-heeled
                  sling backs.&quot;
                </p>
                <p>
                  The crowd watched, fascinated, as Miss Lambert trotted up on
                  the stage, every few seconds, tilting brims, removing
                  jewelry, retying scarves, standing back and squinting at the
                  fashion composition with an artist&apos;s eye.
                </p>
                <p>
                  The models themselves lost their usual aloofness in the
                  informal atmosphere of the show. You can&apos;t be the glacial
                  beauty when you&apos;ve just been told, like a naughty little
                  girl, to go back and find that matching babushka.
                </p>
                <p>
                  Backstage, before the show, the models sat shivering in the
                  damp air of the unfinished building. Most of them wore sued
                  jackets or wool coats over their bikini underwear. But one
                  blonde, totally absorbed in putting mascara on her eyebrows,
                  sat in pink lace bra and half slip with only a red straw
                  sailor hat to keep her warm.
                </p>
                <p>
                  Meanwhile, back at the pavilion, spectators can still see
                  nearly an hour of typical American fashion, ranging from pink
                  crocheted play clothes to Sarmi&apos;s drifting evening gowns.
                  Among the top designers represented are Don Loper, Mollie
                  Parnis, Ceil Chapman, Anne Fogarty, Bill Blass and Oleg
                  Cassini.
                </p>
                <p>
                  Although the show is still in a state of flux, there&apos;s
                  one costume that definitely won&apos;t be modeled. It&apos;s
                  a black evening gown with a deep-diving bosom. Some one in
                  that critic&apos;s choice audience decided it was too
                  decollete.
                </p>
                <p>
                  &quot;We replaced it with a turtleneck evening dress,&quot;
                  said a spokesman for the show.
                </p>
              </div>
            </div>
            <p className={styles.source} style={{ textAlign: "left" }}>
              SOURCE: <em>Newsday</em>, January 28, 1964
            </p>
          </div>

          <hr className={styles.rule} />

          <div className={local.program}>
            <div className={local.bannerRow}>
              <Image
                {...tetleyRepeat}
                className={local.banner}
                unoptimized
              />
              <Image
                {...tetleyRepeat}
                className={local.banner}
                unoptimized
              />
            </div>

            <div className={local.programSplit}>
              <div className={local.programLeft}>
                <Image
                  src="/images/betliv16/tetley-program.jpg"
                  alt="Tetley Good Taste Fashion Show"
                  width={300}
                  height={135}
                  className={local.programCover}
                  unoptimized
                />
                <div className={local.collections}>
                  <p>
                    <em>from the</em>
                  </p>
                  <p>
                    FALL <span style={{ fontSize: "0.8em" }}>AND</span> WINTER
                    1965 COLLECTIONS
                  </p>
                  <p>
                    <em>of</em>
                  </p>
                  <p>AMERICAN DESIGNERS</p>
                </div>
                <Image
                  src="/images/betliv16/tetley-crystal.jpg"
                  alt="Tetley Crystal Palace of Fashion"
                  width={225}
                  height={35}
                  className={local.crystal}
                  unoptimized
                />
                <p className={local.fairLabel}>NEW YORK WORLD&apos;S FAIR</p>
              </div>

              <div className={local.green}>
                <p>
                  Tea as a tasteful symbol of good things in life is highlighted
                  by a series of Celebrity Tea Tables designed for Tetley by
                  twenty-six celebrated fashion creators from all parts of the
                  world.
                </p>
                <p>The designers and their themes include:</p>
                <div className={styles.twoCol}>
                  <div>
                    <p className={styles.designerName}>
                      CAPTAIN EDWARD MOLYNEUX
                    </p>
                    <p className={styles.designerTheme}>(France)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>ANNE KLEIN</p>
                    <p className={styles.designerTheme}>(Picnic Tea)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>
                      COUNTESS VON ECKERMANN
                    </p>
                    <p className={styles.designerTheme}>(Sweden)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>ARNOLD SCASSI</p>
                    <p className={styles.designerTheme}>(Studio Tea)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>ANNE FOGERTY</p>
                    <p className={styles.designerTheme}>
                      (Southampton Tea Table)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>JOHN WEITZ</p>
                    <p className={styles.designerTheme}>(Tea at sea)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>ROXANNE</p>
                    <p className={styles.designerTheme}>(City Tea Table)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>JANE DERBY</p>
                    <p className={styles.designerTheme}>(Island Tea Table)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>RICHARD TAM</p>
                    <p className={styles.designerTheme}>
                      (San Francisco Tea)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>PAULINE TRIGERE</p>
                    <p className={styles.designerTheme}>(Russian Tea)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>OSCAR DE LA RENTA</p>
                    <p className={styles.designerName}>OF JANE DERBY</p>
                    <p className={styles.designerTheme}>(Spanish Tea Table)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>BILL BLASS</p>
                    <p className={styles.designerTheme}>
                      (Bachelor&apos;s Tea Party)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>RUDI GERNREICH</p>
                    <p className={styles.designerTheme}>
                      (Viennese Tea Table)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>HANAE MORI</p>
                    <p className={styles.designerTheme}>
                      (Japanese Tea Table)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>MOLLIE PARNIS</p>
                    <p className={styles.designerTheme}>
                      (Fourth of July Tabke)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>SYBIL CONNOLLY</p>
                    <p className={styles.designerTheme}>(Ireland)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>GEOFFREY BEENE</p>
                    <p className={styles.designerTheme}>
                      (Southern Gentleman&apos;s Tea)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>DAVID KIDD</p>
                    <p className={styles.designerTheme}>(Scotland)</p>
                  </div>
                  <div>
                    <p className={styles.designerName}>COUNT SARMI</p>
                    <p className={styles.designerTheme}>
                      (Venetian Tea Table)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>HELEN LEE</p>
                    <p className={styles.designerTheme}>
                      (Children&apos;s Tea Party)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>ADELE SIMPSON</p>
                    <p className={styles.designerTheme}>
                      (Oriental Tea Table)
                    </p>
                  </div>
                  <div>
                    <p className={styles.designerName}>ARMI RATIA</p>
                    <p className={styles.designerTheme}>(Finland)</p>
                  </div>
                </div>
                <p className={local.andOthers}>and others</p>
                <p>
                  Two designer tables are on display each week as part of the
                  Tetley Good Taste presentation in the Crystal Palace of
                  Fashion in the Better Living Center.
                </p>
              </div>
            </div>

            <div className={local.bannerRow}>
              <Image
                {...tetleyRepeat}
                className={local.banner}
                unoptimized
              />
              <Image
                {...tetleyRepeat}
                className={local.banner}
                unoptimized
              />
            </div>
          </div>

          <hr className={styles.rule} />

          <Image
            src="/images/betliv16/tetley-fall-1965.jpg"
            alt="Tetley Good Taste Fashion Show ... Fall 1965"
            width={600}
            height={56}
            className={local.fallBanner}
            unoptimized
          />

          <div className={local.green}>
            <p>
              <em>Tetley&apos;s slogan,</em> &quot;THE GOOD TASTE OF TETLEY
              TEA&quot;,{" "}
              <em>
                suggested an appropriate theme for this showing of fall clothes
                by famous American designers.
              </em>
            </p>
            <p>
              <em>
                Imagine that you are wearing beautiful clothes. Think where you
                might wear them and how you would accessorize them. Good taste
                in fashion, like good taste in all things, is the perfect blend
                of ingredients, including your own discrimination.
              </em>
            </p>
          </div>

          <div className={local.scenes}>
            <div>
              <div className={local.scene}>
                <p>
                  <em>Scene 1 ... </em>GOING PLACES
                </p>
                <p>
                  American designers suggest what to wear to the Fair -- and are
                  giving you a preview of daytime fashion for Fall.
                </p>
                <p>
                  <em>
                    Designers represented: Bill Blass of Maurice Rentner, Lilli
                    Ann, Frechtel, Sarff-Zumpano, David Kidd of Arthur Jablow,
                    Arnold Scassi, Monte-Sanno, and Pruzan, and Shannon Rodgers
                    for Jerry Silverman.
                  </em>
                </p>
              </div>
              <div className={local.scene}>
                <p>
                  <em>Scene I1 ... </em>SPORTIVE
                </p>
                <p>
                  The way you dress for your favorite sport may sometimes be
                  more of a test of your fashion judgment than how you look at a
                  big party!
                </p>
                <p>
                  Here are some tips on the chic of sports fashion by famous
                  American designers:{" "}
                  <em>
                    John Weitz, Anne Klein for Mallory, Anne Fogarty, Ship
                    &apos;n Shore, The Villager, Rudi Gernreich, and the
                    American Thread Company.
                  </em>
                </p>
              </div>
              <div className={local.scene}>
                <p>
                  <em>Scene II1 ... </em>FUR IN YOUR FUTURE
                </p>
                <p>
                  It&apos;s always good fashion, and good taste, to plan ahead.
                  A fur coat being a major investment for most women, requires
                  careful consideration of not merely your figure, your height
                  and hair coloring, but also the various clothes you will wear
                  under it. So think about your future in fur as you watch this.
                </p>
                <p>
                  <em>
                    Designers represented: Bill Blass of Maurice Rentner, Lilli
                    Ann, Frechtel, Sarff-Zumpano, David Kidd of Arthur Jablow,
                    Arnold Scassi, Monte-Sanno, and Pruzan, and Shannon Rodgers
                    for Jerry Silverman.
                  </em>
                </p>
              </div>
              <div className={local.scene}>
                <p>
                  <em>Scene IV ... </em>SEEING STARS
                </p>
                <p>
                  The next group of fashion is truly star-studded. Linde Star
                  gems, with their brilliant six-pointed gleam, show that modern
                  science has not only sent us to the stars ... science has
                  brought the stars to us! Linde Star gems are shown with
                  fashions by members of the New York Couture Group.
                </p>
              </div>
            </div>
            <div>
              <div className={local.scene}>
                <p>
                  <em>Scene V ... </em>TEA TIME
                </p>
                <p>
                  For more than a hundred years, the end of the day has been
                  known as tea time -- time for clothes as exhilarating and
                  hospitable as the tradition of tea itself.
                </p>
                <p>
                  Receiving guests for a cozy hour of gossip or a formal tea,
                  you&apos;ll wear clothes such as these by:{" "}
                  <em>
                    Sarff-Zumpano, Dorian, Robert Strong, John Moore, Arnold
                    Scassi and Bill Blass of Maurice Rentner.
                  </em>
                </p>
              </div>
              <div className={local.scene}>
                <p>
                  <em>Scene V1 ... </em>GALA FASHIONS
                </p>
                <p>
                  Evening fashion is like any other, a matter of good taste and
                  personal discrimination. American designers are world famous
                  for their conviction that women should wear clothes with grace
                  and charm ... never let her clothes wear her. Tetley, noted
                  for good taste in tea, is grateful to the celebrated
                  designers who have chosen important dresses from their high
                  fashion collections to demonstrate good taste and great
                  glamour for evening wear this season.
                </p>
                <p>
                  <em>
                    They are: Pat Sandler for Highlight, Bill Blass for Maurice
                    Rentner, Adele Simpson, Samuel Winston, Estevez, Anne
                    Fogarty, Monte-Sano and Pruzan, David Kidd for Arthur
                    Jablow, Oscar de La Renta for Jane Derby, Malcolm Starr,
                    Gustave Tassell, Christian Dior-N.Y. Betty Carol of
                    Mam&apos;selle and Straropoulus.
                  </em>
                </p>
              </div>
              <div className={local.accessories}>
                <p>HATS from Madcaps and Lilly Dasche</p>
                <p>JEWELRY by Richelieu, K.J.L., Monet, Trifari,</p>
                <p>Marvella, Kramer and Vogue</p>
                <p>STOCKINGS from Berkshire</p>
                <p>GLOVES by Hansen</p>
                <p>SHOES from Fiorentina, David Evans, Herbert</p>
                <p>Levine and Keds</p>
                <p>HANDBAGS by Korent, Tano, Ronay and</p>
                <p>Coblentz</p>
                <p>SPORT EQUIPMENT from Abercrombie and</p>
                <p>Fitch and Sig Buchmayr.</p>
              </div>
            </div>
          </div>

          <p className={styles.source}>
            SOURCE: Pamphlet,{" "}
            <em>Tetley Good Taste Fashion Show ... Fall 1965</em>
          </p>

          <hr className={styles.rule} />

          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <Image
              src="/images/betliv16/american-thread.jpg"
              alt="American Thread Catalogue"
              width={300}
              height={421}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              The American Thread Company, parent company of Dawn Yarns, was a
              major sub-exhibitor of the Crystal Palace of Fashion. This catalog
              is a popular collectible of the Fair and displays fashions
              featured in their exhibit at the Better Living Center
            </figcaption>
          </figure>

          <hr className={styles.rule} />

          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/betliv16/haircolor.jpg"
              alt="Haircolor Display"
              width={400}
              height={269}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Haircolor Display - 2nd Floor
            </figcaption>
            <p className={styles.source}>
              SOURCE: Photo presented courtesy Bill Cotter collection © 2010
              Bill Cotter, All Rights Reserved. See more images from
              Bill&apos;s <u>fabulous</u> collection of World&apos;s Fair
              photographs at his website{" "}
              <a
                href="http://www.worldsfairphotos.com/"
                target="_blank"
                rel="noreferrer"
              >
                WorldsFairPhotos.com
              </a>
              .
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv15"
        explicitPrevious
        overviewHref="/betliv01"
        nextHref="/betliv17"
      />
    </>
  );
}
