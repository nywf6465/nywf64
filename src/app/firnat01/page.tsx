import type { Metadata } from "next";
import { FirnatNavChrome } from "@/components/FirnatNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — First National City Bank — nywf64.com",
  description:
    "First National City Bank entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAVILION_NAME = (
  <>
    FIRST NATIONAL
    <br />
    CITY BANK
  </>
);

/**
 * First National City Bank guidebook page.
 * Body from legacy firnat01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Locate It → /firnatmap. Adobe PageMill meta only (no body Adobe copy).
 */
export default function Firnat01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="First National City Bank"
      titleId="firnat01-title"
      hero={{
        src: "/images/firnatoverview/hero-banner.jpg",
        alt: "First National City Bank at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<FirnatNavChrome />}
      previousHref="/firnatoverview"
      nextHref="/firnat02"
      guide1964={{
        cover: {
          src: "/images/firnat01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/firnat01/firnatlogo64.gif",
          width: 144,
          height: 91,
          alt: "",
        },
        name: PAVILION_NAME,
        copy: (
          <>
            New York&apos;s First National City Bank, which is the only bank with
            a branch at the Fair, has two buildings - one for visitors and one
            for the use of Fair exhibitors and employees, located near the Oregon
            pavilion (No. 4).
            <br />
            <br />
            <strong>
              <em>&para; </em>
            </strong>
            <em>The Visitors&apos; Branch</em> has a multilingual staff and
            specializes in foreign currency transactions. Beside the entrance to
            the glass-fronted building is a revolving geophysical globe nearly 20
            feet in circumference; a 30-foot pylon flies the flags of the 35
            nations where the bank has branches.
            <br />
            <br />
            <strong>
              <em>&para; </em>
            </strong>
            <em>The Service Branch</em> expects to handle more than $500 million
            of regular banking transactions during the two years of the Fair.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/firnat01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/firnat01/firnatlogo.gif",
          width: 144,
          height: 91,
          alt: "",
        },
        name: PAVILION_NAME,
        nameFace: "arial",
        summary: (
          <>
            The Fair&apos;s bank has a multilingual staff and specializes in
            foreign currency transactions.
          </>
        ),
        copy: (
          <>
            In this handsome, glass-fronted building, open from 10 a.m. to 10
            p.m., visitors, with proper identification, may cash checks and
            convert foreign currency into dollars.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/firnat01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/firnat01/indsmlmap.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/firnatmap",
      }}
    />
  );
}
