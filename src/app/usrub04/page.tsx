import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";

export const metadata: Metadata = {
  title: "Advertising — U.S. Rubber — nywf64.com",
  description:
    "U.S. Royal Giant Tire Ferris Wheel national advertising from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Rubber advertising page — “advertising” standard.
 * Body from legacy usrub04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Usrub04Page() {
  return (
    <AdvertisingPage
      heroLabel="U.S. Rubber"
      titleId="usrub04-title"
      hero={{
        src: "/images/usruboverview/hero-banner.jpg",
        alt: "U.S. Rubber at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UsrubNavChrome />}
      previousHref="/usrub03"
      overviewHref="/usruboverview"
      nextHref="/usrub05"
      columns={1}
      tiles={[
        {
          src: "/images/usrub04/usrub04.jpg",
          width: 600,
          height: 285,
          alt: "US Royal Giant Tire Ferris Wheel advertisement panel 1",
        },
        {
          src: "/images/usrub04/usrub05.jpg",
          width: 600,
          height: 396,
          alt: "US Royal Giant Tire Ferris Wheel advertisement panel 2",
        },
        {
          src: "/images/usrub04/usrub06.jpg",
          width: 600,
          height: 119,
          alt: "US Royal Giant Tire Ferris Wheel advertisement panel 3",
        },
      ]}
      sources={[
        <>
          <strong>
            National Advertising for the US Royal Giant Tire Ferris Wheel at the
            1964/1965 NY World&apos;s Fair
          </strong>
        </>,
        "SOURCE: The New York Times Magazine, April 19, 1964",
      ]}
    />
  );
}
