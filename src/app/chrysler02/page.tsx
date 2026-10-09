import type { Metadata } from "next";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Chrysler — nywf64.com",
  description:
    "Chrysler pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler Information Manual page — “manual” standard.
 * Body from legacy chrysler02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (Chrylser, artifical, attactions, facilites) preserved.
 */
export default function Chrysler02Page() {
  return (
    <InformationManualPage
      heroLabel="Chrysler"
      titleId="chrysler02-title"
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler01"
      overviewHref="/chrysleroverview"
      nextHref="/chrysler03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Chrylser Corporation"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Michael M. Ducody, General Mgr.",
            "Chrysler Corporation",
            "6334 Lynch Road",
            "Detroit 31, Michigan",
            "313-921-8241",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Guy Tozzoli", "New York Port of New York Authority"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["June 13, 1961"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 48; Lot 1", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["254,021 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "George Nelson & Company, Inc.",
            "25 East 22nd Street",
            "New York, New York",
            "GR 7-4641",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["James King and Son, Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/chrysler02/line-drawing.jpg",
        width: 600,
        height: 148,
        alt: "Chrysler Corporation line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Chrysler exhibit area, oval shaped and spreading over more than
              250,000 sq. feet, is 1,000 feet in length and more than 300 feet
              wide.
            </>
          ),
        },
        {
          body: (
            <>
              The five (5) connected islands in a large artifical lake, on which
              the company&apos;s major exhibits are located, are easily accessible
              by means of causeways and bridges. These approaches provide quick
              and easy entrance to the various displays and attactions.
            </>
          ),
        },
        {
          body: (
            <>
              The Chrysler exhibits consist of both outdoor and indoor facilities
              and visitors set their own pace for viewing the various attractions.
            </>
          ),
        },
        {
          body: (
            <>
              Some of Chrysler&apos;s major facets such as engineering, production
              and styles are uniquely portrayed on the islands.
              <br />
              Engineering, for example, is symbolized by a huge walk through
              &quot;engine&quot;;
              <br />
              Production is dramatized by a simulated assembly line;
              <br />
              Styling, by an enormous building shaped like an automobile.
            </>
          ),
        },
        {
          body: (
            <>
              The Four &quot;Pentastar&quot; Structures, each shaped like a
              pentagon are joined together and designed to resemble the
              company&apos;s pentastar emblem, which identifies Chrysler
              Corporation products and facilites all over the world. This building
              has a total seating capacity of 2,500 and features a 70-foot
              revolving stage. Here a continuous musical show is presented, with
              facilities permitting as many as 45,000 visitors to view the
              presentation daily.
            </>
          ),
        },
        {
          body: (
            <>
              The dramatic white roof and blue walls give the structure a striking
              colorful appearance. At night special lighting provides a
              spectacular effect.
            </>
          ),
        },
        {
          body: (
            <>
              Interspersed with these exhibits are dramatic interpretations of
              Chrysler&apos;s other activities such as its international operations
              - all typifying the many activities of the company through out the
              world.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/chrysler02/produced-photo.jpg",
        width: 600,
        height: 372,
        alt: 'Chrysler "autofare"',
        bordered: true,
        title: (
          <>
            Chrysler &quot;autofare&quot;
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
