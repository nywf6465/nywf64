import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — World of Food — nywf64.com",
  description:
    "World of Food pavilion entries from the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World of Food guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy worfoo01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1964 & 1965: not included in the Official Guide Books; pavilion entry under map.
 */
export default function Worfoo01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="World of Food"
      titleId="worfoo01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/worfoooverview/hero-banner.jpg",
        alt: "World of Food pavilion site at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WorfooNavChrome />}
      previousHref="/worfoooverview"
      nextHref="/worfoo02"
      guide1964={{
        cover: {
          src: "/images/worfoo01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this exhibit was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/worfoo01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this exhibit was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/worfoo01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/worfoo01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/worfoomap",
        entry: {
          logo: {
            src: "/images/worfoo01/worfoo.gif",
            width: 60,
            height: 30,
            alt: "",
          },
          name: "",
          copy: (
            <>
              <i>
                The World of Food Pavilion was to have housed exhibits relating
                to nutrition and the food industry. The pavilion was started but
                never completed.
              </i>
              <br />
              <br />
              Ground was broken for the pavilion in early 1963. Exhibitors in the
              pavilion were to include Lipton Tea, Hershey Chocolate, Adolph&apos;s
              Inc., Pepsi-Cola and Roman Products.
            </>
          ),
        },
      }}
    />
  );
}
