import type { Metadata } from "next";
import Image from "next/image";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Tower of Light — nywf64.com",
  description:
    "Tower of Light entry from the 1964 and 1965 World's Fair Information Manuals — 1964/1965 New York World’s Fair on nywf64.com.",
};

const yearHeadingStyle = {
  margin: "0.75rem 0 0.65rem",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "24px",
  fontWeight: 400,
  color: "#191970",
  textAlign: "center" as const,
};

/**
 * Tower of Light Information Manual page — “manual” standard.
 * Body from legacy twrlit02.html (1964 and 1965 manual entries).
 */
export default function Twrlit02Page() {
  return (
    <InformationManualPage
      heroLabel="Tower of Light"
      titleId="twrlit02-title"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit01"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Electric Power & Light"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Garland S. Landrith, Jr.",
            "Electric Power & Light Exhibit, Inc.",
            "750 third Avenue",
            "New York 17, New York",
            "YU 6-4100",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["March 14, 1961"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Slattery-James King"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 18; Lot 1", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["47,204 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Synergetics, Inc.",
            "226 Hillsboro Street",
            "Raleigh, N. Carolina",
            "919 833-3841",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Robinson-Capsis-Stern Assoc. Inc.",
            "547 West Broadway",
            "New York 12, New York",
            "OR 7-0440",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/twrlit02/tl01.jpg",
        width: 600,
        height: 436,
        alt: "Tower of Light exhibit",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The electric utility industry&apos;s exhibit resembles an irregular
              shaped palace, a Gothic &quot;Cathedral of Light&quot;. The
              vertically staggered triangular prisms of anodized aluminum, which
              are to form the walls, will rise to a height of 80 feet. The
              Pavilion surrounds an open court in which will be three 120 foot
              high prismatic pylons and twelve searchlights, each one billion
              candlepower of light. After dark, the structure will be bathed in
              shimmering colored lights.
            </>
          ),
        },
        {
          body: (
            <>
              Inside, visitors after ascending a moving ramp across a reflecting
              pool to the upper floor, will enter one of seven sections of a
              rotating ring, which revolves them into the first of seven major
              exhibit chambers where they will experience a light-hearted musical
              review, &quot;The Brightest Show on Earth&quot;. The review will
              tell the story of the growth, development, and aspirations of the
              electric utility industry and the story of free enterprise which
              made it possible. Uncle Ben, an animated three-dimensional talking
              figure, electronically controlled and electrically lighted, has
              the leading role and represents the editorial voice of industry and
              free enterprise. Operating on a stop-and-go arrangement, the show
              allows about 3 minutes for the episode in each exhibit chamber and
              30 seconds to revolve the ring section with its spectator groups
              into the next auditorium. Fast moving and designed to arouse and
              maintain interest, the entire show takes less than half an hour.
            </>
          ),
        },
        {
          body: (
            <>
              After the finale, the visitors walk down a spiral ramp to the
              ground floor where spectators can view the dramatic sourse of the
              Tower of Light, visit a research exhibit, and experience an
              all-electronic climate conditioning show.
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <hr className={manualStyles.rule} />
          <h2 style={yearHeadingStyle}>1965</h2>
          <div className={manualStyles.facts}>
            <div aria-label="1965 exhibit facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>EXHIBIT</p>
                <ul className={manualStyles.factLines}>
                  <li>Electric Power and Light</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>
                  AUTHORIZED REPRESENTATIVE
                </p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Garland S. Landrith, Jr.</li>
                  <li>Electric Power &amp; Light Exhibit, Inc.</li>
                  <li>750 third Avenue</li>
                  <li>New York 17, New York</li>
                  <li>YU 6-4100</li>
                  <li>and</li>
                  <li>Electric Power &amp; Light Exhibit</li>
                  <li>World&apos;s Fair, New York 11380</li>
                  <li>888-6300</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>FAIR CONTACT</p>
                <ul className={manualStyles.factLines}>
                  <li>Miss Phyllis Adams</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACT SIGNED</p>
                <ul className={manualStyles.factLines}>
                  <li>March 14, 1961</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ADMISSION</p>
                <ul className={manualStyles.factLines}>
                  <li>Free</li>
                </ul>
              </div>
            </div>
            <div aria-label="1965 site facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>LOCATION</p>
                <ul className={manualStyles.factLines}>
                  <li>Block 18; Lot 1</li>
                  <li>Avenue of Commerce</li>
                  <li>Industrial Area</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AREA</p>
                <ul className={manualStyles.factLines}>
                  <li>47,204 sq. ft.</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ARCHITECT</p>
                <ul className={manualStyles.factLines}>
                  <li>Synergetics, Inc.</li>
                  <li>226 Hillsboro Street</li>
                  <li>Raleigh, North Carolina</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>PRODUCER</p>
                <ul className={manualStyles.factLines}>
                  <li>Wilding, Inc.</li>
                  <li>405 Park Avenue</li>
                  <li>New York, New York</li>
                  <li>PL 9-08545</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACTOR</p>
                <ul className={manualStyles.factLines}>
                  <li>Slattery - James King</li>
                </ul>
              </div>
            </div>
          </div>
          <figure className={manualStyles.figure}>
            <Image
              src="/images/twrlit02/tl02.jpg"
              alt="Tower of Light exhibit"
              width={600}
              height={397}
              className={manualStyles.figureArt}
              unoptimized
            />
            <figcaption className={manualStyles.figureCaption}>
              <p className={manualStyles.figureSource}>
                SOURCE: 1965 World&apos;s Fair Information Manual
              </p>
            </figcaption>
          </figure>
          <p className={manualStyles.featuresHeading}>FEATURES</p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The electric utility industry&apos;s exhibit resembles an irregular
              shaped palace, a &quot;Tower of Light.&quot; The vertically
              staggered triangular prisms of anodized aluminum form the walls
              and rsie to a height of 80 feet. The Pavilion surrounds an open
              court in which there are three 120 foot high prismatic pylons and
              twelve searchlights, each one billion candlepower of light. After
              dark, the structure is bathed in shimmering colored lights.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The story of the growth, development and aspirations of the electric
              utility industry is told in a light-hearted musical review
              &quot;Holiday with Light.&quot; Unlce Ben and Reddy Kilowatt,
              animated three-dimensional talking figures, electronically
              controlled and electronically lighted, have the leading roles and
              represent the editorial voice of the investor owned electric utility
              companies throughout the nation.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              After the finale, the visitors walk down a spiral ramp to the ground
              floor where they can view the dramatic source of the Tower of
              Light, visit a research exhibit, an electric vehicle display, a
              Gold Medallion Home exhibit and experience an all electric climate
              conditioning show.
            </span>
          </p>
        </>
      }
      secondaryFigure={{
        src: "/images/twrlit02/tl03.jpg",
        width: 600,
        height: 347,
        alt: "Tower of Light - Electric Power and Light Exhibit, Inc.",
        bordered: true,
        title: (
          <>
            &quot;Tower of Light&quot; - Electric Power and Light Exhibit, Inc.
          </>
        ),
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
