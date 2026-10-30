import type { Metadata } from "next";
import Image from "next/image";
import { WffdHero } from "@/components/WffdHero";
import { WffdNavChrome } from "@/components/WffdNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../wffdPage.module.css";

export const metadata: Metadata = {
  title: "One of the Finest Days — nywf64.com",
  description:
    "Police Department opening-day coverage of the 1964 World’s Fair from SPRING 3100 — One of the Finest Days, on nywf64.com.",
};

/**
 * WFFD feature page 3 (legacy wffd04.html remapped to /wffd03).
 * Stack: hero → Wffd nav (Page 4) → navy title bar → article → nav2
 * PREVIOUS → /wffd02; NEXT → /wffdoverview
 */
export default function Wffd03Page() {
  return (
    <>
      <WffdHero />

      <WffdNavChrome />

      <article className={styles.article} aria-labelledby="wffd03-title">
        <header className={styles.titleBar}>
          <h1 id="wffd03-title" className={styles.titleBarMain}>
            Page 4
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.essayLogoBlock}>
            <Image
              src="/images/wffd03/logo64bw.gif"
              alt="1964–1965 New York World’s Fair logo"
              width={132}
              height={124}
              className={styles.essayLogo}
              unoptimized
            />
            <h2 className={styles.essayLeadArial}>
              &hellip;One of the Finest Days
            </h2>
          </div>

          <div className={styles.essayBodyArial}>
            <p>
              When the New York World&apos;s Fair opened on April 22, New York
              became host city to the world for the second time in twenty-five
              years. The challenge of protecting life and property and preserving
              public order was never more sharply focused on the department.
            </p>
            <p>
              As the opening day of the Fair approached, threats and boasts of
              wild and unreasonable actions against the Fair grew in volume and
              intensity almost daily. Added to this problem was the booming
              influx of out-of-towners arriving by auto; vanguard of an
              anticipated seventy million World&apos;s Fair visitors. Never had
              the magnitude and complexity of providing police service been more
              overwhelming. Careful decisions and plans were being made to
              provide the procedures, the manpower and the tools to do the vital
              work. Some plans and procedures were put into immediate operation,
              others were held over until the opening day of the Fair.
            </p>
            <p>
              Intensive press campaigns of public education were carried out to
              inform the people of the civil rights to which they are entitled
              and the department&apos;s responsibility for preserving public
              peace and protecting the rights of all the people. A new Queens
              Safety District was created to provide for the rapid, safe and
              convenient use of the parkways, highways and streets. The
              uniformed force was strengthened to more than 26,000 men and
              women. The boundaries of the 110th Precinct were realigned to
              include the World&apos;s Fair properties. Unity of knowledge and
              action were arranged with the Secret Service, the World&apos;s Fair
              Police and the Transit Police.
            </p>
            <p>
              All during this tense period, subtle changes were becoming more
              and more apparent among certain segments of the civil rights
              movement. Disunity in the movement was headlined daily in the
              press. Throughout this sensitive interval the department
              maintained a discreet silence and methodically and systematically
              went about the business of developing calm and mature plans to
              handle the many and complex problems that must arise from such a
              situation.
            </p>
            <p>
              As the opening day of the Fair loomed near, vocal warning signals
              of pending massive civil disobedience were openly flaunted.
              Organized groups fanned the fires of hate, instilling fear and
              uneasiness in the hearts of the men and women of this city. The
              threat of mob action at the Fair seemed a very imminent and very
              real possibility. Still the department kept its confidence. Few
              public statements were made concerning plans. No detailed plan of
              police action was outlined for the press. Splinter groups of
              individuals — whose threats were repudiated by their own national
              leaders — threatened loudly and openly to disrupt the Fair&apos;s
              opening, to jeopardize the lives of citizens by reckless
              stall-ins on roads leading to the Fair. Their aim was to embarrass
              the city and the Fair in the eyes of the world, and to create
              public chaos.
            </p>
            <p>
              On April 22, target day of the Fair&apos;s opening, the
              extraordinary extent of police planning and encompassing
              protection was revealed. This department met a pattern of
              premeditated civil disobedience with a well coordinated pattern of
              public protection.
            </p>
            <p>
              An emergency chart, extending tours of duty to twelve hours and
              canceling days off, provided the necessary manpower not only to
              cope with the problems in and around the Fair, but to make certain
              that the rest of the city was adequately guarded.
            </p>
            <p>
              Radio cars, strategically located, ringed the complex road systems
              around the Fair. Each car was manned by uniformed patrolmen.
            </p>
            <p>Tow trucks, manned by policemen, were on hand.</p>
            <p>
              Crash helmeted motorcycle men waited beside their machines to
              respond instantly to emergency calls.
            </p>
            <p>
              Heavy details of uniformed men and detectives patrolled the
              parkway entrances, exits and overpasses.
            </p>
            <p>
              Overhead, police helicopters hovered beneath cloudy skies intent
              on spotting stall-ins or breakdowns on the parkways.
            </p>
            <p>
              The police security net was as tight as it could be made. The Fair
              opened on schedule at 10:00 a.m. There were few stall-ins and few
              breakdowns; traffic flowed freely on the parkways around the Fair
              and around the city throughout the day.
            </p>
            <p>
              However, there were incidents that day — disturbing and shocking
              incidents. Incidents completely divorced from the vital aspects
              and merits of the fight for equal rights. Men hurled themselves in
              front of automobiles; police officers were insulted, vilified,
              spat upon; the President of the United States was heckled during a
              speech; and the singing of the National Anthem was drowned out by
              the shouts and jeers of the demonstrators. But the police did
              themselves proud that day — they were everywhere, taking charge,
              suppressing violence and restoring order. The professional
              training of the force was demonstrated time and again under the
              most trying circumstances. Each officer proved himself sensitive
              to the necessary limits of police authority; each officer
              performed his duty of protecting the rights of all the people with
              tireless efficiency. And it cannot be emphasized too strongly that
              out of all that confusion, violence and disorder — not one
              specific complaint of abuse of police authority was registered
              against a single member of this department.
            </p>
            <p>
              How well the job was done was reflected not only in high praise
              from the press, but also in the many telephone calls and letters
              of praise received at Headquarters from people in all walks of
              life who witnessed the events of the memorable day.
            </p>
          </div>

          <div className={styles.essayLogoBlock}>
            <Image
              src="/images/wffd03/logo64bw.gif"
              alt=""
              width={132}
              height={124}
              className={styles.essayLogo}
              unoptimized
            />
            <h2 className={styles.essayLeadArial}>
              Opening of Fair will Long be Remembered
            </h2>
          </div>

          <div className={styles.essayBodyArial}>
            <p>
              April 22, 1964 will long be remembered by members of the force as
              a day of many moods. It was a hectic day, it was frustrating; yet
              it was a day of accomplishment, of service and — of shame.
            </p>
            <p>
              It was a proud day for the people of New York and for the Police
              Department. And it was a day that President Johnson came to see
              the world of the future; but he saw the world of today. He came to
              see the world of fantasy but in reality, he encountered the world
              of fact.
            </p>
            <p>
              The day the World&apos;s Fair opened Commissioner Murphy told what
              he and others saw:
            </p>
            <ul className={styles.essayListArial}>
              <li>
                Thirteen and fourteen year-old girls, who should have been in
                school, marching in wild circles, shrieking at the tops of their
                voices.
              </li>
              <li>
                Men caught up in a frenzy of passion deliberately hurl themselves
                in front of automobiles.
              </li>
              <li>Police officers insulted, vilified, spat upon.</li>
              <li>
                Policemen of the City of New York exhibit a degree of restraint
                and self-discipline that was a credit to the entire department.
              </li>
              <li>
                The President of the United States heckled during a speech.
              </li>
              <li>
                The strains of the National Anthem drowned out by shouts and
                jeers.
              </li>
              <li>
                Men of the department, men of the military services, standing
                proudly at attention when the Flag was raised, while a small
                group cavorted and shouted in complete disrespect.
              </li>
            </ul>
            <p>
              It was a day the vast majority of New Yorkers, and Americans,
              regardless of background or color, hope never to see again!
            </p>
            <p>
              Preparations for the opening day of the Fair began many weeks
              before the first day. Included in the elaborate police planning
              was provisions for a temporary headquarters, located at 46th
              Avenue and 111th Street, at the north-west corner of the Fair
              grounds. Packed into a fifty-foot trailer, separated into three
              rooms, was an operations room, a communications room, and storage
              space. Many on-the-spot decisions were made in the trailer, and
              sent out over radio to the widely separated police groups on
              special details at the Fair. Commissioner Murphy, many Deputy
              Commissioners and the Chief of Staff oversaw the entire operation.
            </p>
          </div>

          <p className={styles.synopsisLead}>
            A quick synopsis of the department&apos;s activity for the first
            eight hours of the day follows:
          </p>

          <div className={styles.synopsisColumns}>
            <div className={styles.synopsisCol}>
              <p>
                <strong>7:35 A.M.</strong> Roosevelt Avenue subway station,
                emergency cord pulled. People standing on the tracks . . .{" "}
                <strong>7:55.</strong> Two ambulances with doctors available at
                temporary headquarters . . . <strong>8:01.</strong> Auto with
                two flat tires on northern Boulevard opposite Marina . . .{" "}
                <strong>8:16.</strong> Commissioner Murphy arrived . . .{" "}
                <strong>8:18.</strong> Bomb scare at main gate . . .{" "}
                <strong>8:25.</strong> Pickets at Willets Point station . . .{" "}
                <strong>8:35.</strong> Some 100 demonstrators at main gate . .
                . <strong>8:50.</strong> Three autos stalled at 90th Street and
                Grand Central Parkway . . . <strong>9:10.</strong> Six persons
                try to disrupt subway at 72nd Street and Broadway. one arrest.
                off-duty officer injured . . . <strong>9:35.</strong> Arrests
                at Willets Point station . . . <strong>9:30.</strong>{" "}
                Journal-American reporter injured after fall down restaurant
                steps across from temporary headquarters . . .{" "}
                <strong>9:50.</strong> Patrolman on special detail at fair had
                been involved in meningitis case day before. Located and sent
                to Chief Surgeon . . . <strong>9:51.</strong> Stall-in
                motorcade reported leaving Brooklyn for Fair . . .{" "}
                <strong>9:58.</strong> Department helicopters report roads near
                Fair carry light traffic . . . <strong>10:30.</strong> Number
                of pickets heading south on 112th Street towards Roosevelt
                Avenue . . . <strong>10:55.</strong> Picketing at 110 Precinct
                station house. Two arrests.
              </p>
            </div>
            <div className={styles.synopsisCol}>
              <p>
                . . . <strong>11:10.</strong> Some 100 pickets in front of
                Maryland Building . . . <strong>11:15.</strong> President
                Johnson at Kennedy Airport. Two test helicopters will precede
                him to Fair . . . <strong>11:35.</strong> Four stall-in
                automobiles enter Inter-Boro Parkway at Pennsylvania Avenue . .
                . <strong>11:35.</strong> Pickets in front of Maryland Building
                reportedly planning to wait for visit of Maryland governor . .
                . <strong>11:40.</strong> Demonstration inside Fair at main
                ticket office . . . <strong>11:44.</strong> President Johnson
                landed at Fair . . . <strong>11:45.</strong> Pickets left
                Willets Point and Roosevelt Avenue . . .{" "}
                <strong>12:05.</strong> Prisoners from New York City building
                to 110 Precinct station house . . . <strong>12:10.</strong>{" "}
                Pickets at main entrance again . . . <strong>12:15.</strong> One
                arrest at 1st Precinct in World&apos;s Fair . . .{" "}
                <strong>12:20.</strong> Four-car motorcade entering Inter-Boro
                Parkway . . . <strong>12:50.</strong> three arrests on ramp . .
                . <strong>1:30.</strong> Pickets inside Ford Building . . .{" "}
                <strong>1:30.</strong> World&apos;s Fair police need more city
                police at New York State Building . . . <strong>1:40.</strong>{" "}
                Prisoners taken from City building to Flushing Armory . . .{" "}
                <strong>1:50.</strong> Trouble in New York City Building . . .{" "}
                <strong>2:00.</strong> More police needed at United States
                Pavilion . . . <strong>2:45.</strong> Many pickets at Unisphere
                . . . <strong>3:05.</strong> Some 200 pickets from nearby
                college on way to Fair . . .
              </p>
            </div>
          </div>

          <p className={styles.quoteLead}>
            An attorney for one of the demonstrating groups summed it up when he
            said, &quot;Police conduct was quite admirable.&quot; And when the
            opening passed into history, the highest praise of all came from
            Commissioner Murphy who said:
          </p>

          <blockquote className={styles.essayQuote}>
            &quot;. . . it was a proud day for the Police Department, and I
            would like to add that I think it was one of the finest days in
            terms of police effectiveness and attitude.&quot;
          </blockquote>

          <div className={styles.sourceBlock}>
            <p>
              SOURCE: from <strong>SPRING 3100</strong>, The Magazine for
              Policeman - Police Department of the City of New York - Vol. 35
              No. 6, June 1964
            </p>
          </div>

          <div className={styles.webmasterNote}>
            <p>
              <strong>webmaster&apos;s note: </strong>
              Special thanks to Gary Holmes for providing the Police Gazette
              reports of the opening day activities of the Police Departments.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/wffd02"
        explicitPrevious
        nextHref="/wffdoverview"
      />
    </>
  );
}
