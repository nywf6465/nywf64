import type { Metadata } from "next";
import { DupontNavChrome } from "@/components/DupontNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — DuPont — nywf64.com",
  description:
    "DuPont pavilion photograph album — publicity photographs from The Wonderful World of Chemistry at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const kraus =
  "SOURCE: DuPont Publicity Photograph presented courtesy Mike Kraus Collection";

/**
 * DuPont photograph album II — “photographs” standard.
 * Body from legacy dupont04.html (Photograph Scrap Book banner omitted).
 * Legacy wording (Inpersonating, Shelia, becomed) preserved.
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Dupont04Page() {
  return (
    <PhotographsPage
      heroLabel="DuPont"
      titleId="dupont04-title"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont03"
      overviewHref="/dupontoverview"
      nextHref="/dupont05"
      sections={[
        {
          heading: "The Happy Plastics Family",
          photos: [
            {
              image: {
                src: "/images/dupont04/dp30.01.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 1",
              },
              title: "Inpersonating various energetic molecules in \"The Happy Plastics Family\" production number in Du Pont's musical revue at the New York World's Fair are Ronnie Hall, Sigyn Lund, Frank Andre and Suzanne Astor. The show is being played by seven different companies, who present it in two theatres simultaneously 40 times daily.",
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp30.02.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 2",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp30.03.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 3",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp30.04.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 4",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp30.05.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 5",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp30.06.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 6",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp30.07.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 7",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp30.08.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 8",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp30.09.jpg",
                width: 200,
                height: 156,
                alt: "The Happy Plastics Family \u2014 frame 9",
              },
              source: kraus,
            },
          ],
        },
        {
          heading: "We're Gonna Have Shoes",
          photos: [
            {
              image: {
                src: "/images/dupont04/dp31.01.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 1",
              },
              title: "\"We're Gonna Have Shoes\" has the chorus in the Du Pont musical revue at the New York World's Fair kicking up their heels in praise of a new product called \"Corfam.\" Sigyn Lund, Frank Andre, Suzanne Astor and Ronnie Hall sing while Dargen Montgomery does counterpoint narration. The Du Pont show is being presented 40 times daily by seven different troupes in two theatres simultaneously.",
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp31.02.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 2",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp31.03.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 3",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp31.04.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 4",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp31.05.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 5",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp31.06.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 6",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp31.07.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 7",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp31.08.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 8",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp31.09.jpg",
                width: 200,
                height: 156,
                alt: "We're Gonna Have Shoes \u2014 frame 9",
              },
              source: kraus,
            },
          ],
        },
        {
          heading: "Live and Filmed Actors",
          photos: [
            {
              image: {
                src: "/images/dupont04/dp32.01.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 1",
              },
              title: "Completely unique feature of the Du Pont musical revue at the New York World's Fair is the simultaneous use of flesh-and-blood and filmed actors. Singing and dancing together (and even passing a rose!) are Shelia Sullivan, Diahn Williams and Shirley de Burgh on the three movie screens, with Jerry Gardner and Ted Sprague in the flesh. Conceived, produced, directed and written by Broadway's Michael Brown, the show is being presented 40 times daily by seven different troupes in two theatres simultaneously.",
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp32.02.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 2",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp32.03.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 3",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp32.04.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 4",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp32.05.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 5",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp32.06.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 6",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp32.07.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 7",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp32.08.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 8",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp32.09.jpg",
                width: 200,
                height: 156,
                alt: "Live and Filmed Actors \u2014 frame 9",
              },
              source: kraus,
            },
          ],
        },
        {
          heading: "Chemical Wizardry",
          photos: [
            {
              image: {
                src: "/images/dupont04/dp33.01.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 1",
              },
              title: "Chemical wizardry climaxes the second act of Du Pont's musical revue, \"The Wonderful World of Chemistry\", at the New York World's Fair 1964-65. The magic of Dacron 88 Polyester is demonstrated by (l-r) Palmer Witted, Andy Jarkowsky and Ted Richert, part of the team who conduct this and other demonstrations of Du Pont products. A strand of unstretched Dacron 88 Polyester is held and stretched to over twice its length. When the strand is released, the stretched fiber bunches up or fluffs since each individual filament has now becomed crimped by the stretching process.",
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp33.02.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 2",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp33.03.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 3",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp33.04.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 4",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp33.05.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 5",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp33.06.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 6",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp33.07.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 7",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp33.08.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 8",
              },
              source: kraus,
            },
            {
              image: {
                src: "/images/dupont04/dp33.09.jpg",
                width: 200,
                height: 156,
                alt: "Chemical Wizardry \u2014 frame 9",
              },
              source: kraus,
            },
          ],
        },
      ]}
    />
  );
}
