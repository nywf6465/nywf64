import type { Metadata } from "next";
import Image from "next/image";
import { SwiskyNavChrome } from "@/components/SwiskyNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Swiss Sky Ride — nywf64.com",
  description:
    "Swiss Sky Ride entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Swiss Sky Ride Information Manual page — “manual” standard.
 * Body from legacy swisky02.html (two mid-page figures + FEATURES cont'd).
 */
export default function Swisky02Page() {
  return (
    <InformationManualPage
      heroLabel="Swiss Sky Ride"
      titleId="swisky02-title"
      hero={{
        src: "/images/swiskyoverview/hero-banner.jpg",
        alt: "Swiss Sky Ride at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwiskyNavChrome />}
      previousHref="/swisky01"
      overviewHref="/swiskyoverview"
      nextHref="/swisky03"
      factsLeft={[
        {
          label: "ENTERTAINMENT",
          lines: ["Cable Ride"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Paul Zuberbuhler, Director",
            "International Cable Ride Corporation",
            "c/o Von Roll A. G.",
            "Berne, Switzerland",
            "and",
            "Martin F. Richman, Esq.",
            "Root, Barrett, Cohen, Knapp and Smith",
            "26 Broadway",
            "New York 4, New York",
            "HA 2-8180",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["January 18, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Begins Block 28; Lot 14, 34,240 sq. ft.",
            "Ends Block 33; Lot 24, 26,755 sq. ft.",
          ],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Von Roll, Ltd.",
            "Berne P. O. Box Transit",
            "Berne, Switzerland",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["William L. Crow Construction Co."],
        },
        {
          label: "ADMISSION",
          lines: ["$ .50 each"],
        },
      ]}
      primaryFigure={{
        src: "/images/swisky02/swisky17.jpg",
        width: 600,
        height: 350,
        alt: "Skyride line drawing",
      }}
      features={[
        {
          body: (
            <>
              The Berne Works, a division of the Von Roll Iron Works, will erect
              a spectacular four seat gondola type aerial cable ride. The cable
              cars will travel at a rate of five miles per hour, at a height of
              112 feet, affording a fabulous view of the panorama of the fair
              site, making the 2,000 foot journey in 5 minutes.
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <figure className={manualStyles.figure}>
            <Image
              src="/images/swisky02/swisky18.jpg"
              alt="Skyride route"
              width={600}
              height={389}
              className={manualStyles.figureArt}
              unoptimized
            />
          </figure>
          <p className={manualStyles.featuresHeading}>FEATURES (cont&apos;d)</p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              Two complete circuits forming four cable lines will join two
              terminals on either side of the International Area, where
              passengers may board the ride. Two rows of cars will travel in
              either direction, accommodating 4,800 persons per hour, 2,400 in
              each direction.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              While the passengers are waiting to embark, souvenir stands in the
              terminals will offer the opportunity to purchase many of the
              Fair&apos;s licensed items, which will include a replica of the
              Swiss Sky Ride.
            </span>
          </p>
          <p className={manualStyles.featuresSource}>
            SOURCE: World&apos;s Fair Information Manual
          </p>
        </>
      }
      secondaryFigure={{
        src: "/images/swisky02/swisky16.jpg",
        width: 600,
        height: 401,
        alt: "Swiss Sky Ride",
        bordered: true,
        title: "Swiss Sky Ride",
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
