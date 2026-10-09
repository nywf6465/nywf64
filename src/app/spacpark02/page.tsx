import type { Metadata } from "next";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Space Park — nywf64.com",
  description:
    "United States Space Park entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Space Park Information Manual page — “manual” standard.
 * Body from legacy spacpark02.html. Layout: InformationManualPage (/bell02).
 */
export default function Spacpark02Page() {
  return (
    <InformationManualPage
      heroLabel="Space Park"
      titleId="spacpark02-title"
      hero={{
        src: "/images/spacparkoverview/hero-banner.jpg",
        alt: "Space Park at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SpacparkNavChrome />}
      previousHref="/spacpark01"
      overviewHref="/spacparkoverview"
      nextHref="/spacpark03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["United States Space Park"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Julian Sheer",
            "Assistant Administrator for Public Affairs",
            "National Aeronatuics and Space Admin.",
            "Washington, D. C.",
            "202 WO\u00a03-7329",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Thomas Kearney", "Port of New York Authority"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 12, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 50; Lot 1, surrounding",
            "the Hall of Science",
            "Transportation Area",
          ],
        },
        {
          label: "ARCHITECT - LANDSCAPE",
          lines: [
            "Clarke and Rapuano",
            "830 Third Avenue",
            "New York 22, New York",
            "PL\u00a04-1030",
          ],
        },
      ]}
      features={[
        {
          body: (
            <>
              The Space Park exhibit is the first of its kind ever assembled.
              The Federal Government will furnish a collection of space
              hardware, including an actual 125-foot high Titan II-Gemini
              Rocket, an Atlas-Mercury Rocket, a Thor-Delta Rocket and an Agena
              Capsule. In addition there will be models of the X-15, the Boat
              Tail of the Saturn V and the Apollo Command Module and the Lunar
              Exploratory Module. These will be grouped together in areas
              designated for the part of the space program in which they
              participate.
            </>
          ),
        },
        {
          body: (
            <>
              Surrounding the exhibits will be 800 linear feet of illuminated
              panels describing various space programs. These include the
              Apollo, Gemini, Man In Space, the Space Sciences and Advanced
              Research and Technology.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
      secondaryFigure={{
        src: "/images/spacpark02/ussppk45.jpg",
        width: 600,
        height: 366,
        alt: "United States Space Park",
        bordered: true,
        title: "United States Space Park",
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
