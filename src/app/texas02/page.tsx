import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Texas Pavilions & Music Hall entries from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall Information Manual page — dual manual (Music Hall
 * then Texas Pavilions). Body from legacy texas02.html. Layout: InformationManualPage.
 */
export default function Texas02Page() {
  return (
    <InformationManualPage
      heroLabel="Texas Pavilions & Music Hall"
      titleId="texas02-title"
      hero={{
        src: "/images/texasoverview/hero-banner.jpg",
        alt: "Texas Pavilions & Music Hall at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TexasNavChrome />}
      previousHref="/texas01"
      overviewHref="/texasoverview"
      nextHref="/texas03"
      factsLeft={[
        {
          label: "ENTERTAINMENT",
          lines: ["The Music Hall"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Angus G. Wynne, Jr. and",
            "Mr. Gordon R. Wynne Jr.",
            "Compass Fair, Incorporated",
            "1841 Broadway",
            "New York, New York",
            "JU 6-4814",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Kane"],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Paul E. Menneg",
            "Rogers and Cowen, Incorporated",
            "598 Madison Avenue",
            "New York 22, New York",
            "PL 9-6272",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["November 28, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 56; Lot 7", "Lake Amusement Area"],
        },
        {
          label: "AREA",
          lines: ["63,889 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Peter A. Strobel",
            "Strobel and Rongved",
            "70 West 40th Street",
            "New York 18, New York",
            "LO 3-3931",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Mr. Randall Duell",
            "P.O. Box 191",
            "Arlington, Texas",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Tishman Realty and Construction Co."],
        },
        {
          label: "ADMISSION",
          lines: ['"To Broadway With Love"', "$2-$3-$4-$4.80-$6"],
        },
      ]}
      primaryFigure={{
        src: "/images/texas02/texas06.jpg",
        width: 600,
        height: 278,
        alt: "Texas Music Hall line drawing",
        source: "SOURCE: World's Fair Information Manual",
      }}
      features={[
        {
          label: "The Music Hall",
          body: (
            <>
              The Music Hall, the Fair&apos;s largest theatre facility is utilized
              to present the spectacular stage production &quot;To Broadway With
              Love&quot;. A musical salute to 100 years of history of the
              American Musical Theatre, the show is produced by George Schaefer
              for Compass Productions and is directed by Morton De Costa.
              Performances are daily at 3:00, 7:00 and 9:30.
            </>
          ),
        },
        {
          body: (
            <>
              The music hall is also used for many special events such as
              television and radio broadcasts; fashion shows; meetings;
              conventions and various other usage by large groups.
            </>
          ),
        },
        {
          body: (
            <>
              The Music Hall is the most modern of facilities featuring the
              latest development in stage devices, lighting and technical
              requirements.
            </>
          ),
        },
        {
          label: "The Executive Lounge and Bar",
          body: (
            <>
              The Executive Lounge and Bar, small and intimate, caters to
              distinguished visitors from all over the world. Here special guests
              are entertained with elegance.
            </>
          ),
        },
        {
          label: "The Champagne Circle",
          body: (
            <>
              The Champagne Circle, on the second and third floors of the Music
              Hall, consists of a series of private boxes in choice locations
              which seats from 8 to 10 patrons. These boxes were designed by
              William P. McFadden, noted Dallas decorator, and occupants view the
              production as though they were in a private parlor. Beverages are
              served before and after the shows and during performances.
            </>
          ),
        },
        {
          body: (
            <>
              The Texas Pavilions which surround the Music Hall are open from
              10:00 AM to 2:00 AM.
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <hr className={manualStyles.rule} />
          <div className={manualStyles.facts}>
            <div aria-label="Texas Pavilions exhibit facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>EXHIBIT</p>
                <ul className={manualStyles.factLines}>
                  <li>Texas Pavilions</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AUTHORIZED REPRESENTATIVE</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Angus G. Wynne, Jr. and</li>
                  <li>Mr. Gordon R. Wynne Jr.</li>
                  <li>Compass Fair, Incorporated</li>
                  <li>1841 Broadway</li>
                  <li>New York, New York</li>
                  <li>JU 6-4814</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>FAIR CONTACT</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Michael Pender</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>PUBLIC RELATIONS AGENCY</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Paul E. Menneg</li>
                  <li>Rogers and Cowen, Inc.</li>
                  <li>598 Madison Avenue</li>
                  <li>New York 22, New York</li>
                  <li>PL 9-6272</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACT SIGNED</p>
                <ul className={manualStyles.factLines}>
                  <li>November 28, 1962</li>
                </ul>
              </div>
            </div>
            <div aria-label="Texas Pavilions site and construction facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>LOCATION</p>
                <ul className={manualStyles.factLines}>
                  <li>Block 56; Lot 7</li>
                  <li>Lake Amusement Area</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AREA</p>
                <ul className={manualStyles.factLines}>
                  <li>63,890 sq. ft.</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ARCHITECT</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Peter A. Strobel</li>
                  <li>Strobel and Rongved</li>
                  <li>70 West 40th Street</li>
                  <li>New York 18, New York</li>
                  <li>LO 3-3931</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>DESIGNER</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Randall Duell</li>
                  <li>P.O. Box 191</li>
                  <li>Arlington, Texas</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACTOR</p>
                <ul className={manualStyles.factLines}>
                  <li>Tishman Realty and Construction Co.</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ADMISSION</p>
                <ul className={manualStyles.factLines}>
                  <li>Free</li>
                </ul>
              </div>
            </div>
          </div>
          <figure className={manualStyles.figure}>
            <Image
              src="/images/texas02/texas07.jpg"
              alt="Texas Pavilions line drawing"
              width={600}
              height={247}
              className={manualStyles.figureArt}
              unoptimized
            />
            <figcaption className={manualStyles.figureCaption}>
              <p className={manualStyles.figureSource}>
                SOURCE: World&apos;s Fair Information Manual
              </p>
            </figcaption>
          </figure>
          <p className={manualStyles.featuresHeading}>FEATURES</p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The story of the &quot;new&quot; Texas is conveyed in a series of
              pavilions - each of which features a different style of food,
              costuming, decor, beverage, service and entertainment. Unusual and
              entertaining devices are used so that patrons participate as the
              &quot;new&quot; Texas image is conveyed. The emphasis is on the
              industrial and economic development of today&apos;s Texas and upon
              Texas&apos; potential for the future.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              Among the exhibits are the petroleum industry, the cattle industry,
              the Gulf Coast area, the National Aeronautics and Space
              Administration, the Shrimp Association with a shrimp bar, a beer
              garden and exhibits of modern Texas and tourism. The hosts and
              hostesses are college students from the state of Texas. Roving
              entertainment is also an important feature of the Texas Pavilions.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>The Frontier Palace</span>
            <span className={manualStyles.featureBody}>
              {": "}
              The Frontier Palace recaptures the atmosphere of the Old West of the
              1800&apos;s. With a Western Saloon decor and a unique entertainment
              bar, the costuming and &quot;dance hall type&quot; fun, guests are
              transported back in time to one of the liveliest eras in American
              history. While the main attraction is fun and enjoyment, a steak
              menu for which Texas is noted is featured in the 525 seat
              restaurant. The Frontier Palace is the official meeting place for
              the Rotary Clubs at the Fair each day at noon.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The Texas Pavilions are open from 10:00 AM to 2:00 AM.
            </span>
          </p>
        </>
      }
      secondaryFigure={{
        src: "/images/texas02/texas01.jpg",
        width: 430,
        height: 268,
        alt: "Texas Music Hall",
        bordered: true,
        title: (
          <>
            The Texas Pavilion&apos;s Music Hall featuring &quot;To Broadway with
            Love&quot;
          </>
        ),
        source:
          "SOURCE: Commercial Transparency by Photo Lab, Inc., Washington, DC",
      }}
    />
  );
}
