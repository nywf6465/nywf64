import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Five Men — Building the Fair — nywf64.com",
  description:
    "Five Men — how the New York World’s Fair of 1964/1965 began, from Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — Five Men.
 * Body from legacy building04.html (mapped to /building03 as Page 3 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building03Page() {
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

      <article className={styles.article} aria-labelledby="building03-title">
        <header className={styles.titleBar}>
          <h1 id="building03-title" className={styles.titleBarMain}>
            Five Men
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              World&apos;s Fair Report, a weekly television series hosted by
              William Berns, Vice-President of Communications and Public
              Relations for the New York World&apos;s Fair Corporation, served
              to keep the New York area informed of the progress of the building
              of the Fair. World&apos;s Fair Report was presented by New
              York&apos;s local public access station, WNYC, and ran between the
              fall of 1963 and the Fair&apos;s opening the following April.
            </p>
            <p>
              Mr. Berns&apos; guest on the series&apos; first broadcast was
              Thomas J. Deegan, President of the Thomas J. Deegan Public
              Relations Company and President of the Fair&apos;s Executive
              Committee. The topic of discussion was the inception, background
              and early history of the Fair. According to Mr. Deegan, it all
              began with five men.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <Image
              src="/images/building03/building15.jpg"
              alt="Thomas J. Deegan"
              width={200}
              height={237}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Thomas J. Deegan, President of the Executive Committee of the New
              York World&apos;s Fair Corporation
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              At a meeting in City Hall in the winter of 1959, the five men,
              Deegan among them, talked enthusiastically about a new World&apos;s
              Fair and felt it was the right time for the city to host another
              exposition. They presented their idea to New York Mayor Robert
              Wagner who suggested that they contact a number of community
              leaders to solicit ideas on a Fair. Wagner loved the idea of a
              Fair because the year selected, 1964, coincided with the 300th
              anniversary of the founding of New York City. At Wagner&apos;s
              suggestion, Deegan spoke individually with thirty-five business,
              professional and religious leaders of the city to see what they
              thought of the idea of a New York World&apos;s Fair. All were in
              favor. Deegan reported his findings to the Mayor who suggested
              calling them all together in a group to discuss the Fair.
            </p>
            <p>
              Deegan&apos;s group met in June, 1959 at the restaurant
              &quot;21&quot; for a one-hour, one-cocktail (dutch treat) meeting.
              Each attendee was given the opportunity to share their thoughts
              with the group. All in attendance were greatly in favor that New
              York should again host a World&apos;s Fair. The Mayor&apos;s first
              New York World&apos;s Fair Committee was formed that day with
              Deegan elected Chairman. On August 15, 1959, Mayor Wagner publicly
              announced that a Committee had been formed to study the
              feasibility of New York hosting a World&apos;s Fair in 1964.
            </p>
            <p>
              The Committee&apos;s first order of business was to establish the
              New York World&apos;s Fair Corporation as a public, non-profit
              organization under the laws of the State of New York. Fifty more
              members were added to the Board of Directors of the Corporation
              bringing the total directors to eighty-five. Each member was asked
              to contribute $1,000 of personal money as a &quot;gift&quot; to
              the organization to provide working capital for immediate
              expenses. There were no paid employees or office expenses at this
              time. Board members were strictly volunteers to the organization
              and all dealings were handled from personal business offices.
            </p>
            <p>
              New York was not the only city interested in hosting a World&apos;s
              Fair in 1964. Washington, D.C. was actively pursuing plans for
              their own 1964 World&apos;s Fair and both Los Angeles and Chicago
              had expressed interest in hosting a World&apos;s Fair as well. A
              three-member Commission of prominent Americans was appointed by
              President Eisenhower to study the feasibility of a World&apos;s
              Fair in the United States in 1964 and to study each interested
              city&apos;s plans. On October 22, 1959, the New York World&apos;s
              Fair Corporation was requested to present themselves at the White
              House to plead their case for New York&apos;s Fair before
              Eisenhower&apos;s Commission. Los Angeles had put forth a
              half-hearted bid and Chicago&apos;s bid was meager. It was felt
              that the two best cases for a World&apos;s Fair in 1964 would be
              the bids presented by New York and Washington, D.C.
            </p>
            <p>
              The weather in Washington, D.C. on October 22nd was abysmal and
              the New York delegation arrived for their 11 a.m. presentation at
              3 p.m. having circled Washington for nearly three hours, finally
              being forced to land in Wilmington, Delaware and taxi to the White
              House from there! Despite the late arrival, the New York committee
              members felt that they gave an excellent oral presentation that
              was both compact and comprehensive. Among the presenters were
              Mayor Wagner; New York Governor Rockefeller; Mr. Austin Tobin of
              the Port Authority; merchandising magnate Bernard Gimble; former
              U.S. Treasury Secretary, John Hanes; Administrator of the City of
              New York, Charles Preusse and New York City Parks Commissioner,
              Robert Moses who had been an early enthusiastic supporter and who
              had agreed to lease Flushing Meadow Park, the proposed site of the
              Fair, to the organization for $1 per year.
            </p>
            <p>
              One week later, on October 29, 1959, President Eisenhower
              announced that New York would be designated as the city to host
              the World&apos;s Fair in 1964. The World&apos;s Fair had it&apos;s
              first big &quot;score!&quot; Now financing needed to be secured.
            </p>
          </div>

          <div className={styles.renderRow}>
            <figure className={styles.renderFigure}>
              <Image
                src="/images/building03/building16.jpg"
                alt="Fair Architectural Rendering"
                width={200}
                height={121}
                className={styles.photo}
                unoptimized
              />
            </figure>
            <figure className={styles.renderFigure}>
              <Image
                src="/images/building03/building17.jpg"
                alt="Fair Architectural Rendering"
                width={200}
                height={119}
                className={styles.photo}
                unoptimized
              />
            </figure>
          </div>

          <div className={styles.body}>
            <p>
              Some $64 million in promissory notes would need to be issued to
              cover the construction and operation of the Fair. The Corporation
              attempted to gain support of city bankers and found that financial
              support would be determined by the make-up of the Fair&apos;s
              management. At this time, the Fair still had no paid employees and
              no one had actually been designated and hired to run the show.
              Deegan, along with five men (Banker David Rockefeller; Coca-Cola
              Board Chairman, William Robinson; New York City Commissioner of
              Commerce, Richard Patterson; John Hanes and Charles Preusse), set
              out to find a President.
            </p>
            <p>
              &quot;Many self-appointed candidates came forward,&quot; said
              Deegan. &quot;All lacked the qualifications. We had a dearth of
              capable men to do the job. But, clearly, the man who had the
              greatest ability to do it was standing in our midst. I had the
              honor to ask Mr. Moses if he would relinquish some of his many
              positions and accept the Presidency. The Committee was unanimous
              in the choice of Robert Moses and Mr. Moses accepted. Mr. Moses
              took on one of the most mammoth jobs of our time.&quot; With
              Robert Moses as President of the New York World&apos;s Fair
              Corporation, financing was secured.
            </p>
            <p>
              In August, 1960, industrial leaders from around America were
              gathered together at the Fair&apos;s first headquarters, the New
              York City Building in Flushing Meadow Park, for a presentation on
              what the Fair had to offer ... the cost and the potential benefit
              of presenting America&apos;s free enterprise system to the world.
              The New York World&apos;s Fair Corporation had four goals,
              &quot;bellwethers&quot; as Mr. Deegan called them, which they felt
              had to be achieved in order to have a successful World&apos;s Fair.
              The governmental, industrial and international community would be
              watching for the success of these four goals:
            </p>
            <ul>
              <li>
                Congressional appropriation of funds to construct a Federal
                exhibit at the Fair.
              </li>
              <li>
                General Motors as an exhibitor to lead the industrial community
                in participation.
              </li>
              <li>Participation by the Kremlin (USSR).</li>
              <li>Participation by the Vatican.</li>
            </ul>
            <p>
              It took two sessions of Congress, but legislation was enacted to
              appropriate $17 million for the Federal Pavilion and Federal
              participation. General Motors&apos; Futurama had been the most
              popular attraction at the &apos;39 World&apos;s Fair and, as
              America&apos;s largest industry, participation by GM was vital.
              General Motors became an early supporter and major exhibitor.
            </p>
            <p>
              Deegan personally handled visits to the Soviet Union and Vatican
              to gain their support for the Fair. At the Kremlin, Communist
              Party Secretary Nikita Khrushchev told Deegan, &quot;I am for this
              but I am just one voice. There are many other voices that must be
              heard.&quot; The Soviet Union was the first nation to agree to
              participate and was in the Fair for fourteen months before
              withdrawing their participation in October, 1962. This was very
              disappointing to the Fair, considering the Cold War and the
              Fair&apos;s theme of &quot;Peace Through Understanding.&quot;
            </p>
            <p>
              The Vatican participation, on the other hand, was a success. Pope
              John XXIII personally received the Fair&apos;s delegation and was
              an enthusiastic supporter of the Fair saying, &quot;If this is
              good for the brotherhood of man and can bring the world one step
              closer to peace, we are for it.&quot; The Vatican announced they
              were coming to the Fair and wanted to do something for the
              American people. They would send Michelangelo&apos;s Pieta so that
              those who could not travel to St. Peter&apos;s to see the
              sculpture would be able to see it in America at the Fair.
            </p>
            <p>
              From inception to operation in just eighteen months; an amazing
              feat. No less amazing; the fact that it would take the New York
              World&apos;s Fair Corporation a brief four years to successfully
              complete, what Thomas J. Deegan called, &quot;one of the most
              mammoth jobs of our time.&quot;
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building02"
        explicitPrevious
        nextHref="/building04"
      />
    </>
  );
}
