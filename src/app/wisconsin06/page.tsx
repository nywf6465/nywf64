import type { Metadata } from "next";
import Image from "next/image";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wisconsin06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Figures Never Lie — Wisconsin — nywf64.com",
  description:
    "Figures Never Lie — Wisconsin Pavilion press release — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin — Figures Never Lie (press release essay).
 * Body from legacy wisconsin06.html.
 *
 * Stack: hero → WisconsinNavChrome → navy title → article → Nav2Bar.
 */
export default function Wisconsin06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Wisconsin">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wisconsinoverview/hero-banner.jpg"
            alt="Wisconsin pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WisconsinNavChrome />

      <article className={styles.article} aria-labelledby="wisconsin06-title">
        <header className={styles.titleBar}>
          <h1 id="wisconsin06-title" className={styles.titleBarMain}>
            Figures Never Lie
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.pressRelease}>
            <div className={styles.pressHeader}>
              <div className={styles.pressLogo}>
                <Image
                  src="/images/wisconsin06/logo64.jpg"
                  alt=""
                  width={120}
                  height={147}
                  unoptimized
                />
              </div>
              <dl className={styles.pressLetterhead}>
                <dt>NEW YORK WORLD&apos;S FAIR 1964-1965 CORPORATION</dt>
                <dt>INTERNATIONAL EXPOSITION AT FLUSHING MEADOW PARK</dt>
                <dt>FLUSHING 52, N.Y. TELEPHONE AREA CODE 212-WF4-1964</dt>
              </dl>
            </div>

            <div className={styles.pressPresident}>
              <p>ROBERT MOSES</p>
              <p>PRESIDENT</p>
            </div>

            <div className={styles.newsRow}>
              <p className={styles.newsLabel}>NEWS:</p>
              <p className={styles.newsDate}>August 5, 1964</p>
            </div>

            <div className={styles.inquiries}>
              <span className={styles.inquiriesLabel}>REFER INQUIRIES TO:</span>
              <ul className={styles.inquiriesList}>
                <li>Peter McDonnell - WF 4-6531</li>
                <li>Jerome Edelbert - WF 4-6541</li>
                <li>Joyce Martin - WF 4-6543</li>
              </ul>
            </div>

            <p className={styles.releaseLabel}>FOR IMMEDIATE RELEASE</p>

            <div className={styles.body}>
              <p>
                NEW YORK WORLD&apos;S FAIR, Aug. 5 -- They say that figures never
                lie. That&apos;s why authorities at the Wisconsin Pavilion at the
                New York World&apos;s Fair are proclaiming far and wide the huge success
                of their exhibit.
              </p>
              <p>
                Wisconsin apparently has come up with a formula that is responsible
                for the popularity of its attractions, according to General William
                E. Potter, Executive Vice President of the World&apos;s Fair. &quot;They
                provide Fairgoers with good food at low prices, wholesome entertainment,
                a trout fishing pool, and even a children&apos;s theatre, among other
                things,&quot; he says.
              </p>
              <p>
                &quot;Wisconsin&apos;s participation is geared to the old adage,
                &apos;You find a need and fill it.&apos; That&apos;s exactly what they&apos;ve done,&quot;
                added the Fair official, who is in charge of state exhibits.
              </p>
              <p>
                &quot;Since opening day, we&apos;ve had more than 4-million visitors,
                have sold more than 1-million steaks in our Tad&apos;s Restaurant,
                and experienced difficulty accommodating the throngs trying to
                get into our old-fashioned Beer Garden,&quot; says pavilion president
                Charles (Chuck) Saunders of Green Bay, Wis.
              </p>
              <p>
                One of the last to sign for space at the Fair, six months
                before opening date, the Wisconsin Pavilion is one of the top
                attractions. it features an outdoor theme and displays the state&apos;s
                principal assets, from fishing to beer and logging to cheese.
              </p>
              <p>
                In its 59,336 square feet of space, the Pavilion has a complex
                of five buildings with 40,000 square feet under a roof, a good
                thing when inclement weather prevails.
              </p>
              <p>
                Tad&apos;s Restaurant, decorated in a &quot;Gay 90&apos;s&quot; motif
                is one of the principal draws. It features steaks (imported from
                Wisconsin), flame-grilled to individual taste, with a salad,
                baked potato and garlic-toasted roll, for only $1.19. The lines
                are long but the wait is never more than fifteen minutes, according
                to Saunders.
              </p>
              <p>
                Wisconsin&apos;s famous brewing industry is represented to the
                Fairgoer in an old-fashioned Beer Garden with sawdust floor,
                chilled steins and banjo music. Manned entirely by college boys
                and girls, the Beer Garden is probably the liveliest place at
                the Fair, drawing heavily from the young element, particularly
                the collegians.
              </p>
              <p>
                Here you can get a beef or ham dinner for $1.95. No food is
                sold after 8 P.M., only beer. With the Red Garter Banjo Band
                furnishing the exciting music, the Fairgoer gets into the mood
                instantly, and the hand-slapping and stomping goes on until 2
                A.M. There&apos;s no dancing. As a Dartmouth student said, &quot;This
                is an inexpensive way of being together in an atmosphere we enjoy
                so much.&quot;
              </p>
              <p>
                Another attraction is the Exhibit Pavilion, a rectangular
                building that features displays of outstanding manufactured products
                imaginatively displayed with Wisconsin&apos;s vast recreational, agricultural
                and industrial facilities. Here you can buy cheese, pizza, milk
                shakes, waffles, ice cream, fudge and many other items using
                Wisconsin-only material and products. The Children&apos;s Theatre,
                showing, though cartoons, the manufacturing of hot dogs, sausages
                and other meat products made by Oscar Mayer is always jammed
                with youngsters.
              </p>
              <p>
                There are terraces for outdoor dining near a reflecting pool,
                where fly-casting for choice trout, eight to fourteen inches,
                is offered. For 75 cents, the angler gets rod and reel and a
                baited hook and is given fifteen minutes to lure any of the Wisconsin
                trout, which is then fried for him. A tagged fish nets the lucky
                angler a handsome prize. The pool is stocked with more than 350
                fish.
              </p>
              <p>
                Another highlight of the Wisconsin exhibit is the world&apos;s
                largest cheese, a 17 1/2-ton Cheddar, made near Denmark, Wis.,
                to exemplify the state&apos;s role as the &quot;Cheese Manufacturing
                Center of the Nation.&quot; It is 6 1/2 feet wide, 5 1/2 feet
                high and 14 1/2 feet long, and actually weighs 14,591 pounds.
              </p>
              <p>
                The little shops, such as the &quot;Indian Trading Post&quot;,
                the &quot;Cheese Shack&quot;, the &quot;Sugar House&quot;, the
                &quot;Souvenir Store&quot;, are busy selling Wisconsin items.
                There&apos;s also the Wisconsin Rotunda, an impressive glass tepee-shaped
                building symbolizing the state&apos;s Indian lore. This uniquely designed
                building, 48 feet in diameter, 46 feet high and topped by a spire
                lettered &quot;Wisconsin,&quot; soars 80 feet above the ground.
                It contains the official state exhibit and features Wisconsin&apos;s
                recreational, agricultural and industrial facilities.
              </p>
              <p>
                What makes the Wisconsin Pavilion&apos;s success more noteworthy
                is the fact that it is financed entirely by private enterprise.
                Even though the contract was signed less than 6 months before
                the Fair&apos;s opening, the investors were able to accomplish all
                of this without any state appropriation for the construction,
                operation, maintenance and demolition of the building at the
                end of the 1965 Fair season. According to President Saunders,
                the investment is $1,200,000.
              </p>
              <p>
                In the words of Saunders, who has been participating in county
                and state fairs, including one in Hawaii and the World&apos;s Fair
                in Seattle, for fifteen years, &quot;You&apos;ll never see another
                fair like that in New York. For $2.00 you&apos;re getting a $20 bill&apos;s
                worth! You get your biggest dollar value here. You don&apos;t have
                to spend more than you choose.&quot;
              </p>
            </div>

            <p className={styles.source}>
              SOURCE: New York World&apos;s Fair Corporation Press Release -
              presented Courtesy John Pender Collection
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/wisconsin05"
        nextHref="/wisconsin07"
      />
    </>
  );
}
