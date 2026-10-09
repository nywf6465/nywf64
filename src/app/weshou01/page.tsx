import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Westinghouse — nywf64.com",
  description:
    "Westinghouse Time Capsule entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy weshou01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Weshou01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Westinghouse"
      titleId="weshou01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map"
      hero={{
        src: "/images/weshouoverview/hero-banner.jpg",
        alt: "Westinghouse pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WeshouNavChrome />}
      previousHref="/weshouoverview"
      nextHref="/weshou02"
      guide1964={{
        cover: {
          src: "/images/weshou01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/weshou01/weshoulogo64.gif",
          width: 138,
          height: 144,
          alt: "",
        },
        name: "WESTINGHOUSE",
        copy: (
          <>
            A gleaming torpedo-shaped Time Capsule, suspended by stainless steel
            wires over a reflecting pool, is the heart of this exhibit. Packed
            with artifacts of our times and accounts of the eventful history of
            our days since 1938, it will be buried in tar and concrete on the
            next-to-last day of the Fair, there to remain as a message to the
            future 5,000 years hence. Ten feet south of this tube is buried
            Westinghouse&apos;s first Time capsule, containing a report on
            civilization as it stood just prior to the 1939 World&apos;s Fair.
            Three open-sided circular pavilions in the area are each devoted to
            a different epoch in time.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "OF ANOTHER ERA",
            body: (
              <>
                The first circular pavilion is given to the original Time
                Capsule. A full-sized model, through a window along one side,
                reveals that it was packed with such items as a slide rule, a
                woman&apos;s hat, synthetic rubber and 10 million worlds on
                microfilm taken from books, magazines and newspapers setting
                forth the state of civilization in 1938. There were also
                messages to the future from Albert Einstein, Robert A. Milikan
                and Thomas Mann.
              </>
            ),
          },
          {
            label: "OF TIMES NOW.",
            body: (
              <>
                The second pavilion shows in photographs some of the awesome
                things that have happened since the first capsule went down:
                wonder drugs, jet aircraft, atomic and hydrogen explosions,
                commercial television and the first man in space, plus other
                events of war and peace that stirred the world. A distinguished
                committee will choose from among all these and more the things
                that will be recorded in the new Time Capsule - and visitors may
                sign a book that will go into the capsule, to be read by later
                generations.
              </>
            ),
          },
          {
            label: "OF TIMES PAST.",
            body: (
              <>
                In the third pavilion a 5,000-year calendar shows events of the
                past in detail.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/weshou01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/weshou01/weshoulogo.gif",
          width: 138,
          height: 144,
          alt: "",
        },
        name: "WESTINGHOUSE",
        nameFace: "arial",
        summary: (
          <>
            The heart of the exhibit is a torpedo-shaped Time Capsule, suspended
            over a reflecting pool.
          </>
        ),
        copy: (
          <>
            Packed with artifacts and accounts of the last, eventful 25 years,
            the capsule will be buried 50 feet underground at the end of the
            Fair, there to remain as a message to the future 5,000 years hence.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "OF ANOTHER ERA.",
            body: (
              <>
                In one of the circular pavilion structures is a copy of the
                first Time Capsule, which was buried on the same site during the
                1939/1940 Fair. A window shows some of its contents: a
                woman&apos;s hat, a slide rule, and microfilmed pages from
                newspapers and magazines describing the state of civilization in
                1938.
              </>
            ),
          },
          {
            label: "OF TIMES PRESENT.",
            body: (
              <>
                A second exhibit pictures some of the things that have changed
                our lives since the first capsule went down: television, wonder
                drugs, nuclear explosions, the exploration of space. The new
                Time Capsule will include 50,000 pages of microfilmed
                information on these and other scientific and social advances.
                Visitors may sign a book that will go into the capsule.
              </>
            ),
          },
          {
            label: "OF TIMES PAST.",
            body: (
              <>
                In a third exhibit, a 5,000-year calendar shows events of the
                past in detail.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/weshou01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/weshou01/federal-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/weshoumap",
      }}
    />
  );
}
