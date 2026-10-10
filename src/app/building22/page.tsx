import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building22.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "What Went Wrong in Wonderland? — Building the Fair — nywf64.com",
  description:
    "What Went Wrong in Wonderland? — Gereon Zimmerman in Look Magazine, from Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — What Went Wrong in Wonderland?
 * Body from legacy building23.html (mapped to /building22 as Page 22 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building22Page() {
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

      <article className={styles.article} aria-labelledby="building22-title">
        <header className={styles.titleBar}>
          <h1 id="building22-title" className={styles.titleBarMain}>
            What Went Wrong in Wonderland?
          </h1>
        </header>

        <div className={styles.articleInner}>
          <header>
            <p className={styles.clipTitle}>Fair is Faring Fairly Well -</p>
            <p className={styles.clipTitle}>It Should Show a Profit</p>
          </header>

          <div className={styles.clipGrid}>
            <div className={styles.clipCol}>
              <p>
                NEW YORK, July 22 (AP) -- The New York World&apos;s Fair, with
                financial success already assured, has reached the half-way point
                of its first season and fair officials are sure attendance will
                pick up.
              </p>
              <p>
                The original estimate was for a total of 70 million visitors this
                year and next, with 40 million this year. So far less than 14
                million have clicked through the turnstiles.
              </p>
              <p>
                However, fair officials are not unduly concerned.They feel that
                the vacation season is just getting underway.
              </p>
              <p>
                They are also expecting New Yorkers themselves to turn out in far
                greater numbers in September when the weather is cooler and when
                the seashore and mountain week-end season is over.
              </p>
              <p className={styles.clipSubhead}>Big Shows Faring Poorly</p>
              <p>Officials announced more than a</p>
            </div>
            <div className={styles.clipCol}>
              <p>
                month ago that -- unlike most big fairs in the past -- this one
                will not only break even but actually will come out with a
                profit.
              </p>
              <p>
                Some of the concessons, however, haven&apos;t fared well. The
                water and stage show on the site of the Billy Rose Aquacade of
                the 1939-40 World&apos;s Fair and a big musical production of
                Mike Todd at the Louisiana Pavilion have closed.
              </p>
              <p>
                The giant Texas Pavilion, featuring a number of shows and
                entertainment features, has just filed a bankruptcy petition and
                the Dick Button &quot;Ice-Travaganza&quot; has been skating on
                financially thin ice.
              </p>
              <p className={styles.clipSubhead}>Wait in Line for Hours</p>
              <p>
                The fair&apos;s amusement area has been particularly hard hit.
                Visitors have been ducking it, apparently
              </p>
            </div>
            <div className={styles.clipCol}>
              <p>
                not wanting to foot the bill for children to take in the numerous
                rides and shows.
              </p>
              <p>
                Another reason is the competition from the giants of American
                industry, such as General Motors, Ford, General Electric, Bell
                Telephone, etc.
              </p>
              <p>
                They put on spectacular shows free of charge. People wait in line
                for hours to see them.
              </p>
              <p>
                There have been complaints about the food situation as to prices
                and availability of eating places. Fair officials say there are
                more than 100 restaurants, featuring everything from 25-cent hot
                dogs to high-priced gourmet items.
              </p>
            </div>
          </div>
          <p className={styles.source}>
            SOURCE: Newsclipping, July 22, 1964, Unknown source. Presented
            courtesy Bob Granata Collection
          </p>

          <figure className={styles.singleFigure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/building22/building227.jpg"
              alt="Unisphere — Day to Night sequence"
              width={400}
              height={259}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.sourceCenter}>
              SOURCE: Photography by Max Mordecai
            </p>
          </figure>

          <header className={styles.masthead}>
            <p className={styles.mastheadTitle}>
              &quot;What Went Wrong in Wonderland?&quot;
            </p>
            <p className={styles.mastheadAuthor}>
              BY GEREON ZIMMERMAN{" "}
              <small>Look Senior Editor</small>
            </p>
            <p className={styles.mastheadFrom}>
              from: <em>Look</em> Magazine, April 20, 1965 (excerpted)
            </p>
          </header>

          <div className={styles.essay}>
            <p>
              <span className={styles.dropCap} aria-hidden="true">
                T
              </span>
              HIS IS CERTAIN: At 9 a.m., Wednesday, April 21, the New York
              World&apos;s Fair will throw open the eight gates that guard the
              646-acre enclave. The 1965 season will begin. This 180-day run will
              conclude the controversial extravaganza that shoves together
              carnival, education, religion, international amity, Madison Avenue
              merchandising, some art, band music, popcorn, beer and hot dogs.
              For the public, it is a &quot;last-chance saloon.&quot; Once the
              exhibition closes, faint hope lives that such will be duplicated
              for generations -- at least not in New York City.
            </p>
            <p>
              When the gates closed on October 18, the piped music was stilled,
              the pavilions got cocoons of plastic and plywood. The exhibitors
              began to plot their moves for the 1965 edition. Some sponsors had
              good reason, for Flushing Meadow Park was, last year, a ground that
              seemed not hallowed, but jinxed. On opening day, CORE pickets
              threatened highway stall-ins to dramatize their school integration
              demands. Poetically, it rained; thousands stood in the splatter to
              hear President Lyndon B. Johnson officially open the fair. Many
              pavilions were not completed for the start -- one, the Belgian
              Village, didn&apos;t open until August.
            </p>
            <p>
              What dominated winter brooding was the head count at the gate.
              Average daily attendance was 170,000. The best single day was
              October 11, when 264,552 showed up. Before the Fair opened, the
              management announced that over 28 million tickets had been sold.
              Early estimates put the total two-season attendance at 70 to 80
              million. So 40 million seemed reasonable for 1964.
              <span className={styles.floatRight}>
                <Image
                  src="/images/building22/building226.jpg"
                  alt="Caroline Hadley with World’s Fair balloons"
                  width={200}
                  height={348}
                  className={styles.photo}
                  unoptimized
                />
              </span>
            </p>
            <p>
              What went wrong in wonderland? First, the Harlem riots undoubtedly
              affected would-be visitors to New York. Next, throughout the
              season, almost every intramural bicker was publicized. The Olympics
              of Progress -- the title is from World&apos;s Fair President Robert
              Moses -- came up like a daily Donnybrook. For example, there was
              bickering between the representatives of Jordan and the adherents
              of the American-Israel Pavilion, who differed about the intent of a
              Jordanian mural. Some exhibitors complained, seemingly with
              bullhorns, about the high cost of services required to maintain
              pavilions. One item: When an eighty-pound, 3x4-foot wooden sign blew
              down, it cost the British Lion Pub $92 to have it put back; the
              workman&apos;s lunch was in the bill. Other international
              exhibitors used their own staffs to clean their pavilions because
              of the prices charged by the Allied Maintenance Corporation, which
              had a monopoly. (This year, the showmen will have nine firms to
              choose from.)
            </p>
            <p>
              Shows like Dick Button&apos;s <em>Ice-Travaganza</em>,{" "}
              <em>Wonderworld</em> (in the Amphitheater) and{" "}
              <em>To Broadway with Love</em> went begging, and broke. The last two
              were located in the Lake Amusement Area and all were paid-admission
              shows. The Texas Pavilion folded like a campstool. Other
              exhibitors, isolated from heavy pedestrian flow, realized too late
              that they were dealing in an all-or-nothing business that allows
              for no tryouts. Without fail, everyone&apos;s beef wound up in a
              fishbowl.
            </p>
            <p>
              Moses announced that the Fair had no surplus and needed $3.5
              million to reopen. The reasons given for the $17.5 million deficit
              were low attendance, loans to sinking pavilions, high maintenance
              and security costs. He stated that New York City would not be
              repaid the $24 million advanced to the Fair Corporation for the
              permanent improvements at Flushing Meadow Park, and he refused to
              open the books for detailed audits. Whereupon five bankers on the
              advisory financial committee quit. Thomas J. Deegan, Jr., chairman
              of the executive committee, who was instrumental in getting Moses
              to be the Fair&apos;s boss, joined the financiers&apos; dissent.
              Deegan, whose firm had handled the Fair&apos;s public relations for
              five years, dropped the $300,000-a-year account. From City Hall,
              cries for a detailed audit of the closed books rose from Controller
              Abraham D. Beame.
            </p>
            <p>
              Exhibitors, who have poured hundred of millions into the Fair, are
              split on Moses&apos;s stewardship. Many offer a Moses reply --
              &quot;No comment&quot; -- on his record. One calls him &quot;A
              genius. He is brilliant, a doer. Of course, you can argue about his
              tactics.&quot; Another says, &quot;If only he&apos;d bend a
              little.&quot;
            </p>
            <p>
              Jeno Paulucci, the president of the Chun King Corporation says,
              &quot;The criticisms of the Fair&apos;s management are stupid. Our
              restaurant served 5 million people, and we came within 2 percent of
              our estimates. Going into the Fair is like going into a TV show.
              You might wind up with 10 million -- or 20 million in the audience.
              What are they out there for? Advertising. I&apos;m just a country
              boy, and the idea of 30 million people seeing our products is fine
              with me. It&apos;s a perfect extravaganza. We&apos;re going to serve
              another 5 million this season.&quot;
            </p>
            <p>
              &quot;I am emotionally involved in the Fair,&quot; says Ralph Bugli
              of the Swedish Pavilion. &quot;It is a tremendous show, and it is
              the show that counts, and not what goes on in the box office.&quot;
            </p>
            <p>
              The show is the thing ... while the aesthetic eyes are bloodshot
              from scanning the commercial aspects of this Fair (all Fairs have
              had sales as their motives), the same eyes are cleared by the
              Romanesque collection in the Spanish Pavilion, the pop-art
              photographic visions by Robert Rauschenberg at the New York State
              Pavilion, the chalky imagery of <em>Parable</em>, a movie in the
              Protestant and Orthodox Center. The skill of the glassblower in the
              West Virginia Pavilion may reassure some highbrows that automation
              has not swept away everything. Actually, the Fair spans so many
              opposites that in July of last year, the two &quot;hits&quot; were
              the <em>Pieta</em> (by Michelangelo) and the Mustang (by the Ford
              Motor Company). This disparity is the main reason for seeing the
              Fair. Here is the mid-century spread over a one-square-mile stage
              under an improbable proscenium. The millions thronging to the Fair
              are making this age and maybe changing it. Most fair goers
              don&apos;t care whether or not &quot;Robert Moses can play his own
              town&quot; -- a tough act for anyone, even in Kenosha. They want to
              see a show. At the 1965 World&apos;s Fair, they are probably seeing
              the last epic of its kind.
            </p>
            <p>
              Come opening day, the trumpet blasts of high-school bands, the
              hawking of vendors and the popping of fireworks will drown out the
              squeals from the box office. And as to the question, &quot;Will the
              Fair really open?&quot; the answer is <em>Yes</em>. As one
              industrial exhibitor put it, &quot;Our exhibit will open on April
              21, even if we have to buy the joint. And it will stay open for the
              entire season.&quot;
            </p>
          </div>

          <hr className={styles.rule} />

          <p className={styles.farewellLabel}>FAREWELL TO THE FAIR</p>
          <div className={styles.farewellBox}>
            <figure className={styles.farewellCover}>
              <Image
                src="/images/building22/farefair01.jpg"
                alt="Farewell to the Fair"
                width={150}
                height={169}
                className={styles.photo}
                unoptimized
              />
              <Link href="/farewell01" className={styles.farewellClick}>
                Click HERE
              </Link>
            </figure>
            <p className={styles.farewellCopy}>
              After years of planning and construction and two seasons of
              operation, the 1964/1965 New York World&apos;s Fair came to a close
              on October 17th, 1965. The world had beaten a path to its door and
              now it was time to return the land it had occupied to the natives.
              Learn of the Fair&apos;s final days, its demolition and the
              post-Fair restoration of Flushing Meadows-Corona Park.
            </p>
          </div>

          <p className={styles.webmaster}>
            <Image
              src="/images/building22/hand_rg.gif"
              alt=""
              width={33}
              height={14}
              className={styles.hand}
              unoptimized
            />{" "}
            <strong>Webmaster&apos;s note...</strong> the story the Fair&apos;s
            financial difficulties, final days and demolition, and Flushing
            Meadow Park&apos;s restoration, is documented at{" "}
            <strong>
              <span className={styles.nywf}>nywf</span>
              <span className={styles.nywf64}>64</span>
            </strong>
            <span className={styles.nywf}>.com</span> in the Feature, &quot;
            <Link href="/farewell01" className={styles.noteLink}>
              Farewell to the Fair
            </Link>
            .&quot; You are invited to continue exploring the fascinating story
            of the 1964-1965 New York World&apos;s Fair there . . .
          </p>

          <figure className={styles.singleFigure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/building22/building224.jpg"
              alt="Glide-a-Rides await auction"
              width={400}
              height={206}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <em>
                A sea of Glide-a-Rides await the auction block
              </em>{" "}
              (above){" "}
              <em>
                shortly after the Fair closed in 1965. A family watches the
                traffic glide by the the Long Island Expressway{" "}
              </em>
              (below)
              <em> as demolition of the Fair begins.</em>
            </figcaption>
          </figure>

          <figure className={styles.singleFigure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/building22/building223.jpg"
              alt="Bridge to Amusement Area"
              width={400}
              height={259}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <figure className={styles.singleFigure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/building22/building225.jpg"
              alt="Kodak Pavilion debris field"
              width={400}
              height={288}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              (above)
              <em>
                {" "}
                The Kodak Pavilion, abandoned and debris strewn, waiting for the
                wreckers. A Fairground street devoid of Fairgoers shortly after
                the close of the Fair in 1965{" "}
              </em>
              (below)
              <em>
                {" "}
                -- a sad and lonely sight after six years of monumental effort to
                bring the Fair to the World.
              </em>
            </figcaption>
          </figure>

          <figure className={styles.singleFigure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/building22/building222.jpg"
              alt="Vacant Fairgrounds"
              width={400}
              height={269}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.source}>
              SOURCE: Photographs by Max Mordecai
            </p>
          </figure>

          <hr className={styles.rule} />

          <div className={styles.creditBox}>
            <p>
              <strong>Webmaster&apos;s note... </strong>
              As always, there are so many people to thank when a Feature goes up
              on{" "}
              <strong>
                <span className={styles.nywf}>nywf</span>
                <span className={styles.nywf64}>64</span>
              </strong>
              <span className={styles.nywf}>.com</span>. I am always grateful when
              people are kind enough to contribute to a presentation. First of
              all, a very big Thank You to Bradd Schiffman who took the time and
              patience last year to scan in the Fair&apos;s Newsletter (
              <em>FAIR NEWS</em>) and Progress Reports. They have been an
              invaluable resource in putting together this feature. There&apos;s
              so much more that could have gone online and, at the risk of being
              a shameless self-promoter, anyone can purchase a CD-Rom of the
              complete set of these fascinating documents from the{" "}
              <Link href="/cdsales01" className={styles.noteLink}>
                Souvenir Stand
              </Link>{" "}
              here at{" "}
              <strong>
                <span className={styles.nywf}>nywf</span>
                <span className={styles.nywf64}>64</span>
              </strong>
              <span className={styles.nywf}>.com</span> to continue their
              exploration of the Building of the Fair. Many thanks to the major
              contributors of photographs for the feature, namely Karl Baker,
              Glen Mordacai and Ray Dashner. It&apos;s always the picture more
              than the written word that captures the imagination and these
              fellows have contributed some &quot;dandies.&quot; A big Thank You
              to John Loughead for answering my call at the &quot;PTU&quot; Forum
              for pictures relating to the Fair Construction. His contribution of
              &quot;phantom&quot; shots of pavilions that &quot;never were&quot;
              is invaluable. Thank you to Shopia Dekel Caspi of the Genia
              Schreiber University Gallery in Tel Aviv for the{" "}
              <em>Reznik Exhibition</em> Catalogue from which the Israel Pavilion
              material was gleaned. Thanks go to Fred Stern for the{" "}
              <em>WNYC</em> videotape from which the &quot;Five Men&quot; section
              was composed. And to Gary Holmes and Bob Granata for their
              contributions to the story.
            </p>
            <p>
              This presentation is one that I&apos;ve wanted to do for a very
              long time. It had been my goal to complete this along with the
              Feature done back in 2001 on the demolition of the Fair and the
              restoration of Flushing Meadow Park. With the Building the Fair
              Feature now complete, I feel the whole story is documented as best
              as I can do within the limitiations of a website. I hope I&apos;ve
              done the topic justice.
            </p>
            <p className={styles.creditSign}>Bill Young</p>
            <p className={styles.creditDate}>March 28, 2005</p>
          </div>

          <div className={styles.creditBox}>
            <p>
              Have you enjoyed the photography of Max Mordecai? I was so taken by
              the quality of his photographs, a contribution of his son, Glen,
              who told me, &quot;My memory of the Worlds Fair all belongs to my
              feelings in my heart which my dad put there for me &apos;cause of
              all the trips we made to the Fair as a family.&quot; Thank you for
              the memories, Mr. Mordecai. We all appreciate the Fair that
              you&apos;ve captured for us.
            </p>
            <figure className={styles.singleFigure} style={{ maxWidth: 400 }}>
              <Image
                src="/images/building22/building229.jpg"
                alt="Max Mordecai"
                width={400}
                height={287}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>Max Mordecai</figcaption>
            </figure>
          </div>

          <p className={styles.source}>
            SOURCE: Photographs presented courtesy Glen Mordecai collection
            (unless otherwise indicated) and are
            <br />© Copyright 2005 Glen Mordecai, All Rights Reserved
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building21"
        explicitPrevious
        nextHref="/buildingoverview"
      />
    </>
  );
}
