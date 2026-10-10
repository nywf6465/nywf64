import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Making News — Building the Fair — nywf64.com",
  description:
    "Making News — contemporary press coverage of the building of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Building the Fair — Making News.
 * Body from legacy building06.html (mapped to /building05 as Page 5 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building05Page() {
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

      <article className={styles.article} aria-labelledby="building05-title">
        <header className={styles.titleBar}>
          <h1 id="building05-title" className={styles.titleBarMain}>
            Making News
          </h1>
        </header>

        <div className={styles.articleInner}>
          {/* ── The World's Fair Man / Forecast 70 Million ── */}
          <section className={styles.clipping} aria-label="Early press">
            <div className={styles.cols3}>
              <div className={styles.col}>
                <h2 className={styles.sideHead}>The World&apos;s Fair Man</h2>
                <div className={styles.body}>
                  <p>
                    A month ago it was tentatively decided that running the 1964
                    World&apos;s Fair in New York would be such a big job that it
                    would require four men to do it, instead of the one
                    &quot;dream man&quot; the fair corporation had been hunting.
                    Put in such terms, the problem suggested its own solution. If
                    you were looking for a man who could do the work of four men,
                    or a half dozen, there was only one, and that was Bob Moses.
                    So Mr. Moses is apparently headed for the presidency of the
                    fair.
                  </p>
                  <p>
                    The choice is, of course, ideal. No one else could have
                    brought to this demanding task the experience, the driving
                    energy, the contagious enthusiasm, the grasp of infinite
                    detail essential to success. A man who has lived life like a
                    spendthrift, never sparing himself in the public service, he
                    brushes aside with impatience the fact that this new
                    assignment will take him into his mid-seventies. After all,
                    he&apos;s giving up four city jobs -- as Park Commissioner,
                    member of the City Planning Commission, chairman of the Slum
                    Clearance Committee, and Construction Coordinator. That
                    leaves him with only his state park and power chairmanships,
                    and director of the Triborough Bridge and Tunnel Authority.
                    He will be building Niagara power and the bridge to Staten
                    Island.
                  </p>
                  <p>
                    Some time ago there was an ill-founded rumor that Mr. Moses
                    was retiring. He called it &quot;a lot of nonsense.&quot; It
                    was indeed. Yet, as he appears to be leaving after all these
                    years since 1934 the post of Park Commissioner, a word of
                    appreciation for his accomplishments in that area must be
                    said. &quot;I am a park man,&quot; he once said. That he has
                    been, to the everlasting benefit of the city&apos;s people.
                  </p>
                  <p>
                    So as president of the World&apos;s Fair, with its theme of
                    &quot;Peace Through Understanding,&quot; Robert Moses will
                    write a climax -- but not necessarily a conclusion -- to a
                    great career as a public servant. With him at the helm the
                    fair has a guaranteed success.
                  </p>
                </div>
              </div>

              <div className={styles.col}>
                <h2 className={styles.headline}>
                  Forecast 70 Million
                  <br />
                  Will Visit The Fair
                </h2>
                <div className={styles.body}>
                  <p>
                    A preliminary report on the 1964-65 World&apos;s Fair calling
                    for integrating successful aspects of the 1939-40
                    World&apos;s Fair with &quot;new concepts, forms and
                    function&quot; was given to Mayor Wagner yesterday by Robert
                    Moses, who will head the fair corporation.
                  </p>
                  <p>
                    The report&apos;s recommendations urge a two-year rather than
                    a one-year fair as a financial necessity, and widespread
                    highway and parking field construction. The report also
                    proposes extensive park restoration.
                  </p>
                  <p>
                    Transportation within the fair grounds on the 1939-40 pattern
                    -- by bus, electric tractor trains, and motorized lounge
                    chairs -- is suggested, Moses&apos; consultants turned thumbs
                    down on proposals for monorail, belt or combined hydrofoil
                    boat-monorail trains.
                  </p>
                  <p>
                    The report estimated that at least 40 million persons would
                    visit the fair in 1964 and 30 million in 1965, with an average
                    of 220,000 daily visitors and a peak of 500,000 a day. The
                    1939-40 fair had 33 million visitors, of whom 26 million paid
                    admissions and seven million entered on passes.
                  </p>
                  <p className={styles.subLabel}>Expandable Stadium</p>
                  <p>
                    At the old fair, 1,600,000 cars were parked. It was estimated
                    that increased car ownership and expanded highways would bring
                    the total in 1964 to three million.
                  </p>
                  <p>
                    Moses&apos; report called for construction of seven parking
                    fields with a total 20,000-car capacity. The report urged $95
                    million worth of arterial and highway enlargements and
                    improvements.
                  </p>
                  <p>
                    Among these were widening of Grand Central Parkway, which
                    goes through the fair site; widening of Northern Blvd. at the
                    northwest end of the park; completion of the Long Island
                    Expressway and a new extension of the Van Wyck Expressway
                    that would cross northerly the the east end of the park.
                  </p>
                </div>
              </div>

              <div className={styles.col}>
                <figure className={styles.figure} style={{ maxWidth: 120 }}>
                  <Image
                    src="/images/building05/building05.jpg"
                    alt="Robert Moses"
                    width={120}
                    height={201}
                    className={styles.photo}
                    unoptimized
                  />
                  <figcaption className={styles.caption}>
                    <strong>Robert Moses</strong>
                    <br />
                    <em>Wagner gets his report</em>
                  </figcaption>
                </figure>
                <div className={styles.body}>
                  <p>
                    The study mentioned the expandable stadium, seating from
                    55,000 to 80,000 spectators, which would be built at the
                    Willets Point parking field, between the fair grounds and the
                    boat basin at Northern Blvd.
                  </p>
                  <p>
                    Opposition was expressed to the building of fair structures
                    which later could be used as an international university or
                    similar project.
                  </p>
                  <p className={styles.subLabel}>Must Return to City</p>
                  <p>
                    &quot;Flushing Meadow is park property required for
                    neighborhood recreation in a fast-growing community,&quot;
                    the report said. &quot;It is inalienable, and must by law be
                    turned back to the city as a well-developed park at the
                    termination of the fair. No permanent use can be permitted
                    which is not in fact a park use.&quot;
                  </p>
                  <p>
                    With federal, state and city fair participation anticipated,
                    the report called for buildings and exhibits of those
                    governmental units reflecting their importance.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.sourceRow} ${styles.sourceRow2}`}>
              <p className={styles.source}>
                SOURCE: <em>The New York Times</em>, March 2, 1960
              </p>
              <p className={styles.source}>
                SOURCE: <em>New York Daily News</em>, April 18, 1960
              </p>
            </div>
          </section>

          {/* ── Moses Previews '60 Fair ── */}
          <section className={styles.clipping} aria-label="Moses interview">
            <h2 className={styles.headline}>Moses Previews &apos;60 Fair</h2>
            <div className={styles.interviewLayout}>
              <div className={styles.col}>
                <p className={styles.exclusive}>EXCLUSIVE</p>
                <p className={styles.leadBold}>
                  What&apos;s the New York World&apos;s Fair going to be like?
                  Here&apos;s the inside from the man who knows -- Robert Moses,
                  $100,000-a-year president of the World&apos;s Fair Corporation.
                </p>
                <p className={styles.leadBold}>
                  In an exclusive question-and-answer interview with N. Y.
                  American reporter Sam Crowther, he tells the story.
                </p>
                <div className={styles.body}>
                  <p>
                    Q. Mr. Moses, what will be the aims and purposes of the
                    1964-65 World&apos;s Fair?
                  </p>
                  <p>
                    A. I suppose you mean the theme, or what they call the theme.
                    That is still in the planning stage. This, in the first
                    instance, is in the hands of the Design Board headed by
                    Wallace Harrison. But I can say that this will be a
                    World&apos;s Fair with the most important products of the
                    hands and minds of men throughout the world. But if
                    you&apos;re thinking of what is going to be emphasized, I
                    assume it will be a combination of world industry -- world
                    peace and, of course, the amusement section. You always have
                    to have the amusement area.
                  </p>
                  <p>
                    Q. We&apos;re still three and a half years from the Fair. But
                    from a general viewpoint, how would you say it will differ
                    from fairs of the recent past?
                  </p>
                  <p>
                    A.You mean -- like Brussels? But ours, of course, will be
                    bigger and better. There will be more people. And I might add
                    that the problem of getting them in and out will be much
                    greater.
                  </p>
                  <figure className={styles.figure} style={{ maxWidth: 113 }}>
                    <Image
                      src="/images/building05/building06.jpg"
                      alt="Robert Moses"
                      width={113}
                      height={208}
                      className={styles.photo}
                      unoptimized
                    />
                    <figcaption className={styles.caption}>
                      ROBERT MOSES
                      <br />
                      <em>&apos;Couldn&apos;t Run 1-Year Fair&apos;</em>
                      <span className={styles.captionCredit}>
                        Journal-American Photo by Bob Laird
                      </span>
                    </figcaption>
                  </figure>
                  <p>
                    Q. What response have you had so far from other countries?
                  </p>
                  <p>
                    A. I assume that most of the countries to which we sent
                    preliminary notices through the State Department will come
                    in. We had some trouble with the Bureau of International
                    Expositions in Paris which is supposed to fix dates and assign
                    times for different fairs. At first they said they
                    weren&apos;t going to award any fair to the United States.
                    The fellows in Paris were entertaining some other idea. But,
                    then President Eisenhower appointed a committee to see where
                    it would be in the United States. The committee decided on New
                    York and that was it.
                  </p>
                  <p>Q. How did you decide on a two-year fair?</p>
                  <p>
                    A. That was one of the first questions that came up. We
                    couldn&apos;t run a one-year fair. We couldn&apos;t raise the
                    money to put it on. It would be absolutely impossible. So,
                    it&apos;s going to be a two-year fair.
                  </p>
                  <p>
                    Q. Will emphasis be given the space age and the electronic
                    era?
                  </p>
                  <p>
                    A. I don&apos;t say that will be the main theme, I&apos;m not
                    prepared to say what the main theme will be. But I can say
                    that space and electronics will be emphasized.
                  </p>
                  <p>
                    Q. Now, Mr. Moses, has there ever been a World&apos;s Fair
                    that made money?
                  </p>
                  <p>A. I never heard of one.</p>
                  <p className={styles.subLabelArial}>
                    Expects 40 Million
                    <br />
                    Visitors First Year
                  </p>
                  <p>Q. Then, this is going to be different, isn&apos;t it?</p>
                  <p>
                    A. Sure, why not? Some skeptics think that you can&apos;t make
                    a fair solvent. I don&apos;t give a damn what they think. We
                    can do it if we start out on this principle from the very
                    beginning. A lot of people didn&apos;t think we could make
                    good on financing the Triborough Bridge and Tunnel Authority
                    program, or the Power Authority projects on the St. Lawrence
                    and Niagara but we did it anyhow by selling our bonds to
                    thousands of prudent investors who believed in us.
                  </p>
                  <p>
                    Q. What do you anticipate in the way of attendance?
                  </p>
                  <p>
                    A. Whereas there is no way of accurately predicting the number
                    of visitors, we have set a figure of 40,000,000 for the first
                    year and 30,000,000 in the second.
                  </p>
                  <p>Q. When do you expect construction to start?</p>
                  <p>
                    A. As soon as we get financing. The first structure will be an
                    administration building. It should be started shortly and be
                    completed in November.
                  </p>
                </div>
              </div>

              <div className={styles.interviewRight}>
                <figure className={styles.figure} style={{ maxWidth: 368 }}>
                  <Image
                    src="/images/building05/building07.jpg"
                    alt="Robert Moses"
                    width={368}
                    height={348}
                    className={styles.photo}
                    unoptimized
                  />
                  <figcaption className={styles.caption}>
                    <strong>ALL IS FAIR . . . </strong>Robert Moses is a study in
                    seriousness as he discusses the aims and purposes for the New
                    York 1964-1965 World&apos;s Fair
                  </figcaption>
                </figure>

                <div className={styles.interviewCols}>
                  <div className={`${styles.col} ${styles.body}`}>
                    <p>Q. What about staff?</p>
                    <p>
                      A. The corporation&apos;s working force will be relatively
                      small. As much work as possible will be farmed out to private
                      contractors and competent outside people. I would like to
                      emphasize that those who anticipate the hiring of a large
                      force of Fair employees, and would like to be numbered in
                      this army, will find it futile to submit applications for
                      jobs fortified by the usual letters from influential friends.
                      We are not running that kind of show.
                    </p>
                    <p>
                      Q. Have you any idea what the basic admission will be?
                    </p>
                    <p>
                      A. I have -- but I&apos;m not going to give it to you yet.
                    </p>
                    <p className={styles.subLabelArial}>
                      Financial Loss
                      <br />
                      Is Seen Unlikely
                    </p>
                    <p>
                      Q. What financial details are you prepared to discuss.
                    </p>
                    <p>
                      A. I can tell you now that this fair is not going to be run
                      like New York&apos;s last one as far as financial planning
                      is concerned. The last Fair was a very good show, but the
                      fact is, that financially it was something we cannot repeat
                      this time.
                    </p>
                    <p>Q. Is that why you resigned from it&apos;s board?</p>
                    <p>
                      A.One reason I resigned from the board -- after we had made
                      the basic improvements -- was because I didn&apos;t
                      understand the financial picture. Another was that I thought
                      the city&apos;s Park Commissioner should not at the same
                      time be on the fair board.
                    </p>
                    <p>
                      Q. Could you simplify as to the 1939 fair financing?
                    </p>
                    <p>
                      A. Bonds were sold to exhibitors. I suppose many people who
                      bought the bonds knew they weren&apos;t going to get their
                      money back and charged it to advertising and what-not. Many
                      felt they got their money&apos;s worth, even though they got
                      only 33 cents on the dollar in cash.
                    </p>
                    <p>Q. Who felt this way for example?</p>
                    <p>
                      A. General Motors -- bearing in mind their decision not to
                      charge for entrance, decided their exhibit would sell more
                      cars and so they took a loss on their bonds and spent a lot
                      on the Futurama to build up good will. Who has the right to
                      challenge that? But in any event, we couldn&apos;t do this
                      now if we wanted to. We couldn&apos;t raise the amount of
                      money that is needed today on this basis. We must raise money
                      by selling bonds at a fairly high interest rate to investors
                      who expect to get all their money back.
                    </p>
                    <p>
                      Q. How will you handle the problem of getting people around
                      inside the fair? The use of go-carts in the last fair seemed
                      like a pretty good one.
                    </p>
                    <p>
                      A. Within the fair grounds we will have those small
                      east-side--west-side trains that they had before and other
                      things of that sort -- but that is just a detail of the
                      really important transportation problems.
                    </p>
                    <p className={styles.subLabelArial}>
                      Transportation
                      <br />
                      Will Be Better
                    </p>
                    <p>Q. Like what?</p>
                    <p>
                      A. The basic transportation to and from the fair. For example
                      the construction of new highway approaches to the site which
                      would have been built anyway, but not completed for some
                      time, have been speeded up to be finished in time for the
                      opening. The Throggs Neck Bridge which parallels the
                      Whitestone and doubles its capacity will be finished before
                      the fair opens. The Long Island Railroad will put up another
                      temporary station within the fair to service people from
                      Brooklyn and Manhattan. The subways will not have extensions
                      running into the amusement section this time, however.
                    </p>
                  </div>

                  <div className={`${styles.col} ${styles.body}`}>
                    <p>Q. How come?</p>
                    <p>
                      A. Because there will be a new highway in that right-of-way,
                      the extension of Van Wyck Expressway. Buses will run from
                      subway and railroad stations to the fair. Without these
                      connections, you have nothing. You couldn&apos;t get crowds
                      into the fair or out.
                    </p>
                    <p>
                      Q. What kind of cultural exhibits do you envisage?
                    </p>
                    <p>
                      A. We mustn&apos;t proceed on the theory that everyone is
                      coming to the fair to be cultured, at least I don&apos;t
                      believe so. Most of the cultural exhibits will be supplied by
                      the various nations.
                    </p>
                    <p>Q. Can you cite specific examples?</p>
                    <p>
                      A. Let&apos;s consider the new countries in Africa. There
                      are 10 of them now, five more on the way. By 1964 there will
                      be close to 20. If native arts and crafts, native music and
                      that kind of thing are considered cultural, I think they
                      will supply a lot of it. I don&apos;t know just where you
                      draw the line. I suppose quite a lot of our American
                      industry and business exhibits will be cultural in a broad
                      sense, so will the federal, State and city exhibits.
                    </p>
                    <p className={styles.subLabelArial}>
                      Not Sure of Soviet
                      <br />
                      Role at Exhibit
                    </p>
                    <p>
                      Q. Will the fair have a &quot;trade-mark&quot; exhibit such
                      as the Trylon and Perisphere or the Norman Bel Geddes
                      General Motors&apos; Futurama exhibit?
                    </p>
                    <p>
                      A. Certainly, there will be something of a theme center. As
                      to Futurama, that was the most popular exhibit in the last
                      fair and I presume General Motors will want to do something
                      just as popular this time. But I don&apos;t know what yet.
                    </p>
                    <p>
                      Q. What about the participation of other large corporations?
                    </p>
                    <p>
                      A. Under our democratic process we will have to go to many
                      big corporations, to the people and organizations that make
                      things under our free enterprise system to parallel, equal
                      or better what the Communists will do by government edict.
                      That&apos;s where the Russians had a great advantage in
                      planning their exhibit at the Brussels Fair.
                    </p>
                    <p>
                      Q. What about Russia&apos;s attitude toward participations?
                    </p>
                    <p>
                      A. I&apos;m not in a position to tell you what Russia and
                      its satellites will do since the summit business, I
                      don&apos;t know but we&apos;ll find out soon.
                    </p>
                    <p>
                      Q. But you are optimistic about its overall success?
                    </p>
                    <p>
                      A. That should be pretty evident on the basis of what
                      I&apos;ve said . . . this will be a big fair, a good fair, a
                      successful fair . . . a World&apos;s Fair in the truest
                      global sense.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: <em>New York Journal-American</em>, June 12, 1960
            </p>
          </section>

          {/* ── 2 Codes Drafted ── */}
          <section className={styles.clipping} aria-label="Two codes drafted">
            <h2 className={styles.headlineRoman}>
              2 CODES DRAFTED FOR WORLD&apos;S FAIR
            </h2>
            <hr className={styles.rule} />
            <p className={styles.subHead}>
              Mayor Asks Council to Enact Special Health
              <br />
              and Building Regulations
            </p>
            <hr className={styles.rule} />
            <p className={styles.byline}>By LAYHMOND ROBINSON</p>
            <div className={styles.cols3Wide}>
              <div className={`${styles.col} ${styles.body}`}>
                <p>
                  The Wagner Administration took another stride yesterday toward
                  setting up the 1964-65 World&apos;s Fair as a glittering city
                  within a city.
                </p>
                <p>
                  The administration introduced two measures in the City Council
                  to give the fair its own building and health codes for the many
                  temporary exhibits that will dot the Flushing Meadow Park fair
                  site.
                </p>
                <p>
                  The special building code would be more flexible than the
                  city&apos;s in some respects. For example, it would permit
                  architects and builders to use more exotic and colorful designs
                  than the city code permits.
                </p>
                <p>
                  It also would permit the use of such modern construction
                  materials as structural aluminum and plastics, which the
                  city&apos;s code prohibits. the code would further permit
                  greater use of decorative materials such as copper and brass.
                </p>
                <p>
                  But the code would require the exhibits to meet the same high
                  safety standards as other buildings in the city, according to
                  Building Commissioner Peter J. Reidy, who played a key role in
                  drafting this special code.
                </p>
                <p>
                  The proposed health code also would differ in some respects from
                  the city&apos;s regular code; it would be much stricter.
                </p>
              </div>
              <div className={`${styles.col} ${styles.body}`}>
                <p>
                  For example, the World&apos;s Fair 1964-65 Corporation, which
                  will operate the fair, will be empowered under the special
                  health code to hire a special staff of inspectors to make daily
                  inspections of eating places and other facilities. By contrast,
                  the city Health Department, makes only spot checks of
                  food-handling establishments.
                </p>
                <p>
                  The health code also calls for thorough physical examinations of
                  anyone handling food, and certification that they are free of
                  contagious disease.
                </p>
                <p>
                  The code requires drinking straws to be individually wrapped;
                  prohibits the use of cloth bags for dispensing whipped cream,
                  icing or other topping and forbids the sale of shellfish on open
                  stands.
                </p>
                <p>
                  It requires, among other things, that different types of foods
                  in a freezer by segregated; that meat grinders be used for only
                  one kind of meat, and that a special World&apos;s Fair health
                  officer be permitted to sample food or drink at any time, free
                  of charge, for inspection and analysis.
                </p>
                <p>
                  The city also will give the fair operators the right to
                  establish their own police and fire-fighting forces.
                </p>
                <p>
                  Mayor Wagner also has asked the Council to establish a
                  nine-member city commission to supervise the planning,
                  construction and operation of the city&apos;s own exhibit at the
                  fair.
                </p>
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: <em>The New York Times</em>, August 31, 1960
            </p>
          </section>

          {/* ── '64 Fair Opposed ── */}
          <section className={styles.clipping} aria-label="Fair opposed by world group">
            <h2 className={styles.headlineRoman}>
              &apos;64 FAIR OPPOSED BY WORLD GROUP
            </h2>
            <hr className={styles.rule} />
            <p className={styles.subHeadBold}>
              30 Member Nations in Body
              <br />
              Are Told Not to Take Part
              <br />
              in Exposition Here
            </p>
            <hr className={styles.rule} />
            <p className={styles.subHeadBold}>EXHIBITION WILL GO ON</p>
            <hr className={styles.rule} />
            <p className={styles.subHead}>
              City Group Rejects &apos;Control
              <br />
              and Direction&apos; -- Seattle
              <br />
              Fair in &apos;62 Approved
            </p>
            <hr className={styles.rule} />
            <p className={styles.byline}>
              By A. M. ROSENTHAL
              <span className={styles.bylineNote}>
                Special to The New York Times.
              </span>
            </p>
            <div className={styles.cols3}>
              <div className={`${styles.col} ${styles.body}`}>
                <p>
                  PARIS, Nov. 18 -- In a blow aimed at the 1964-65 New York
                  World&apos;s Fair, thirty nations have been instructed by the
                  International Bureau of Expositions not to take part in any fair
                  in the United States in the next ten years except the Seattle
                  Exhibition of 1962.
                </p>
                <p>
                  [In a statement issued here, sponsors of the New York fair
                  rejected the &quot;control and direction&quot; of the Paris
                  bureau, and declared that the fair would be held as planned, and
                  that foreign Governments would participate despite the
                  bureau&apos;s disapproval.]
                </p>
                <p>
                  The decision was taken by the board of the bureau, an
                  intergovernmental organization, on Nov. 8. Representatives of the
                  bureau said that the decision was binding on the members under a
                  convention signed in 1928.
                </p>
                <p>
                  Organizers of the Seattle fair, who have set up an office in
                  Paris, were jubilant. They said they believed that members of the
                  bureau -- which include Canada, France, Britain, the Soviet
                  Union, Austria and West Germany -- would be bound to abide by
                  the decision. The United States is not a member of the
                  organization. Private organizations and business are not included
                  in the decision.
                </p>
                <p className={styles.subLabel}>Room to Negotiate</p>
                <p>
                  Exposition specialists who have been watching the
                  behind-the-scenes struggle said there might still be room for
                  further negotiation between the New York World&apos;s Fair and
                  the bureau.
                </p>
                <p>
                  The decision was a result of a sharp disagreement between the
                  bureau and the directors of the New York World&apos;s Fair over
                  the terms of the exhibition.
                </p>
              </div>
              <div className={`${styles.col} ${styles.body}`}>
                <p>
                  The bureau objected to the New York organization&apos;s plan to
                  hold the fair for six months in both 1964 and 1965, and said that
                  under the bureau&apos;s rules, only a total of six months could
                  be allowed.
                </p>
                <p>
                  Members of the bureau also protested the intention of the New
                  York fair to rent space to exhibiting nations for their
                  pavilions. The bureau said that space should be provided free.
                </p>
                <p>
                  Among those signed up for the fair here are the Soviet Union,
                  Bulgaria, Italy, Mexico, Nationalist China and Vatican City. Most
                  of the principal nations of the world and many lesser powers are
                  expected to have exhibits at Flushing Meadow Park when the fair
                  opens in the spring of 1964.
                </p>
                <p>
                  Dr. Charles M. Fonck, a New York investment banker who was
                  director general of the Brussels World&apos;s Fair of 1935,
                  expressed confidence yesterday that a &quot;gentlemen&apos;s
                  agreement&quot; could be worked out to allow member nations of
                  the bureau to participate in the New York fair.
                </p>
                <p className={styles.subLabel}>Seattle Obeying Rules</p>
                <p>
                  Organizers of the Seattle exposition watched the dispute closely
                  here.
                </p>
                <p>
                  Representatives of the Seattle fair said that they had gone out
                  of their way to comply with the rules of the bureau. They said
                  they were providing space rent free for national pavilions and
                  were making contact with Governments throughout Europe and other
                  parts of the world. The United States has committed $9,000,000
                  for a science and technology exhibit.
                </p>
                <p>
                  Officials of the New York fair also have visited Europe, for
                  unsuccessful talks with members of the board of the international
                  bureau, and to try to line up national exhibitors.
                </p>
              </div>
              <div className={`${styles.col} ${styles.body}`}>
                <p>
                  The bureau&apos;s decision does not specifically mention the New
                  York fair. It gives approval to participation in the Seattle fair
                  and calls attention to a provision in the international
                  exhibition convention that prohibits participation in more than
                  one fair of the same regional zone for a ten-year period.
                </p>
                <p className={styles.subLabel}>U.S. Not a Member</p>
                <p>
                  Thomas J. Deegan, chairman of the executive committee of the New
                  York World&apos;s Fair Corporation, said yesterday that the
                  United States had never signed the Bureau of International
                  Expositions Convention. It noted that the 1939-40 fair was held
                  here, with many foreign nations participating, without the
                  bureau&apos;s approval.
                </p>
                <p>
                  &quot;We could not possibly obey directives of the B.I.E. and
                  allow it to control a private, free-enterprise fair in New
                  York,&quot; Mr. Deegan&apos;s statement said. &quot;Its rules
                  include a limitation of one year for the life of any fair.
                </p>
                <p>
                  &quot;A one-year fair in New York is impossible. This was fully
                  explained to the commission appointed by President Eisenhower to
                  select a fair city in the United States. We stated the fair must
                  continue two years to justify the huge investments, amounting to
                  $700,000,000, to accommodate the numbers anticipated, and to
                  provide sound financing. There are other rules we could not
                  follow, such as giving away a huge amount of free space.
                </p>
                <p>
                  &quot;Aside from the absurdity of operating a fair here under
                  control from a bureau in Paris, there is no sentiment here at
                  this time for joining treaty organizations of this sort.&quot;
                </p>
                <p>
                  Nevertheless, Mr. Deegan and others among the original sponsors
                  of the fair had tired for a long time to win approval by the
                  bureau.
                </p>
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: <em>The New York Times</em>, November 19, 1960
            </p>
          </section>

          {/* ── Unisphere ── */}
          <section className={styles.clipping} aria-label="Unisphere symbol">
            <figure className={styles.figure} style={{ maxWidth: 365 }}>
              <Image
                src="/images/building05/building08.jpg"
                alt="Unisphere"
                width={365}
                height={318}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption} style={{ textAlign: "left" }}>
                SYMBOL OF 1964 WORLD&apos;S FAIR -- Sketch of the Unisphere, a
                huge stainless steel globe, which will be erected at Flushing
                Meadow. It towers 135 feet and will occupy almost the precise site
                of the Trylon and Perisphere of 1939-40.
              </figcaption>
            </figure>
            <p className={styles.unisphereHead}>
              The Word for It Is &apos;Unisphere&apos;
            </p>
            <p className={styles.unisphereDeck}>
              World&apos;s Fair Acquires a Symbol
            </p>
            <p className={styles.unisphereBy}>By Ralph Chapman</p>
            <div className={styles.cols2}>
              <div className={`${styles.col} ${styles.body}`}>
                <p>
                  Unisphere became a new word in the English language yesterday.
                </p>
                <p>
                  What it means is a huge, stainless steel globe to be erected as
                  the symbol of the World&apos;s Fair scheduled to open about May
                  1, 1964, at Flushing Meadow. Theme of the Fair is &quot;Peace
                  Through Understanding.&quot;
                </p>
                <p>
                  Towering 135 feet, it will occupy almost the precise site of the
                  Trylon and Perisphere which dominated New York&apos;s fair on
                  the same park area in 1939-&apos;40. This is behind and to the
                  northeast of the New York City building, sole remaining structure
                  from the earlier exposition.
                </p>
                <p>
                  All of the continents and major islands of the world be
                  superimposed on the globe in the stainless steel mesh. Mountain
                  chains will be pressed into exaggerated projection in order to
                  give a realistic effect. National capitals will be pin-pointed by
                  flashing lights behind lenses. At night, the Unisphere will be
                  flood-lighted from a distance so that the continents will appear
                  mysterious and in movement. The whole thing is only to be seen.
                  There will be no way to enter the sphere.
                </p>
                <p>
                  Visitors had access to the inside of one of the two symbols of
                  the last fair. The Perisphere contained a gallery from which
                  thousands viewed, in the words of the official fair guide,
                  &quot;Democracity,&quot; a dramatic and splendidly executed
                  vision of a city, co-ordinated and coherent in plan,&quot; in
                  miniature.
                </p>
                <p>
                  The base of the other &quot;theme&quot; building, the Trylon,
                  served as an entrance to the Perisphere.
                </p>
                <figure className={styles.figure} style={{ maxWidth: 117 }}>
                  <Image
                    src="/images/building05/building09.jpg"
                    alt="Trylon and Perisphere"
                    width={117}
                    height={293}
                    className={styles.photo}
                    unoptimized
                  />
                  <figcaption className={styles.caption}>
                    THE OLD SYMBOL--The Trylon and Perisphere of 1939-&apos;40
                  </figcaption>
                </figure>
                <p>
                  Surrounding the globe, and some distance from it, there will be
                  three elliptical &quot;orbits.&quot; A light representing a
                  satellite will move at high speed along each. The
                  &quot;satellites&quot; will be of different sizes, move at
                  different speeds, and travel in different directions.
                </p>
                <p>
                  Announcement of the symbol was made yesterday by Robert Moses,
                  president of the fair corporation, and Roger M. Blough, chairman
                  of the United States Steel Corp., at the company&apos;s offices,
                  71 Broadway. The globe will be a present to the fair from U.S.
                  Steel and will remain as a permanent part of Flushing Meadow
                  Park.
                </p>
                <p>
                  The globe will be fabricated at the company&apos;s American
                  Bridge division plant in Ambridge, Pa., near Pittsburgh, and
                  shipped to Flushing Meadow in sections.
                </p>
              </div>
              <div className={`${styles.col} ${styles.body}`}>
                <p>
                  Corporation executives said its estimated weight is 200 tons.
                  They said they could not, this early, estimate its cost.
                </p>
                <p>
                  Investigation disclosed that its name was coined by Mr. Blough.
                </p>
                <p>
                  The Unisphere was described in a press release from the fair
                  corporation as a &quot;massive armillary sphere.&quot; That
                  second word threw the press into confusion and there was no
                  enlightenment from the fair&apos;s press agents.
                </p>
                <p>
                  Study of unabridged dictionaries revealed that the closet
                  translation is &quot;skeletal.&quot; In other words, the
                  Unisphere will not be a solid mass, but will be made of steel
                  strips with plenty of air space between them.
                </p>
                <p className={styles.subLabel}>&quot;Nothing Complicated&quot;</p>
                <p>
                  Mr. Moses said that there is &quot;nothing complicated about
                  it&quot; and then added that &quot;frankly, I never understood
                  the Trylon and Perisphere.&quot;
                </p>
                <p>
                  Mr. Blough recalled that &quot;more than two decades ago,
                  visitors to the last World&apos;s Fair held here in New York
                  marveled at the Trylon and Perisphere which were erected by the
                  engineers and workmen of our American Bridge Division.&quot;
                </p>
                <p>
                  Unisphere was designed by Gilmore D. Clarke of Clarke &amp;
                  Rapauno, landscape architects and consulting engineers. Mr.
                  Clarke is a consultant in connection with plans for the fair.
                </p>
                <p>
                  Widest of the structural elements will be the equator. Somewhat
                  narrower will be the strips representing the Tropics of Cancer
                  and Capricorn. Still others will form lines of longitude and
                  latitude. they will be fixed to the sphere but appear to be
                  independent of it. A light representing a satellite, will move
                  speedily along each orbit at different speeds and in opposite
                  directions.
                </p>
                <p>
                  Diameter of the sphere will be 120 feet and it will be set on a
                  fifteen-foot base. The globe will be tilted 23 1/2 degrees from
                  vertical because, one official said, this will permit a better
                  view of the United States and &quot;we&apos;re all interested in
                  the United States, aren&apos;t we?&quot;
                </p>
                <p className={styles.subLabel}>12-Sided Pool</p>
                <p>
                  Unisphere&apos;s base will be in the center of a 12-sided pool.
                  The pool and surrounding landscaping is to be done by the fair
                  corporation. One suggestion under consideration is that sculptures
                  at the twelve corners of the pool represent the signs of the
                  zodiac. These too would be in stainless steel.
                </p>
                <p>
                  The concept is that vertical fountains will form a wall of water
                  around the base of the sphere. Other fountains, at the edge of
                  the pool, will arch inward. The fountains will be lighted from
                  above and below.
                </p>
                <p>
                  &quot;Unisphere illustrates, symbolizes and embodies,&quot; Mr.
                  Moses said, &quot;man&apos;s achievements on a shrinking globe in
                  an expanding universe. It emphasizes the necessity of achieving
                  peace through mutual understanding of all peoples.&quot;
                </p>
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: <em>Herald Tribune</em>, February 15, 1961
            </p>
          </section>

          {/* ── Burying of River ── */}
          <section className={styles.clipping} aria-label="Burying of river">
            <h2 className={styles.headlineRoman}>
              BURYING OF RIVER BEGUN FOR &apos;64 FAIR
            </h2>
            <hr className={`${styles.rule} ${styles.ruleWide}`} />
            <p className={styles.subHead} style={{ fontSize: "1rem" }}>
              Moses Starts &apos;Dirt Flying&apos; to Shift Flushing Stream
            </p>
            <hr className={`${styles.rule} ${styles.ruleWide}`} />
            <p className={styles.byline}>By NAN ROBERTSON</p>
            <div className={styles.cols3}>
              <div className={`${styles.col} ${styles.body}`}>
                <p>
                  Robert Moses dug the first ground yesterday in a nine-month
                  project that will turn 1,900 feet of the Flushing River
                  underground.
                </p>
                <p>
                  The river stands in the way of the 1964-65 World&apos;s Fair, of
                  which Mr. Moses is president.
                </p>
                <p>
                  Part of this unglamorous watercourse will flow through twin
                  subterranean culverts, 7 feet high and 10 feet wide, on the east
                  side of the World&apos;s Fair site. Twelve acres of bog and
                  shallow water will thus be converted into usable land.
                </p>
                <p>
                  This, the first permanent public improvement of Flushing Meadow
                  Park, will cost $4,624,321.
                </p>
                <p>
                  Flushing River flows north. It will vanish underground near the
                  Long Island Expressway, emerge at the pool that was called the
                  Lagoon of Nations in the 1939-40 World&apos;s Fair, disappear
                  once more on the other side and then surface near the Long Island
                  Rail Road tracks.
                </p>
              </div>
              <div className={`${styles.col} ${styles.body}`}>
                <p className={styles.subLabel}>Moses Is Prophetic</p>
                <p>
                  What is now an elliptical pool will be enlarged 53,000 square
                  feet to become a circular pond, 670 feet in diameter. A fountain
                  may adorn the center.
                </p>
                <p>
                  Yesterday&apos;s noontime ceremonies were short and soggy. The
                  morning&apos;s drenching rains slowed to a drizzle and then
                  stopped moments before Mr. Moses addressed the crowd of about 100
                  persons.
                </p>
                <p>
                  &quot;Pretty soon you&apos;ll see the dirt fly,&quot; he
                  promised.
                </p>
                <p>
                  He spoke before a sign that read: &quot;New York World&apos;s
                  Fair, 992 days to opening day, April 22, 1964.&quot;
                </p>
                <p>
                  Tin-helmeted workers of the Slattery Contracting Company waited
                  to begin work beside a bulldozer and a truck-mounted crane with a
                  clamshell digging bucket. In all directions stretched swampy land
                  dotted with trees.
                </p>
                <p>
                  The only sign of the last World&apos;s Fair more than twenty
                  years ago was a pair of gigantic flagpoles across the Flushing
                  River. They were topped by eagles of the Third Reich. The
                  swastikas had been removed.
                </p>
              </div>
              <div className={`${styles.col} ${styles.body}`}>
                <p className={styles.subLabel}>Morris Also Looks Ahead</p>
                <p>
                  Park Commissioner Newbold Morris followed Mr. Moses. He said the
                  story of Flushing Meadow Park was &quot;from dumps to
                  glory.&quot;
                </p>
                <p>
                  The Commissioner pointed out that &quot;it cost $56,000,000 to
                  prepare this site for the last fair.&quot; This time, he said,
                  the City of New York will spend $24,000,000 during the next three
                  years for permanent improvements in the park.
                </p>
                <p>
                  Mr. Morris said the fair corporation expects to repay this amount
                  to the city, and turn over an additional estimated $29,000,000 in
                  profits to be used for educational purposes.
                </p>
                <p>
                  The first steps in sending the Flushing River underground will be
                  the draining of the old stream and, temporarily, the lagoon. Then
                  sludge will be pumped out of the stream&apos;s bed. The twelve
                  acres finally gained will be covered with 130,000 cubic yards of
                  fill, then top soil will be laid on and landscaped.
                </p>
                <p>
                  Besides the World&apos;s Fair officials attending, Queens Borough
                  President John T. Clancy, described by Mr. Moses as &quot;the king
                  of Queens,&quot; also appeared and spoke briefly in praise of the
                  fair&apos;s president.
                </p>
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: <em>The New York Times</em>, August 4, 1961
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building04"
        explicitPrevious
        nextHref="/building06"
      />
    </>
  );
}
