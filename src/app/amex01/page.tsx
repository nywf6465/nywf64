import type { Metadata } from "next";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — American Express — nywf64.com",
  description:
    "American Express pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Express guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy amex01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Amex01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="American Express"
      titleId="amex01-title"
      hero={{
        src: "/images/amexoverview/hero-banner.jpg",
        alt: "American Express at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<AmexNavChrome />}
      previousHref="/amexoverview"
      nextHref="/amex02"
      guide1964={{
        cover: {
          src: "/images/amex01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/amex01/amex-logo-1964.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "AMERICAN EXPRESS",
        copy: (
          <>
            At the entrance to this pavilion, a million dollars&apos; worth of
            real currency from many nations &quot;grows&quot; on a money tree;
            inside, the official scale model of the World&apos;s Fair is on
            exhibit. The pavilion also offers various services including foreign
            exchange, check cashing, the sale of American Express travelers
            cheques and information on all aspects of the Fair.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "THE FAIR IN MINIATURE.",
            body: (
              <>
                The official model of the World&apos;s Fair measures over 54 by
                21 feet. As exhibits are pointed out, the model&apos;s lighting
                goes from day to night to day again.
              </>
            ),
          },
          {
            label: "TOUCHES OF HISTORY.",
            body: (
              <>
                Memorabilia of American Express and its subsidiary, the Wells
                Fargo Company, date from the days of the Wild West.
              </>
            ),
          },
          {
            label: "FINANCE SECTION.",
            body: (
              <>
                Multilingual attendants sell money orders and cash personal
                checks if the visitor has an American Express Credit Card, or on
                the basis of telegraphed clearance from his hometown bank.
              </>
            ),
          },
          {
            label: "INFORMATION SECTION.",
            body: (
              <>
                Clerks offer travel service and information, and answer questions
                about the World&apos;s Fair.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/amex01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/amex01/amex-logo-1965.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "AMERICAN EXPRESS",
        summary: (
          <>
            Featured are banking and travel services, an international
            &quot;money tree,&quot; an art exhibit and a huge scale model of the
            Fair.
          </>
        ),
        copy: (
          <>
            Multilingual clerks exchange foreign currencies, sell and cash
            travelers cheques, and honor personal checks when the company&apos;s
            credit card is presented or when clearance from the visitor&apos;s
            hometown bank is received by telegraph. Western Union services, as
            well as travel information, may be obtained.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "MONEY TREE.",
            body: (
              <>
                A million dollars in currencies from many lands form the
                &quot;leaves of a striking &quot;tree.&quot;
              </>
            ),
          },
          {
            label: "MINIATURE FAIR.",
            body: (
              <>
                Highlights of the Fair are shown and described on a model
                measuring 54 by 21 feet.
              </>
            ),
          },
          {
            label: "ART EXHIBIT.",
            body: (
              <>
                The works of more than 60 new artists and sculptors, American and
                foreign, are on view.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/amex01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/amex01/industry-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/amexmap",
      }}
    />
  );
}
