import type { Metadata } from "next";
import { HalsciNavChrome } from "@/components/HalsciNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Hall of Science — nywf64.com",
  description:
    "Hall of Science pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Science Information Manual page — “manual” standard.
 * Body from legacy halsci02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (“bulild”, “permanant”, “emplying”, “diagnositc”,
 * “diatbetic”, “wil be”, “fifth Avenue”) preserved.
 */
export default function Halsci02Page() {
  return (
    <InformationManualPage
      heroLabel="Hall of Science"
      titleId="halsci02-title"
      hero={{
        src: "/images/halscioverview/hero-banner.jpg",
        alt: "Hall of Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HalsciNavChrome />}
      previousHref="/halsci01"
      overviewHref="/halscioverview"
      nextHref="/halsci03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Hall of Science"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Guy Tozzoli",
            "The Port of New York Authority",
            "111 Eighth Avenue at 15th Street",
            "New York 11, New York",
            "AR 5-1000",
          ],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "CONTRACTOR",
          lines: ["W. J. Barney Company"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 50; Lot 1", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["204,075 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Harrison & Abramovitz",
            "630 fifth Avenue",
            "New York 20, New York",
            "CO 5-4884",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/halsci02/halsci03.jpg",
        width: 600,
        height: 366,
        alt: "Hall of Science",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The City of New York has appropriated monies to bulild a
              permanant Museum of Science and Technology in the Transportation
              Area of the Fair Site.
            </>
          ),
        },
        {
          body: (
            <>
              In the Great Hall of the building, Martin Marietta Corporation
              will provide a majestic ten-minute show in which 400 visitors at a
              time will be introduced to the story of science and man&apos;s
              search for knowledge. The audience will be engulfed from all sides
              with light and color and sound in a presentation that will lead
              from the beginnings of science up to the new experiences that
              await man in his first step into outer space. It will be climaxed
              by a demonstration of &quot;Rendezvous in Space&quot;, emplying
              two actual orbital manned space vehicles.
            </>
          ),
        },
        {
          label: "Electronics",
          body: (
            <>
              International Telephone and Telegraph Company will provide a major
              exhibit, in six different areas of communications. Sophisticated
              electronics, which will be demonstrated, including training
              systems for fire-fighters and monitoring of hospital patients.
            </>
          ),
        },
        {
          label: "Physics",
          body: (
            <>
              U. S. Atomic Energy Commission will present a fascinating exhibit
              on nuclear physics and the useful roles of radiation. The
              children&apos;s section, called &quot;Atomsville, USA&quot;, is
              designed to appeal to youngsters between the ages of 7 and 14. The
              rest of the exhibit, titled &quot;Radiation and Man&quot;, is also
              devoted to explaining principles of nuclear science, but for older
              students and adults. It includes other new educational displays
              and a large percentage of audience-participation devices. The
              Interchemical Corporation will demonstrate the physics of light,
              using instruments. This will be presented by means of two movies
              in color with unique illumination systems which will demonstrate
              principles of physics.
            </>
          ),
        },
        {
          label: "Chemistry",
          body: (
            <>
              The General Aniline and Film corporation will provide an exhibit
              on the intricate chemistry of color, stressing organic synthesis
              and the way color is used in industry and everyday life. There
              will be varied aspects encompassed by dyes, pigments, and color
              photographic products.
            </>
          ),
        },
        {
          label: "Biology",
          body: (
            <>
              Upjohn Company will present a functioning model of basic sensory
              mechanisms showing how the human brain operates. Using both motion
              pictures and models, the part that memory plays in thought
              processes will be demonstrated. Abbott Laboratories will present
              the &quot;Chemical Man&quot; which is a miniature &quot;operating
              room&quot; theatre where a color motion picture about the
              chemistry of the human body will tell the story of DNA and the
              wondrous mechanism of the blood stream. From time to time models
              will appear through the floor on which the motion picture is
              projected explaining the operation of the principal organs of the
              human body.
            </>
          ),
        },
        {
          label: "Oceanography",
          body: (
            <>
              The American Chemical Society will provide a description of the
              exciting chemical research being conducted on the ocean floor. The
              oceanographic studies being done at Woods Hole, MIT and Texas A
              &amp; M will be shown in color dioramas with a recorded
              audio-explanation.
            </>
          ),
        },
        {
          label: "Physiology",
          body: (
            <>
              Ames Company, Incorporated, a subsidiary of Miles Laboratories,
              will exhibit animated diagrams of the human body, conditions of
              illness, how it is detected by diagnositc aids, and the operation
              of the body when proper balance is restored. Emphasis wil be
              placed on the detection of diatbetic conditions.
            </>
          ),
        },
        {
          label: "Airspace",
          body: (
            <>
              Airborne Instruments Laboratory Division of Cutler-Hammer, Inc.
              will demonstrate an all-weather safe landing system employing
              moving craft in stack patterns which are followed to actual touch
              down despite zero ground visibility. Made necessary by jet speeds,
              the system specified by F. A. A. will be installed in the New York
              area within the next two years.
            </>
          ),
        },
        {
          label: "Pathology",
          body: (
            <>
              The American Cancer Society plans to have an &quot;open&quot;
              theatre for a variety of lecture-demonstrations concerning
              cytology, what has been learned about possible causes of cancer,
              and chemotherapy.
            </>
          ),
        },
        {
          label: "Anatomy",
          body: (
            <>
              Hearing Aid Industry Conference will present through models and
              transparencies an account of the mechanism of the ear, defects
              that develop and ways in which restoration of function may be
              possible.
            </>
          ),
        },
        {
          body: (
            <>
              At the close of the Fair in October, 1965, the City of New York
              will operate the Hall of Science through a Board of Trustees of
              prominent scientific, academic, and industrial leaders. They will
              be responsible for formulating policies. As a permanent facility
              in Flushing Meadow Park, high school and university students will
              be able to see the applications of theories in their academic
              studies.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/halsci02/halsci04.jpg",
        width: 600,
        height: 358,
        alt: "Hall of Science",
        bordered: true,
        title: "Hall of Science",
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
