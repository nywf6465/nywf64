import type { Metadata } from "next";
import { IndiaNavChrome } from "@/components/IndiaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — India — nywf64.com",
  description:
    "India pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * India guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy india01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Legacy wording (“producing good for export”) preserved.
 * Locate It → /indiamap (International Area).
 */
export default function India01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="India"
      titleId="india01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/indiaoverview/hero-banner.jpg",
        alt: "India pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IndiaNavChrome />}
      previousHref="/indiaoverview"
      nextHref="/india02"
      guide1964={{
        cover: {
          src: "/images/india01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/india01/indialogo64.gif",
          width: 144,
          height: 79,
          alt: "",
        },
        name: "INDIA",
        copy: (
          <>
            This striking pavilion, whose first floor is screened by cascades of
            water falling into a lotus pond, reflects the tremendous industrial
            and social progress that India has made in the last decade and a half
            as an independent nation. An exhibition of art works, ancient and
            modern, indicates the diversity of India&apos;s cultures. Other
            exhibits show how effective democracy has come to the nation&apos;s
            450 million people, and how industry and education have boomed. A
            shop sells rare art objects, saris, baskets and stoneware. A
            restaurant in a separate building serves the delicacies of the land.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "ART OLD AND NEW.",
            body: (
              <>
                The high artistic achievements of many peoples and periods are
                on display: a Fifth Century Buddha, a carved 18th Century palace
                door, 20th Century murals, and others.
              </>
            ),
          },
          {
            label: '"PROGRESS AND DEMOCRACY."',
            body: (
              <>
                Displays of handicrafts - baskets, glassware, textiles -
                illustrate the village handicrafts being encouraged under the
                Community Development Program and through cooperatives which
                market the items.
              </>
            ),
          },
          {
            label: "INDUSTRY AND INTELLECT.",
            body: (
              <>
                Visual displays and recordings explain how this once backward
                nation is now able to manufacture such heavy items as aircraft
                engines, locomotives and automobiles, as well as producing good
                for export and exploiting the peaceful possibilities of atomic
                energy. Other displays show the growth of universities,
                technical schools and research laboratories.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                This round, graceful structure, whose ceiling reproduces that of
                an ancient temple, serves such dishes as Tandori chicken
                (charcoal-roasted with spices) and puffy bread.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/india01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/india01/indialogo.gif",
          width: 144,
          height: 79,
          alt: "",
        },
        name: "INDIA",
        nameFace: "arial",
        summary: (
          <>
            Old cultures and new industry are portrayed in this pavilion, set
            behind a cascade of water.
          </>
        ),
        copy: (
          <>
            On display are evidences of India&apos;s diverse heritage and its
            recent achievements as an independent democracy of 450 million
            people. A shop sells art objects and handicrafts, and a restaurant
            serves native delicacies.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "ART OLD AND NEW.",
            body: (
              <>
                A Fifth Century Buddha, 20th Century murals and fabulous
                tapestries are shown.
              </>
            ),
            labelFace: "arial",
          },
          {
            label: "SKILLS REBORN.",
            body: (
              <>
                Textiles, baskets, glassware and brass illustrate the revival of
                handicrafts under the Community Development Program.
              </>
            ),
            labelFace: "arial",
          },
          {
            label: "A NEW AGE.",
            body: (
              <>
                Displays and recordings show how a once-backward nation is now
                able to make aircraft engines and automobiles, and exploit the
                peaceful uses of atomic power. Other exhibits emphasize the
                growth of education and research.
              </>
            ),
            labelFace: "arial",
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                Under a ceiling copied from an ancient temple, diners enjoy
                tasty Indian dishes. A snack bar serves inexpensive meals.
              </>
            ),
            labelFace: "arial",
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/india01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/india01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/indiamap",
      }}
    />
  );
}
