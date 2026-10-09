import type { Metadata } from "next";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Sermons from Science — nywf64.com",
  description:
    "Sermons from Science pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sermons from Science Information Manual page — “manual” standard.
 * Body from legacy sersci02.html. Layout: InformationManualPage (/bell02).
 */
export default function Sersci02Page() {
  return (
    <InformationManualPage
      heroLabel="Sermons from Science"
      titleId="sersci02-title"
      hero={{
        src: "/images/serscioverview/hero-banner.jpg",
        alt: "Sermons from Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SersciNavChrome />}
      previousHref="/sersci01"
      overviewHref="/serscioverview"
      nextHref="/sersci03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Sermons from Science"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. W. Scott Nyborg",
            "Sermons from Science",
            "Salisbury Hotel, Suite 508",
            "123 West 57th Street",
            "New York 19, New York",
            "CI 6-1300",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["July 15, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 23; Lot 14", "International Area"],
        },
        {
          label: "AREA",
          lines: ["43,461 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "H. Robley Saunders",
            "49 New Street",
            "Newark, New Jersey",
            "201 623-0133",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["E. W. Howell"],
        },
      ]}
      primaryFigure={{
        src: "/images/sersci02/sersci11.jpg",
        width: 600,
        height: 252,
        alt: "Sermons from Science line drawing",
        source: "SOURCE: World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Sermons from Science exhibit, a non-sectarian project, is
              sponsored by the Christian Life Convention, the Christian
              Businessman&apos;s Committee, Inc., and the Moody Institute of
              Science.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The Sermons from Science Pavilion is a 500 seat circular theatre,
              35 feet in height and 70 feet in diameter. The theatre has a
              circular scalloped shell roof supported beyond the building by
              colorful fins decorated with abstract designs. The entrance to the
              theatre is 8 feet above the ground and is approached by a 130 foot
              long ramp, which follows the curve of the building outside the line
              of fins and over a reflecting pool. The reflecting pool bordering
              the building is decorated with fire and water fountains, and a
              sculptured standard rising 60 feet which supports an ever-changing
              color sphere. A passage way will connect the theatre to a smaller
              circular wing which houses a conference hall.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The Pavilion will present live demonstrations and color films every
              hour. The theme of the show is to relate basic laws of science to
              religion. Each program is designed to satisfy the curiosity and
              holiday attitude of people at a fair. The aim of the program is to
              win men and women to Christ and fellowship in His church. Visitors
              will see in action: the cry that can shatter glass, a frozen
              shadow, a flashlight that talks, the stammering machine, metal
              rings floating in air, 1,000,000 volts of man made lightening, and
              eyes that see in total darkness. There will also be spectacular
              color science films: &quot;City of Bees&quot;, &quot;Time and
              Eternity&quot;, &quot;Dust or Destiny&quot;, &quot;God of
              Creation&quot;, &quot;Windows of the Soul&quot;, &quot;God of the
              Atom&quot;, &quot;Red River of Life&quot;, and &quot;The Prior
              Claim&quot;.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/sersci02/sersci10.jpg",
        width: 600,
        height: 353,
        alt: "Sermons from Science pavilion",
        title: "Sermons from Science",
        bordered: true,
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>For Those Who Produced the New York World&apos;s Fair 1964-1965</em>
          </>
        ),
      }}
    />
  );
}
