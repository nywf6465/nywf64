import type { Metadata } from "next";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Sermons from Science — nywf64.com",
  description:
    "Sermons from Science pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sermons from Science guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy sersci01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Sersci01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Sermons from Science"
      titleId="sersci01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/serscioverview/hero-banner.jpg",
        alt: "Sermons from Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SersciNavChrome />}
      previousHref="/serscioverview"
      nextHref="/sersci02"
      guide1964={{
        cover: {
          src: "/images/sersci01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sersci01/logo-1964.gif",
          width: 144,
          height: 75,
          alt: "",
        },
        name: (
          <>
            SERMONS FROM
            <br />
            SCIENCE
          </>
        ),
        copy: (
          <>
            Stage demonstrations of scientific marvels plus color films of the
            wonders of nature, sponsored by the Christian Life Convention of New
            York City, illustrate the compatibility of faith and knowledge. The
            shows take place in a circular auditorium seating 500. In an
            adjoining conference room, visitors may meet religious leaders
            associated with the exhibit. The building, with its scalloped roof,
            is reached by a ramp which curves over a reflecting pool. Jets of
            flaming gas and splashing water ring the area.
          </>
        ),
        admission: [
          "Admission: free.",
          "Length of performance: 30 minutes; one show each hour on the hour from 10 a.m. until 9 p.m. Stage presentations at 3, 5 and 8. Films shown at other times. There are 12 shows presented daily.",
          "At each performance headsets provide simultaneous translation of the narration into five languages. The narrations are translated into 13 languages in all.",
        ],
        highlights: [
          {
            label: "MAGIC ON STAGE.",
            body: (
              <>
                {" "}
                Dr. George E. Speake and James I. Moon of the Institute of
                Science, a division of the Moody Bible Institute of Chicago,
                present wonders of science. During one show the demonstrator
                sends a million volts of electricity crackling through his body
                to ignite a piece of wood in his hands. At other performances
                his demonstrations include: A Cry That Shatters Glass; A Frozen
                Shadow; A Flashlight That Talks; The Stammering Machine;
                Invisible Energy That Sets Steel Aflame; Eyes That See in Total
                Darkness; and Electron Magic with a Ribbon of Rust.
              </>
            ),
          },
          {
            label: "MIRACLES ON FILM.",
            body: (
              <>
                {" "}
                There is a series of motion pictures in color prepared by the
                Institute of Science and dealing with nature and scientific
                topics. These films are widely used by the armed services,
                scientific organizations and schools. Among the latest:{" "}
                <em>City of Bees</em> (on life in the hive) and{" "}
                <em>Red River of Life</em> (on the heart).
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/sersci01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sersci01/logo-1965.gif",
          width: 144,
          height: 75,
          alt: "",
        },
        name: (
          <>
            SERMONS FROM
            <br />
            SCIENCE
          </>
        ),
        nameFace: "arial",
        summary: (
          <>
            Demonstrations of scientific marvels and color films on nature
            illustrate the compatibility of faith with modern-day science.
          </>
        ),
        copy: (
          <>
            The shows, which are sponsored by the Christian Life Convention of
            New York City, take place in a 500-seat theater; films are
            simultaneously translated into five languages. In an adjoining room,
            opportunity is given for discussion.
          </>
        ),
        admission:
          "Admission: free. Continuous 30-minute performances daily from 10 a.m. to 10 p.m.",
        highlights: [
          {
            label: "MAGIC ON STAGE.",
            labelFace: "arial",
            body: (
              <>
                {" "}
                A number of demonstrations are offered. During one, a million
                volts of electricity course through a man&apos;s body to ignite
                a piece of wood in his hands. Others include &quot;A Cry That
                Shatters Glass,&quot; &quot;A Flashlight That Talks&quot; and
                &quot;Eyes That See in Darkness.&quot;
              </>
            ),
          },
          {
            label: "MIRACLES ON FILM.",
            labelFace: "arial",
            body: (
              <>
                {" "}
                Motion pictures in color deal with nature and science.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/sersci01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sersci01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/serscimap",
      }}
    />
  );
}
