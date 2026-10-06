import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";

export const metadata: Metadata = {
  title: 'Brochure: Fall In — Continental Insurance — nywf64.com',
  description:
    'Fall In brochure page scans from the Continental Insurance pavilion — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * Continental Insurance — Brochure: Fall In.
 * Body from legacy conins08.html (page-scan collage gallery).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Conins08Page() {
  return (
    <AdvertisingPage
      heroLabel="Continental Insurance"
      titleId="conins08-title"
      title='Brochure: Fall In'
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins07"
      overviewHref="/coninsoverview"
      nextHref="/conins09"
      collages={[
    {
      columns: 1,
      tiles: [
        {
          src: "/images/conins/conins11.01.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins11.02.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins11.03.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins11.04.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
      ],
    },
    {
      columns: 2,
      tiles: [
        {
          src: "/images/conins/conins12.01.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins12.02.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins12.03.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins12.04.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins12.05.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins12.06.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins12.07.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins12.08.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
      ],
    },
    {
      columns: 2,
      tiles: [
        {
          src: "/images/conins/conins13.01.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins13.02.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins13.03.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins13.04.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
      ],
    },
    {
      columns: 2,
      tiles: [
        {
          src: "/images/conins/conins14.01.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins14.02.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins14.03.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins14.04.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
      ],
    },
    {
      columns: 2,
      tiles: [
        {
          src: "/images/conins/conins15.01.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins15.02.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins15.03.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins15.04.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
      ],
    },
    {
      columns: 2,
      tiles: [
        {
          src: "/images/conins/conins16.01.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins16.02.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins16.03.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
        {
          src: "/images/conins/conins16.04.jpg",
          width: 350,
          height: 200,
          alt: "Brochure Fall In — page scan",
        },
      ],
      sources: [
        <>
          SOURCE: Brochure: <em>Fall In</em>
        </>,
      ],
    },
      ]}
    />
  );
}
