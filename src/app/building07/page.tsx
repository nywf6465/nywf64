import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Phantoms — Building the Fair — nywf64.com",
  description:
    "Phantoms — pavilions that never were at the 1964/1965 New York World’s Fair, from Building the Fair on nywf64.com.",
};

type PhantomEntry = {
  name: string;
  note?: string;
};

type PhantomGroup = {
  heading: string;
  entries: PhantomEntry[];
};

const LEFT_GROUPS: PhantomGroup[] = [
  {
    heading: "Industrial Exhibitors",
    entries: [
      {
        name: "Arnold Bakeries",
        note: "Among the first industries to express an interest.",
      },
      { name: "Frontier Town" },
      { name: "America Fore" },
      {
        name: "Graphic Arts",
        note: "An early entry to the Fair that was still attempting to secure financing one year prior to the opening of the Fair.",
      },
      { name: "Heineken Brewing" },
      { name: "Camp Cayuga" },
      { name: "Hall of Medicine" },
      { name: "Hall of Labor" },
      {
        name: "World of Food",
        note: "Pavilion was partially constructed and demolished prior to the opening of the Fair",
      },
      { name: "Data Patterns" },
      { name: "Project '64" },
      { name: "Corn Products" },
      { name: "National Dairy Products" },
      { name: "Revlon" },
      { name: "Pittsburgh Plate Glass" },
      { name: "Ballantine" },
      { name: "Small Business Pavilion" },
      { name: "Beech Nut" },
      { name: "Metropolitan Life" },
      { name: "Synagogue Council of America" },
      { name: "Country Fair" },
      { name: "Brown & Williamson Tobacco" },
      { name: "World of Toys" },
      { name: "Grayson-Robinson Stores" },
      { name: "Piel Brothers" },
    ],
  },
  {
    heading: "International Exhibitors",
    entries: [
      { name: "West Germany" },
      { name: "Organization of American States", note: "Arch of the Americas" },
      { name: "Columbia" },
      { name: "Nepal" },
      { name: "Islamic Center" },
      {
        name: "USSR",
        note: "One of the first nations to sign-on with the Fair. Withdrew after fourteen months of preparation",
      },
      { name: "Afghanistan" },
      { name: "Mali" },
      { name: "Brazil" },
      {
        name: "Yugoslavia",
        note: "Chose Expo '67 over New York's Fair",
      },
      {
        name: "Argentina",
        note: "Constructed a pavilion and never took occupancy",
      },
      {
        name: "France",
        note: "Broke ground, never completed construction",
      },
      { name: "Iraq" },
      { name: "Saudi Arabia" },
      {
        name: "Kuwait",
        note: "Chose Expo '67 over New York's Fair",
      },
      { name: "Yemen" },
      { name: "Libya" },
      {
        name: "Monaco",
        note: "Chose Expo '67 over New York's Fair",
      },
      { name: "Nigeria" },
      {
        name: "Tunisia",
        note: "Chose Expo '67 over New York's Fair",
      },
      {
        name: "Israel",
        note: "Pavilion designed. Decided to focus on participation in Expo '67 due to cost constraints.",
      },
      {
        name: "Italy",
        note: "Participation announced with much fanfare",
      },
    ],
  },
];

