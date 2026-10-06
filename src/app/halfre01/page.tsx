import type { Metadata } from "next";
import { HalfreNavChrome } from "@/components/HalfreNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Hall of Free Enterprise — nywf64.com",
  description:
    "Hall of Free Enterprise pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Free Enterprise guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy halfre01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Locate It → /halfremap (International Area).
 */
export default function Halfre01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Hall of Free Enterprise"
      titleId="halfre01-title"
      hero={{
        src: "/images/halfreoverview/hero-banner.jpg",
        alt: "Hall of Free Enterprise at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HalfreNavChrome />}
      previousHref="/halfreoverview"
      nextHref="/halfre02"
      guide1964={{
        cover: {
          src: "/images/halfre01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/halfre01/halfrelogo64.gif",
          width: 144,
          height: 66,
          alt: "",
        },
        name: (
          <>
            HALL OF FREE
            <br />
            ENTERPRISE
          </>
        ),
        copy: (
          <>
            The principles and benefits of &quot;free competitive enterprise,
            properly regulated, unhampered by unwarranted interference&quot; are
            explained in a variety of ways in this one-story steel and concrete
            building, sponsored by the American Economic Foundation. A theater
            in the round has a show on &quot;bread and butter issues&quot; and,
            for those who can spend the time, there is even an accredited
            graduate seminar in economics, given in two-week sessions, at the
            pavilion.
          </>
        ),
        admission: [
          "Admission: free.",
          "Stage show takes 15 minutes; performances are continuous.",
        ],
        highlights: [
          {
            label: "ECONOMICS ON STAGE.",
            body: (
              <>
                The seats in an oval theater slowly swivel to follow a show
                called &quot;Mr. Both Comes to Town,&quot; staged on sets that
                encircle the audience. An animated wire figure represents
                man&apos;s dilemma: as producer he wants higher wages for his
                work; as consumer he wants to buy goods at lower prices.
              </>
            ),
          },
          {
            label: "MONEY IN MOTION.",
            body: (
              <>
                In a three-dimensional, animated wall panel America&apos;s
                corporate economy comes to life. Polarized light makes money
                appear to flow through transparent tubes, to show how it is
                channeled into purchases, payrolls, taxes and profits, until the
                books are balanced.
              </>
            ),
          },
          {
            label: "TREE OF ECONOMIC LIFE.",
            body: (
              <>
                A symbolic revolving &quot;tree&quot; standing 12 feet high is
                designed to demonstrate the factors of economic growth: the
                natural resources that man taps, the jobs at which he works, the
                tools he uses and the goods he produces and buys.
              </>
            ),
          },
          {
            label: "THE ANSWER MACHINE.",
            body: (
              <>
                On giant panels, 120 basic economic questions are printed. When
                the visitor punches a numbered button on the wall panel, a
                machine prints out the answer.
              </>
            ),
          },
          {
            label: "ENTERPRISE ECONOMICS, B.A. 204-0.",
            body: (
              <>
                This is the title of a graduate seminar offered by Adelphi
                University&apos;s Business Institute and accredited by the State
                University of New York. Adelphi faculty members and
                distinguished outside economists lecture. Two or three credits
                toward an M.A. degree can be earned in the seminar, which is
                given in two-week periods of 30 classroom hours.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/halfre01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/halfre01/halfrelogo.gif",
          width: 144,
          height: 66,
          alt: "",
        },
        name: (
          <>
            HALL OF FREE
            <br />
            ENTERPRISE
          </>
        ),
        summary: (
          <>
            The benefits of free competition are explained in a pavilion
            sponsored by the American Economic Foundation.
          </>
        ),
        highlights: [
          {
            label: "ECONOMICS ON STAGE.",
            body: (
              <>
                The seats in an oval theater slowly swivel to follow a 17
                1/2-minute animated show called &quot;Mr. Both Comes to
                Town,&quot; which dramatizes basic facts of economics, showing
                the individual as both producer and consumer.
              </>
            ),
          },
          {
            label: "ECONOMIC GROWTH.",
            body: (
              <>
                A &quot;tree&quot; which revolves demonstrates factors of
                production, from natural resources through jobs and tools to the
                products man makes and buys. Visitors push a button to ask any
                of 120 questions on economics, and a machine prints the answers.
              </>
            ),
          },
          {
            label: "OPPORTUNITIES.",
            body: (
              <>
                Franchise industries illustrate the prospects they offer the
                person who wants to start his own business. An animated flow
                chart dramatizes the U.S. economy.
              </>
            ),
          },
          {
            label: "GRADUATE SEMINAR.",
            body: (
              <>
                Students may earn credits toward a master&apos;s degree by
                attending a course on &quot;enterprise economics,&quot; given at
                the pavilion by the Adelphi University Business Institute.
              </>
            ),
          },
        ],
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/halfre01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/halfre01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/halfremap",
      }}
    />
  );
}
