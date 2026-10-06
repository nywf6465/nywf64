import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";

export const metadata: Metadata = {
  title: "Article: Continental in Cinema-76 — Continental Insurance — nywf64.com",
  description:
    "Business Screen Magazine article Continental In Cinema-76 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance — Article: Continental in Cinema-76.
 * Body from legacy conins11.html (2×2 page collage).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Conins11Page() {
  return (
    <AdvertisingPage
      heroLabel="Continental Insurance"
      titleId="conins11-title"
      title="Article: Continental in Cinema-76"
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins10"
      overviewHref="/coninsoverview"
      nextHref="/coninsoverview"
      columns={2}
      tiles={[
        {
          src: "/images/conins/cons32.01.jpg",
          width: 400,
          height: 275,
          alt: "Continental In Cinema-76 article page 1",
        },
        {
          src: "/images/conins/cons32.03.jpg",
          width: 400,
          height: 275,
          alt: "Continental In Cinema-76 article page 2",
        },
        {
          src: "/images/conins/cons32.02.jpg",
          width: 400,
          height: 275,
          alt: "Continental In Cinema-76 article page 3",
        },
        {
          src: "/images/conins/cons32.04.jpg",
          width: 400,
          height: 275,
          alt: "Continental In Cinema-76 article page 4",
        },
      ]}
      sources={[
        <>
          Source:{" "}
          <em>Business Screen Magazine</em>, Vol. 25, No. 3, March, 1964
        </>,
      ]}
    />
  );
}
