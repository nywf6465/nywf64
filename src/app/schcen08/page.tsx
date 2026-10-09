import type { Metadata } from "next";
import Image from "next/image";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./schcen08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochures — Schaefer — nywf64.com",
  description:
    "Schaefer Center promotional and souvenir brochures at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center — Brochures (two brochure reconstructions).
 * Body from legacy schcen08.html.
 */
export default function Schcen08Page() {
  const logoRow = (
    labelTop: string,
    labelBottom: string,
  ) => (
    <div className={styles.featureRow} key={`${labelTop}-${labelBottom}`}>
      <Image
        src="/images/schcen08/schcen12.jpg"
        alt="Schaefer Logo"
        width={75}
        height={71}
        className={styles.featureLogo}
        unoptimized
      />
      <div>
        <p className={styles.featureText}>{labelTop}</p>
        <p className={styles.featureText}>{labelBottom}</p>
        <p className={styles.featureDots} aria-hidden="true">. . .</p>
      </div>
    </div>
  );

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

      <article className={styles.article} aria-labelledby="schcen08-title">
        <header className={styles.titleBar}>
          <h1 id="schcen08-title" className={styles.titleBarMain}>
            Brochures
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.brochurePanel} aria-label="Promotional brochure">
            <div className={styles.promoGrid}>
              <div>
                <p className={styles.promoTitle}>SCHAEFER CENTER</p>
                <p className={styles.promoSub}>at the</p>
                <p className={styles.promoSub}>NEW YORK WORLD&apos;S FAIR</p>
                <p className={styles.promoYear}>1964-1965</p>
                <Image
                  src="/images/schcen08/schcen11.jpg"
                  alt="Schaefer Pavilion Model"
                  width={300}
                  height={193}
                  className={styles.promoModel}
                  unoptimized
                />
                {logoRow("SCHAEFER CENTER", "RESTAURANT")}
                {logoRow("GREAT MOMENTS", "IN SPORTS GALLERY")}
                {logoRow("BEER GARDEN", "AND PATIO")}
                {logoRow("LONGEST BAR AT", "THE FAIR")}
              </div>
              <div className={styles.promoCopy}>
                <p>
                  THE F. &amp; M. SCHAEFER BREWING CO. will be represented at the
                  1964-1965 New York World&apos;s Fair by{" "}
                  <strong>Schaefer Center</strong>, an almost entirely plastic
                  and fiberglass structure. Designed with comfort and relaxation
                  in mind, the two domed building making up Schaefer Center will
                  be surrounded by beautifully landscaped grounds.
                </p>
                <p className={styles.promoDots} aria-hidden="true">. . .</p>
                <p>
                  Visitors to <strong>Schaefer Center</strong> will be greeted by
                  many of the great names in sports who will act as hosts. In
                  addition, great moments in sports will come alive as visitors
                  view action photographs of these historical events in the
                  &quot;Circle of Sports&quot; Gallery.
                </p>
                <p className={styles.promoDots} aria-hidden="true">. . .</p>
                <p>
                  <strong>Schaefer Center</strong> will accommodate groups up to
                  150 persons who may wish to hold a reception or cocktail party
                  on the Schaefer Center Patio before dining at Schaefer Center
                  Restaurant. (Groups desiring further information can contact
                  Schaefer Center Manager at 430 Kent Ave., Brooklyn 11, New
                  York).
                </p>
                <p className={styles.promoDots} aria-hidden="true">. . .</p>
                <p>
                  Located under the larger of the two domes,{" "}
                  <strong>Schaefer Center</strong> Restaurant will serve fine food
                  and beverages in buffet or smorgasbord style. The smaller
                  domed unit, called The Rotunda, will present a 122-year review
                  of Schaefer history.
                </p>
                <p className={styles.promoDots} aria-hidden="true">. . .</p>
                <p>
                  A 100-foot long bar and Beer Garden will join the two
                  buildings.
                </p>
                <div className={styles.promoClosing}>
                  <p>SEE YOU AT SCHAEFER CENTER</p>
                  <p>WHEN YOU&apos;RE AT THE FAIR</p>
                </div>
                <Image
                  src="/images/schcen08/schcen13.jpg"
                  alt="Schaefer Logo"
                  width={138}
                  height={140}
                  className={styles.promoLogoBottom}
                  unoptimized
                />
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: Schaefer Center Promotional Brochure
            </p>
          </section>

          <hr className={styles.sectionRule} />

          <figure className={styles.coverFigure}>
            <Image
              src="/images/schcen08/schcen14.jpg"
              alt="Souvenir Cover"
              width={600}
              height={423}
              className={styles.coverImg}
              unoptimized
            />
          </figure>

          <section className={styles.souvenirInner} aria-label="Souvenir pamphlet">
            <Image
              src="/images/schcen08/schcen15.jpg"
              alt="Artist's Rendering - Schaefer Center"
              width={366}
              height={187}
              className={styles.coverImg}
              unoptimized
            />
            <div className={styles.souvenirLead}>
              <p>
                Schaefer Center&apos;s participation in the New York World&apos;s
                Fair marks a return engagement for The F. &amp; M. Schaefer
                Brewing Co. In 1939-40, Schaefer Center was one of the standout
                attractions at the first New York fair.
              </p>
              <p>
                Featuring cool beer gardens, a 100-foot long outdoor bar and a
                modern buffet restaurant, Schaefer Center in its first year of
                operation served over 328,000 meals and over 2,250,000 glasses of
                America&apos;s Oldest Lager Beer.
              </p>
              <p>
                Many unique features have made Schaefer Center an eye-catching
                exhibit. The two roofs, for example, are air-filled floating
                plastic discs anchored to plexiglass walls.
              </p>
              <p>
                In addition to being a haven for hungry and thirsty visitors,
                Schaefer Center also has become the sports center of the fair.
                Each weekend, famous sports personalities such as Y.A. Tittle,
                Rocky Marciano and Johnny Unitas play host at Schaefer Center,
                signing thousands of autographs, posing for pictures and talking
                sports with Schaefer guests.
              </p>
              <p>
                The Schaefer beer served here at Schaefer Center is the result of
                over two centuries of brewing skill. This same fine beer is
                available in stores and taverns in 14 Eastern states.
              </p>
            </div>

            <div className={styles.historyBlock}>
              <Image
                src="/images/schcen08/schcen16.jpg"
                alt="Schaefer Brothers / Original Brewery"
                width={430}
                height={218}
                className={styles.historyImg}
                unoptimized
              />
              <div className={styles.historyCols}>
                <p>
                  When Frederick and Maximillian Schaefer came to America in 1842
                  from Wetzlar, Germany, they brought with them a new method of
                  brewing beer. This cold storage process (lagering) produced a
                  sparkling product of nature far superior to the&quot;common&quot;
                  beer of that day.
                </p>
                <p>
                  For three years after its founding in 1842, The F. &amp; M.
                  Schaefer Brewing co. produced its larger beer in a small brewery
                  on Broadway and Nineteenth Street in New York City. However,
                  lager plant facilities became necessary in 1845 and again in
                  1849.
                </p>
              </div>
            </div>

            <div className={styles.historyBlock}>
              <Image
                src="/images/schcen08/schcen17.jpg"
                alt="51st Street Brewery / Albany Brewery"
                width={430}
                height={218}
                className={styles.historyImg}
                unoptimized
              />
              <div className={styles.historyCols}>
                <p>
                  The increasing demand for Schaefer Beer in New York prompted the
                  company to build a new brewery on Park Avenue and 51st Street in
                  1849 where they remained for 67 years. In 1916, Schaefer secured
                  property in Brooklyn and later built the most modern plant of its
                  day.
                </p>
                <p>
                  The F. &amp; M. Schaefer Brewing Co. became a two-plant
                  operation in 1951 with the purchase of a brewery in Albany,
                  N.Y. This enabled the company to provide faster and better service
                  for a growing market, not only in upstate New York, but all over
                  New England as well.
                </p>
              </div>
            </div>

            <div className={styles.historyBlock}>
              <Image
                src="/images/schcen08/schcen18.jpg"
                alt="Buffalo Malting Plant / Baltimore Brewery"
                width={430}
                height={218}
                className={styles.historyImg}
                unoptimized
              />
              <div className={styles.historyCols}>
                <p>
                  In 1961, the company acquired a malting plant in Buffalo, N.Y.,
                  making it possible to produce its own quality barley malt.
                </p>
                <p>
                  Schaefer in 1963 became a three-plant operation when it purchased
                  a brewery in Baltimore, Md., to strengthen its southern markets.
                </p>
              </div>
            </div>

            <div className={styles.historyBlock}>
              <Image
                src="/images/schcen08/schcen19.jpg"
                alt="Historical Exhibits / Brooklyn HQ"
                width={430}
                height={218}
                className={styles.historyImg}
                unoptimized
              />
              <div className={styles.historyCols}>
                <p>
                  Proud of its tradition, Schaefer takes an active community role
                  with historical exhibits in Plymouth and Sturbridge, Mass., and
                  Mystic, Conn.
                </p>
                <p>
                  Today, The F. &amp; M. Schaefer Brewing Company - with
                  headquarters in Brooklyn, N.Y. - has become the largest regional
                  brewer in the United States.
                </p>
              </div>
            </div>

            <div className={styles.glassesRow}>
              <div>
                <p>
                  <strong>SCHAEFER CENTER SOUVENIR BEER GLASSES</strong> -
                  Remember your visit to Schaefer Center and the New York
                  World&apos;s Fair with a set of six attractively designed
                  glasses. No package to carry home - just ask for an order blank
                  and the souvenir glasses will be mailed to any address you
                  choose. The cost is $2.50, including postage and handling.
                </p>
                <p className={styles.glassesFine}>
                  The F. &amp; M. Schaefer Brewing Co., New York &amp; Albany,
                  N.Y. and Baltimore, Md.
                </p>
              </div>
              <Image
                src="/images/schcen08/schcen20.jpg"
                alt="Souvenir Glass"
                width={78}
                height={157}
                className={styles.glassImg}
                unoptimized
              />
            </div>

            <p className={styles.source}>
              SOURCE: 1965 Schaefer Center Souvenir Pamphlet
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/schcen07"
        explicitPrevious
        overviewHref="/schcenoverview"
        nextHref="/schcen09"
      />
    </>
  );
}
