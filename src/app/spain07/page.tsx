import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN07_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "The 1964 Season — Spain — nywf64.com",
  description:
    "The 1964 Season — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — The 1964 Season (legacy spain07.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain07Page() {
  return (
    <SpainEssayPage
      slug="spain07"
      title="The 1964 Season"
      blocks={SPAIN07_BLOCKS}
      previousHref="/spain06"
      nextHref="/spain08"
    />
  );
}
