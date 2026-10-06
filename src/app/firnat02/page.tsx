import type { Metadata } from "next";
import Image from "next/image";
import { FirnatNavChrome } from "@/components/FirnatNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — First National City Bank — nywf64.com",
  description:
    "First National City Bank Visitors and Operations Building entries from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * First National City Bank Information Manual page.
 * Body from legacy firnat02.html — two exhibit blocks (Visitors + Operations).
 * Layout: InformationManualPage (/bell02) with afterFeatures for the second block.
 * Preserve typos: Fiar, exhibiton, tasteully, couting.
 */
export default function Firnat02Page() {
  return (
    <InformationManualPage
      heroLabel="First National City Bank"
      titleId="firnat02-title"
      hero={{
        src: "/images/firnatoverview/hero-banner.jpg",
        alt: "First National City Bank at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<FirnatNavChrome />}
      previousHref="/firnat01"
      overviewHref="/firnatoverview"
      nextHref="/firnat03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["First National City Bank -", "Visitors Building"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Carl E. Schwendler",
            "First National City Bank",
            "399 Park Avenue",
            "New York 22, New York",
            "559-4571",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["June 22, 1962"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Diesel Construction Co."],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 26, Lot 3", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["11,993 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. William E. Lescaze",
            "211 East 48th Street",
            "New York 17, New York",
            "EL 5-3660",
          ],
        },
        {
          label: "LANDSCAPE ARCHITECT",
          lines: ["Mr. James Rose"],
        },
      ]}
      primaryFigure={{
        src: "/images/firnat02/firnat01.jpg",
        width: 600,
        height: 264,
        alt: "First National City Bank Visitors Building line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The First National City Bank will have two banks at the Fiar Site.
              One bank will be an exhibit bank, while the second will be mainly a
              service, functional bank for exhibitors and concessionaires.
            </>
          ),
        },
        {
          body: (
            <>
              The First National City Bank has been granted the non-exclusive
              right on Travelers checks to use the phrase &quot;Official Travelers
              check - New York World&apos;s Fair&quot;.
            </>
          ),
        },
        {
          body: (
            <>
              Located near the south entrance, the exhibiton bank will be a modern
              17 foot structure, two thirds of which shall be glass. The building
              has been designed so that only a small area in the rear of the bank
              will be enclosed for offices and services.
            </>
          ),
        },
        {
          body: (
            <>
              Two fresh water pools, a steel canopy covering the main entrance,
              and steel columns supporting the over-hanging roof will be some of
              the features of the plaza situated in front of the bank. The
              landscaped area will be comprised mainly of low shrubs, selected
              birch and magnolia trees and paved walks.
            </>
          ),
        },
        {
          body: (
            <>
              To the left of the main entrance an attractive lounge will be
              provided for patrons and visitors. Customers&apos; and
              executives&apos; desks will be located opposite the row of tellers&apos;
              windows. Trained specialists in foreign languages and foreign
              exchange rates will be employed to provide quick efficient service
              in exchanging foreign currency and cashing checks drawn on banks
              from all over the world. The visitors&apos; building will operate
              concurrently with Fair exhibit hours; 10:00 a.m. to 10:00 p.m. There
              will also be a tasteully furnished VIP&nbsp;room.
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <hr className={manualStyles.rule} />
          <div className={manualStyles.facts}>
            <div aria-label="Operations Building exhibit facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>EXHIBIT</p>
                <ul className={manualStyles.factLines}>
                  <li>First National City Bank -</li>
                  <li>Operations Building</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AUTHORIZED REPRESENTATIVE</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Carl E. Schwendler</li>
                  <li>First National City Bank</li>
                  <li>399 Park Avenue</li>
                  <li>New York 22, New York</li>
                  <li>559-4571</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACT SIGNED</p>
                <ul className={manualStyles.factLines}>
                  <li>June 22, 1962</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACTOR</p>
                <ul className={manualStyles.factLines}>
                  <li>Roth-Harris Construction Co.</li>
                </ul>
              </div>
            </div>
            <div aria-label="Operations Building site facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>LOCATION</p>
                <ul className={manualStyles.factLines}>
                  <li>Block 14, Lot 7</li>
                  <li>Service Area</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AREA</p>
                <ul className={manualStyles.factLines}>
                  <li>20,361 sq. ft.</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ARCHITECT</p>
                <ul className={manualStyles.factLines}>
                  <li>Modubilt Corporation</li>
                  <li>405 Lexington Avenue</li>
                  <li>New York 17, New York</li>
                  <li>MU&nbsp;2-8430</li>
                </ul>
              </div>
            </div>
          </div>

          <figure className={manualStyles.figure}>
            <Image
              src="/images/firnat02/firnat02.jpg"
              alt="First National City Bank Operations Building line drawing"
              width={600}
              height={147}
              className={manualStyles.figureArt}
              unoptimized
            />
            <figcaption className={manualStyles.figureCaption}>
              <p className={manualStyles.figureSource}>
                SOURCE: 1964 World&apos;s Fair Information Manual
              </p>
            </figcaption>
          </figure>

          <p className={manualStyles.featuresHeading}>FEATURES</p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The operations building of the First National City Bank has been
              specially designed and staffed to provide all the necessary banking
              requirements of exhibitors, concessionaires and their employees.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The pre-fabricated, steel and glass structure will have an
              attractive banking floor with 10 tellers&apos; positions. To the
              right of the tellers will be an officers&apos; platform and a
              customer&apos;s waiting room. The working area in the rear will have
              a direct entrance into a receiving cage where bulk deposits will be
              handled. This area will also contain high speed coin sorting and
              counting equipment, currency couting equipment and large night
              depositories. It is anticipated that more than one-half a billion
              dollars will be handled by the branch.
            </span>
          </p>
        </>
      }
      secondaryFigure={{
        src: "/images/firnat02/firnat03.jpg",
        width: 600,
        height: 369,
        alt: "First National City Bank",
        bordered: true,
        title: "First National City Bank",
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
