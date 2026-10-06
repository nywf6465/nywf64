import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FirnatNavChrome } from "@/components/FirnatNavChrome";

export const metadata: Metadata = {
  title: "Folder: The Bank at the Fair — First National City Bank — nywf64.com",
  description:
    "The Bank at the Fair folder pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * First National City Bank folder — The Bank at the Fair.
 * Body from legacy firnat04.html (split tiles; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 * Last topic — NEXT returns to overview.
 */
export default function Firnat04Page() {
  return (
    <AdvertisingPage
      heroLabel="First National City Bank"
      titleId="firnat04-title"
      title="Folder: The Bank at the Fair"
      hero={{
        src: "/images/firnatoverview/hero-banner.jpg",
        alt: "First National City Bank at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<FirnatNavChrome />}
      previousHref="/firnat03"
      overviewHref="/firnatoverview"
      nextHref="/firnatoverview"
      collages={[
        {
          columns: 3,
          tiles: [
            {
              src: "/images/firnat04/firnat06.1.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.1",
            },
            {
              src: "/images/firnat04/firnat06.2.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.2",
            },
            {
              src: "/images/firnat04/firnat06.3.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.3",
            },
            {
              src: "/images/firnat04/firnat06.4.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.4",
            },
            {
              src: "/images/firnat04/firnat06.5.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.5",
            },
            {
              src: "/images/firnat04/firnat06.6.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.6",
            },
            {
              src: "/images/firnat04/firnat06.7.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.7",
            },
            {
              src: "/images/firnat04/firnat06.8.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.8",
            },
            {
              src: "/images/firnat04/firnat06.9.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat06.9",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/firnat04/firnat07.1.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.1",
            },
            {
              src: "/images/firnat04/firnat07.2.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.2",
            },
            {
              src: "/images/firnat04/firnat07.3.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.3",
            },
            {
              src: "/images/firnat04/firnat07.4.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.4",
            },
            {
              src: "/images/firnat04/firnat07.5.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.5",
            },
            {
              src: "/images/firnat04/firnat07.6.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.6",
            },
            {
              src: "/images/firnat04/firnat07.7.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.7",
            },
            {
              src: "/images/firnat04/firnat07.8.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.8",
            },
            {
              src: "/images/firnat04/firnat07.9.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat07.9",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/firnat04/firnat08.1.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.1",
            },
            {
              src: "/images/firnat04/firnat08.2.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.2",
            },
            {
              src: "/images/firnat04/firnat08.3.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.3",
            },
            {
              src: "/images/firnat04/firnat08.4.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.4",
            },
            {
              src: "/images/firnat04/firnat08.5.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.5",
            },
            {
              src: "/images/firnat04/firnat08.6.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.6",
            },
            {
              src: "/images/firnat04/firnat08.7.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.7",
            },
            {
              src: "/images/firnat04/firnat08.8.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.8",
            },
            {
              src: "/images/firnat04/firnat08.9.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat08.9",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/firnat04/firnat09.1.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.1",
            },
            {
              src: "/images/firnat04/firnat09.2.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.2",
            },
            {
              src: "/images/firnat04/firnat09.3.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.3",
            },
            {
              src: "/images/firnat04/firnat09.4.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.4",
            },
            {
              src: "/images/firnat04/firnat09.5.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.5",
            },
            {
              src: "/images/firnat04/firnat09.6.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.6",
            },
            {
              src: "/images/firnat04/firnat09.7.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.7",
            },
            {
              src: "/images/firnat04/firnat09.8.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.8",
            },
            {
              src: "/images/firnat04/firnat09.9.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat09.9",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/firnat04/firnat10.1.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat10.1",
            },
            {
              src: "/images/firnat04/firnat10.2.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat10.2",
            },
            {
              src: "/images/firnat04/firnat10.3.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat10.3",
            },
            {
              src: "/images/firnat04/firnat10.4.jpg",
              width: 301,
              height: 401,
              alt: "The Bank at the Fair folder panel firnat10.4",
            },
            {
              src: "/images/firnat04/firnat10.5.jpg",
              width: 301,
              height: 401,
              alt: "The Bank at the Fair folder panel firnat10.5",
            },
            {
              src: "/images/firnat04/firnat10.6.jpg",
              width: 300,
              height: 401,
              alt: "The Bank at the Fair folder panel firnat10.6",
            },
            {
              src: "/images/firnat04/firnat10.7.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat10.7",
            },
            {
              src: "/images/firnat04/firnat10.8.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat10.8",
            },
            {
              src: "/images/firnat04/firnat10.9.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat10.9",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/firnat04/firnat11.1.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.1",
            },
            {
              src: "/images/firnat04/firnat11.2.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.2",
            },
            {
              src: "/images/firnat04/firnat11.3.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.3",
            },
            {
              src: "/images/firnat04/firnat11.4.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.4",
            },
            {
              src: "/images/firnat04/firnat11.5.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.5",
            },
            {
              src: "/images/firnat04/firnat11.6.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.6",
            },
            {
              src: "/images/firnat04/firnat11.7.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.7",
            },
            {
              src: "/images/firnat04/firnat11.8.jpg",
              width: 301,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.8",
            },
            {
              src: "/images/firnat04/firnat11.9.jpg",
              width: 300,
              height: 400,
              alt: "The Bank at the Fair folder panel firnat11.9",
            },
          ],
        },
      ]}
    />
  );
}
