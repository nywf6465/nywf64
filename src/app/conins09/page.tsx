import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";

export const metadata: Metadata = {
  title: "Order Form: Cinema '76 Record Album — Continental Insurance — nywf64.com",
  description:
    "Cinema '76 Record Album order form from the Continental Insurance pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance — Order Form: Cinema '76 Record Album.
 * Body from legacy conins09.html (page-scan collage gallery).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Conins09Page() {
  return (
    <AdvertisingPage
      heroLabel="Continental Insurance"
      titleId="conins09-title"
      title="Order Form: Cinema '76 Record Album"
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins08"
      overviewHref="/coninsoverview"
      nextHref="/conins10"
      collages={[
    {
      columns: 2,
      tiles: [
        {
          src: "/images/conins/conins17.01.jpg",
          width: 250,
          height: 280,
          alt: "Cinema '76 Record Album order form — page scan",
        },
        {
          src: "/images/conins/conins17.02.jpg",
          width: 250,
          height: 280,
          alt: "Cinema '76 Record Album order form — page scan",
        },
      ],
    },
    {
      columns: 2,
      tiles: [
        {
          src: "/images/conins/conins18.01.jpg",
          width: 250,
          height: 280,
          alt: "Cinema '76 Record Album order form — page scan",
        },
        {
          src: "/images/conins/conins18.02.jpg",
          width: 250,
          height: 280,
          alt: "Cinema '76 Record Album order form — page scan",
        },
        {
          src: "/images/conins/conins18.03.jpg",
          width: 250,
          height: 280,
          alt: "Cinema '76 Record Album order form — page scan",
        },
        {
          src: "/images/conins/conins18.04.jpg",
          width: 250,
          height: 280,
          alt: "Cinema '76 Record Album order form — page scan",
        },
      ],
    },
    {
      columns: 2,
      tiles: [
        {
          src: "/images/conins/conins19.01.jpg",
          width: 250,
          height: 280,
          alt: "Cinema '76 Record Album order form — page scan",
        },
        {
          src: "/images/conins/conins19.02.jpg",
          width: 250,
          height: 280,
          alt: "Cinema '76 Record Album order form — page scan",
        },
      ],
      sources: [
        <>SOURCE: Order Form: Cinema &apos;76 Record Album</>,
      ],
    },
      ]}
    />
  );
}
