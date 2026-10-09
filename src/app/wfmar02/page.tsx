import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { WfmarNavChrome } from "@/components/WfmarNavChrome";
import manualStyles from "@/styles/informationManualPage.module.css";
import styles from "./wfmar02.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — World's Fair Marina — nywf64.com",
  description:
    "World's Fair Marina entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Marina Information Manual page.
 * Body from legacy wfmar02.html. Layout: InformationManualPage (/bell02).
 */
export default function Wfmar02Page() {
  return (
    <InformationManualPage
      heroLabel="World's Fair Marina"
      titleId="wfmar02-title"
      hero={{
        src: "/images/wfmaroverview/hero-banner.jpg",
        alt: "World's Fair Marina at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WfmarNavChrome />}
      previousHref="/wfmar01"
      overviewHref="/wfmaroverview"
      nextHref="/wfmar03"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["World's Fair Marina"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Messrs. James B. Briggs and",
            "William C. Crane, Jr.",
            "Marinas of the Future, Inc.",
            "World's Fair Marina",
            "Northern Blvd. at 125th St.",
            "Corona 68, New York",
            "TW 8-1212",
          ],
        },
        {
          label: "BUILDERS AND OPERATORS",
          lines: ["Marinas of the Future, Inc."],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["January 23, 1963"],
        },
        {
          label: "RATES AND SCHEDULES",
          lines: ["see Page 3"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Flushing Meadow Park", "Flushing Bay"],
        },
        {
          label: "AREA",
          lines: [
            "Channels ..... 300 ft. wide",
            ".................... 15 ft. deep at mean",
            ".................... low water",
            "Anchorage ... 69 acres",
            "Breakwater .. 3,050 ft. long",
          ],
        },
        {
          label: "DESIGNED BY",
          lines: [
            "Peter Schladermundt Assoc., in",
            "association with Owens-Corning",
            "Fibreglass Corporation",
          ],
        },
        {
          label: "CAPACITY",
          lines: ["Initially 800 boats", "Projected 2,010 boats"],
        },
        {
          label: "BOAT AND AUTO RENTAL",
          lines: ["Flushing Charter Corporation"],
        },
      ]}
      primaryFigure={{
        src: "/images/wfmar02/wfmar03.jpg",
        width: 600,
        height: 323,
        alt: "World's Fair Marina",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Flushing Meadow Park Marina will be a permanent feature of the
              water front recreation system of the City of New York. It will be
              highlighted by many dramatic innovations in design and construction
              which may well forecast future trends in Marina design.
            </>
          ),
        },
        {
          body: (
            <>
              The Marina will consists of a connecting group of main floats with
              finger piers for each two boats, with seven central satellites 35
              and 50 feet in diameter. The existing boat basin will be modernized
              and the present pier will provide docking for excursion and speedy
              commuter-type boats, hydrofoils, and air-cushion craft. The center
              satellites will be moored with hidden huge steel cylinders driven
              into the bay bottom and floats with a minimum of timber piles. The
              causeways to land, the floats, the center satellites, and even the
              electrical fixtures will be made out of a gay, harmonious,
              permanent-color, fiber glass, reinforced plastic. Each satellite,
              covered with huge parabolic-shaped canopies, will house laundromats,
              food-vending machines, lavatories, and vending equipment for all
              products of interest to boatman, and other services. Dressing rooms
              and showers, marine parts and shops will be available in an
              Administration Building on shore. Every possible service a yachtsman
              may desire, including &quot;slip-to-shore&quot; telephone service,
              cruiser guide service, and the first complete electronic repair
              service facility, will be available. Modern safe fueling facilities
              will be conveniently located within the Marina area.
            </>
          ),
        },
        {
          body: (
            <>
              Lighting will play a dramatic part in the new Marina. Since fiber
              glass is translucent, the designers plan to light the satellite
              centers from within. At night the entire Marina will glow in
              different colors.
            </>
          ),
        },
        {
          body: (
            <>
              The Flushing Charter Corporation will maintain, for rental, boats
              and automobiles at the Marina.
            </>
          ),
        },
      ]}
      afterFeatures={
        <div className={styles.rates}>
          <p className={manualStyles.featuresHeading}>
            RATE SCHEDULE* 1964-1965
          </p>
          <p className={styles.rateNote}>
            Dockage day starts at 6 AM. Any vessel docked prior to 6 AM will be
            charged dockage for the previous night. Check-out time shall be 6 PM.
            Any vessel that occupies a berth after 6 PM will be charged dockage
            for the following night.
          </p>
          <div className={styles.rateGrid}>
            <section>
              <h3 className={styles.rateHead}>SEASONAL (April 1-Oct. 31)</h3>
              <p>
                Slip: $13.00 per ft. of finger-pier or boat, whichever is greater
              </p>
              <p>Mooring: $5.00 per ft.</p>
            </section>
            <section>
              <h3 className={styles.rateHead}>MONTHLY</h3>
              <p>
                Slip: $5.40 per foot of finger-pier or boat, whichever is greater
              </p>
              <p>Mooring: $2.70 per ft.</p>
            </section>
            <section>
              <h3 className={styles.rateHead}>OVERNIGHT (24 Hours)</h3>
              <p>
                Slip: 20c per ft. of finger-pier or boat, whichever is greater
              </p>
              <p>Mooring: 10c per ft.</p>
            </section>
            <section>
              <h3 className={styles.rateHead}>
                WINTER STORAGE (November 1, - March 31)
              </h3>
              <p>Ice free wet storage: $6.00 per foot</p>
            </section>
            <section>
              <h3 className={styles.rateHead}>TEMPORARY TIE-UP</h3>
              <p>Over 1 Hour — Boats under 35 ft. — $1.00</p>
              <p>Boats 35 ft. and over — $2.00</p>
            </section>
            <section>
              <h3 className={styles.rateHead}>ELECTRICITY</h3>
              <p>Season: $3.00 per month — boats under 40 ft.</p>
              <p>$7.00 per month — boats 40 ft. and over.</p>
              <p>Transients: $0.50 per day — boats under 40 ft.</p>
              <p>$1.00 per day — boats 40 ft. and over.</p>
            </section>
            <section>
              <h3 className={styles.rateHead}>WATER</h3>
              <p>Season: $5.00 per season — boats under 50 ft.</p>
              <p>$10.00 per season — boats 50 ft. to 75 ft.</p>
              <p>$5.00 per month — boats over 75 ft.</p>
            </section>
          </div>
          <p className={styles.rateEffective}>
            * RATES EFFECTIVE January 1, 1964
          </p>
        </div>
      }
      secondaryFigure={{
        src: "/images/wfmar02/wfmar04.jpg",
        width: 600,
        height: 355,
        alt: "World's Fair Marina",
        bordered: true,
        title: "World's Fair Marina",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <i>For Those Who Produced the New York World&apos;s Fair 1964-1965</i>
          </>
        ),
      }}
    />
  );
}
