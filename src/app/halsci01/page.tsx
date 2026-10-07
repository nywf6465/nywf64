import type { Metadata } from "next";
import { HalsciNavChrome } from "@/components/HalsciNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Hall of Science — nywf64.com",
  description:
    "Hall of Science pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Science guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy halsci01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Legacy wording (“resented”, “show ow”, “General aniline”) preserved.
 * Locate It → /halscimap (Transportation Area).
 */
export default function Halsci01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Hall of Science"
      titleId="halsci01-title"
      hero={{
        src: "/images/halscioverview/hero-banner.jpg",
        alt: "Hall of Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HalsciNavChrome />}
      previousHref="/halscioverview"
      nextHref="/halsci02"
      guide1964={{
        cover: {
          src: "/images/halsci01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/halsci01/halscilogo64.gif",
          width: 144,
          height: 130,
          alt: "",
        },
        name: "HALL OF SCIENCE",
        copy: (
          <>
            In one big pavilion, 11 companies and organizations present displays
            devoted to recent and imminent advances in scientific knowledge -
            including the simulated meeting in orbit of two space vehicles. The
            building itself, a permanent structure, will become the New York
            Museum of Science and Technology.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "A JOURNEY INTO SPACE.",
            body: (
              <>
                In the Great Hall, a supply vehicle appears to blast off from
                Earth, bound for a meeting with a space station in orbit 350
                miles away - actually about 50 feet above the floor. This
                exhibit, resented by the Martin Marietta Corporation, heightens
                the impression of a trip into space with the use of motion
                pictures and authentic sound and lighting effects.
              </>
            ),
          },
          {
            label: "HOW THE BRAIN WORKS.",
            body: (
              <>
                The process of sensory perception is traced through a human
                &quot;brain&quot; made of aluminum disks, 38 miles of wire and
                30,000 blinking lights. The exhibit, prepared by The Upjohn
                Company, demonstrates the complex cerebral procedures involved
                in a simple decision to applaud the performance of a singer.
              </>
            ),
          },
          {
            label: "THE WAY WE HEAR.",
            body: (
              <>
                The exhibit of the Hearing Aid Industry Conference, Inc.
                explains every aspect of hearing, including the social and
                physical problems of deafness and the efforts of science to
                solve them.
              </>
            ),
          },
          {
            label: "CHEMICAL MAN.",
            body: (
              <>
                Abbott Laboratories shows a 15-minute film about the human body
                and its cellular structure. The film, projected on the floor of
                an egg-shaped auditorium, is complemented by colored models of
                the molecules of a cell.
              </>
            ),
          },
          {
            label: "A COLOR CENTER.",
            body: (
              <>
                The world of color is depicted by the Interchemical Corporation
                in a number of displays, including a red, blue and green top that
                turns white as it spins, and moving objects that change color as
                they pass through different kinds of light.
              </>
            ),
          },
          {
            label: "ATOMS FOR CHILDREN.",
            body: (
              <>
                In &quot;Atmosville, U.S.A.,&quot; the U.S. Atomic Energy
                Commission presents an explanation of nuclear energy for
                children from seven to 14. The display contains exhibits such as
                a remote-controlled manipulator, designed for the handling of
                radioactive substances, which the youngsters may operate
                themselves. (No real radioactive materials are used, of course.)
                <br />
                <br />
                For adults, the AEC explains atomic energy and its value in
                research, agriculture and medicine. The displays include
                animated units, one of which lets the visitor make his own
                &quot;atoms.&quot;
              </>
            ),
          },
          {
            label: "THE CHEMISTRY OF OCEANS.",
            body: (
              <>
                Both audio and photographic material are used by the American
                Chemical Society to describe the techniques being developed to
                uncover the oceans&apos; rich resources of chemicals and
                minerals.
              </>
            ),
          },
          {
            label: "FLIGHT CONTROL.",
            body: (
              <>
                A model air terminal with moving planes and a control tower
                demonstrates some of the electronic devices that guide the
                landing of aircraft.
              </>
            ),
          },
          {
            label: "THE WAR AGAINST CANCER.",
            body: (
              <>
                The exhibit of the American Cancer Society demonstrates in sound
                and pictures the importance of cancer research as exemplified by
                the story of a major lifesaving cancer detection test.
              </>
            ),
          },
          {
            label: "THE DIAGNOSIS OF DISEASE.",
            body: (
              <>
                Animated models and diagrams in the display of the Ames Company
                show ow chemical and electronic detection help diagnose
                diabetes, gout and other diseases.
              </>
            ),
          },
          {
            label: "THE CHEMISTRY OF COLOR.",
            body: (
              <>
                An exhibit presented by the General aniline and Film Corporation
                shows contributions made to organic chemistry by scientists
                working in dyestuff research.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/halsci01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/halsci01/halscilogo.gif",
          width: 144,
          height: 129,
          alt: "",
        },
        name: "HALL OF SCIENCE.",
        summary: (
          <>
            Eleven exhibitors display scientific advances ranging from disease
            control to travel in space.
          </>
        ),
        copy: (
          <>
            This building, a permanent structure, will become the New York
            Museum of Science and Technology after the Fair closes.
            <br />
            <br />
            Exhibitors in the Hall of Science are Abbott Laboratories, the
            American Cancer Society, the American Chemical Society, the Ames
            Company, the General Aniline and Film Corporation, the Hearing Aid
            Industry Conference, the Interchemical Corporation, the Martin
            Marietta Corporation, the United States Office of Civil Defense, The
            Upjohn Company and the United States Atomic Energy Commission.
          </>
        ),
        highlights: [
          {
            label: "A SPACE TRIP.",
            body: (
              <>
                In the Great Hall, a rendezvous in space is realistically
                simulated with special effects. At the climax, two full-scale
                spaceship models hover 50 feet in the air to exchange crews and
                supplies.
              </>
            ),
          },
          {
            label: "BIOLOGICAL WONDERS.",
            body: (
              <>
                Sensory perception is traced through a &quot;brain&quot; made of
                38 miles of wire and 30,000 lights. The problems of deafness are
                explained, and a 15-minute film illustrates the body&apos;s
                cellular structure. Other exhibits illustrate cancer research
                and the electronic detection of diseases.
              </>
            ),
          },
          {
            label: "ATOMS FOR KIDS.",
            body: (
              <>
                In &quot;Atomsville, U.S.A.,&quot; nuclear energy is explained
                for children. Among the exhibits is a remotely controlled
                manipulator which the youngsters may operate to handle
                &quot;radioactive&quot; materials. For adults, there are
                displays on nuclear energy in research, agriculture and
                medicine, and an exhibit on nuclear fallout and how to guard
                against its hazards.
              </>
            ),
          },
          {
            label: "COLOR AND CHEMISTRY.",
            body: (
              <>
                Displays demonstrate the changing nature of color, advances in
                dyestuff research, and techniques for tapping the sea&apos;s
                rich resources.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/halsci01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/halsci01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/halscimap",
      }}
    />
  );
}
