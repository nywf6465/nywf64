import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN09_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "The 1965 Season — Spain — nywf64.com",
  description:
    "The 1965 Season — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — The 1965 Season (legacy spain09.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain09Page() {
  return (
    <SpainEssayPage
      slug="spain09"
      title="The 1965 Season"
      blocks={SPAIN09_BLOCKS}
      previousHref="/spain08"
      nextHref="/spain10"
    />
  );
}
