import type { Metadata } from "next";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { JordanSequencePage } from "@/components/JordanSequencePage";

export const metadata: Metadata = {
  title: "Fair News — Jordan — nywf64.com",
  description:
    "Fair News — Jordan Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Jordan07Page() {
  return (
    <JordanSequencePage
      heroLabel="Jordan"
      title={
        <>
          <em>Fair News</em>
        </>
      }
      titleId="jordan07-title"
      columns={1}
      hero={{
        src: "/images/jordanoverview/hero-banner.jpg",
        alt: "Jordan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JordanNavChrome />}
      previousHref="/jordan06"
      overviewHref="/jordanoverview"
      nextHref="/jordan08"
      scans={[
        {
          src: "/images/jordan07/jordan09.jpg",
          width: 600,
          height: 141,
          alt: "Fair News Banner",
        },
        {
          src: "/images/jordan07/jordan10.jpg",
          width: 300,
          height: 157,
          alt: "Artist's Rendering - Jordan Pavilion",
        },
        {
          src: "/images/jordan07/jordan11.jpg",
          width: 600,
          height: 135,
          alt: "Fair News",
        },
        {
          src: "/images/jordan07/jordan12.jpg",
          width: 100,
          height: 115,
          alt: "Fair News",
        },
        {
          src: "/images/jordan07/jordan13.jpg",
          width: 600,
          height: 139,
          alt: "Fair News",
        },
        {
          src: "/images/jordan07/jordan40.jpg",
          width: 600,
          height: 219,
          alt: "Fair News",
        },
      ]}
    />
  );
}
