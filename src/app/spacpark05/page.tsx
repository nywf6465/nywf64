import type { Metadata } from "next";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album II — Space Park — nywf64.com",
  description:
    "Space Park Photograph Album II — photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Space Park Photograph Album II — “photographs” standard.
 * Body from legacy spacpark05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Spacpark05Page() {
  return (
    <PhotographsPage
      heroLabel="Space Park"
      titleId="spacpark05-title"
      title="Photograph Album II"
      hero={{
        src: "/images/spacparkoverview/hero-banner.jpg",
        alt: "Space Park at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SpacparkNavChrome />}
      previousHref="/spacpark04"
      overviewHref="/spacparkoverview"
      nextHref="/spacpark06"
      sections={[
        {
          heading: "NASA Photographs",
          photos: [
            {
              image: {
                src: "/images/spacpark05/ussppk32.jpg",
                width: 284,
                height: 350,
                alt: "NASA astronaut Elliott See along with students who are studying to be prospective Space Park Hosts. They are looking up the \"business end\" of the Gemini Titan II booster.",
              },
              title: "NASA astronaut Elliott See along with students who are studying to be prospective Space Park Hosts. They are looking up the \"business end\" of the Gemini Titan II booster.",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk39.jpg",
                width: 350,
                height: 346,
                alt: "NASA astronaut Elliott See with group of prospective Space Park Hosts. [Astronaut See would die tragically in a plane crash before he could travel into space.]",
              },
              title: "NASA astronaut Elliott See with group of prospective Space Park Hosts. [Astronaut See would die tragically in a plane crash before he could travel into space.]",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk41.jpg",
                width: 299,
                height: 350,
                alt: "Dr. Wernher Van Braun along with two unidentified NY World's Fair officials. Dr. Von Braun was director of NASA's Marshall Space Flight Center and is the \"father\" of the Saturn V rocket.",
              },
              title: "Dr. Wernher Van Braun along with two unidentified NY World's Fair officials. Dr. Von Braun was director of NASA's Marshall Space Flight Center and is the \"father\" of the Saturn V rocket.",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk38.jpg",
                width: 337,
                height: 350,
                alt: "April 20, 1964 - NASA Public Affairs Officer \"Shorty\" Powers with unidentified officials in front of Allouette satellite mock-up. Shorty Powers was the \"voice of Project Mercury.\"",
              },
              title: "April 20, 1964 - NASA Public Affairs Officer \"Shorty\" Powers with unidentified officials in front of Allouette satellite mock-up. Shorty Powers was the \"voice of Project Mercury.\"",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk37.jpg",
                width: 343,
                height: 350,
                alt: "April 20, 1964 - \"Shorty\" Powers with NASA Officials",
              },
              title: "April 20, 1964 - \"Shorty\" Powers with NASA Officials",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk36.jpg",
                width: 435,
                height: 350,
                alt: "Dr. Wernher Von Braun; in the 1960s Dr. Von Braun was director of NASA's Marshall Space Flight Center in Alabama",
              },
              title: "Dr. Wernher Von Braun; in the 1960s Dr. Von Braun was director of NASA's Marshall Space Flight Center in Alabama",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk35.jpg",
                width: 350,
                height: 345,
                alt: "April 20, 1964 - \"Shorty\" Powers with group of graduating Space Park Hosts",
              },
              title: "April 20, 1964 - \"Shorty\" Powers with group of graduating Space Park Hosts",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk34.jpg",
                width: 350,
                height: 350,
                alt: "April 20, 1964 - \"Shorty\" Powers with unidentified officials.",
              },
              title: "April 20, 1964 - \"Shorty\" Powers with unidentified officials.",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk42.jpg",
                width: 345,
                height: 350,
                alt: "April 20, 1964 - \"Shorty\" Powers with unidentified officials",
              },
              title: "April 20, 1964 - \"Shorty\" Powers with unidentified officials",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            },
            {
              image: {
                src: "/images/spacpark05/ussppk40.jpg",
                width: 350,
                height: 347,
                alt: "April 20, 1964 - Graduating Space Park Hosts receive their diplomas",
              },
              title: "April 20, 1964 - Graduating Space Park Hosts receive their diplomas",
              source: "SOURCE: NASA Archival Photograph - presented courtesy Robert J. Youell Collection",
            }
          ],
        }
      ]}
    />
  );
}
