import type { Metadata } from "next";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Chrysler — nywf64.com",
  description:
    "Chrysler photograph album — Bill Cotter Collection views of the autofare Islands from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const cotterSource = "SOURCE: © Copyright Bill Cotter Collection";

/**
 * Chrysler photograph album II — “photographs” standard.
 * Body from legacy chrysler06.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard) with Bill Cotter intro.
 * Legacy wording (Gazeebo, Show-go-Round) preserved.
 */
export default function Chrysler06Page() {
  return (
    <PhotographsPage
      heroLabel="Chrysler"
      titleId="chrysler06-title"
      title="Photograph Album"
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler05"
      overviewHref="/chrysleroverview"
      nextHref="/chrysler07"
      intro={
        <p>
          <strong style={{ color: "#4682b4" }}>Bill Cotter</strong>, World&apos;s
          Fair enthusiast, has been collecting images of the 1964/1965 New York
          World&apos;s Fair for many years. He shares with us here some excellent
          views the{" "}
          <strong style={{ color: "#4682b4" }}>
            <em>Chrysler &quot;autofare&quot; Islands</em>
          </strong>
          . If you would like to see more photos from Bill&apos;s fabulous
          collection of World&apos;s Fair images, visit his website at{" "}
          <a
            href="http://www.worldsfairphotos.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WorldsFairPhotos.com
          </a>
          .
        </p>
      }
      sections={[
        {
          heading: "Bill Cotter Collection",
          photos: [

            {
              image: {
                src: "/images/chrysler06/chry54.jpg",
                width: 400,
                height: 276,
                alt: "An entrance portal to Chrysler's autofare Islands",
              },
              title: <>An entrance portal to Chrysler&apos;s <em>autofare</em> Islands</>,
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry38.jpg",
                width: 400,
                height: 264,
                alt: "An entrance portal to Chrysler's autofare Islands - Night",
              },
              title: <>An entrance portal to Chrysler&apos;s <em>autofare</em> Islands - Night</>,
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry53.jpg",
                width: 400,
                height: 275,
                alt: "Oversized license plate makes for a great photo opportunity!",
              },
              title: "Oversized license plate makes for a great photo opportunity!",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry45.jpg",
                width: 400,
                height: 264,
                alt: "Front of Chrysler's Giant Auto illuminated at night",
              },
              title: "Front of Chrysler's Giant Auto illuminated at night",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry46.jpg",
                width: 400,
                height: 264,
                alt: "Back of Chrysler's Giant Auto illuminated at night",
              },
              title: "Back of Chrysler's Giant Auto illuminated at night",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry48.jpg",
                width: 269,
                height: 400,
                alt: "Chrysler's Rocket and \"Auto Fountains\"",
              },
              title: "Chrysler's Rocket and \"Auto Fountains\"",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry33.jpg",
                width: 400,
                height: 264,
                alt: "\"Auto Fountains\" on Chrysler's autofare Islands",
              },
              title: <>&quot;Auto Fountains&quot; on Chrysler&apos;s <em>autofare</em> Islands</>,
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry43.jpg",
                width: 264,
                height: 400,
                alt: "Night view of Chrysler's Rocket",
              },
              title: "Night view of Chrysler's Rocket",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry60.jpg",
                width: 400,
                height: 264,
                alt: "The Pentastar Theater",
              },
              title: "The Pentastar Theater",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry40.jpg",
                width: 400,
                height: 264,
                alt: "The Singing Oil Can - a castmember of Chrysler's Show-go-Round",
              },
              title: "The Singing Oil Can - a castmember of Chrysler's Show-go-Round",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry39.jpg",
                width: 400,
                height: 264,
                alt: "The Sprock-ettes - castmembers of Chrysler's Show-go-Round",
              },
              title: "The Sprock-ettes - castmembers of Chrysler's Show-go-Round",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry41.jpg",
                width: 400,
                height: 264,
                alt: "The finale of Chrysler's Show-go-Round - The experimental Turbine Car",
              },
              title: "The finale of Chrysler's Show-go-Round - The experimental Turbine Car",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry37.jpg",
                width: 400,
                height: 269,
                alt: "Chrysler's first automobile is backed by the 10 Diversified Products Showmen",
              },
              title: "Chrysler's first automobile is backed by the 10 Diversified Products Showmen",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry34.jpg",
                width: 400,
                height: 264,
                alt: "The Showmen illuminated at night",
              },
              title: "The Showmen illuminated at night",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry55.jpg",
                width: 400,
                height: 274,
                alt: "Chrysler's experimental Turbine Car on a test drive around the Islands",
              },
              title: "Chrysler's experimental Turbine Car on a test drive around the Islands",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry31.jpg",
                width: 400,
                height: 269,
                alt: "Hood is up to allow viewing of the turbine engine in the experimental car",
              },
              title: "Hood is up to allow viewing of the turbine engine in the experimental car",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry56.jpg",
                width: 400,
                height: 271,
                alt: "Flags of many nations with Chrysler operations in the moat surrounding the Islands - Autoparts Gazeebo rises in the background",
              },
              title: "Flags of many nations with Chrysler operations in the moat surrounding the Islands - Autoparts Gazeebo rises in the background",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry49.jpg",
                width: 400,
                height: 269,
                alt: "Whimsical zoo creature in the autofare Zoo",
              },
              title: <>Whimsical zoo creature in the <em>autofare</em> Zoo</>,
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry51.jpg",
                width: 400,
                height: 269,
                alt: "Whimsical zoo creature in the autofare Zoo",
              },
              title: <>Whimsical zoo creature in the <em>autofare</em> Zoo</>,
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry35.jpg",
                width: 400,
                height: 264,
                alt: "The ride-through Assembly Line",
              },
              title: "The ride-through Assembly Line",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry36.jpg",
                width: 400,
                height: 264,
                alt: "The ride-through Assembly Line",
              },
              title: "The ride-through Assembly Line",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry52.jpg",
                width: 400,
                height: 269,
                alt: "autofare's Giant Engine - front",
              },
              title: <><em>autofare</em>&apos;s Giant Engine - front</>,
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry47.jpg",
                width: 400,
                height: 264,
                alt: "autofare's Giant Engine - back",
              },
              title: <><em>autofare</em>&apos;s Giant Engine - back</>,
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry44.jpg",
                width: 400,
                height: 274,
                alt: "autofare Islands by day as seen from the top of the observation towers of the New York State Pavilion",
              },
              title: <><em>autofare</em> Islands by day as seen from the top of the observation towers of the New York State Pavilion</>,
              source: cotterSource,
            },
            {
              image: {
                src: "/images/chrysler06/chry61.jpg",
                width: 400,
                height: 269,
                alt: "autofare Islands by night as seen from the top of the observation towers of the New York State Pavilion",
              },
              title: <><em>autofare</em> Islands by night as seen from the top of the observation towers of the New York State Pavilion</>,
              source: cotterSource,
            },
          ],
        },
      ]}
    />
  );
}
