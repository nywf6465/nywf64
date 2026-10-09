import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FranceNavChrome } from "@/components/FranceNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./france05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A World's Fair Phantom — France — nywf64.com",
  description:
    "A World's Fair Phantom — the unbuilt Pavilion of France at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * France — A World's Fair Phantom.
 * Body from legacy france05.html (custom essay / souvenir feature).
 *
 * Stack: hero → FranceNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Legacy wording (Mirriam-Webster, Corpation, expore, It's image, etc.)
 * is preserved. Internal links use Next.js Link (not absolute nywf64.com URLs).
 */
export default function France05Page() {
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

      <article className={styles.article} aria-labelledby="france05-title">
        <header className={styles.titleBar}>
          <h1 id="france05-title" className={styles.titleBarMain}>
            A World&apos;s Fair Phantom
          </h1>
        </header>

        <div className={`${styles.articleInner} ${styles.body}`}>
          <p>
            What the heck <em>is</em> a &quot;<em>World&apos;s Fair
            Phantom</em>?&quot; Mirriam-Webster defines a phantom as
            &quot;<em>something apparent to sense but with no substantial
            existence</em>.&quot; The 1964-1965 New York World&apos;s Fair gave
            us more than a few phantoms to explore -- pavilions and exhibits that
            were apparent to <em>sense</em> but had no <em>substantial</em>{" "}
            existence. They failed to materialize for one reason or another -
            primarily due to a lack of planning or, more likely, a lack of
            funding; for exhibiting at the New York World&apos;s Fair was a very
            expensive proposition! It&apos;s fun and interesting to look back to
            see what exhibits we can sense without there being anything of
            substance to see. <BrandMark /> took a look at a number of these New
            York World&apos;s Fair Phantoms in our feature presentation{" "}
            <Link href="/building09">Building the Fair</Link>. And now, thanks to
            Mike Kraus, we can expore in-depth one of the most interesting
            phantoms of the Fair - the Pavilion of France.
          </p>

          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france05/building36.jpg"
                alt="Color Artist's Rendering"
                width={300}
                height={219}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              The <em>Phantom</em> Pavilion of France
            </figcaption>
          </figure>

          <p>
            What makes the Pavilion of France different from most other Fair
            phantoms is that something tangible actually existed at one time.
            While many of the Fair&apos;s phantoms never advanced beyond the
            concept stage others, like the Pavilion of France and the{" "}
            <Link href="/worfoo01">World of Food</Link>, actually had ground
            broken, steel erected and exhibits prepared to be installed in them.
            The other tangible phantom, the{" "}
            <Link href="/argent01">Pavilion of Argentina</Link>, was fully
            completed yet Argentina never took occupancy of the building! France
            did eventually have a presence at the Fair and in our companion piece
            on French participation, <BrandMark /> takes a look at{" "}
            <Link href="/pavpar01">
              The Pavilion of Paris and French Industry
            </Link>
            , the privately sponsored pavilion that fulfilled some of the promise
            of the Pavilion of France but was no where near as ambitious or
            successful as the planners for the Pavilion of France had sought for
            their pavilion to be!
          </p>

          <p>
            Why did the Pavilion of France disappear like a ghost into thin air
            between February 3rd and Labor Day of 1963? Bruce Nicholson in his
            book <em>Hi Ho, Come to the Fair</em> said that the government of
            France had no problem with a privately sponsored pavilion
            representing France as long as &quot;it was made perfectly clear that
            it was in no way connected with the Government of France or the
            French people.&quot; France being a signatory to the charter of the
            Bureau of International Expositions, the World&apos;s Fair
            sanctioning body that was publicly boycotting the &apos;64 Fair, and
            host of the headquarters of that organization in Paris, no doubt
            found this a political necessity. From that we can glean that
            government interference didn&apos;t bring about its doom. But perhaps
            French pride made potential exhibitors less than enthused about
            supporting a decidedly <em>non-French</em> French pavilion?
            It&apos;s obvious that International Expositions Corporation had
            undertaken a massive and very expensive project in the Pavilion of
            France. Perhaps the project was just <em>too</em> ambitious and
            costly and Anthony B. Golff found it impossible to find the financial
            backers or willing French exhibitors to make his project a reality.
            What we know for sure is that by June 19, 1963, International
            Expositions Corporation and Anthony B. Golff and his magnificent
            Pavilion of France were out and a new contract between the
            World&apos;s Fair Corpation and Exhibitions de France, Inc. had been
            signed with Mr. Jacques M. Fisher as Director General of{" "}
            <Link href="/pavpar01">
              The Pavilion of Paris and French Industry
            </Link>
            . <em>That</em> would now be the official name for French
            participation in the Fair. On Opening Day, 1964, the plot allotted to
            the Pavilion of France was simply the site of a vacant lot and it
            would remain so throughout the run of the Fair.
          </p>

          <figure className={styles.figure} style={{ maxWidth: 471 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france05/france20.jpg"
                alt="France as a Vacant Lot"
                width={471}
                height={239}
                className={styles.photoImgPlain}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              The site of the Pavilion of France at the New York World&apos;s
              Fair in 1964 and 1965 remained a vacant lot throughout the run of
              the Fair. It&apos;s image, however, lived on!
            </figcaption>
            <p className={styles.source}>
              SOURCE: New York World&apos;s Fair Publicity Photograph presented
              courtesy Craig Bavaro collection
            </p>
          </figure>

          <p>
            The phantom Pavilion of France shares a particular distinction with
            only three other phantoms of the Fair. It&apos;s image, along with
            that of the World of Food, the Arch of the Americas and the
            World&apos;s Fair Assembly Hall, appears repeatedly on promotional
            brochures and souvenirs of the Fair before and throughout the 1964
            and 1965 seasons of operation. Peter and Wendy, when playing their{" "}
            <em>Official New York World&apos;s Fair Game</em>, must&apos;ve
            wondered why they didn&apos;t remember seeing the pyramid, rectangle
            and egg-shaped buildings that were shown on their playing board.
          </p>

          <p>
            <BrandMark /> takes a look at some of the souvenirs featuring the
            Pavilion of France and the other well-known World&apos;s Fair
            Phantoms ...
          </p>

          <hr className={styles.rule} />

          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france05/france15.jpg"
                alt="World's Fair Game"
                width={600}
                height={602}
                className={styles.photoImgPlain}
                unoptimized
              />
            </span>
          </figure>

          <p className={styles.souvenirNote}>
            Where the heck <u>was</u> <em>that</em>???
          </p>
          <p className={styles.souvenirBody}>
            Did you play the World&apos;s Fair board game with your friends and
            family in the summer of 1965 after you got back from your trip to the
            Fair? You could spot three World&apos;s Fair Phantoms on the cover of
            Milton Bradley&apos;s Official New York World&apos;s Fair Game that
            you no doubt missed on your visit. <em>Left</em> is the Pavilion of
            France. <em>Center</em> is the Arch of the Americas. <em>Right</em>{" "}
            is the World&apos;s Fair Assembly Hall. Inside the box the playing
            board features a large image of the World of Food pavilion too! And
            there&apos;s phantom France again on a jigsaw puzzle from the Fair
            shown below:
          </p>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france05/france21.jpg"
                alt="World's Fair Puzzle"
                width={500}
                height={352}
                className={styles.photoImgPlain}
                unoptimized
              />
            </span>
          </figure>

          <hr className={styles.rule} />

          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france05/france17.jpg"
                alt="World's Fair Brochure"
                width={600}
                height={746}
                className={styles.photoImgPlain}
                unoptimized
              />
            </span>
          </figure>

          <div className={styles.brochureBlock}>
            <span className={styles.brochureCover}>
              <Image
                src="/images/france05/france16.jpg"
                alt="World's Fair Brochure Cover"
                width={120}
                height={201}
                className={styles.photoImgPlain}
                unoptimized
              />
            </span>
            <p className={styles.brochureHeading}>
              Planning a trip to the Fair???
            </p>
            <p className={styles.souvenirBody}>
              Well if you&apos;re using the brochures you got in the mail from
              the people at the New York World&apos;s Fair and you&apos;re looking
              to explore any of these fantastic pavilions featured on artist W.
              D. Shaw&apos;s beautiful interpretation of the exposition you&apos;re
              going to need good walking shoes. You&apos;re going to have a though
              time finding (<em>from left to right</em>) the Pavilion of France,
              Arch of the Americas, World&apos;s Fair Assembly Hall and the World
              of Food!
            </p>
          </div>

          <hr className={styles.rule} />

          <p className={styles.flintstonesHeading}>
            The Flintstones saw them from the air in 1965 ...
          </p>
          <p className={styles.flintstonesHeading}>
            there&apos;s Wilma pointing them out!
          </p>
          <p className={styles.flintstonesSub}>Did you?</p>

          <div className={styles.flintstones}>
            <figure className={styles.figure} style={{ maxWidth: 300, margin: 0 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/france05/france19.jpg"
                  alt="Comic Book - Flintstones"
                  width={300}
                  height={426}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 250, margin: 0 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/france05/france18.jpg"
                  alt="Detail of Phantoms"
                  width={250}
                  height={241}
                  className={styles.photoImgThick}
                  unoptimized
                />
              </span>
            </figure>
          </div>

          <hr className={styles.rule} />

          <div className={styles.webmasterNote}>
            <p>
              <strong>Webmaster&apos;s note... </strong>
              Thank you, Mike Kraus, for providing the material for the{" "}
              <BrandMark />. feature on the Pavilion of France - one of the
              Fair&apos;s most interesting <em>phantoms</em>! True story: Among
              the first collectibles I ever acquired of the &apos;64 World&apos;s
              Fair was the Groundbreaking Brochure for the Pavilion of France.
              When I saw my first aerial view of the Fairgrounds, I got very
              frustrated trying to locate the pyramid, rectange and ellipsoid
              that were featured on the cover of my brochure. Had I only known
              you then Mike, you could have saved me some time!
            </p>
            <p>
              In the early years of <BrandMark />, Mike hosted a companion
              website called{" "}
              <strong style={{ color: "#ff0000" }}>nywf64photos.com </strong>
              and some might remember that website and Mike&apos;s great photo
              collection. Mike donated his site to <BrandMark /> and you can
              expect to see his photos again on upcoming feature presentations
              and on updates to existing pavilion features. Look for the{" "}
              <strong>
                <em>Mike Kraus Gallery</em>
              </strong>{" "}
              when visiting the pavilion presentations here at <BrandMark />.
            </p>
            <p>
              Without the contributions of Mike, Craig Bavaro, Bill Cotter, Gary
              Holmes, Eric Paddon and so many others who&apos;ve contributed to
              this website, the content would not be nearly as thorough or
              intersting. My thanks again to you all.
            </p>
            <div className={styles.webmasterSign}>
              <p>Bill Young</p>
              <p>February, 2010</p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/france04"
        explicitPrevious
        overviewHref="/franceoverview"
        nextHref="/franceoverview"
      />
    </>
  );
}
