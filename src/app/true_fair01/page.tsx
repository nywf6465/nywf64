import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TrueFairNavChrome } from "@/components/TrueFairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./true_fair01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Robert Moses & the BIE — An Unofficial World’s Fair — nywf64.com",
  description:
    "Robert Moses and the Bureau of International Expositions — why the 1964/1965 New York World’s Fair was an unofficial World’s Fair on nywf64.com.",
};

/**
 * An Unofficial World’s Fair — Robert Moses & the BIE.
 * Body from legacy true_fair02.html (mapped to /true_fair01 as Page 1 after overview).
 *
 * Stack: unofficialhero → TrueFairNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function TrueFair01Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="An Unofficial World’s Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/true_fair/unofficialhero.jpg"
            alt="An Unofficial World’s Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TrueFairNavChrome />

      <article className={styles.article} aria-labelledby="true-fair01-title">
        <header className={styles.titleBar}>
          <h1 id="true-fair01-title" className={styles.titleBarMain}>
            Robert Moses &amp; the BIE
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.lede}>
            One of the most intriguing facts about the 1964/1965 New York
            World&apos;s Fair is that it wasn&apos;t really an{" "}
            <em>official</em> World&apos;s Fair!
          </p>

          <div className={styles.body}>
            <h2 className={styles.sectionHeading}>
              Bureau of International Expositions makes the rules
            </h2>
            <p>
              The Paris based Bureau of International Expositions (B.I.E.)
              sanctions World&apos;s Fairs. The B.I.E.&apos;s purpose is to
              prevent too many Fairs from being held too close together and to
              settle disputes between venues wishing to host expositions.
            </p>
            <p>
              Like the International Olympic Committee member nations of the
              B.I.E. appoint representatives to the organization. It is virtually
              certain that a B.I.E. member nation would have a presence at a
              B.I.E. approved Fair.
            </p>
            <p>The B.I.E. has two categories for World&apos;s Fairs:</p>
            <ul>
              <li>
                <strong>Second Category Expositions</strong> center around a
                specific thematic idea such as &quot;Tomorrow&apos;s Fresh New
                Environment&quot; or &quot;Energy Turns the World.&quot;
                Spokane&apos;s Expo &apos;74 and Knoxville&apos;s 1982
                World&apos;s Fair were such expositions. They are generally
                smaller Fairs where the host builds the pavilions for the
                exhibitors.
              </li>
              <li>
                <strong>Universal and International Expositions</strong> center
                around a broader theme such as expo67&apos;s &quot;Man and His
                World&quot; or &quot;Progress and Harmony for Mankind&quot; as at
                Expo &apos;70. These are large Fairs where countries design and
                build their own pavilions.
              </li>
            </ul>
            <p>
              In addition to categorizing World&apos;s Fairs the B.I.E. sets
              forth rules that govern their operation. Among them:
            </p>
            <ul>
              <li>
                A World&apos;s Fair may operate for no more than six months.
              </li>
              <li>
                Exhibitors may not be charged rental fees for exhibiting.
              </li>
              <li>
                A Universal and International Exposition may be held only once
                within a ten year span.
              </li>
            </ul>
            <p>
              When the New York Fair was being planned, the United States was
              not a party to the organization. However New York, seeking the
              &quot;official nod&quot; from the B.I.E., applied to host the
              Universal and International Exposition of 1964/1965.
            </p>
            <p>
              At the time of New York&apos;s application the B.I.E. had already
              granted Canada permission to host the Universal and International
              Exposition of 1967 in Montreal (expo67) following the collapse of
              earlier plans by the Soviet Union to host a 1967 World&apos;s Fair
              in Moscow. Preliminary plans were also underway for the Universal
              and International Exposition of 1970 to be held in Osaka, Japan
              (Expo &apos;70). New York was actually third in line for approval
              and their Fair would end only two years prior to an already
              approved Universal and International Exposition.
            </p>

            <h2 className={styles.sectionHeading}>
              Robert Moses breaks the rules
            </h2>
            <p>
              <Link href="/rm01">Robert Moses</Link>, President of the
              corporation that ran the Fair, was determined not to repeat the
              mistakes his predecessor had made in operating the 1939/1940
              World&apos;s Fair.
            </p>
            <p>
              To Moses, former Parks Commissioner for New York and the
              city&apos;s &quot;master builder,&quot; Flushing Meadow Park was
              the great urban park he&apos;d always dreamed of for New York. The
              park had been constructed from a former ash dump in the 1930s to
              host the 1939/1940 New York World&apos;s Fair. That Fair ended its
              two year run in the red and there had never been enough money
              available to finish the park to his liking. He envisioned the
              1964/1965 Fair, to be held on Flushing Meadow park land, as the
              vehicle to provide the infrastructure improvements and monies to
              complete the park. Moses would make his Fair a success and it
              would make a profit.
            </p>
            <p>
              In order to accomplish his goals Moses had determined that the
              Fair must operate for two seasons. Additionally he would charge
              exhibitors rental fees for the site they would occupy at the Fair.
              These plans were a direct violation of B.I.E. rules. That and the
              fact that a Universal Exposition was already sanctioned within the
              ten-year-span limit put the B.I.E. and the New York World&apos;s
              Fair Corporation, in the formidable form of Robert Moses, in
              direct conflict.
            </p>
          </div>

          <aside className={styles.rentSchedule} aria-label="Exhibit areas rent schedule">
            <h3 className={styles.rentTitle}>EXHIBIT AREAS RENT SCHEDULE</h3>
            <div className={styles.rentRow}>
              <p className={styles.rentLabel}>INDUSTRIAL</p>
              <p className={styles.rentValue}>
                $4.00 per square foot per year
              </p>
            </div>
            <div className={styles.rentRow}>
              <p className={styles.rentLabel}>INTERNATIONAL</p>
              <p className={styles.rentValue}>
                $3.00 per square foot per year
              </p>
            </div>
            <div className={styles.rentRow}>
              <p className={styles.rentLabel}>FEDERAL AND STATES</p>
              <p className={styles.rentValue} />
            </div>
            <div className={styles.rentRow}>
              <p className={styles.rentLabel}>TRANSPORTATION</p>
              <p className={styles.rentValue}>
                $4.00 per square foot per year
              </p>
            </div>
            <div className={styles.rentRow}>
              <p className={styles.rentLabel}>AMUSEMENT</p>
              <p className={styles.rentValue} />
            </div>
            <div className={styles.rentRow}>
              <p className={styles.rentLabel}>SPECIAL EXHIBITS</p>
              <p className={styles.rentValue}>
                $4.00 per square foot per year
                <br />
                (Special exhibits not listed above are under consideration)
              </p>
            </div>
            <p className={styles.rentNote}>
              It is to be noted that the charges and the conditions relating to
              the various areas look to prudent, conservative financing of
              facilities chargeable to the Fair so as to assure the highest
              standards of exhibition consistent with paying all Fair costs and
              having a balance at least sufficient to restore and complete
              Flushing Meadow Park.
            </p>
            <p className={styles.rentNote}>
              From time to time when definite commitments as to space have been
              made and leases signed, the Fair management will announce them. It
              should be noted, however, that the management does not volunteer
              recommendations and has no preferred list of architects,
              engineers, builders or other firms available and interested in
              construction within the Fair grounds. This is a matter entirely
              for the exhibitors.
            </p>
            <div className={styles.rentDown}>
              <p className={styles.rentDownTitle}>DOWN PAYMENT</p>
              <p>50% OF YEAR&apos;S RENT ON SIGNING CONTRACT.</p>
              <p>
                ADDITIONAL 50% OF YEAR&apos;S RENT BEFORE START OF CONSTRUCTION
              </p>
            </div>
            <p className={styles.source}>
              SOURCE: Pre-Fair Planning Report, dated August 15, 1960
            </p>
          </aside>

          <div className={styles.body}>
            <h2 className={styles.sectionHeading}>The consequences</h2>
            <p>
              Perhaps the B.I.E. would have been able to come to a compromise
              with New York had not Mr. Moses decided to make an issue of their
              differences. His insulting comments to the press regarding the
              B.I.E. and their rules so angered B.I.E. officials that they not
              only took the action of denying New York official permission to
              host the Fair in 1964; they specifically requested their member
              nations not to participate in the New York World&apos;s Fair!
            </p>
            <p>
              This created a rather awkward situation back in New York. How can
              it be a World&apos;s Fair if the world can&apos;t come? As a
              result of the B.I.E. decision the list of International
              participants contains some noticeable absences with Canada, Great
              Britain, Italy, Germany and Australia among those choosing not to
              exhibit. To be sure, in the end, there were many International
              participants. However most were hosted by industrial or tourist
              interests in lieu of official government sponsorship.
            </p>
            <p>
              Robert Moses and his Fair promoters were masters in securing
              private sponsorship of pavilions and thus saved the Fair from
              oblivion. And the fabulous exhibits sponsored by America&apos;s
              industrial giants provided the basis for an exciting exposition.
              But the heavy influence of national and international commercial
              interest at the fair helped to foster charges of &quot;crass
              commercialism&quot; -- the most frequent criticism leveled at the
              &apos;64 Fair.
            </p>
            <p>
              The 1964/1965 New York World&apos;s Fair has become, over the
              years, a cultural icon of a by-gone era and a landmark event for
              millions of people. However the Fair will always have the dubious
              honor of being the only World&apos;s Fair in modern times that was
              not sanctioned by the B.I.E. -- making it the only World&apos;s
              Fair that wasn&apos;t really a World&apos;s Fair!
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/true_fairoverview"
        explicitPrevious
        nextHref="/true_fair02"
      />
    </>
  );
}
