import type { Metadata } from "next";
import { CengriNavChrome } from "@/components/CengriNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Century Grill — nywf64.com",
  description:
    "Century Grill entries from the 1964 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Century Grill guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy cengri01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1965: site became Steaktown USA. Locate It → /cengrimap (Transportation Area).
 */
export default function Cengri01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Century Grill"
      titleId="cengri01-title"
      hero={{
        src: "/images/cengrioverview/hero-banner.jpg",
        alt: "Century Grill at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CengriNavChrome />}
      previousHref="/cengrioverview"
      nextHref="/cengri02"
      guide1964={{
        cover: {
          src: "/images/cengri01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/cengri01/cengri-logo.gif",
          width: 144,
          height: 79,
          alt: "Century Grill",
        },
        name: "CENTURY GRILL",
        copy: (
          <>
            This restaurant serves hamburgers prepared with savory sauces, along
            with side dishes from every nation represented at the Fair (Japanese{" "}
            <em>teriyaki</em> sauce, German sauerkraut, etc.) - as well as
            frankfurters, Beer and soft drinks are also available in the dining
            room and at an oval bar.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/cengri01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Century Grill was open for the 1964 Season. In 1965 this building
            housed Steaktown USA.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/cengri01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/cengri01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/cengrimap",
      }}
    />
  );
}
