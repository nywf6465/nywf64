import type { Metadata } from "next";
import Image from "next/image";
import { CarnivNavChrome } from "@/components/CarnivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./carniv03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Clippings — Carnival — nywf64.com",
  description:
    "Press clippings about Carnival at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carnival — Press Clippings.
 * Body from legacy carniv03.html (custom press reprints — no shared
 * postcard/brochure/manual/photographs standard).
 *
 * Stack: hero → CarnivNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Last Carnival topic: NEXT returns to /carnivoverview.
 */
export default function Carniv03Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Carnival">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/carnivoverview/hero-banner.jpg"
            alt="Carnival at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CarnivNavChrome />

      <article className={styles.article} aria-labelledby="carniv03-title">
        <header className={styles.titleBar}>
          <h1 id="carniv03-title" className={styles.titleBarMain}>
            Press Clippings
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.leadArt}>
            <Image
              src="/images/carniv03/carnival01.gif"
              alt="Carnival black and white drawing"
              width={327}
              height={195}
              className={styles.leadArtImg}
              unoptimized
            />
          </div>

          <section className={styles.clipping} aria-label="New York Sunday News">
            <h2 className={styles.headline}>
              FOR ZIP, FAIR MAY PITCH CURVES WITH CULTURE
            </h2>
            <p className={styles.byline}>BY Joseph Cassidy and Henry Lee</p>
            <div className={styles.body}>
              <p>
                Despite the stern emphasis on culture, a nostalgic touch of
                defunct Steeplechase Park - penny arcade, kiddie rides,
                &quot;walk-throughs&quot; and popular priced attractions called
                &quot;hanky-pank&quot; games in the carnival business - will
                enliven the World&apos;s Fair this season, THE NEWS was
                exclusively informed yesterday.
              </p>
              <p>
                Fair President Robert Moses also is &quot;thinking over&quot;
                plans for a night club featuring &quot;special dancing&quot; -
                girls - and there has even been talk of a freak show, though
                nothing definite has come of that yet.
              </p>
              <p>
                Some agreements have already been signed and want ads for
                &quot;skill game operators&quot; at the Fair are appearing in
                Amusement Business, the bible of the carnival and amusement
                industry. While no public announcement has been made by the Fair,
                a spokesman acknowledged the closing of certain of the contracts.
              </p>
              <p className={styles.subhead}>&quot;JUST ANOTHER ASPECT&quot;</p>
              <p>
                Asked whether this represented an easing off of Moses&apos;
                adamant stand against undignified attractions, the spokesman
                said: &quot;No, this is just another aspect to the new, improved
                Lake Area.&quot;
              </p>
              <p>
                Originally known as the Lake Amusement Area, this section on the
                wrong side of the Long Island Expressway has been the Fair&apos;s
                own little Appalachia.
              </p>
              <p>
                One of the failures there, the Texas Pavilion and Music Hall, is
                being taken over by Jimmy Chiang, 46, Chinese-born show biz
                promoter from Texas who became a U.S. citizen six years ago
                through a special act of Congress introduced by the then U.S.
                Sen. Lyndon Johnson.
              </p>
              <p className={styles.subhead}>KIDDIE RIDES AT 20C</p>
              <p>
                Under the contracts he has signed with former Judge Samuel I.
                Rosenman, head of the Lake Area, the first floor of the Pavilion
                will be striped down and the interior walls lined with penny
                arcade games. In the center of the hall there will be nine kiddie
                rides, 20 cents each, 3-for-50 cents and 7 for $1.
              </p>
              <p>
                Upstairs, Chiang told The News, he will install the Carnival
                Frontier Palace room, a large restaurant offering American and
                Continental cuisine, and the Carnival dinner club, which will be
                &quot;a night club featuring special music and special
                dancing.&quot;
              </p>
            </div>
            <p className={styles.source}>
              SOURCE: <em>New York Sunday News</em>, March 14, 1965
            </p>
          </section>

          <hr className={styles.sectionRule} />

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/carniv03/carnival03.jpg"
                alt="Chiang and Potter hang sign"
                width={442}
                height={548}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Mr.Chiang and four star general William Potter, Fair&apos;s
              Executive Vice President, hang new sign from belcony of former
              Texas Pavilion
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>New York Daily News</em>, Friday, March 26, 1965
            </p>
          </figure>

          <hr className={styles.sectionRule} />

          <section
            className={styles.clipping}
            aria-label="New York Daily News can-can"
          >
            <h2 className={styles.headline}>
              CAN-CAN GIRLS TO DANCE AT FAIR FUN-FUN HOUSE
            </h2>
            <div className={styles.body}>
              <p>
                Kiddie rides and can-can girls will be part of the $1million
                dollar Carnival Pavilion for &quot;the entire family&quot; that
                will occupy the site of the former Texas Pavilion at the
                World&apos;s Fair, it was announced yesterday.
              </p>
              <p>
                Fair President Robert Moses officially endorsed the plans which
                were first bared in the Sunday News of March 14. &quot;We welcome
                the new pavilion as an important addition to the revitalized Lake
                Area,&quot; Moses said. &quot;Carvinal personifies the area&apos;s
                concept of clean fun for the whole family, young and old
                alike&quot;.
              </p>
              <p className={styles.subhead}>RIDES AND GAMES</p>
              <p>
                For the youngsters, the new air-conditioned Carnival Pavilion
                will contain a series of rides ranging from a boat trip to a
                miniature helicopter flight. Games similar to those found in
                penny arcades will flank the walls of the $6 million structure
                which last year housed the ill-fated Texas Music Hall.
              </p>
              <p>
                Two indoor restaurants with a seating capacity of 700 will be a
                part of the redecorated pavilion. A Carnival dinner club is being
                created on the second floor and will offer &quot;sophisticated
                night club entertainment, of a type not yet decided upon&quot; a
                spokesman for Jimmy I. Chiang, Chinese born promoter of the
                pavilion said.
              </p>
              <p className={styles.subhead}>THEY WILL SING TOO</p>
              <p>
                The larger Carnival Frontier Palace will feature can-can girls,
                one spokesman said, adding that the girls will &quot;sing as well
                as dance and shout &quot;whee&quot; and &quot;whoo&quot; to the
                music. When not performing on the large stage behind the bar, the
                dancers will give free shows &quot;outside the Pavilion&quot;
                alongside a number of adult rides, including a miniature roller
                coaster on which the riders shout &quot;whee&quot; and
                &quot;whoo.&quot;
              </p>
            </div>
            <p className={styles.source}>
              SOURCE: <em>New York Daily News</em>, Friday, March 26, 1965
            </p>
          </section>

          <hr className={styles.sectionRule} />

          <section
            className={styles.clipping}
            aria-label="New York Herald Tribune"
          >
            <h2 className={`${styles.headline} ${styles.headlinePlain}`}>
              &quot;CARNIVAL&quot; SHOW TO ENLIVEN FAIR
            </h2>
            <p className={styles.byline}>
              BY FRED FERRETTI
              <br />
              OF THE HERALD TRIBUNE STAFF
            </p>
            <div className={styles.body}>
              <p>WORLD&apos;S FAIR</p>
              <p>
                &quot;Mr. Chiang is from Marshall, Texas, the hometown of Mrs.
                Lyndon Johnson, Lady Bird,&quot; the man from the agency said.
              </p>
              <p>Yes, but are there going to be girls here?</p>
              <p>
                &quot;Mr. Chiang is going to make Carnival the biggest attraction
                in the Lake Area,&quot; the man said. He began giving out little
                stories about how the long-vacant Texas Music Hall was being
                redone and was to be renamed Carnival, the
                &quot;multimillion-dollar entertainment park&quot;.
              </p>
              <p>
                What kind of girls? Are there going to be girls? Here? At this
                year&apos;s World&apos;s Fair? What kind of dancing are they
                going to do?
              </p>
              <p>&quot;Did you read my release?&quot; the man asked.</p>
              <p>
                The release said &quot;The Carnival Frontier Palace will feature
                Can-Can girls and other entertainment.&quot;
              </p>
              <p>What was this &quot;other entertainment?&quot;</p>
              <p>
                &quot;Discotheque. Upstairs is going to be called the Café Au Go
                Go Upstairs. Isn&apos;t that nice?&quot;
              </p>
              <p>Where will these girls dance, the discotheque girls?</p>
              <p>
                &quot;On the stage over the Frontier Palace Bar. They&apos;ll
                alternate with our 10 can-can girls who are deep in
                rehearsal.&quot;
              </p>
              <p>
                Sounds fine. But didn&apos;t Robert Moses say that he didn&apos;t
                want girls? That he had promised there wouldn&apos;t be any
                atmosphere of the honky-tonk at the Fair?
              </p>
              <p>&quot;Did you read my release?&quot; the man asked.</p>
              <p>
                The release said: &quot;Fair President Robert Moses said he
                welcomes the new pavilion as an important addition to the
                revitalized Lake Area. Carnival personifies the area&apos;s
                concept of clean fun for the whole family, young and old alike.
                The youngsters will have seven rides of their own. Now visitors
                to the fair can spend hours as spectators and participate at
                exhibits, shows and rides representing healthy amusements.&quot;
              </p>
              <p>
                &quot;That&apos;s what Mr. Moses said&quot; the man from the
                agency said.
              </p>
              <p>
                An observer observed that on the face of it, it looked as if
                Carnival was going to be a complex of rides for the children and
                a place where Dad can watch continuous performances of salient
                features of contemporary culture.
              </p>
              <p>
                &quot;The girls will be doing a straightforward dance&quot; the
                man said.
              </p>
              <p>
                What this meant in non-agency terms was that the Texas Music Hall
                is becoming Carnival under the lease of Jimmy I.C. Chiang, 46, a
                former Nationalist Chinese Army colonel who ran the restaurant in
                the Pavilion of China last season. He&apos;ll have a restaurant
                and a complex of children&apos;s rides with such names as the
                Wild Mouse, the Scooter and the Rock-O-Plane.
              </p>
              <p>
                And, on the second floor, there will be the Carnival Dinner Club,
                which will offer, the man said, &quot;Sophisticated night club
                entertainment.&quot;
              </p>
              <p>And what was that going to be?</p>
              <p>
                &quot;Sophisticated night club entertainment&quot; he said.
              </p>
            </div>
            <p className={styles.source}>
              SOURCE: <em>New York Herald Tribune</em>, Friday, March 26, 1965
            </p>
          </section>

          <hr className={styles.sectionRule} />

          <section
            className={styles.clipping}
            aria-label="Marshall News Messenger"
          >
            <h2 className={`${styles.headline} ${styles.headlinePlain}`}>
              <u>WORLD&apos;S FAIR</u>
              <br />
              CHIANG PLANNING PAVILION AT N.Y.
            </h2>
            <div className={styles.body}>
              <p>
                Jimmy I.C. Chiang, 46, of Marshall, who last year was general
                manager of a restaurant at the China Pavilion at the New York
                World&apos;s Fair, announced Saturday he was planning an
                entertainment park that will occupy the site of the former Texas
                Pavilion at the Fair.
              </p>
              <p>
                Chiang, who is in New York, announced that more than $1,000,000
                is being spent to renovate and convert the Texas Pavilion into a
                Tivoli-like fun center for children and adults. Features range
                from a roller coaster to a discotheque and from an ice cream
                parlor to a dinner club.
              </p>
              <p>
                He said the new park will be called &quot;Carnival&quot;.
              </p>
              <p>
                According to Chiang, &quot;Carnival will have features especially
                selected for children and other chosen for adults. All will be
                popularly-priced and all will be suitable for the entire
                family&quot;.
              </p>
              <p>
                The former 2,400-seat Texas Music Hall auditorium built at a cost
                of about $6,000,000 is being converted to an entertainment complex
                for children, with seven rides, souvenirs, exhibits and
                refreshments.
              </p>
              <p>
                Outside there will be a Sea Aquarium, a replica of an ocean liner
                filled with 500 varieties of rare and exotic fish, three adult
                rides, free entertainment, and low priced snacks bars with seating
                for 1,200. These outdoor eating facilities include a shrimp bar,
                Mexican Garden, and ice cream parlor and a beer garden. The adult
                rides will include the Wild Mouse, a mild Roller Roaster, the
                Scooter (bumping cars), and Rock-O-Plane.
              </p>
              <p>
                Carnival will also have two indoor restaurants with a combined
                seating capacity of 700. The Carnival Frontier Palace, one of the
                restaurants, will feature Can-Can girls and other entertainment.
                American and continental foods, with entrees priced from $1.00 to
                $3.50, will be served. Plans are being completed for discotheque
                dancing.
              </p>
              <p>
                In addition, Chiang said that the Carnival Dinner Club is being
                created on the second floor of the Pavilion. The Club will offer
                sophisticated night club entertainment and an American and
                continental cuisne, at a $1.25 minimum. Redesign and refurnishing
                of the restaurants are being executed by interior designers of
                Straus-Duparquet, Inc.
              </p>
              <p>
                Carnival is the property of Flushing Meadow Concessions, Inc., a
                new corporation formed for this specified purpose. Chiang, who is
                President, said that there is no connection between the new
                Corporation and the 1964 operations at the Texas pavilion, now
                defunct.
              </p>
            </div>
            <p className={styles.source}>
              SOURCE: <em>Marshall News Messanger</em>, Sunday, March 28, 1965
            </p>
          </section>

          <div className={styles.webmasterBox}>
            <p>
              <strong>Webmaster&apos;s note- </strong>
              Thank you to Mr. Jimmy Chiang for submitting these news clippings
              on <em>Carnival</em>. So little is known about the attractions
              featured in the Lake Area. These clippings are treasures of
              information from the past regarding the attraction and Mr
              Chiang&apos;s involvment.{" "}
              <a
                href="http://jimhillmedia.com/editor_in_chief1/b/jim_hill/archive/2001/12/31/texan-with-big-dreams-big-apple-big-trouble.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                The story of the demise of the Texas Pavilions and Music Hall
              </a>{" "}
              has been documented by journalist Jim Hill at his{" "}
              <a
                href="http://jimhillmedia.com/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>
                  <em>www.jimhillmedia.com</em>
                </strong>
              </a>{" "}
              website. It is an interesting read and I encourange you to do so if
              you don&apos;t already know the story! Mr. Chiang rescued a
              multi-million dollar building from the padlocks.
            </p>
            <p>Mr. Chiang writes:</p>
            <blockquote className={styles.blockquote}>
              <p>
                Mr. Chiang was the sole owner and President of the “Carnival
                Pavilion” (former Texas Pavilion) at 1964/1965 New York World’s
                Fair under the company name of Flushing Meadows Concessions Inc.
                The Hollywood superstar Ms. Goldie Hahn was one of the five
                can-can girls who worked for Mr. Chiang’s “Carnival Pavilion”. He
                paid all bills and met all obligations and “honored everything
                all the way to the end of the Fair”. And the Fair authority was
                very pleased and proud of him; especially, since many others
                “enjoyed” the so-called last 30-day tax holidays. (Mr. Jim
                Diamond, Fair Treasurer, who was so impressed and said that Mr.
                Chiang was the only one still paying bills till the last).
              </p>
              <p>
                Mr. Chiang has become a citizen of U.S. since 1961 through a
                special act in Congress sponsored by LBJ, then Majority Leader in
                the Senate, Sam Rayburn, then Speaker of the House, and
                Congressman Wright Patman of the 1st District of Texas. At the
                opening date of his “Carnival Pavilion,” President Johnson and
                the First Lady, Ladybird, personally came to visit him and gave
                their blessings. It was worldwide publicized by the news media.
              </p>
              <p>
                Mr. Chiang has been active since 1961 in the Democratic Party and
                served as the Co-Chairman of Democratic Finance Committee,
                Special Advisor to Chairman of DNC, close friend and advised on
                Far Eastern affairs to President LBJ, President Carter and
                President Clinton. However, the Chiangs also have many Republican
                friends since Mrs. Chiang is a devoted Republican. As a matter of
                fact, recently they had a number of occasions meeting with former
                President Bill Clinton in November 2003 and President George Bush
                in December 2003 and January 2004 and had blessings from both of
                them.
              </p>
              <p>
                Mr. Chiang is a native of Shanghai, China. In the last few years,
                he has spent most of the time in Shanghai; especially, he is so
                pleased to see his native city becomes the fastest growing city
                in the world and, it has won the site for EXPO 2010. As he has
                great interest in Taiwan (Mrs. Chiang was born in Taiwan) and they
                have residence there. Mr. Chiang went to Taiwan in 1946 with C.K.
                Yen who later became President of Taiwan, and took over Taiwan
                from Japanese occupation. Many of Mr. Chiang’s Taiwanese friends
                including world famous industrialists have encouraged and
                requested him to organize a Taiwan Pavilion or Overseas Chinese
                Pavilion (official name to be negotiated and approved by Chinese
                EXPO authorities), since he has successful experience in 1964-65
                New York World’s Fair and Osaka EXPO 70, as well as other
                valuable qualifications.
              </p>
              <p>
                In the meantime, Mr. Chiang has been working closely with a
                number of U.S. Senators and Congressmen who are in favor of
                American participating EXPO 2010 Shanghai, as well as substantial
                U.S. enterprises which are interested to participate said
                project.
              </p>
              <div className={styles.inlineFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/carniv03/rca26.jpg"
                    alt="Expo 2010 Promotional Material"
                    width={200}
                    height={272}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </div>
              <p>
                Mr. Chiang’s ambition is to utilize his talent, successful
                experience and expertise, along with his close relationship with
                world-class enterprises to build the first one or two major
                pavilions on the site.
              </p>
              <p>
                Some of the news media has called Mr. Chiang as “Father of World
                Expositions” in recent news reports.
              </p>
            </blockquote>
            <p>
              As Fair enthusiasts, we wish you great success, Mr. Chiang! If
              you&apos;d like to contact Mr. Chiang you may do so at{" "}
              <a href="mailto:jimmychiang8@yahoo.com?subject=Carnival at www.nywf64.com">
                jimmychiang8@yahoo.com
              </a>
              .
            </p>
            <p className={styles.signoff}>-Bill Young, February 2004</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/carniv02"
        explicitPrevious
        overviewHref="/carnivoverview"
        nextHref="/carnivoverview"
      />
    </>
  );
}
