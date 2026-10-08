import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN06_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "The Jewel of the Fair — Spain — nywf64.com",
  description:
    "The Jewel of the Fair — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — The Jewel of the Fair (legacy spain06.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain06Page() {
  return (
    <SpainEssayPage
      slug="spain06"
      title="The Jewel of the Fair"
      blocks={SPAIN06_BLOCKS}
      previousHref="/spain05"
      nextHref="/spain07"
    />
  );
}
