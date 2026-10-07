import type { Metadata } from "next";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Formica — nywf64.com",
  description:
    "Formica World's Fair House entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Formica guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy formica01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Formica01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Formica"
      titleId="formica01-title"
      hero={{
        src: "/images/formicaoverview/hero-banner.jpg",
        alt: "Formica at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FormicaNavChrome />}
      previousHref="/formicaoverview"
      nextHref="/formica02"
      guide1964={{
        cover: {
          src: "/images/formica01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/formica01/formica-logo-1964.gif",
          width: 144,
          height: 83,
          alt: "",
        },
        name: "FORMICA",
        copy: (
          <>
            The &quot;Formica World&apos;s Fair House,&quot; situated on the only
            hill at the Fair, is the first house to use Formica laminated plastic
            on exterior walls. Its seven-room interior includes an indoor
            barbecue pit and natural illumination from skylights. Formica
            products are used throughout - on furniture, cabinets and interior
            walls, with contemporary styling. Designed for a family of four to
            six, the one-level house is for sale from listed builders across the
            country, in six styles priced from $25,000 to $45,000. An exhibit
            arcade, built into the hill below the model home, provides details
            about the building materials and furnishings.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: '"TALKING HOUSE" TOUR.',
            body: (
              <>
                {" "}
                The interior of the house is viewed from an enlarged hallway,
                where a tape-recorded tour past animated displays takes 13
                minutes. Features of the home, besides its ease of housekeeping,
                are a patio that gives access to four rooms, and the four
                skylights, which are located in the hallway (which has two),
                breakfast area and kitchen.
              </>
            ),
          },
          {
            label: "EXHIBIT ARCADE.",
            body: (
              <>
                {" "}
                Shown here are building products, furnishings and other items,
                some from Formica Corporation and other divisions of the American
                Cyanamid Company, others provided by a number of independent
                manufacturers who supplied products for the model house.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/formica01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/formica01/formica-logo-1965.gif",
          width: 144,
          height: 83,
          alt: "",
        },
        name: "FORMICA",
        nameFace: "arial",
        summary: (
          <>
            Visitors can tour a model home which emphasizes the use of plastics
            -- and win its equivalent in a $100,000 contest.
          </>
        ),
        copy: (
          <>
            The first house to use laminated plastic for all interior walls, the
            model also has modern Formica furnishings and is designed for maximum
            privacy and easy maintenance. The skylighted interior is viewed from
            an enlarged hallway, where there is a 13-minute tape-recorded tour of
            animated displays. There are exhibits of products by Formica and
            other divisions of American Cyanamid Company.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "$100,000 SWEEPSTAKES.",
            labelFace: "arial",
            body: (
              <>
                {" "}
                Visitors may enter the 1965 Sweepstakes by filling out a form.
                Grand prize is a complete Formica World&apos;s Fair House, lot
                included, built anywhere in the U.S. There are also 2,500 other
                prizes.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/formica01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/formica01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/formicamap",
      }}
    />
  );
}
