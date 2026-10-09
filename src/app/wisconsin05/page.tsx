import type { Metadata } from "next";
import Image from "next/image";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wisconsin05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Wisconsin at the Fair — Wisconsin — nywf64.com",
  description:
    "Wisconsin at the Fair — Wisconsin Pavilion essay — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin — Wisconsin at the Fair essay + post-fair fact sheet.
 * Body from legacy wisconsin05.html.
 */
export default function Wisconsin05Page() {
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

      <article className={styles.article} aria-labelledby="wisconsin05-title">
        <header className={styles.titleBar}>
          <h1 id="wisconsin05-title" className={styles.titleBarMain}>
            Wisconsin at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figureCenter}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/wisconsin05/wispavpic.jpg"
                alt="Wisconsin Pavilion at the Fair"
                width={580}
                height={308}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.figureCaption}>
              <strong>NEW YORK WORLD&apos;S FAIR -- WISCONSIN PAVILION. </strong>
              This strikingly original design by architect John Steinman was created
              using only standard Pruden metal building components. Almost 20,000
              sq. ft. of space are incorporated in the Rotunda and two adjoining
              exhibit buildings. Alternate half-frames were placed in concave
              and convex positions to form the folded plate roof effect while
              the exterior skin was covered with Pruden Panel Rib. Construction
              time from arrival of materials on site to completed building was
              less than 90 days!
            </figcaption>
            <p className={styles.source}>
              Source: PRUDEN PRODUCTS CO., Evansville, Wisconsin, advertising copy
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              The New York World&apos;s Fair, being planned for 1964 and 1965, seemed a perfect showcase for
              a state&apos;s scenic attractions and business opportunities and Wisconsin
              took an early interest in the event. A state World&apos;s Fair Commission
              had been given one of the choicest spots in the State and Federal
              Area of the Fair. But by late 1963, with cost estimates for the
              pavilion and its operation exceeding a million dollars and with
              neither tax nor private funds available for its construction
              and operation, the pavilion seemed an impossibility.
            </p>
            <p className={styles.sectionHeading}>
              Private sponsorship ensures state&apos;s participation
            </p>
            <p>
              The story of the Wisconsin Pavilion might have ended right there in 1963 if it hadn&apos;t been
              for the efforts of Clark Prudhon, president of Pruden Steel Buildings
              in Evansville, Wisconsin. When Prudhon learned the state was
              about to drop plans for an exhibit at the New York Fair he was
              disappointed that the opportunity to exhibit Wisconsin&apos;s great
              resources would be lost.
            </p>
            <p>
              So he arranged with John Steinman, an architect from Monticello, Wisconsin, to design
              a low cost structure able to compete in style and unity with
              surrounding pavilions at the Fair. The building would be built
              with materials and frames provided by Pruden Steel Buildings.
              Given a suitable pavilion at a reasonable cost Prudhon was convinced
              that other manufacturers in the state would be willing to contribute
              to the exhibit. He presented his ideas to the Wisconsin World&apos;s
              Fair Commission and they were certainly interested!
            </p>
          </div>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/wisconsin05/wi04.jpg"
              alt="Artist's Rendering"
              width={392}
              height={222}
              className={styles.photoImg}
              unoptimized
            />
            <p className={styles.source}>
              Source: Presented Courtesy John Pender Collection
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              Just as Prudhon had predicted, private enterprise did take an interest in the project. Charles
              Sanders, a Wisconsin businessman who had been involved with the
              Seattle World&apos;s Fair in 1962 learned of Prudhon&apos;s plan and entered
              the picture representing major private financing. Sanders and
              Associates would provide financing to build the Pavilion with
              the privilege of selling commercial display space to exhibitors.
              They would reserve the Pavilion&apos;s entry building (called the
              Rotunda) for the state&apos;s own display and give the state veto
              power over any commercial exhibits in the pavilion. Additionally,
              the Rotunda building would become the property of the state of
              Wisconsin at the close of the Fair.
            </p>
            <p>
              By now there was so little time left before the Fair&apos;s official opening in April of 1964
              that the World&apos;s Fair administration nearly denied the Wisconsin
              World&apos;s Fair Commission permission to build. However, with construction
              starting in early 1964, the Wisconsin Pavilion was finally built
              at the last minute on one of the prime spots of the Fair.
            </p>
            <p>
              The pavilion stood just to the right of the New York City building at the foot of the
              bridge crossing the Grand Central Parkway to the Transportation
              Area of the Fair and General Motors&apos; <em>Futurama</em>. It was
              situated directly across from the New York State Pavilion&apos;s observation
              towers and the New Jersey Pavilion and &quot;just down the road&quot;
              from the Fair&apos;s symbol <em>Unisphere</em>. This prime real estate
              proved valuable to the pavilion&apos;s popularity.
            </p>
            <p className={styles.sectionHeading}>Rotunda is pavilion&apos;s main feature</p>
            <p>
              The pavilion constructed on the Flushing Meadow grounds actually consisted of two structures.
              The Rotunda served as an entry into a surrounding U-shaped exhibit
              hall housing commercial exhibits and restaurants. The Rotunda
              building was 48 feet in diameter with 12 sides. Six star-shaped
              canopies supported by gold &quot;light pylons&quot; jutted out
              from a roof structure rising to a 60 foot peak. The top of the
              Rotunda contained a unique complex of 120 panes of blue and gold
              stained glass (the official colors of Wisconsin). Extending from
              the roof peak was a 50 foot pole on which were fixed metal letters
              spelling out WISCONSIN. Indian inscriptions of mosaic tile were
              applied to the base. The surrounding structure complimented the
              Rotunda building.
            </p>
            <p>
              Because of the Prudhon/Sanders idea no tax dollars were spent for the construction of the pavilion.
              However, the state legislature did appropriate monies for the
              operation of the pavilion and for a state exhibit within the
              Rotunda building. The pavilion eventually cost the state taxpayers
              1.5 cents per visitor or approximately $199,000.
            </p>
            <p className={styles.sectionHeading}>
              Exhibits highlight Wisconsin&apos;s scenic wonders
            </p>
            <p className={styles.clearfix}>
              During the 1964 run of the Fair the displays in the Rotunda building highlighted Wisconsin&apos;s
              history, universities, highways, conservation, natural resource
              development, aeronautic industry and agricultural and dairy industries.
              The U-shaped exhibit hall displayed &quot;The World&apos;s Largest
              Cheese,&quot; commercial exhibits, a trout pond, a cheese booth
              and Tad&apos;s Steakhouse.{" "}
              <Image
                src="/images/wisconsin05/wi17.jpg"
                alt=""
                width={250}
                height={230}
                className={styles.floatLeft}
                unoptimized
              />
              Tad&apos;s proved to be one of the most popular restaurants at the Fair
              serving over 15,000 Wisconsin beefsteak dinners daily.
            </p>
            <p>
              For the 1965 season the interior exhibits of the Rotunda were changed to a motion display
              of Wisconsin&apos;s agricultural, industrial and recreational industries.
              The steak house was enlarged and a new, wider entrance was made
              to &quot;The World&apos;s Largest Cheese.&quot;
            </p>
            <p>
              During the two year run of the Fair, thousands of folders were distributed about Wisconsin.
              Pavilion visitors asked most about Wisconsin&apos;s universities and
              colleges, the resort and recreational facilities, what Wisconsin
              towns and cities were like, the jobs and industry, Wisconsin&apos;s
              dairy industry and &quot;The World&apos;s Largest Cheese&quot; (in
              that order). Approximately 500,000 visitors asked for and received
              state literature or maps.
            </p>
            <p className={styles.clearfix}>
              <Image
                src="/images/wisconsin05/wismatch.gif"
                alt="Matchbook cover from Wisconsin Pavilion restaurant"
                width={340}
                height={119}
                className={styles.floatLeft}
                unoptimized
              />
            </p>
            <p className={styles.floatCaption}>
              A souvenir of the RED GARTER Banjo Beer Parlor at the Wiconsin Pavilion
            </p>
            <div className={styles.clearfix} />
            <p className={styles.sectionHeading}>Location proves fortunate</p>
            <p>
              No other state had spent less than $500,000 on their pavilion. When the lights were dimmed
              on New York&apos;s &quot;Billion Dollar Dream Fair&quot; and the last
              person had filed past &quot;The World&apos;s Largest Cheese,&quot;
              13 million people had visited the Wisconsin Pavilion (according
              to the <em>New York Times</em> of October 19, 1965). This placed
              Wisconsin third among all state entries in attendance and eighth
              among all exhibits at the Fair in popularity! Not bad for the
              little pavilion that almost didn&apos;t make it to the Fair.
            </p>
          </div>

          <hr className={styles.rule} />

          <div className={styles.factSheet}>
            <h2 className={styles.factSheetTitle}>Wisconsin at the World&apos;s Fair</h2>

            <h3>THE PAVILION</h3>
            <ol>
              <li>No taxpayers&apos; money used for construction.</li>
              <li>
                The most popular restaurant at the Fair, serving up to 15,000 Wisconsin beef steak
                dinners daily.
              </li>
              <li>
                Operation and maintenance cost of $50,000 appropriated by the Legislature in
                1965 (217-S; Senate - Ayes 20, No&apos;s 10; 2 paired; Assembly -
                Ayes 80, No&apos;s 16)
              </li>
            </ol>
            <blockquote>
              <blockquote>
                <p>
                  <strong>Cost Each Taxpayer 1 1/2c per visitor</strong>.
                </p>
              </blockquote>
              <p>When the World&apos;s Fair Participation Corporation was dissolved on December 20, 1965</p>
              <blockquote>
                <p>
                  <strong>$7,041.42 of the above amount </strong>was returned to the state.
                </p>
              </blockquote>
            </blockquote>

            <h3>THE DISPLAYS</h3>
            <ol>
              <li>
                Rotunda building containing displays on Wisconsin&apos;s University, industries, highways,
                conservation, resource development, aeronautic, agricultural
                and dairy products, historical exhibits.
              </li>
              <li>
                In 1964, in addition to Tad&apos;s Steak House in a separate building of the Pavilion,
                there were among other exhibits
                <ul>
                  <li>The World&apos;s Biggest Cheese</li>
                  <li>Industry exhibits</li>
                  <li>Trout Pool</li>
                  <li>Cheese Booth</li>
                </ul>
              </li>
              <li>
                In 1965, the center interior exhibits of the rotunda information building
                were changed to a very attractive motion display of Wisconsin&apos;s
                agricultural, industrial and recreation industries.
                <ul>
                  <li>
                    The Steak House was enlarged, and a new wide additional entrance was made to
                    the World&apos;s Biggest Cheese Display.
                  </li>
                  <li>
                    A World&apos;s Fair manager was hired for the Wisconsin exhibit, and together with
                    attendants trained in handling inquiries, thousands of folders
                    were distributed containing information on the State of Wisconsin
                    and its industries.
                  </li>
                </ul>
              </li>
            </ol>

            <h3>WHAT PAVILION VISITORS ASKED ABOUT</h3>
            <ol>
              <li>Our Universities and Colleges.</li>
              <li>Our resort and recreational facilities.</li>
              <li>What our towns and cities are like</li>
              <li>Jobs and industry</li>
              <li>Our dairy industry, and the World&apos;s Biggest Cheese</li>
            </ol>
            <p>
              Approximately <strong>500,000 persons</strong> asked for and received state literature,
              information or maps
            </p>

            <h3>RESULTS EXPECTED FROM INQUIRIES</h3>
            <p>
              Many Easterners are looking for a place &quot;to get away from it all&quot; that
              is easy to reach by auto. The network of Interstate Highways
              permits driving to Wisconsin from New York - and many other portions
              of the East Coast - without even a stoplight. To these people
              we are &quot;The West,&quot; and our recreational appeal has
              reached this vast hitherto untapped market via the Fair. Other
              Easterners will send their children to our colleges and universities,
              make further inquiries regarding our job and industrial opportunities,
              and be on the lookout for Wisconsin products when shopping.
            </p>

            <h3>HOW MANY PEOPLE?</h3>
            <blockquote>
              <blockquote>
                <p>According to the New York Times, 10/19/65</p>
                <blockquote>
                  <blockquote>
                    <p>
                      <strong>13,000,000 people</strong>
                    </p>
                  </blockquote>
                </blockquote>
              </blockquote>
            </blockquote>
            <p>
              visited the Wisconsin Pavilion during the two seasons of the Fair. This pus us in{" "}
              <strong>8th place</strong> among all exhibits and <strong>3rd</strong> among <strong>state</strong>{" "}
              pavilions.
            </p>

            <h3>TAXPAYERS&apos; MONEY SPENT ON OTHER EXHIBITS</h3>
            <table className={styles.compareTable}>
              <tbody>
                <tr>
                  <td>New York State. . . . . . .</td>
                  <td>. . . . .11 1/2 million dollars</td>
                </tr>
                <tr>
                  <td>Florida . . . . . . . . . . . . . .</td>
                  <td>. . . . . 2 1/2 million dollars</td>
                </tr>
                <tr>
                  <td>Hawaii . . . . . . . . . . . . .</td>
                  <td>. . . . . 2 1/2 million dollars</td>
                </tr>
                <tr>
                  <td>New England States . . .</td>
                  <td>. . . . . . . . .5 million dollars</td>
                </tr>
              </tbody>
            </table>
            <p>
              Among the states participating were Texas, Missouri, New Jersey, Oklahoma, Montana,
              Minnesota and Illinois
            </p>
            <p>
              <strong>No other state</strong> participating spent less than 500,000 dollars except Wisconsin.
            </p>

            <h3>GENERAL COMMENTS &amp; CONCLUSIONS</h3>
            <p>
              We did not include enough dairy products. Our image elsewhere is a cornucopia of
              butter, milk, cream, cheese and ice cream. People are interested
              in good food, and we should take this into account and emphasize
              our abundance in any future displays of this nature.
            </p>
            <p>
              Wisconsin was well represented at the Fair, considering our investment. The
              directors believe complete credit is due to the intelligent non-partisan
              interest of those in industry and government who gave support
              to this endeavor. We made the most populous segment of the nation
              aware of why &quot;we like it here.&quot; On the basis of cost
              per visitor, we were the most successful entry. This cost was
              far below that for a comparable amount of newspaper or magazine
              advertising, and justifies the wisdom of the Legislature in participation
              in this state-wide promotion.
            </p>
            <p className={styles.source}>Source: Post-Fair Fact Sheet</p>
          </div>

          <figure className={styles.figureCenter}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/wisconsin05/wi19.jpg"
                alt="Envelope"
                width={600}
                height={259}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.source}>
              Source: Original Stationery from the Wisconsin Pavilion
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar previousHref="/wisconsin04" nextHref="/wisconsin06" />
    </>
  );
}
