import type { Metadata } from "next";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Space Park — nywf64.com",
  description:
    "Space Park entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Space Park guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy spacpark01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Spacpark01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Space Park"
      titleId="spacpark01-title"
      hero={{
        src: "/images/spacparkoverview/hero-banner.jpg",
        alt: "Space Park at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SpacparkNavChrome />}
      previousHref="/spacparkoverview"
      nextHref="/spacpark02"
      guide1964={{
        cover: {
          src: "/images/spacpark01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/spacpark01/logo1964.gif",
          width: 144,
          height: 94,
          alt: "",
        },
        name: "SPACE PARK",
        copy: (
          <>
            The dramatic vehicles that are carrying the United States into the
            space age are displayed by the National Aeronautics and Space
            Administration and the Department of Defense in the area surrounding
            the Hall of Science. On display are a Project Mercury spacecraft
            which has orbited the earth, a Gemini two-man spacecraft, a model of
            the Apollo which will carry three astronauts into lunar orbit, a
            lunar excursion vehicle in which men will land on the moon, the
            lower portion of the Saturn V moon rocket, and a full-scale X-15
            rocket-powered research airplane. Thor-Delta, Atlas and Titan
            II&nbsp;rockets stand in launch positions, with the Tiros satellite
            and Mercury and Gemini capsules as their payloads. Aeronautical
            engineering students are on hand to act as expert guides.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/spacpark01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/spacpark01/logo1965.gif",
          width: 144,
          height: 90,
          alt: "",
        },
        name: "U.S. SPACE\u00a0PARK",
        nameFace: "arial",
        summary: (
          <>
            The dramatic vehicles that are carrying the United States into the
            Space Age are on display.
          </>
        ),
        copy: (
          <>
            The National Aeronautics and Space Administration and the Department
            of Defense sponsor this exhibit in the area surrounding the Hall of
            Science. Among the displays are a Project Mercury spaceship which
            has orbited the earth, a Gemini two-man spacecraft, a model of the
            Apollo, which will carry men to the moon, and a Mercury capsule in
            which youngsters may take a simulated space ride. Also shown are an
            X-15 rocket plane, lunar and interplanetary satellites, and
            Thor-Delta, Atlas and Titan II rockets. College science majors act
            as guides.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/spacpark01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/spacpark01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation Area map",
        },
        locateHref: "/spacparkmap",
      }}
    />
  );
}
