import type { Metadata } from "next";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — General Electric — nywf64.com",
  description:
    "General Electric Progressland entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy genele01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Preserve legacy wording (“thousand of spinning atoms”).
 */
export default function Genele01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="General Electric Pavilion"
      titleId="genele01-title"
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/geneleoverview"
      nextHref="/genele02"
      guide1964={{
        cover: {
          src: "/images/genele01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/genele01/gelogo64.gif",
          width: 144,
          height: 92,
          alt: "",
        },
        name: "GENERAL ELECTRIC",
        copy: (
          <>
            Under a huge, gleaming dome suspended from spiraling pipes, the GE exhibit, called &quot;Progressland,&quot; depicts the history of electricity, from its beginning to the mighty bang of nuclear fusion. The multipart show, produced by Walt Disney, uses a unique theater. Here the seated audience is carried past a number of stages; there are reflecting mirrors, startling visual and sound projections, and in the climax, neutron counters and other instruments to document graphically the demonstration of controlled thermonuclear fusion.
          </>
        ),
        admission: ["Admission: free.", "Length of show: 45 minutes; 250 people admitted every four minutes."],
        highlights: [
          {
            label: "CAROUSEL THEATER.",
            body: (
              <>
                In the first part of the program, separate auditoriums, each holding 250 people, circle into position and are carried past stages on which life-sized, three-dimensional, animated human figures move, talk, laugh and act out the story of electricity in the home from the Gay &apos;90s to the present.
              </>
            ),
          },
          {
            label: "A late 19th Century home",
            body: (
              <>
                is shown. Its inhabitants struggle with all the latest luxuries: telephone, gas lamps, gramophone, kitchen pump, a hand-cranked clothes washer and a hand-pumped, air-suction vacuum cleaner.
              </>
            ),
          },
          {
            label: "A home of the '20s",
            body: (
              <>
                comes next, with coffeemakers and sewing machines, &quot;monitor&quot;-topped refrigerators and a homemade cooling device for hot weather: an electric fan that circulates air over a cake of ice.
              </>
            ),
          },
          {
            label: "The '40s",
            body: (
              <>
                are recalled with the little, round television screen, plus some odd applications of electricity: e.g., housewives mixing wallpaper paste with cake mixers.
              </>
            ),
          },
          {
            label: "The glories of today",
            body: (
              <>
                glitter in a living room at Christmastime, a glass-enclosed, electrically heated patio, a kitchen that all but runs itself.
              </>
            ),
          },
          {
            label: "THE CORRIDOR OF MIRRORS.",
            body: (
              <>
                Visitors pass through a hall in which giant photos of General Electric scientists and engineers - at work on laser rays, space technology, nuclear experiments and low-temperature research - are reflected and re-reflected in mirrors.
              </>
            ),
          },
          {
            label: "THE SKY-DOME SPECTACULAR.",
            body: (
              <>
                By means of a dramatic new projection technique, the interior of the great dome is filled with the sights and sounds of the great natural sources of energy: fierce electrical storms, fire, a blazing sun and thousand of spinning atoms. A narrator describes man&apos;s historic search to harness energy and introduces the fusion experiment to follow.
              </>
            ),
          },
          {
            label: "FUSION ON EARTH.",
            body: (
              <>
                In the first demonstration of controlled thermonuclear fusion to be witnessed by a large general audience, a magnetic field squeezes a plasma of deuterium gas for a few millionths of a second at a temperature of 20 million degrees Fahrenheit. There is a vivid flash and a loud report as atoms collide, creating free energy (evidenced on instruments).
              </>
            ),
          },
          {
            label: "ELECTRIC LIVING.",
            body: (
              <>
                Apart from the scheduled show, a model all-electric community is on display with the latest electric innovations for the home, public buildings, industry and space exploration.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/genele01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/genele01/gelogo.gif",
          width: 144,
          height: 92,
          alt: "",
        },
        name: "GENERAL ELECTRIC",
        summary: "In a one-hour show, the changes electricity has brought in American living are dramatized by life-sized, animated figures created by Walt Disney.",
        copy: (
          <>
            Visitors also see graphic displays of GE&apos;s scientific achievements, climaxed by a demonstration of controlled nuclear fusion.
          </>
        ),
        admission: "Admission: free. A new show starts every four minutes.",
        highlights: [
          {
            label: "CAROUSEL THEATER.",
            body: (
              <>
                Audiences seated in separate auditoriums are carried past a four-part circular stage on which animated human figures act out the story of electricity from the Gay Nineties to the present. In the opening scene, a family struggles with such &quot;appliances&quot; as gas lamps and a kitchen pump. In the final scene, the electrical wonders of today glitter in a living room at Christmastime, in an electrically heated patio and in a kitchen that all but runs itself
              </>
            ),
          },
          {
            label: "SKY-DOME SPECTACULAR.",
            body: (
              <>
                On passing through a photographic display of GE scientists at work, visitors enter the Sky Dome, which is filled with the sights and sounds of the great natural sources of energy: fierce electrical storms, fire, a blazing sun and spinning atoms. A narrator describes man&apos;s historic efforts to harness energy.
              </>
            ),
          },
          {
            label: "FUSION ON EARTH.",
            body: (
              <>
                In a spectacular demonstration of controlled nuclear fusion, a magnetic field squeezes a plasma of deuterium gas for a few millionths of a second at a temperature of 50 million degrees Fahrenheit. There is a vivid flash and a loud report as atoms fuse and free energy is released.
              </>
            ),
          },
          {
            label: "ELECTRIC LIVING.",
            body: (
              <>
                On the first floor, an all-electric community of exhibits displays the latest innovations for the home, public buildings, industry and space exploration.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/genele01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/genele01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/genelemap",
      }}
    />
  );
}