const RIGHT_GROUPS: PhantomGroup[] = [
  {
    heading: "International Exhibitors (continued)",
    entries: [
      {
        name: "United Nations Agencies",
        note: "Occupied the vacated Sierra Leone Pavilion in 1965",
      },
      { name: "UNICEF" },
      { name: "Senegal" },
      {
        name: "Ethiopia",
        note: "Chose Expo '67 over New York's Fair",
      },
      { name: "Ghana" },
      {
        name: "Trinidad & Tobago",
        note: "Chose Expo '67 over New York's Fair",
      },
      { name: "Uruguay" },
      { name: "Ecuador" },
      { name: "Australia" },
      {
        name: "Haiti",
        note: "Chose Expo '67 over New York's Fair",
      },
      { name: "Peru" },
      { name: "Turkey" },
      { name: "Cambodia" },
      { name: "United Kingdom" },
      { name: "Poland" },
      { name: "Syria" },
      { name: "Arab League" },
      { name: "World of Youth" },
      { name: "Netherlands" },
      { name: "Chile" },
      {
        name: "Jamaica",
        note: "Chose Expo '67 over New York's Fair",
      },
      { name: "Bolivia" },
      {
        name: "Algeria",
        note: "Chose Expo '67 over New York's Fair",
      },
    ],
  },
  {
    heading: "American States & Territories",
    entries: [
      { name: "Puerto Rico" },
      { name: "Virgin Islands" },
      { name: "Alabama" },
      { name: "Georgia" },
      { name: "Heartland States" },
      { name: "Delaware" },
      { name: "Arkansas" },
      { name: "Pennsylvania", note: "Hosted a small exhibit in 1965" },
      { name: "Kentucky" },
      { name: "Michigan" },
      { name: "Kansas" },
      { name: "California" },
      { name: "Tennessee" },
      { name: "Virginia" },
    ],
  },
  {
    heading: "Transportation Exhibitors",
    entries: [
      { name: "Marine Center" },
      { name: "Mobile Homes" },
      { name: "Union Tank Car" },
      { name: "Aero Space" },
      { name: "BOAC (airline)" },
      { name: "Air France" },
      { name: "National Trailways" },
      { name: "Pan Am" },
    ],
  },
  {
    heading: "Amusement Area Exhibitors",
    entries: [
      { name: "Las Vegas East" },
      { name: "Fisherman's Wharf" },
      {
        name: "Century Showcase Theater-Nightclub",
        note: 'Possibly evolved into Angus Wynne\'s "Texas Pavilions & Music Hall"',
      },
      { name: "American Indian Pavilion" },
      { name: "Monkey Speedway" },
      { name: "Bozo World" },
      { name: "Jai Alai Arena" },
    ],
  },
];

