import type { Metadata } from "next";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Seven-Up — nywf64.com",
  description:
    "Seven-Up pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy sevup01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Sevup01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Seven-Up"
      titleId="sevup01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map"
      hero={{
        src: "/images/sevupoverview/hero-banner.jpg",
        alt: "Seven-Up at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SevupNavChrome />}
      previousHref="/sevupoverview"
      nextHref="/sevup02"
      guide1964={{
        cover: {
          src: "/images/sevup01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sevup01/logo-1964.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "SEVEN-UP",
        copy: (
          <>
            An international sandwich garden serves up, buffet style, the food
            specialties of 16 countries in elaborate sandwiches, plus all the
            7-Up the customer can drink. Sample sandwiches: sliced lamb on Scotch
            barley bread, Lomi-Lomi salmon n Aloha coconut bread,
            chicken-ginger-coconut on cinnamon swirl bread. Four-sandwich
            platters, with relishes, cheeses and candy, cost $1.55. A five-piece
            ensemble entertains daily, playing American show tunes as well as
            music from all over Europe and Latin America. A futuristic tower
            rises 107 feet above the pavilion; a clock at the top is regulated by
            the precise timekeeping apparatus in the Swiss pavilion several
            blocks away.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/sevup01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sevup01/logo-1965.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "SEVEN-UP",
        nameFace: "arial",
        summary: (
          <>
            This open-air cafe offers musical entertainment and an international
            sandwich buffet.
          </>
        ),
        copy: (
          <>
            Under a futuristic clock-tower, the specialties of 16 nations are
            served. For $1.50 the visitor gets his choice of any four sandwiches
            plus trimmings and as much Seven-Up as he can drink. A typical
            selection might include: Holland ham on poppyseed bread, tuna
            Espagnole on Toledo bread, curried shrimp on parata, and Nova Scotia
            salmon with cream cheese.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/sevup01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sevup01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/sevupmap",
      }}
    />
  );
}
