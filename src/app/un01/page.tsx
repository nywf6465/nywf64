import type { Metadata } from "next";
import Link from "next/link";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { UnNavChrome } from "@/components/UnNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — United Nations — nywf64.com",
  description:
    "United Nations exhibit entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Nations guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy un01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965: not included in the Official Guide Books; pavilion entry under
 * the map column. 1964 column notes the Sierra Leone tenancy.
 */
export default function Un01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="United Nations"
      titleId="un01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/unoverview/hero-banner.jpg",
        alt: "United Nations exhibit at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnNavChrome />}
      previousHref="/unoverview"
      nextHref="/un02"
      guide1964={{
        cover: {
          src: "/images/un01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "The description of this exhibit was not included in the 1964 Official Guide Book",
        copy: (
          <>
            In 1964 the pavilion housed the{" "}
            <Link href="/sierra01">Sierra Leone</Link> Exhibit.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/un01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "The description of this exhibit was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/un01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/un01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/unmap",
        entry: {
          logo: {
            src: "/images/un01/sierra03.jpg",
            width: 150,
            height: 90,
            alt: "",
          },
          name: "UNITED NATIONS",
          copy: (
            <>
              The United Nations exhibit features materials from the UN
              Secretariat and a display of stamps from the UN Postal
              Administration is shown.
            </>
          ),
        },
      }}
    />
  );
}
