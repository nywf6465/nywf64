import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN10_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "Art Tour — Spain — nywf64.com",
  description:
    "Art Tour — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — Art Tour (legacy spain10.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain10Page() {
  return (
    <SpainEssayPage
      slug="spain10"
      title="Art Tour"
      blocks={SPAIN10_BLOCKS}
      previousHref="/spain09"
      nextHref="/spain11"
    />
  );
}
