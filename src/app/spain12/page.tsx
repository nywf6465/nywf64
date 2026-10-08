import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN12_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "After the Fair - On to Saint Louis! — Spain — nywf64.com",
  description:
    "After the Fair - On to Saint Louis! — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — After the Fair - On to Saint Louis! (legacy spain12.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain12Page() {
  return (
    <SpainEssayPage
      slug="spain12"
      title="After the Fair - On to Saint Louis!"
      blocks={SPAIN12_BLOCKS}
      previousHref="/spain11"
      nextHref="/spain13"
    />
  );
}
