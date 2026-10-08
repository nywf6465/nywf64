import type { Metadata } from "next";
import Image from "next/image";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { NyplRecordsSource } from "@/components/worfoo/NyplRecordsSource";
import styles from "./worfoo06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Groundbreaking — World of Food — nywf64.com",
  description:
    "Groundbreaking — World of Food pavilion essay — 1964/1965 New York World’s Fair on nywf64.com.",
};

const INSTRUCTION_ROWS: { detail: string; dept?: string }[] = [
  {
    detail:
      'World of Food exhibitor has ordered 40 x 80 heated tent, grass mat, 50 folding chairs, from Sheet company, to be set up 1/21, on "E" near corner of "R"',
    dept: "Maintenance",
  },
  {
    detail:
      "Fair will supply 10 x 12 platform, lectern and speakers, U.S. And W.F. flags. Exhibitor will supply symbolic banner and a number of displays to be placed inside tent. If easels are needed, exhibitor will advise us by 1/22.",
  },
  {
    detail:
      "Restaurant Associates is handling catering services for W-O-F and will provide tables for food and beverages.",
  },
  {
    detail:
      "One Queens Transit bus (53 passenger) will be used to transport guests from Administration Building to site and return. Exhibitor will absorb cost.",
    dept: "Mr. Monetti",
  },
  {
    detail:
      "Conference Room #3 will be used by exhibitor and approximately 15 sub-exhibitors as dressing room during the hours of 9 a.m. to approximately 4 p.m. (Sub-exhibitors will be changing into costumes representing corporate images and will be photographed in Model Room). Exhibitor coordinating with Press office.",
    dept: "Office Manager Press Office",
  },
  {
    detail: "Fair will supply phono. Exhibitor to bring records.",
    dept: "Maintenance",
  },
  {
    detail: "Guests will be arriving by car, subway and/or LIRR.",
    dept: "Security",
  },
  {
    detail: "Exhibitor will supply sign to be placed inside tent.",
    dept: "Maintenance",
  },
  {
    detail:
      "Exhibitor has arranged for pile driver to be brought to site. This will be placed behind tent.",
    dept: "Maintenance Engineering",
  },
  { detail: "Silver Medallion has been received.", dept: "S.E." },
  { detail: "Fair to record ceremonies.", dept: "Communications" },
  {
    detail:
      'Route to Site: "R" road and right on "E". Cars and bus will park on corner of "L" and "R"',
    dept: "Security",
  },
  {
    detail:
      "Giant man-size knife fork and spoon will be used to break ground.",
    dept: "Maintenance",
  },
];