function PhantomList({ group }: { group: PhantomGroup }) {
  return (
    <div className={styles.listGroup}>
      <h3 className={styles.listHeading}>{group.heading}</h3>
      <ul className={styles.list}>
        {group.entries.map((entry) => (
          <li key={entry.name}>
            {entry.name}
            {entry.note ? (
              <ul>
                <li>{entry.note}</li>
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Building the Fair — Phantoms.
 * Body from legacy building08.html (mapped to /building07 as Page 7 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building07Page() {
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

      <article className={styles.article} aria-labelledby="building07-title">
        <header className={styles.titleBar}>
          <h1 id="building07-title" className={styles.titleBarMain}>
            Phantoms
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              Everyone wanted to &quot;Come to the Fair!&quot; After all, it was
              going to be the <em>New York</em> World&apos;s Fair. New York was
              the center of the universe in the mid-twentieth century.
              Headquarters to the United Nations, it was the world&apos;s
              capitol. Headquarters to the largest financial institutions and
              corporations, it was the economic center of the universe. A
              twelve-story globe in the middle of the Fairgrounds was no small
              boast. To be a part of <em>New York&apos;s</em> World&apos;s Fair
              was an expression of power and prestige. And the opportunity to
              sell a message, a product or a nation to 70 million projected
              visitors was a tantalizing prospect indeed.
            </p>
            <p>
              The press reported with great fanfare the announcements of the Fair
              Corporation. Week after week new countries, states, companies and
              organizations were signing on with the Fair. Steadily, the huge
              site map at the Administration Building began to fill with the
              names of exhibitors who had agreed to lease space. By the autumn of
              1962, the map boasted such names as General Motors, the Soviet
              Union, Puerto Rico and the Virgin Islands, Argentina, Mexico,
              Kodak, The World of Food, The World of Toys, the Heartland States,
              Japan, Ecuador and the State of Georgia, to name just a few.
            </p>
            <p>
              Exhibiting at the Fair would be an expensive proposition. Site
              rental and import duties on construction materials and exhibits had
              to be considered. Architectural and engineering fees, landscaping
              costs, and union labor to construct pavilions were another
              consideration. Then there were the costs of operation once the Fair
              opened: staffing and grounds upkeep and refuse removal. These
              weren&apos;t <em>Topeka</em> costs. These were <em>New York</em>{" "}
              costs.
            </p>
            <p>
              The Bureau of International Exhibitions (BIE) had denied official
              approval of the Fair and the thirty (mostly western European nation)
              members of the organization were banned from officially
              participating. The Fair Corporation was forced to solicit trade and
              commerce organizations within these countries to host exhibits in
              lieu of official government participation. If Switzerland was barred
              from displaying her national culture because of membership in the
              BIE, perhaps the Swiss watch industry could be persuaded to exhibit
              their goods to represent Switzerland in her place. Or perhaps not.
              The stronger the trade or commercial industry, the more likely the
              participation of the international state. Nations who were not a
              party to the BIE were often poor or just emerging from years of
              colonial rule and found it difficult to secure funding for
              representation at the Fair despite eagerness to show their pride in
              new-found nationhood. And while New York&apos;s{" "}
              <em>unofficial</em> World&apos;s Fair was trawling the world for
              participation, <em>official</em> BIE sanctioned World&apos;s Fairs
              in Seattle (1962) and Montreal (1967) were vying for a piece of
              international budgets as well.
            </p>
            <p>
              In the case of the American states, legislative approval had to be
              gained and appropriations made from tax revenue to host a pavilion.
              Some legislatures met for only a few months out of the year and
              lacked time to enact legislation. Many had to budget for
              participation and sell the idea of being a part of the Fair to
              constituents. If official state government sponsorship couldn&apos;t
              be gained, perhaps a trade or commerce organization within the state
              would sponsor a state&apos;s pavilion. Or perhaps not.
            </p>
            <p>
              The 1939 World&apos;s Fair had constructed &quot;halls&quot; where
              multiple industrial firms could rent exhibit space at a nominal fee
              from the Fair. Many of these Fair-sponsored pavilions had gone
              half-empty and were money losers for the first New York World&apos;s
              Fair. This World&apos;s Fair vowed not to make the same mistake.
              Smaller companies who wished to participate would have to sign on
              with private organizations looking to put up such structures as
              &quot;The Transportation &amp; Travel&quot; pavilion and the
              &quot;Marine Center.&quot; However, these structures could only be
              constructed if enough clients could be found to make the enterprise
              profitable for the sponsor.
            </p>
          </div>

          <figure className={styles.figure}>
            <p className={styles.sectionLabel}>Small Business Pavilion</p>
            <Image
              src="/images/building07/building221.jpg"
              alt="Small Business Pavilion model"
              width={400}
              height={146}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              A proposed multi-exhibitor, the Small Business Pavilion would have
              consisted of five connected geodesic domes housing exhibits of
              smaller American businesses in a mall-like atmosphere. The pavilion
              was never constructed.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              In the final analysis, the high costs, the BIE fiasco and the
              aversion of the Fair to provide little if any financial support to
              any exhibitor made it virtually impossible for many eager
              participants to come to the Fair. Exhibiting at the{" "}
              <em>New York</em> World&apos;s Fair was the dream of many. In
              reality, it was simply too expensive for all but a few. It is no
              wonder then that the map of the Fair began to fill with
              &quot;phantom&quot; pavilions as this reality sunk in. Major
              exhibits, announced with great flourish, would quietly disappear
              from the site map with little or no comment. The Fair was not as
              anxious to share their disappointments with the public as they were
              their successes. Thus, the pavilions of Russia, France, Israel, the
              Netherlands and Italy; the Graphic Arts pavilion and The World of
              Toys; the Michigan, Georgia and Alabama pavilions; the
              Grayson-Robinson Stores and Aero Space pavilions, along with many
              others, simply disappeared leaving behind only a press clipping, a
              name on a map or a few architectural renderings.
            </p>
          </div>

          <section
            className={styles.phantomsIntro}
            aria-labelledby="phantoms-list-label"
          >
            <h2 id="phantoms-list-label" className={styles.sectionLabel}>
              Pavilions that never were...
            </h2>
            <p className={styles.phantomsLead}>
              This list of pavilions that &quot;never were&quot; is compiled from
              the pages of the New York World&apos;s Fair Corporation&apos;s{" "}
              <em>Progress Reports</em>. These phantom exhibitors had selected
              sites for pavilions at the Fair which were never constructed or
              never opened to Fairgoers.
            </p>
            <div className={styles.listCols}>
              <div>
                {LEFT_GROUPS.map((group) => (
                  <PhantomList key={group.heading} group={group} />
                ))}
              </div>
              <div>
                {RIGHT_GROUPS.map((group) => (
                  <PhantomList key={group.heading} group={group} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building06"
        explicitPrevious
        nextHref="/building08"
      />
    </>
  );
}
