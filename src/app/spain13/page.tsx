import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN13_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "Fund Raising for the Pavilion in Saint Louis — Spain — nywf64.com",
  description:
    "Fund Raising for the Pavilion in Saint Louis — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — Fund Raising for the Pavilion in Saint Louis (legacy spain13.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain13Page() {
  return (
    <SpainEssayPage
      slug="spain13"
      title="Fund Raising for the Pavilion in Saint Louis"
      blocks={SPAIN13_BLOCKS}
      previousHref="/spain12"
      nextHref="/spain14"
    />
  );
}
