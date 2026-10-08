import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN05_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Spain — nywf64.com",
  description:
    "Pavilion of Spain groundbreaking pamphlet and ceremony transcripts — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — Pamphlet: Groundbreaking (legacy spain05.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain05Page() {
  return (
    <SpainEssayPage
      slug="spain05"
      title="Pamphlet: Groundbreaking"
      blocks={SPAIN05_BLOCKS}
      previousHref="/spain04"
      nextHref="/spain06"
    />
  );
}
