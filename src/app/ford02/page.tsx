import type { Metadata } from "next";
import { FordNavChrome } from "@/components/FordNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Ford — nywf64.com",
  description:
    "Ford Motor Company entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford Information Manual page.
 * Body from legacy ford02.html. Layout: InformationManualPage (/bell02).
 * Preserve typos: enganged, sond.
 */
export default function Ford02Page() {
  return (
    <InformationManualPage
      heroLabel="Ford Pavilion"
      titleId="ford02-title"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford01"
      overviewHref="/fordoverview"
      nextHref="/ford03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Ford Motor Company"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. C. Gayle Warnock",
            "Ford Motor Co.",
            "477 Madison Ave.",
            "New York 22, New York",
            "888-6000",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Guy Tozzoli", "Port of New York Authority"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 22, 1961"],
        },
        {
          label: "DESIGNER",
          lines: ["WED Enterprises", "800 Sonora", "Glendale, California"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 49, Lot 1", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["304,998 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Welton Becket Assocs.",
            "300 Park Avenue",
            "New York 22, New York",
            "PL 1-1540",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thompson-Starrett"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/ford02/ford64.jpg",
        width: 600,
        height: 299,
        alt: "Ford Wonder Rotunda line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          label: "Exterior",
          body: (
            <>
              The Ford Wonder Rotunda features a glass enclosed circular
              structure 235 feet in diameter, 56 feet high and surrounded by 64
              glittering columns 100 feet tall. Adjoining this main entrance is
              a flared rectangular show and exhibit building more than 500 feet
              in length and standing as high as a seven story building. It houses
              the major show and entertainment features created for Ford by Walt
              Disney and his staff at WED Enterprises.
            </>
          ),
        },
        {
          body: (
            <>
              At night the Rotunda becomes a glowing symbol. Each of the eight
              foot deep columns is bathed in brilliant incandescent light.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The Magic Skyway ride using Ford, Mercury, Falcon, Thunderbird,
              Comet and Lincoln Continental convertibles spiral around the
              rotunda in a transparent tunnel. The cars have no motors under the
              hoods as the ride is electric-powered with hundreds of hidden
              wheels pressed against a flat plate beneath the car. There is no
              need to steer since a spindle attached to the car tie-rod follows a
              guide rail in the track. No need either to touch the brake pedal,
              for the ride has its own air brake system and an automatic spacer
              that prevents cars from bunching up.
            </>
          ),
        },
        {
          body: (
            <>
              The cars then travel through &quot;time tunnels&quot; that surprise
              visitors with the illusion they are breaking through barriers of
              time and space.
            </>
          ),
        },
        {
          body: (
            <>
              The trip &quot;Out of this world and back&quot;, features Walt
              Disney&apos;s animated three dimensional cavemen and prehistoric
              animals; they come to life through a combination of sound and
              electronic impulses. Visitors watch the prehistoric monsters
              enganged in mortal combat, while other primeval beasts roam the
              rugged terrain. At the same time, long-extinct creatures soar
              overhead. The air is alive with the sond of time remote and
              primitive.
            </>
          ),
        },
        {
          body: (
            <>
              The Magic Skyway ride continues through a second series of
              &quot;time tunnels&quot; to the City of Tomorrow. Visitors leave
              their cars in one of the structures of this futuristic city. Here
              they have an opportunity to view the Ford World&apos;s Fair
              collection of dream cars, as well as exhibits on auto styling,
              space exploration, new sources of power and a Disney animated
              &quot;Product Parade&quot;.
            </>
          ),
        },
        {
          body: (
            <>
              The Ford Rotunda is completely air-conditioned. The mezzanine level
              includes a reception lounge for Ford guests, as well as offices for
              operating personnel.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/ford02/ford65.jpg",
        width: 600,
        height: 369,
        alt: "Ford Motor Company",
        bordered: true,
        title: "Ford Motor Company",
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
