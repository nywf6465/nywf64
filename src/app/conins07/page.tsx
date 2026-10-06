import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";

export const metadata: Metadata = {
  title: 'Brochure: Your Guide to the Continental Insurance Pavilion — Continental Insurance — nywf64.com',
  description:
    'Your Guide to the Continental Insurance Pavilion brochure page scans — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * Continental Insurance — Brochure: Your Guide to the Continental Insurance Pavilion.
 * Body from legacy conins07.html (page-scan collage gallery).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Conins07Page() {
  return (
    <AdvertisingPage
      heroLabel="Continental Insurance"
      titleId="conins07-title"
      title='Brochure: Your Guide to the Continental Insurance Pavilion'
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins06"
      overviewHref="/coninsoverview"
      nextHref="/conins08"
      collages={[
    {
      columns: 3,
      tiles: [
        {
          src: "/images/conins/conins02.01.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins02.02.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins02.03.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
      ],
    },
    {
      columns: 3,
      tiles: [
        {
          src: "/images/conins/conins03.01.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins03.02.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins03.03.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
      ],
    },
    {
      columns: 3,
      tiles: [
        {
          src: "/images/conins/conins09.01.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins09.02.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins09.03.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins09.04.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins09.05.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins09.06.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins09.07.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins09.08.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins09.09.jpg",
          width: 300,
          height: 263,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
      ],
    },
    {
      columns: 3,
      tiles: [
        {
          src: "/images/conins/conins04.01.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins04.02.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins04.03.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
      ],
    },
    {
      columns: 3,
      tiles: [
        {
          src: "/images/conins/conins05.01.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins05.02.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins05.03.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins06.01.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins06.02.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins06.03.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins07.01.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins07.02.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins07.03.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins08.01.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins08.02.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins08.03.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
      ],
    },
    {
      columns: 3,
      tiles: [
        {
          src: "/images/conins/conins10.01.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins10.02.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
        {
          src: "/images/conins/conins10.03.jpg",
          width: 300,
          height: 396,
          alt: "Your Guide to the Continental Insurance Pavilion — page scan",
        },
      ],
      sources: [
        <>
          Source: Brochure:{" "}
          <em>Your Guide to the Continental Insurance Pavilion</em>
        </>,
      ],
    },
      ]}
    />
  );
}
