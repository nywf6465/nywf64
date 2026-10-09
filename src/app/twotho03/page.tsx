import type { Metadata } from "next";
import { TwothoNavChrome } from "@/components/TwothoNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Two Thousand Tribes — nywf64.com",
  description:
    "Two Thousand Tribes pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Two Thousand Tribes postcards page — “postcards” standard.
 * Body from legacy twotho03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Twotho03Page() {
  return (
    <PostcardPage
      heroLabel="Two Thousand Tribes"
      titleId="twotho03-title"
      hero={{
        src: "/images/twothooverview/hero-banner.jpg",
        alt: "Two Thousand Tribes pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<TwothoNavChrome />}
      previousHref="/twotho02"
      overviewHref="/twothooverview"
      nextHref="/twotho04"
      entries={[
        {
          front: {
            src: "/images/twotho03/89861-B.jpg",
            width: 450,
            height: 286,
            alt: "Wycliffe Bible Translators / 2000 Tribes Pavilion",
          },
          reverse: {
            src: "/images/twotho03/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Wycliffe Bible Translators / 2000 Tribes Pavilion",
          },
          meta: [
            "Wycliffe Bible Translators / 2000 Tribes",
            "Pavilion",
            exhibitor,
            "No. 89861-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Pavilion of 2000 Tribes",
            <span key="auction" style={{ color: "red" }}>
              Source: Online Auction
            </span>,
          ],
        },
        {
          front: {
            src: "/images/twotho03/72972.jpg",
            width: 450,
            height: 290,
            alt: '"From Savage to Citizen" - Conversion',
          },
          reverse: {
            src: "/images/twotho03/72972reverse.jpg",
            width: 300,
            height: 142,
            alt: 'Reverse — "From Savage to Citizen" - Conversion',
          },
          meta: [
            "Wycliffe Bible Translators / 2000 Tribes",
            '"From Savage to Citizen" - Conversion',
            exhibitor,
            "No. 72972",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Dan Bush Associates",
          ],
        },
        {
          front: {
            src: "/images/twotho03/74058.jpg",
            width: 450,
            height: 287,
            alt: '"From Savage to Citizen" - Massacre',
          },
          reverse: {
            src: "/images/twotho03/74058reverse.jpg",
            width: 300,
            height: 116,
            alt: 'Reverse — "From Savage to Citizen" - Massacre',
          },
          meta: [
            "Wycliffe Bible Translators / 2000 Tribes",
            '"From Savage to Citizen" - Massacre',
            exhibitor,
            "No. 74058",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
