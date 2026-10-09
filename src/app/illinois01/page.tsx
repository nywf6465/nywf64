import type { Metadata } from "next";
import { IllinoisNavChrome } from "@/components/IllinoisNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Illinois — nywf64.com",
  description:
    "Illinois Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Illinois guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy illinois01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Illinois01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Illinois Pavilion"
      titleId="illinois01-title"
      hero={{
        src: "/images/illinoisoverview/hero-banner.jpg",
        alt: "Illinois Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IllinoisNavChrome />}
      previousHref="/illinoisoverview"
      nextHref="/illinois02"
      guide1964={{
        cover: {
          src: "/images/illinois01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/illinois01/illogo64.gif",
          width: 144,
          height: 79,
          alt: "",
        },
        name: "ILLINOIS",
        nameFace: "times",
        copy: (
          <>
            The state that Abraham Lincoln called home displays the largest
            collection of Lincolniana ever assembled for an international
            exposition, including copies of every known photo of the 16th
            President, and an original manuscript of the Gettysburg Address. In
            addition, Walt Disney has created a life-sized animated figure that
            looks, acts and speaks like Lincoln. It performs in the 500-seat
            Lincoln Theater where, from time to time, national and international
            personalities are scheduled to discuss the influence of the prairie
            President. Other special events are also planned.
          </>
        ),
        admission: [
          "Admission: free.",
          "Walt Disney Lincoln figure performs five times every hour.",
        ],
        highlights: [
          {
            label: "DISNEY'S LINCOLN.",
            body: (
              <>
                With mannerisms characteristic of the great Civil War President,
                the animated figure recites excerpts from Lincoln&apos;s speeches
                on liberty, civil rights and freedom. Dimensions for the figure
                duplicate the physical statistics found in biographies; the
                facial features were taken from Lincoln&apos;s life mask. The
                figure is capable of more than 250,000 combinations of action,
                including smiles, frowns and gestures. The program, called
                &quot;Great Moments with Mr. Lincoln,&quot; will be suspended
                when special events are held in the theater.
              </>
            ),
          },
          {
            label: "THE YEARS OF LINCOLN.",
            body: (
              <>
                A restoration of the Hill-McNamara store in New Salem,
                Lincoln&apos;s first Illinois home town, is located in the
                pavilion area. Among the other displays are a head of Lincoln by
                the great sculptor Gutzon Borglum, a new statue of Lincoln on
                horseback and many documents and papers. A historical reference
                library is available for visitors to see.
              </>
            ),
          },
          {
            label: "PLEASURES OF THE STATE.",
            body: (
              <>
                Throughout the pavilion and in the adjacent courtyard and garden
                areas, displays and information centers extol the state&apos;s
                vacation facilities, from the Illinois Ozarks to the great city
                of Chicago.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/illinois01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/illinois01/illogo65.gif",
          width: 144,
          height: 79,
          alt: "",
        },
        name: "ILLINOIS",
        nameFace: "arial",
        summary: (
          <>
            The highlight of a collection of Lincolniana and state lore is Walt
            Disney&apos;s moving, talking figure of Abe Lincoln himself.
          </>
        ),
        copy: (
          <>
            In addition to the life-sized animated figure and various other
            Lincoln sculptures, exhibits include every known photo of the 16th
            President and an original copy of the Gettysburg Address.
          </>
        ),
        admission:
          "Admission: free.  The Lincoln figure performs five times every hour.",
        highlights: [
          {
            label: "DISNEY'S LINCOLN.",
            labelFace: "arial",
            body: (
              <>
                After watching a brief sound and slide presentation, &quot;The
                Illinois Story,&quot; visitors enter a comfortable theater where
                the figure of Lincoln rises from its chair and recites excerpts
                from some of the speeches of the Civil War President. The figure
                is capable of more than 250,000 combinations of actions,
                including gestures, smiles and frowns; the facial features were
                taken from Lincoln&apos;s life mask.
              </>
            ),
          },
          {
            label: "THE LINCOLN YEARS.",
            labelFace: "arial",
            body: (
              <>
                On view are a restoration of a store in New Salem, Lincoln&apos;s
                first Illinois hometown; a copy of a head of Lincoln by sculptor
                Gutzon Borglum; a new equestrian statue; and a complete
                collection of Lincoln photographs and papers. A historical
                reference library is available for visitor&apos;s use.
              </>
            ),
          },
          {
            label: "ILLINOIS VACATIONS.",
            labelFace: "arial",
            body: (
              <>
                Displays extol the state&apos;s vacation facilities, from Chicago
                to the Ozarks.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/illinois01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/illinois01/federal-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/illinoismap",
        footnote: (
          <>
            Note: This feature contains materials related to a Walt Disney
            production. nywf64.com is not affiliated in any way with The Walt
            Disney Company or any of its subsidiaries.All illustrations and most
            text should be considered © The Walt Disney Company (unless
            specifically noted otherwise)
          </>
        ),
      }}
    />
  );
}
