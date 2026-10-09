import type { Metadata } from "next";
import Image from "next/image";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wisconsin08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Wisconsin Pavilion: A World's Fair Legacy — Wisconsin — nywf64.com",
  description:
    "The Wisconsin Pavilion: A World's Fair Legacy — essay on the pavilion after the Fair — nywf64.com.",
};

/**
 * Wisconsin — World's Fair Legacy essay.
 * Body from legacy wisconsin08.html.
 */
export default function Wisconsin08Page() {
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

      <article className={styles.article} aria-labelledby="wisconsin08-title">
        <header className={styles.titleBar}>
          <h1 id="wisconsin08-title" className={styles.titleBarMain}>
            The Wisconsin Pavilion: A World&apos;s Fair Legacy
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/wisconsin08/wi02.jpg"
                alt="Ivan Wilcox"
                width={300}
                height={401}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.source}>
              Source: New York Daily News, Friday October 22, 1965
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              Among the 13 million visitors to the Wisconsin Pavilion during the two year run of the New
              York World&apos;s Fair was Ivan C. Wilcox, a blacksmith from the small
              southwestern Wisconsin farming community of Boscobel . Mr. Wilcox was impressed with
              the Fair and liked the Wisconsin Pavilion. Inquiring what was
              to become of the structure at the close of the Fair, he was told
              the state planned to demolish the Pavilion and sell it for scrap.
            </p>
            <p>
              Mr. Wilcox was interested in purchasing the U-shaped exhibition building thinking it would
              make an excellent workshop. He was told that that portion of
              the exhibition building had already been sold but the Tee-pee
              shaped Rotunda was still available.
            </p>
            <p>
              At the close of the Fair Wilcox offered the state a certified check for $5000.00 to buy the Rotunda structure and the state accepted the offer. Before union clearance problems could arise, his crew (including members of his family) had dismantled the Rotunda and had it on four flatbed trucks en route to Boscobel . Only 80 miles from Boscobel, the flatbed carrying
              the blue and gold glass panels that formed the giant &quot;W&quot;
              at the top of the Rotunda hit the underside of an overpass on
              the outskirts of Madison, Wisconsin and broke off the top 12&quot;
              of every glass panel! Wilcox had to replace all of the glass
              prior to any reconstruction! By the time he got the pavilion
              home his total cost had risen to $12,000.00.
            </p>
            <p>
              However he was confident that local support could be found in Boscobel to re-erect the
              pavilion and use it as a tourist attraction for the area. That
              local support never materialized and Wilcox was left holding
              the bag containing a white elephant World&apos;s Fair pavilion and
              $12,000.00 in expenses!
            </p>
            <p>
              Wilcox put the pavilion up for sale with the condition that the structure had to remain
              in Wisconsin in its entirety. He eventually turned down several
              offers to purchase parts of the pavilion including one for $8,000.00
              for the mosaic tile and Indian inscription legends surrounding
              the base of the Rotunda.
            </p>
            <p className={styles.sectionHeading}>
              Central Wisconsin Broadcasting gets a new home
            </p>
            <p>
              Finally, in 1966, Central Wisconsin Broadcasting, Inc. offered to buy the pavilion for
              $41,000.00. This price included construction of the pavilion
              Rotunda as it appeared at the Fair in New York. Wilcox accepted
              the offer and in June 1967 the Wisconsin Pavilion Rotunda was
              re-constructed on a hill alongside State Highway 10, just to
              the east of the west-central Wisconsin town of Neillsville . The pavilion became the home
              of WCCN AM-FM Radio and a gift shop featuring &quot;The World&apos;s Fairest
              Gifts.&quot; Billboards for miles around told motorists to &quot;Visit
              WCCN&apos;s Wisconsin Pavilion from the New York World&apos;s Fair.&quot;
            </p>
            <p className={styles.sectionHeading}>The Wisconsin Pavilion today</p>
            <p className={styles.clearfix}>
              Those billboards have faded over the years as have the memories of the 1964/1965 New York
              World&apos;s Fair for today&apos;s drivers. Most not familiar with the
              area wonder what the big, odd-shaped, yellow building is off
              in the distance when approaching Neillsville from the east on
              Highway 10. It&apos;s only as they get close to the driveway to the
              building that they see the sign that says &quot;Wisconsin Pavilion
              - N.Y. World&apos;s Fair.&quot;
            </p>
            <p className={styles.clearfix}>
              <span className={`${styles.photoFrame} ${styles.floatLeft}`}>
                <Image
                  src="/images/wisconsin08/wiswccn2.jpg"
                  alt="Postcard"
                  width={300}
                  height={193}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              WCCN&apos;s Wisconsin Pavilion has changed only slightly
              since it was set on this spot in 1967. A low rectangular building
              housing new studios was added several years ago. A cardboard
              replica of the 17 1/4 ton cheese (the original cheese is long
              gone having been cut up and sold at a charity auction in Eau
              Claire, Wisconsin in early 1966), along with the story of how
              it was made for the Fair, was displayed for many years inside
              the specially constructed van used to transport and display{" "}
              <em>The World&apos;s Largest Cheese</em> at the Fair and on its tours around the country
              during the Fair&apos;s off-season. Forty years of exposure to Wisconsin&apos;s
              weather resulted in major deterioration of the tractor and trailer.
              They were sold in 2005 to a collector with plans to restore them.
            </p>
            <p className={styles.clearfix}>
              Inside the pavilion is a gift shop featuring quality items made in Wisconsin -- jams,
              honey, Tee and Sweatshirts along with a variety of Wisconsin
              cheeses. You&apos;ll be able to purchase a post card or two of the
              pavilion. Elsewhere in the building you&apos;ll find the original
              scale model constructed in 1963 to sell the pavilion to potential
              exhibitors. And, in the lower level, you can view a private collection
              of New York World&apos;s Fair memorabilia.{" "}
              <span className={`${styles.photoFrame} ${styles.floatRight}`}>
                <Image
                  src="/images/wisconsin08/wiswccn1.jpg"
                  alt="Postcard"
                  width={300}
                  height={194}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </p>
            <p className={styles.sectionHeading}>How to find the pavilion</p>
            <p>
              Neillsville is a small farming community located in the beautiful west-central portion of the state of Wisconsin . It is situated almost half-way between Minneapolis/St.
              Paul, Minnesota and Madison, Wisconsin, and approximately 35
              miles east of the Highway 10 exit on Interstate I-94. The current
              owners, Kevin and Peggy Grapp, are most gracious hosts and are
              happy to share their knowledge of the building, it&apos;s rich World&apos;s
              Fair history and its legacy to the community.
            </p>
          </div>

          <p className={styles.source}>
            Source: &quot;Wisconsin at the World&apos;s Fair&quot; and &quot;World&apos;s Fair
            Legacy&quot; reprinted courtesy of the World&apos;s Fair Collector&apos;s Society, from{" "}
            <em>FAIR NEWS</em>, the journal of the World&apos;s Fair Collector&apos;s Society, Vol 22, Issue 2, March, 1990
          </p>

          <div className={styles.postcardGrid}>
            <div>
              <Image
                src="/images/wisconsin08/wi09.jpg"
                alt="Letterhead"
                width={240}
                height={385}
                className={styles.photoImg}
                unoptimized
              />
            </div>
            <div className={styles.postcardStack}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wiswccn5.jpg"
                  alt="Postcard"
                  width={300}
                  height={191}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wiswccn6.jpg"
                  alt="Postcard"
                  width={300}
                  height={193}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wiswccn3.jpg"
                  alt=""
                  width={300}
                  height={191}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <p className={styles.gridCaption}>
              <em>(top) </em>The Wisconsin Pavilion reconstruction at Neillsville
              included the addition of a lower level. A sunken rock garden
              surrounds the lower level and features beautiful shrubs, flowers,
              pools and fountains <em>(middle)</em>. For over forty years, the
              Wisconsin Pavilion displayed the specially constructed van that
              transported and exhibited &quot;The World&apos;s Largest Cheese&quot;
              at the Fair and on it&apos;s tours around the country <em>(bottom)</em>.
              Four decades of exposure to the elements eventually resulted
              in major deterioration of the vehicle. In 2005 it was sold to
              a collector who plans to restore it.
            </p>
          </div>

          <hr className={styles.rule} />

          <h2 className={styles.goldHeading}>More Wisconsin Pavilion Today</h2>

          <figure className={styles.modelFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/wisconsin08/wi10.jpg"
                alt="WI Pavilion Model"
                width={500}
                height={291}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.modelCaption}>
              The model of the rotunda was constructed in 1963 and traveled around the State promoting
              the Wisconsin Pavilion and the state&apos;s exhibit at the World&apos;s
              Fair to potential sponsors of the Pavilion in New York. The model
              is now on display on the mezzanine level of the Pavilion. This
              level was created as a part of the reconstruction of the building
              in Neillsville and did not exist at the Fair.
            </figcaption>
            <p className={styles.source}>Source: Photo Courtesy of Bradd Schiffman Collection</p>
          </figure>

          <div className={styles.photoRow}>
            <div className={styles.photoRowImg}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wi11.jpg"
                  alt="Pavilion Sign"
                  width={248}
                  height={358}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <p className={styles.photoRowText}>
              The sign along Highway 10 on the outskirts of Neillsville at the entrance to the Pavilion welcomes
              travelers to <em>WCCN&apos;s Wisconsin Pavilion from the 1964 New York World&apos;s Fair</em>.
            </p>
          </div>

          <div className={styles.photoRow}>
            <div className={styles.photoRowImg}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wi12.jpg"
                  alt="Wisconsin Pavilion in Neillsville"
                  width={360}
                  height={228}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <p className={styles.photoRowText}>
              The Rotunda structure looks very much like it did at the Fair. The long, low building to the left
              of the structure houses the radio studios.
            </p>
          </div>

          <div className={styles.photoRow}>
            <div className={styles.photoRowImg}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wi13.jpg"
                  alt="Interior lookin UP"
                  width={360}
                  height={228}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <p className={styles.photoRowText}>
              Looking up at the blue &amp; gold glass that make up the giant &quot;W&quot; at the top of the
              Rotunda. The plate-like object suspended by wire cables in the
              bottom-center supports the lofty exterior mast with the letters
              WISCONSIN.
            </p>
          </div>

          <p className={styles.source}>Source: Photos Courtesy Gary Holmes Collection</p>

          <div className={styles.photoRow}>
            <div className={styles.photoRowImg}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wi14.jpg"
                  alt="Support Pylon"
                  width={248}
                  height={360}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <p className={styles.photoRowText}>
              A closer look at the slanted pylons which support the star-patterned overhang of the roof.
            </p>
          </div>

          <div className={styles.photoRow}>
            <div className={styles.photoRowImg}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wi15.jpg"
                  alt="Indian Mosaic Inscription"
                  width={358}
                  height={228}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <p className={styles.photoRowText}>
              A closer look at the mosaic tile legend that surrounds the pavilion.
            </p>
          </div>

          <div className={styles.photoRow}>
            <div className={styles.photoRowImg}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/wisconsin08/wi16.jpg"
                  alt="Cheese-Mobile"
                  width={360}
                  height={229}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <p className={styles.photoRowText}>
              The Cheese-Mobile before it was sold in 2005. This photo gives a good look at how the cheese
              must have looked to visitors who viewed it in this same trailer
              at the World&apos;s Fair.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/wisconsin07"
        explicitPrevious
        overviewHref="/wisconsinoverview"
        nextHref="/wisconsinoverview"
      />
    </>
  );
}
