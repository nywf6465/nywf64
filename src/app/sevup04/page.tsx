import type { Metadata } from "next";
import Image from "next/image";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sevup04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Ground Uniting — Seven-Up — nywf64.com",
  description:
    "Ground Uniting ceremony pamphlet for the Seven-Up Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up — Pamphlet: Ground Uniting.
 * Body from legacy sevup04.html (custom pamphlet transcript).
 *
 * Stack: hero → SevupNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Sevup04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Seven-Up">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sevupoverview/hero-banner.jpg"
            alt="Seven-Up at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SevupNavChrome />

      <article className={styles.article} aria-labelledby="sevup04-title">
        <header className={styles.titleBar}>
          <h1 id="sevup04-title" className={styles.titleBarMain}>
            Pamphlet: Ground Uniting
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup04/sevup04.jpg"
                alt="Artist's rendering of The Seven-Up Pavilion"
                width={599}
                height={403}
                className={styles.photoImgPlain}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Artist&apos;s rendering of The Seven-Up Pavilion which will feature
              twenty-four overhead shells and a tower topped by a four-faced clock
              and a sphere bearing the Seven-Up emblem. Designers Becker &amp;
              Becker &amp; Associates, Inc. conceived the plans for this
              distinctive exhibit.
            </figcaption>
          </figure>

          <hr className={styles.rule} />

          <div className={styles.body}>
            <p>
              Excerpts of transcription of remarks made by Seven-Up and
              World&apos;s Fair officials at Seven-Up Ground Uniting Ceremonies,
              New York World&apos;s Fair, Wednesday, May 15, 1963.
            </p>
            <p>
              MR. MARTIN STONE [Director, Industrial Section]: The Seven-Up
              Company has been through a long process of preparation for this
              occasion and I see here many people who have worked long and hard
              to make this possible -- particularly the representatives of the
              J. Walter Thompson Co., Mr. Strouse and his representatives, Mr.
              Jardine and Ted Royal, who initiated these discussion in behalf of
              the Fair, and The Seven-Up Company. We are most grateful to them
              for their help, encouragement and advice. And for Seven-Up, Ben
              Wells, vice president of Sales and Advertising; Howard Ridgway,
              vice president of The Seven-up Company and president of The
              Seven-Up Export Corporation; John Furnas; and of course, Nate
              Becker, who still has his job before him. We thank them all for
              the long, sometimes difficult but happy outcome of this occasion.
            </p>
            <p>
              For the Fair I would simply like to say that I have seldom been
              more impressed with any company as I have been with The Seven-Up
              Company, particularly the integrity and the desire to participate
              on a cooperative basis with the Fair. I think Mr. Wells is a
              standard of Seven-Up&apos;s integrity. I would like now to
              introduce the vice president in charge of Sales and Advertising of
              The Seven-Up Company, Mr. Ben Wells.
            </p>
          </div>

          <div className={styles.spread}>
            <div className={styles.spreadPhotos}>
              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/sevup04/sevup05.jpg"
                    alt="Ground uniting ceremony"
                    width={290}
                    height={222}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>
                  Mr. Howard Ridgway, vice president of The Seven-Up Company and
                  president of The Seven-Up Export Corporation, performing the
                  &quot;ground uniting&quot; for The Seven-Up Exhibit. Shown with
                  Mr. Ridgway are children of officials of various embassies with
                  samples of their native earth, and to the right is Mr. Ben
                  Wells, vice president in charge of Sales and Advertising of The
                  Seven-Up Company.
                </figcaption>
              </figure>

              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/sevup04/sevup06.jpg"
                    alt="Discussing the model of The Seven-Up Exhibit"
                    width={290}
                    height={209}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>
                  Discussing the model of The Seven-Up Exhibit are: (left to
                  right) Mr. Howard Ridgway, vice president of The Seven-Up
                  Company and president of The Seven-Up Export Corporation;
                  General William E. Potter, executive vice president of the Fair;
                  Mr. Ben Wells, vice president in charge of Sales and Advertising
                  of The Seven-Up Company; Mr. Nathaniel Becker, designer of the
                  pavilion; and Mr. Martin Stone, director of the fair&apos;s
                  Industrial Section.
                </figcaption>
              </figure>
            </div>

            <div className={styles.spreadText}>
              <p>
                MR. BEN WELLS: For this traditional ceremony to launch a new
                edifice there is no spade, shovel or spoon -- not even a swizzle
                stick to dig with. Customarily, the symbolic turning-up of earth
                by amateur diggers opens the way for construction. Everyone is
                thinking more of the structure-to-be than of the dirt that gives
                way for it. The structure embodies plans and hopes and dreams. It
                is the dream of what will occupy the space that concerns us now.
                So rather than digging, let&apos;s visualize the dream.
              </p>
              <p>
                The pavilion was conceived and translated into drawings and
                specifications by Becker &amp; Becker &amp; Associates, Inc.,
                designers. As construction proceeds, the area will sprout a bevy
                of domes resembling billowing canopies tied to earth at the four
                corners, in designs of varied pastel shades in harmony with the
                color scheme of the exhibit motif.
              </p>
              <p>
                The graceful 110-foot tower holds aloft a clock with four faces
                in a ball and another ball with the Seven-Up insignia facing four
                ways, so that Fairgoers throughout the area can look up and see
                what time it is.
              </p>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              Each dome shelters an area of 600 sq. ft and there are twenty-four
              such domes around the main building interspersed with fountains
              which convert to stages for musicians and international
              entertainment provided by John Krimsky Productions.
            </p>
            <p>
              This is a joint project of The Seven-Up Company, The Seven-Up
              Export Corporation, and six franchised Developers of the
              Metropolitan New York area; the Seven-Up Bottling Companies of
              Brooklyn, Norwalk, Connecticut, and Newark, Hackensack, Plainfield,
              and Washington, New Jersey, The Seven-Up New York World&apos;s Fair
              Associates.
            </p>
            <p>
              The designer&apos;s drawings give these domes the mundane working
              name of &quot;dining shells.&quot; Under each dome there are tables
              and chairs, designed by the late Eero Saarinen. To these airy
              refectories the guests bring their trays from the service counters
              in the central building where they make their selections of
              sandwiches from the Brass Rail and Seven-Up -- an inevitable
              choice.
            </p>
            <p>
              So Seven-up makes its contribution to the theme of the Fair --
              Peace through Understanding. The universal taste appeal of this
              truly international soft drink points up the common likes of people
              wherever they live and whatever their nationality. Our
              materialistic purpose in this exhibit is, of course, to demonstrate
              the properties of Seven-Up for thirst-quenching refreshment, for
              drinking at mealtime, and the affinity of Seven-Up for food. Our
              idealistic purpose is to demonstrate the world community of
              comestibles and the good eatables and drinkables we have to share
              with each other. Perhaps a common denominator of taste -- a soft
              drink -- can be a symbol of international unity.
            </p>
            <p>
              As a tangible manifestation of that unity, we have arranged a
              ceremony which deviates from ground-breaking. It is &quot;ground
              uniting.&quot; Soil from lands around the world has been shipped to
              the headquarters of The Seven-Up Export Corporation, in New York.
            </p>
            <p>
              The Seven-Up Export Corporation asked its franchised Developers in
              some fifty countries to send samples of their native earth. We are
              going to unite this good earth from other nations with the soil of
              the United States. The imported soil will be reinfused with
              growth-producing elements and the amalgam will be used for the
              plants and flower beds in the landscaping of the Seven-Up
              International Sandwich Gardens.
            </p>
            <p>
              One more jar is being added by The Seven-Up Company -- two pounds
              of soil from the site of the Gateway Arch rising on the banks of
              the Mississippi in downtown St. Louis. The Seven-Up Company is
              located in St. Louis, where Seven-Up began over thirty years ago,
              and this soil represents the 500 Seven-Up franchised Developers in
              the United States.
            </p>
            <p>
              This is a <em>uniting</em> rather than a <em>breaking</em> of
              ground. On behalf of Mr. H.C. Grigg, president of The Seven-Up
              Company, and The Seven-Up New York World&apos;s Fair Associates, we
              unite these pieces of earth from the global sphere. Trusting in the
              concept of &quot;strength in unity,&quot; Seven-Up is{" "}
              <em>adding</em> earth rather than taking it away from this Fair
              site. We hope and will endeavor to make the Seven-Up exhibit at the
              New York World&apos;s Fair truly a contribution to &quot;Peace
              through Understanding.&quot;
            </p>
          </div>

          <p className={styles.source}>
            SOURCE: Ground Uniting Brochure, The Seven-Up Company
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sevup03"
        explicitPrevious
        overviewHref="/sevupoverview"
        nextHref="/sevup05"
      />
    </>
  );
}
