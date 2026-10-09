import type { Metadata } from "next";
import { CitservNavChrome } from "@/components/CitservNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Cities Service Band — nywf64.com",
  description:
    "Cities Service World's Fair Band of America entries from the 1964 and 1965 Official Guide Books — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Cities Service Band guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy citserv01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Not included in either Official Guide Book; pavilion entry only (no Locate It).
 */
export default function Citserv01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Cities Service World's Fair Band of America"
      titleId="citserv01-title"
      hero={{
        src: "/images/citservoverview/hero-banner.jpg",
        alt: "Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CitservNavChrome />}
      previousHref="/citservoverview"
      nextHref="/citserv02"
      guide1964={{
        cover: {
          src: "/images/citserv01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this attraction was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/citserv01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this attraction was not included in the 1965 Official Guide Book",
      }}
      map={{
        entry: {
          logo: {
            src: "/images/citserv01/citserv09.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: "CITIES SERVICE WORLD'S FAIR BAND OF AMERICA",
          copy: (
            <>
              Paul Lavalle directs the Cities Service World&apos;s Fair Band of
              America. Six concerts a day throughout the Fairgrounds on a
              custom-built moveable bandstand.
            </>
          ),
        },
      }}
    />
  );
}
