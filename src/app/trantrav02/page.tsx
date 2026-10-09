import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";
import {
  EXHIBITORS_1964_LEFT,
  EXHIBITORS_1964_RIGHT,
  EXHIBITORS_1965_LEFT,
  EXHIBITORS_1965_RIGHT,
} from "./exhibitors";
import styles from "./trantrav02.module.css";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Transportation & Travel — nywf64.com",
  description:
    "Transportation & Travel Pavilion entries from the 1964 and 1965 World's Fair Information Manuals — 1964/1965 New York World’s Fair on nywf64.com.",
};

function ExhibitorList({ names }: { names: readonly string[] }) {
  return (
    <ul className={styles.names}>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

/**
 * Transportation & Travel Information Manual — dual 1964/1965 manual.
 * Body from legacy trantrav02.html. Layout: InformationManualPage (/bell02).
 */
export default function Trantrav02Page() {
  return (
    <InformationManualPage
      heroLabel="Transportation & Travel"
      titleId="trantrav02-title"
      hero={{
        src: "/images/trantravoverview/hero-banner.jpg",
        alt: "Transportation & Travel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TrantravNavChrome />}
      previousHref="/trantrav01"
      overviewHref="/trantravoverview"
      nextHref="/trantrav03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Transportation & Travel Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Vincent Grillo",
            "Transportation & Travel Pavilion , Inc.",
            "Time & Life Building",
            "Rockefeller Center",
            "New York 20, New York",
            "MU 6-6400",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["June 18, 1962"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thatcher Construction Co."],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 47; Lot 7", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["112,509 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Clive Entwistle",
            "Clive Entwistle Associates",
            "210 East 58th Street",
            "New York 22, New York",
            "MU 8-7214",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Displayers, Incorporated",
            "635 West 54th Street",
            "New York 19, New York",
            "PL 7-6500",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/trantrav02/tratra16.jpg",
        width: 600,
        height: 218,
        alt: "T&T Pavilion line drawing",
      }}
      features={[
        {
          body: (
            <>
              The Transportation and Travel Pavilion, a multiple exhibitor
              pavilion, will include a presentation of extra-terrestrial travel.
              The main floor of the Pavilion is devoted exclusively to exhibits
              for the transportation and travel industry. The second floor is
              given over to an exciting Spectacular, based on the theme of lunar
              exploration
            </>
          ),
        },
        {
          body: (
            <>
              The main attraction of the Spectacular will be a trip by moving ramp
              around the rim of a simulated moon crater. It will be enclosed by a
              huge dome, whose inner surface will serve as a projection of the
              lunar heavens and whose outer surface will be sculptured into a
              presentation of the moon&apos;s seas and mountains. Visitors will
              see the varied activities of a lunar exploration team moving
              lightly under reduced gravity, drilling sample soil cores for
              chemical analysis, riding strange walking vehicles, erecting
              shelters and preparing to take off for routine shuttle runs of
              orbiting stations for supplies.
            </>
          ),
        },
        {
          body: (
            <>
              <div className={styles.rightBlock}>
                <p>TRANSPORTATION AND TRAVEL, INC.</p>
                <p>(SUB-EXHIBITORS)</p>
                <p>4.29.63</p>
              </div>
              <ul className={styles.names}>
                <li>ALLIED VAN LINES</li>
                <li>CANADIAN PACIFIC</li>
                <li>DATA PATTERNS (D.P.I.)</li>
                <li>DINER&apos;S CLUB</li>
                <li>FLEET MESSENGER SERVICE</li>
                <li>HALL OF FAME (FOR TRANSPORTATION)</li>
                <li>NIAGARA THERAPY MANUFACTURING CO.</li>
                <li>STEVENS-ADAMSON</li>
                <li>TRANS WORLD AIRLINES</li>
                <li>UNITED AIRLINES</li>
                <li>UNITED STATES POWER SQUADRON</li>
              </ul>
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <hr className={styles.rule} />
          <div className={styles.rightBlock}>
            <p>TRANSPORTATION AND TRAVEL, INC.</p>
            <p>(SUB-EXHIBITORS)</p>
            <p>8.3.64</p>
          </div>
          <div className={styles.exhibitorColumns}>
            <ExhibitorList names={EXHIBITORS_1964_LEFT} />
            <ExhibitorList names={EXHIBITORS_1964_RIGHT} />
          </div>
          <p className={styles.source}>
            SOURCE: World&apos;s Fair Information Manual 1964
          </p>

          <h2 className={styles.year}>1965</h2>
          <hr className={styles.rule} />
          <div className={manualStyles.facts}>
            <div aria-label="1965 exhibit facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>EXHIBIT</p>
                <ul className={manualStyles.factLines}>
                  <li>Transportation &amp; Travel Pavilion</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>
                  AUTHORIZED REPRESENTATIVE
                </p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. William Honner</li>
                  <li>Transportation &amp; Travel Pavilion</li>
                  <li>New York World&apos;s Fair</li>
                  <li>World&apos;s Fair, New York 11380</li>
                  <li>888-7200</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>FAIR CONTACT</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Francis Miller</li>
                  <li>Port of New York Authority</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACT SIGNED</p>
                <ul className={manualStyles.factLines}>
                  <li>June 18, 1962</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ADMISSION</p>
                <ul className={manualStyles.factLines}>
                  <li>Free</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>SHOWS</p>
                <ul className={manualStyles.factLines}>
                  <li>&quot;To the Moon and Beyond&quot;</li>
                  <li>75c - Adults 25c - Children</li>
                  <li>&quot;Sea Hunt&quot; 50c</li>
                  <li>&quot;Here Come the Mad Martians&quot;</li>
                  <li>75c - Adults 25c - Children</li>
                </ul>
              </div>
            </div>
            <div aria-label="1965 site facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>LOCATION</p>
                <ul className={manualStyles.factLines}>
                  <li>Block 47; Lot 7</li>
                  <li>Avenue of Travel</li>
                  <li>Transportation Area</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AREA</p>
                <ul className={manualStyles.factLines}>
                  <li>112,509 sq. ft.</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ARCHITECT</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Clive Entwistle</li>
                  <li>Clive Entwistle Associates</li>
                  <li>210 East 58th Street</li>
                  <li>New York, New York 10022</li>
                  <li>MU 8-7214</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>DESIGNER</p>
                <ul className={manualStyles.factLines}>
                  <li>Displayers, Incorporated</li>
                  <li>635 West 54th Street</li>
                  <li>New York, New York 10019</li>
                  <li>PL 7-6500</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACTOR</p>
                <ul className={manualStyles.factLines}>
                  <li>Thatcher Construction Company</li>
                </ul>
              </div>
            </div>
          </div>
          <figure className={manualStyles.figure}>
            <Image
              src="/images/trantrav02/tratra85.jpg"
              alt="T&T Pavilion line drawing"
              width={600}
              height={226}
              className={manualStyles.figureArt}
              unoptimized
            />
          </figure>
          <p className={manualStyles.featuresHeading}>FEATURES</p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              Transportation &amp; Travel Pavilion&apos;s most distinctive
              exterior feature is the 185-foot dome, the world&apos;s largest
              replica of the <span className={manualStyles.u}>moon&apos;s surface</span>.
              Exhibitors include airlines, steamship lines, travel agencies and
              branches of the U.S. Armed Forces. Inside the dome is another
              geodesic dome where Cinerama is showing &quot;
              <span className={manualStyles.u}>To the Moon and Beyond</span>
              ,&quot; projected from the floor to the dome at a 360 degree angle.
              Another first, an underwater stage, is used to present live, Lloyd
              Bridges&apos; exciting &quot;<span className={manualStyles.u}>Sea Hunt</span>
              &quot; show.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The United States Navy shows an extremely realistic 3D film called
              &quot;Cinerama Cruise.&quot; United Airlines presents &quot;From Here
              to There,&quot; an exciting industrial travelogue produced by
              Hollywood&apos;s Saul Bass.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              &quot;Here Come the Mad Martians&quot; tells the story of a flying
              saucer visiting the Fair.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The moving platform which transports visitors from the first to
              second floor, where the largest restaurant at the Fair,{" "}
              <span className={manualStyles.u}>the Galaxy</span>, is located,
              accommodates as many as 8,000 people per hour. More than 40 other
              colorful exhibits comprise the balance of the Transportation and
              Travel building&apos;s displays, built by leaders of the
              transportation world.
            </span>
          </p>
          <div className={styles.rightBlock}>
            <p>TRANSPORTATION AND TRAVEL, INC.</p>
            <p>(SUB-EXHIBITORS)</p>
            <p>4.13.65</p>
          </div>
          <div className={styles.exhibitorColumns}>
            <ExhibitorList names={EXHIBITORS_1965_LEFT} />
            <ExhibitorList names={EXHIBITORS_1965_RIGHT} />
          </div>
          <p className={styles.source}>
            SOURCE: World&apos;s Fair Information Manual 1965
          </p>
        </>
      }
      secondaryFigure={{
        src: "/images/trantrav02/tratra96.jpg",
        width: 600,
        height: 358,
        alt: "Transportation and Travel Pavilion",
        bordered: true,
        title: "Transportation and Travel Pavilion",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}
