import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN08_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "1965 Pavilion Plan — Spain — nywf64.com",
  description:
    "1965 Pavilion Plan — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — 1965 Pavilion Plan (legacy spain08.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain08Page() {
  return (
    <SpainEssayPage
      slug="spain08"
      title="1965 Pavilion Plan"
      blocks={SPAIN08_BLOCKS}
      previousHref="/spain07"
      nextHref="/spain09"
    />
  );
}
