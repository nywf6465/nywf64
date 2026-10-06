import type { Metadata } from "next";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Continental Insurance — nywf64.com",
  description:
    "Continental Insurance pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance photograph album — “photographs” standard.
 * Body from legacy conins05.html (Photograph Scrap Book banner omitted).
 * Bottom publication photo: stitched cons43.01–04 into cons43.jpg (unisph12 pattern).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Conins05Page() {
  return (
    <PhotographsPage
      heroLabel="Continental Insurance"
      titleId="conins05-title"
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins04"
      overviewHref="/coninsoverview"
      nextHref="/conins06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/arch/5452Large.jpg",
                width: 400,
                height: 281,
                alt: "Architectural Model of the Continental Insurance Pavilion",
              },
              title: "Architectural Model of the Continental Insurance Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/mainliner/633-71.jpg",
                width: 267,
                height: 400,
                alt: "Continental Insurance Company Pavilion",
              },
              title: "Continental Insurance Company Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/conins/cons29.jpg",
                width: 538,
                height: 574,
                alt: "Continental Insurance Company Pavilion as seen from Better Living Building",
              },
              title:
                "Continental Insurance Company Pavilion as seen from Better Living Building",
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/conins/cons44.jpg",
                width: 276,
                height: 400,
                alt: "Continental Insurance Company Pavilion",
              },
              title: "Continental Insurance Company Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/conins/cons45.jpg",
                width: 400,
                height: 290,
                alt: "Continental Insurance Company Pavilion",
              },
              title: "Continental Insurance Company Pavilion",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/conins/conins04.jpg",
                width: 380,
                height: 360,
                alt: "THE BITTER WINTER OF '77 Valley Forge encampment model",
              },
              title: (
                <>
                  THE BITTER WINTER OF &apos;77 This snowy model of the Valley
                  Forge encampment captures the mood of the low point in the
                  Revolution. It is part of a large Continental Insurance Company
                  exhibit that reconstructs that era in models, music, paintings
                  and transparencies.
                </>
              ),
              source: (
                <>
                  SOURCE:{" "}
                  <em>Official Souvenir Book</em>, New York World&apos;s Fair
                  1964-1965
                </>
              ),
            },
            {
              image: {
                src: "/images/conins/cons43.jpg",
                width: 600,
                height: 500,
                alt: "A NAVAL BATTLE — Bonhomme Richard vs Serapis diorama",
              },
              title: (
                <>
                  A NAVAL BATTLE is re-created for fascinated spectators as John
                  Paul Jones&apos;s &quot;Bonhomme Richard&quot; (right) defeats
                  the &quot;Serapis&quot; in a Continental Insurance diorama.
                  Elsewhere, realistic displays bring to life historic figures and
                  such distant places as Israel and Malaysia.
                </>
              ),
              source: (
                <>
                  SOURCE:{" "}
                  <em>Official Guide Book, New York World&apos;s Fair 1964</em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
