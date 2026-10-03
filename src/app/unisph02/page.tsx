import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Unisphere — nywf64.com",
  description:
    "Unisphere entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere Information Manual page — “manual” standard.
 * Body from legacy unisph02.html. Layout: InformationManualPage (/bell02).
 */
export default function Unisph02Page() {
  return (
    <InformationManualPage
      heroLabel="Unisphere"
      titleId="unisph02-title"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph01"
      overviewHref="/unisphoverview"
      nextHref="/unisph03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: [
            "The official theme center of the",
            "New York World's Fair 1964-1965",
          ],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Phelps H. Adams",
            "Vice President - Public Relations",
            "The United States Steel Corp.",
            "71 Broadway",
            "New York 6, N.Y.",
            "DI 4-9000",
          ],
        },
        {
          label: "ERECTED BY",
          lines: [
            "American Bridge Division",
            "The United States Steel Corp.",
            "525 William Penn Place",
            "Pittsburgh 30, Pa.",
            "EX 1-2345",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Theme Center"],
        },
        {
          label: "AREA",
          lines: ["90,796 Sq. Ft."],
        },
        {
          label: "HEIGHT",
          lines: ["135 ft+"],
        },
        {
          label: "DIAMETER",
          lines: ["120 ft., tilted from the", "vertical 23-1/2 degrees"],
        },
        {
          label: "AGREEMENT SIGNED",
          lines: ["February 14, 1961"],
        },
        {
          label: "PRESENTED BY",
          lines: ["The United States Steel Corp."],
        },
        {
          label: "FOUNDATION and LANDSCAPE",
          lines: ["Clarke & Rapuano"],
        },
      ]}
      primaryFigure={{
        src: "/images/unisph02/line-drawing.jpg",
        width: 600,
        height: 295,
        alt: "Unisphere line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The theme symbol of the New York 1964-1965 World&apos;s Fair is a
              massive armillary sphere, know as{" "}
              <span className={manualStyles.u}>UNISPHERE</span>, sybolizing
              man&apos;s perpetual search for truth and his absolute need of
              peace through understanding. It represents the Earth with the
              Continents in raised outline and with surrounding orbits. The
              sphere, built of stainless steel and presented by the United
              States Steel Corporation, will be a permanent feature of Flushing
              Meadow Park.
            </>
          ),
        },
        {
          body: (
            <>
              The Continents and principal islands of the Earth, executed in
              stainless steel mesh, will be superimposed on the sphere with
              mountains pressed into relief in exaggerated projection to give
              the effect of visual reality. Glass lenses with cut facets will
              illuminate the location of various capital cities, while lights
              behind each lens will flash at intervals. At night the sphere will
              be flood-lighted from a sufficient distance to bathe the continents
              in light, giving an effect of mystery and movement.
            </>
          ),
        },
      ]}
    />
  );
}
