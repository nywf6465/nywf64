import type { Metadata } from "next";
import Image from "next/image";
import { FranceNavChrome } from "@/components/FranceNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./france03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fair News — France — nywf64.com",
  description:
    "Fair News coverage of the Pavilion of France at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * France — Fair News (italic title).
 * Body from legacy france03.html (custom Fair News clippings).
 *
 * Stack: hero → FranceNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * Legacy wording (Maruice, Mater) is preserved.
 */
export default function France03Page() {
  return (
    <>
      <section className={styles.hero} aria-label="France">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/franceoverview/hero-banner.jpg"
            alt="France at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FranceNavChrome />

      <article className={styles.article} aria-labelledby="france03-title">
        <header className={styles.titleBar}>
          <h1 id="france03-title" className={styles.titleBarMain}>
            Fair News
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/france03/france07.jpg"
            alt="Fair News Banner 12/20/62"
            width={600}
            height={144}
            className={styles.banner}
            unoptimized
          />

          <h2 className={styles.issueHeading}>
            French Pavilion to Feature &quot;Folies Bergere&quot; and Maxim&apos;s
            Among Famous Parisian Attractions
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/france03/france08.jpg"
                    alt="Artist's rendering of the French Pavilion"
                    width={300}
                    height={146}
                    className={styles.photoImgPlain}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>
                  Artist&apos;s rendering of the $10 million French Pavilion which
                  will feature over 200 displays dealing with the life and
                  products of France.
                </figcaption>
              </figure>
              <hr
                style={{
                  border: 0,
                  borderTop: "1px solid #999",
                  margin: "0.5rem 0 0.75rem",
                }}
              />
              <p>
                Work begins shortly on the $10 million French Pavilion which
                will rise on a 77,000 sq. ft. site in the International Area of
                the Fair. Anthony B. Golff, president of International
                Expositions Corporation which is sponsoring the exhibit, first
                revealed plans for the elaborate pavilion at a reception on
                December 6th in the Tower Suite of the Time &amp; Life Building.
              </p>
              <p>
                Two of the main attractions to be housed in the colorful complex
                of modern structures will be a modified version of the original
                &quot;Folies Bergere,&quot; imported from Paris, and Maxims
                Restaurant.
              </p>
              <p className={styles.subhead}>Cross Section of French Life</p>
              <p>
                In addition to dramatizing the best in French food and
                entertainment, Mr. Golff emphasized that there will be almost 200
                exhibits utilizing over 100,000 sq. ft. of space designed to
                depict a cross section of French life.
              </p>
              <p>
                The French Pavilion will rise on a large terraced and
              </p>
            </div>
            <div className={styles.col}>
              <p className={styles.divider}>* * *</p>
              <p>
                landscaped plot fronting on the Fair&apos;s Lunar Fountain.
                Architects for the project have used basic shapes for its three
                buildings -- rectangle, ellipse and pyramid.
              </p>
              <p>
                The raised rectangle will house Maxim&apos;s and a variety of
                industrial exhibits. The ellipse -- designed like a mammoth oval
                will be the home of the &quot;Folies Bergere.&quot;
              </p>
              <p>
                A three- dimensional animated and illuminated model of Paris --
                The City of Light -- will be presented in continuous
                twenty-minute showings in a rotunda beneath the ellipse.
              </p>
              <p>
                The third structure of the pavilion is a massive pyramid rising
                to a height of 120 feet in an avant-garde simulation of the
                Eiffel Tower.
              </p>
              <p>
                The French Pavilion will be able to feed 3,500 people at one time
                in its combined restaurant facilities.
              </p>
              <p>
                Chief consulting architect for the pavilion is Charles Rieger,
                the well-known French designer, and project architects are Katz,
                Waisman, Weber, Strauss. The construction is by Rand Construction
                Company and traffic management by International Expediters, Inc.
                Exhibit design and production is by 3-Dimension Exhibits of
                Chicago who have already leased 80,000 sq. ft. of space in Long
                Island City for the exclusive use of creating and designing
                French Pavilion exhibit displays.
              </p>
            </div>
          </div>

          <Image
            src="/images/france03/france09.jpg"
            alt="Fair News Banner 2/19/63"
            width={600}
            height={146}
            className={styles.banner}
            unoptimized
          />

          <h2 className={styles.issueHeading}>
            FRENCH PAVILION UNDER WAY AT SIGNAL FROM CHEVALIER
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <p>
                Maruice Chevalier joined Miss French Pavilion in ceremonies
                marking the first bulldozer operation at the 77,000 sq. ft. site
                of the French exhibit. &quot;It has to be beautiful,&quot;
                Chevalier said at the groundbreaking, &quot;to be in harmony with
                all the beautiful things around it.&quot;
              </p>
              <figure className={styles.figure} style={{ maxWidth: 230 }}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/france03/france10.jpg"
                    alt="Groundbreaking Ceremonies"
                    width={230}
                    height={292}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>
                  Suzanne Bernard swings ribbon-bedecked bottle of champagne to
                  break it on a bulldozer during groundbreaking ceremonies for
                  the French Pavilion. Watching Suzanne, who is Miss French
                  Pavilion, are Anthony B. Golff, president of International
                  Expositions Corp., Allen Beach, director of International
                  Exhibits, Robert Moses and Maurice Chevalier.
                </figcaption>
              </figure>
            </div>
            <div className={styles.col}>
              <p className={styles.divider}>* * *</p>
              <p>
                Fair President Robert Moses presented a silver medallion to
                Anthony B. Golff, president of International Expositions, Inc.,
                in honor of the occasion at which Ambassador Richard C.
                Patterson, Jr. acted as Mater of Ceremonies. Allen Beach,
                director of International Exhibits for the Fair, welcomed the
                group and read a cable from Governor Poletti who was out of the
                country at the time.
              </p>
              <p>
                In his own remarks, Robert Moses, president of the Fair, made the
                quote of the day when he laid to rest once and for all the B.I.E.
                ghost. &quot;As to the B.I.E.,&quot; he said, &quot;we are not,
                and never could have been, members. The New York Fair is not
                governmental, and our country could not join the B.I.E. otherwise
                than by treaty approved by the Senate. Ours is a two, not a
                one-year Fair; it operates under a charter, rules and regulations
                entirely out of the B.I.E. jurisdiction. These facts have been
                certified and publicized over and over again. The subject no
                longer constitutes news.
              </p>
              <p>
                &quot;One look about you at the multifarious activities at
                Flushing Meadow will tell you that we deal here with realities
                and the future, not with cliches, old, unhappy far-off things or
                battles long ago. We recognize past glories and memories, but our
                faces are to the future.&quot;
              </p>
            </div>
          </div>

          <p className={styles.issueNote}>
            ... 8 months later, plans have changed!
          </p>

          <Image
            src="/images/france03/france11.jpg"
            alt="Fair News Banner Labor Day/63"
            width={600}
            height={136}
            className={styles.banner}
            unoptimized
          />

          <h2 className={styles.issueHeading}>
            VARIETY OF COLORFUL ENTERTAINMENT, RIDES AND EDUCATIONAL FEATURES
            ABOUND IN FAIR&apos;S PAVILIONS
          </h2>

          <div className={styles.singleCol}>
            <p>
              <strong>
                France -- Pavilion of Paris and French Industries
              </strong>{" "}
              -- divided into sections named after the <em>quartiers</em> and
              famous avenues of the French capital: Champs Elysees, Quartier
              Latin, Rue de la Paix; the best that France has to offer in
              fashion, art, culture and consumer products.
            </p>
          </div>

          <p className={styles.source}>
            SOURCE: <em>Fair News</em> Issues - Official Newsletters of the
            1964-1965 New York World&apos;s Fair
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/france02"
        explicitPrevious
        overviewHref="/franceoverview"
        nextHref="/france04"
      />
    </>
  );
}