export default function Worfoo06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="World of Food">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/worfoooverview/hero-banner.jpg"
            alt="World of Food pavilion site at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WorfooNavChrome />

      <article className={styles.article} aria-labelledby="worfoo06-title">
        <header className={styles.titleBar}>
          <h1 id="worfoo06-title" className={styles.titleBarMain}>
            Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.exhibitBox}>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>PROGRAM FOR WORLD OF FOOD GOUNDBREAKING</u>
            </p>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>Wednesday, January 23, 1963</u>
            </p>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>1:30 - 2:15 p.m.</u>
            </p>
            <p>
              Guests arrive Administration Building where the Industrial staff
              and World of Food staff will direct them to the Model Room for a
              briefing by Mr. William Ottley.
            </p>
            <p>
              Guests depart via Unisphere Room exit and board shuttle bus at that
              point for the W-O-F Site.
            </p>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>2:30 p.m.</u>
            </p>
            <p style={{ fontWeight: 700 }}>
              <u>PROGRAM: (in heated tent)</u>
            </p>
            <ol className={styles.items}>
              <li>Star Spangled Banner (record)</li>
              <li>
                Ambassador Patterson will introduce the following speakers:
              </li>
              <li>Sylvia Shur, Dir., World of Food Advisory Board</li>
              <li>
                Joseph Orr, Dir., Food and Agricultural Liaison Office, United
                Nations
              </li>
              <li>Hon. Adlai Stevenson</li>
              <li>
                Hon. Robert Moses who will present silver medallion to Jim Jones,
                Executive Vice President of World of Food
              </li>
              <li>Jim Jones, Executive Vice President of World of Food</li>
              <li>Groundbreaking</li>
              <li>Signal by Jim Jones to pile driver</li>
            </ol>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>3:00 p.m.</u>
            </p>
            <p>Refreshments</p>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>4:00 p.m.</u>
            </p>
            <p>
              Depart Fair. Bus will shuttle guests to subway and/or
              Administration Building.
            </p>
          </div>

          <div className={styles.exhibitBox}>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>World of Food Pavilion Groundbreaking</u>
            </p>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>Wednesday, January 23, 1963</u>
            </p>
            <p style={{ textAlign: "center", fontWeight: 700 }}>
              <u>Instruction Sheet</u>
            </p>
            <table className={styles.instructionGrid}>
              <tbody>
                {INSTRUCTION_ROWS.map((row) => (
                  <tr key={row.detail.slice(0, 40)}>
                    <td>{row.detail}</td>
                    <td />
                    <td>{row.dept ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <NyplRecordsSource />

          <p style={{ textAlign: "center", fontWeight: 700, margin: "1rem 0" }}>
            <u>GROUNDBREAKING AT THE NEW YORK WORLD&apos;S FAIR 1964-1965</u>
            <br />
            <u>WORLD OF FOOD PAVILION ... JANUARY 23, 1963</u>
          </p>

          <figure className={styles.figureCenter} style={{ maxWidth: 460 }}>
            <Image
              src="/images/worfoo06/wof02.jpg"
              alt="World of Food groundbreaking"
              width={460}
              height={260}
              className={styles.photoBorder}
              unoptimized
            />
            <p className={styles.photoCaptionCenter}>
              Left: The World of Food groundbreaking ceremonies, held at the New
              York World&apos;s Fair, January 23, 1963. Right: A giant set of
              silverware is used to break ground for the World of Food Pavilion.
              Left to right: George P. Monaghan, Jim Jones (executive V.P. of
              World of Food), Robert Moses, Thomas J. Deegan, Jr. and Martin
              Stone.
            </p>
          </figure>

          <div className={styles.figureCenter}>
            <Image
              src="/images/worfoo06/wof07.jpg"
              alt=""
              width={200}
              height={205}
              className={styles.photoBorder}
              unoptimized
            />{" "}
            <Image
              src="/images/worfoo06/wof09.jpg"
              alt=""
              width={200}
              height={187}
              className={styles.photoBorder}
              unoptimized
            />
          </div>

          <div className={styles.quoteBlock}>
            <p>
              &quot;... Someone told me the other day that what is lacking in our
              plans is the big gap that has to do with agriculture. And I said I
              think that this food show is the nearest thing to agriculture --
              basic ground-root agriculture that we are going to get to and the
              thing that people most understand. I don&apos;t know how many
              people coming to the Fair and looking at the scientific exhibits
              are going to understand them. I must admit that not having been
              brought up in science, I don&apos;t understand any of them too well.
            </p>
            <p>
              ... I think everybody is going to understand this food exhibit,
              because these are the things that they deal with every day. They are
              things that everybody has to know about, and I&apos;m delighted
              that this group has come in just as they have -- as a group under
              their own auspices.
            </p>
            <p>
              Now we had a tough time at the beginning of this Fair, in arriving
              at a symbol of the Fair, and we had the usual arguments as to
              whether what we had selected -- the Unisphere -- was a cliche&apos;
              thing, was something that dated back to the Middle Ages, that it was
              dated and didn&apos;t mean anything any more. The alternatives
              offered were, none of them, nearly as good. Well they&apos;ve got
              used to that. That symbol has gone around the world.
            </p>
            <p>
              And then we had a great argument, the biggest argument, I guess,
              that we did have -- as to whether we should have a design committee
              that told everybody what to do. A design committee that controlled
              the shape of buildings, the architecture of buildings, the school
              of architecture, and to a considerable extent the exhibits in the
              interior. Well we decided not to do that. We had a committee of five
              members and they recommended to us that the theme and symbol of the
              Fair -- a building a mile around, two stories high, in the shape of
              a doughnut, and all the industries, including the industries
              represented here, were to buy or rent a wedge of that doughnut.
              They were all going to be in the same building.
            </p>
            <p>
              The exhibitors pointed out that they didn&apos;t want that. They
              wanted to have their own architects. They wanted to have their own
              ideas. They wanted to put up their own buildings. Well, we were told
              that that would result in all sorts of conflict of design and plan
              -- there would be no unified plan. There would be no central theme,
              and we said -- well as against that we&apos;ll have ingenuity and
              everybody will be on his own and we&apos;ll have variety if we have
              nothing else. And that&apos;s what we decided upon.
            </p>
            <p>
              And on that high note we were told that all five members of the
              design committee would resign. Actually only one resigned and we
              went on and we&apos;ve got along on the basis of letting exhibitors
              pick their own location to the extent that we were able to give them
              the space; determine on architecture; determine on context; subject
              on to our right to order certain setbacks and heights. And that
              we&apos;ve done.
            </p>
            <p>
              I think you&apos;re going to have an excellent exhibit here. I like
              the architecture. I like what I have heard about the interior. It
              isn&apos;t going to be like anything else in the Fair, and in my
              book it shouldn&apos;t be like anything else. Now, I remember at the
              time of the last Fair, I had a friend who was in this particular
              kind of business and he was an old Yale acquaintance of mine and he
              was down here to try to get some of us to go to Pittsburgh to work
              on the Pittsburgh Plan. That was Howard Heinz. That was the time we
              were getting ready for the first World&apos;s Fair and we came down
              here to Flushing Meadow -- I was Park Commissioner, a sort of
              landlord of the premises -- and he said to me that the Heinz company
              was going to have an exhibit and what did I think of having it in
              the shape of a pickle?
            </p>
            <p>
              Well I said, I think that&apos;s a little extreme, bit I said, as far
              as I&apos;m concerned, I don&apos;t see any reason why you
              shouldn&apos;t have your exhibit in the shape of a pickle if you
              want it. And that&apos;s the theory on which we&apos;ve been
              proceeding here.
            </p>
            <p>
              I think that there&apos;s going to be more variety and more of a
              stimulus of the clash of ideas here in this Fair than there has been
              in any fair before. Now I want to give to the top fellow of this
              picture, Mr. Jim Jones, the symbol of the Fair. It has the Unisphere
              on one side which you know is a globe -- with these orbits,
              satellites around it. It doesn&apos;t move. We originally planned
              with the United States Steel people that it would revolve, but it
              was too heavy. It just was a mechanical matter -- it was an
              engineering matter that couldn&apos;t be done. So we get the same
              effect by lighting.
            </p>
            <p>
              And that is going to stay here. That&apos;s going to be a main
              feature and central point of Flushing Meadow Park when the Fair is
              over. And on the other side is the coat of arms of the City of New
              York, which will be celebrating it&apos;s 300th anniversary next year
              ...&quot;
            </p>
            <p style={{ fontWeight: 700 }}>
              Remarks made by Robert Moses on the occasion of the World of Food
              groundbreaking
            </p>
            <p>
              A six-foot-tall spoon was used to break ground at the World of Food
              by its executive vice president, Jim Jones (right) and Paul Allen,
              vice-president, American Sugar Refining Co., a sub-exhibitor. Nearly
              1000 persons attended the event, including many of the exhibitors
              in the food field participating in the World of Food.
            </p>
          </div>

          <figure className={styles.figureCenter} style={{ maxWidth: 236 }}>
            <Image
              src="/images/worfoo06/wof12.jpg"
              alt=""
              width={236}
              height={291}
              className={styles.photoBorder}
              unoptimized
            />
          </figure>

          <p className={styles.sourceLine}>
            Source: Groundbreaking Brochure, World&apos;s Fair Corporation
            Publication
          </p>
          <p className={styles.sourceLine}>
            Source: Progress Report #8, New York World&apos;s Fair 1964/1965
            Corporation
          </p>
          <p className={styles.sourceLine}>Source: April 22, 1963</p>
        </div>
      </article>

      <Nav2Bar previousHref="/worfoo05" nextHref="/worfoo07" />
    </>
  );
}
