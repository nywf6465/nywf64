import type { Metadata } from "next";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { JordanSequencePage } from "@/components/JordanSequencePage";

export const metadata: Metadata = {
  title: "Jordan News and Views — Jordan — nywf64.com",
  description:
    "Jordan News and Views — Jordan Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Jordan08Page() {
  return (
    <JordanSequencePage
      heroLabel="Jordan"
      title={
        <>
          <em>Jordan News and Views</em>
        </>
      }
      titleId="jordan08-title"
      columns={1}
      hero={{
        src: "/images/jordanoverview/hero-banner.jpg",
        alt: "Jordan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JordanNavChrome />}
      previousHref="/jordan07"
      overviewHref="/jordanoverview"
      nextHref="/jordan09"
      scans={[
        {
          src: "/images/jordan08/jordan38.jpg",
          width: 600,
          height: 184,
          alt: "Jordan News and Views",
        },
        {
          src: "/images/jordan08/jordan32.jpg",
          width: 290,
          height: 373,
          alt: "Jordan News and Views",
        },
        {
          src: "/images/jordan08/jordan33.jpg",
          width: 600,
          height: 188,
          alt: "Jordan News and Views",
        },
        {
          src: "/images/jordan08/jordan34.jpg",
          width: 450,
          height: 284,
          alt: "Jordan News and Views",
        },
        {
          src: "/images/jordan08/jordan35.jpg",
          width: 290,
          height: 325,
          alt: "Jordan News and Views",
        },
        {
          src: "/images/jordan08/jordan39.jpg",
          width: 100,
          height: 105,
          alt: "Jordan News and Views",
        },
        {
          src: "/images/jordan08/jordan36.jpg",
          width: 450,
          height: 374,
          alt: "Jordan News and Views",
        },
        {
          src: "/images/jordan08/jordan37.jpg",
          width: 600,
          height: 164,
          alt: "Jordan News and Views",
        },
      ]}
    />
  );
}
